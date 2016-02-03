var a;
var b;
var c;
var y = 700;

function setup() {
  createCanvas(800,800);
}

function draw() {
  console.log("X: " + mouseX, "Y:" + mouseY);
  var a = random(800);
  var b = random(0,600);

  fill(0,0,0,10);
  rect(0,0,800,600);
  
  
    fill(255,255,255);
  if (mouseX < width) {
    ellipse(mouseX, mouseY, 5, 5);
  }
  
  fill(255,255,255);
  ellipse(a,b,5,5);
  
  fill(187,144,212);
  rect(250,300,300,300);
  fill(212,144,144);
  rect(370,500,70,100);
  ellipse(420,560,10,10);
  
  triangle(250, 303, 404, 142, 552, 303);
   fill(255,255,205);
  //window
  if(mouseX >= 357 && mouseX <= 357 + 98) {
    if(mouseY >= 352 && mouseY <= 352 + 98) {
  fill(117,102,102);     
    }
  }

  rect(355,350,100,100);
  
  //moon
  if(y < 90)
  {
    y = 90
  }
  fill(255,255,200);
  ellipse(85,y,120,120);
  ellipse(110,y + 20,10,10)
  ellipse(70,y - 30,20,20)
  ellipse(60,y + 20,30,30)
  y = y - 1

  fill(18,82,25);
  rect(0,600,800,200);
}