## Molly - WebGL Molecule Viewer.

#### v0.0.1

Molly is an application designed to render molecule on the web using WebGL.

Currently it can only render the chemical components found in PDB molecules, which are deposited at [PDBe](http://www.ebi.ac.uk/pdbe-srv/pdbechem/).

Demo: http://mollyjs.com/example

The database used by Molly was last updated on the 26th of January 2013.

### Requirements

- [RequireJS WITH JQuery](http://requirejs.org/docs/jquery.html)

### How to use

Download the `molly.js` file in the `appbuild_directory/js/` folder. This file is a minified file containing all the libraries Molly uses (except requirejs) and should contain everything needed to run the visualizations. (Alternatively, download the whole directory to get all the files, including the `examples.html` file, css file, etc.)

The `example.html` file shows how to use the application. Simply put the `script` tag in your page and create some HTML elements with molecule IDs on. You can either this file as a template or create your own. If you create your own, ensure that the script tag points to your copy of `require.js` and `molly.js`.

The below code shows the body the `example.html` file:

    <body>
      <div class="container">
        <div id="CFF" class="mmCIF-compound" data-mmcif='{"id":"CFF"}'></div>
        <div id="CFF" class="mmCIF-compound" data-mmcif='{"id":"CFF", "width":"600", "height":"600"}'></div>
        <div id="CFF" class="mmCIF-compound" data-mmcif='{"id":"CFF", "width":"450"}'></div>
        <div id="11b" class="mmCIF-compound" data-mmcif='{"id":"11b", "width":"450", "height":"450", "stats":"true"}'></div>
        <div id="0ja" class="mmCIF-compound" data-mmcif='{"id":"0ja", "height":"450"}'></div>
      </div>
      <script data-main="js/molly.js" src="js/vendor/require/require-jquery.js"></script>
    </body>

Once the script is present in the page, all you need to do is create some HTML elements with the attributes you want for your rendering:

- `id`: the ID of the molecule you want to display (REQUIRED).
- `class="mmCIF-compound"`: a class that tells Molly where to find the compound IDs (REQUIRED).
- `data-mmcif`: data-attribute that tells Molly how you want to render the molecule (REQUIRED).
  - `id`: the ID of the molecule you want to display (REQUIRED). __**NOTE: This MUST match the other ID exactly**__.
  - `width`: the width of the rendered scene (optional).
  - `height`: the height of the rendered scene (optional).
  - `stats`: Three.js rendering statistics for the scene (optional).

If width and height are both omitted then Molly defaults to the window size.
If either height and width are omitted the Molly uses the other value (height or width) for the value of the missing parameter
`stats` defaults to false.

### TODO

- Be able to output details (name, molecular weight, etc.) about the compounds to the HTML page, if required.
- Be able to render complex molecules such as proteins.
- Have more interactivity and analysis tools, akin to a desktop molecule viewer.

### Tech used

- [Three.js](https://github.com/mrdoob/three.js/)
- [ThreeX](https://github.com/jeromeetienne/threex)
- [Requirejs](http://requirejs.org/)
- [RethinkDB](http://www.rethinkdb.com/)
- [BioPython](http://biopython.org/wiki/Main_Page)
- [jQuery](http://jquery.com/) (bundled with Requirejs)
- [Underscore.js](https://github.com/amdjs/underscore) (the AMD compatible version)
- [Express](http://expressjs.com/)
- [Node.js](http://nodejs.org/)
- [AWS EC2](http://aws.amazon.com/ec2/)

### License

See the [LICENSE](https://github.com/psb/molly.js/blob/master/LICENSE.txt) file