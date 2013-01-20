import glob
import os
import json
import logging
import time
# Biopyton version 1.60
from Bio.PDB.MMCIF2Dict import MMCIF2Dict
# RethinkDB Python driver version 1.2.6-2
from rethinkdb import r

def main(mmCIFPath, logPath):
    # Start time
    start = time.time()
    # Logging
    logging.basicConfig(
        filename=logPath,
        level=logging.DEBUG
    )

    # Connect to DB
    try:
        conn = r.connect()
        logging.info('Connected to DB')
        print('Connected to DB')
    except Exception as e:
        logging.debug(e)
        print(e)

    # Create DB and connect to it
    try:
        r.db_create('pdb_compounds').run()
        conn.use('pdb_compounds')
        logging.info('Created DB and connected to it')
        print('Created DB and connected to it')
    except Exception as e:
        logging.debug(e)
        print(e)

    # Create table
    try:
        r.db('pdb_compounds') \
            .table_create('compounds', primary_key='_chem_comp.id') \
            .run()
        logging.info('Created Table: compounds')
        print('Created Table: compounds')
    except Exception as e:
        logging.debug(e)
        print(e)

    # Iterate through the mmCIF files and write to DB
    for cifFile in glob.iglob(os.path.join(mmCIFPath, '*.cif')):
        try:
            data = MMCIF2Dict(cifFile)
            dataJSON = json.dumps(data)         # Creates JSON string
            dataDecoded = json.loads(dataJSON)  # Needed to create valid JSON
            # Insert the data into the DB
            result = r.table('compounds').insert(dataDecoded).run()
            logging.info(
                'Insertion: ID: {id} | Error: {error} | ' \
                'Inserted: {inserted}'.format(
                    id=data['_chem_comp.id'],
                    error=result['errors'],
                    inserted=result['inserted']
                )
            )
            print('Success: ', cifFile)
        except Exception as e:
            logging.debug(
                'File: {filename} | Error: {error}'.format(
                    filename=cifFile,
                    error=e
                )
            )
            print('Error: ', cifFile)
    # Close DB Connection
    conn.close()
    logging.info('Disconnected to DB')
    print('Disconnected from DB')

    # End time
    end = time.time()
    timeTaken = (end - start) / 60
    logging.info('Time Taken: {time} mins'.format(time=timeTaken))
    print('Time Taken: {time} mins'.format(time=timeTaken))

if __name__ == '__main__':
    import sys
    if len(sys.argv) < 3:
        print(
            'To use, pass in mmCIF directory as the first argument and ' +
            'the log file path as the second argument. ' +
            'Both must HAVE trailing "/".'
        )
        sys.exit()
    else:
        # Extract args
        mmCIFPath = sys.argv[1]
        logPath = sys.argv[2]
        print(mmCIFPath, logPath)
        main(mmCIFPath, logPath)