#!/bin/bash
pid=$(pidof picom)

if [ -z "$pid" ]; then
  exec picom & disown
  notify-send "Picom is ON"
else
  kill "$pid"
  notify-send "Picom is OFF"
fi
