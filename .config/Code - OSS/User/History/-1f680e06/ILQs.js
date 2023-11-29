let nodes;
let black, white;
let theta = 0;
function setup() {
    frameRate(144);
    noStroke();

    black = color(12);
    white = color(224);

    nodes = []
    for (let i = 0; i < 16; i++) {
        nodes[i] = new SystemNode(null, null, 50, white);
    }

    createCanvas(screen.width, screen.height);
}

function draw() {
    background(black);

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].draw();
        console.log(nodes[i].x);
    }

    theta += 1;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}
