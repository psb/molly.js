define([
   'underscore'
  ,'getAtoms'
  ,'getBonds'
  ,'Atom'
  ,'Bond'
  // Temp import of CFF file
  ,'CFF'
  // Modules below are ignored and not passed to the function.
  ,'three'
  ,'detector'
  ,'stats'
  ,'trackballControls'
  ,'keyboardState'
  ,'fullScreen'
  ,'windowResize'
  ], function( _, getAtoms, getBonds, Atom, Bond, CFF){
  return function(){
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
      var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
      var VIEW_ANGLE = 35, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000;
      camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
      scene.add( camera );
      camera.position.set( 0, 150, 400 );
      camera.lookAt( scene.position );

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
      // renderer.setClearColorHex( 0xBBBBBB, 1 );
      container = document.createElement( 'div' );
      document.body.appendChild( container );
      container.appendChild( renderer.domElement );

      // Events
      THREEx.WindowResize( renderer, camera );
      THREEx.FullScreen.bindKey({ charCode: 'm'.charCodeAt( 0 ) });

      // Controls
      controls = new THREE.TrackballControls( camera );

      // Stats
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.bottom = '0px';
      stats.domElement.style.zIndex = 100;
      container.appendChild( stats.domElement );

      // Lights
      var topLight = new THREE.PointLight( 0xffffff );
      topLight.position.set( 0, 150, 50 );
      scene.add( topLight );

      var bottomLight = new THREE.PointLight( 0xffffff );
      bottomLight.position.set( 0, -150, 50 );
      scene.add( bottomLight );

      ///////////////////
      // Custom Shapes //
      ///////////////////

      // Parse CFF json
      var atomsList = getAtoms( CFF );
      var bondsList = getBonds( CFF );
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
      stats.update();
    };

    var render = function(){
      renderer.render( scene, camera );
    };

    // Run
    init();
    animate();
  };
});