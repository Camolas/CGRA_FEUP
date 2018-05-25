/**
* MyCylinder
* @constructor
*/
	class MyCylinder extends CGFobject
	{

	constructor(scene, slices, stacks)
	{
		super(scene);

	this.slices= slices;
	this.stacks= stacks;

	this.initBuffers();
	};

	initBuffers() 
		{
	this.vertices = [];

	this.indices = [];

	this.normals = [];

	//propriedade de hoisting!?, go tester this

	let angle = 0;
	let degtoRad = Math.PI /* * angle */ / 180;

	//let rad = 2*Math.PI;
	let incrAngle = 2 * Math.PI / this.slices;
	
	let z = 0;
	let z_incr = 1 / this.stacks;

	let inaux = 0;

	for (var f = 0; f < this.stacks; f++) {
		//this.vertices = [];
		angle =0;

		for (let i = 0; i < this.slices; i++) {
			this.vertices.push(Math.cos(incrAngle*i), Math.sin(incrAngle*i), f);
			this.vertices.push(Math.cos(incrAngle*i), Math.sin(incrAngle * i), f+1);


		//	angle += incrAngle;
			this.vertices.push(Math.cos(incrAngle*(i+1)), Math.sin(incrAngle*(i+1)), f);
			this.vertices.push(Math.cos(incrAngle*(i+1)), Math.sin(incrAngle*(i+1)), f+1);
			

			this.indices.push(i * 4 + 0 + inaux, i * 4 + 2+ inaux, i * 4 + 1 + inaux);
		
			this.indices.push(i * 4 + 2 + inaux, i * 4 + 3 + inaux, i * 4 + 1 + inaux);
/*		inaux += this.slices;
		}*/
	}
		//angle = 0;
		let angle_next = 0;

		//this.normals = [];
		//for (var f = 0; f < this.stacks; f++) {

		for (var i = 0; i < this.slices; i++) {
			this.normals.push(Math.cos(incrAngle*i), Math.sin(incrAngle*i), 0);
			this.normals.push(Math.cos(incrAngle*i), Math.sin(incrAngle*i), 0);
			//angle += incrAngle;
			this.normals.push(Math.cos(incrAngle*(i+1)), Math.sin(incrAngle*(i+1)), 0);
			this.normals.push(Math.cos(incrAngle*(i+1)), Math.sin(incrAngle*(i+1)), 0);
		
		}
		
		inaux += 2*this.slices;
		//f += z_incr;
	}
	this.primitiveType = this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
	};
