// create a canvas element
var canvas = document.createElement(“canvas”);
// add the canvas to the document
document.body.appendChild(canvas);
// set a few parameters
var parms = {
alpha : true,
stencil : false,
antialias : true,
};
// create webgl context
// note: use “experimental-webgl” until “webgl” is supported
var gl = canvas.getContext(“webgl”, parms);

<script type="text/javascript" src="dat.gui.js"></script>
<script type="text/javascript">
    
var FizzyText = function() {
  this.message = 'dat.gui';
  this.speed = 0.8;
  this.displayOutline = false;
  this.explode = function() { ... };
  // Define render logic ...
};