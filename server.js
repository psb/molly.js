var express = require( 'express' );
var r = require( 'rethinkdb' );
var cors = require( './cors' );
// Create app and use cors
var app = express();
app.use(cors);

// Connect to DB
var conn;
r.connect(
  { host:'localhost', port:28015 },
  function( connection ) {
    conn = connection;
    // Select the correct DB
    conn.use('pdb_compounds');
  },
  function( err ) {
    throw "Connection Failed";
  }
);

app.get('/:cifID', function(req, res){
  var query = req.params.cifID.toUpperCase();
  // console.log(query);
  console.log(req.query.callback);
  // Query the DB
  conn.run(
    r.table( 'compounds').get(query, '_chem_comp.id' ),
    function( data ) {
      res.send( data ? data : { error: 'Compound not found' } );
    }
  );
});

app.listen(9000);
console.log('express running at http://localhost: %d', 9000);