let hsvToRgbResults = "";
let rgbToHsvResults = "";

let rgb = false;
let results;
let displayResults = false;

function setup() {
    // hsv
    input1 = createInput();
    input2 = createInput();
    input3 = createInput();

    input1.position(25, 50);
    input2.position(25, 100);
    input3.position(25, 150);

    switchButton = createButton("switch");
    switchButton.position(350, 50);
    switchButton.mousePressed(() => {
        rgb = !rgb;
    })

    button = createButton("submit");
    button.position(80, 200);
    button.mousePressed(submit);

    createCanvas(400, 400);
}

function draw() {
    background(100);

    if (rgb) {
        text("red (0 - 255)", 25, 40);
        text("green (0 - 255) ", 25, 90);
        text("blue (0 - 255)", 25, 140);
    } else {
        text("hue (0 - 360)", 25, 40);
        text("saturation (0.0 - 1.0)", 25, 90);
        text("value (0.0 - 1.0)", 25, 140);
    }

    if (displayResults) {
        if (rgb) {
            text("R: " + results[0], 200, 40)
            text("G: " + results[1], 200, 90)
            text("B: " + results[2], 200, 140)
        } else {
            text("H: " + results[0], 200, 40)
            text("S: " + results[1], 200, 90)
            text("V: " + results[2], 200, 140)
        }
    }
}

function submit() {
    if (input1.value() != null && input2.value() != null && input3.value() != null) {
        if (rgb) {
            results = rgbToHsv(input1.value(), input2.value(), input3.value());
        } else {
            results = hsvToRgb(input1.value(), input2.value(), input3.value());
        }
    }

    displayResults = true;
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