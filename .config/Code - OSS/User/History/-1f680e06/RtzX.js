let theta = 0;

let black, white;
function setup() {
    black = color(12);
    white = color(224);

    frameRate(144);
    createCanvas(screen.width, screen.height);
}

function draw() {
    background(black);
    fill(white);
    circle(width/2, height/2 + cos(theta/100) * 100, 50);

    theta += 1;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}
