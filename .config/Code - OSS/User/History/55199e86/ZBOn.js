const NOISE_SCALE = 0.05;
const NOISE_LEVEL = 255;

let theta = 0;
function setup() {
    frameRate(144);
    noStroke();
    noLoop();
    createCanvas(500, 500);
}

function draw() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let nx = NOISE_SCALE * x + sin(theta);
            let ny = NOISE_SCALE * y;
            let c = NOISE_LEVEL * noise(nx, ny);

        //   high contrast
        //   if (c < 127) {
        //     c = 0;
        //   } else {
        //     c = 255;
        //   }

            if (c < 32) {
                c = [];
            }
            stroke(c);
            point(x, y);
        }
    }
    theta++;
}
