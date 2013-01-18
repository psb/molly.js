define([ 'three' ], function(){
  return function( x, y, z ){
    // Sphere params
    var sphereGeom = new THREE.SphereGeometry( 25, 32, 16 );

    // Material
    var material = new THREE.MeshLambertMaterial({ color: 0x000088 });

    // Sphere
    var sphere = new THREE.Mesh( sphereGeom, material );
    sphere.position.set( x, y, z );
    // sphere.position.set( 0, 50, 0 );
    return sphere;
  };
});