kill $(ps -ef | grep "dwmstatus-loop.sh" | awk '{print $2}')
killall dwm
