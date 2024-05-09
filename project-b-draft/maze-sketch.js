//credit to Victoria Phillips

let tImage;

function preload() {
    tImage = loadImage('images/theseus-back.png');
}

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("p5-canvas-container");
}

let x = 88;
let y = 120;
let w = 40;
let h = 60;
let cwhite = [255, 255, 255, 255];
let cblack = [0, 0, 0, 255];

function draw() {
    background('#FDFCD4');

    strokeWeight(4);
    stroke(0, 0, 0);
    fill('#5D382F');
    line(80, 80, 720, 80);
    line(80, 160, 80, 720);
    line(160, 160, 160, 480);
    line(240, 80, 240, 320);
    line(320, 160, 320, 320);
    line(400, 160, 400, 240);
    line(560, 160, 560, 560);
    line(480, 240, 480, 480);
    line(640, 160, 640, 640);
    line(720, 80, 720, 640);
    line(480, 640, 480, 720);
    line(400, 560, 400, 720);
    line(240, 320, 400, 320);
    line(80, 640, 320, 640);
    line(80, 480, 240, 480);
    line(240, 400, 400, 400);
    line(400, 320, 480, 320);
    line(320, 560, 640, 560);
    line(80, 720, 720, 720);
    line(240, 480, 240, 560);
    line(160, 560, 240, 560);
    line(320, 480, 480, 480);
    line(560, 640, 640, 640);
    line(400, 240, 480, 240);
    line(480, 160, 560, 160);

    noStroke();
    textSize(20);
    textStyle(BOLD);
    fill(0, 245, 10)
    // text('Start', 85, 125);
    fill(255, 10, 0)
    // text('Finish', 660, 710);
    textSize(36);
    fill(78, 58, 185);
    // text('THE MAZE GAME', 240, 40)
    textSize(12);
    fill('black');
    text('Use  arrow keys to move. When finished, press the reload button to play again!', 160, 60);
    noStroke();
    image(tImage, x, y, w, h);

    let upColor = get(x, y + 10);
    let downColor = get(x, y + 10);
    let rightColor = get(x + 10, y);
    let leftColor = get(x + 10, y);

    if (keyIsPressed) {
        if (keyCode == UP_ARROW) {
            if (eqColor(upColor, cblack)) {
                x = 88;
                y = 128;
            } else {
                y = y - 4;
            }
        } else if (keyCode == DOWN_ARROW) {
            if (eqColor(downColor, cblack)) {
                x = 88;
                y = 128;
            } else {
                y = y + 4;
            }
        } else if (keyCode == LEFT_ARROW) {
            if (eqColor(leftColor, cblack)) {
                x = 88;
                y = 128;
            } else {
                x = x - 4;
            }
        } else if (keyCode == RIGHT_ARROW) {
            if (eqColor(rightColor, cblack)) {
                x = 88;
                y = 128;
            } else {
                x = x + 4;
            }
        }
    }

    if (x <= 80 && y >= 64) {
        x = 88;
        y = 128;
    }
}

function eqColor(a, b) {
    return a[0] == b[0] && a[1] == b[1] &&
        a[2] == b[2] && a[3] == b[3];
}
