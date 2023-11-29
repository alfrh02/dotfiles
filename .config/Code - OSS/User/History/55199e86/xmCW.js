const NOISE_SCALE = 0.05;
const NOISE_LEVEL = 255;

const MAP_COLORS = [
    [0,   95,  115],
    [10,  147, 150],
    [148, 210, 189],
    [233, 216, 166],
    [238, 155, 0],
    [202, 103, 2],
    [187, 62,  3],
    [174, 32,  18],
]

let theta = 0;
function setup() {
    frameRate(60);
    noStroke();
    createCanvas(500, 500);
}

function draw() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let nx = NOISE_SCALE * x;
            let ny = NOISE_SCALE * y + 64;
            let c = (NOISE_LEVEL * noise(nx, ny, theta/100)) / 256;

            c = floor(c * MAP_COLORS.length * 2);

            if (c % 2) {
                c = MAP_COLORS[floor(c/2)];
            } else {
                c = 0;
            }

            stroke(c);
            point(x, y);
        }
    }
    theta++;
}
