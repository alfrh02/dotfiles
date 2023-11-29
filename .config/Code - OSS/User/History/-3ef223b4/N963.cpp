#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    isDrawing = false;
    isErasing = false;
    brushSize = 50;

    selectedBrush = 1;

    one.load("one.png");
    zero.load("zero.png");

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
            ofSetColor(0);
            switch(selectedBrush) {
                case 1:
                    simpleBrush(mouseX, mouseY, brushSize, 0, 0, 0);
                    break;
                case 2:
                    dynamicBrush(previousMousePos.x, previousMousePos.y, brushSize, gestureMagnitude, gestureDirection);
                    break;
                case 3:
                    smokeBrush(previousMousePos.x, previousMousePos.y, brushSize, gestureMagnitude, gestureDirection);
                    break;
                case 4:
                    binaryBrush(mouseX, mouseY, brushSize, gestureMagnitude, gestureDirection);
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
    ofDrawBitmapString("use q, w, r, and t to switch brushes; use a and d to change brush size", 0, 30);
    ofDrawBitmapString("e *toggles* eraser", 0, 45);
    ofDrawBitmapString("selected brush: " + getBrush(selectedBrush), 0, 60);
    ofDrawBitmapString("brush size: " + to_string(brushSize), 0, 60);
    ofSetColor(255);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    switch(char(key)) {
        case 'a':
            brushSize -= 5;
            break;
        case 'd':
            brushSize += 5;
            break;
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
    ofColor(r, g, b);
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
void ofApp::binaryBrush(float x, float y, int size, float speed, vec2 direction){
    float scale = ofMap(speed, 1, 50, 0.1, 3, true) * 10;

    ofPushMatrix();
        ofTranslate(x, y);
        ofSetColor(0);
        for (int i = 0; i < 1; i++) {
            one.draw(x, y, 5 * scale, 5 * scale);
            zero.draw(x, y, 5 * scale, 5 * scale);
        }
    ofPopMatrix();
}