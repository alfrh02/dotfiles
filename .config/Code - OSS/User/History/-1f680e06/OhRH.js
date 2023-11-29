let theta = 0;

let black, white;
function setup() {
    black = Color(12);
    white = Color(224);

    frameRate(144);
    createCanvas(screen.width, screen.height);
}

function draw() {
    background(64);
    fill(255,0,0);
    circle(width/2, height/2 + cos(theta/100) * 100, 50);

    theta += 1;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}
