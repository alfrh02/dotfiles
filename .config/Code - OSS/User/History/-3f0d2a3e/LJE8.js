var cVerb, sound;

function preload()
{
  soundFormats('ogg', 'mp3', 'wav');
  // load the sound
  sound = loadSound('08_title.wav');
}

function setup()
{
    // load the impulse response
    cVerb = createConvolver('bottle_hall.wav');

    // disconnect from master output so that we don't hear the original sound
    sound.disconnect();

    //connect to our convolution reverb
    cVerb.process(sound);
}


function draw()
{
  // put drawing code here
}

function keyPressed()
{
    console.log("Play the sound");
    sound.play();
}