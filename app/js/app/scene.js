define([
   'underscore'
  ,'getAtoms'
  ,'getBonds'
  ,'Atom'
  ,'Bond'
  // Modules below are ignored and not passed to the function.
  ,'three'
  ,'detector'
  ,'stats'
  ,'trackballControls'
  ,'keyboardState'
  ,'fullScreen'
  ,'windowResize'
  ], function( _, getAtoms, getBonds, Atom, Bond ){
  return function( divID, mmCIFAttrs, mmCIF ){
    // Extract scene params
    var sceneWidth = parseInt(mmCIFAttrs.width) || parseInt(mmCIFAttrs.height) || window.innerWidth;
    var sceneHeight = parseInt(mmCIFAttrs.height) || parseInt(mmCIFAttrs.width) || window.innerHeight;
    var showStats = mmCIFAttrs.stats || false;
    // Detector
    if ( !Detector.webgl ) Detector.addGetWebGLMessage();
    // Globals
    var container, scene, camera, renderer, controls, stats;
    var keyboard = new THREEx.KeyboardState();
    var clock = new THREE.Clock();

    // Functions
    var init = function(){

      ////////////
      // Set-up //
      ////////////

      // Create a scene
      scene = new THREE.Scene();

      // Camera
      var SCREEN_WIDTH = sceneWidth, SCREEN_HEIGHT = sceneHeight;
      var VIEW_ANGLE = 35, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000;
      camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
      scene.add( camera );
      camera.position.set( 0, 150, 400 );
      camera.lookAt( scene.position );

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
      // renderer.setClearColorHex( 0xBBBBBB, 1 );
      container = document.getElementById( divID );
      container.appendChild( renderer.domElement );

      // Events
      THREEx.WindowResize( renderer, camera );
      THREEx.FullScreen.bindKey({ charCode: 'm'.charCodeAt( 0 ) });

      // Controls
      controls = new THREE.TrackballControls( camera, renderer.domElement );
      // controls.noZoom = true;
      controls.zoomSpeed = 0.05;

      // Stats
      if ( showStats ) {
        stats = new Stats();
        // stats.domElement.style.position = 'absolute';
        // stats.domElement.style.bottom = '0px';
        stats.domElement.style.zIndex = 100;
        container.appendChild( stats.domElement );
      }

      // Lights
      var topLight = new THREE.PointLight( 0xf8f8f8 );
      topLight.position.set( 0, 500, 0 );
      scene.add( topLight );

      var bottomLight = new THREE.PointLight( 0xf8f8f8 );
      bottomLight.position.set( 0, -500, 0 );
      scene.add( bottomLight );

      var farLight = new THREE.PointLight( 0xc6c6c6 );
      farLight.position.set( 0, 0, -500 );
      scene.add( farLight );

      var nearLight = new THREE.PointLight( 0xc6c6c6 );
      nearLight.position.set( 0, 0, 500 );
      scene.add( nearLight );

      // HELPERS

      // scene.add( new THREE.AxisHelper() );

      // var cameraHelper = new THREE.CameraHelper( camera );
      // scene.add( cameraHelper );

      // var topLightHelper = new THREE.PointLightHelper( topLight );
      // scene.add( topLightHelper );

      // var bottomLightHelper = new THREE.PointLightHelper( bottomLight );
      // scene.add( bottomLightHelper );

      // var farLightHelper = new THREE.PointLightHelper( farLight, 100 );
      // scene.add( farLightHelper );

      // var nearLightHelper = new THREE.PointLightHelper( nearLight, 20 );
      // scene.add( nearLightHelper );

      ///////////////////
      // Custom Shapes //
      ///////////////////

      // Parse mmCIF json
      var atomsList = getAtoms( mmCIF );
      var bondsList = getBonds( mmCIF );
      // Add multiple spheres to the scene using the createSphere function
      _.each( atomsList, function( atomObject ){
        var atom = new Atom( atomObject );
        scene.add( atom );
      });
      // Add bonds between atoms to the scene using the createBonds function
      _.each( bondsList, function( bondObject ){
        var bond = new Bond( bondObject, atomsList );
        scene.add( bond );
      });
    };

    var animate = function(){
      requestAnimationFrame( animate );
      render();
      update();
    };

    var update = function(){
      controls.update();
      if (showStats) {
        stats.update();
      }
    };

    var render = function(){
      renderer.render( scene, camera );
    };

    // Run
    init();
    animate();
  };
});