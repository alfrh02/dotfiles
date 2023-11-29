function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(64, 64, 64);

    strokeWeight(1);
    stroke(0);
    translate(width / 2, height / 2);

    fill(255);
    circle(0, 0, width, height);

    push();
        // triangles
        fill(0);

        for (let i = 0; i < 12; i++) {
            if (i % 2) {
                arc(0, 0, width, height, 0, 30 * PI / 180, PIE)
            }
            rotate(30 * PI / 180);
        }

        // lines
        strokeWeight(8);
        noFill();

        // inner band lines
        for (i = 0; i < 12; i++) {
            if (i % 2 == 0) {
                arc(0, 0, width / 2, height / 2, 15 * PI / 180, 30 * PI / 180)
            }
            rotate(30 * PI / 180);
        }

        // outer band lines
        for (i = 0; i < 12; i++) {
            if (i % 2 == 0) {
                arc(0, 0, width / 2, height / 2, 15 * PI / 180, 30 * PI / 180)
            }
            rotate(30 * PI / 180);
        }

    pop();
}