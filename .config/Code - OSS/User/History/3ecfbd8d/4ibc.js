let foregroundColor = color(33)
let backgroundColor = color(224)

function setup() {
    createCanvas(screen.width, screen.height);
}

function draw() {
    background(backgroundColor);
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}