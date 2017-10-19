/**
 * MyClockHand
 * @constructor
 */
 function MyClockHand(scene, type) {
 	CGFobject.call(this,scene);
    
    this.cyl = new MyCylinder(this.scene, 12, 1);
    this.currentHourAngle = 180;
    this.currentMinAngle = 270;
    this.currentSecAngle = 1;
    this.type = type;
    
 	this.initBuffers();
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.display = function() {

    var degToRad = Math.PI / 180.0;

    switch(this.type) {

    case "hour":

    this.scene.pushMatrix();
    this.scene.rotate(-this.currentHourAngle * degToRad,0,0,1);
    this.scene.rotate(-90 * degToRad,0,0,1);
    this.scene.scale(0.50, 0.05, 0.05);
    this.scene.rotate(90 * degToRad,0,1,0);
 	this.cyl.display();
 	this.scene.popMatrix();
 	break;
    
    case "min":

    this.scene.pushMatrix();
    this.scene.rotate(-this.currentMinAngle * degToRad,0,0,1);
    this.scene.rotate(-90 * degToRad,0,0,1);
    this.scene.scale(0.75, 0.025, 0.025);
    this.scene.rotate(90 * degToRad,0,1,0);
 	this.cyl.display();
 	this.scene.popMatrix();
 	break;

 	case "sec":

    this.scene.pushMatrix();
    this.scene.rotate(-this.currentSecAngle * degToRad,0,0,1);
    this.scene.rotate(-90 * degToRad,0,0,1);
    this.scene.scale(0.75, 0.010, 0.010);
    this.scene.rotate(90 * degToRad,0,1,0);
 	this.cyl.display();
 	this.scene.popMatrix();
 	break;

    }


 	this.initGLBuffers();
 };

MyClockHand.prototype.setAngle = function(angle, type) {

    switch(type) {

    case "hour":

    this.currentHourAngle = angle;
    break;

    case "min":

    this.currentMinAngle = angle;
    break;

    case "sec":

    this.currentSecAngle = angle;
    break;

    }
  
};