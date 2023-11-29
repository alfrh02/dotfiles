#pragma once

#include "ofMain.h"
using namespace glm;

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

		string getBrush(int brush);

		void simpleBrush(float x, float y, int size, short r, short g, short b);
		void dynamicBrush(float x, float y, int size, float speed, vec2 direction);
		void smokeBrush(float x, float y, int size, float speed, vec2 direction);
		void imageBrush(float x, float y, int size);
		void funBrush(float x, float y, float speed, vec2 direction);

		bool isDrawing;
		bool isErasing;
		bool isShifting;

		int selectedBrush;

		short red;
		short green;
		short blue;

		vec2 previousMousePos;
		float prevMouseAmount;
		float currentMouseAmount;

		vec2 gestureDirection;
		float gestureMagnitude;

		int brushSize;

		ofImage ofLogo;

		ofFbo canvasFbo;
};