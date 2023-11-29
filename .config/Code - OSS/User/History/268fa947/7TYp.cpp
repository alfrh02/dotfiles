#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	debugMode = false;

	deltaTime = 0;

	centreX = ofGetWidth()/2;
	centreY = ofGetHeight()/2;

	// char position, dimensions
	charX = centreX;
	charY = centreY;
	charHeight = 66;
	charWidth = 66;

	poopX = 0;
	poopY = 0;

	// char attributes
	charHunger = 1;
	isAlive = true;
	isMoving = false;
	direction = 0;

	// char metadata
	timeSinceDirectionChange = 0;
	timeSinceMovementChange = 0;
	timeSinceLastPet = 5;
	timeSinceLastPoop = 0;
	hungerTime = 0;
}

//--------------------------------------------------------------
void ofApp::update(){
//----------------------------------------------------------char 

	if (isAlive) {

//---------------------------------------------------char hunger 

		float decaySpeed = 0.01;

		hungerTime += ofGetLastFrameTime();

		if (hungerTime > 1) {
			charHunger -= 1 * decaySpeed;
			hungerTime = 0;
		}

		if (charHunger == 0) {
			isAlive = false;
		}

//-------------------------------------------------char movement

		unsigned short speed = 2;
		unsigned short gravityForce = 8;

		if (charY < ofGetHeight()-charHeight) {
			charY += gravityForce;
		}

		if (charX < charWidth / 2) {
			direction = 1;
			timeSinceDirectionChange = 0;
		}

		if (charX > ofGetWidth() - charWidth / 2) {
			direction = 0;
			timeSinceDirectionChange = 0;
		}

		if (isMoving && charY > ofGetHeight() - charHeight - 1) {
			if (direction == 1) {
				charX += speed;
			} else {
				charX -= speed;
			}
		}

		if (timeSinceMovementChange > 5) {
			if ((rand() % 100) < 2) {
				isMoving = !isMoving;
				timeSinceMovementChange = 0;
			}
		}

		if (timeSinceDirectionChange > 5) {
			if ((rand() % 100) < 2) {
				direction = !direction;
				timeSinceDirectionChange = 0;
			}
		}

//-----------------------------------------------------char poop

		if (timeSinceLastPoop > 16 && hasPooped == false) {
			if ((rand() % 100) < 2) {
				hasPooped = true;
				poopX = charX;
				poopY = charY;
				timeSinceLastPoop = 0;
			}
		}

//---------------------------------------------------update time

		deltaTime += ofGetLastFrameTime();
		timeSinceDirectionChange += ofGetLastFrameTime();
		timeSinceMovementChange += ofGetLastFrameTime();
		timeSinceLastPet += ofGetLastFrameTime();
		timeSinceLastPoop += ofGetLastFrameTime();

	}
}

//--------------------------------------------------------------
void ofApp::draw(){

//------------------------------------------------draw character 

	float pixelSize = ofClamp(charHunger * 8, 0, 1);
	float absolutePixelSize = 5; 

	charWidth = absolutePixelSize*12;
	charHeight = absolutePixelSize*12;

	int spriteX = charX - charWidth;
	int spriteY = charY - charHeight;

	// draw character
	ofSetHexColor(0x000000);
	for (int i = 0; i < 144; i++) {
		if (charSprite[i] == 1) {
			ofPushView();
				if (timeSinceLastPet < 3) {
					ofTranslate(0, sin((deltaTime + i) * 5) * 2);	
				}
				ofBeginShape();
					ofVertex(spriteX - absolutePixelSize * pixelSize, spriteY + absolutePixelSize * pixelSize);
					ofVertex(spriteX + absolutePixelSize * pixelSize, spriteY + absolutePixelSize * pixelSize);
					ofVertex(spriteX + absolutePixelSize * pixelSize, spriteY - absolutePixelSize * pixelSize);
					ofVertex(spriteX - absolutePixelSize * pixelSize, spriteY - absolutePixelSize * pixelSize);
				ofEndShape();
			ofPopView();
		}

		spriteX += absolutePixelSize*2; 
		if ((i + 1) % 12 == 0) {
			spriteY += absolutePixelSize*2;
			spriteX = charX - charWidth;
		}
	}


//-----------------------------------------------------draw poop 

	spriteX = poopX - charWidth;
	spriteY = poopY - charHeight;

	if (hasPooped) {
		for (int i = 0; i< 144; i++) {
			if (poopSprite[i] == 1) {
				ofBeginShape();
					ofVertex(spriteX - absolutePixelSize * pixelSize, spriteY + absolutePixelSize * pixelSize);
					ofVertex(spriteX + absolutePixelSize * pixelSize, spriteY + absolutePixelSize * pixelSize);
					ofVertex(spriteX + absolutePixelSize * pixelSize, spriteY - absolutePixelSize * pixelSize);
					ofVertex(spriteX - absolutePixelSize * pixelSize, spriteY - absolutePixelSize * pixelSize);
				ofEndShape();
			}
			spriteX += absolutePixelSize * 2;
			if ((i + 1) % 12 == 0) {
				spriteY += absolutePixelSize * 2;
				spriteX = poopX - charWidth;
			}
		}
	}

//------------------------------------------------------debug ui
	

	if (debugMode) {
		int menuY = 50;

		ofSetHexColor(0xffffff);

		ofDrawBitmapString("charHunger: " + to_string(charHunger), 50, menuY);
		menuY += 25;

		ofDrawBitmapString("charX + charY: " + to_string(charX) + ", " + to_string(charY), 50, menuY);
		menuY += 25;

		ofDrawBitmapString("isMoving: " + to_string(isMoving), 50, menuY);
		menuY += 25;

		ofDrawBitmapString("timeSinceLastPooped: " + to_string(timeSinceLastPoop), 50, menuY);
		menuY += 25;
	}
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
	cout << key << endl;
	if (key == 3680) { // shift - toggle debug mode 
		cout << "debubgging." << endl;	
		debugMode = !debugMode;
	}
	if (key == 112) { // p - petting
		cout << "pettin." << endl;	
		timeSinceLastPet = 0;
	}
	if (key == 99) { // c - cleaning
		cout << "cleanign." << endl;	
		hasPooped = false;
	}
	if (key == 102) { // f - feeding
		cout << "feedi ng." << endl;	
		timeSinceLastPet = 0;
		charHunger = 1;
	}
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
	centreX = ofGetWidth()/2;
	centreY = ofGetHeight()/2;

	charX = centreX;
	charY = centreY;

	if (charY + (charHeight/2) > ofGetHeight()) {
		charY = ofGetHeight()-charHeight;
	}

	cout << to_string(charY) + ", " + to_string(ofGetHeight()) << endl;
	cout << "NEW HEIGHT: " + to_string(ofGetHeight()) << endl;
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}