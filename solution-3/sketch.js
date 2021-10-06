let input, button, posX, countUp

function setup() {
    createCanvas(500, 400);
    noStroke();
    background(127);
    fill('black');

    posX = 0;
    countUp = 1;

    input = createInput();
    input.position(130, 65);

    button = createButton('Check Me!');
    button.position(input.x + input.width, 65);
    button.mousePressed(check);

    textAlign(CENTER);
    textSize(50);
}

function draw() {
    background(127);
    if (countUp) {
        posX += 1;
    } else {
        posX -= 1;
    }

    if (posX >= (width - 150)) {
        countUp = 0;
    }

    if (posX <= 0) {
        countUp = 1;
    }


    square(posX, 250, 150);
}


function check() {
    if (input.value() == "placek") {
        fill('green');
    } else {
        fill('red');
    }
}