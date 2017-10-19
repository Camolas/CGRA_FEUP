/**
 * MyHook
 * @constructor
 */
 function MyHook(scene) {
 	CGFobject.call(this, scene);

 	this.myCylinder = new MyCylinder(this.scene,6,10);
 	this.hook = new MyUnitCubeQuad(this.scene);
 	this.hook.initBuffers();
 	
 	this.lenght=1;

 	
 };

 MyHook.prototype = Object.create(CGFobject.prototype);
 MyHook.prototype.constructor = MyHook;

 MyHook.prototype.display = function() {
 	
	this.scene.pushMatrix();
		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.scale(0.05,0.05,-this.lenght);
		this.myCylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-this.lenght,0);
		this.scene.scale(0.15,0.15,0.15);
		this.hook.display();
	this.scene.popMatrix();
 	
 }
