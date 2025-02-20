let P0 = {
  x: 20,
  y: 360
};
let P1 = {
  x: 62,
  y: 203
};
let P2 = {
  x: 170,
  y: 77
};
let P3 = {
  x: 314,
  y: 134
};
let P4 = {
  x: 351,
  y: 271
};

let bezierPoints = [P0, P1, P2, P3, P4];

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
let F = {
  x: undefined,
  y: undefined
};
let G = {
  x: undefined,
  y: undefined
};
let H = {
  x: undefined,
  y: undefined
};
let I = {
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
let backButton;

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(240);

  helpLinesBox = createCheckbox("Vis linjer?", true);
  helpLinesBox.position(0, 425);

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

  A.x = lerp(P0.x, P1.x, tvalue);
  A.y = lerp(P0.y, P1.y, tvalue);
  B.x = lerp(P1.x, P2.x, tvalue);
  B.y = lerp(P1.y, P2.y, tvalue);
  C.x = lerp(P2.x, P3.x, tvalue);
  C.y = lerp(P2.y, P3.y, tvalue);
  D.x = lerp(P3.x, P4.x, tvalue);
  D.y = lerp(P3.y, P4.y, tvalue);

  E.x = lerp(A.x, B.x, tvalue);
  E.y = lerp(A.y, B.y, tvalue);
  F.x = lerp(B.x, C.x, tvalue);
  F.y = lerp(B.y, C.y, tvalue);
  G.x = lerp(C.x, D.x, tvalue);
  G.y = lerp(C.y, D.y, tvalue);

  H.x = lerp(E.x, F.x, tvalue);
  H.y = lerp(E.y, F.y, tvalue);
  I.x = lerp(F.x, G.x, tvalue);
  I.y = lerp(F.y, G.y, tvalue);

  P.x = lerp(H.x, I.x, tvalue);
  P.y = lerp(H.y, I.y, tvalue);
}

function drawBezierCurve() {
  strokeWeight(3);
  fill(0, 255, 0);

  line(P0.x, P0.y, P1.x, P1.y);
  line(P1.x, P1.y, P2.x, P2.y);
  line(P2.x, P2.y, P3.x, P3.y);
  line(P3.x, P3.y, P4.x, P4.y);
  circle(P0.x, P0.y, dS);
  circle(P1.x, P1.y, dS);
  circle(P2.x, P2.y, dS);
  circle(P3.x, P3.y, dS);
  circle(P4.x, P4.y, dS);

  fill(255, 255, 255);

  if (helpLinesBox.checked()) {
    line(A.x, A.y, B.x, B.y);
    line(B.x, B.y, C.x, C.y);
    line(C.x, C.y, D.x, D.y);
    circle(A.x, A.y, dS);
    circle(B.x, B.y, dS);
    circle(C.x, C.y, dS);
    circle(D.x, D.y, dS);

    line(E.x, E.y, F.x, F.y);
    line(F.x, F.y, G.x, G.y);
    circle(E.x, E.y, dS);
    circle(F.x, F.y, dS);
    circle(G.x, G.y, dS);

    line(H.x, H.y, I.x, I.y);
    circle(H.x, H.y, dS);
    circle(I.x, I.y, dS);
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
  text("t = " + Math.floor(t * 100) / 100, 280, 320);

  //Coordinates of the control points
  text("P0 har X: " + P0.x + ", Y: " + P0.y, 280, 335);
  text("P1 har X: " + P1.x + ", Y: " + P1.y, 280, 350);
  text("P2 har X: " + P2.x + ", Y: " + P2.y, 280, 365);
  text("P3 har X: " + P3.x + ", Y: " + P3.y, 280, 380);
  text("P4 har X: " + P4.x + ", Y: " + P4.y, 280, 395);
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