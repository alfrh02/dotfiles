const NODE_AMOUNT = 32
const BG_COLOR = 12;
const FG_COLOR = 224;

let nodes;
let theta = 0;
function setup() {
    frameRate(144);
    noStroke();

    nodes = []
    for (let i = 0; i < NODE_AMOUNT; i++) {
        nodes[i] = new SystemNode(null, null, 50, FG_COLOR);
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

            line()
        }
    }

    theta += 1;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}
