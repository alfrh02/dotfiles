#!/bin/bash
pid=$(pidof jackd)

if [ -z "$pid" ]; then
  exec jackd -d alsa & disown
  notify-send "JACK is ON"
else
  kill "$pid"
  notify-send "JACK is OFF"
fi
