//The setup function only happens once
var sugar=0;
let circleX;
let circleY
let circleColor;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(51,116,69); //an RGB color for the canvas' background

  function setPositionAndColor() {

  circleX = random(0, width);
  circleY = random(0, height);
  circleColor = color(random(100, 256), random(100, 256), random(100, 256));
}
  
  fill(52,152,219);
  stroke(22,122,220);
  ellipse(mouseX,mouseY,sugar,sugar); 

  stroke(120,0,15) // an RGB color for the circle's border
  strokeWeight(3)
  fill(195,20,22,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,40,40); // center of canvas, 20px dia

 

}

function mousePressed() {

sugar + 0.01;

 if(sugar >=100){
  sugar=0;
 }else{
  sugar=sugar+100;

}

}






