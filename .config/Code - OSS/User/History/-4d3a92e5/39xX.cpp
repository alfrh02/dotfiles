#include <iostream>
#include <string>

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

}

void mangleBot() {

}

void markovBot() {

}

int main() {
    parrotBot();
}