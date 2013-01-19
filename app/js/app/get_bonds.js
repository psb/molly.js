define([ 'underscore' ], function(_){
  return function(CIFfile){
    var atom1s = CIFfile["_chem_comp_bond.atom_id_1"];
    var atom2s = CIFfile["_chem_comp_bond.atom_id_2"];
    var bondType = CIFfile["_chem_comp_bond.value_order"];

    var bondsList = _.zip( atom1s, atom2s, bondType );

    // Create array of bond objects
    var bonds = _.map( bondsList, function( bondArray ){
      return {
        atom1: bondArray[0],
        atom2: bondArray[1],
        bondType: bondArray[2]
      };
    });
    return bonds;
  };
});