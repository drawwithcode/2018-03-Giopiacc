function preload(){
  // put preload code here
}
var spacing = 50;
function setup() {

  createCanvas(windowWidth, windowHeight);
  noLoop();
}




function draw() {
  background(240, 98, 146);

  //create rectangles
  for (var x = 0; x <= width; x += spacing) {
    for (var y = 0; y <= height; y += spacing) {

      var on = random(3);

      var a = random(75, 150);

      if (on > .5) {
        noFill();
        strokeWeight(1);
        stroke(random(255), 255, 255);
        rect(x, y, a, a);

        noFill();
        strokeWeight(1);
        stroke(255, random(254), 0);
        rect(x, y, a / 2, a / 2);

        noFill();
        strokeWeight(1);
        stroke(41, 182, random(246));
        rect(x, y, a + 20, a + 20);

        noStroke();
        fill(random(255, 0), 238, 88);
        rect(x, y, a / 8, a / 8);

        //text
        strokeWeight(5);
        stroke(26, 35, 126);
        fill(255);
        textSize(35);
        text('Press the mouse and see!', width/2 - 180  , height/2 +280 );



      }
    }
  }
}
// redraw rectangles with mouse
function mousePressed() {
  redraw();
}
