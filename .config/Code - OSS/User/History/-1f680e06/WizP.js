const LINE_WIDTH = 4;
const NODE_AMOUNT = 40;
const NODE_SIZE = 32;

const BG_COLOR = 12;
const FG_COLOR = 224;

const BG_NODE_COLOR = 21;

let nodes, backgroundNodes;
let theta = 0;
function setup() {
    frameRate(144);
    noStroke();

    nodes = []
    for (let i = 0; i < NODE_AMOUNT; i++) {
        nodes[i] = new SystemNode(null, null, NODE_SIZE, FG_COLOR);
    }

    backgroundNodes = []
    for (let i = 0; i < NODE_AMOUNT; i++) {
        backgroundNodes[i] = new SystemNode(null, null, NODE_SIZE, BG_NODE_COLOR);
    }

    createCanvas(screen.width, screen.height);
}

function draw() {
    background(BG_COLOR);

    for (let i = 0; i < NODE_AMOUNT; i++) {
        nodes[i].draw(theta);

        let pos1 = nodes[i].getPosition();
        for (let j = 0; j < NODE_AMOUNT; j++) {
            let pos2 = nodes[j].getPosition();

            if (dist(pos1[0], pos1[1], pos2[0], pos2[1]) < 250) {
                stroke(FG_COLOR);
                strokeWeight(LINE_WIDTH);
                line(pos1[0], pos1[1], pos2[0], pos2[1]);
                noStroke();
            }
        }
   }

    theta += 1;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}
