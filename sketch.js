var mortar
var mortarImage
function preload (){
  mortarImage=loadImage("Images/tile000.png")
}
function setup() {
  createCanvas(900,500);
  mortar = createSprite(width-100,height-100);
  mortar.addImage("Mortar1",mortarImage)
  mortar.scale=1.75
}

function draw() {
  background(255,255,255);  
  spawnClouds()
  if (frameCount % 60 === 0){
    spawnFloatingObjects()
  }
  drawSprites();
}


function spawnFloatingObjects() {
  var floatingObject1 = createSprite(0,100,10,10)
  floatingObject1.y = random(50,200)
  floatingObject1.velocityX = 10;
}
function spawnClouds(){
  if (frameCount % 60 === 0){
  var cloud = createSprite(0,100,10,10)
  cloud.y=random(100,200)
  cloud.velocityX = 2.5;}

}