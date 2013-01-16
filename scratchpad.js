var path = '/Users/paulbacchus/Work/pdb_viewer/';

var pdbPath = '/Users/paulbacchus/Work/pdb_viewer/pdbs/2BF9.xml';

var util = require('util'),
  fs = require('fs'),
  xml2js = require(path + 'node_modules/xml2js-expat');

// var parser = new xml2js.Parser(function(result, error) {
//   if (!error) {
//     console.log(util.inspect(result));
//   }
//   else {
//       console.error(error);
//   }
//   console.log('Done.');
// });

// fs.readFile(pdbPath, function(err, data) {
//   if (parser.parseString(data)) {
//     console.log('xml2js: successfully parsed file.');
//   }
//   else {
//     console.error('xml2js: parse error: "%s"', parser.getError());
//   }
// });

var output;

var parser = new xml2js.Parser(function(result, error) {
  if (!error) {
    output = result;
  }
  else {
      console.error(error);
  }
  console.log('Done.');
});

fs.readFile(pdbPath, function(err, data) {
  parser.parseString(data);
  console.log('xml2js: successfully parsed file.');
});

fs.writeFile(path + 'pdb2json/2BF9.json', JSON.stringify(output), function(error){
  if (error) console.log(error);
});