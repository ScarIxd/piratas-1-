const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var cannon, cannonImg, baseImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  baseImg = loadImage("./assets/cannonBase.png");
  cannonImg = loadImage("./assets/cannon.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
  
  angleMode(DEGREES);
  angle = 20;

  cannon = new Cannon(170,165,150,100,angle);

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

  for(var i = 0 ; i < balls.length ; i += 1 ){
    showBalls(balls[i])
  }
  
  cannon.show();

}

function keyReleased() {

  if(keyCode===RIGHT_ARROW)
  {
   balls[balls.length - 1].shoot();   
  }

 
}

function keyPressed(){

  if(keyCode === RIGHT_ARROW)
  {
    cannonBall = new CannonBall(cannon.x,175);
    balls.push(cannonBall)
  }

}

function showBalls(ball)
{
 if(ball)
 {
  cannonBall.show();
 }

}