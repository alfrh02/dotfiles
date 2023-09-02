/* See LICENSE file for copyright and license details. */

/* appearance */
static const unsigned int borderpx  = 1;        /* border pixel of windows */
static const unsigned int snap      = 32;       /* snap pixel */
static const int showbar            = 1;        /* 0 means no bar */
static const int topbar             = 1;        /* 0 means bottom bar */
static const char *fonts[]          = { "Misc Terminusmodx.Icons:antialias=false:size=8" }; // { "BigBlue Terminal 437TT:antialias=true:size=8" };
static const char dmenufont[]       = "Terminus:antialias=false:size=8";

static const char col_primary[]     = "#121212"; // black
static const char col_secondary[]   = "#E0E0E0"; // white
static const char col_border[]      = "#212121"; // dark-grey
static const char col_grey[]        = "#696969"; // light-grey
static const char col_red[]         = "#CF4F88";
static const char col_green[]       = "#479663";
static const char col_cyan[]        = "#53A6A6";
static const char col_yellow[]      = "#FBB600";
static const char col_magenta[]     = "#7E62B3";
static const char col_hotred[]      = "#FF2233";

static const char *colors[][3]      = {
       /* fg             bg              border     */
	{ col_grey,      col_primary,    col_border }, // default - 1
	{ col_secondary, col_primary,    col_grey   }, // selected - 2
	{ col_red,       col_primary,    col_border }, // red - 3
	{ col_green,     col_primary,    col_border }, // green - 4
	{ col_cyan,      col_primary,    col_border }, // cyan - 5
	{ col_yellow,    col_primary,    col_border }, // yellow - 6
	{ col_magenta,   col_primary,    col_border }, // magenta - 7
	{ col_hotred,    col_primary,    col_border }, // hot red - 8
};

/* tagging */
static const char *tags[] = { "Ñ www", "½ two", "Ï irc", "♫ mus", "ß fve", "µ z", "³ x", "¢ c", "ð v" };

static const Rule rules[] = {
	/* xprop(1):
	 *	WM_CLASS(STRING) = instance, class
	 *	WM_NAME(STRING) = title
	 */
	/* class      instance    title       tags mask     isfloating   monitor */
	{ "Gimp",     NULL,       NULL,       0,            1,           -1 },
	{ "sxiv",     NULL,       NULL,       0,            1,           -1 },
	{ "Firefox",  NULL,       NULL,       1 << 8,       0,           -1 },
};

/* layout(s) */
static const float mfact     = 0.55; /* factor of master area size [0.05..0.95] */
static const int nmaster     = 1;    /* number of clients in master area */
static const int resizehints = 1;    /* 1 means respect size hints in tiled resizals */
static const int lockfullscreen = 1; /* 1 will force focus on the fullscreen window */

static const Layout layouts[] = {
	/* symbol     arrange function */
	{ "[]=",      tile },    /* first entry is default */
	{ "><>",      NULL },    /* no layout function means floating behavior */
	{ "[M]",      monocle },
};

/* key definitions */
#define MODKEY Mod4Mask
#define TAGKEYS(KEY,TAG) \
	{ MODKEY,                       KEY,      view,           {.ui = 1 << TAG} }, \
	{ MODKEY|ControlMask,           KEY,      toggleview,     {.ui = 1 << TAG} }, \
	{ MODKEY|ShiftMask,             KEY,      tag,            {.ui = 1 << TAG} }, \
	{ MODKEY|ControlMask|ShiftMask, KEY,      toggletag,      {.ui = 1 << TAG} },

/* helper for spawning shell commands in the pre dwm-5.0 fashion */
#define SHCMD(cmd) { .v = (const char*[]){ "/bin/sh", "-c", cmd, NULL } }

/* commands */
static char dmenumon[2] = "0"; /* component of dmenucmd, manipulated in spawn() */
static const char *dmenucmd[] = { "dmenu_run", "-m", dmenumon, "-fn", dmenufont, "-nb", col_secondary, "-nf", col_primary, "-sb", col_primary, "-sf", col_red, NULL };
static const char *termcmd[]  = { "st", NULL };

static const char *startcmd[] = { "bash", "/home/alfr/.scripts/startup.sh"        };
static const char *jackcmd[]  = { "bash", "/home/alfr/.scripts/jack_checker.sh"   };
static const char *picomcmd[] = { "bash", "/home/alfr/.scripts/picom_checker.sh"  };
static const char *sscmd[]    = { "bash", "/home/alfr/.scripts/scrotclipboard.sh" };

