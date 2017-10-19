/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);
    
    this.cyl = new MyCylinder(this.scene, 12, 1);
    this.cyltop = new MyCircle(this.scene, 12);
    this.hour = new MyClockHand(this.scene);
    this.min = new MyClockHand(this.scene);
    this.sec = new MyClockHand(this.scene);

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

    //MyCylinder
    this.scene.pushMatrix();
 	this.cyl.display();
 	this.scene.popMatrix();
    
    //MyCircle
    this.scene.pushMatrix();
    this.clockAppearance.apply();
 	this.cyltop.display();
 	this.scene.popMatrix();

 	//Hour
 	this.scene.pushMatrix();
 	this.scene.scale(0.75, 0.05, 0.05);
 	this.hour.display();
 	this.scene.popMatrix();
    
 	this.initGLBuffers();
 };
