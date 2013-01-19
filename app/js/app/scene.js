define([
    'three'
  , 'detector'
  , 'stats'
  , 'trackballControls'
  , 'keyboardState'
  , 'fullScreen'
  , 'windowResize'
  , 'parseCIF'
  , 'createSphere'
  ], function( ignore, ignore, ignore, ignore, ignore, ignore, ignore, parseCIF, createSphere){
  return function(){
    // Temp location for CFF mmCIF file
    var CFF = {
      "_chem_comp_atom.pdbx_component_comp_id": [
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF"
      ], 
      "_pdbx_chem_comp_identifier.identifier": [
        "1,3,7-trimethyl-3,7-dihydro-1H-purine-2,6-dione", 
        "1,3,7-trimethylpurine-2,6-dione"
      ], 
      "_chem_comp.formula_weight": "194.191", 
      "_pdbx_chem_comp_descriptor.program": [
        "ACDLabs", 
        "CACTVS", 
        "CACTVS", 
        "\"OpenEye OEToolkits\"", 
        "\"OpenEye OEToolkits\"", 
        "InChI", 
        "InChI"
      ], 
      "_chem_comp.pdbx_release_status": "REL", 
      "_chem_comp.formula": "\"C8 H10 N4 O2\"", 
      "_chem_comp.name": "CAFFEINE", 
      "_chem_comp.pdbx_replaced_by": "?", 
      "_chem_comp_atom.alt_atom_id": [
        "N1", 
        "C2", 
        "C10", 
        "C6", 
        "N3", 
        "O11", 
        "C12", 
        "C4", 
        "C5", 
        "N9", 
        "O13", 
        "N7", 
        "C8", 
        "C14", 
        "1H10", 
        "2H10", 
        "3H10", 
        "1H12", 
        "2H12", 
        "3H12", 
        "1H8", 
        "1H14", 
        "2H14", 
        "3H14"
      ], 
      "_chem_comp_atom.pdbx_model_Cartn_y_ideal": [
        "-0.000", 
        "-0.000", 
        "0.000", 
        "-0.001", 
        "-0.000", 
        "0.000", 
        "-0.000", 
        "-0.000", 
        "0.005", 
        "-0.000", 
        "-0.000", 
        "-0.000", 
        "-0.000", 
        "-0.000", 
        "0.001", 
        "0.890", 
        "-0.889", 
        "-0.000", 
        "-0.890", 
        "0.889", 
        "0.000", 
        "-1.028", 
        "0.513", 
        "0.513"
      ], 
      "_chem_comp_atom.pdbx_leaving_atom_flag": [
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N"
      ], 
      "_chem_comp.pdbx_replaces": "?", 
      "_chem_comp_bond.comp_id": [
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF"
      ], 
      "_chem_comp.pdbx_type": "HETAIN", 
      "_pdbx_chem_comp_descriptor.type": [
        "SMILES", 
        "SMILES_CANONICAL", 
        "SMILES", 
        "SMILES_CANONICAL", 
        "SMILES", 
        "InChI", 
        "InChIKey"
      ], 
      "_chem_comp.one_letter_code": "?", 
      "null": [], 
      "_chem_comp_atom.comp_id": [
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF"
      ], 
      "_chem_comp_bond.pdbx_aromatic_flag": [
        "Y", 
        "N", 
        "Y", 
        "Y", 
        "N", 
        "N", 
        "N", 
        "N", 
        "Y", 
        "N", 
        "N", 
        "Y", 
        "N", 
        "N", 
        "N", 
        "Y", 
        "Y", 
        "Y", 
        "Y", 
        "Y", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N"
      ], 
      "_pdbx_chem_comp_audit.date": [
        "2000-05-16", 
        "2011-06-04"
      ], 
      "_chem_comp.id": "CFF", 
      "_pdbx_chem_comp_descriptor.descriptor": [
        "\"O=C2N(c1ncn(c1C(=O)N2C)C)C\"", 
        "\"Cn1cnc2N(C)C(=O)N(C)C(=O)c12\"", 
        "\"Cn1cnc2N(C)C(=O)N(C)C(=O)c12\"", 
        "\"Cn1cnc2c1C(=O)N(C(=O)N2C)C\"", 
        "\"Cn1cnc2c1C(=O)N(C(=O)N2C)C\"", 
        "\"InChI=1S/C8H10N4O2/c1-10-4-9-6-5(10)7(13)12(3)8(14)11(6)2/h4H,1-3H3\"", 
        "RYYVLZVUVIJVGH-UHFFFAOYSA-N"
      ], 
      "_chem_comp.type": "NON-POLYMER", 
      "_pdbx_chem_comp_identifier.program": [
        "ACDLabs", 
        "\"OpenEye OEToolkits\""
      ], 
      "_chem_comp_bond.value_order": [
        "SING", 
        "SING", 
        "SING", 
        "SING", 
        "DOUB", 
        "SING", 
        "SING", 
        "SING", 
        "SING", 
        "DOUB", 
        "SING", 
        "SING", 
        "SING", 
        "SING", 
        "SING", 
        "DOUB", 
        "SING", 
        "SING", 
        "DOUB", 
        "SING", 
        "SING", 
        "SING", 
        "SING", 
        "SING", 
        "SING"
      ], 
      "_chem_comp_atom.pdbx_ordinal": [
        "1", 
        "2", 
        "3", 
        "4", 
        "5", 
        "6", 
        "7", 
        "8", 
        "9", 
        "10", 
        "11", 
        "12", 
        "13", 
        "14", 
        "15", 
        "16", 
        "17", 
        "18", 
        "19", 
        "20", 
        "21", 
        "22", 
        "23", 
        "24"
      ], 
      "_chem_comp.pdbx_model_coordinates_details": "?", 
      "_pdbx_chem_comp_identifier.type": [
        "\"SYSTEMATIC NAME\"", 
        "\"SYSTEMATIC NAME\""
      ], 
      "_chem_comp_atom.charge": [
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0"
      ], 
      "_pdbx_chem_comp_descriptor.comp_id": [
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF", 
        "CFF"
      ], 
      "_chem_comp.pdbx_subcomponent_list": "?", 
      "_chem_comp.pdbx_ambiguous_flag": "N", 
      "_chem_comp.pdbx_modified_date": "2011-06-04", 
      "_chem_comp_bond.pdbx_stereo_config": [
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N"
      ], 
      "_chem_comp_atom.pdbx_aromatic_flag": [
        "Y", 
        "Y", 
        "N", 
        "Y", 
        "Y", 
        "N", 
        "N", 
        "Y", 
        "Y", 
        "Y", 
        "N", 
        "Y", 
        "Y", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N"
      ], 
      "_chem_comp_atom.pdbx_align": [
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "1", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "0", 
        "1", 
        "0", 
        "0", 
        "0"
      ], 
      "_chem_comp_atom.atom_id": [
        "N1", 
        "C2", 
        "C10", 
        "C6", 
        "N3", 
        "O11", 
        "C12", 
        "C4", 
        "C5", 
        "N9", 
        "O13", 
        "N7", 
        "C8", 
        "C14", 
        "H101", 
        "H102", 
        "H103", 
        "H121", 
        "H122", 
        "H123", 
        "H81", 
        "H141", 
        "H142", 
        "H143"
      ], 
      "_chem_comp.pdbx_formal_charge": "0", 
      "_chem_comp.pdbx_ideal_coordinates_missing_flag": "N", 
      "_chem_comp.pdbx_model_coordinates_db_code": "1GFZ", 
      "_pdbx_chem_comp_audit.processing_site": [
        "RCSB", 
        "RCSB"
      ], 
      "_chem_comp.three_letter_code": "CFF", 
      "_chem_comp_bond.atom_id_1": [
        "N1", 
        "N1", 
        "N1", 
        "C2", 
        "C2", 
        "C10", 
        "C10", 
        "C10", 
        "C6", 
        "C6", 
        "N3", 
        "N3", 
        "C12", 
        "C12", 
        "C12", 
        "C4", 
        "C4", 
        "C5", 
        "N9", 
        "N7", 
        "N7", 
        "C8", 
        "C14", 
        "C14", 
        "C14"
      ], 
      "_chem_comp_bond.pdbx_ordinal": [
        "1", 
        "2", 
        "3", 
        "4", 
        "5", 
        "6", 
        "7", 
        "8", 
        "9", 
        "10", 
        "11", 
        "12", 
        "13", 
        "14", 
        "15", 
        "16", 
        "17", 
        "18", 
        "19", 
        "20", 
        "21", 
        "22", 
        "23", 
        "24", 
        "25"
      ], 
      "_chem_comp_bond.atom_id_2": [
        "C2", 
        "C10", 
        "C6", 
        "N3", 
        "O11", 
        "H101", 
        "H102", 
        "H103", 
        "C5", 
        "O13", 
        "C12", 
        "C4", 
        "H121", 
        "H122", 
        "H123", 
        "C5", 
        "N9", 
        "N7", 
        "C8", 
        "C8", 
        "C14", 
        "H81", 
        "H141", 
        "H142", 
        "H143"
      ], 
      "_chem_comp.pdbx_processing_site": "RCSB", 
      "_chem_comp_atom.type_symbol": [
        "N", 
        "C", 
        "C", 
        "C", 
        "N", 
        "O", 
        "C", 
        "C", 
        "C", 
        "N", 
        "O", 
        "N", 
        "C", 
        "C", 
        "H", 
        "H", 
        "H", 
        "H", 
        "H", 
        "H", 
        "H", 
        "H", 
        "H", 
        "H"
      ], 
      "_chem_comp.mon_nstd_parent_comp_id": "?", 
      "_pdbx_chem_comp_descriptor.program_version": [
        "10.04", 
        "3.341", 
        "3.341", 
        "1.5.0", 
        "1.5.0", 
        "1.03", 
        "1.03"
      ], 
      "_chem_comp.pdbx_initial_date": "2000-05-16", 
      "_chem_comp.pdbx_synonyms": "3,7-DIHYDRO-1,3,7-TRIMETHYL-1H-PURINE-2,6-DIONE", 
      "_chem_comp.pdbx_ideal_coordinates_details": "?", 
      "data_": "CFF", 
      "_pdbx_chem_comp_audit.action_type": [
        "\"Create component\"", 
        "\"Modify descriptor\""
      ], 
      "_chem_comp_atom.model_Cartn_x": [
        "38.984", 
        "38.490", 
        "39.954", 
        "38.608", 
        "37.635", 
        "38.888", 
        "37.080", 
        "37.218", 
        "37.648", 
        "36.375", 
        "39.056", 
        "37.055", 
        "36.296", 
        "37.201", 
        "40.312", 
        "40.823", 
        "39.513", 
        "36.369", 
        "36.602", 
        "37.921", 
        "35.661", 
        "36.728", 
        "38.297", 
        "36.921"
      ], 
      "_pdbx_chem_comp_audit.comp_id": [
        "CFF", 
        "CFF"
      ], 
      "_chem_comp_atom.pdbx_stereo_config": [
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N", 
        "N"
      ], 
      "_chem_comp_atom.pdbx_model_Cartn_x_ideal": [
        "1.047", 
        "-0.208", 
        "2.176", 
        "1.285", 
        "-1.276", 
        "-0.384", 
        "-2.629", 
        "-1.098", 
        "0.193", 
        "-1.934", 
        "2.428", 
        "0.068", 
        "-1.251", 
        "1.161", 
        "1.800", 
        "2.783", 
        "2.783", 
        "-2.570", 
        "-3.162", 
        "-3.162", 
        "-1.679", 
        "1.432", 
        "2.024", 
        "0.839"
      ], 
      "_chem_comp_atom.pdbx_model_Cartn_z_ideal": [
        "-1.312", 
        "-1.790", 
        "-2.246", 
        "0.016", 
        "-0.971", 
        "-2.993", 
        "-1.533", 
        "0.402", 
        "0.911", 
        "1.444", 
        "0.437", 
        "2.286", 
        "2.560", 
        "3.261", 
        "-3.269", 
        "-2.082", 
        "-2.083", 
        "-2.622", 
        "-1.198", 
        "-1.198", 
        "3.552", 
        "3.503", 
        "2.839", 
        "4.167"
      ], 
      "_chem_comp.pdbx_model_coordinates_missing_flag": "N", 
      "_pdbx_chem_comp_identifier.comp_id": [
        "CFF", 
        "CFF"
      ], 
      "_chem_comp_atom.model_Cartn_z": [
        "29.965", 
        "29.075", 
        "29.308", 
        "31.325", 
        "29.712", 
        "27.943", 
        "28.968", 
        "31.062", 
        "31.844", 
        "31.700", 
        "32.006", 
        "33.097", 
        "32.926", 
        "34.306", 
        "29.952", 
        "28.893", 
        "28.366", 
        "29.497", 
        "28.029", 
        "28.558", 
        "33.725", 
        "35.305", 
        "34.495", 
        "33.980"
      ], 
      "_pdbx_chem_comp_identifier.program_version": [
        "10.04", 
        "1.5.0"
      ], 
      "_chem_comp_atom.model_Cartn_y": [
        "37.034", 
        "35.880", 
        "37.990", 
        "37.207", 
        "35.065", 
        "35.820", 
        "33.905", 
        "35.206", 
        "36.244", 
        "34.424", 
        "38.200", 
        "36.065", 
        "34.968", 
        "36.929", 
        "38.826", 
        "37.427", 
        "38.394", 
        "33.227", 
        "34.270", 
        "33.299", 
        "34.549", 
        "36.786", 
        "37.004", 
        "37.958"
      ], 
      "_chem_comp_atom.pdbx_component_atom_id": [
        "N1", 
        "C2", 
        "C10", 
        "C6", 
        "N3", 
        "O11", 
        "C12", 
        "C4", 
        "C5", 
        "N9", 
        "O13", 
        "N7", 
        "C8", 
        "C14", 
        "H101", 
        "H102", 
        "H103", 
        "H121", 
        "H122", 
        "H123", 
        "H81", 
        "H141", 
        "H142", 
        "H143"
      ]
    };
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
      var light = new THREE.PointLight( 0xffffff );
      light.position.set( 0, 150, 50 );
      scene.add( light );

      // // Floor
      // var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
      // var floorMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff } );
      // var floor = new THREE.Mesh(floorGeometry, floorMaterial);
      // floor.position.y = -0.5;
      // floor.doubleSided = true;
      // scene.add(floor);

      ///////////////////
      // Custom Shapes //
      ///////////////////

      // Parse CFF json
      var atoms = parseCIF(CFF);
      // Add multiple spheres to the scene using the createSphere function
      for (var i = 0, len = atoms.length; i < len; i++) {
        var x = atoms[i][0];
        var y = atoms[i][1];
        var z = atoms[i][2];
        var element = atoms[i][3];
        var atom = createSphere( x, y, z, element );
        scene.add( atom );
      }
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
  };
});