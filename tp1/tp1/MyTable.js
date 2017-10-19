/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.cubequad = new MyUnitCubeQuad(scene);
	this.cubequad.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function () {

//Table-top

	this.scene.pushMatrix();
	this.scene.scale(5.0,0.3,3.0);
	this.scene.translate(0.75,11.5,1);
	this.cubequad.display();
	this.scene.popMatrix();


//Table-Leg-1

	this.scene.pushMatrix();
	this.scene.scale(0.3,3.5,0.3);
	this.scene.translate(5,0.5,5.5);
	this.cubequad.display();
	this.scene.popMatrix();

//Table-Leg-2

	this.scene.pushMatrix();
	this.scene.scale(0.3,3.5,0.3);
	this.scene.translate(5,0.5,14.50);
	this.cubequad.display();
	this.scene.popMatrix();

//Table-Leg-3

	this.scene.pushMatrix();
	this.scene.scale(0.3,3.5,0.3);
	this.scene.translate(20,0.5,5.5);
	this.cubequad.display();
	this.scene.popMatrix();

//Table-Leg-4

	this.scene.pushMatrix();
	this.scene.scale(0.3,3.5,0.3);
	this.scene.translate(20,0.5,14.50);
	this.cubequad.display();
	this.scene.popMatrix();



}

