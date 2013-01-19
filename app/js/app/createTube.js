define([ 'three' ], function( ignore ){
  return function( bondObject, atomsObject ){
    ///////////////////
    // Create a path //
    ///////////////////

    // Get the atom coordinates of both atoms in a bond
    var atom1 = atomsObject[ bondObject.atom1 ];
    var atom2 = atomsObject[ bondObject.atom2 ];

    // Create a LineCurve path
    var path = new THREE.LineCurve3(
      new THREE.Vector3( atom2.x, atom2.y, atom2.z ),
      new THREE.Vector3( atom1.x, atom1.y, atom1.z )
    );

    /////////////////////////////////////
    // Create a Tube based on the path //
    /////////////////////////////////////

    // Tube params
    var tubeGeom = new THREE.TubeGeometry( path );

    // Material
    var bondColor = 0x000000; // Black;
    var material = new THREE.MeshLambertMaterial({ color: bondColor });

    // Tube
    var tube = new THREE.Mesh( tubeGeom, material );
    tube.bondPair = bondObject.atom1 + '-' + bondObject.atom2;
    // so that it allow updates
    tube.geometry.dynamic = true;

    return tube;
  };
});