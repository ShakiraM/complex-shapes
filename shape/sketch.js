
function setup() {
  createCanvas(300,300);
}

function draw() {
  background(0,0,255);
  noStroke();
  fill(0,255,0);
  ellipse(150,110,80,80);
  rect(150,110,80,80);
  triangle(250, 110, 40, 150, 70, 210);
}