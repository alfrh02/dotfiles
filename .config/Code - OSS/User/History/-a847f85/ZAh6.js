function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);
    console.log(hsvToRgb(200, 0.5, 0.5));

    hueInput = 
}

function rgbToHsv(r, g, b) {
    let maximum = max(r, g, b);
    let minimum = min(r, g, b);

    let value = maximum/255;

    let saturation = 0;
    if (maximum > 0) {
        saturation = 1 - minimum/maximum;
    }

    let hue = acos((r - g / 2 - b / 2) / sqrt(r ** 2 + g ** 2 + b ** 2 - r * g - r * b - b * g)) * 180/PI
    if (b > g) {
        hue = 360 - hue;
    }

    return [hue, saturation, value];
}

function hsvToRgb(h, s, v) {
    let maximum = 255 * v;
    let minimum = maximum * (1 - s);

    let z = (maximum - minimum) * (1 - ((h / 60) % 2 - 1));

    let r, g, b;
    if (0 <= h < 60) {
        r = minimum;
        g = z + minimum;
        b = maximum;
    } else if (60 <= h < 120) {
        r = minimum;
        g = maximum;
        b = z + minimum;
    } else if (120 <= h < 180) {
        r = z + minimum;
        g = maximum;
        b = minimum;
    } else if (180 <= h < 240) {
        r = maximum;
        g = z + minimum;
        b = minimum;
    } else if (240 <= h < 300) {
        r = maximum;
        g = minimum;
        b = z + minimum;
    } else if (300 <= h < 360) {
        r = z + minimum;
        g = minimum
        b = maximum;
    }

    return [r, g, b];
}