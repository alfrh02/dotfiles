-------------------------------
--  "Alfburn" awesome theme  --
--    By Alf (alfr02)   --
-------------------------------

local themes_path = require("gears.filesystem").get_themes_dir()
local dpi = require("beautiful.xresources").apply_dpi

-- {{{ Main
local theme = {}
theme.wallpaper = themes_path .. "alfburn/background.png"
-- }}}

-- {{{ Styles
theme.font      = "terminessttf nerd font 9"

-- {{{ Colors
-- fg
theme.fg_normal  = "#DCDCDC"
theme.fg_focus   = "#DCDCDC"
theme.fg_urgent  = "#CC9393"
-- bg
theme.bg_normal  = "#22577a"
theme.bg_focus   = "#3F3F3F"
theme.bg_urgent  = theme.bg_normal
theme.bg_systray = theme.bg_normal
-- }}}

-- {{{ Borders
theme.useless_gap   = 8
theme.border_width  = 1
theme.border_normal = "#3F3F3F"
theme.border_focus  = "#990000"
theme.boarder_marked = "FF00FF" -- what is this
--theme.border_marked = "#CC9393"
-- }}}

-- {{{ Titlebars
theme.titlebar_bg_focus  = "#3F3F3F"
theme.titlebar_bg_normal = "#3F3F3F"
-- }}}

-- There are other variable sets
-- overriding the default one when
-- defined, the sets are:
-- [taglist|tasklist]_[bg|fg]_[focus|urgent|occupied|empty|volatile]
-- titlebar_[normal|focus]
-- tooltip_[font|opacity|fg_color|bg_color|border_width|border_color]
-- Example:
--theme.taglist_bg_focus = "#CC9393"
-- }}}

-- {{{ Widgets
-- You can add as many variables as
-- you wish and access them by using
-- beautiful.variable in your rc.lua
--theme.fg_widget        = "#AECF96"
--theme.fg_center_widget = "#88A175"
--theme.fg_end_widget    = "#FF5656"
--theme.bg_widget        = "#494B4F"
--theme.border_widget    = "#3F3F3F"
-- }}}

-- {{{ Mouse finder
theme.mouse_finder_color = "#CC9393"
-- mouse_finder_[timeout|animate_timeout|radius|factor]
-- }}}

-- {{{ Menu
-- Variables set for theming the menu:
-- menu_[bg|fg]_[normal|focus]
-- menu_[border_color|border_width]
theme.menu_height = dpi(15)
theme.menu_width  = dpi(100)
-- }}}

-- {{{ Icons
-- {{{ Taglist
theme.taglist_squares_sel   = themes_path .. "alfburn/taglist/squarefz.png"
theme.taglist_squares_unsel = themes_path .. "alfburn/taglist/squarez.png"
--theme.taglist_squares_resize = "false"
-- }}}

-- {{{ Misc
theme.awesome_icon           = themes_path .. "assets/awesome-icon.png"
theme.menu_submenu_icon      = themes_path .. "default/submenu.png"
-- }}}

-- {{{ Layout
theme.layout_tile       = themes_path .. "assets/layouts/tile.png"
theme.layout_tileleft   = themes_path .. "assets/layouts/tileleft.png"
theme.layout_tilebottom = themes_path .. "assets/layouts/tilebottom.png"
theme.layout_tiletop    = themes_path .. "assets/layouts/tiletop.png"
theme.layout_fairv      = themes_path .. "assets/layouts/fairv.png"
theme.layout_fairh      = themes_path .. "assets/layouts/fairh.png"
theme.layout_spiral     = themes_path .. "assets/layouts/spiral.png"
theme.layout_dwindle    = themes_path .. "assets/layouts/dwindle.png"
theme.layout_max        = themes_path .. "assets/layouts/max.png"
theme.layout_fullscreen = themes_path .. "assets/layouts/fullscreen.png"
theme.layout_magnifier  = themes_path .. "assets/layouts/magnifier.png"
theme.layout_floating   = themes_path .. "assets/layouts/floating.png"
theme.layout_cornernw   = themes_path .. "assets/layouts/cornernw.png"
theme.layout_cornerne   = themes_path .. "assets/layouts/cornerne.png"
theme.layout_cornersw   = themes_path .. "assets/layouts/cornersw.png"
theme.layout_cornerse   = themes_path .. "assets/layouts/cornerse.png"
-- }}}

return theme

-- vim: filetype=lua:expandtab:shiftwidth=4:tabstop=8:softtabstop=4:textwidth=80
