#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    isDrawing = false;
    isErasing = false;
    brushSize = 50;

    red = 0;
    green = 0;
    blue = 0;

    selectedBrush = 1;

    ofLogo.load("openframeworks.png");

    gestureDirection = vec2(0, 0);
    gestureMagnitude = 0;

    previousMousePos = vec2(0, 0);
    prevMouseAmount = 0.3;
    currentMouseAmount = 1 - prevMouseAmount;

    canvasFbo.allocate(ofGetWidth(), ofGetHeight(), GL_RGBA);

    canvasFbo.begin();
    ofClear(ofColor(255, 255, 255, 255));
    canvasFbo.end();
}

//--------------------------------------------------------------
void ofApp::update(){
    vec2 mousePos = vec2(mouseX, mouseY);

    vec2 gesture = mousePos - previousMousePos;
    gestureMagnitude = length(gesture);
    gestureDirection = normalize(gesture);

    previousMousePos.x = prevMouseAmount * previousMousePos.x + mouseX * currentMouseAmount;
    previousMousePos.y = prevMouseAmount * previousMousePos.y + mouseY * currentMouseAmount;

    canvasFbo.begin();
    if (isDrawing) {
        if (isErasing) {
            simpleBrush(mouseX, mouseY, 50, 255, 255, 255);
        } else {
            switch(selectedBrush) {
                case 1:
                    simpleBrush(mouseX, mouseY, brushSize, red, green, blue);
                    break;
                case 2:
                    dynamicBrush(previousMousePos.x, previousMousePos.y, brushSize, gestureMagnitude, gestureDirection);
                    break;
                case 3:
                    smokeBrush(previousMousePos.x, previousMousePos.y, brushSize, gestureMagnitude, gestureDirection);
                    break;
                case 4:
                    imageBrush(mouseX, mouseY, brushSize, gestureMagnitude, gestureDirection);
                break;
            }
        }
    }
    canvasFbo.end();
}

//--------------------------------------------------------------
void ofApp::draw(){
    canvasFbo.draw(0, 0);
    ofSetColor(0, 255, 0);
    ofDrawBitmapString("use q, w, r, and t to switch brushes; use a and d to change brush size - hold shift & a or d for granular brush size control", 0, 30);
    ofDrawBitmapString("e *toggles* eraser; z, x, and c control rgb - hold shift to increase", 0, 45);
    ofDrawBitmapString("selected brush: " + getBrush(selectedBrush), 0, 60);
    ofDrawBitmapString("brush size: " + to_string(brushSize), 0, 75);
    ofDrawBitmapString("colour: [" + to_string(red) + ", " + to_string(green) + ", " + to_string(blue) + "]", 0, 90);
    ofSetColor(255);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    switch(char(key)) {
        //--- colour selection
        case 'Z':
            if (red < 250) {
                red += 5;
            } else if (red < 255) {
                red = 255;
            }
            break;
        case 'X':
            if (green < 250) {
                green += 5;
            } else if (green < 255) {
                green = 255;
            }
            break;
        case 'C':
            if (blue < 250) {
                blue += 5;
            } else if (blue < 255) {
                blue = 255;
            }
            break;
        case 'z':
            if (red > 0) {
                red -= 1;
            }
            break;
        case 'x':
            if (green > 0) {
                green -= 1;
            }
            break;
        case 'c':
            if (blue > 0) {
                blue -= 1;
            }
            break;
        //--- brush size
        case 'A':
            if (brushSize > 0) {
                brushSize -= 1;
            }
            break;
        case 'D':
            brushSize += 1;
            break;
        case 'a':
            if (brushSize > 5) {
                brushSize -= 5;
            } else if (brushSize > 0) {
                brushSize = 0;
            }
            break;
        case 'd':
            brushSize += 5;
            break;
        //--- brush selection
        case 'q':
            selectedBrush = 1;
            break;
        case 'w':
            selectedBrush = 2;
            break;
        case 'e':
            isErasing = !isErasing;
            break;
        case 'r':
            selectedBrush = 3;
            break;
        case 't':
            selectedBrush = 4;
            break;
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
    isDrawing = true;
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    isDrawing = false;
}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){

}

// converts an integer to its assigned brush, or shows that eraser mode is on.
// this function is used for the text ui, so it returns a string.
//--------------------------------------------------------------
string ofApp::getBrush(int brush) {
    if (isErasing) {
        return "*eraser*";
    }
    switch(brush) {
        case 1:
            return "simple brush";
        case 2:
            return "dynamic brush";
        case 3:
            return "smoke brush";
        case 4:
            return "binary brush";
    }
    return "no brush :(";
}

//--------------------------------------------------------------
void ofApp::simpleBrush(float x, float y, int size, short r, short g, short b){
    ofSetColor(r, g, b);
    ofDrawEllipse(x, y, size, size);
}

//--------------------------------------------------------------
void ofApp::dynamicBrush(float x, float y, int size, float speed, vec2 direction){
    ofNoFill();
    ofSetLineWidth(1);

    float scale = ofMap(speed, 1, 50, 0.1, 3, true);
    float angle = atan2(gestureDirection.y, gestureDirection.x);
    vec2 limited = direction * ofClamp(speed, 1, 30);

    ofPushMatrix();
        ofTranslate(x, y);
        ofSetColor(255, 0, 0);
        ofDrawLine(0, 0, limited.x, limited.y);

        ofSetColor(0);
        ofScale(scale);
        ofRotateRad(angle);
        ofDrawTriangle(-10, -5, -10, 5, 0, 0);
    ofPopMatrix();
}

//--------------------------------------------------------------
void ofApp::smokeBrush(float x, float y, int size, float speed, vec2 direction){
    float scale = ofMap(speed, 1, 50, 0.1, 3, true);
    float angle = atan2(gestureDirection.y, gestureDirection.x);
    vec2 limited = direction * ofClamp(speed, 1, 30);

    ofPushMatrix();
        ofTranslate(x, y);

        ofSetColor(0);
        ofRotateRad(angle);
        for (int i = 0; i < 4; i++) {
            int gray = 48 + ofRandom(128);
            ofSetColor(gray, gray, gray, 20 + ofRandom(80));
            ofDrawEllipse(limited.x - sin(ofRandom(100)) * scale, limited.y + cos(ofRandom(100)) * scale, 5 * scale, 5 * scale);
        }
    ofPopMatrix();
}

//--------------------------------------------------------------
void ofApp::imageBrush(float x, float y, int size, float speed, vec2 direction){
    float scale = ofMap(speed, 1, 50, 0.1, 3, true) * 10;

    ofLogo.draw(x, y, 5 * scale, 5 * scale);
}

//--------------------------------------------------------------
void ofApp::funBrush(float x, float y, float speed, vec2 direction){
    float scale = ofMap(speed, 1, 5, 0.1, 6, true);
    float angle = atan2(gestureDirection.y, gestureDirection.x);

    ofPushMatrix();
        ofTranslate(x, y);
        ofSetColor(0 + (scale * 40), 0, 200 - (scale * 30));
        ofScale(scale / 3);

        ofRotateRad(angle);

        ofBeginShape();
            ofVertex(-10, -50);
            ofVertex(-6, 4);
            ofVertex(6, 10);
            ofVertex(10, 40);
            ofVertex(2, 4);
        ofEndShape();
    ofPopMatrix();
}