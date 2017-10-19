**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
	var degToRad = Math.PI / 180.0;
 	var teta = 0;
 	var tetaInc = 2*Math.PI / this.slices;
 	var phy = 0
 	var phyInc= (Math.PI / 2)/this.stacks;
 	var z = 0;
 	var z_inc = Math.PI/(2*this.stacks);//-1/this.stacks;
 	var inaux = 0; 


	this.vertices = [];
	this.indices = [];
	this.normals = [];
	
		//cupola
	
 for(var f = 0; f < this.stacks ; f++){

	var teta = 0;
 
 	//this.vertices = [];
	for(var i = 0; i < this.slices; i++) {
		this.vertices.push(Math.cos(teta),Math.sin(phy),Math.sin(teta));
		this.vertices.push(Math.cos(teta)* Math.sin(phy), Math.sin(tetaInc));// * Math.cos(tetaInc),z + z_inc);
		teta += tetaInc;
		this.vertices.push(Math.cos(teta), Math.sin(teta),z);
		this.vertices.push(Math.cos(teta), Math.sin(teta),z + z_inc);
	}




// 	this.indices = [];
 	
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+0+inaux,i*4+1+inaux,i*4+2+inaux);
	}
	for(var i = 0; i < this.slices; i++) {
		this.indices.push(i*4+3+inaux,i*4+2+inaux,i*4+1+inaux);
	}

	


	teta = 0;
	teta_next = 0;

 	//this.normals = [];
	for(var i= 0; i < this.slices; i++) {
		this.normals.push(Math.cos(teta), Math.sin(teta), 0);
		this.normals.push(Math.cos(teta), Math.sin(teta), 0);
		//teta+= tetaInc - teta_next;
		teta+= tetaInc;
		this.normals.push(Math.cos(teta), Math.sin(teta), 0);
		this.normals.push(Math.cos(teta), Math.sin(teta), 0);

	}

	console.log("vertices " + this.vertices.length);
	console.log("indices " + this.indices.length);
	console.log("normals " + this.normals.length);

	inaux += this.slices * 4;
	z += z_inc;
 }

 	this.primitiveType = this.scene.gl.TRItetaS;
 	this.initGLBuffers();
 };
