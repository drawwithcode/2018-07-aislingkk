var mic;

function setup() {
  createCanvas(windowWidth,windowHeight);

  frameRate(10);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  background(0);

  var vol = mic.getLevel();
  stroke(64,vol*20000,208,60);

  translate(windowWidth/2,windowHeight/2);
  scale(0.9);

  for(var i=0;i<1;i++){
      Fibonacci(vol,20,0,0);}
}


function Fibonacci(valuevol,linenum,_x,_y) {
  noFill();

  var Fibonacci = [];
  rotate(-PI/6 * frameCount * valuevol);

  for (var i=0;i<linenum;i++){
    var a=i<=1 ? 1:Fibonacci[i-1]+Fibonacci[i-2];
    Fibonacci.push(a);
    strokeWeight(0.1*a);
    ellipse(_x,_y,a*2);
    rotate(PI/2);
    translate(-Fibonacci[i-1],0);
  }

}
