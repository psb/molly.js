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

app.get('/:cifIDs', function( req, res ){
  var queries = req.params.cifIDs.toUpperCase().split('&');
  console.log( queries );
  // Query the DB
  var results = {};
  r.expr( queries ).map(function( query ){
    return r.table( 'compounds' ).get( query, '_chem_comp.id' );
  }).run().collect(function( data ){
    res.send( data );
  });
});

app.listen(9000);
console.log('express running at http://localhost: %d', 9000);