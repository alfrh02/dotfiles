let hsvToRgbResults = "";
let rgbToHsvResults = "";

function setup() {
    // hsv
    hueInput = createInput();
    saturationInput = createInput();
    valueInput = createInput();

    hueInput.position(25, 50);
    saturationInput.position(25, 100);
    valueInput.position(25, 150);

    // rgb
    rInput = createInput();
    gInput = createInput();
    bInput = createInput();

    rInput.position(25, 250);
    gInput.position(25, 300);
    bInput.position(25, 350);

    button = createButton("submit");
    button.position(80, 200);
    button.mousePressed(submit);

    createCanvas(400, 400);
}

function draw() {
    background(100);

    text("hue (0 - 360)", 25, 40);
    text("saturation (0.0 - 1.0)", 25, 90);
    text("value (0.0 - 1.0)", 25, 140);

    text("red (0 - 255)", 25, 240);
    text("green (0 - 255) ", 25, 290);
    text("blue (0 - 255)", 25, 340);

    text(hsvToRgbResults, 300, 100);
    text(rgbToHsvResults, 300, 300);
    console.log(gInput.value);
}

function submit() {
    if (rInput.value() && gInput.value() && bInput.value()) {
        let results = rgbToHsv(rInput.value(), gInput.value(), bInput.value());
        rgbToHsvResults = results[0] + ", " + results[1] + ", " + results[2];
    }
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