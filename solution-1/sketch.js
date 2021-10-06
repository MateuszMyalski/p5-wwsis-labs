function setup() {
    createCanvas(500, 500);
    background(127);
}

function draw() {
    noStroke();
    fill('white');
    circle(30, 30, 24);

    fill('red');
    square(100, 100, 150);

    stroke('white');
    strokeWeight(10);
    fill('purple');
    ellipse(350, 350, 100, 100);
}
