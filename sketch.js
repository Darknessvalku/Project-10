var sea, ship;
var seaImg, shipImg;

function preload() {
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation('ship-1.png', 'ship-2.png');
}

function setup() {
  createCanvas(400,400);
  background("blue");

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  ship = createSprite(150, 250);
  ship.addAnimation('shipImg', shipImg);
  ship.scale = 0.3;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if (sea.x < 0) sea.x = 400;
  drawSprites();
}