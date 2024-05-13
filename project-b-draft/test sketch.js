//Niyathi Kukkapalli
//G
//5/20/21
//final project!

function preload() {
    god = loadImage('Theseus.png')
    minotuar = loadImage('scroll.png')
    both = loadImage('scroll.jpg')
    art = loadImage('scroll.jpg')
    wow = loadImage('scroll.jpg')
    last = loadImage('scroll.png')
}

function setup() {
    createCanvas(600, 600);
    maroon = color(131, 1, 1)
    yellow = color(242, 198, 2)
    name = 'By: Niyathi Kukkapalli'
    rectMode(CENTER);
    imageMode(CENTER);

    //buttons
    startbutton = createButton('next')
    startbutton.size(100, 40)
    startbutton.position(150, 150)
    startbutton.style('background-color', yellow)
    startbutton.style('color', maroon)
    startbutton.style('font-size', '24px');
    startbutton.style('font-family', 'fantasy');
    startbutton.mouseReleased(nextPage)

    backbutton = createButton('back')
    backbutton.size(100, 40)
    backbutton.position(150, 250)
    backbutton.style('background-color', yellow)
    backbutton.style('color', maroon)
    backbutton.style('font-size', '24px')
    backbutton.style('font-family', 'fantasy');
    backbutton.mouseReleased(backPage)
}

let a = 280
let b = 30
let c = 40
let d = 25
let page = 0
let isfinished

