class Node {
    constructor(x, y, width, color) {
        if (x != null) {
            x = this.x;
        } else {
            x = floor(random() * screen.width)
        }

        if (y != null) {
            y = this.y;
        } else {
            y = floor(random() * screen.height)
        }

        this.width = width;
        this.color = color;
    }

    draw(theta) {
        fill(this.color);
        circle(this.x, this.y, this.width);
    }
}