let distC = 100;

//gas
let bX = [];
let bY = [];
let sBubbles = [];
let ySpdBubbles = [];
let bNumber = 5;

//tentacles
let numLines = 40;
let radius = 250;
let centerX, centerY;

// seaweed
let lines = 20;
let lineHeights = [];
let lineSpeeds = [];

// bubble array
let number = 40;
let s = [];
let x = [];
let y = [];
let speedS = [];

// eyes
let xEyes;
let yEyes;
let sEyes;

//spikes
let spikeAngle = 45;
let spikeRadius = 90;
let numTriangles = 60;
let rotationSpeed = 20;

//body grows with mouse position
let maximumOct = 400;
let distanceOct = 100;

let colorLarge;

let xOct, yOct;
let sizeOct;
let xSpd = 1,
  ySpd = 1;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");


  //initial position of oct body
  xOct = width / 2;
  yOct = height / 2;

  centerX = width / 2;
  centerY = height / 2;
  centerX = 200;
  centerY = 100;
  stroke(255);

  for (let i = 0; i < numLines; i++) {
    let angle = map(i, 0, numLines, 100, TWO_PI);
    let x1 = centerX + 10;
    let y1 = centerY;
    let x2 = centerX + cos(angle) * radius;
    let y2 = centerY + sin(angle) * radius;
    let frequency = map(i, 0, numLines, 0.15, 0.001);
    let amplitude = map(i, 0, numLines, 5, 10);
    squigglyLine(x1, y1, x2, y2, frequency, amplitude);
  }

  for (let i = 0; i < number; i++) {
    s[i] = 5;
    x[i] = random(width);
    y[i] = random(height);
    speedS[i] = random(0, 0.3); //speed bubbles pop
  }

  for (let i = 0; i < width; i++) {
    lineHeight = random(height);
    lineHeights[i] = lineHeight / 3;
    lineSpeeds[i] = random(1, 5);
  }
}
function squigglyLine(x1, y1, x2, y2, freq, amp) {
  for (let i = 0; i < width / 6; i++) {
    let x = x1 + ((x2 - x1) * i) / 100;
    let y = y1 + ((y2 - y1) * i) / 100;
    y += 0.8 * sin((i + frameCount) * freq) * 2 * amp;

    push();
    fill("#9A48D0");
    stroke("green");
    strokeWeight(0.8);
    ellipse(x, y, 5, 10);

    pop();
  }
  push();

  if (distC > sizeOct) {
    stroke(0);
    strokeWeight(0.7);
    fill("#9A48D0");
  } else {
    strokeWeight(0.7);
    fill(250, colorLarge, 0);
  }
  circle(xOct, yOct, sizeOct);
  pop();
}

