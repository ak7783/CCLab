let openImg;
let clockGif;
let closeImg;
let boxWidth = 200;
let boxHeight = 200;
let boxX;
let boxY;
let isOpen = false;
let clockY;
let angelSound;
let bobHeight = 0;
let index = 1;
let loadTm = 200;
let bobAmount;
let watchImg;
let watchImgX;
let watchImgY;

let clockWidth = 280; // New width for the clock GIF
let clockHeight = 140; // New height for the clock GIF



function preload() {
    closeImg = loadImage('images/Screenshot 2024-05-06 at 9.40 Background Removed.42 PM.png');
    openImg = loadImage('images/Screenshot 2024-05-06 at 9.46 Background Removed.11 PM.png');
    watchImg = loadImage('images/pocketwatch.png');
    clockGif = loadImage('images/clock.gif');
    angelSound = loadSound('images/ahhhh-37191.mp3');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("p5container");
    boxX = (width - boxWidth) / 2;
    boxY = (height - boxHeight) / 2;
    clockY = height / 2 - boxHeight / 2 - 13;
    watchImgX = boxX + (boxWidth - watchImg.width) / 2 - 60;
    watchImgY = height / 2 - boxHeight / 2 - 400;

}

function draw() {


    if (index == 1) {
        background(0, 145, 100);
        if (isOpen) {
            image(openImg, boxX, boxY, boxWidth, boxHeight);
            image(clockGif, boxX + 50 + (boxWidth - clockGif.width) / 2 + 50, clockY - 30, clockWidth, clockHeight); // Display clock GIF
            if (clockY > boxY - clockGif.height + 200) {
                clockY -= .5;
            } else {
                push();
                rectMode(CENTER);
                fill(0, 145, 100);
                rect(width / 2, height - 190, 300, 50)
                pop();
                textSize(16);
                textFont('Orbitron');
                fill('red');
                text("Click here to stop the clock", (width - boxWidth) / 2 + 100, boxY + 300 + bobHeight);
            }
        } else {
            image(closeImg, boxX, boxY, boxWidth, boxHeight);
            clockY = height / 2 - boxHeight / 2 - 30;
            bobAmount = sin(bobHeight) * 3;
            bobHeight = bobHeight + 0.15;
            textSize(40);
            textFont('Orbitron');
            fill("blue");
            textAlign(CENTER);
            text("Open the box", width / 2, boxY - 30 + bobAmount);
        }
    } else {
        if (loadTm > 0) {
            loadTm--;
        } else {
            window.location.href = "home-page.html";
        }
        background(0);
        text("Your destination: Ancient Greece: 12 Century BC", width / 2, boxY + 300 + bobAmount);
        image(watchImg, boxX - 80 + (boxWidth - clockGif.width) / 2 + 50, clockY - 30, clockWidth - 100, clockHeight);
    }
}

function mousePressed() {
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height - 190 - 50 && mouseY < height - 190 + 50) {
        index = 2;
    }
    if (mouseX > boxX && mouseX < boxX + boxWidth &&
        mouseY > boxY && mouseY < boxY + boxHeight) {
        if (!isOpen) {
            isOpen = true;
            angelSound.play();
            angelSound.setVolume(0.08);
        } else {
            isOpen = false;
            if (angelSound.isPlaying()) {
                angelSound.stop();
            }
        }
    }
}
