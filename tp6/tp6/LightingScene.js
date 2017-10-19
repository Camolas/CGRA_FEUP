var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function distanceVector( v1x, v1y, v1z, v2x, v2y, v2z )
{
    var dx = v1x - v2x;
    var dy = v1y - v2y;
    var dz = v1z - v2z;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.keyW = false;
	this.keyS = false;
	this.keyA;
	this.keyD;
	this.keyI;
	this.keyJ;
	this.keyL;
	this.keyP;

	this.cubeAttached = false;

	this.cubeDropped = false;

	this.initCameras();

	this.initLights();

	this.enableTextures(true);

	this.option1 = true;
	this.option2 = true;
	this.texture = 'metal';
	this.speed = 1;

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	
	// Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.quad = new MyQuad(this, 0, 10, 0, 12);
	this.quad2 = new MyQuad(this,-0.5, 1.5, -0.5, 1.5);
	this.quad3 = new MyQuad(this, -0.5, 1.5, -0.5, 1.5);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);
	this.clock = new MyClock(this);
	this.drone = new MyDrone(this);
	this.cube = new MyUnitCubeQuad(this);
	this.cube.initBuffers();

	this.hook = new MyHook(this);
	

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0,0,0.8,1);
	//this.materialA.setSpecular(0.2,0.2,0.2,1);
	this.materialA.setShininess(120);
	//this.materialA.setShininess(10);


	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);
	
	// Textures
	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.setAmbient(0.3,0.3,0.3,1);
	this.floorAppearance.setDiffuse(0.6,0.6,0.6,1);
	this.floorAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.floorAppearance.setShininess(120);
	this.floorAppearance.loadTexture("../resources/images/floor.png");

	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.setAmbient(0.3,0.3,0.3,1);
	this.windowAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.windowAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.windowAppearance.setShininess(120);
	this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');
	this.windowAppearance.loadTexture("../resources/images/window.png");
	
	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setAmbient(0.3,0.3,0.3,1);
	this.slidesAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.slidesAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.slidesAppearance.setShininess(20);
	this.slidesAppearance.loadTexture("../resources/images/slides.png");

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setAmbient(0.3,0.3,0.3,1);
	this.boardAppearance.setDiffuse(0.6,0.6,0.6,1);
	this.boardAppearance.setSpecular(0.5,0.5,0.5,1);
	this.boardAppearance.setShininess(120);
	this.boardAppearance.loadTexture("../resources/images/board.png");

	this.WallAppearance = new CGFappearance(this);
	this.WallAppearance.setAmbient(0.3,0.3,0.3,1);
	this.WallAppearance.setDiffuse(1,1,1,1);
	this.WallAppearance.setSpecular(0.2,0.2,0.2,1);
	this.WallAppearance.setShininess(120);
	
	this.redAppearance = new CGFappearance(this);
	this.redAppearance.setAmbient(0.3,0.3,0.3,1);
	this.redAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.redAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.redAppearance.setShininess(20);
	this.redAppearance.loadTexture("../resources/images/red.png");

	this.markAppearance = new CGFappearance(this);
	this.markAppearance.setAmbient(0.3,0.3,0.3,1);
	this.markAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.markAppearance.setSpecular(0.2,0.2,0.2,1);	
	this.markAppearance.setShininess(20);
	this.markAppearance.loadTexture("../resources/images/dropzone.png");


	
	this.setUpdatePeriod(33);
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);

	//this.shader.bind();
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[2].setPosition(0, -2.0, 0, 1.0);
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);



	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
	//this.lights[0].enable();

	

	

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	//this.lights[1].enable();

	

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1);
	this.lights[2].setQuadraticAttenuation(0);
	this.lights[2].enable();
	
	//this.shader.unbind();
};


LightingScene.prototype.doSomething = function() {

	console.log("Doing something...");
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}

LightingScene.prototype.update = function(currTime) {

	this.lastTime = this.lastTime || currTime;
	this.deltaTime = currTime - this.lastTime;
	this.lastTime = currTime;

	var type = "stable"

	//console.log(currTime);

	this.clock.update(currTime);
		
	if(this.keyW == true) {
		console.log(2);
		this.drone.MoveForward();
		this.drone.swingForward();
		type = "forward";
	}

	if(this.keyA == true) {
		this.drone.setAngle(5);
		type = "left";
	}

	if(this.keyS == true) {
		this.drone.MoveBack();
		this.drone.swingBack();
		type = "back";
	}

	if(this.keyD == true) {
		this.drone.setAngle(-5);
		type = "right"
	}

	if(this.keyI == true) {
		this.drone.MoveUp();
	}

	if(this.keyJ == true) {
		this.drone.MoveDown();
	}

	if(this.keyW == false && this.keyS == false) {
		this.drone.stabilize();
	}

	if(this.keyL == true) {
		this.hook.Lower();
	}
	
	if(this.keyP == true) {
		this.hook.Pull();
	}

	if(distanceVector( this.drone.coordX, this.drone.coordY, this.drone.coordZ, 3, this.hook.lenght, 3) < 1.60) this.cubeAttached = true;
	if(distanceVector( this.drone.coordX, this.drone.coordY, this.drone.coordZ, 12, this.hook.lenght, 3) < 1.71) {
		this.cubeAttached = false;
		this.cubeDropped = true;
	}
	//console.log("distance: " + distanceVector( this.drone.coordX, this.drone.coordY, this.drone.coordZ, 3, 0.5, 3));
	//console.log("distancef: " + distanceVector( this.drone.coordX, this.drone.coordY, this.drone.coordZ, 12, 0.5, 3));
	
	this.drone.update(this.deltaTime, type, this.speed, this.texture);

	if(this.option1 == true) this.lights[0].enable();
	else this.lights[0].disable();

	if(this.option2 == true) this.lights[1].enable();
	else this.lights[1].disable();


};


LightingScene.prototype.display = function() {
	//this.shader.bind();

	var degToRad = Math.PI / 180.0;
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.apply();
		this.quad.display();
	this.popMatrix();

	// Drop Zone
	this.pushMatrix();
		this.translate(12, 0.02, 3);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(3, 3, 0.2);
		this.markAppearance.apply();
		this.quad3.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowAppearance.apply();
		this.quad2.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.WallAppearance.apply();
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		//this.materialA.apply();
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		//this.materialB.apply();
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();

	// Clock
	this.pushMatrix();
		this.translate(7.5, 7, 0.1);
		this.scale(0.5,0.5,0.5);
		this.clock.display();
	this.popMatrix();

	// Drone
	this.pushMatrix();
		this.translate(this.drone.coordX, this.drone.coordY, this.drone.coordZ);
		this.rotate(this.drone.angle*degToRad,0,1,0);
		this.rotate(this.drone.swing*degToRad,1,0,0);
		this.scale(0.5,0.5,0.5);
		this.drone.display();
	this.popMatrix();

	// Hook
	this.pushMatrix();
		this.translate(this.drone.coordX, this.drone.coordY, this.drone.coordZ);
		this.hook.display();
	this.popMatrix();

	// Cube
	this.pushMatrix();
		//this.CubeAppearance().apply();
		if(this.cubeAttached == true) {
			this.translate(this.drone.coordX, this.drone.coordY-0.5-this.hook.lenght, this.drone.coordZ);
		} else if(this.cubeDropped == true) {
			this.translate(12,0.5,3);
			} else this.translate(3,0.5,3);
		this.redAppearance.apply();
		this.cube.display();
	this.popMatrix();

	// ---- END Primitive drawing section

	//this.shader.unbind();
};
