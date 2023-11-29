class Person {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;

        this.spriteWidth = sprite.width;
        this.spriteHeight = sprite.height;
        this.idleSprite = sprite.idle;
        this.walkSprite = sprite.walk;
    }

    draw() {

    }
}