function draw() {

    if (page == 0) {
        background(yellow)
        image(god, 150, 400, 180, 180)
        image(minotuar, 490, 400, 180, 180)
        textSize(38)
        strokeWeight(0);
        fill(maroon)
        stroke(maroon);
        textStyle(BOLD)
        text('THESEUS AND THE MINOTAUR!', 10, 190)
        textSize(16)
        text('Use the "next" and "back" buttons to operate', 125, 550)
        textSize(21)
        textStyle(BOLDITALIC)
        text(name, 193, 245)

    } else if (page == 1) {
        background(yellow)
        image(both, 300, 400, 360, 360)
        textStyle(ITALIC)
        strokeWeight(0);
        fill(maroon)
        stroke(maroon);
        textSize(35)
        //headers
        textStyle(BOLDITALIC)
        text("Theseus and the Minotaur!", 90, 70)
        //body text for background story 
        textStyle(NORMAL)
        textSize(20.5);
        text("The myth of Theseus and the Minotaur is one of the most tragic", 15, 120)
        text("and fascinating myths of the Greek Mythology.", 110, 139)
        text("The Minotaur was the son of Pasiphae", 135, 158)
        text("wife of King Minos of Crete.", 185, 177)



    } else if (page == 2) {
        background(yellow)
        image(both, 300, 430, 300, 300)
        textStyle(ITALIC)
        strokeWeight(0);
        fill(maroon)
        stroke(maroon);
        textSize(35)
        //headers
        textStyle(BOLDITALIC)
        text("Theseus and the Minotaur!", 90, 70)
        //body text for background story 
        textStyle(NORMAL)
        textSize(20.5);
        text("Queen Pasiphae slept with a bull sent by Zeus", 95, 128)
        text("and gave birth to Minotaur", 175, 148)
        text("a creature half man -- half bull.", 155, 168)
        text("King Minos was embarrassed, but did not want to kill", 60, 188)
        text("the Minotaur, so he hid the ", 160, 208)
        text("monster in the Labyrinth constructed by Daedalus", 115, 228)
        text("at the Minoan Palace of Knossos.", 135, 248)


    } else if (page == 3) {
        background(yellow)
        image(both, 300, 410, 350, 350)
        textStyle(ITALIC)
        strokeWeight(0);
        fill(maroon)
        stroke(maroon);
        textSize(35)
        //headers
        textStyle(BOLDITALIC)
        text("Theseus and the Minotaur!", 90, 70)
        //body text for background story 
        textStyle(NORMAL)
        textSize(20.5);
        text("According to the myth, Minos was imprisoning", 100, 128)
        text("his enemies in the Labyrinth so that", 130, 148)
        text("the Minotaur could eat them. The labyrinth was such a", 60, 168)
        text("complicated construction that", 145, 188)
        text("no one could ever find the way out alive.", 110, 208)


    } else if (page == 4) {
        background(yellow)
        image(both, 300, 410, 350, 350)
        textStyle(ITALIC)
        strokeWeight(0);
        fill(maroon)
        stroke(maroon);
        textSize(35)
        //headers
        textStyle(BOLDITALIC)
        text("Theseus and the Minotaur!", 90, 70)
        //body text for background story 
        textStyle(NORMAL)
        textSize(20.5);
        text("Son of Minos, Androgeus, went to Athens to participate", 70, 120)
        text("in the Panathenaic Games but he was killed during the Marathon,", 10, 140)
        text(" by the Minotaur. Minos was infuriated, and demanded Aegeus", 20, 160)
        text("the king of Athens to send seven men and", 105, 180)
        text("women every year to the Minotaur to advert", 95, 200)
        text("the plague caused by the death of Androgeus.", 93, 220)


    } else if (page == 5) {
        background(yellow)
        image(both, 300, 410, 350, 350)
        textStyle(ITALIC)
        strokeWeight(0);
        fill(maroon)
        stroke(maroon);
        textSize(35)
        //headers
        textStyle(BOLDITALIC)
        text("Theseus and the Minotaur!", 90, 70)
        //body text for background story 
        textStyle(NORMAL)
        textSize(20.5);
        text("The third year, Theseus, son of Aegeus decided to be one", 27, 128)
        text("of the seven young men that would go to Crete", 62, 148)
        text("in order to kill the Minotaur and end the human sacrifices to", 22, 168)
        text("the monster. King Aegeus tried to make him change his mind", 18, 188)
        text("but Theseus was determined to slay the Minotaur.", 47, 208)



    } else if (page == 6) {
        background(yellow)
        image(art, 300, 440, 300, 300)
        strokeWeight(0);
        textSize(30);
        text("Before you play...", 20, 40)
        textStyle(BOLDITALIC)
        textSize(25);
        text("Objective:", 25, 100)
        textSize(14)
        text("Now that you've learned the legend of Theseus.. well some of it... you'll complete it!", 17, 120)
        text("Your goal is to help Theseus through the treacherous maze to slay the minotaur!", 15, 140)
        textSize(25)
        text("Instructions:", 24, 180)
        textSize(14)
        text("You complete this by using the arrow keys to move Theseus around!", 15, 200)
        text("Beware, if you accidently touch the walls, you'll be sent back to the starting point.", 15, 220)
        textSize(45);
        textStyle(BOLD)
        text("GOOD LUCK!", 165, 280)

    } else if (page == 7) {
        let leftColor = get(a - 22, b);
        let rightColor = get(a + 12, b)
        let topColor = get(a, b - 15)
        let bottomColor = get(a, b + 15);
        let lightyellow = [254, 239, 129, 255]
        let maroon = [126, 1, 1, 255]
        background(lightyellow);

        //image of thesues + minotaur
        image(minotuar, 320, 575, 50, 50);
        image(god, a, b, c, d)
        strokeWeight(6);
        stroke(maroon);
        //maze lines!
        line(50, 50, 250, 50);
        line(325, 50, 575, 50);
        line(50, 50, 50, 575);
        line(50, 575, 300, 575)
        line(375, 575, 575, 575)
        line(575, 50, 575, 575)
        line(250, 50, 250, 113);
        line(140, 160, 425, 160);
        line(140, 160, 140, 100)
        line(140, 100, 100, 100)
        line(50, 150, 88, 150);
        line(425, 160, 425, 113)
        line(325, 160, 325, 113)
        line(325, 113, 360, 113)
        line(185, 265, 185, 100)
        line(113, 210, 185, 210)
        line(135, 265, 250, 265)
        line(375, 265, 375, 160)
        line(480, 100, 525, 100)
        line(525, 100, 525, 145)
        line(525, 145, 480, 145)
        line(480, 145, 480, 350);
        line(480, 215, 375, 215)
        line(575, 265, 525, 265)
        line(525, 265, 525, 205)
        line(480, 325, 530, 325)
        line(530, 325, 530, 530)
        line(530, 530, 480, 530)
        line(480, 470, 480, 415)
        line(480, 415, 421, 415)
        line(250, 160, 250, 215)
        line(250, 215, 315, 215)
        line(315, 215, 315, 415)
        line(315, 415, 250, 415)
        line(250, 415, 250, 575)
        line(480, 265, 430, 265)
        line(315, 325, 430, 325)
        line(421, 415, 420, 375)
        line(420, 375, 375, 375)
        line(375, 375, 375, 470)
        line(375, 470, 315, 470)
        line(315, 470, 315, 525)
        line(315, 525, 375, 525)
        line(375, 525, 375, 575)
        line(425, 575, 425, 475)
        line(250, 265, 250, 365)
        line(250, 365, 100, 365)
        line(100, 365, 100, 300)
        line(100, 320, 200, 320)
        line(180, 365, 180, 415)
        line(50, 417, 125, 417)
        line(50, 525, 100, 525)
        line(100, 525, 100, 465)
        line(250, 475, 155, 475)
        line(200, 475, 200, 525)
        line(150, 575, 150, 525)

        //movement of theuseus 
        if (keyCode == UP_ARROW) {
            b = b - 2;
            if (eqColor(topColor, maroon)) {
                a = 280
                b = 30
            }
        } else if (keyCode == DOWN_ARROW) {
            b = b + 2
            if (eqColor(bottomColor, maroon)) {
                a = 280
                b = 30
            }
        } else if (keyCode == LEFT_ARROW) {
            a = a - 2
            if (eqColor(leftColor, maroon)) {
                a = 280
                b = 30
            }
        } else if (keyCode == RIGHT_ARROW) {
            a = a + 2
            if (eqColor(rightColor, maroon)) {
                a = 280
                b = 30
            }

        }

    }


    if (300 < a && a < 375 && 525 < b && b < 600) {
        isfinished = true;
    }

    if (isfinished) {
        background(yellow)
        image(wow, 300, 440, 300, 300)
        image(last, 300, 150, 400, 350)

    }


}

function eqColor(a, b) {
    return a[0] == b[0] && a[1] == b[1] &&
        a[2] == b[2] && a[3] == b[3];
}

function nextPage() {
    page++;
}

function backPage() {
    clear();
    page--;
}
