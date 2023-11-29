#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    theta = 0;
    toggleLight = true;

    ofBackground(100);
    // 0 - 1
    ofEnableNormalizedTexCoords();

    light.setPointLight();

    light.setDiffuseColor(ofFloatColor(1.0,1.0, 1.0));
    light.setPosition(ofGetWidth()*.5, ofGetHeight()*.5, 300);
}

//--------------------------------------------------------------
void ofApp::update(){
    theta += ofGetLastFrameTime();
    //box.move(vec3(1,0.5,0));
    //box.rotateDeg(1, vec3(1,1,0));
    //box.move(vec3(0, sin(theta)*10, 0));
}

//--------------------------------------------------------------
void ofApp::draw(){

    ofEnableDepthTest();
    cam.begin();

    ofDrawAxis(100);
    ofDrawGrid(10,10,true,false,true,false);

    ofEnableLighting();
    light.enable();

    lightbulb.draw();

    light.disable();
    ofDisableLighting();

    cam.end();
    ofDisableDepthTest();

    //gui
    //ofDrawRectangle(10,10,100,100);

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    toggleLight = !toggleLight;
    lightbulb.toggle(toggleLight);
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

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){

}
