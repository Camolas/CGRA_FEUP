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
		let angle = 0;
		let degtoRad = Math.PI /* * angle */ /180 ;
		
		//let rad = 2*Math.PI;
		let incrAngle = 2 * Math.PI/ this.slices;

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
