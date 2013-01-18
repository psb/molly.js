// Detector
if ( !Detector.webgl ) Detector.addGetWebGLMessage();
// Globals
var container, scene, camera, renderer, controls, stats;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();

init();
animate();

// Functions
function init(){

  ////////////
  // Set-up //
  ////////////

  // Create a scene
  scene = new THREE.Scene();

  // Camera
  var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
  var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
  camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
  scene.add( camera );
  camera.position.set( 0, 150, 400 );
  camera.lookAt( scene.position );

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
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

  // Light
  var light = new THREE.PointLight( 0xffffff );
  light.position.set( 0, 150, 100 );
  scene.add( light );

  ///////////////////
  // Custom Shapes //
  ///////////////////

  // Sphere params
  var sphereGeom = new THREE.SphereGeometry();  // Defaults to 50, 8, 6; wireframe:false

  // Material
  var material = new THREE.MeshLambertMaterial({ color: 0x000088 });

  // Sphere
  var sphere = new THREE.Mesh( sphereGeom, material );
  sphere.position.set( 0, 50, 0 );
  scene.add( sphere );

}

function animate(){
  requestAnimationFrame( animate );
  render();
  update();
}

function update(){
  controls.update();
  stats.update();
}

function render(){
  renderer.render( scene, camera );
}