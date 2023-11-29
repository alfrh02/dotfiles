let foregroundColor, backgroundColor;
function setup() {
    createCanvas(screen.width, screen.height);

    foregroundColor = color(224, 224, 224);
    backgroundColor = color(224, 224, 224);
}

function draw() {
    background(backgroundColor);
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}