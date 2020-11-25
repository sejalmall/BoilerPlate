var fixedrectangle, movingrectangle;

function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  movingrectangle = createSprite(450, 200, 60, 30);
  fixedrectangle.shapeColor = "red"
  movingrectangle.shapeColor= "red"
}

function draw() {
  background(255,255,255);  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;

  console.log(fixedrectangle.x - movingrectangle.x)

  if(movingrectangle.x - fixedrectangle.x <fixedrectangle.width/2 + movingrectangle.width/2 && 
    fixedrectangle.x - movingrectangle.x< fixedrectangle.width/2 + movingrectangle.width/2 && 
    movingrectangle.y - fixedrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2 &&
    fixedrectangle.y - movingrectangle.y< fixedrectangle.height/2 + movingrectangle.height/2){
movingrectangle.shapeColor = "red"
fixedrectangle.shapeColor = "red"
  }
  else {fixedrectangle.shapeColor = "green"
movingrectangle.shapeColor = "green"}
  drawSprites();
}