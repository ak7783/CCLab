let time = 0;
let x = 10;
let y = 10;
let ob = 30;//obstacle  
let speed1 = 1;//obstacle speeed
let speed2 = 2;
let level = 1;
let positive;
let hero;
let doghouse;
let oby = 1;

function preload() {
    // soundFormats('wav');
    // positive=loadSound("positive1.wav");
    hero = loadImage("images/theseus-forward.png");
    doghouse = loadImage("images/finish.png");
    mino = loadImage("images/minotaur.png");

}
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-canvas-container");
}

function draw() {

    background('#FAF3DD');
    // ellipse(x,y,10,10);


    if (level == 1) {
        level1();
    }
    if (level == 2) {
        level2();
    }
    if (level == 3) {
        level3();
    }

    text(time, 300, 50);
    time = (time + 1 / 60);
    text('score', 250, 50);
    image(doghouse, 380, 380, 20, 20);


    purpledot();
}

function purpledot() {
    // ellipse(ob,100,50,50);
    // image(evilcat, ob, 100, 50, 50);

    if (red(get(x, y)) == 0)//check if there's no red (obsticles)
    {
        x = 10;
        y = 10;
    }
    if (red(get(x, y)) == 67)//check if there's no red (obsticles)

    {
        x = 10;
        y = 10;

        // 	text(time, 360,15);
        // time=(time+1/60);
    }
    if (keyCode == RIGHT_ARROW) {
        x = x + 1;
    }

    if (keyCode == LEFT_ARROW) {
        x = x - 1;
    }

    if (keyCode == DOWN_ARROW) {
        y = y + 1;
    }

    if (keyCode == UP_ARROW) {
        y = y - 1;
    }
    fill(177, 106, 255);
    image(hero, x, y, 15, 15);
    if (x > 370 && y > 370) {

        level = level + 1;
        x = 10;
        y = 10;

    }

}

function level1() {

    fill('#362023');
    line(400, 1, 1, 1);
    line(399, 399, 399, 1);
    line(1, 400, 1, 25);
    line(1, 75, 30, 75);
    line(30, 75, 30, 30);
    line(75, 75, 75, 30);
    line(75, 30, 100, 30);
    line(100, 30, 100, 110);
    line(1, 150, 30, 150);
    line(1, 250, 30, 250);
    line(1, 350, 30, 350);
    line(50, 110, 75, 110);
    line(75, 110, 75, 150);
    line(75, 150, 300, 150);
    line(300, 150, 300, 110);
    line(300, 110, 325, 110);
    line(325, 110, 325, 250);
    line(325, 250, 360, 250);
    line(360, 250, 360, 345);
    line(360, 345, 399, 345);
    line(100, 75, 325, 75);
    line(325, 75, 325, 30);
    line(325, 30, 360, 30);
    line(360, 30, 360, 150);
    line(360, 150, 325, 150);
    line(200, 35, 200, 115);
    line(150, 1, 150, 45);
    line(250, 1, 250, 45);
    line(399, 200, 369, 200);
    line(150, 110, 150, 200);
    line(150, 200, 105, 200);
    line(150, 399, 150, 350);
    line(150, 350, 75, 350);
    line(75, 350, 75, 200);
    line(75, 200, 30, 200);
    line(30, 300, 125, 300);
    line(300, 399, 300, 350);
    line(300, 350, 200, 350);
    line(200, 350, 200, 200);
    line(200, 250, 105, 250);
    line(155, 250, 155, 300);
    line(360, 300, 260, 300);
    line(260, 300, 260, 200);

    line(400, 400, 400, 1);

    // ellipse(ob,200,50,50);
    text('level 1', width / 2, 20, 250, 50);
    fill("purple");

    //middle
    push();
    translate(ob - 200, oby * 100);
    image(mino, 150, 50, 80, 80);
    pop();
    ob = ob + speed1;
    ob = ob + speed2;
    if (ob < 1 || ob > 400) {
        speed1 = speed1 * -1;
    }
    // top
    push();
    translate(ob - 200, oby * 200);
    scale(1, 1);
    image(mino, 150, -150, 80, 80);
    pop();


    // bottom mino
    push();
    translate(ob - 200, oby * 200);
    image(mino, 150, 80, 80, 70);
    pop();


    if (ob < 1 || ob > 400) {
        speed2 = speed2 * -1;
    }
}

function level2() {
    fill(67, 59, 59);
    line(1, 1, 1, 399);
    line(1, 399, 399, 399);
    line(399, 399, 399, 1);
    line(399, 1, 1, 1);
    line(1, 50, 35, 50);
    line(1, 125, 35, 125);
    line(1, 275, 35, 275);
    line(1, 350, 35, 350);
    line(35, 125, 35, 75);
    line(137, 1, 137, 35);
    line(350, 1, 350, 35);
    line(100, 175, 100, 50);
    line(100, 75, 175, 75);
    line(175, 75, 175, 50);
    line(35, 175, 175, 175);
    line(175, 175, 175, 275);
    line(175, 275, 225, 275);
    line(225, 275, 225, 50);
    line(225, 50, 325, 50);
    line(325, 50, 325, 75);
    line(275, 75, 399, 75);
    line(350, 75, 350, 125);
    line(125, 125, 260, 125);
    line(399, 175, 275, 175);
    line(350, 175, 350, 225);
    line(325, 175, 325, 125);
    line(399, 350, 360, 350);
    line(360, 350, 360, 275);
    line(360, 275, 325, 275);
    line(325, 275, 325, 225);
    line(225, 399, 225, 350);
    line(325, 399, 325, 325);
    line(325, 325, 125, 325);
    line(125, 325, 125, 275);
    line(275, 360, 275, 225);
    line(175, 325, 175, 350);
    line(175, 350, 75, 350);
    line(75, 350, 75, 215);
    line(75, 215, 35, 215);
    line(175, 215, 135, 215);
    line(75, 315, 35, 315);
    fill(67, 0, 0);
    line(400, 400, 400, 1);

    text('level 2', width / 2, 20, 250, 50);
    fill("purple");


    //middle
    push();
    translate(ob - 200, oby * 100);
    image(mino, 150, 50, 80, 80);
    pop();
    ob = ob + speed1;
    ob = ob + speed2;
    if (ob < 1 || ob > 400) {
        speed1 = speed1 * -1;
    }
    // top
    push();
    translate(ob - 200, oby * 200);
    scale(1, 1);
    image(mino, 150, -150, 80, 80);
    pop();
    ob = ob + speed1;
    ob = ob + speed2;
    if (ob < 1 || ob > 400) {
        speed1 = speed1 * -1;
    }


    // bottom mino
    push();
    translate(ob - 200, oby * 200);
    image(mino, 150, 80, 80, 70);
    pop();


    if (ob < 1 || ob > 400) {
        speed2 = speed2 * -1;
    }
}
function level3() {
    background(255, 255, 255);
    textSize(49);
    fill(0, 0, 0);
    text("Congratulations!", 1, 200);
    image(doghouse, 200, 200, 200, 200);
    image(hero, 30, 200, 200, 200);
}
