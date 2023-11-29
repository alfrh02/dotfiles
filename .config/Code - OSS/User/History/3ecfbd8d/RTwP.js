let backgroundColor = color()

function setup() {
    createCanvas(screen.width, screen.height);
}

function draw() {
    background(backgroundColor);
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}