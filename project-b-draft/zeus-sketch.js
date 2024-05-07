let handpose;
let video;
let hands = [];
let nodes = [];
let olympus;


function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("p5-canvas-container");
    video = createCapture(VIDEO);
    video.size(width, height);

    handpose = ml5.handpose(video, modelReady);

    // This sets up an event that fills the global variable "predictions"
    // with an array every time new hand poses are detected
    handpose.on("hand", (results) => {
        hands = results;
        checkHandOpen();
    });

    // Hide the video element, and just show the canvas
    video.hide();
}


function modelReady() {
    console.log("Model ready!");
}

function preload() {
    olympus = loadImage("images/olympus1-remove.png");
}

function draw() {
    background(0);
    image(video, 0, 0, width, height);
    image(olympus, width / 2 - 300, height / 2, width, height);

    for (let i = nodes.length - 1; i >= 0; i--) {
        nodes[i].updatePosition();
        nodes[i].render();
        if (nodes[i].myLightning.length <= 0) {
            nodes.splice(i, 1); // Remove node if it has no lightning bolts
        }
    }
}

function checkHandOpen() {
    // Loop through detected hands
    for (let i = 0; i < hands.length; i++) {
        const hand = hands[i];
        const thumbTip = createVector(hand.landmarks[4][0], hand.landmarks[4][1]); // Get the landmark for the tip of the thumb
        const littleFingerTip = createVector(hand.landmarks[20][0], hand.landmarks[20][1]); // Get the landmark for the tip of the little finger

        let open = thumbTip.dist(littleFingerTip);

        if (open > 60) { // Hand is closed
            // Create a new node at the tip of the thumb
            nodes.push(new Node(thumbTip.x, thumbTip.y));
        }
    }
}

class Node {
    constructor(x, y) {
        this.xPos = x;
        this.yPos = y;
        this.direction = random(TWO_PI);
        this.speed = random(15, 20);
        this.sync = millis() + random(300, 1000);
        this.myLightning = [];
    }

    updatePosition() {
        this.pxPos = this.xPos;
        this.pyPos = this.yPos;
        this.direction += radians(random(-20, 20));
        this.xPos += sin(this.direction) * this.speed;
        this.yPos += cos(this.direction) * this.speed;
        if (this.xPos > width || this.xPos < 0 || this.yPos > height || this.yPos < 0) {
            this.direction = atan2(width / 2 - this.xPos, height / 2 - this.yPos);
        }
    }

    render() {
        if (millis() < this.sync) {
            this.myLightning.push(new Lightning(this.xPos, this.yPos, this.pxPos, this.pyPos));
        }

        for (let i = this.myLightning.length - 1; i >= 0; i--) {
            this.myLightning[i].render();
        }
    }
}

class Lightning {
    constructor(x1, y1, x2, y2) {
        this.pointA = createVector(x1, y1);
        this.pointB = createVector(x2, y2);
        this.count = dist(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y) / 5;
        this.sync = millis() + 250;
        this.myPoints = this.assemblePoints();
    }

    assemblePoints() {
        let nodes = [];
        for (let iter = 1 / this.count; iter < 1; iter += 1 / this.count) {
            let x = lerp(this.pointA.x, this.pointB.x, iter) + random(-5, 5);
            let y = lerp(this.pointA.y, this.pointB.y, iter) + random(-5, 5);
            nodes.push(createVector(x, y));
        }
        return nodes;
    }

    render() {
        if (millis() > this.sync) {
            return;
        }

        strokeWeight(random(1, 5));
        stroke(255, 255, random(255), random(100, 255));
        let oldPoint = this.pointA;
        for (let i = 0; i < this.myPoints.length; i++) {
            line(oldPoint.x, oldPoint.y, this.myPoints[i].x, this.myPoints[i].y);
            oldPoint = this.myPoints[i];
        }
        line(oldPoint.x, oldPoint.y, this.pointB.x, this.pointB.y);
    }
}