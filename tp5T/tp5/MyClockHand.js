/**
 * MyClockHand
 * @constructor
 */
 function MyClockHand(scene) {
 	CGFobject.call(this,scene);
    
    this.cyl = new MyCylinder(this.scene, 12, 1);
    this.currentAngle = 90;
    
 	this.initBuffers();
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.display = function() {

    var degToRad = Math.PI / 180.0;

    var angle = this.currentAngle * degToRad;

    this.scene.pushMatrix();
    this.scene.rotate(90 * degToRad,0,1,0);
    this.scene.rotate(angle,0,0,1);
 	this.cyl.display();
 	this.scene.popMatrix();

 	this.initGLBuffers();
 };

MyClockHand.prototype.setAngle = function(angle) {

    this.currentAngle = angle;
  
};