let cImage;

function setup() {
    createCanvas(640, 480).parent("p5-canvas-container");
    cImage = loadImage('greek-four-columns.jpeg', imageLoaded);
}

function draw() {
    background(0);
    if (cImage) {
        image(cImage, width / 2, height / 2);
    }
}


