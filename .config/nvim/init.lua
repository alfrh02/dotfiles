local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
	{ "catppuccin/nvim", name = "catppuccin", priority = 1000 },
	{ "itchyny/calendar.vim", name = "calendar", priority = 1000 }
})

require("catppuccin").setup {
	color_overrides = {
		all = {
			base = "#dce0e8",
		}
	}
}

vim.cmd.colorscheme("catppuccin-latte")

vim.cmd([[
set nu
set loadplugins
set scrolloff=16

call plug#begin()

Plug 'vimwiki/vimwiki'

Plug 'preservim/nerdtree'

call plug#end()

set nocompatible
filetype plugin on
syntax on
let mapleader="\\"

let g:vimwiki_list = [{'path': '~/documents/vimwiki/',
                      \ 'syntax': 'markdown', 'ext': '.md'}]
let g:vimwiki_global_ext = 0
]])
