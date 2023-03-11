
const Engine = Matter.Engine;
const World = Matter.World;
var world
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var Ground, left, right
function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	var ballOptions = {
		restitution: 0.3,
		friction: 0,
		isStatic: false,
		density: 1.2
	}

	ball = Bodies.circle(100, 100, 40, ballOptions)
	World.add(world, ball)
	Ground = new ground(width / 2, 680, 850, 50)
	left = new ground(width/2+40,600,30,125)
	right = new ground(width/2+160,600,30,125)
}


function draw() {
	rectMode(CENTER);
	background(0);
	ellipse(ball.position.x, ball.position.y, 40, 40)
	Ground.display()
	left.display()
	right.display()
	drawSprites();

}


function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:80,y:-150})
	}
}


