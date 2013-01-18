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
    // My AMD modules
    cpkAtoms          : 'app/cpk_atoms',
    createSphere      : 'app/createSphere',
    scene             : 'app/scene'
  }

});

require([ 'scene' ], function(scene) {
  
  scene();

});
