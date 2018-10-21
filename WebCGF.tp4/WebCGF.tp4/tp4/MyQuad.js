/**
 * MyQuad
 * @constructor
 */
class MyQuad extends CGFobject
{

	constructor(scene, minS, maxS, minT, maxT)
	{
		super(scene);
/*  Do construtor que existia antes
		this.slice = slices;
		this.stacks = stacks;
*/
		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [
		-0.5, -0.5, 0, //coincidir os vértices com as coordenadas!
		0.5, -0.5, 0,
		-0.5, 0.5, 0,
		0.5, 0.5, 0
		];

		this.indices = [
		0, 1, 2, 
		3, 2, 1
		];

		this.normals = [
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1];

		this.texCoords = [
			this.minS, this.maxT,
			this.maxS, this.maxT,
			this.minS, this.minT,
			this.maxS, this.minT
			];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
