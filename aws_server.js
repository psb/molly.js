var express = require( 'express' );
var r = require( 'rethinkdb' );
var cors = require( './cors' );
var _ = require( 'underscore' );
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

app.get('/', function( req, res ){
  res.send(  );
});

app.get('/api/pdb_compounds/:cifIDs', function( req, res ){
  var queries = req.params.cifIDs.split('&');
  // Uppercase queries before querying the database
  var upperQueries = _.map( queries, function( qry ){
    return qry.toUpperCase();
  });
  // Query the DB
  r.expr( upperQueries ).map(function( query ){
    return r.table( 'compounds' ).get( query, '_chem_comp.id' );
  }).run().collect(function( results ){
    var data = _.object( queries, results );
    res.send( data );
  });
});

app.listen(80);
console.log('express listeing at: %d', 80);