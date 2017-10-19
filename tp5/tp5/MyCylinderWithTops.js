/**
 * MyCylinderWithTops
 * @constructor
 */
function MyCylinderWithTops(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinderWithTops.prototype = Object.create(CGFobject.prototype);
 MyCylinderWithTops.prototype.constructor = MyCylinderWithTops;

 MyCylinderWithTops.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
	var degToRad = Math.PI / 180.0;
 	var angle = 0;
 	var incAngle = 2*Math.PI / this.slices;
 	var z = 0;
 	var z_inc = -1/this.stacks;
 	var inaux = 0; 

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	
 for(var f = 0; f < this.stacks ; f++){

	var angle = 0;
 
 	//this.vertices = [];
	for(var i = 0; i < this.slices; i++) {
		this.vertices.push(Math.cos(angle), Math.sin(angle),z);
		this.vertices.push(Math.cos(angle), Math.sin(angle),z + z_inc);
		angle += incAngle;
		this.vertices.push(Math.cos(angle), Math.sin(angle),z);
		this.vertices.push(Math.cos(angle), Math.sin(angle),z + z_inc);
	}




// 	this.indices = [];
 	
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+0+inaux,i*4+1+inaux,i*4+2+inaux);
	}
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+3+inaux,i*4+2+inaux,i*4+1+inaux);
	}

	


	angle = 0;
	angle_next = 0;

 	//this.normals = [];
	for(var i= 0; i < this.slices; i++) {
		this.normals.push(Math.cos(angle), Math.sin(angle), 0);
		this.normals.push(Math.cos(angle), Math.sin(angle), 0);
		//angle+= incAngle - angle_next;
		angle+= incAngle;
		this.normals.push(Math.cos(angle), Math.sin(angle), 0);
		this.normals.push(Math.cos(angle), Math.sin(angle), 0);

	}

	console.log("vertices " + this.vertices.length);
	console.log("indices " + this.indices.length);
	console.log("normals " + this.normals.length);

	inaux += this.slices * 6;
	z += z_inc;
 }

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };