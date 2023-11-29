#pragma once

#include "ofMain.h"

class LightBulb {
    public:
        LightBulb(float x, float y, float z, float radius);//constructor
        ~LightBulb();

        void draw();
        void toggle(bool toggle);

    private:
        ofSpherePrimitive bulb;
        ofCylinderPrimitive base;

        ofMaterial baseMaterial;
        ofMaterial bulbMaterial;
};
