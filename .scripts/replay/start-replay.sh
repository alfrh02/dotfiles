#!/bin/sh

video_path="$HOME/videos"
mkdir -p "$video_path"
gpu-screen-recorder -w screen -f 60 -a "$(pactl get-default-sink).monitor" -c mp4 -r 30 -o "$video_path"
