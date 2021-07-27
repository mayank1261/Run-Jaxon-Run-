var pathImg,path,invisibleground,invisibleground2;
var Jaxon,Jaxon_runing,Jaxon_collided;
var obstacles;
var power,energyDrink,coin,bomb;
function preload(){
  //pre-load images
Jaxon_runing=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  power=loadImage("power.png");
  coin=loadImage("coin.png");
  bomb=loadImage("bomb.png");
  energyDrink=loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  Jaxon = createSprite(200,200,20,50);
  Jaxon.addAnimation("running", Jaxon_runing);
  Jaxon.scale = 0.1;
  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  invisibleground=createSprite(370,200,20,400)
invisibleground.visible=false;

invisibleground2=createSprite(34,200,20,400);
invisibleground2.visible=false;



  path.depth=Jaxon.depth;
  Jaxon.depth=Jaxon.depth+1;
}

function draw() {
  background(0);
  if(path.y>400){
  path.y=height/2;
  Jaxon.collide(invisibleground);
  Jaxon.collide(invisibleground2);

}
Jaxon.x = World.mouseX;
drawSprites();

}
