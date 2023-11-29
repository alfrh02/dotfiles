
let amplitude, frequency, phase;
function setup()
{
    createCanvas(500, 500);
    background(255);
    translate(0, 250); //https://p5js.org/reference/#/p5/translate This willl put my waves in the right place

    for (let t = 0; t < 500; ++t)
    {
        //Draw the centre line at y=0:
        stroke(0,0,0);
        strokeWeight(1);
        point(t, 0);

        //Now draw the three sine curves:
        strokeWeight(4);

        //Draw the first sine in red:
        stroke(255, 0, 0);
        amplitude = 100;
        frequency = 500;
        let sin1_t = amplitude * sin(t/10)// //Replace the "t/10" with the correct sine equation
        point(t, -1 * sin1_t); //-1 * sin1_t because in p5, y gets bigger as you go downwards

        //Draw the second sine in blue:
        stroke(0, 0, 255);

        // sine equation and point drawing go here

        //Draw the third sine in green:
        stroke(0, 255, 0);

        // sine equation and point drawing go here

    }
}