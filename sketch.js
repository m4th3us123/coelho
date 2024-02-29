var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
//criar sprite do jardim
garden=createSprite(200,200);
garden.addImage(gardenImg);
//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);

//criar sprite da maça
apple = createSprite(random(width),0,30,30);
apple.scale = 0.09;
apple.addImage(appleImg);
}


function draw() {
  background(0);

  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  apple.collide(rabbit);
  rabbit.x = mouseX;
  apple.velocityY= 6;
  if (apple.y >= 405) {
    apple.y = -2,
    apple.x = (random(width));
  }
  if (apple.collide(rabbit)) {
    apple.y = -2,
    apple.x = (random(width));
    apple.velocityY = apple.velocityY + 1
  }
  drawSprites();
}
