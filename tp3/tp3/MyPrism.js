/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
	var grausToRadian = Math.PI;
	var inc = (2 * Math.PI) / this.slices;
	var varStack = 1.0 / this.stacks;
	var alfa = 0;

 	this.vertices = [];
 	for(var i = 0;i < this.slices; i++)
 	{
		this.vertices.push(Math.cos(alfa), Math.sin(alfa),0); // 0 <-
		this.vertices.push(Math.cos(alfa), Math.sin(alfa),-1);// 1 <-
		alfa += inc;
		this.vertices.push(Math.cos(alfa), Math.sin(alfa),0);// 1 <-
		this.vertices.push(Math.cos(alfa), Math.sin(alfa),-1);// 1 <-

		//this.vertices.push
 	}
 	/*-0.5, -0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0*/
	console.log(this.vertices.length);
	

	
 	this.indices = [];

 	for (var i = 0;i < this.slices; i++) // .slices vai buscar no lightingScene
 	{
 		this.indices.push(i*4+0,i*4+1,i*4+2);
 		this.indices.push(i*4+3,i*4+2,i*4+1);
 	}

	console.log(this.indices.length);
  	alfa = 0;
 	this.normals = [];
	for (var i = 0;i < this.slices; i++)
		{
			this.normals.push(Math.cos(alfa/2), Math.sin(alfa/2),0); 
			this.normals.push(Math.cos(alfa/2), Math.sin(alfa/2),0); 
			this.normals.push(Math.cos(alfa/2), Math.sin(alfa/2),0); 
			this.normals.push(Math.cos(alfa/2), Math.sin(alfa/2),0); 
			alfa += inc;
		}
	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();


 	console.log(this.normals.length);
	
 };
