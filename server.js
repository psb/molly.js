var express = require('express');
var app = express();
var r = require('rethinkdb');

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
  // Query the DB
  conn.run(
    r.table( 'compounds').get(query, '_chem_comp.id' ),
    function( data ) {
      // result = data;
      res.send( data ? data : '404' );
    }
  );

});

app.listen(9000);