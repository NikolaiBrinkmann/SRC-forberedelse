// Same coordinates as the given formula, just recalculated into the codes interpretation.
let bezierPoints = [[500, 450], [550, 250], [450, 100], [250, 100], [150, 250], [200, 450]];

function setup() {
  createCanvas(750, 750);
  background(220);
  deCasteljauCalc(bezierPoints);
}

function deCasteljauCalc(points) {
  // Loop through t values from 0 to 1 to draw the curve
  for (let t = 0; t < 1; t += 0.005) {
    // Calculate points using De Casteljau's algorithm
    let result = crlPtReduceDeCasteljau(points, t)
    // Get the final point from the calculation
    let lastPoint = result[result.length - 1][0]
    // Draw a circle at the calculated point
    fill(255, 0, 0)
    circle(lastPoint[0], lastPoint[1], 10)
  }

  fill(0, 255, 0);
  circle(points[0][0], points[0][1], 10);
  circle(points[1][0], points[1][1], 10);
  circle(points[2][0], points[2][1], 10);
  circle(points[3][0], points[3][1], 10);
  circle(points[4][0], points[4][1], 10);
  circle(points[5][0], points[5][1], 10);
}

// Implementation of De Casteljau's algorithm for any degree Bezier curve
// See: https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm 
function crlPtReduceDeCasteljau(points, t) {
  // Create array to store all intermediate points, starting with original points
  let retArr = [points.slice()];

  // Continue calculating intermediate points until we reach the final point
  while (points.length > 1) {
    let midpoints = [];
    // Calculate intermediate points between each pair of control points
    for (let i = 0; i + 1 < points.length; ++i) {
      let ax = points[i][0];
      let ay = points[i][1];
      let bx = points[i + 1][0];
      let by = points[i + 1][1];
      // Linear interpolation between points: a * (1-t) + b * t = a + (b - a) * t
      midpoints.push([
        ax + (bx - ax) * t,
        ay + (by - ay) * t,
      ]);
    }
    // Store intermediate points and continue with next iteration
    retArr.push(midpoints)
    points = midpoints;
  }
  return retArr;
}
