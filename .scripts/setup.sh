### stuff i use from pacman

# sudo pacman -Syu dmenu feh filezilla flameshot git vim renoise neofetch obsidian thunar cmatrix firefox discord spotify-launcher steam pulseaudio jack picom audacity blender gimp htop cmus playerctl pulseaudio-alsa pulseaudio-bluetooth dunst ly

### misc aur projects

#mkdir temp
#cd temp

#git clone https://aur.archlinux.org/gpu-screen-recorder-git.git
#cd gpu-screen-recorder-git
#makepkg -si
#cd ..
#rm -rf gpu-screen-recorder-git

#git clone https://aur.archlinux.org/cmusfm.git
#cd cmusfm
#makepkg -si

#git clone https://aur.archlinux.org/terminusmod.git
#cd terminusmod
#makepkg -si

#cd
#rm -rf temp

# dwm
echo -e "\033[0;31m========================================\nDWM DOWNLOAD\n========================================\033[0m"

cd ~/.config
git clone https://git.suckless.org/dwm

# config
echo -e "\033[0;31m========================================\nDWM CONFIG\n========================================\033[0m"

cd dwm
wget -q https://cdn.discordapp.com/attachments/481486916735205406/1143885262892572723/config.h

# install
echo -e "\033[0;31m========================================\nDWM INSTALL\n========================================\033[0m"

sudo make clean install

# patches
echo -e "\033[0;31m========================================\nDWM PATCHES\n========================================\033[0m"

wget -q https://dwm.suckless.org/patches/statuscolors/dwm-statuscolors-20220322-bece862.diff
wget -q https://dwm.suckless.org/patches/hide_vacant_tags/dwm-hide_vacant_tags-6.3.diff

patch -i dwm-statuscolors-20220322-bece862.diff
patch -i dwm-hide_vacant_tags-6.3.diff

# install
echo -e "\033[0;31m========================================\nDWM INSTALL\n========================================\033[0m"

sudo make clean install

# st
echo -e "\033[0;31m========================================\nST DOWNLOAD\n========================================\033[0m"

cd ~/.config
git clone https://git.suckless.org/st

# config
echo -e "\033[0;31m========================================\nST CONFIG\n========================================\033[0m"

cd st
#wget -q https://cdn.discordapp.com/attachments/481486916735205406/1140322802734465185/config.h

# install
echo -e "\033[0;31m========================================\nST INSTALL\n========================================\033[0m"

sudo make clean install

# patches
#echo -e "\033[0;31m========================================\nST PATCHES\n========================================\033[0m"
#
#wget -q 
#
#git apply *.diff
#patch -i dwm.c *.diff

# install
#echo -e "\033[0;31m========================================\nDWM INSTALL\n========================================\033[0m"
#
#sudo make clean install
