#--- scripts ---
# video clipping
alias save-replay="killall -SIGUSR1 gpu-screen-recorder; notify-send -t 5000 -u low -- 'GPU Screen Recorder' 'Replay saved'"
alias start-replay="gpu-screen-recorder -w screen -f 60 -a '$(pactl get-default-sink).monitor' -c mp4 -r 30 -o '$HOME/videos/clips'"
alias stop-replay="killall -SIGINT gpu-screen-recorder"
alias cdapps="cd /home/alfr/projects/code/cpp/openframeworks/apps/myApps/"
alias neoforge="cd /home/alfr/.config/com.modrinth.theseus/profiles/neoforge"
alias serve="firefox localhost:8000; python -m http.server"

# kill dwmstatus-loop.sh and dwm
alias killdwm="stop-replay; kill $(ps -ef | grep 'dwmstatus-loop.sh' | awk '{print $2}'); killall dwm"

# disables mouse acceleration
alias fix-mouse="~/.scripts/fix-mouse.sh"

# vimwiki (deprecated)
alias wiki="nvim -c 'VimwikiIndex'"
alias wikiw="nvim -c 'VimwikiIndex' -c 'vs ~/documents/vimwiki/cult-of-done.md' -c 'sp ~/documents/vimwiki/todo.md'"
alias todo="nvim -c 'VimwikiIndex'"

# new terminal in working directory
alias nt="st -o $(pwd) & disown"

# dotfiles git
alias dotfiles="git --git-dir=$HOME/.dotfiles --work-tree=$HOME"

# abbreviations
alias c="clear"
alias m="makepkg -si"
alias v="nvim"
alias yta="yt-dlp -x --audio-format wav"
alias yt="yt-dlp" 

# redos
alias cp="cp -rv"
alias ls="ls --color=auto --group-directories-first --hide 'desktop.ini' --hide '\$RECYCLE.BIN' --hide 'System Volume Information' --hide 'Zomboid'"
alias mv="mv -iv"
alias rm="rm -v"
alias pwd="pwd -P" # show real address; not through symlinks
