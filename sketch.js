let P0 = { 
    x: 20, 
    y: 360 
};
let P1 = { 
    x: 83, 
    y: 87 
};
let P2 = { 
    x: 300, 
    y: 54 
};
let P3 = { 
    x: 368, 
    y: 292 
};

let bezierPoints = [P0, P1, P2, P3];

let A = { 
    x: undefined, 
    y: undefined 
};
let B = { 
    x: undefined, 
    y: undefined 
};
let C = { 
    x: undefined, 
    y: undefined 
};
let D = { 
    x: undefined, 
    y: undefined 
};
let E = { 
    x: undefined, 
    y: undefined 
};

let P = { 
    x: undefined, 
    y: undefined 
};

let dS = 10;
let dB = 5;
let t = 0;
let change = 0.001;
let selectedPoint = null;

let helpLinesBox;
let speedSlider;

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(240);

  helpLinesBox = createCheckbox("Vis linjer?", true);
  helpLinesBox.position(0, 425);

  speedSlider = createSlider(0.0001, 0.0025, 0.001, 0.0001);
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

  A.x = lerp(P0.x, P1.x, tvalue);
  A.y = lerp(P0.y, P1.y, tvalue);
  B.x = lerp(P1.x, P2.x, tvalue);
  B.y = lerp(P1.y, P2.y, tvalue);
  C.x = lerp(P2.x, P3.x, tvalue);
  C.y = lerp(P2.y, P3.y, tvalue);

  D.x = lerp(A.x, B.x, tvalue);
  D.y = lerp(A.y, B.y, tvalue);
  E.x = lerp(B.x, C.x, tvalue);
  E.y = lerp(B.y, C.y, tvalue);

  P.x = lerp(D.x, E.x, tvalue);
  P.y = lerp(D.y, E.y, tvalue);
}

function drawBezierCurve() {
  strokeWeight(3);
  fill(0, 255, 0);

  line(P0.x, P0.y, P1.x, P1.y);
  line(P1.x, P1.y, P2.x, P2.y);
  line(P2.x, P2.y, P3.x, P3.y);
  circle(P0.x, P0.y, dS);
  circle(P1.x, P1.y, dS);
  circle(P2.x, P2.y, dS);
  circle(P3.x, P3.y, dS);

  fill(255, 255, 255);

  if (helpLinesBox.checked()) {
    line(A.x, A.y, B.x, B.y);
    line(B.x, B.y, C.x, C.y);
    circle(A.x, A.y, dS);
    circle(B.x, B.y, dS);
    circle(C.x, C.y, dS);

    line(D.x, D.y, E.x, E.y);
    circle(D.x, D.y, dS);
    circle(E.x, E.y, dS);
  }
  
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
  text("t = " + Math.floor(t * 100) / 100, 280, 335);
  
  //Coordinates of the control points
  text("P0 har X: " + P0.x + ", Y: " + P0.y, 280, 350);
  text("P1 har X: " + P1.x + ", Y: " + P1.y, 280, 365);
  text("P2 har X: " + P2.x + ", Y: " + P2.y, 280, 380);
  text("P3 har X: " + P3.x + ", Y: " + P3.y, 280, 395);
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
