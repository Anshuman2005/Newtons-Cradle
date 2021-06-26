const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1
var rope2;
var rope3;
var rope4;
var rope5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;


  bob1 = new Bob(300,300)
  bob2 = new Bob(350,300)
  bob3 = new Bob(400,300)
  bob4 = new Bob(450,300)
  bob5 = new Bob(500,300)

  rope1 = new Rope(roof.body, bob1.body)
  rope2 = new Rope(roof.body, bob2.body)
  rope3 = new Rope(roof.body,bob3.body)
	rope4 = new Rope(roof.body,bob4.body)
  rope5 = new Rope(roof.body,bob5.body)

	Engine.run(engine);
	 
}




function draw() {
  rectMode(CENTER);
  background("#99004d");

  roof.display()
  rope1.display();
   rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
 bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();



  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
