/**
 * MyDrone
 * @constructor
 */
 function MyDrone(scene) {
 	CGFobject.call(this,scene);

    this.drone = new MyActualDrone(scene);
    

    this.angle = 215;
    this.coordX = 7.5;
    this.coordY = 4.5;
    this.coordZ = 8;

    this.swing = 0;
    this.max_swing = 46;
    this.min_swing = -46;
    this.swing_inc = 2;
        
 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.display = function() {

    this.scene.pushMatrix();
    this.drone.display();
    this.scene.popMatrix();    

 };

 MyDrone.prototype.setAngle = function(angle) {

    this.angle = this.angle + angle;

 }

 MyDrone.prototype.MoveForward = function() {
    
    var degToRad = Math.PI / 180.0;

    this.coordX = this.coordX + 0.05 * Math.sin(this.angle*degToRad);
    this.coordZ = this.coordZ + 0.05 * Math.cos(this.angle*degToRad);

    console.log(this.angle);

 }

 MyDrone.prototype.MoveBack = function() {

    var degToRad = Math.PI / 180.0;

    this.coordX = this.coordX - 0.05 * Math.sin(this.angle*degToRad);
    this.coordZ = this.coordZ - 0.05 * Math.cos(this.angle*degToRad);

    console.log("angle: " + this.angle);
    console.log("cos: " + Math.cos(this.angle));
    console.log("sin: " + Math.sin(this.angle));

 }

 MyDrone.prototype.MoveUp = function() {

    this.coordY = this.coordY + 0.05;

 }

 MyDrone.prototype.MoveDown = function() {

    this.coordY = this.coordY - 0.05;

 }

 MyDrone.prototype.update = function(time, type, speed, texture) {
	
	this.drone.update(time, type, speed, texture);

}

 MyDrone.prototype.swingForward = function() {

   if(this.max_swing > this.swing) this.swing += this.swing_inc;
 }

 MyDrone.prototype.swingBack = function() {

   if(this.min_swing < this.swing) this.swing -= this.swing_inc;
 }

 MyDrone.prototype.stabilize = function() {

  if(this.swing > 0) this.swing -= this.swing_inc;
  else if(this.swing < 0) this.swing += this.swing_inc;
 }