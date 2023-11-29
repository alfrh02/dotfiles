const LINE_WIDTH = 4;
const NODE_AMOUNT = 40;
const NODE_SIZE = 32;
const BG_COLOR = 12;
const FG_COLOR = 224;

let nodes;
let theta = 0;
function setup() {
    frameRate(144);
    noStroke();

    nodes = []
    for (let i = 0; i < NODE_AMOUNT; i++) {
        nodes[i] = new SystemNode(null, null, NODE_SIZE, FG_COLOR);
    }

    createCanvas(screen.width, screen.height);
}

function draw() {
    background(BG_COLOR);

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].draw();

        if (nodes[i+1] != undefined) {
            let pos1 = nodes[i].getPosition();
            let pos2 = nodes[i+1].getPosition();

            stroke(FG_COLOR);
            strokeWeight(LINE_WIDTH);
            line(pos1[0], pos1[1], pos2[0], pos2[1]);
            noStroke();
        }
    }

    theta += 1;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}