let P0 = {
  x: 450,
  y: 300
};
let P1 = {
  x: 400,
  y: 200
};
let P2 = {
  x: 450,
  y: 50
};
let P3 = {
  x: 600,
  y: 50
};
let P4 = {
  x: 650,
  y: 200
};
let P5 = {
  x: 600,
  y: 300
}

let bezierPoints = [P0, P1, P2, P3, P4, P5];

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
let J = {
  x: undefined,
  y: undefined
};
let K = {
  x: undefined,
  y: undefined
};
let L = {
  x: undefined,
  y: undefined
};
let M = {
  x: undefined,
  y: undefined
};
let N = {
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

let speedSlider;
let helpLinesBox;
let backButton;
let coordsSystemBox;
let bezierCurverBox;

let P0xBox;
let P0yBox;
let P1xBox;
let P1yBox;
let P2xBox;
let P2yBox;
let P3xBox;
let P3yBox;
let P4xBox;
let P4yBox;
let P5xBox;
let P5yBox;

function setup() {
  createCanvas(700, 700);
  background(240);
  frameRate(240);

  helpLinesBox = createCheckbox("Vis linjer?", true);
  helpLinesBox.position(width + 20, 0);

  speedSlider = createSlider(0.0001, 0.0025, 0.001, 0.0001);
  speedSlider.position(width + 20, 100);

  backButton = createButton("Tilbage!");
  backButton.position(width + 20, 125);
  backButton.mousePressed(backToMain);

  coordsSystemBox = createCheckbox("Vis koordinatsystem?", true);
  coordsSystemBox.position(width + 20, 25);

  bezierCurverBox = createCheckbox("Vis Bézier kurve?", true);
  bezierCurverBox.position(width + 20, 50);

  //P0's X
  P0xBox = createInput('');
  P0xBox.position(width + 20, 200);
  P0xBox.size(50);
  P0xBox.attribute('type', 'number');

  P0xBox.input(() => {
    P0.x = ((parseInt(P0xBox.value()) + width / 2));
    if (isNaN(P0.x)) P0.x = width / 2;
  });

  //P0's Y
  P0yBox = createInput('');
  P0yBox.position(width + 80, 200);
  P0yBox.size(50);
  P0yBox.attribute('type', 'number');

  P0yBox.input(() => {
    P0.y = -parseInt(P0yBox.value()) + height / 2;
    if (isNaN(P0.y)) P0.y = height / 2;
  });

  //P1's X
  P1xBox = createInput('');
  P1xBox.position(width + 20, 250);
  P1xBox.size(50);
  P1xBox.attribute('type', 'number');

  P1xBox.input(() => {
    P1.x = ((parseInt(P1xBox.value()) + width / 2));
    if (isNaN(P1.x)) P1.x = width / 2;
  });

  //P1's Y
  P1yBox = createInput('');
  P1yBox.position(width + 80, 250);
  P1yBox.size(50);
  P1yBox.attribute('type', 'number');

  P1yBox.input(() => {
    P1.y = -parseInt(P1yBox.value()) + height / 2;
    if (isNaN(P1.y)) P1.y = height / 2;
  });

  //P2's X
  P2xBox = createInput('');
  P2xBox.position(width + 20, 300);
  P2xBox.size(50);
  P2xBox.attribute('type', 'number');

  P2xBox.input(() => {
    P2.x = ((parseInt(P2xBox.value()) + width / 2));
    if (isNaN(P2.x)) P2.x = width / 2;
  });

  //P2's Y
  P2yBox = createInput('');
  P2yBox.position(width + 80, 300);
  P2yBox.size(50);
  P2yBox.attribute('type', 'number');

  P2yBox.input(() => {
    P2.y = -parseInt(P2yBox.value()) + height / 2;
    if (isNaN(P2.y)) P2.y = height / 2;
  });

  //P3's X
  P3xBox = createInput('');
  P3xBox.position(width + 20, 350);
  P3xBox.size(50);
  P3xBox.attribute('type', 'number');

  P3xBox.input(() => {
    P3.x = ((parseInt(P3xBox.value()) + width / 2));
    if (isNaN(P3.x)) P3.x = width / 2;
  });

  //P3's Y
  P3yBox = createInput('');
  P3yBox.position(width + 80, 350);
  P3yBox.size(50);
  P3yBox.attribute('type', 'number');

  P3yBox.input(() => {
    P3.y = -parseInt(P3yBox.value()) + height / 2;
    if (isNaN(P3.y)) P3.y = height / 2;
  });

  //P4's X
  P4xBox = createInput('');
  P4xBox.position(width + 20, 400);
  P4xBox.size(50);
  P4xBox.attribute('type', 'number');

  P4xBox.input(() => {
    P4.x = ((parseInt(P4xBox.value()) + width / 2));
    if (isNaN(P4.x)) P4.x = width / 2;
  });

  //P4's Y
  P4yBox = createInput('');
  P4yBox.position(width + 80, 400);
  P4yBox.size(50);
  P4yBox.attribute('type', 'number');

  P4yBox.input(() => {
    P4.y = -parseInt(P4yBox.value()) + height / 2;
    if (isNaN(P4.y)) P4.y = height / 2;
  });

  //P5's X
  P5xBox = createInput('');
  P5xBox.position(width + 20, 450);
  P5xBox.size(50);
  P5xBox.attribute('type', 'number');

  P5xBox.input(() => {
    P5.x = ((parseInt(P5xBox.value()) + width / 2));
    if (isNaN(P5.x)) P5.x = width / 2;
  });

  //P5's Y
  P5yBox = createInput('');
  P5yBox.position(width + 80, 450);
  P5yBox.size(50);
  P5yBox.attribute('type', 'number');

  P5yBox.input(() => {
    P5.y = -parseInt(P5yBox.value()) + height / 2;
    if (isNaN(P5.y)) P5.y = height / 2;
  });
}

function draw() {
  change = speedSlider.value();

  background(240);
  fill(255, 255, 255);

  calcBezierPoints(t);

  strokeWeight(1);
  if (coordsSystemBox.checked()) {
    drawGrid();
  }

  drawBezierPoints();

  if (helpLinesBox.checked()) {
    helpLines();
  }

  standardBezierPoints();

  if (bezierCurverBox.checked()) {
    drawBezierCurve();
  }

  if (t < 1) {
    t += change;
  } else {
    t = 0;
  }

  //t value text
  if (bezierCurverBox.checked()) {
    strokeWeight(3);
    stroke(0);
    fill(256, 17, 0);
  } else {
    strokeWeight(3);
    stroke(0);
    fill(15, 200, 15);
  }
  text("t = " + Math.floor(t * 100) / 100, 580, 605);

  //Coordinates of the control points
  text("P0 har X: " + (P0.x - width / 2) + ", Y: " + ((P0.y * -1) + height / 2), 580, 620);
  text("P1 har X: " + (P1.x - width / 2) + ", Y: " + ((P1.y * -1) + height / 2), 580, 635);
  text("P2 har X: " + (P2.x - width / 2) + ", Y: " + ((P2.y * -1) + height / 2), 580, 650);
  text("P3 har X: " + (P3.x - width / 2) + ", Y: " + ((P3.y * -1) + height / 2), 580, 665);
  text("P4 har X: " + (P4.x - width / 2) + ", Y: " + ((P4.y * -1) + height / 2), 580, 680);
  text("P5 har X: " + (P5.x - width / 2) + ", Y: " + ((P5.y * -1) + height / 2), 580, 695);

  placeholderNumbers();
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
  E.x = lerp(P4.x, P5.x, tvalue);
  E.y = lerp(P4.y, P5.y, tvalue);

  F.x = lerp(A.x, B.x, tvalue);
  F.y = lerp(A.y, B.y, tvalue);
  G.x = lerp(B.x, C.x, tvalue);
  G.y = lerp(B.y, C.y, tvalue);
  H.x = lerp(C.x, D.x, tvalue);
  H.y = lerp(C.y, D.y, tvalue);
  I.x = lerp(D.x, E.x, tvalue);
  I.y = lerp(D.y, E.y, tvalue);

  J.x = lerp(F.x, G.x, tvalue);
  J.y = lerp(F.y, G.y, tvalue);
  K.x = lerp(G.x, H.x, tvalue);
  K.y = lerp(G.y, H.y, tvalue);
  L.x = lerp(H.x, I.x, tvalue);
  L.y = lerp(H.y, I.y, tvalue);

  M.x = lerp(J.x, K.x, tvalue);
  M.y = lerp(J.y, K.y, tvalue);
  N.x = lerp(K.x, L.x, tvalue);
  N.y = lerp(K.y, L.y, tvalue);

  P.x = lerp(M.x, N.x, tvalue);
  P.y = lerp(M.y, N.y, tvalue);
}

function drawGrid() {
  //akser
  strokeWeight(3);
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);

  //grid linjer
  strokeWeight(1);
  line(50, height, 50, 0);
  line(100, height, 100, 0);
  line(150, height, 150, 0);
  line(200, height, 200, 0);
  line(250, height, 250, 0);
  line(300, height, 300, 0);

  line(400, height, 400, 0);
  line(450, height, 450, 0);
  line(500, height, 500, 0);
  line(550, height, 550, 0);
  line(600, height, 600, 0);
  line(650, height, 650, 0);

  line(width, 50, 0, 50);
  line(width, 100, 0, 100);
  line(width, 150, 0, 150);
  line(width, 200, 0, 200);
  line(width, 250, 0, 250);
  line(width, 300, 0, 300);

  line(width, 350, 0, 350);
  line(width, 400, 0, 400);
  line(width, 450, 0, 450);
  line(width, 500, 0, 500);
  line(width, 550, 0, 550);
  line(width, 600, 0, 600);
  line(width, 650, 0, 650);


  //tekst for akser
  fill(0, 0, 0);
  text("x-aksen", (width - 45), (height / 2) - 10);
  text("y-aksen", (width / 2 + 5), 10);

  //positiv x
  text("50", (width / 2) + 30, (height / 2) + 20);
  text("100", (width / 2) + 25 + (50 * 1), (height / 2) + 20);
  text("150", (width / 2) + 25 + (50 * 2), (height / 2) + 20);
  text("200", (width / 2) + 25 + (50 * 3), (height / 2) + 20);
  text("250", (width / 2) + 25 + (50 * 4), (height / 2) + 20);
  text("300", (width / 2) + 25 + (50 * 5), (height / 2) + 20);
  text("350", (width / 2) + 25 + (50 * 6), (height / 2) + 20);

  //negativ x
  text("-50", (width / 2) - 45, (height / 2) + 20);
  text("-100", (width / 2) - 45 - (50 * 1), (height / 2) + 20);
  text("-150", (width / 2) - 45 - (50 * 2), (height / 2) + 20);
  text("-200", (width / 2) - 45 - (50 * 3), (height / 2) + 20);
  text("-250", (width / 2) - 45 - (50 * 4), (height / 2) + 20);
  text("-300", (width / 2) - 45 - (50 * 5), (height / 2) + 20);
  text("-350", (width / 2) - 45 - (50 * 6), (height / 2) + 20);

  //positiv y
  text("50", (width / 2) - 20, (height / 2) - 35);
  text("100", (width / 2) - 25, (height / 2) - 35 - (50 * 1));
  text("150", (width / 2) - 25, (height / 2) - 35 - (50 * 2));
  text("200", (width / 2) - 25, (height / 2) - 35 - (50 * 3));
  text("250", (width / 2) - 25, (height / 2) - 35 - (50 * 4));
  text("300", (width / 2) - 25, (height / 2) - 35 - (50 * 5));
  text("350", (width / 2) - 25, (height / 2) - 35 - (50 * 6));


  //negativ y
  text("-50", (width / 2) - 25, (height / 2) - 35 + (50 * 2));
  text("-100", (width / 2) - 35, (height / 2) - 35 + (50 * 3));
  text("-150", (width / 2) - 35, (height / 2) - 35 + (50 * 4));
  text("-200", (width / 2) - 35, (height / 2) - 35 + (50 * 5));
  text("-250", (width / 2) - 35, (height / 2) - 35 + (50 * 6));
  text("-300", (width / 2) - 35, (height / 2) - 35 + (50 * 7));
  text("-350", (width / 2) - 35, (height / 2) - 35 + (50 * 8));
}

