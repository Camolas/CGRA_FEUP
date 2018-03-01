function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene); //super

    this.quad = new MyQuad(this.scene);
	this.quad.initBuffers();
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

MyUnitCubeQuad.prototype.display = function() {
	var deg2rad=Math.PI/180.0;
	this.quad.display();
	this.scene.pushMatrix();
	this.scene.rotate(Math.PI, 0,4, 0);
	this.scene.translate(1.0/3,0,0);
	this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(Math.PI/2, 1, 0, 0);
	this.scene.translate(0,-1,0);
	this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2, 1, 0, 0);
	this.scene.translate(-1,0,0);
	this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(Math.PI/2, 0, 1, 0);
	this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2, 0, 1, 0);
	this.quad.display();
	this.scene.popMatrix();
};
