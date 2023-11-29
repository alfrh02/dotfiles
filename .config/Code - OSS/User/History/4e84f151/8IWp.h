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

		void simpleBrush(float x, float y, int size);
		void moonBrush(float x, float y, int size);

		bool isDrawing;
		bool isErasing;

		vec2 previousMousePos;

		vec2 gestureDirection;
		float gestureMagnitude;

		int brushSize;

		ofFbo canvasFbo;
};