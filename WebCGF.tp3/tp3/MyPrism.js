/**
 * MyQuad
 * @constructor
 */
class MyPrism extends CGFobject
{

	constructor(scene, slices, stacks)
	{
		super(scene);

		this.slice = slices;
		this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [];

		this.indices = [];

		this.normals = [];
		let angle;
		let degtoRad = 180 * angle/Math.PI;
		rad = 2*MATH.PI

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
