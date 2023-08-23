killall $(ps -ef | grep "~/.scripts/dwmstatus-loop.sh" | awk '{print $2}')
killall dwm
