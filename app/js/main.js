require.config({

  baseUrl: 'js/',

  shim: {
    'three': {
      exports: 'THREE'
    },
    'detector': {
      exports: 'Detector'
    },
    'stats': {
      exports: 'Stats'
    },
    'trackballControls': {
      deps: [ 'three' ],
      exports: 'TrackballControls'
    },
    'keyboardState': {
      exports: 'KeyboardState'
    },
    'fullScreen': {
      exports: 'FullScreen'
    },
    'windowResize': {
      exports: 'WindowResize'
    }
  },

  paths: {
    // Non-AMD
    three             : 'vendor/threejs/three.min',
    detector          : 'vendor/threejs/Detector',
    stats             : 'vendor/threejs/Stats',
    trackballControls : 'vendor/threejs/TrackballControls',
    keyboardState     : 'vendor/threex/THREEx.KeyboardState',
    fullScreen        : 'vendor/threex/THREEx.FullScreen',
    windowResize      : 'vendor/threex/THREEx.WindowResize',
    // AMD modules
    underscore        : 'vendor/underscore_amd/underscore-min',
    // My AMD modules
    getAtoms          : 'app/get_atoms',
    getBonds          : 'app/get_bonds',
    cpkAtoms          : 'app/cpk_atoms',
    Atom              : 'app/Atom',
    Bond              : 'app/Bond',
    scene             : 'app/scene'
  }

});

require([ 'jquery', 'scene' ], function( $, scene ) {

  var renderScene = function( mmCIFId, sceneWidth, sceneHeight ) {
    $.getJSON('http://127.0.0.1:9000/' + mmCIFId, function( data ){
      if (data.error) {
        $('.mmCIF-compound').append( data.error );
      } else {
        scene( mmCIFId, data, sceneWidth, sceneHeight );
      }
    });
  };

  // Get all nodes with .mmCIF-compound classes
  var compounds = $('.mmCIF-compound');
  // Iterate through the nodes and render to page
  compounds.each( function(){
    // Get mmCIF compund ID from webpage
    var mmCIF = $(this).data('mmcif');
    var mmCIFId = mmCIF.id;
    var sceneWidth = parseInt(mmCIF.width) || parseInt(mmCIF.height) || window.innerWidth;
    var sceneHeight = parseInt(mmCIF.height) || parseInt(mmCIF.width) || window.innerHeight;
    console.log(mmCIFId, sceneWidth, sceneHeight);
    // Get data from server and render it to page
    renderScene( mmCIFId, sceneWidth, sceneHeight );
  });
});