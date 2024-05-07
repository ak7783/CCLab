
let cImage;
let aState;

let posX = 80, posY = 300;


function preload() {
    cImage = loadImage('images/greek-four-columns.jpeg')
    aState = loadImage('images/athena-statue.png')
}

function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("p5-canvas-container");
    cImage.resize(width, height);
    aState.resize(width / 2, height / 2);

}

function draw() {
    background(100);
    image(cImage, 0, 0);
    push();
    imageMode(CENTER);
    image(aState, posX, posY);
    pop();
    if (mouseX > posX - aState.width / 2 && mouseX < posX + aState.width / 2) {
        if (mouseY > posY - aState.height / 2 && mouseY < posY + aState.height / 2) {
            if (mouseIsPressed) {
                posX = mouseX;
                posY = mouseY;
            }
        }

    }

    if (posY + aState.height / 2 > height / 2 + 80 && posY + aState.height / 2 < height / 2 + 100) {
        rect(0, 0, 100, 100);
    }


}

