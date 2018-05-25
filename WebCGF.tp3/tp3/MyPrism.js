/**
* MyPrism
* @constructor
*/
	class MyPrism extends CGFobject
	{

	constructor(scene, slices, stacks)
	{
		super(scene);

	this.slices= slices;
	this.stacks= stacks;

	this.initBuffers();

	this.vertices = [];

	this.indices = [];

	this.normals = [];

	//propriedade de hoisting!?, go tester this

	var angle = 0;
	let degtoRad = Math.PI /* * angle */ / 180;

	//let rad = 2*Math.PI;
	let incrAngle = 2 * Math.PI / this.slices;
	
	let z = 0;
	let z_incr = -1 / this.stacks;

	let inaux = 0;

	for (var f = 0; f < this.stacks; f++) {
		//this.vertices = [];
		
		for (let i = 0; i < this.slices; i++) {
			this.vertices.push(Math.cos(angle), Math.sin(angle), z);
			this.vertices.push(Math.cos(angle), Math.sin(angle), z + z_incr);
			angle += incrAngle;
			this.vertices.push(Math.cos(angle), Math.sin(angle), z);
			this.vertices.push(Math.cos(angle), Math.sin(angle), z + z_incr);
		}

		// this.índices = [];

		for (var i = 0; i < this.slices; i++) {
			this.indices.push(i * 4 + 0 + inaux, i * 4 + 1 + inaux, i * 4 + 2 + inaux);
		}
		for (var i = 0; i < this.slices; i++) {
			this.indices.push(i * 4 + 3 + inaux, i * 4 + 2 + inaux, i * 4 + 1 + inaux);
		}

		angle = incrAngle/2;
		let angle_next = 0;

		//this.normals = [];
		for (var i = 0; i < this.slices; i++) {
			this.normals.push(Math.cos(angle), Math.sin(angle), 0);
			this.normals.push(Math.cos(angle), Math.sin(angle), 0);//são as normais todas iguais uma vez que pertencem ao mesmo plano/face! e a Normal consequentemente é perpendicular a todos eles!
			this.normals.push(Math.cos(angle), Math.sin(angle), 0);
			this.normals.push(Math.cos(angle), Math.sin(angle), 0);
			angle += incrAngle;
			//angle_next += incrAngle; está a rolar
		}
		inaux += this.slices;
		z += z_incr;

	}
	this.primitiveType = this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
	};
