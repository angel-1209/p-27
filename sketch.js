
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
diameter= 100
ground  = new roof (200,700,10000,100)
	ball1  = new bob (500,200,50)
  ball3  = new bob (500,200,50)
  ball2  = new bob (500,200,50)
  ball4  = new bob (500,200,50)

  roof1= new roof (350,100,500,20)

  line1=new rope (ball1.body,roof1.body,-diameter,0)
  line2=new rope (ball2.body,roof1.body,-diameter*2,0)
	line3=new rope (ball3.body,roof1.body,-diameter*-2,0)
  line4=new rope (ball4.body,roof1.body,-diameter*-2.5,0)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  background ("lightblue")
  ball1.display();
  ball2.display();
  ball3.display();
ball4.display();
  roof1.display()
line4.display();
  line2.display()
  line1.display();
  line3.display()
  drawSprites();
 
}



