#include "LightBulb.hpp"

LightBulb::LightBulb(float x, float y, float z, float radius){
    cout << "I run at the beginning" << endl;

    base.set(radius, radius*2);
    base.setPosition(x, y, z);

    bulb.set(radius*2, radius);
    bulb.setPosition(x, y + radius*2, z);

    baseMaterial.setDiffuseColor(ofColor(100, 100, 100));
    baseMaterial.setAmbientColor(ofColor(255, 255, 255));
    baseMaterial.setShininess(1);

    bulbMaterial.setDiffuseColor(ofColor(0, 0, 0));
    bulbMaterial.setAmbientColor(ofColor(0, 0, 0));
    bulbMaterial.setEmissiveColor(ofColor(255, 255, 0));
}

LightBulb::~LightBulb(){
    cout << "I run at the end" << endl;
}

void LightBulb::draw(){
    baseMaterial.begin();
    base.draw();
    baseMaterial.end();
    bulbMaterial.begin();
    bulb.draw();
    bulbMaterial.end();
}

void LightBulb::toggle(bool toggle){
    cout << "toggle" << endl;
    if (toggle) {
        bulbMaterial.setEmissiveColor(ofColor(255, 255, 0));
    } else {
        bulbMaterial.setEmissiveColor(ofColor(0, 0, 0));
    }
}
