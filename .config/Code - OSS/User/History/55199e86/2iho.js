const NOISE_SCALE = 0.1;
const NOISE_LEVEL = 255;

function setup() {
    frameRate(144);
    noStroke();
    noLoop();
    createCanvas(screen.width, screen.height);
}

function draw() {
    background(64);

    for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          let nx = NOISE_SCALE * x;
          let ny = NOISE_SCALE * y;

          let c = NOISE_LEVEL * noise(nx, ny);

          stroke(c);
          point(x, y);
        }
      }
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}