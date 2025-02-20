function setup() {
  createCanvas(400, 400);
  background(220);
  let linearButton = createButton("Lineær Bezier");
  linearButton.position(75, 200);
  linearButton.mousePressed(linearBezier);
  let quadraticButton = createButton("Kvadratisk Bezier");
  quadraticButton.position(200, 200);
  quadraticButton.mousePressed(quadraticBezier);
  let cubicButton = createButton("Kubisk Bezier");
  cubicButton.position(75, 225);
  cubicButton.mousePressed(cubicBezier);
  let quarticButton = createButton("Kvartisk Bezier");
  quarticButton.position(200, 225);
  quarticButton.mousePressed(quarticBezier);
  let quinticButton = createButton("Kvintisk Bezier");
  quinticButton.position(75, 250);
  quinticButton.mousePressed(quinticBezier);
  let nDegreeButton = createButton("n. grad Bezier");
  nDegreeButton.position(200, 250);
  nDegreeButton.mousePressed(nDegreeBezier);
}

function linearBezier() {
  window.location.href = "linearFrame.html";
}

function quadraticBezier() {
  window.location.href = "quadraticFrame.html";
}

function cubicBezier() {
  window.location.href = "cubicFrame.html";
}

function quarticBezier() {
  window.location.href = "quarticFrame.html";
}

function quinticBezier() {
  window.location.href = "quinticFrame.html";
}

function nDegreeBezier() {
  window.location.href = "nDegreeFrame.html";
}
