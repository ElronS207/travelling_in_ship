var ship,ship_moving,edges;
var sea;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  ship = createSprite(300,160,20,50);
  ship.addAnimation("ship",ship_moving);
  edges = createEdgeSprites();

  ship.scale = 0.5;
  ship.x = 50
  sea = createSprite(200,180,400,20)
  sea.addImage(seaImage)
  
}

function draw() {
  
background(0)
console.log(ship.y)
sea.velocityX = -3

 if (sea.x < 0){
   sea.x = sea.width/2
 }
 //ship.collide(sea)
 drawSprites();
}