function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(64, 64, 64);

    translate(width / 2, height / 2);

    fill(255);
    circle(0, 0, width, height);

    fill(0);
    push();
        for (let i = 0; i < 12; i++) {
            if (i % 2) {
                arc(0, 0, width, height, 0, 30 * PI / 180, PIE)
            }
            rotate(30 * PI / 180);
        }
    pop();
}