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

  var getCIFData = function( cifID ) {
    $.getJSON('http://127.0.0.1:9000/' + cifID, function( data ){
      scene( data );
    });
  };

  // Get mmCIF compund ID from webpage
  var mmCIF = $('.mmCIF-compound').data('mmcif');
  var mmCIFId = mmCIF.id;
  // Get data from server and render it to page
  getCIFData( mmCIFId );
});