
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1 ,  bobObject2 ,  bobObject3 ,  bobObject4 ,  bobObject5;
var rope1 , rope2, rope3, rope4,rope5;
var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new bob(215,450,85);
	bobObject2 = new bob(300,450,85);
	bobObject3 = new bob(385,450,85);
	bobObject4 = new bob(475,450,85);
	bobObject5 = new bob(555,450,85);

	roof1 = new Roof(385,150,400,50);

	rope1 = new Rope(bobObject1.body,roof1.body,-175,20);
	rope2 = new Rope(bobObject2.body,roof1.body,-90,20);
	rope3 = new Rope(bobObject3.body,roof1.body,-5,20);
	rope4 = new Rope(bobObject4.body,roof1.body,80,20);
	rope5 = new Rope(bobObject5.body,roof1.body,165,20);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -300, y: -300})
	}


}
