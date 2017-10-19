/**
 * MyObject
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


	this.vertices = 
	[
			 0.5 , 0.5 ,-0.5,
			 0.5 ,-0.5 ,-0.5,
			 0.5 ,-0.5 , 0.5,
			 0.5 , 0.5 , 0.5,
	 
			-0.5 , 0.5 ,-0.5,
			-0.5 ,-0.5 ,-0.5,
			-0.5 ,-0.5 , 0.5,
			-0.5 , 0.5 , 0.5,
   ];

    this.indices =
     [
        	2,1,0,
			3,2,0,

			
			4,5,7,
			6,7,5,

			6,5,1,
			2,6,1,

			7,3,0,
			4,7,0,

			6,2,3,
			7,6,3,

			5,4,0,
			1,5,0
     ];
        		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
