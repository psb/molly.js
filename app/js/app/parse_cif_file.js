define([ 'underscore' ], function(_){
  return function(CIFfile){
    var elements = CIFfile["_chem_comp_atom.type_symbol"];
    var x_coords = CIFfile["_chem_comp_atom.pdbx_model_Cartn_x_ideal"];
    var y_coords = CIFfile["_chem_comp_atom.pdbx_model_Cartn_y_ideal"];
    var z_coords = CIFfile["_chem_comp_atom.pdbx_model_Cartn_z_ideal"];

    var component_atom_ids = CIFfile["_chem_comp_atom.pdbx_component_atom_id"];

    var atomsList = _.zip( x_coords, y_coords, z_coords, elements, component_atom_ids );

    // Create atoms object using the zipped array
    var atoms = {};
    _.each( atomsList, function( atomArray ){
      var x = atomArray[0];
      var y = atomArray[1];
      var z = atomArray[2];
      var element = atomArray[3];
      var component_atom_id = atomArray[4];

      atoms[ component_atom_id ] = {
        x: x,
        y: y,
        z: z,
        element: element
      };
    });

    return atoms;
  };
});