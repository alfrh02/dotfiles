// For maximJs library
var audio = new maximJs.maxiAudio();
var oscillator = new maximJs.maxiOsc();

var drawValues = [];
var counter = 0;
var freq = 100;
var amp = 0;

var isPlaying = false;
var audioNeedsInit = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    audio.play = playLoop;

    // initialize drawing buffer
    for (var i = 0; i < 512; ++i) {
        drawValues.push(0);
    }
}


function draw() {
    background(0);
    if (!isPlaying) amp = 0;
    
    drawWave();

    stroke(255);
    if (audioNeedsInit) {
        text("Press space to toggle audio on/off.", 100, 200);
    }
    
    text("Amp: " + nf(amp, 1, 2), 100, 100);
    text("Freq: " + nf(freq, 4, 0), 100, 150);
}

function drawWave() {
    stroke(0, 255, 102);
    noFill();
    beginShape();
    for (var i = 0; i < 512; ++i) {
        vertex(i * width / 512, (drawValues[i] * 200) + height / 2);
    }
    endShape();
}


function playLoop() {
    // Set the audio output buffer
    this.output = oscillator.sinewave(freq) * amp;

    // Save values to draw
    drawValues.push(this.output);
    drawValues.shift();
}

function mouseMoved() {
    if (isPlaying) {
        freq = map(mouseX, 0, width, 20, 20000);
        amp = map(mouseY, 0, height, 1.0, 0.0);
    }
}

function keyPressed() {
    if (key == ' ') {
        if (audioNeedsInit) {
            audio.init();
        }
        isPlaying = !isPlaying;
    }
}

var maxiAudio = new maximJs.maxiAudio();

//create two oscillator objects
var sine1 = new maximJs.maxiOsc();
var sine2 = new maximJs.maxiOsc();
var sine3 = new maximJs.maxiOsc();
var sine4 = new maximJs.maxiOsc();

maxiAudio.play = function playLoop() {
    this.output = (
        sine1.sinewave(640) +
        sine2.sinewave(650) +
        sine3.sinewave(660) +
        sine4.sinewave(666)
    ) / 4;
};

function keyPressed() {
    // Chrome needs user input to start audio
    maxiAudio.init();
}