function drawBezierPoints() {
  strokeWeight(3);
  fill(0, 255, 0);
  stroke(15, 180, 15);
  line(P0.x, P0.y, P1.x, P1.y);
  line(P1.x, P1.y, P2.x, P2.y);
  line(P2.x, P2.y, P3.x, P3.y);
  line(P3.x, P3.y, P4.x, P4.y);
  line(P4.x, P4.y, P5.x, P5.y);
  stroke(0);
  circle(P0.x, P0.y, dS);
  circle(P1.x, P1.y, dS);
  circle(P2.x, P2.y, dS);
  circle(P3.x, P3.y, dS);
  circle(P4.x, P4.y, dS);
  circle(P5.x, P5.y, dS);
}

function standardBezierPoints() {
  fill(255, 255, 255);
  circle(A.x, A.y, dS);
  circle(B.x, B.y, dS);
  circle(C.x, C.y, dS);
  circle(D.x, D.y, dS);
  circle(E.x, E.y, dS);
}

function helpLines() {
  fill(255, 255, 255);

  line(A.x, A.y, B.x, B.y);
  line(B.x, B.y, C.x, C.y);
  line(C.x, C.y, D.x, D.y);
  line(D.x, D.y, E.x, E.y);

  line(F.x, F.y, G.x, G.y);
  line(G.x, G.y, H.x, H.y);
  line(H.x, H.y, I.x, I.y);
  circle(F.x, F.y, dS);
  circle(G.x, G.y, dS);
  circle(H.x, H.y, dS);
  circle(I.x, I.y, dS);

  line(J.x, J.y, K.x, K.y);
  line(K.x, K.y, L.x, L.y);
  circle(J.x, J.y, dS);
  circle(K.x, K.y, dS);
  circle(L.x, L.y, dS);

  line(M.x, M.y, N.x, N.y);
  circle(M.x, M.y, dS);
  circle(N.x, N.y, dS);

}

