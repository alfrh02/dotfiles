class SystemNode {
    constructor(x, y, width, color) {
        if (x != null) {
            this.x = x;
        } else {
            this.x = floor(random() * screen.width)
        }

        if (y != null) {
            this.y = y;
        } else {
            this.y = floor(random() * screen.height)
        }

        this.width = width;
        this.color = color;
    }

    draw(theta) {
        fill(this.color);
        circle(this.x, this.y, this.width);
    }

    getPosition() {
        return [this.x, this.y];
    }
}