define([ 'three', 'cpkAtoms' ], function( ignore, cpkAtoms ){
  var Atom = function( atomObject ){

    // Sphere params
    this.sphereGeom = new THREE.SphereGeometry( 4, 32, 16 );
    this.sphereGeom.dynamic = true;

    // Material
    this.elementColor = cpkAtoms[ atomObject.element ];
    this.material = new THREE.MeshLambertMaterial({ color: this.elementColor });

    // Inherit from THREE.Mesh
    THREE.Mesh.apply( this, [ this.sphereGeom, this.material ] );
    this.position.set( atomObject.x, atomObject.y, atomObject.z );

    // Custom attributes
    this.component_atom_id = atomObject.component_atom_id;
  };

  Atom.prototype = Object.create( THREE.Mesh.prototype );
  Atom.prototype.constructor = Atom;

  return Atom;
});