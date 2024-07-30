function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(10);
  stroke("green");
  frameRate(10)
}

function draw() {

  posX = mouseX;
  posY = mouseY;
  point(posX, posY);

  
}