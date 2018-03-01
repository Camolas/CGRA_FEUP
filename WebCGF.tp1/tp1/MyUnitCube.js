/*2,0,4,
2,
4,0,1,*/


/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
           
			-0.5,-0.5,-0.5,
            -0.5,-0.5,0.5,
            -0.5,0.5,-0.5,
            -0.5,0.5,0.5,

            0.5,-0.5,-0.5,
			0.5,-0.5,0.5,
            0.5,0.5,-0.5,
            0.5,0.5,0.5
];

	this.indices = [
            //4,0,1,
            //0,1
			//1,3,5,7
			//1,3,5,
			//5,3,7

			1,3,2,
			2,0,1,
			0,5,1,
			5,0,4,
			5,4,6,
			6,7,5,
			2,3,7,
			6,2,7,
			1,5,7,
			7,3,1,
			2,6,4,
			4,0,2,
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
