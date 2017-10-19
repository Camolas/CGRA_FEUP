/**
 * MyLeg
 * @constructor
 */
 function MyLeg(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLeg.prototype = Object.create(CGFobject.prototype);
 MyLeg.prototype.constructor = MyLeg;

 MyLeg.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	var x = 0;
	var inc = 1/this.slices;
 	var z = 0;
 	var z_inc = -1/this.stacks;
 	var inaux = 0; 

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	
 for(var f = 0; f < this.stacks ; f++){

	var x = 0;
 
 	//this.vertices = [];
	for(var i = 0; i < this.slices; i++) {
		this.vertices.push(x, x*x,z);
		this.vertices.push(x, x*x,z + z_inc);
		x += inc;
		this.vertices.push(x, x*x,z);
		this.vertices.push(x, x*x,z + z_inc);
	}




// 	this.indices = [];
 	
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+0+inaux,i*4+1+inaux,i*4+2+inaux);
	}
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+3+inaux,i*4+2+inaux,i*4+1+inaux);
	}
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+2+inaux,i*4+1+inaux,i*4+0+inaux);
	}
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+1+inaux,i*4+2+inaux,i*4+3+inaux);
	}

	


	x = 0;
	

 	//this.normals = [];
	for(var i= 0; i < this.slices; i++) {
		this.normals.push(x, x*x, 0);
		this.normals.push(x, x*x, 0);
		x += inc;
		this.normals.push(x, x*x, 0);
		this.normals.push(x, x*x, 0);

	}

	inaux += this.slices * 4;
	z += z_inc;
 }

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
