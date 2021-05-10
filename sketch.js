const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roofObject
var ropeObject1, ropeObject2, ropeObject3, ropeObject4, ropeObject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(400, 250, 250, 20);
	bobObject1 = new Bob(320, 575, 40);
	bobObject2 = new Bob(360, 575, 40);
	bobObject3 = new Bob(400, 575, 40);
	bobObject4 = new Bob(440, 575, 40);
	bobObject5 = new Bob(480, 575, 40);

	ropeObject1 = new Rope(bobObject1.body, roofObject.body, -80, 0);
	ropeObject2 = new Rope(bobObject2.body, roofObject.body, -40, 0);
	ropeObject3 = new Rope(bobObject3.body, roofObject.body, 0, 0);
	ropeObject4 = new Rope(bobObject4.body, roofObject.body, 40, 0);
	ropeObject5 = new Rope(bobObject5.body, roofObject.body, 80, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 

  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display(); 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50, y:-45})
	}
}



