let foregroundColor, backgroundColor;
function setup() {
    foregroundColor = color(33);
    backgroundColor = color(224, 224, 224);

    noStroke();

    createCanvas(screen.width, screen.height);
}

function draw() {
    background(backgroundColor);

    drawSprite( width/2, height/2,
                personSprite.width, personSprite.height,
                foregroundColor, personSprite.array, 5, true);
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}

function drawSprite(x, y, w, h, spriteColor, pixelArray, pixelSize, hasShadow) {
    let spriteX = 0;
    let spriteY = 0;

    fill(spriteColor);

    for (let i = 0; i < pixelArray.length; i++) {
        if (pixelArray[i] == 1) {
            rect(x + spriteX*pixelSize, y + spriteY*pixelSize, pixelSize);
        }

        spriteX += 1;
        if (spriteX >= w) {
            spriteY += 1;
            spriteX = 0;
        }
    }

    if (hasShadow) {
        spriteX = 0;
        spriteY = 0;

        fill();
        rect(x + spriteX, y + spriteY + h*pixelSize, w*pixelSize, pixelSize*2);
    }
}