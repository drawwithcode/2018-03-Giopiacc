function preload(){
  // put preload code here
}
var spacing = 50;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
noLoop();
}




function draw() {
  background(0);

  for (var x = 0; x <= width; x += spacing) {
    for (var y = 0; y <= height; y += spacing) {
      // this random function will return a value between 0 and 1
      var on = random(1);
      // this variable is for the size of circles
      var a = random(50, 100);
      // if the value of on is greater than .5 (meaning 50% chance)
      if (on > .5) {
        noFill();
        stroke(random(255), 100, 0);
        ellipse(x, y, a, a);

        noFill();
        stroke(100, random(255), 0);
        ellipse(x, y, a / 2, a / 2);

        noFill();
        stroke(100, 0, random(255));
        ellipse(x, y, a + 20, a + 20);

        noStroke();
        fill(random(160, 200), 0, 0);
        ellipse(x, y, a / 8, a / 8);
      }
    }
  }
}

function mousePressed() {
  redraw();
}
