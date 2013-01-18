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
    three             : 'vendor/threejs/three.min',
    detector          : 'vendor/threejs/Detector',
    stats             : 'vendor/threejs/Stats',
    trackballControls : 'vendor/threejs/TrackballControls',
    keyboardState     : 'vendor/threex/THREEx.KeyboardState',
    fullScreen        : 'vendor/threex/THREEx.FullScreen',
    windowResize      : 'vendor/threex/THREEx.WindowResize',
    cpkAtoms          : 'app/cpk_atoms',
    sphere            : 'app/sphere'
  }

});

require([
  'three',
  'detector',
  'stats',
  'trackballControls',
  'keyboardState',
  'fullScreen',
  'windowResize',
  'cpkAtoms',
  'sphere'
  ], function(three, detector, stats, trackballControls, keyboardState, fullScreen, windowResize, cpkAtoms, sphere) {
  
    sphere();

});
