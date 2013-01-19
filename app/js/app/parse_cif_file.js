define([ 'underscore' ], function(_){
  return function(CIFfile){
    var elements = CIFfile["_chem_comp_atom.type_symbol"];
    var x_coords = CIFfile["_chem_comp_atom.model_Cartn_x"];
    var y_coords = CIFfile["_chem_comp_atom.model_Cartn_y"];
    var z_coords = CIFfile["_chem_comp_atom.model_Cartn_z"];

    var atoms = _.zip( x_coords, y_coords, z_coords, elements );

    return atoms;
  }
});