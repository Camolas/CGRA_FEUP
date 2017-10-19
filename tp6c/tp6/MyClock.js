/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);
    
	var hour = "hour";
	var min = "min";
	var sec = "sec";

    this.cyl = new MyCylinder(this.scene, 12, 1);
    this.cyltop = new MyCircle(this.scene, 12);
    this.hour = new MyClockHand(this.scene,hour);
    this.min = new MyClockHand(this.scene,min);
    this.sec = new MyClockHand(this.scene,sec);

    this.clockAppearance = new CGFappearance(scene);
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.clockAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.clockAppearance.setShininess(20);
	this.clockAppearance.loadTexture("../resources/images/clock.png");
    
 	this.initBuffers();
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {

	var degToRad = Math.PI / 180.0;

    //MyCylinder
    this.scene.pushMatrix();
    this.scene.scale(1,1,0.25);
 	this.cyl.display();
 	this.scene.popMatrix();
    
    //MyCircle
    this.scene.pushMatrix();
    this.scene.rotate(180*degToRad,0,0,1);
    this.clockAppearance.apply();
 	this.cyltop.display();
 	this.scene.popMatrix();

 	//Hour
 	this.scene.pushMatrix();
 	this.hour.display();
 	this.scene.popMatrix();

 	//Min
 	this.scene.pushMatrix();
 	this.min.display();
 	this.scene.popMatrix();

 	//Sec
 	this.scene.pushMatrix();
 	this.sec.display();
 	this.scene.popMatrix();
    
 	this.initGLBuffers();
 };


MyClock.prototype.update = function(time) {
	
	var hour = "hour";
	var min = "min";
	var sec = "sec";

	var t = time/1000;

	var rsec = (t * 360) / 60; 
	var rmin = (t * 360) / (60*60);
	var rhour = (t * 360) / (60*60*12);
	
	//console.log("rsec:" + rsec);
	

	this.sec.setAngle(rsec, sec);
	this.min.setAngle(rmin, min);
	this.hour.setAngle(rhour, hour);	

}