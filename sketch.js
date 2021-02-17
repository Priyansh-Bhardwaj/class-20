var mr
var fr

function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 50, 50);
  mr.shapeColor="blue"

  fr=createSprite(600, 200, 100, 30);
  fr.shapeColor="blue"
}

function draw() {
  background("yellow");  
  mr.x=mouseX
  mr.y=mouseY
  if(fr.x-mr.x<=fr.width/2+mr.width/2
  && mr.x-fr.x<=fr.width/2+mr.width/2
  && fr.y-mr.y<=fr.height/2+mr.height/2
  && mr.y-fr.y<=fr.height/2+mr.height/2){
  mr.shapeColor="red"
  fr.shapeColor="red"
  }
  else{
   mr.shapeColor="blue"
   fr.shapeColor="blue"
  }
  drawSprites();
}