static const Key keys[] = {
	/* modifier                     key        function        argument */
	{ MODKEY,                       XK_w,      spawn,          {.v = startcmd } }, // run startup.sh 
	{ MODKEY,                       XK_a,      spawn,          {.v = jackcmd } }, // toggle JACK client
	{ MODKEY,                       XK_s,      spawn,          {.v = picomcmd } }, // toggle PICOM
	{ MODKEY|ShiftMask,             XK_s,      spawn,          {.v = sscmd } }, // screengrab
	{ MODKEY,                       XK_r,      spawn,          {.v = dmenucmd } }, // run dmenu
	{ MODKEY,                       XK_t,      spawn,          {.v = termcmd } }, // run terminal
        { MODKEY,                       XK_b,      togglebar,      {0} }, // toggle bar
	{ MODKEY,                       XK_j,      focusstack,     {.i = +1 } },
	{ MODKEY,                       XK_k,      focusstack,     {.i = -1 } },
	{ MODKEY,                       XK_i,      incnmaster,     {.i = +1 } },
	{ MODKEY,                       XK_d,      incnmaster,     {.i = -1 } },
	{ MODKEY,                       XK_h,      setmfact,       {.f = -0.05} }, // reduce client size (tiling)
	{ MODKEY,                       XK_l,      setmfact,       {.f = +0.05} }, // increase client size (tiling)
	{ MODKEY,                       XK_Return, zoom,           {0} },
	{ MODKEY,                       XK_Tab,    view,           {0} },
	{ MODKEY,                       XK_q,      killclient,     {0} }, // kill focused client
	{ MODKEY,                       XK_p,      setlayout,      {.v = &layouts[0]} }, // set to tiling
        { MODKEY,                       XK_f,      setlayout,      {.v = &layouts[1]} }, 
        { MODKEY,                       XK_m,      setlayout,      {.v = &layouts[2]} },
	{ MODKEY,                       XK_space,  setlayout,      {0} },
	{ MODKEY|ShiftMask,             XK_f,      togglefloating, {0} }, // toggle client floating
	{ MODKEY,                       XK_0,      view,           {.ui = ~0 } }, // view every tag at once
	{ MODKEY|ShiftMask,             XK_0,      tag,            {.ui = ~0 } }, // set client to appear in every tag
	{ MODKEY,                       XK_comma,  focusmon,       {.i = -1 } },
	{ MODKEY,                       XK_period, focusmon,       {.i = +1 } },
	{ MODKEY|ShiftMask,             XK_comma,  tagmon,         {.i = -1 } },
	{ MODKEY|ShiftMask,             XK_period, tagmon,         {.i = +1 } },
	TAGKEYS(                        XK_1,                      0)
	TAGKEYS(                        XK_2,                      1)
	TAGKEYS(                        XK_3,                      2)
	TAGKEYS(                        XK_4,                      3)
	TAGKEYS(                        XK_5,                      4)
	TAGKEYS(                        XK_6,                      5)
	TAGKEYS(                        XK_7,                      6)
	TAGKEYS(                        XK_8,                      7)
	TAGKEYS(                        XK_9,                      8)
	TAGKEYS(                        XK_z,                      5)
	TAGKEYS(                        XK_x,                      6)
	TAGKEYS(                        XK_c,                      7)
	TAGKEYS(                        XK_v,                      8)
	{ MODKEY|ShiftMask,             XK_q,      quit,           {0} },
};

/* button definitions */
/* click can be ClkTagBar, ClkLtSymbol, ClkStatusText, ClkWinTitle, ClkClientWin, or ClkRootWin */
static const Button buttons[] = {
	/* click                event mask      button          function        argument */
	{ ClkLtSymbol,          0,              Button1,        setlayout,      {0} },
	{ ClkLtSymbol,          0,              Button3,        setlayout,      {.v = &layouts[2]} },
	{ ClkWinTitle,          0,              Button2,        zoom,           {0} },
	{ ClkStatusText,        0,              Button2,        spawn,          {.v = termcmd } },
	{ ClkClientWin,         MODKEY,         Button1,        movemouse,      {0} },
	{ ClkClientWin,         MODKEY,         Button2,        togglefloating, {0} },
	{ ClkClientWin,         MODKEY,         Button3,        resizemouse,    {0} },
	{ ClkTagBar,            0,              Button1,        view,           {0} },
	{ ClkTagBar,            0,              Button3,        toggleview,     {0} },
	{ ClkTagBar,            MODKEY,         Button1,        tag,            {0} },
	{ ClkTagBar,            MODKEY,         Button3,        toggletag,      {0} },
};

