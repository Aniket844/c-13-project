var garden,rabbit;
var appleImg,apple;
var leaves,leafImg
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //creating boy running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
 
 
}



function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  createApples();
  createLeaves();
}
function createApples(){
  apple = createSprite(random(50,350),40, 10, 10);
  apple.addImage(appleImg)
  apple.scale = 0.08
  apple.velocityY=3
  apple.lifetime = 140
}
function createLeaves(){
  leaves = createSprite(random(50,350),40, 10, 10);
  leaves.addImage(leafImg);
  leaves.scale = 0.08;
  leaves.velocityY = 3
  leaves.lifetime = 140
}



var apple = Math.round(random(1,2));
if (frameCount % 80 == 0){
  if (apple,leaves == 1){
    createApples();
    }
    else {createLeaves()
     
    }
  
}

























