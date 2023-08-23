# sudo pacman -Syu dmenu feh filezilla flameshot git vim renoise neofetch obsidian thunar cmatrix firefox discord spotify-launcher steam pulseaudio jack picom audacity blender gimp htop cmus playerctl pulseaudio-alsa pulseaudio-bluetooth dunst ly

### misc aur projects

mkdir temp
cd temp

git clone https://aur.archlinux.org/gpu-screen-recorder-git.git
cd gpu-screen-recorder-git
makepkg -si
cd ..
rm -rf gpu-screen-recorder-git

git clone https://aur.archlinux.org/cmusfm.git
cd cmusfm
makepkg -si

git clone https://aur.archlinux.org/terminusmod.git
cd terminusmod
makepkg -si

cd
rm -rf temp

####

cd .config/dwm
sudo make clean install

cd ../st
sudo make clean install