function draw() {
  //noLoop();

  if (frameCount % 50 == 0) {
    xSpd = random(-10, 10);
    ySpd = random(-10, 10);
  }

  if (xOct < sizeOct/2 || xOct > width-sizeOct/2) {
    xSpd *= -1;
  }
  if (yOct < sizeOct/2 || yOct > height-sizeOct/2) {
    ySpd *= -1;
  }

  xOct = xOct + xSpd;
  yOct = yOct + ySpd;

  distC = dist(mouseX, mouseY, xOct, yOct);
  // noLoop();

  background("#38AECC");

  for (let i = 0; i < bX.length; i++) {
    bY[i] = bY[i] - ySpdBubbles[i];

    stroke("#66A182");
    fill("#aef78e");
    circle(bX[i], bY[i], sBubbles[i]);
    noStroke();
    fill("yellow");
    ellipse(bX[i], bY[i], sBubbles[i], sBubbles[i] / 3);
  }

  for (let i = 0; i < number; i++) {
    push();
    fill("#ADD7F6");
    circle(x[i], y[i], s[i]);
    s[i] = sin(frameCount * speedS[i]);
    s[i] = map(s[i], -1, 0.5, 0.7, 10);

    let circleSize = s[i] * 0.3;
    fill("white");
    circle(x[i] - circleSize / 2 - 0.5, y[i] - circleSize / 1.2, circleSize);
    pop();
  }

  let distance = dist(xOct, yOct, mouseX, mouseY);

  //circle descreases with mouse position
  if (distance < distanceOct) {
    distC = dist(mouseX, mouseY, xOct, yOct);

    colorLarge = map(distC, 0, sizeOct, 0, 255);

    sizeOct = map(distance, 0, distanceOct, maximumOct, 200);
  } else {
    sizeOct = 200;
  }

  //bubble array for
  for (let i = 0; i < number; i++) {
    fill("#ADD7F6");
    circle(x[i], y[i], s[i]);
    s[i] = sin(frameCount * speedS[i]);

    let circleSize = s[i] * 0.4;
    fill("white");
    circle(x[i] - circleSize / 2 - 0.5, y[i] - circleSize / 1.2, circleSize);
  }

  //  let xOffset = sin(frameCount * 0.25) * 150;
  // let yOffset = cos(frameCount * 0.25) * 100;

  //seaweed array for
  for (let i = 0; i < lines; i++) {
    lineHeights[i] += lineSpeeds[i];

    if (lineHeights[i] < 0 || lineHeights[i] > height / 2 + 30) {
      lineSpeeds[i] = -lineSpeeds[i];
    }

    xLines = width * (i / lines);
    lineWidth = width / lines;

    // seaweed leaves
    let greenShade = (200, 220);
    fill(120, greenShade, 0);
    ellipse(
      xLines,
      height - lineHeights[i] / 2 + 100,
      lineWidth,
      lineHeights[i] / 2
    );

    // lines in seaweed
    fill(100);
    ellipse(
      xLines,
      height - lineHeights[i] / 2 + 100,
      lineWidth / 10,
      lineHeights[i] / 2
    );
  }

  for (let i = 0; i < numLines; i++) {
    let angle = map(i, 0, numLines, 0, TWO_PI);

    let x1 = xOct;
    let y1 = yOct;

    let x2 = xOct + cos(angle) * radius;
    let y2 = yOct + sin(angle) * radius;

    let frequency = map(i, 0, numLines, 0.15, 0.001);
    let amplitude = map(i, 0, numLines, 10, 30);

    squigglyLine(x1, y1, x2, y2, frequency, amplitude);
  }

  stroke(0);
  strokeWeight(0.05);
  drawFace(xOct, yOct, 100);
  // move();
}

function drawFace(xOct, Octy, sizeOct) {
  push();
  translate(xOct, yOct);
  rotate(frameCount * 0.09);

  if (checkMouse()) {
    fill("yellow");
    stroke(0);
    strokeWeight(0.2);
    //circle(0, 0, 2*s+40);

    // triangles
    translate(0, 0);
    for (let i = 0; i < numTriangles; i++) {
      let Spikex = spikeRadius * cos(spikeAngle + (TWO_PI / numTriangles) * i);
      let Spikey = spikeRadius * sin(spikeAngle + (TWO_PI / numTriangles) * i);
      drawSpikes(-Spikex, Spikey);
    }
    spikeAngle += rotationSpeed;
    // translate(0, -height / 2); //
  } else {
    fill("white");
  }

  for (let angle = 0; angle < 10 * TWO_PI; angle += PI / 80) {
    push();
    translate(s / 7, s / 7);
    rotate(frameCount * 5);

    let sizeEyes = map(angle, 2 * PI, 1.5 * TWO_PI, 1, 1.1);
    let R = map(angle, 0, 20 * TWO_PI, 0, 110);
    let xEyes = R * cos(angle);
    let yEyes = R * sin(angle);
    let hEyes = map(angle, 0, 2.5 * TWO_PI, 0, 100);
    fill(hEyes, 150, 80);
    drawEyes(xEyes, yEyes, sizeEyes);
    pop();
  }

  pop();
}

function drawEyes(xEyes, yEyes, sEyes) {
  push();
  translate(xEyes, yEyes);
  let speedEyes = sin(frameCount * 0.1) * 0.5;
  ellipse(0, 0, sEyes + 1);
  rotate(speedEyes);
  pop();
}

function checkMouse() {
  let value;
  let d = dist(mouseX, mouseY, xOct, yOct);
  if (d < 100) {
    value = true;
  } else {
    value = false;
  }
  return value;
}

function drawSpikes(Spikex, Spikey) {
  fill("black");
  stroke("white");
  triangle(Spikex, Spikey, Spikex, Spikey + 50, Spikex - 10, Spikey + 30);
}

function mousePressed() {
  for (let i = 0; i < bNumber; i++) {
    bX.push(random(xOct + 200, xOct - 200));
    bY.push(yOct);
    sBubbles.push(random(20, 30));
    ySpdBubbles.push(random(15, 30));
  }
}
