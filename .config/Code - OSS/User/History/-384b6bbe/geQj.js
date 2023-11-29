class Person {
    constructor(x, y, sprite, color) {
        this.x = x;
        this.y = y;

        this.spriteWidth = sprite.width;
        this.spriteHeight = sprite.height;
        this.idleSprite = sprite.idle;
        this.walkSprite = sprite.walk;

        this.color = color;
    }

    draw() {
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
}