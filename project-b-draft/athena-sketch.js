let cImage;
let aState;
let posX = 80,
    posY = 300;
let gameStarted = false;
let nextButton;
let nextButtonVisible = false;
let rockSound;
let soundPlayed = false; // Variable to track whether the sound has been played

function preload() {
    cImage = loadImage('images/parthenon.jpeg');
    aState = loadImage('images/athena-drawing.png');
    rockSound = loadSound('images/stone-slide-sound.mov');
}

function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("p5-canvas-container");
    cImage.resize(width, height);
    aState.resize(width / 3, height / 2);

    // Create next button
    nextButton = createButton('Next');
    nextButton.position(width / 2 - 50, height - 50);
    nextButton.mousePressed(goToNextPart);
    nextButton.hide();
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

        if (posY + aState.height / 2 > height / 2 + 220 && posY + aState.height / 2 < height / 2 + 270 &&
            posX > width / 2 - 240 && posX < width / 2 + 270) {
            textAlign(CENTER);
            textSize(20);
            fill('black');
            rect(0, 0, width, 100);
            fill('green');
            textSize(30);
            text("Yay, you did it! You found Athena Parthenos!", width / 2, height / 2 - 200)

            if (!soundPlayed) {
                rockSound.play();
                soundPlayed = true;
            }


            nextButtonVisible = true;
        }

        if (nextButtonVisible) {
            nextButton.show();
        } else {
            nextButton.hide();
        }
    }
}

function mousePressed() {
    if (!gameStarted) {
        gameStarted = true;
    }
}

function goToNextPart() {

    window.location.reload();
    function goToNextPart() {
        // Redirect to another image
        window.location.href = 'greek-four-columns';
    }
}
