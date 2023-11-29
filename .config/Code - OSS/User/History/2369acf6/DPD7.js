var audio = new maximJs.maxiAudio();

//The number of sine waves to add together:
var numHarmonics = 20; //What happens when you change this?

//The fundamental is the frequency you will hear. "f" in the square equation
var fundamental = 400; //What happens when you change this?

var mySines = [];
var myFreqs = [];
var myAmp = [];

var frame = 0;

var drawValues = [];

var isPlaying = false;
var audioInit = false;

function setup() {
    background(0);
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
    
    audio.play = playLoop;

    //EDIT THIS CODE so that it adds together the harmonics to make a square wave
    for (var k = 1; k < numHarmonics + 1; ++k) {
        mySines[k] = new maximJs.maxiOsc();
        myFreqs[k] = TWO_PI * (2*k-1) * fundamental//change this
        myAmp[k] = (2*k-1); // and this
        print("when k=" + k + ", freq=" + myFreqs[k] + ", amp=" + myAmp[k]);
    }

    for (var i = 0; i < 512; ++i) {
        drawValues.push(0);
    }
}

//no need to edit this
function draw() {
    if (frame % 10 === 0) {
        clear();
        drawWave();
    }
    ++frame;

    if (isPlaying === false) {
        text("press space to play", 10, 20);
    }
}

function drawWave() {
    stroke(0);
    noFill();
    beginShape();

    for (var i = 0; i < 512; ++i) {
        vertex(i * width / 512, drawValues[i] * 200 + height / 2 + 100);
    }
    endShape();
}

function playLoop() {
    var sum = 0;
    for (var i = 1; i < numHarmonics + 1; ++i) {
        //Adding all the sines together, scaled by myAmp[]
        sum += mySines[i].sinewave(myFreqs[i]) * myAmp[i];
    }

    if (isPlaying) {
        this.output = sum;
    }
    drawValues.push(this.output);
    drawValues.shift();
}

function keyPressed() {
    if (key == ' ') {
        isPlaying = !isPlaying;
        if (!audioInit) {
            audio.init();
        }
    }
}