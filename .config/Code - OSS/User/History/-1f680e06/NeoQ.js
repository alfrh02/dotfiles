let nodes;
let black, white;
let theta = 0;
function setup() {
    black = color(12);
    white = color(224);

    nodes = []
    for (let i = 0; i < 16; i++) {
        nodes += new Node(null, null, 50, white);
    }

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
