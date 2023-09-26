#!/bin/bash
# colors:
# 1 - text
# 2 - "selected" text 
# 3 - rosewater 
# 4 - green
# 5 - blue 
# 6 - yellow
# 7 - magenta 
# 8 - ALERT!!

date_get() {
	echo -e "É $(date +"%A %d %B %H:%M:%S") "
}

wttr_get() {
	weather=$(timeout --signal=1 2s curl -s v2.wttr.in/51.47,-0.04 | grep "Weather:" | cut -d ' ' -f 4-)
	IFS=',' read -ra weather_arr <<< "$weather"

	if [[ ${weather} == "" ]]; then 
		echo -e ""
	else
		echo -e "Ò${weather_arr[1]}, ${weather_arr[0]} "
	fi
}

pctl_get() {
	artist=$(playerctl -i firefox metadata artist)
	title=$(playerctl -i firefox metadata title)
	album=$(playerctl -i firefox metadata album)
	status=$(playerctl -i firefox status)

	if [[ "$status" == "Playing" ]]; then
		echo -e "æ à $artist - $title \x01($album)\x02 "
	fi
}

ram_get() {
	echo -e "\x02Æ $(free -m | awk '/^Mem:/ {print $3 "/" $2}') "
}

jack_get() {
	if [[ ! -z $(pidof jackd) ]]; then
		if [[ $(expr $(date +%s) % 2) == 1 ]]; then
			symbol=""	
		else
			symbol="ä "
		fi
		echo -e "\x08$symbol JACK Enabled "
	fi
}

symbol_get() {
#	if [[ $(expr $(date +%s) % 2) == 1 ]]; then
#		symbol="\x03t "	
#	else
		symbol="\x05¹ "
#	fi
	echo -e "$symbol"
}

all_lowercase() {
	echo $(jack_get)$(ram_get)$(pctl_get)$(wttr_get)$(date_get)$(symbol_get) | tr '[:upper:]' '[:lower:]'	
}

xsetroot -name "$(all_lowercase)"
