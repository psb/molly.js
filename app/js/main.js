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

require([ 'underscore', 'scene' ], function( _, scene ) {

  var renderScenes = function( mmCIFIds, compoundNodes ) {
    $.getJSON('http://127.0.0.1:9000/api/pdb_compounds/' + mmCIFIds.join('&'), function( data ){
      if ( !data ) {
        $('body').append( 'Error getting data.' );
      } else {
        // Iterate through the mmCIFIds and render a scene
        _.each( compoundNodes, function( node ){
          var mmCIFAttrs = $( node ).data( 'mmcif' );
          var mmCIFId = mmCIFAttrs.id;
          if ( data[ mmCIFId ] ) {
            scene( mmCIFId, mmCIFAttrs, data[ mmCIFId ] );
          } else {
            $( '#' + mmCIFId ).append( 'Compound not found.' );
          }
        });
      }
    });
  };

  // Get all nodes with .mmCIF-compound classes
  var compoundNodes = $('.mmCIF-compound');
  // Get all the compound ids
  var mmCIFIds = _.reduce( compoundNodes, function( myArray, div ){
      myArray.push( $( div ).attr( 'id' ) );
      return myArray;
    }, []
  );
  // Get data and render scenes
  renderScenes( mmCIFIds, compoundNodes );
});