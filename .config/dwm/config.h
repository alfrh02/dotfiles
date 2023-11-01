/* See LICENSE file for copyright and license details. */

/* appearance */
static const unsigned int borderpx  = 1;        /* border pixel of windows */
static const unsigned int snap      = 16;       /* snap pixel */
static const int showbar            = 1;        /* 0 means no bar */
static const int topbar             = 1;        /* 0 means bottom bar */
static const char *fonts[]          = { "Misc Terminusmodx.Icons:antialias=false:size=8" }; // { "BigBlue Terminal 437TT:antialias=true:size=8" };
static const char dmenufont[]       = "Terminus:antialias=false:size=8";

static const char col_rosewater[]   = "#dc8a78";
static const char col_flamingo[]    = "#dd7878";
static const char col_pink[]        = "#ea76cb";
static const char col_mauve[]       = "#8839ef";
static const char col_red[]         = "#d20f39";
static const char col_maroon[]      = "#e64553";
static const char col_peach[]       = "#fe640b";
static const char col_yellow[]      = "#df8e1d";
static const char col_green[]       = "#40a02b";
static const char col_teal[]        = "#179299";
static const char col_sky[]         = "#04a5e5";
static const char col_sapphire[]    = "#209fb5";
static const char col_blue[]        = "#1e66f5";
static const char col_lavender[]    = "#7287fd";
static const char col_text[]        = "#4c4f69";
static const char col_subtext0[]    = "#6c6f85";
static const char col_subtext1[]    = "#5c5f77";
static const char col_overlay0[]    = "#9ca0b0";
static const char col_overlay1[]    = "#8c8fa1";
static const char col_overlay2[]    = "#7c7f93";
static const char col_surface0[]    = "#ccd0da";
static const char col_surface1[]    = "#bcc0cc";
static const char col_surface2[]    = "#acb0be";
static const char col_base[] 	    = "#eff1f5";
static const char col_mantle[]	    = "#e6e9ef";
static const char col_crust[] 	    = "#dce0e8";

static const unsigned int baralpha = OPAQUE; // 0x80
static const unsigned int borderalpha = OPAQUE;

static const char *colors[][3]      = {
       /* fg             bg           border       */
	{ col_overlay1,  col_base,    col_surface2 }, // default - 1
	{ col_text,      col_base,    col_rosewater}, // selected - 2
	{ col_rosewater, col_base,    col_surface2 },  
	{ col_green,     col_base,    col_surface2 },  
	{ col_blue,      col_base,    col_surface2 },  
	{ col_yellow,    col_base,    col_surface2 },  
	{ col_mauve,     col_base,    col_surface2 },  
	{ col_red,       col_base,    col_surface2 },  
};

static const unsigned int alphas[][3]      = {
    /*               fg      bg        border*/
	{ OPAQUE, baralpha, borderalpha },
	{ OPAQUE, baralpha, borderalpha },
	{ OPAQUE, baralpha, borderalpha },
	{ OPAQUE, baralpha, borderalpha },
	{ OPAQUE, baralpha, borderalpha },
	{ OPAQUE, baralpha, borderalpha },
	{ OPAQUE, baralpha, borderalpha },
	{ OPAQUE, baralpha, borderalpha },
};


/* tagging */
//static const char *tags[] = { "Ñ www", "½ two", "Ï irc", "♫ mus", "ß fve", "µ z", "³ x", "¢ c", "ð v" };
static const char *tags[] = { "Ñ www", "½", "Ï irc", "♫ mus", "ß", "µ", "³", "¢", "ð" };

static const Rule rules[] = {
	/* xprop(1):
	 *	WM_CLASS(STRING) = instance, class
	 *	WM_NAME(STRING) = title
	 */
	/* class      instance    title       		tags mask     isfloating   monitor */
	{ "sxiv",     NULL,       NULL,       		0,            1,           -1 },
	{ "mpv",      NULL,       NULL,       		0,            1,           -1 },
	{ "steam",    NULL,       "Friends List",       0,            1,           -1 },
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
static const char *dmenucmd[] = { "dmenu_run", "-m", dmenumon, "-fn", dmenufont, "-nb", col_text, "-nf", col_base, "-sb", col_base, "-sf", col_red, NULL };
static const char *termcmd[]  = { "st", NULL };

//static const char *playytcmd[]   = { "playerctl", "-p", "firefox", "play-pause"   };
static const char *playprevcmd[] = { "playerctl", "-i", "firefox", "previous"     };
static const char *playnextcmd[] = { "playerctl", "-i", "firefox", "next"         };
static const char *playppcmd[]   = { "playerctl", "-i", "firefox", "play-pause"   };
static const char *clipcmd[]     = { "/home/alfr/.scripts/replay/save-replay.sh"  };
static const char *startcmd[]    = { "/home/alfr/.scripts/dwm/startup.sh"         };
static const char *jackcmd[]     = { "/home/alfr/.scripts/dwm/toggle-jack.sh"     };
static const char *picomcmd[]    = { "/home/alfr/.scripts/dwm/toggle-picom.sh"    };
static const char *sscmd[]       = { "/home/alfr/.scripts/dwm/scrot-clipboard.sh" };

static const Key keys[] = {
	/* modifier                     key        function        argument */
	//{ MODKEY|ControlMask,    	XK_space,  spawn,          {.v = playytcmd } }, // firefox play-pause 
	{ MODKEY,       	    	XK_a,      spawn,          {.v = playprevcmd } }, // play prev track 
	{ MODKEY, 	           	XK_d,      spawn,          {.v = playnextcmd } }, // play next track 
	{ MODKEY,           		XK_space,  spawn,          {.v = playppcmd } }, // play-pause 
	{ MODKEY|ControlMask,           XK_g,      spawn,          {.v = clipcmd } }, // record last 30 seconds 
	{ MODKEY|ShiftMask,             XK_w,      spawn,          {.v = startcmd } }, // run startup.sh 
	{ MODKEY|ShiftMask,             XK_j,      spawn,          {.v = jackcmd } }, // toggle JACK client
	{ MODKEY,                       XK_s,      spawn,          {.v = picomcmd } }, // toggle picom
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
//	{ MODKEY,                       XK_space,  setlayout,      {0} },
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

