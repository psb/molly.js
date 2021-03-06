define([ 'three' ], function( ignore ){
  var Bond = function( bondObject, atomsObject ){
    ///////////////////
    // Create a path //
    ///////////////////

    // Get the atom coordinates of both atoms in a bond
    this.atom1 = atomsObject[ bondObject.atom1 ];
    this.atom2 = atomsObject[ bondObject.atom2 ];

    this.bondType = bondObject.bondType;  // 'SING' or 'DOUB'

    // Create a LineCurve path
    this.path = new THREE.LineCurve3(
      new THREE.Vector3( this.atom2.x, this.atom2.y, this.atom2.z ),
      new THREE.Vector3( this.atom1.x, this.atom1.y, this.atom1.z )
    );
    this.path.dynamic = true;

    /////////////////////////////////////
    // Create a Tube based on the path //
    /////////////////////////////////////

    // Tube params
    this.tubeGeom = new THREE.TubeGeometry( this.path );
    this.tubeGeom.dynamic = true;

    // Material
    this.bondColor = 0x101010; // Black;
    this.material = new THREE.MeshLambertMaterial({ color: this.bondColor });

    // Inherit from THREE.Mesh
    THREE.Mesh.apply( this, [ this.tubeGeom, this.material ] );
  };

  Bond.prototype = Object.create( THREE.Mesh.prototype );
  Bond.prototype.constructor = Bond;

  return Bond;
});