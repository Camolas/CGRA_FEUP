/**
* MyQuad
* @constructor
*/
class MyPrism extends CGFobject
{

	constructor(scene, slices, stacks)
	{
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	};
	
	initBuffers()
	{
		this.vertices = [];

		this.indices = [];

		this.normals = [];

		//propriedade de hoisting!?, go tester this

		let angle = 0;
		let degtoRad = Math.PI /* * angle */ /180 ;

		//let rad = 2*Math.PI;
		let incrAngle = 2 * Math.PI/ this.slices;

		let z = 0;
		let z_inc = 1/this.stacks;

		let inaux = 0;

		//this.vertices = [];
		for (let i=0; i < this.slices; i++)
		{
			this.vertices.push(Math.cos(angle), Math.sin(angle),z);
			this.vertices.push(Math.cos(angle), Math.sin(angle),z + incrAngle);
			angle += incrAngle;
			this.vertices.push(Math.cos(angle), Math.sin(angle),z);
			this.vertices.push(Math.cos(angle), Math.sin(angle),z);
		}





		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
