let P0 = {
  x: 83,
  y: 187
};
let P1 = {
  x: 313,
  y: 187
};

let bezierPoints = [P0, P1];

let P = {
  x: undefined,
  y: undefined
};

let dS = 10;
let dB = 5;
let t = 0;
let change = 0.001;
let selectedPoint = null;

let speedSlider;
let backButton;

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(240);

  speedSlider = createSlider(0.0001, 0.0025, 0.001, 0.0001);

  backButton = createButton("Tilbage!");
  backButton.position(0, 450);
  backButton.mousePressed(backToMain);
}

function draw() {
  change = speedSlider.value();

  background(220);
  fill(255, 255, 255);

  calcBezierPoints(t);

  strokeWeight(1);

  drawBezierCurve();
}

function calcBezierPoints(tvalue) {

  //Bug fiks til at kunne se kurven dannes, uden at se hjælpelinjerne.
  strokeWeight(0);

  P.x = lerp(P0.x, P1.x, tvalue);
  P.y = lerp(P0.y, P1.y, tvalue);
}

function drawBezierCurve() {
  strokeWeight(3);
  fill(0, 255, 0);
  circle(P0.x, P0.y, dS);
  circle(P1.x, P1.y, dS);
  line(P0.x, P0.y, P1.x, P1.y);

  fill(255, 0, 0);
  circle(P.x, P.y, dS)

  let pT = t;
  while (pT >= 0) {
    pT -= change;
    calcBezierPoints(pT);
    circle(P.x, P.y, dB);
  }

  if (t < 1) {
    t += change;
  } else {
    t = 0;
  }
  //t value text
  text("t = " + Math.floor(t * 100) / 100, 280, 350);

  //Coordinates of the control points
  text("P0 har X: " + P0.x + ", Y: " + P0.y, 280, 365);
  text("P1 har X: " + P1.x + ", Y: " + P1.y, 280, 380);
}

function mousePressed() {
  // Check if mouse is over any control point
  for (let point of bezierPoints) {
    let d = dist(mouseX, mouseY, point.x, point.y);
    if (d < dS) {
      selectedPoint = point;
      break;
    }
  }
}

function mouseReleased() {
  selectedPoint = null;
}

function mouseDragged() {
  if (selectedPoint) {
    selectedPoint.x = mouseX;
    selectedPoint.y = mouseY;
  }
}

function backToMain() {
  window.location.href = "index.html";
}