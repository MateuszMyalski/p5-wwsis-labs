let color = 0;
let countUp = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    noStroke();
    background(127);

    fill(color);
    square(100, 100, 150);

    if (countUp) {
        color += 1;
    } else { color -= 1; }

    if (color >= 255) {
        countUp = 0;
    }

    if (color <= 0) {
        countUp = 1;
    }

}
