function setup() {
    createCanvas(screen.width, screen.height);

    const foregroundColor = color(224, 224, 224);
    const backgroundColor = color(224, 224, 224);
}

function draw() {
    background(backgroundColor);
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}