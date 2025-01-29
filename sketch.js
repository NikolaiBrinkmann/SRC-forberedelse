let p0 = {
    x : 15,
    y : 15,
}

let p1 = {
    x : 150,
    y : 200,
}

let p2 = {
    x: 320,
    y: 45,
}

let d = 10;

function setup() {
    createCanvas(400, 400);
    background(220);
    fill(0, 0, 0);
    noStroke;
    strokeWeight(3);
    circle(p0.x, p0.y, d);
    circle(p1.x, p1.y, d);
    circle(p2.x, p2.y, d);
}
  
function draw() {
}

function main(){
    
}