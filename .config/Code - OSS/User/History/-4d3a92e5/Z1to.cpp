#include <iostream>
#include <string>
#include "utils.h"
#include "utils.cpp"

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

    cout << "phrasebot> Hello. What seems to be the problem?" << endl;

    while (true) {
        getline(cin, input);
        phrases.push_back(input);
        cout << "phrasebot> " << phrases[floor(rand() % phrases.size())] << endl;
    }
}

void mangleBot() {
    string input;
    vector<string> words;

    cout << "manglebot> Hello. What seems to be the problem?" << endl;

    while (true) {
        getline(cin, input);

        vector<string> tokens = tokenise(input, ' ');

        for (signed int i = 0; i < tokens.size(); i++) {
            words.push_back(tokens[i]);
        }
        cout << "manglebot> " <<
            words[floor(rand() % words.size())] << ' ' <<
            words[floor(rand() % words.size())] << ' ' <<
            words[floor(rand() % words.size())] << ' ' <<
            words[floor(rand() % words.size())] << ' ' <<
        endl;
    }
}

void markovBot() {

}

int main() {
    //mangleBot();
std::string hello = 'Hello World';
std::cout << hello << std::endl;
}
