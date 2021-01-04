
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{

}

function setup() 
{
	 createCanvas(800, 700);


	 engine = Engine.create();
	 world = engine.world;

	 var ground_options ={
		isStatic:false,
		friction:100,
		density:0.5
	}

	 ground = Bodies.rectangle(350,650,800,20,ground_options);
     
	 var paper_options ={
		isStatic:false,
	   restitution:0.3,
	   friction:0.5,
	   density:1.2
	}

	 paper = Bodies.circle(200,500,20,paper_options);
	 World.add(world,paper);

	
  
}


function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20);
  
  drawSprites();
 
}



