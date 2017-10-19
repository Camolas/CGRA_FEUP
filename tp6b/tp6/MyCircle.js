/**
 * MyCircle
 * @constructor
 */
 function MyCircle(scene, slices) {
 	CGFobject.call(this,scene);
    
    this.slices = slices;
    
 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {

   var degToRad = Math.PI / 180.0;
   var angle = 0;
   var incAngle = 2*Math.PI / this.slices;
   var varS = 0;
   var varT = 0;

   this.vertices = [];
   this.indices = [];
   this.normals = [];
   this.texCoords = [];

    this.vertices.push(0,0,0);

 	//this.vertices = [];
    for(var i = 0; i < this.slices; i++) {
		this.vertices.push(Math.cos(angle), Math.sin(angle),0);
		angle += incAngle;
	}


    //this.indices = [];
    for(var i = 1; i <= this.slices; i++) {
      if( i  != this.slices) {
      	this.indices.push(0, i, i+1);
      } else this.indices.push(0, i, 1);
    }
   
    //this.normals = [];
    for(var i = 0; i < this.slices+1; i++) {
      this.normals.push(0,0,1);
    }

    angle = 0;
    
    this.texCoords.push(0.5 , 0.5);

    //this.texCoords = [];
    for(var i = 0; i < this.slices; i++) {
      this.texCoords.push(-(Math.cos(angle) * 0.5 + 0.5) +1, Math.sin(angle) * 0.5 + 0.5)
      angle += incAngle;
    }

	console.log("vertices " + this.vertices.length/3);
	console.log("indices " + this.indices.length);
	console.log("normals " + this.normals.length/3);
	console.log("texcoords " + this.texCoords.length/2);

	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
