let cImage;
let aState;
let posX = 80, posY = 300;
let gameStarted = false;

function preload() {
    cImage = loadImage('images/greek-four-columns.jpeg');
    aState = loadImage('images/athena-statue.png');
    rockSound = loadSound('images/stone-slide-sound.mov');
}

function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("p5-canvas-container");
    cImage.resize(width, height);
    aState.resize(width / 2, height / 2);
}

function draw() {
    if (!gameStarted) {
        // Initial screen
        background(0, 0, 255);
        textAlign(CENTER);
        textSize(32);
        fill(0);
        text("Athena needs help returning her statue!", width / 2, height / 2);
        text("Click anywhere to start.", width / 2, height / 2 + 40);
    } else {
        background(100);
        image(cImage, 0, 0);
        push();
        imageMode(CENTER);
        image(aState, posX, posY);
        pop();

        if (mouseX > posX - aState.width / 2 && mouseX < posX + aState.width / 2 &&
            mouseY > posY - aState.height / 2 && mouseY < posY + aState.height / 2) {
            if (mouseIsPressed) {
                posX = mouseX;
                posY = mouseY;
            }
        }

        // Check if the image is within the specified range and the mouse is pressed
        if (posY + aState.height / 2 > height / 2 + 100 && posY + aState.height / 2 < height / 2 + 120 &&
            posX > width / 2 - 150 && posX < width / 2 + 150 && mouseIsPressed) {
            textAlign(CENTER);
            textSize(20);
            fill('green');
            textSize(30);
            text("Yay, you did it! You found Athena Parthenos!", width / 2, height / 2 - 200)

            if (!rockSound.isPlaying()) {
                rockSound.play();
            }
        }
    }
}

function mousePressed() {
    if (!gameStarted) {
        gameStarted = true;
    }
}
