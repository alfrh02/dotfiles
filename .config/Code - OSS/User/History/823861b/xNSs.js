var maxiAudio = new maximJs.maxiAudio();

//create two oscillator objects
var mySine = new maximJs.maxiOsc();
var myOtherSine = new maximJs.maxiOsc();

maxiAudio.play = function playLoop() {
    this.output = (mySine.sinewave(466.164) + myOtherSine.sinewave(477.231)) * 0.5;
};

function keyPressed() {
    // Chrome needs user input to start audio
    maxiAudio.init();
}
y
