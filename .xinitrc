#/bin/bash
xrandr --output "DP-0" --mode 1920x1080 --rate 144 --primary
xinput set-prop 9 302 0, 1

feh --bg-scale ~/pictures/wallpapers/windows-xp.jpg

~/.scripts/replay/start-replay.sh &
~/.scripts/dwm/dwmstatus-loop.sh &
picom & exec dwm
