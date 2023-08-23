#!/bin/bash

# Replace 'your_command' with the actual command you want to run
output=$(playerctl metadata)

# Replace 'desired_string' with the string you want to check against
desired_string="No players found"

if [[ "$output" == *"$desired_string"* ]]; then
    echo "The command output contains the desired string."
else
    echo "The command output does not contain the desired string."
fi

