let last_posX, last_posY;
let is_first_point;

function setup() {
    createCanvas(500, 400);
    stroke('black');
    background(127);

    is_first_point = 1;

}

function mousePressed() {
    stroke('black');
    fill('black');
    if (is_first_point) {
        last_posX = mouseX;
        last_posY = mouseY;
        is_first_point = 0;
    } else {
        line(last_posX, last_posY, mouseX, mouseY);
        last_posX = mouseX;
        last_posY = mouseY;
    }

    stroke('red');
    fill('red');
    circle(mouseX, mouseY, 3);

}