function drawBezierCurve() {
  strokeWeight(3);

  fill(255, 0, 0);
  circle(P.x, P.y, dS)

  let pT = t;
  while (pT >= 0) {
    pT -= change;
    calcBezierPoints(pT);
    circle(P.x, P.y, dB);
  }
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
    if (coordsSystemBox.checked()) {
      snapCheck();
    }
  }
}

function backToMain() {
  window.location.href = "index.html";
}

function placeholderNumbers() {
  P0xBox.attribute('placeholder', 'X');
  P0yBox.attribute('placeholder', 'Y');
  P1xBox.attribute('placeholder', 'X');
  P1yBox.attribute('placeholder', 'Y');
  P2xBox.attribute('placeholder', 'X');
  P2yBox.attribute('placeholder', 'Y');
  P3xBox.attribute('placeholder', 'X');
  P3yBox.attribute('placeholder', 'Y');
  P4xBox.attribute('placeholder', 'X');
  P4yBox.attribute('placeholder', 'Y');
  P5xBox.attribute('placeholder', 'X');
  P5yBox.attribute('placeholder', 'Y');
}

function snapCheck() {
  let xCoordinates = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];
  let yCoordinates = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];
  let maxSnapDistance = 10;

  let snapped = false;

  for (let i = 0; i < xCoordinates.length; i++) {
    for (let j = 0; j < yCoordinates.length; j++) {
      let x = xCoordinates[i];
      let y = yCoordinates[j];
      let d = dist(selectedPoint.x, selectedPoint.y, x, y);

      if (d < maxSnapDistance) {
        selectedPoint.x = x;
        selectedPoint.y = y;
        snapped = true;
        break;
      }
    }
    if (snapped) break;
  }
}
