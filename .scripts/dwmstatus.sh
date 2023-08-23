#!/bin/bash
# colors:
# 1 - gray
# 2 - white
# 3 - red
# 4 - green
# 5 - cyan
# 6 - yellow
# 7 - magenta

# use fontforge to find terminus's icons

date_format="%a %d %b %H:%M:%S"
date_cmd=$(date +"$date_format")
date_get() {
	echo -e "É ${date_cmd} "
}

ram_cmd=$(free -m | awk '/^Mem:/ {print $3 "/" $2 " MB"}')
ram_get() {
	echo -e "Æ ${ram_cmd} "
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
		echo -e "${stat} ${artist} - ${title} " # ${separator}"
	else
		echo -e "${stat} ${artist} - ${title} (${album}) " # ${separator}"
	fi
}

jack_enabled() {
	! [ -f $(pidof jackd) ]	
}

# this is dependent on what device youre using, your device might have a different sink number
volume_level=$(pactl get-sink-volume 1 | awk '/^Volume/ {print $7 "dB, " $5}') 
audio_get() {

	if jack_enabled; then
		echo -e "Â JACK is ON "
	else
		symbol="í" # default, loud symbol
		if [[ "$volume_level" == "-infdB, 0%" ]]; then 
			symbol="ë" # mute symbol
		elif [[ $(echo $volume_level | cut -c1-1) == "-" ]]; then 
			symbol="ì" # quieter symbol
		fi
		
		echo -e "${symbol} ${volume_level} "
	fi
}

weather_og=$(curl -s v2.wttr.in/london | grep "Weather:")
weather=$(echo ${weather_og} | awk '{print $3 " " $4}')
weather_fl=$(echo ${weather} | awk '{print $2}' | cut -c1)
weather_get()
{
#	if [[ $(echo ${weather} | awk '{print $1}') == "Partly"  ]] || [[ $(echo ${weather} | awk '{print $1}') == "Haze," ]] ; then
#		weather=$(echo ${weather_og} | awk '{print $3 " " $4 " " $5}')
#	fi
	
	
	if [[ ${weather_fl} != "+" ]] || [[ ${weather_fl} != "-" ]]; then
		weather=$(echo ${weather_og} | awk '{print $3 " " $4 " " $5}')
	fi
	
	echo -e "\x02Ò ${weather::-1} " # removes final char (a comma)
}

arch_get() {
	echo -e "¹"
}

xsetroot -name "$(weather_get)$(audio_get)$(mpris_get)$(ram_get)$(date_get)$(arch_get)"
