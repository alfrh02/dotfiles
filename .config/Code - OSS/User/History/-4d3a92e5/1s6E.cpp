#include <iostream>
#include <string>
#include "utils.h"

using namespace std;

void parrotBot() {
    string input;

    cout << "parrotbot> Hello. What seems to be the problem?" << endl;

    while (true) {
        getline(cin, input);
        cout << "parrotbot> " << input << endl;
    }
}

void phraseBot() {
    string input;
    vector<string> phrases;

    cout << "parrotbot> Hello. What seems to be the problem?" << endl;

    while (true) {
        getline(cin, input);
        cout << "parrotbot> " << input << endl;
    }
}

void mangleBot() {

}

void markovBot() {

}

int main() {
    parrotBot();
}