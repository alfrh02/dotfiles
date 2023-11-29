function setup() {
    createCanvas(screen.width, screen.height);

    let foregroundColor = color(224, 224, 224);
    let backgroundColor = color(224, 224, 224);
}

function draw() {
    background(backgroundColor);
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}