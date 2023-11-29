/* Benham's Disk

right & left arrow keys increase & decrease speed.

when the disk is spinning fast to the right the inner band of lines appears darker than the rest of the scene, and the outer band of lines appears and murky green
when the speed is increased the outer band looks more orange or brown before turning blue

when the disk is spinning to the left the same effect happens except the colours of the bands are swapped - the inner band turns murky green, orange, and blue
while the outer band is exceptionall dark.

*/

let rotationSpeed = 0;
let delta = 0;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
}

function draw() {
    background(64, 64, 64);

    strokeWeight(1);
    stroke(0);
    translate(width / 2, height / 2);

    rotate(delta);

    fill(255);
    circle(0, 0, width, height);

    push();
        // triangles
        fill(0);

        for (let i = 0; i < 12; i++) {
            if (i % 2) {
                arc(0, 0, width, height, 0, 30, PIE)
            }
            rotate(30);
        }

        // lines
        strokeWeight(8);
        noFill();

        // inner band lines
        for (i = 0; i < 12; i++) {
            if (i % 2 == 0) {
                arc(0, 0, width / 2, height / 2, 15, 30)
            }
            rotate(30);
        }

        // outer band lines
        for (i = 0; i < 12; i++) {
            if (i % 2 == 0) {
                arc(0, 0, width / 3, height / 3, 45, 75)
            }
            rotate(30);
        }

    pop();

    delta += rotationSpeed;
}

function keyPressed(event) {
    if (event.keyCode == 39) { // right arrow key
        rotationSpeed += 0.25;
    }

    if (event.keyCode == 37) { // left arrow key
        rotationSpeed -= 0.25;
    }
}