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

    }
}