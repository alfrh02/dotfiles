# scripts
alias save-replay="killall -SIGUSR1 gpu-screen-recorder; notify-send -t 5000 -u low -- 'GPU Screen Recorder' 'Replay saved'"
alias start-replay="gpu-screen-recorder -w screen -f 60 -a '$(pactl get-default-sink).monitor' -c mp4 -r 30 -o '$HOME/videos/clips'"
alias stop-replay="killall -SIGINT gpu-screen-recorder"
alias killdwm="stop-replay; kill $(ps -ef | grep 'dwmstatus-loop.sh' | awk '{print $2}'); killall dwm"
alias fix-mouse="xinput set-prop 15 302 0, 1"
alias wiki="nvim -c 'VimwikiIndex'"
alias wikiw="nvim -c 'VimwikiIndex' -c 'vs ~/documents/vimwiki/cult-of-done.md' -c 'sp ~/documents/vimwiki/todo.md'"

# git
alias dotfiles="git --git-dir=$HOME/.dotfiles --work-tree=$HOME"

# abbreviations
alias c="clear"
alias m="makepkg -si"
alias s="sudo pacman -S"
alias v="nvim"
alias py="python"
alias cds="cd /mnt/shared"
alias yta="yt-dlp -x --audio-format wav"

# redos
alias cp="cp -rv"
alias ls="ls --color=auto --group-directories-first --hide 'desktop.ini' --hide '\$RECYCLE.BIN' --hide 'System Volume Information' --hide 'Zomboid'"
alias rm="rm -v"
alias pwd="pwd -P"

export PATH=$PATH:/home/alfr/.spicetify
