let theta;
let foregroundColor, backgroundColor;
let person1, person2;
function setup() {
    theta = 0;

    foregroundColor = color(33);
    backgroundColor = color(224, 224, 224);

    person1 = new Person(personSprite);
    person2 = new Person(personSprite);

    noStroke();

    createCanvas(screen.width, screen.height);
}

function draw() {
    background(backgroundColor);

    person1.draw();
    
    drawSprite( width/2, height/2 + cos(theta/1000) * 50,
                personSprite.width, personSprite.height,
                foregroundColor, personSprite.idleArray, 5, true);

    theta += deltaTime;
}

function windowResized() {
    resizeCanvas(screen.width, screen.height);
}

function drawSprite(x, y, w, h, spriteColor, pixelArray, pixelSize, hasShadow) {
    let spriteX = 0;
    let spriteY = 0;

    if (hasShadow) {
        spriteX = 0;
        spriteY = 0;

        fill(33,33,33,33);
        rect(x, y + h*pixelSize - pixelSize, w*pixelSize, pixelSize*2);
    }

    fill(spriteColor);

    for (let i = 0; i < pixelArray.length; i++) {
        if (pixelArray[i] == 1) {
            // add 1 to pixelSize to close gaps between rects when the sprite is in movement
            rect(x + spriteX*pixelSize, y + spriteY*pixelSize, pixelSize+1);
        }

        spriteX += 1;
        if (spriteX >= w) {
            spriteY += 1;
            spriteX = 0;
        }
    }
}