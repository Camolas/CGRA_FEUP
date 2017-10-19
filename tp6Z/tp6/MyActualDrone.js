/**
 * MyActualDrone
 * @constructor
 */
 function MyActualDrone(scene) {
 	CGFobject.call(this,scene);

    this.baseItem1 = new MyCylinder(this.scene, 8, 5);
    this.baseItem2 = new MySemiSphere(this.scene,16, 16);
    this.baseItem2.initBuffers();
    
    this.wingItem1 = new MyCylinder(this.scene, 8, 2);
    this.wingItem2 = new MyCylinder(this.scene, 6, 5);
    this.wingItem3 = new MyCylinder(this.scene, 12, 2);

    this.legItem1 = new MyLeg(this.scene, 6, 3);
    this.legItem2 = new MyUnitCubeQuad(this.scene);
 	this.legItem2.initBuffers();

    this.wingAngleL = 1;
    this.wingAngleR = 1;
    this.wingAngleF = 1;
    this.wingAngleB = 1;
    
    

    this.metalAppearance = new CGFappearance(scene);
	this.metalAppearance.setAmbient(0.3,0.3,0.3,1);
	this.metalAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.metalAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.metalAppearance.setShininess(20);
	this.metalAppearance.loadTexture("../resources/images/metal.png");

	this.militaryAppearance = new CGFappearance(scene);
	this.militaryAppearance.setAmbient(0.3,0.3,0.3,1);
	this.militaryAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.militaryAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.militaryAppearance.setShininess(20);
	this.militaryAppearance.loadTexture("../resources/images/military.png");

	this.redAppearance = new CGFappearance(scene);
	this.redAppearance.setAmbient(0.3,0.3,0.3,1);
	this.redAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.redAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.redAppearance.setShininess(20);
	this.redAppearance.loadTexture("../resources/images/red.png");

	this.blueAppearance = new CGFappearance(scene);
	this.blueAppearance.setAmbient(0.3,0.3,0.3,1);
	this.blueAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.blueAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.blueAppearance.setShininess(20);
	this.blueAppearance.loadTexture("../resources/images/blue.png");

	this.moltenAppearance = new CGFappearance(scene);
	this.moltenAppearance.setAmbient(0.3,0.3,0.3,1);
	this.moltenAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.moltenAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.moltenAppearance.setShininess(20);
	this.moltenAppearance.loadTexture("../resources/images/molten.png");
 	
 };

 MyActualDrone.prototype = Object.create(CGFobject.prototype);
 MyActualDrone.prototype.constructor = MyActualDrone;

 MyActualDrone.prototype.display = function() {
    
    var degToRad = Math.PI / 180.0;

    //Base Wing1
    this.scene.pushMatrix();
      this.scene.scale(0.10,0.10,6);
      this.scene.translate(0,0,0.5);
      this.redAppearance.apply();
      this.baseItem1.display();
    this.scene.popMatrix();

    //Base Wing2
    this.scene.pushMatrix();
      this.scene.rotate(90*degToRad,0,1,0);
      this.scene.scale(0.10,0.10,6);
      this.scene.translate(0,0,0.5);
      this.redAppearance.apply();
      this.baseItem1.display();
    this.scene.popMatrix();

    //Base box1
    this.scene.pushMatrix();
      this.scene.scale(1.25,0.75,1.25);
      this.scene.rotate(-90*degToRad,1,0,0);
      this.metalAppearance.apply();
      this.baseItem2.display();
    this.scene.popMatrix();
 
 	//Wing Connector1
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(3,0,0);
 	    this.scene.scale(0.40,0.40,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem1.display();
 	this.scene.popMatrix();

 	//Wing Connector2
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(0,3,0);
 	    this.scene.scale(0.40,0.40,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem1.display();
 	this.scene.popMatrix();

 	//Wing Connector3
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(-3,0,0);
 	    this.scene.scale(0.40,0.40,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem1.display();
 	this.scene.popMatrix();
    
    //Wing Connector4
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(0,-3,0);
 	    this.scene.scale(0.40,0.40,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem1.display();
 	this.scene.popMatrix();

 	//Wing1
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,0,1,0);
 	    this.scene.translate(3,0,0);
 	    this.scene.rotate(this.wingAngleF,0,1,0);
 	    this.scene.translate(0,0.20,0);
 	    this.scene.scale(0.10,0.01,1.5);
 	    this.scene.translate(0,0,0.5);
 	    this.blueAppearance.apply();
 	    this.wingItem2.display();
 	this.scene.popMatrix();

 	//Wing2
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,0,1,0);
 	    this.scene.translate(0,0,3);
 	    this.scene.rotate(-this.wingAngleR,0,1,0);
 	    this.scene.translate(0,0.20,0);
 	    this.scene.scale(0.10,0.01,1.5);
 	    this.scene.translate(0,0,0.5);
 	    this.blueAppearance.apply();
 	    this.wingItem2.display();
 	this.scene.popMatrix();

 	//Wing3
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,0,1,0);
 	    this.scene.translate(-3,0,0);
 	    this.scene.rotate(this.wingAngleB,0,1,0);
 	    this.scene.translate(0,0.20,0);
 	    this.scene.scale(0.10,0.01,1.5);
 	    this.scene.translate(0,0,0.5);
 	    this.blueAppearance.apply();
 	    this.wingItem2.display();
 	this.scene.popMatrix();

 	//Wing4
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,0,1,0);
 	    this.scene.translate(0,0,-3);
 	    this.scene.rotate(-this.wingAngleL,0,1,0);
 	    this.scene.translate(0,0.20,0);
 	    this.scene.scale(0.10,0.01,1.5);
 	    this.scene.translate(0,0,0.5);
 	    this.blueAppearance.apply();
 	    this.wingItem2.display();
 	this.scene.popMatrix();

    //Wing box1
    this.scene.pushMatrix();
      this.scene.translate(3,0,0);
      this.scene.scale(0.25,0.3,0.25);
      this.scene.translate(0,0.70,0);
      this.scene.rotate(-90*degToRad,1,0,0);
      this.metalAppearance.apply();
      this.baseItem2.display();
    this.scene.popMatrix();
   
    //Wing box2
    this.scene.pushMatrix();
      this.scene.translate(0,0,3);
      this.scene.scale(0.25,0.3,0.25);
      this.scene.translate(0,0.70,0);
      this.scene.rotate(-90*degToRad,1,0,0);
      this.moltenAppearance.apply();
      this.baseItem2.display();
    this.scene.popMatrix();

    //Wing box3
    this.scene.pushMatrix();
      this.scene.translate(-3,0,0);
      this.scene.scale(0.25,0.3,0.25);
      this.scene.translate(0,0.70,0);
      this.scene.rotate(-90*degToRad,1,0,0);
      this.metalAppearance.apply();
      this.baseItem2.display();
    this.scene.popMatrix();

    //Wing box4
    this.scene.pushMatrix();
      this.scene.translate(0,0,-3);
      this.scene.scale(0.25,0.3,0.25);
      this.scene.translate(0,0.70,0);
      this.scene.rotate(-90*degToRad,1,0,0);
      this.metalAppearance.apply();
      this.baseItem2.display();
    this.scene.popMatrix();

    //Wing UpperConnector1
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(0,0,-0.25);
 	    this.scene.translate(3,0,0);
 	    this.scene.scale(0.85,0.85,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem3.display();
 	this.scene.popMatrix();

 	//Wing UpperConnector2
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(0,0,-0.25);
 	    this.scene.translate(0,3,0);
 	    this.scene.scale(0.85,0.85,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem3.display();
 	this.scene.popMatrix();

 	//Wing UpperConnector3
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(0,0,-0.25);
 	    this.scene.translate(-3,0,0);
 	    this.scene.scale(0.85,0.85,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem3.display();
 	this.scene.popMatrix();
    
    //Wing UpperConnector4
 	this.scene.pushMatrix();
 	    this.scene.rotate(90*degToRad,1,0,0);
 	    this.scene.translate(0,0,-0.25);
 	    this.scene.translate(0,-3,0);
 	    this.scene.scale(0.85,0.85,0.20);
 	    this.scene.translate(0,0,0.5);
 	    this.militaryAppearance.apply();
 	    this.wingItem3.display();
 	this.scene.popMatrix();

    //Leg1
    this.scene.pushMatrix();
        this.scene.translate(0,0,1);
 	    this.scene.scale(1, 1, 0.15);
		this.scene.scale(1,-1,1);
		this.redAppearance.apply();
 	    this.legItem1.display();
 	this.scene.popMatrix();

    //Leg2
 	this.scene.pushMatrix();
        this.scene.translate(0,0,-1);
 	    this.scene.scale(1, 1, 0.15);
		this.scene.scale(1,-1,1);
		this.redAppearance.apply();
 	    this.legItem1.display();
 	this.scene.popMatrix();

    //Leg3
    this.scene.pushMatrix();
        this.scene.translate(0,0,1);
 	    this.scene.scale(1, 1, 0.15);
		this.scene.scale(-1,-1,1);
		this.redAppearance.apply();
 	    this.legItem1.display();
 	this.scene.popMatrix();
 	
    //Leg4
 	this.scene.pushMatrix();
        this.scene.translate(0,0,-1);
 	    this.scene.scale(1, 1, 0.15);
		this.scene.scale(-1,-1,1);
		this.redAppearance.apply();
 	    this.legItem1.display();
 	this.scene.popMatrix();

 	//Foot1
 	this.scene.pushMatrix();
        this.scene.translate(1,-1,0);
 	    this.scene.scale(0.15, 0.15, 4);
 	    this.metalAppearance.apply();
 	    this.legItem2.display();
 	this.scene.popMatrix();

 	//Foot2
 	this.scene.pushMatrix();
        this.scene.translate(-1,-1,0);
 	    this.scene.scale(0.15, 0.15, 4);
 	    this.metalAppearance.apply();
 	    this.legItem2.display();
 	this.scene.popMatrix();

 };

  


 MyActualDrone.prototype.update = function(time, type) {

	speed = (2*Math.PI*time)/1000;
    
    switch(type) {

      case("forward"):
          this.wingAngleF += speed*10;
          this.wingAngleB += speed*0.2;
          this.wingAngleL += speed;
          this.wingAngleR += speed;
          break;
      case("back"):
          this.wingAngleF += speed*0.2;
          this.wingAngleB += speed*10;
          this.wingAngleL += speed;
          this.wingAngleR += speed;
          break;
      case("left"):
          this.wingAngleF += speed*0.2;
          this.wingAngleB += speed*0.2;
          this.wingAngleL += speed*10;
          this.wingAngleR += speed*10;
          break;
      case("right"):
          this.wingAngleF += speed*0.2;
          this.wingAngleB += speed*0.2;
          this.wingAngleL += speed*10;
          this.wingAngleR += speed*10;
          break;
      case("stable"):
          this.wingAngleF += speed;
          this.wingAngleB += speed;
          this.wingAngleL += speed;
          this.wingAngleR += speed;
          break;


    }

}