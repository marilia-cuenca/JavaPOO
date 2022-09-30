(function(g){var window=this;'use strict';var Z4a=function(a,b){a.Pa("onAutonavCoundownStarted",b)},m6=function(a,b,c){g.jo(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Mf(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.SG&&(b.lengthText?(e=b.lengthText||null,f=b.Ts||null):b.lengthSeconds&&(e=g.WL(b.lengthSeconds),f=g.WL(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.QG(d).type;var l=b instanceof g.SG?b.isLivePlayback:null,m=b instanceof g.SG?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,u=[],w=[];n&&u.push(n);p&&(u.push(p),w.push(p));q&&w.push(q);c={title:b.title,author:n,author_and_views:u.join(" \u2022 "),aria_label:b.ariaLabel||
g.FJ("Assistir a $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Om(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:w.join(" \u2022 "),autoplayAlternativeHeader:b.yp};b instanceof g.RG&&(c.playlist_length=b.playlistLength);a.update(c)},n6=function(a){var b=a.V(),c=b.u;
g.W.call(this,{F:"a",N:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{F:"div",Fa:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{F:"div",X:{"aria-label":"{{timestamp}}"},Fa:["ytp-autonav-timestamp"],oa:"{{duration}}"},{F:"div",Fa:["ytp-autonav-live-stamp"],oa:"Ao vivo"},
{F:"div",Fa:["ytp-autonav-upcoming-stamp"],oa:"Em breve"},{F:"div",N:"ytp-autonav-list-overlay",W:[{F:"div",N:"ytp-autonav-mix-text",oa:"Mix"},{F:"div",N:"ytp-autonav-mix-icon"}]}]},{F:"div",Fa:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],oa:"{{title}}"},{F:"div",Fa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],oa:"{{author}}"},{F:"div",Fa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],oa:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.j=c;this.Ra("click",this.onClick);this.Ra("keypress",this.onKeyPress)},o6=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{F:"div",N:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.B=0;this.container=new g.W({F:"div",N:"ytp-autonav-endscreen-countdown-container"});g.M(this,this.container);this.container.Ca(this.element);b=a.V();var d=b.u;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.K("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.W({F:"div",N:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{F:"div",N:"ytp-autonav-endscreen-upnext-header"},{F:"div",N:"ytp-autonav-endscreen-upnext-alternative-header",oa:"{{autoplayAlternativeHeader}}"},{F:"a",N:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.J:""},W:[{F:"div",Fa:e,X:{style:"{{background}}"},W:[{F:"div",
X:{"aria-label":"{{timestamp}}"},Fa:["ytp-autonav-timestamp"],oa:"{{duration}}"},{F:"div",Fa:["ytp-autonav-live-stamp"],oa:"Ao vivo"},{F:"div",Fa:["ytp-autonav-upcoming-stamp"],oa:"Em breve"}]},{F:"div",N:"ytp-autonav-endscreen-video-info",W:[{F:"div",N:"ytp-autonav-endscreen-premium-badge"},{F:"div",N:"ytp-autonav-endscreen-upnext-title",oa:"{{title}}"},{F:"div",N:"ytp-autonav-endscreen-upnext-author",oa:"{{author}}"},{F:"div",N:"ytp-autonav-view-and-date",oa:"{{views_and_publish_time}}"},{F:"div",
N:"ytp-autonav-author-and-view",oa:"{{author_and_views}}"}]}]}]});g.M(this,this.j);this.j.Ca(this.container.element);d||this.T(this.j.Da("ytp-autonav-endscreen-link-container"),"click",this.iM);this.G.vb(this.container.element,this,115127);this.G.vb(this.j.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({F:"div",N:"ytp-autonav-overlay"});g.M(this,this.overlay);this.overlay.Ca(this.container.element);this.u=new g.W({F:"div",N:"ytp-autonav-endscreen-button-container"});
g.M(this,this.u);this.u.Ca(this.container.element);this.cancelButton=new g.W({F:"button",Fa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},oa:"Cancelar"});g.M(this,this.cancelButton);this.cancelButton.Ca(this.u.element);this.cancelButton.Ra("click",this.MU,this);this.G.vb(this.cancelButton.element,this,115129);this.playButton=
new g.W({F:"a",Fa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},oa:"Assista agora"});g.M(this,this.playButton);this.playButton.Ca(this.u.element);this.playButton.Ra("click",this.iM,this);this.G.vb(this.playButton.element,this,115130);this.C=new g.Xn(function(){$4a(c)},500);
g.M(this,this.C);this.hM();this.T(a,"autonavvisibility",this.hM);this.G.K("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.LU),this.T(a,"onAutonavCoundownStarted",this.Y0))},p6=function(a){var b=a.G.fk(!0,a.G.isFullscreen());
g.jo(a.container.element,"ytp-autonav-endscreen-small-mode",a.Hg(b));g.jo(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.DE);g.jo(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.bf());g.jo(a.G.getRootNode(),"countdown-running",a.tj());g.jo(a.container.element,"ytp-player-content",a.G.bf());g.zl(a.overlay.element,{width:b.width+"px"});if(!a.tj()){a.G.bf()?a5a(a,Math.round(b5a(a)/1E3)):a5a(a);b=!!a.suggestion&&!!a.suggestion.yp;var c=a.G.bf()||!b;
g.jo(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.jo(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.WK(a.u,a.G.bf());g.jo(a.element,"ytp-enable-w2w-color-transitions",c5a(a))}},$4a=function(a){var b=b5a(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);a5a(a,Math.ceil((b-c)/1E3));500>=b-c&&a.tj()?a.select(!0):a.tj()&&a.C.start()},b5a=function(a){if(a.G.isFullscreen()){var b;
a=null==(b=a.G.getVideoData())?void 0:b.BL;return-1===a||void 0===a?8E3:a}return 0<=a.G.Op()?a.G.Op():g.RE(a.G.V().experiments,"autoplay_time")||1E4},c5a=function(a){var b;
return!(null==(b=a.G.getVideoData())||!b.watchToWatchTransitionRenderer)},a5a=function(a,b){b=void 0===b?-1:b;
a=a.j.Da("ytp-autonav-endscreen-upnext-header");g.jh(a);if(0<=b){b=String(b);var c="Pr\u00f3ximo v\u00eddeo em $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Pr\u00f3ximo v\u00eddeo em $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.ih("Pr\u00f3ximo v\u00eddeo em $SECONDS".slice(0,d)));var e=g.hh("span");g.co(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.rh(e,b);a.appendChild(e);a.appendChild(g.ih("Pr\u00f3ximo v\u00eddeo em $SECONDS".slice(d+c.length)));return}}g.rh(a,"Pr\u00f3ximo")},
q6=function(a,b){g.W.call(this,{F:"div",
Fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},r6=function(a){g.W.call(this,{F:"div",
Fa:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{F:"div",N:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{F:"span",N:"ytp-upnext-top",W:[{F:"span",N:"ytp-upnext-header",oa:"Pr\u00f3ximo"},{F:"span",N:"ytp-upnext-title",oa:"{{title}}"},{F:"span",N:"ytp-upnext-author",oa:"{{author}}"}]},{F:"a",N:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},W:[{F:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},W:[{F:"circle",N:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",N:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",N:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",N:"ytp-upnext-bottom",W:[{F:"span",N:"ytp-upnext-cancel"},{F:"span",N:"ytp-upnext-paused",
oa:"Reprodu\u00e7\u00e3o autom\u00e1tica pausada"}]}]});this.api=a;this.cancelButton=null;this.D=this.Da("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.Xn(this.YB,5E3,this);this.u=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=new g.W({F:"button",Fa:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},oa:"Cancelar"});g.M(this,this.cancelButton);this.cancelButton.Ra("click",this.NU,
this);this.cancelButton.Ca(b);this.cancelButton&&this.api.vb(this.cancelButton.element,this,115129);g.M(this,this.C);this.api.vb(this.element,this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.T(b,"click",this.OU);this.api.vb(b,this,115130);this.jM();this.T(a,"autonavvisibility",this.jM);this.T(a,"mdxnowautoplaying",this.T1);this.T(a,"mdxautoplaycanceled",this.U1);g.jo(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},d5a=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.BL;return-1===a||void 0===a?8E3:a}return 0<=a.api.Op()?a.api.Op():g.RE(a.api.V().experiments,"autoplay_time")||1E4},e5a=function(a,b){b=d5a(a,b);
var c=Math,d=c.min;var e=(0,g.T)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.tj()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.tj()&&a.j.start()},s6=function(a){q6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({F:"div",N:"ytp-suggestion-panel",W:[{F:"div",Fa:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],oa:"Mais v\u00eddeos"}]});this.J=new g.W({F:"div",N:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new o6(this.player);g.M(this,this.u);this.u.Ca(this.element);a.getVideoData().Ce?this.j=this.u:(this.j=new r6(a),g.BN(this.player,this.j.element,4),g.M(this,this.j));this.overlay=new g.W({F:"div",
N:"ytp-autonav-overlay-cancelled-state"});g.M(this,this.overlay);this.overlay.Ca(this.element);this.C=new g.XD(this);g.M(this,this.C);g.M(this,this.table);this.table.Ca(this.element);this.table.show();g.M(this,this.J);this.J.Ca(this.table.element);this.hide()},t6=function(a){var b=a.bf();
b!==a.D&&(a.D=b,a.player.ma("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},f5a=function(a){q6.call(this,a,"subscribecard-endscreen");
this.j=new g.W({F:"div",N:"ytp-subscribe-card",W:[{F:"img",N:"ytp-author-image",X:{src:"{{profilePicture}}"}},{F:"div",N:"ytp-subscribe-card-right",W:[{F:"div",N:"ytp-author-name",oa:"{{author}}"},{F:"div",N:"html5-subscribe-button-container"}]}]});g.M(this,this.j);this.j.Ca(this.element);var b=a.getVideoData();this.subscribeButton=new g.iP("Inscreva-se",null,"Cancelar assinatura",null,!0,!1,b.Kk,b.subscribed,"trailer-endscreen",null,null,a);g.M(this,this.subscribeButton);this.subscribeButton.Ca(this.j.Da("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ja);this.Ja();this.hide()},u6=function(a){var b=a.V(),c=g.$D||g.IF?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{F:"a",Fa:e,X:{href:"{{url}}",target:d?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{F:"div",N:"ytp-videowall-still-image",X:{style:"{{background}}"}},{F:"span",N:"ytp-videowall-still-info",W:[{F:"span",N:"ytp-videowall-still-info-bg",W:[{F:"span",N:"ytp-videowall-still-info-content",X:c,W:[{F:"span",N:"ytp-videowall-still-info-title",oa:"{{title}}"},{F:"span",
N:"ytp-videowall-still-info-author",oa:"{{author_and_views}}"},{F:"span",N:"ytp-videowall-still-info-live",oa:"Ao vivo"},{F:"span",N:"ytp-videowall-still-info-duration",oa:"{{duration}}"}]}]}]},{F:"span",Fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],W:[{F:"span",N:"ytp-videowall-still-listlabel-icon"},"Playlist",{F:"span",N:"ytp-videowall-still-listlabel-length",W:[" (",{F:"span",oa:"{{playlist_length}}"},")"]}]},{F:"span",Fa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
W:[{F:"span",N:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{F:"span",N:"ytp-videowall-still-listlabel-length",oa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.XD(this);g.M(this,this.j);this.Ra("click",this.onClick);this.Ra("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.Ug(this.element,this);this.onVideoDataChange()},v6=function(a){q6.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.S=null;this.u=new g.XD(this);g.M(this,this.u);this.Z=a.K("web_rounded_thumbnails");this.I=new g.Xn(function(){g.fo(b.element,"ytp-show-tiles")},0);
g.M(this,this.I);var c=new g.W({F:"button",Fa:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Anterior"},W:[g.aL()]});g.M(this,c);c.Ca(this.element);c.Ra("click",this.SU,this);this.table=new g.TK({F:"div",N:"ytp-endscreen-content"});g.M(this,this.table);this.table.Ca(this.element);c=new g.W({F:"button",Fa:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Pr\u00f3ximo"},W:[g.bL()]});g.M(this,c);c.Ca(this.element);c.Ra("click",this.RU,this);a.getVideoData().Ce?this.j=new o6(a,!0):this.j=
new r6(a);g.M(this,this.j);g.BN(this.player,this.j.element,4);a.vb(this.element,this,158789);this.hide()},w6=function(a){return g.CN(a.player)&&a.Zx()&&!a.C},g5a=function(a){var b,c,d,e;
return(null==(b=a.videoData)?0:null==(c=b.suggestions)?0:c.length)?null==(d=a.videoData)?void 0:d.suggestions:[null==(e=a.videoData)?void 0:g.yI(e)]},x6=function(a){var b=a.bf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},h5a=function(a,b){g.W.call(this,{F:"button",
Fa:["ytp-watch-on-youtube-button","ytp-button"],X:{title:"{{message}}"},oa:"{{content}}"});this.G=a;this.buttonType=this.buttonType=b;switch(this.buttonType){case 1:a="Assista outra vez no YouTube";b=156915;break;case 2:a="Continue assistindo no YouTube";b=156942;break;default:a="Continue assistindo no YouTube",b=156942}this.update({message:a,content:a});this.G.vb(this.element,this,b);this.Ra("click",this.onClick);g.WK(this,!0)},y6=function(a){q6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new h5a(a,1);g.M(this,this.watchButton);this.watchButton.Ca(this.element);a.vb(this.element,this,156914);this.hide()},l5a=function(a){g.eO.call(this,a);
var b=this;this.endScreen=null;this.j=this.B=this.u=!1;this.listeners=new g.XD(this);g.M(this,this.listeners);var c=a.V(),d;(null==(d=g.rN(a))?0:d.Do())?c.K("embeds_enable_shorts_branded_ui")?(this.u=!0,this.endScreen=new v6(this.player)):this.endScreen=new y6(a):i5a(a)?(this.u=!0,j5a(this),this.j?this.endScreen=new s6(a):this.endScreen=new v6(this.player)):c.Ue?this.endScreen=new f5a(this.player):this.endScreen=new q6(this.player);g.M(this,this.endScreen);g.BN(this.player,this.endScreen.element,
4);k5a(this);this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.sA("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.tA("endscreen"),function(e){b.onCueRangeExit(e)})},j5a=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Nk&&a.B===b.Ce)return!1;a.j=b.Nk;a.B=b.Ce;return!0},i5a=function(a){a=a.V();
return!a.B&&a.Lc&&!a.Ue},k5a=function(a){a.player.Gf("endscreen");
var b=a.player.getVideoData();b=new g.qA(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.qA(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.qe([b,c])};
g.TO.prototype.yA=g.ba(30,function(a){this.XJ!==a&&(this.XJ=a,this.En())});
g.uN.prototype.Op=g.ba(4,function(){return this.app.Op()});
g.TX.prototype.Op=g.ba(3,function(){return this.getVideoData().TL});g.v(n6,g.W);n6.prototype.select=function(){(this.G.Nl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Ey||void 0)||this.G.K("web_player_endscreen_double_log_fix_killswitch"))&&this.G.ub(this.element)};
n6.prototype.onClick=function(a){g.EO(a,this.G,this.j,this.suggestion.sessionData||void 0)&&this.select()};
n6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Fx(a)||(this.select(),g.Ex(a))}};g.v(o6,g.W);g.k=o6.prototype;g.k.gB=function(a){this.suggestion!==a&&(this.suggestion=a,m6(this.j,a),this.playButton.Oa("url",this.suggestion.Om()),p6(this))};
g.k.tj=function(){return 0<this.B};
g.k.ax=function(){this.tj()||(this.B=Date.now(),$4a(this),Z4a(this.G,b5a(this)),g.jo(this.G.getRootNode(),"countdown-running",this.tj()))};
g.k.ut=function(){this.Zo();$4a(this);var a=this.j.Da("ytp-autonav-endscreen-upnext-header");a&&g.rh(a,"Pr\u00f3ximo")};
g.k.Zo=function(){this.tj()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.Zo()};
g.k.iM=function(a){g.EO(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.ub(this.playButton.element):a.currentTarget===this.j.Da("ytp-autonav-endscreen-link-container")&&(a=this.j.Da("ytp-autonav-endscreen-link-container"),this.G.Xa(a,!0),this.G.ub(a)),this.select())};
g.k.MU=function(){this.G.ub(this.cancelButton.element);g.wN(this.G,!0);this.D&&this.G.Pa("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.hU)?void 0:c.command};
g.k.Y0=function(a){if(c5a(this)){var b=this.G.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.gM(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.gM(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.gM(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.gM(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.gM(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.gM(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.jo(this.element,"ytp-w2w-animate",!0)}};
g.k.LU=function(a){this.G.K("web_autonav_color_transition")&&2!==a&&g.jo(this.element,"ytp-w2w-animate",!1)};
g.k.hM=function(){var a=this.G.bf();this.I&&this.rb!==a&&g.WK(this,a);p6(this);this.G.Xa(this.container.element,a);this.G.Xa(this.cancelButton.element,a);this.G.Xa(this.j.Da("ytp-autonav-endscreen-link-container"),a);this.G.Xa(this.playButton.element,a)};
g.k.Hg=function(a){return 400>a.width||459>a.height};g.v(q6,g.W);g.k=q6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Zx=function(){return!1};
g.k.bf=function(){return!1};
g.k.aQ=function(){return!1};g.v(r6,g.W);g.k=r6.prototype;g.k.YB=function(){this.notification&&(this.C.stop(),this.yc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.gB=function(a){this.suggestion=a;m6(this,a,"hqdefault.jpg")};
g.k.jM=function(){g.WK(this,this.api.bf());this.api.Xa(this.element,this.api.bf());this.api.Xa(this.Da("ytp-upnext-autoplay-icon"),this.api.bf());this.cancelButton&&this.api.Xa(this.cancelButton.element,this.api.bf())};
g.k.e2=function(){window.focus();this.YB()};
g.k.ax=function(a){var b=this;this.tj()||(g.Ux("a11y-announce","Pr\u00f3ximo "+this.suggestion.title),this.u=(0,g.T)(),this.j=new g.Xn(function(){e5a(b,a)},25),e5a(this,a),Z4a(this.api,d5a(this,a)));
g.ho(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.tj=function(){return!!this.j};
g.k.ut=function(){this.Zo();this.u=(0,g.T)();e5a(this);g.fo(this.element,"ytp-upnext-autoplay-paused")};
g.k.Zo=function(){this.tj()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().K("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.YB(),this.notification=new Notification("Pr\u00f3ximo",{body:this.suggestion.title,icon:this.suggestion.Mf()}),this.B=this.T(this.notification,"click",this.e2),this.C.start())}this.Zo();this.api.nextVideo(!1,a)};
g.k.OU=function(a){!g.qh(this.cancelButton.element,g.Ax(a))&&g.EO(a,this.api)&&(this.api.bf()&&this.api.ub(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.k.NU=function(){this.api.bf()&&this.cancelButton&&this.api.ub(this.cancelButton.element);g.wN(this.api,!0)};
g.k.T1=function(a){this.api.getPresentingPlayerType();this.show();this.ax(a)};
g.k.U1=function(){this.api.getPresentingPlayerType();this.Zo();this.hide()};
g.k.ra=function(){this.Zo();this.YB();g.W.prototype.ra.call(this)};g.v(s6,q6);g.k=s6.prototype;g.k.create=function(){q6.prototype.create.call(this);this.C.T(this.player,"appresize",this.Ex);this.C.T(this.player,"onVideoAreaChange",this.Ex);this.C.T(this.player,"videodatachange",this.onVideoDataChange);this.C.T(this.player,"autonavchange",this.kM);this.C.T(this.player,"autonavcancel",this.PU);this.onVideoDataChange()};
g.k.show=function(){q6.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.wN(this.player,!1);g.CN(this.player)&&this.Zx()&&!this.B?(t6(this),2===this.videoData.autonavState?this.player.V().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.ax():3===this.videoData.autonavState&&this.j.ut()):(g.wN(this.player,!0),t6(this));this.Ex()};
g.k.hide=function(){q6.prototype.hide.call(this);this.j.ut();t6(this)};
g.k.Ex=function(){var a=this.player.fk(!0,this.player.isFullscreen());t6(this);p6(this.u);g.jo(this.element,"ytp-autonav-cancelled-small-mode",this.Hg(a));g.jo(this.element,"ytp-autonav-cancelled-tiny-mode",this.hD(a));g.jo(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.zl(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.jo(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.yI(this.videoData);b&&(this.j.gB(b),this.j!==this.u&&this.u.gB(b));for(b=0;b<m5a.length;++b){var c=m5a[b];if(a&&a[c]){this.videos[b]=new n6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,m6(d,c));g.M(this,this.videos[b]);this.videos[b].Ca(this.J.element)}}}this.Ex()}};
g.k.kM=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.Zo(),this.rb&&this.Ex()):(this.I=!0,this.bf()&&(2===a?this.j.ax():3===a&&this.j.ut()))};
g.k.PU=function(a){a?this.kM(1):(this.B=null,this.I=!1)};
g.k.Zx=function(){return 1!==this.videoData.autonavState};
g.k.Hg=function(a){return(910>a.width||459>a.height)&&!this.hD(a)&&!(400>=a.width||360>=a.height)};
g.k.hD=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.bf=function(){return this.rb&&g.CN(this.player)&&this.Zx()&&!this.B};
var m5a=[1,3,2,4];g.v(f5a,q6);f5a.prototype.Ja=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Kk;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.v(u6,g.W);u6.prototype.select=function(){(this.api.Nl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Ey||void 0)||this.api.K("web_player_endscreen_double_log_fix_killswitch"))&&this.api.ub(this.element)};
u6.prototype.onClick=function(a){g.EO(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
u6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Fx(a)||(this.select(),g.Ex(a))}};
u6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.C?!1:b.u};g.v(v6,q6);g.k=v6.prototype;g.k.create=function(){q6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Kn();this.u.T(this.player,"appresize",this.Kn);this.u.T(this.player,"onVideoAreaChange",this.Kn);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.u.T(this.player,"autonavchange",this.vF);this.u.T(this.player,"autonavcancel",this.QU);a=this.videoData.autonavState;a!==this.S&&this.vF(a);this.u.T(this.element,"transitionend",this.C3)};
g.k.destroy=function(){g.$y(this.u);g.Ze(this.stills);this.stills=[];q6.prototype.destroy.call(this);g.ho(this.element,"ytp-show-tiles");this.I.stop();this.S=this.videoData.autonavState};
g.k.Zx=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.rb;q6.prototype.show.call(this);g5a(this);g.ho(this.element,"ytp-show-tiles");this.player.V().isMobile?g.Zn(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.wN(this.player,!1);w6(this)?(x6(this),2===this.videoData.autonavState?this.player.V().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.ax():3===this.videoData.autonavState&&this.j.ut()):(g.wN(this.player,!0),x6(this));a!==this.rb&&
this.player.Xa(this.element,!0)};
g.k.hide=function(){var a=this.rb;q6.prototype.hide.call(this);this.j.ut();x6(this);a!==this.rb&&this.player.Xa(this.element,!1)};
g.k.C3=function(a){g.Ax(a)===this.element&&this.Kn()};
g.k.Kn=function(){var a=g5a(this);if(a.length){g.fo(this.element,"ytp-endscreen-paginate");var b=this.G.fk(!0,this.G.isFullscreen()),c=g.rN(this.G);c&&(c=c.Wf()?48:32,b.width-=2*c);var d=b.width/b.height,e=96/54,f=c=2,h=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=a.length,n=Math.pow(2,2);var p=m*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-n;for(p-=n;0<p&&(c<h||f<l);){var q=c/2,u=f/2,w=c<=h-2&&p>=u*n,y=f<=l-2&&p>=q*n;if((q+1)/u*e/d>d/(q/(u+1)*e)&&y)p-=q*n,f+=2;else if(w)p-=u*n,c+=2;else if(y)p-=q*
n,f+=2;else break}e=!1;p>=3*n&&6>=m*n-p&&(4<=f||4<=c)&&(e=!0);n=96*c;p=54*f;d=n/p<d?b.height/p:b.width/n;d=Math.min(d,2);n=Math.floor(Math.min(b.width,n*d));p=Math.floor(Math.min(b.height,p*d));b=this.table.element;g.Jl(b,n,p);g.zl(b,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.gB(g.yI(this.videoData));this.j instanceof o6&&p6(this.j);g.jo(this.element,"ytp-endscreen-takeover",w6(this));x6(this);n+=4;p+=4;for(h=d=0;h<c;h++)for(l=0;l<f;l++)if(q=d,w=0,e&&h>=c-2&&l>=f-2?w=1:0===l%2&&0===h%2&&(2>
l&&2>h?0===l&&0===h&&(w=2):w=2),q=g.Fg(q+this.B,m),0!==w){u=this.stills[d];u||(u=new u6(this.player),this.stills[d]=u,b.appendChild(u.element));y=Math.floor(p*l/f);var A=Math.floor(n*h/c),B=Math.floor(p*(l+w)/f)-y-4,D=Math.floor(n*(h+w)/c)-A-4;g.Fl(u.element,A,y);g.Jl(u.element,D,B);g.zl(u.element,"transitionDelay",(l+h)/20+"s");g.jo(u.element,"ytp-videowall-still-mini",1===w);g.jo(u.element,"ytp-videowall-still-large",2<w);this.Z&&(w=Math.max(D,B),g.jo(u.element,"ytp-videowall-still-round-large",
256<=w),g.jo(u.element,"ytp-videowall-still-round-medium",96<w&&256>w),g.jo(u.element,"ytp-videowall-still-round-small",96>=w));q=a[q];u.suggestion!==q&&(u.suggestion=q,w=u.api.V(),y=g.eo(u.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",m6(u,q,y),g.KF(w)&&(y=q.Om(),A={},w.Aa&&g.bN(A,w.loaderUrl),y=g.wi(y,g.aN(A,"emb_rel_end")),u.Oa("url",y)),(q=(q=q.sessionData)&&q.itct)&&u.api.ji(u.element,q));d++}g.jo(this.element,"ytp-endscreen-paginate",d<m);for(a=this.stills.length-1;a>=
d;a--)c=this.stills[a],g.oh(c.element),g.Ye(c);this.stills.length=d}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Kn())};
g.k.RU=function(){this.B+=this.stills.length;this.Kn()};
g.k.SU=function(){this.B-=this.stills.length;this.Kn()};
g.k.aQ=function(){return this.j.tj()};
g.k.vF=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Zo(),this.rb&&this.Kn()):(this.D=!0,this.rb&&w6(this)&&(2===a?this.j.ax():3===a&&this.j.ut()))};
g.k.QU=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Xa(this.stills[a].element,!0);this.vF(1)}else this.C=null,this.D=!1;this.Kn()};
g.k.bf=function(){return this.rb&&w6(this)};g.v(h5a,g.W);g.k=h5a.prototype;g.k.onClick=function(a){g.FO(this.getVideoUrl(),this.G,a);this.G.ub(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.G.getVideoUrl(a,!1,!1,!0);var b=this.G.V();if(g.KF(b)||g.VF(b)){var c={};b.Aa&&g.KF(b)&&g.bN(c,b.loaderUrl);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.aN(c,b);a=g.wi(a,c)}return a};
g.k.Xa=function(){this.G.Xa(this.element,this.rb&&this.Aa)};
g.k.show=function(){g.W.prototype.show.call(this);this.Xa()};
g.k.hide=function(){g.W.prototype.hide.call(this);this.Xa()};
g.k.Wb=function(a){g.W.prototype.Wb.call(this,a);this.Xa()};g.v(y6,q6);y6.prototype.show=function(){if(3!==this.player.getPlayerState()){q6.prototype.show.call(this);var a;null==(a=g.rN(this.player))||a.yA(!0);this.player.Xa(this.element,!0);this.watchButton.Wb(!0)}};
y6.prototype.hide=function(){q6.prototype.hide.call(this);var a;null==(a=g.rN(this.player))||a.yA(!1);this.player.Xa(this.element,!1);this.watchButton.Wb(!1)};g.v(l5a,g.eO);g.k=l5a.prototype;g.k.Ot=function(){var a;if(null==(a=g.rN(this.player))?0:a.Do())return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.yI(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!i5a(this.player)||c;c=a.Vg||g.VF(a.Sa);var d=this.player.Ly();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.bf=function(){return this.endScreen.bf()};
g.k.p_=function(){return this.bf()?this.endScreen.aQ():!1};
g.k.ra=function(){this.player.Gf("endscreen");g.eO.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.wb().le.get("heartbeat"),d=g.yI(a);!d||b.videoId!==d.videoId||a.WN?(this.player.Nl(b.videoId,void 0,void 0,!0,!0,b),c&&c.nD("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.eO.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.eO.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Ot()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){k5a(this);this.u&&j5a(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new s6(this.player):this.endScreen=new v6(this.player),g.M(this,this.endScreen),g.BN(this.player,this.endScreen.element,4))};g.dO("endscreen",l5a);})(_yt_player);
