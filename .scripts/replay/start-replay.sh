#!/bin/sh
video_path="$HOME/videos/clips"
gpu-screen-recorder -w screen -f 60 -a "$(pactl get-default-sink).monitor" -c mkv -r 30 -o "$video_path" 
