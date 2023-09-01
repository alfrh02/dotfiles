#!/bin/bash
# colors:
# 1 - gray
# 2 - white
# 3 - red
# 4 - green
# 5 - cyan
# 6 - yellow
# 7 - magenta
# 8 - hot red

# use fontforge to find terminus's icons

date_format="%a %d %b %H:%M:%S"
date_cmd=$(date +"$date_format")
date_get() {
	echo -e "\x03É \x02${date_cmd} "
}

ram_cmd=$(free -m | awk '/^Mem:/ {print $3 "/" $2 " MB"}')
ram_get() {
	echo -e "\x04Æ \x07${ram_cmd} "
}

artist=$(playerctl metadata artist)
title=$(playerctl metadata title)
album=$(playerctl metadata album)
mpris_status=$(playerctl status)
mpris_get() {
	if [[ "$mpris_status" == "Playing" ]]; then
		stat="æ"
	else
		stat="ç"
	fi
	
	if [[ "$artist" == "" ]]; then # hide if not playing anything
		echo ""
	elif [[ "$album" == "" ]]; then # hide empty brackets if no album metadata
		echo -e "\x06à \x03${stat} \x02${artist} - ${title} " # ${separator}"
	else
		echo -e "\x06à \x03${stat} \x02${artist} - ${title} \x01(${album}) " # ${separator}"
	fi
}

jack_enabled() {
	! [ -f $(pidof jackd) ]	
}

# this is dependent on what device youre using, your device might have a different sink number
volume_level=$(pactl get-sink-volume 1 | awk '/^Volume/ {print $7 "dB, " $5}') 
audio_get() {
 
	if jack_enabled; then
		echo -e "\x07Â \x08JACK is ON "
	else
		symbol="í" # default, loud symbol
		if [[ "$volume_level" == "-infdB, 0%" ]]; then 
			symbol="ë" # mute symbol
		elif [[ $(echo $volume_level | cut -c1-1) == "-" ]]; then 
			symbol="ì" # quieter symbol
		fi
		
		echo -e "\x07${symbol} \x02${volume_level} "
	fi
}

weather=$(curl -s v2.wttr.in/51.47,-0.04 | grep "Weather:" | cut -d ' ' -f 4-)
IFS=',' read -ra weather_arr <<< "$weather"
weather_get()
{
	echo -e "\x03Ò\x05${weather_arr[0]},${weather_arr[1]} " 
}

arch_get() {
	echo -e "\x05¹ "
}

xsetroot -name "$(weather_get)$(audio_get)$(mpris_get)$(ram_get)$(date_get)$(arch_get)"
