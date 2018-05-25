/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyTable extends CGFobject
{
  constructor(scene) 
	{
		super(scene);
		this.table=new MyUnitCubeQuad(this.scene);
		this.tableAppearance = new CGFappearance(this.scene);
		this.tableAppearance.loadTexture("../resources/images/table.png");  
		this.tableAppearance.setDiffuse(0.8,0.8,0.8,1);
  		this.tableAppearance.setSpecular(0.2,0.2,0.2,1);
  		this.tableAppearance.setShininess(10);
	}

	display()
	{	
		this.scene.pushMatrix();
		this.scene.translate(2.5 - 0.3/2.0,3.5/2.0,1.5 - 0.3/2.0);
		this.scene.scale(0.3,3.5,0.3);
		this.table.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2.5 + 0.3/2.0,3.5/2.0,-1.5 + 0.3/2.0);
		this.scene.scale(0.3,3.5,0.3);
		this.table.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2.5 - 0.3/2.0,3.5/2.0,-1.5 + 0.3/2.0);
		this.scene.scale(0.3,3.5,0.3);
		this.table.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2.5 + 0.3/2.0,3.5/2.0,1.5 - 0.3/2.0);
		this.scene.scale(0.3,3.5,0.3);
		this.table.display();
		this.scene.popMatrix();
		//LEGS acima
		//tampo below
		this.tableAppearance.apply();
		this.scene.pushMatrix();
		this.scene.translate(0,3.5 + 0.3/2.0,0);
		this.scene.scale(5,0.3,3);
		this.table.display();
		this.scene.popMatrix();
	};
};


