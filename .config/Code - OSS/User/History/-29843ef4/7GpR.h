#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp{
	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y);
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);

		bool debugMode;

		// it is impossible for the centre X and Y coordinates to be negative numbers, so these are unsigned 
		// these are shorts since they will not be large numbers
		unsigned short centreX;
		unsigned short centreY;

		// char position, dimensions
		// these are shorts since they will not be large numbers
		short charX;
		short charY;
		unsigned short charHeight;
		unsigned short charWidth;

		// self explanatory
		short poopX;
		short poopY;

		// each sprite is represented by a large array of booleans
		// the array is iterated through during the draw() function
		// 0 means that nothing will be drawn, and 1 means that a box should be drawn
		// this makes implementing pixel sprites simple, while also being able
		// to manipulate the pixels for animation
		//
		// each sprite is 12x12 pixels, meaning that the arrays must be of size 144
		bool charSprite[144] = {
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
			0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0,
			0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
			0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
			0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0,
			0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		};

		bool poopSprite[144] = {
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
			0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
			0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
			0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
			0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0,
			0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0,
			0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0,
		};

		// char attributes
		// hunger is measured from 0.0 to 1.0 so that it can be used in the draw() function
		float charHunger;
		bool isAlive;
		bool isMoving;
		bool direction;
		bool hasPooped;

		// these variables are doubles since they draw on the ofGetLastFrameTime() function, which returns a double
		double timeSinceDirectionChange;
		double timeSinceMovementChange;
		double timeSinceLastPet;
		double timeSinceLastPoop;
		double hungerTime;
		double deltaTime;
};