// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 18
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var k=this,aa=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ba=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ca=function(a,c){return Object.prototype.hasOwnProperty.call(Object(a),c)},da=function(a){var c;if(!(c=!a)){var d;if(null==a)d=String(a);else{var b=ba.exec(Object.prototype.toString.call(Object(a)));d=b?b[1].toLowerCase():"object"}c="object"!=d||a.nodeType||a==a.window}if(c)return!1;try{if(a.constructor&&!ca(a,"constructor")&&!ca(a.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(var f in a);return void 0===
f||ca(a,f)};var ea=function(){},r=function(a){return"function"==typeof a},x=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},fa=function(a,c){if(Array.prototype.indexOf){var d=a.indexOf(c);return"number"==typeof d?d:-1}for(var b=0;b<a.length;b++)if(a[b]===c)return b;return-1},ga=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ha=function(a){return Math.round(Number(a))||0},ia=function(a){var c=[];if(x(a))for(var d=0;d<a.length;d++)c.push(String(a[d]));return c},y=function(){this.prefix=
"gtm.";this.w={}};y.prototype.set=function(a,c){this.w[this.prefix+a]=c};y.prototype.get=function(a){return this.w[this.prefix+a]};y.prototype.contains=function(a){return void 0!==this.get(a)};
var ja=function(a,c,d){try{return a["4"](a,c||ea,d||ea)}catch(b){}return!1},ka=function(a,c){function d(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var b=ga(c).split("&"),e=0;e<b.length;e++)if(b[e]){var f=b[e].indexOf("=");0>f?d(b[e],"1"):d(b[e].substring(0,f),b[e].substring(f+1))}},la=function(a){var c=a?a.length:0;return 0<c?a[c-1]:""},ma=function(a){for(var c=0;c<a.length;c++)a[c]()},na=function(){var a=this;this.p=!1;this.K=[];this.J=[];this.Aa=function(){a.p||ma(a.K);
a.p=!0};this.za=function(){a.p||ma(a.J);a.p=!0}},oa=function(){this.M=[];this.o=0};oa.prototype.addListener=function(a){this.M.push(a)};var pa=function(a,c){if(!c.p){a.o++;var d=function(){0<a.o&&a.o--;0<a.o||ma(a.M)};c.K.push(d);c.J.push(d)}},qa=(new Date).getTime();var A=window,B=document,ra=navigator,D=function(a,c){var d=A[a],b="var "+a+";";if(k.execScript)k.execScript(b,"JavaScript");else if(k.eval)if(null==aa&&(k.eval("var _et_ = 1;"),"undefined"!=typeof k._et_?(delete k._et_,aa=!0):aa=!1),aa)k.eval(b);else{var e=k.document,f=e.createElement("script");f.type="text/javascript";f.defer=!1;f.appendChild(e.createTextNode(b));e.body.appendChild(f);e.body.removeChild(f)}else throw Error("goog.globalEval not available");A[a]=void 0===d?c:d;return A[a]},G=function(a,
c,d){return("http:"==A.location.protocol?c:a)+d},sa=function(a){var c=B.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)},ta=function(a,c){c&&(a.addEventListener?a.onload=c:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,c())})},H=function(a,c,d){var b=B.createElement("script");b.type="text/javascript";b.async=!0;b.src=a;ta(b,c);d&&(b.onerror=d);sa(b)},ua=function(a,c){var d=B.createElement("iframe");d.height="0";d.width="0";d.style.display=
"none";d.style.visibility="hidden";sa(d);ta(d,c);void 0!==a&&(d.src=a);return d},J=function(a,c,d){var b=new Image(1,1);b.onload=function(){b.onload=null;c&&c()};b.onerror=function(){b.onerror=null;d&&d()};b.src=a},K=function(a,c,d,b){a.addEventListener?a.addEventListener(c,d,!!b):a.attachEvent&&a.attachEvent("on"+c,d)},L=function(a){A.setTimeout(a,0)},va=!1,wa=[],xa=function(a){if(!(a&&"readystatechange"==a.type&&"interactive"!=B.readyState&&"complete"!=B.readyState||va)){va=!0;for(var c=0;c<wa.length;c++)wa[c]()}},
ya=0,za=function(){if(!va&&140>ya){ya++;try{B.documentElement.doScroll("left"),xa()}catch(a){A.setTimeout(za,50)}}},Aa=!1,Ba=[],Ca=function(){if(!Aa){Aa=!0;for(var a=0;a<Ba.length;a++)Ba[a]()}};var Da=new y,Ea=new y,Fa=ea,M=[],Ga=!1,Ha=function(a){var c=!1;return function(){!c&&r(a)&&L(a);c=!0}},Ja=function(){for(var a=!1;!Ga&&0<M.length;){Ga=!0;var c;var d=M.shift(),b=void 0;for(b in d)if(d.hasOwnProperty(b)){var e=b,f=d[b];Da.set(e,f);for(var g=Ia,h=f,l={},p=l,m=e.split("."),q=0;q<m.length-1;q++)p=p[m[q]]={};p[m[m.length-1]]=h;g(l,Ea.w)}var n=d.event;if(n){var s=Ha(d.eventCallback),E=d.eventTimeout;E&&A.setTimeout(s,Number(E));c=Fa(n,s)}else c=!1;a=c||a;Ga=!1}return!a},N=function(a,c){if(2==
c){for(var d=Ea.w,b=a.split("."),e=0;e<b.length;e++){if(void 0===d[b[e]])return;d=d[b[e]]}return d}return Da.get(a)},Ia=function(a,c){for(var d in a)if(ca(a,d)){var b=a[d];x(b)?(x(c[d])||(c[d]=[]),Ia(b,c[d])):da(b)?(da(c[d])||(c[d]={}),Ia(b,c[d])):c[d]=b}};var Ka={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},La={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],
nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ma=function(a,c){for(var d=[],b=0;b<a.length;b++)d.push(a[b]),d.push.apply(d,c[a[b]]||[]);return d},Na=function(){var a=N("gtm.whitelist"),c=a&&Ma(ia(a),Ka),d=N("gtm.blacklist")||N("tagTypeBlacklist"),b=d&&Ma(ia(d),La),e={};return function(f){var g=f&&f["4"];if(!g)return!0;if(void 0!==e[g.b])return e[g.b];var h=!0;if(a)e:{if(0>fa(c,g.b))if(g.c&&0<g.c.length)for(var l=0;l<g.c.length;l++){if(0>
fa(c,g.c[l])){h=!1;break e}}else{h=!1;break e}h=!0}var p=!1;if(d){var m;if(!(m=0<=fa(b,g.b)))e:{for(var q=g.c||[],n=new y,s=0;s<b.length;s++)n.set(b[s],!0);for(s=0;s<q.length;s++)if(n.get(q[s])){m=!0;break e}m=!1}p=m}return e[g.b]=!h||p}};var Oa=null;var _e=function(){return Oa};_e.b="e";_e.c=["google"];var _v=function(a){var c=N(a["8"].replace(/\\\./g,"."),a[""]);return void 0!==c?c:a[""]};_v.b="v";_v.c=["google"];var Pa=function(){return String(N("gtm.referrer")||B.referrer)},_f=Pa;_f.b="f";_f.c=["google"];
var Qa=B.createElement("a"),_u=function(a){var c=A.location,d=c.hash?c.href.replace(c.hash,""):c.href,b=N("gtm.url");b&&(Qa.href=d=String(b),c=Qa);var e=(c.protocol.replace(":","")||A.location.protocol.replace(":","")).toLowerCase();switch(a["2"]){case "protocol":d=e;break;case "host":d=(c.hostname||A.location.hostname).split(":")[0].toLowerCase();break;case "port":d=String(1*(c.hostname?c.port:A.location.port)||("http"==e?80:"https"==e?443:""));break;case "path":d="/"==c.pathname.substr(0,1)?c.pathname:"/"+c.pathname;
break;case "query":d=c.search.replace("?","");break;case "fragment":d=c.hash.replace("#","")}
return d};_u.b="u";_u.c=["google"];var _cn=function(a){return 0<=String(a["0"]).indexOf(String(a["1"]))};_cn.b="cn";_cn.c=["google"];var _eq=function(a){return String(a["0"])==String(a["1"])};_eq.b="eq";_eq.c=["google"];var _re=function(a){return RegExp(a["1"],a[""]?"i":void 0).test(a["0"])};_re.b="re";_re.c=["google"];var O,Va,Wa,Xa,Ya=function(){return k.navigator?k.navigator.userAgent:null};Xa=Wa=Va=O=!1;var Za;if(Za=Ya()){var $a=k.navigator;O=0==Za.lastIndexOf("Opera",0);Va=!O&&(-1!=Za.indexOf("MSIE")||-1!=Za.indexOf("Trident"));Wa=!O&&-1!=Za.indexOf("WebKit");Xa=!O&&!Wa&&!Va&&"Gecko"==$a.product}var P=Va,cb=Xa,db=Wa,eb=function(){var a=k.document;return a?a.documentMode:void 0},fb;
e:{var gb="",hb;if(O&&k.opera)var ib=k.opera.version,gb="function"==typeof ib?ib():ib;else if(cb?hb=/rv\:([^\);]+)(\)|;)/:P?hb=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:db&&(hb=/WebKit\/(\S+)/),hb)var jb=hb.exec(Ya()),gb=jb?jb[1]:"";if(P){var kb=eb();if(kb>parseFloat(gb)){fb=String(kb);break e}}fb=gb}
var lb=fb,mb={},R=function(a){var c;if(!(c=mb[a])){for(var d=0,b=String(lb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(b.length,e.length),g=0;0==d&&g<f;g++){var h=b[g]||"",l=e[g]||"",p=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var q=p.exec(h)||["","",""],n=m.exec(l)||["","",""];if(0==q[0].length&&0==n[0].length)break;d=((0==q[1].length?0:parseInt(q[1],10))<(0==n[1].length?0:parseInt(n[1],10))?-1:(0==q[1].length?
0:parseInt(q[1],10))>(0==n[1].length?0:parseInt(n[1],10))?1:0)||((0==q[2].length)<(0==n[2].length)?-1:(0==q[2].length)>(0==n[2].length)?1:0)||(q[2]<n[2]?-1:q[2]>n[2]?1:0)}while(0==d)}c=mb[a]=0<=d}return c},nb=k.document,ob=nb&&P?eb()||("CSS1Compat"==nb.compatMode?parseInt(lb,10):5):void 0;if(cb||P){var pb;if(pb=P)pb=P&&9<=ob;pb||cb&&R("1.9.1")}P&&R("9");var ub=function(a,c){var d="";P&&!qb(a)&&(d='<script>document.domain="'+document.domain+'";\x3c/script>'+d);var b="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+d+"</head><body>"+c+"</body></html>";if(rb)a.srcdoc=b;else if(sb){var e=a.contentWindow.document;e.open("text/html","replace");e.write(b);e.close()}else tb(a,b)},rb=db&&"srcdoc"in document.createElement("iframe"),sb=cb||db,tb=function(a,c){P&&R(7)&&!R(10)&&vb(c)&&(c=wb(c));var d=function(){a.contentWindow.goog_content=
c;a.src="javascript:window.goog_content"};P&&!qb(a)?xb(a,d):d()},qb=function(a){try{return Boolean(a.contentWindow.document)}catch(c){return!1}},yb=0,xb=function(a,c){var d="goog_rendering_callback"+yb++;window[d]=c;P&&R(6)&&!R(7)?a.src="javascript:'<script>window.onload = function() { document.write(\\'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation()})()<\\\\/script>\\');document.close();};\x3c/script>'":
a.src="javascript:'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation();})()\x3c/script>'"},vb=function(a){for(var c=0;c<a.length;++c)if(127<a.charCodeAt(c))return!0;return!1},wb=function(a){for(var c=unescape(encodeURIComponent(a)),d=Math.floor(c.length/2),b=[],e=0;e<d;++e)b[e]=String.fromCharCode(256*c.charCodeAt(2*e+1)+c.charCodeAt(2*e));1==c.length%2&&(b[d]=c.charAt(c.length-1));return b.join("")};/*
 Copyright (c) 2013 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var zb,Ab=function(){};(function(){function a(a,g){a=a||"";g=g||{};for(var p in c)c.hasOwnProperty(p)&&(g.fa&&(g["fix_"+p]=!0),g.aa=g.aa||g["fix_"+p]);var m={Z:/^\x3c!--/,s:/^<\//,X:/^<\s*(script|style|noscript|iframe|textarea)[\s>]/i,n:/^</,Y:/^[^<]/},q={Z:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},s:function(){var c=a.match(b);if(c)return{tagName:c[1],length:c[0].length}},X:function(){var b=q.n();if(b){var c=a.slice(b.length);if(c.match(RegExp("</\\s*"+
b.tagName+"\\s*>","i"))){var d=c.match(RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,f:b.f,content:d[1],length:d[0].length+b.length}}}},n:function(){var b=a.match(d);if(b){var c={};b[2].replace(e,function(a,b,d,e,q){var g=d||e||q||f.test(b)&&b||null;c[b]=g});return{tagName:b[1],f:c,j:!!b[3],length:b[0].length}}},Y:function(){var b=a.indexOf("<");return{length:0<=b?b:a.length}}},n=function(){for(var b in m)if(m[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,
c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};g.aa&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.ba=function(){return this[this.length-1]};d.L=function(a){var b=this.ba();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.xa=function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.j=b.test(a.tagName)||
a.j);return a},f=n,q=function(){a="</"+d.pop().tagName+">"+a},m={n:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.L("TABLE")?(a="<TBODY>"+a,p()):g.Va&&c.test(e)&&d.xa(e)?d.L(e)?q():(a="</"+b.tagName+">"+a,p()):b.j||d.push(b)},s:function(a){d.ba()?g.ya&&!d.L(a.tagName)?q():d.pop():g.ya&&(f(),p())}},p=function(){var b=a,c=e(f());a=b;if(c&&m[c.type])m[c.type](c)};n=function(){p();return e(f())}}();return{append:function(b){a+=b},ha:n,Wa:function(a){for(var b;(b=n())&&(!a[b.type]||!1!==a[b.type](b)););
},clear:function(){var b=a;a="";return b},Xa:function(){return a},stack:[]}}var c=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Za="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Ya=2===b.childNodes.length;return a}(),d=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,b=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=c;a.$a=function(a){var b={Z:function(a){return"<--"+a.content+"--\x3e"},s:function(a){return"</"+a.tagName+">"},X:function(a){return b.n(a)+a.content+b.s(a)},n:function(a){var b="<"+a.tagName,c;for(c in a.f)var d=a.f[c],b=b+(" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"');return b+(a.j?"/>":">")},Y:function(a){return a.text}};return b[a.type](a)};a.Ua=function(a){var b=
{},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var g in c)a.wa=a.wa||!c[g]&&g;zb=a})();(function(){function a(){}function c(a,b){var c,d=a&&a.length||0;for(c=0;c<d;c++)b.call(void 0,a[c],c)}function d(a,b){for(var c in a)a.hasOwnProperty(c)&&b.call(void 0,c,a[c])}function b(a,b){d(b,function(b,c){a[b]=c});return a}function e(a,b){a=a||{};d(b,function(b,c){null==a[b]&&(a[b]=c)});return a}function f(a){try{return h.call(a)}catch(b){var d=[];c(a,function(a){d.push(a)});
return d}}var g=this;if(!g.U){var h=Array.prototype.slice,l=function(){function a(b,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=b.getAttribute(e);return null==f?f:String(f)}null!=d&&""!==d?b.setAttribute(e,d):b.removeAttribute(e)}function e(c,d){var f=c.ownerDocument;b(this,{root:c,options:d,m:f.defaultView||f.parentWindow,C:f,G:zb("",{fa:!0}),B:[c],H:"",I:f.createElement(c.nodeName),k:[],h:[]});a(this.I,"proxyof",0)}e.prototype.write=function(){[].push.apply(this.h,arguments);for(var a;!this.r&&
this.h.length;)a=this.h.shift(),"function"===typeof a?this.ma(a):this.W(a)};e.prototype.ma=function(a){var b={type:"function",value:a.name||a.toString()};this.F(b);a.call(this.m,this.C);this.T(b)};e.prototype.W=function(a){this.G.append(a);for(var b,c=[];(b=this.G.ha())&&!/^script$/i.test(b.tagName);)c.push(b);this.va(c);b&&this.na(b)};e.prototype.va=function(a){var b=this.ka(a);b.S&&(b.oa=this.H+b.S,this.H+=b.ra,this.I.innerHTML=b.oa,this.ta())};e.prototype.ka=function(a){var b=this.B.length,d=[],
e=[],f=[];c(a,function(a){d.push(a.text);if(a.f){if(!/^noscript$/i.test(a.tagName)){var c=b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.f.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.j?"/>":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{A:a,Ta:d.join(""),S:e.join(""),ra:f.join("")}};e.prototype.ta=function(){for(var b,c=[this.I];null!=(b=c.shift());){var d=1===b.nodeType;if(!d||!a(b,"proxyof")){d&&(this.B[a(b,"id")]=
b,a(b,"id",null));var e=b.parentNode&&a(b.parentNode,"proxyof");e&&this.B[e].appendChild(b)}c.unshift.apply(c,f(b.childNodes))}};e.prototype.na=function(a){var b=this.G.clear();b&&this.h.unshift(b);a.src=a.f.src||a.f.Oa;a.src&&this.k.length?this.r=a:this.F(a);var c=this;this.ua(a,function(){c.T(a)})};e.prototype.F=function(a){a.qa=this.h;this.h=[];this.k.unshift(a)};e.prototype.T=function(a){a!==this.k[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.k.shift(),
this.write.apply(this,a.qa),!this.k.length&&this.r&&(this.F(this.r),this.r=null))};e.prototype.ua=function(a,b){var c=this.la(a);a.src&&(c.src=a.src,this.sa(c,b));try{this.pa(c),a.src||b()}catch(d){this.options.error(d),b()}};e.prototype.la=function(a){var b=this.C.createElement(a.tagName);d(a.f,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};e.prototype.pa=function(a){this.W('<span id="ps-script"/>');var b=this.C.getElementById("ps-script");b.parentNode.replaceChild(a,
b)};e.prototype.sa=function(a,c){function d(){a=a.onload=a.onreadystatechange=a.onerror=null;c()}var e=this.options.error;b(a,{onload:function(){d()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&d()},onerror:function(){e({message:"remote script failed "+a.src});d()}})};return e}();Ab=function(){function c(){var a=n.shift();a&&(a.V=d.apply(null,a))}function d(e,g,m){function n(a){a=m.ja(a);s.write(a);m.ia(a)}s=new l(e,m);s.id=h++;s.name=m.name||s.id;var u=e.ownerDocument,
F={write:u.write,writeln:u.writeln};b(u,{write:function(){return n(f(arguments).join(""))},writeln:function(a){return n(f(arguments).join("")+"\n")}});var t=s.m.onerror||a;s.m.onerror=function(a,b,c){m.error({Ra:a+" - "+b+":"+c});t.apply(s.m,arguments)};s.write(g,function(){b(u,F);s.m.onerror=t;m.D();s=null;c()});return s}var h=0,n=[],s=null;return b(function(b,d,f){"function"===typeof f&&(f={D:f});f=e(f,{D:a,error:function(a){throw a;},ja:function(a){return a},ia:a});b=/^#/.test(b)?g.document.getElementById(b.substr(1)):
b.Qa?b[0]:b;var h=[b,d,f];b.U={cancel:function(){h.V?h.V.abort():h[1]=a}};n.push(h);s||c();return b.U},{Sa:n,Pa:l})}()}})();
var Bb=function(a,c,d){return function(){if(0<c.length){var b=c.shift(),e=Bb(a,c,d);if("SCRIPT"==b.nodeName&&"text/gtmscript"==b.type){var f=B.createElement("script");f.async=!1;f.type="text/javascript";f.text=b.text||b.textContent||b.innerHTML||"";b.charset&&(f.charset=b.charset);var g=b.getAttribute("data-gtmsrc");g&&(f.src=g,ta(f,e));a.insertBefore(f,null);g||e()}else if(b.innerHTML&&0<=b.innerHTML.toLowerCase().indexOf("<script")){for(var h=[];b.firstChild;)h.push(b.removeChild(b.firstChild));a.insertBefore(b,
null);Bb(b,h,e)()}else a.insertBefore(b,null),e()}else d()}},Cb=function(a){var c=B.createElement("div");c.innerHTML="A<div>"+a+"</div>";for(var c=c.lastChild,d=[];c.firstChild;)d.push(c.removeChild(c.firstChild));return d};var Db=function(a,c,d){var b=function(){var b={D:c},f=B.createElement("div");f.style.display="none";f.style.visibility="hidden";B.body.appendChild(f);try{Ab(f,a["5"],b)}catch(g){L(d)}};va?b():wa.push(b)};
var Eb=function(a,c,d){B.body?a[""]?(ub(ua(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+a["5"]),L(c)):a["10"]?Db(a,c,d):Bb(B.body,Cb(a["5"]),c)():A.setTimeout(function(){Eb(a,c,d)},200)},_html=Eb;_html.b="html";_html.c=["customScripts"];var Gb=function(a,c,d){return function(b){b=b||A.event;var e=b.target||b.srcElement||{},f=!1;if("LINK_CLICK"==a){for(var g=e,h=0;g&&"a"!=String(g.tagName).toLowerCase()&&100>h;h++)g=g.parentElement;g&&"a"!=String(g.tagName).toLowerCase()&&(g=null);e=g;f=b.ctrlKey||b.shiftKey||null==b.which&&4==b.button||null!=b.which&&2==b.which}if(b.defaultPrevented||!1===b.returnValue||b.Ma&&b.Ma()){if(!d&&e){var l={simulateDefault:!1};S(a,e,l)}}else{var p=/(iPad|iPhone|iPod)/g.test(ra.userAgent);if(e){var l={},
m=S(a,e,l);l.simulateDefault=!m&&c&&!f;if(l.simulateDefault){var q=Fb(e).toLowerCase();switch(q){case "_blank":p?(l.simulateDefault=!1,f=!0):(l.targetWindowName="gtm_autoEvent_"+(new Date).getTime(),l.targetWindow=A.open("",l.targetWindowName));break;case "":l.targetWindow=A.frames.self;break;case "_self":case "_parent":case "_top":l.targetWindow=A.frames[q.substring(1)];break;default:p?(l.simulateDefault=!1,f=!0):(A.frames[q]||(l.targetWindowName=q),l.targetWindow=A.frames[q]||A.open("",q))}!f&&
b.preventDefault&&b.preventDefault()}b.returnValue=m||!c||f;return b.returnValue}return!0}}},S=function(a,c,d){var b={"gtm.element":c,"gtm.elementClasses":c.className,"gtm.elementId":c["for"]||c.id,"gtm.elementTarget":c.formTarget||c.target||""};switch(a){case "LINK_CLICK":b.event="gtm.linkClick";b["gtm.elementUrl"]=c.href;b.eventTimeout=2E3;b.eventCallback=Hb(c,d);break;case "FORM_SUBMIT":b.event="gtm.formSubmit";b["gtm.elementUrl"]=c.action;d.jsFormSubmit?d.waitForTags&&(b.eventTimeout=2E3,b.eventCallback=
function(){B.gtmSubmitFormNow=!0;c.submit()}):(b.eventTimeout=2E3,b.eventCallback=Ib(c,d));break;case "CLICK":b.event="gtm.click";b["gtm.elementUrl"]=c.formAction||c.action||c.href||c.src||c.code||c.codebase||"";break;default:return!0}return A["dataLayer"].push(b)},Fb=function(a){var c=a.target;if(!c)switch(String(a.tagName).toLowerCase()){case "a":case "form":c="_self"}return c},Hb=function(a,c,d){return function(){c.simulateDefault&&(c.targetWindow?c.targetWindow.location.href=a.href:(d=d||
(new Date).getTime(),500>(new Date).getTime()-d&&A.setTimeout(Hb(a,c,d),25)))}},Ib=function(a,c,d){return function(){if(c.simulateDefault)if(c.targetWindow){var b;c.targetWindowName&&(b=a.target,a.target=c.targetWindowName);B.gtmSubmitFormNow=!0;a.submit();c.targetWindowName&&(a.target=b)}else d=d||(new Date).getTime(),500>(new Date).getTime()-d&&A.setTimeout(Ib(a,c,d),25)}},Jb=function(a,c,d){var b,e;switch(a){case "CLICK":if(B.gtmHasClickListenerTag)return;B.gtmHasClickListenerTag=!0;b="click";
e=function(a){S("CLICK",a.target||a.srcElement||{},{});return!0};break;case "LINK_CLICK":if(B.gtmHasLinkClickListenerTag)return;B.gtmHasLinkClickListenerTag=!0;b="click";e=Gb(a,c||!1,d||!1);break;case "FORM_SUBMIT":if(B.gtmHasFormSubmitListenerTag)return;B.gtmHasFormSubmitListenerTag=!0;b="submit";e=Gb(a,c||!1,d||!1);break;default:return}K(B,b,e,!1)};var Mb,Nb;
var Vb=function(a){return function(){}},Zb=function(a){return function(){}};var _sp=function(a,c,d){H("//www.googleadservices.com/pagead/conversion_async.js",function(){var b=A.google_trackConversion;r(b)?(b({google_conversion_id:a["6"],google_conversion_label:a[""],google_custom_params:a["3"]||{},google_remarketing_only:!0}),c()):d()},d)};_sp.b="sp";_sp.c=["google"];
var U=[],fc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},gc=function(a){return fc[a]},hc=/[\x00\x22\x26\x27\x3c\x3e]/g;var lc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,mc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b","\f":"\\f",
"\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},nc=function(a){return mc[a]};U[7]=function(a){return String(a).replace(lc,nc)};

var vc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,wc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13",
"\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89",
"\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},xc=function(a){return wc[a]};var zc=function(){this.g=[]};zc.prototype.set=function(a,c){this.g.push([a,c]);return this};zc.prototype.v=function(a,c){for(var d={},b=0;b<this.g.length;b++){var e=V(this.g[b][0],a,c),f=V(this.g[b][1],a,c);d[e]=f}return d};var W=function(a){this.index=a};W.prototype.v=function(a,c){var d=Ac[this.index];if(d&&!c(d)){var b=d["7"];if(a){if(a.get(b))return;a.set(b,!0)}d=V(d,a,c);a&&a.set(b,!1);return ja(d)}};
for(var _M=function(a){return new W(a)},Cc=function(a){this.v=function(c,d){for(var b=[],e=0;e<a.length;e++)b.push(V(Bc[a[e]],c,d));return b.join("")}},_T=function(a){return new Cc(arguments)},Dc=function(a){function c(c){for(var b=1;b<a.length;b++)if(a[b]==c)return!0;return!1}this.v=function(d,b){if(a[0]instanceof W&&c(8)&&c(16))return'google_tag_manager["GTM-TMT4"].macro('+
a[0].index+")";for(var e=String(V(a[0],d,b)),f=1;f<a.length;f++)e=U[a[f]](e);return e}},_E=function(a,c){return new Dc(arguments)},V=function(a,c,d){var b=a;if(a instanceof W||a instanceof zc||a instanceof Cc||a instanceof Dc)return a.v(c,d);if(x(a))for(var b=[],e=0;e<a.length;e++)b[e]=V(a[e],c,d);else if(a&&"object"==typeof a){var b={},f;for(f in a)a.hasOwnProperty(f)&&(b[f]=V(a[f],c,d))}return b},Ec=function(a,c){var d=c[a],b=d;if(d instanceof W||d instanceof Dc||d instanceof Cc)b=d;else if(x(d))for(var b=
[],e=0;e<d.length;e++)b[e]=Ec(d[e],c);else if("object"==typeof d){var b=new zc,f;for(f in d)d.hasOwnProperty(f)&&b.set(c[f],Ec(d[f],c))}return b},Hc=function(a,c){for(var d=c?c.split(","):[],b=0;b<d.length;b++){var e=d[b]=d[b].split(":");0==a&&(e[1]=Bc[e[1]]);if(1==a)for(var f=Fc(e[0]),e=d[b]={},g=0;g<f.length;g++){var h=Gc[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=Fc(e[g])}return d},Fc=function(a){var c=[];if(!a)return c;for(var d=0,b=0;b<a.length&&d<Ic;d+=6,b++){var e=a&&a.charCodeAt(b)||
65;if(65!=e){var f=0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&c.push(d);2&f&&c.push(d+1);4&f&&c.push(d+2);8&f&&c.push(d+3);16&f&&c.push(d+4);32&f&&c.push(d+5)}}return c},Ic=43,Jc=[_re,_u,'url',_M(0),'.*',_cn,'/uo/uop5000/uow5004result.do',_eq,_e,'_event',_M(1),'gtm.js',_html,'Statcounter','\n\x3cscript type\x3d\x22text/javascript\x22\x3evar sc_project\x3d9285564,sc_invisible\x3d1,sc_security\x3d\x22a62292a4\x22,scJsHost\x3d\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https://secure.\x22:\x22http://www.\x22;document.write(\x22\\x3cscript type\\x3d\x27text/javascript\x27 src\\x3d\x27\x22+scJsHost+\x22statcounter.com/counter/counter.js\x27\\x3e\\x3c/script\\x3e\x22);\x3c/script\x3e\n\x3cnoscript\x3e\x3cdiv class\x3d\x22statcounter\x22\x3e\x3ca title\x3d\x22web counter\x22 href\x3d\x22http://statcounter.com/free-hit-counter/\x22 target\x3d\x22_blank\x22\x3e\x3cimg class\x3d\x22statcounter\x22 src\x3d\x22http://c.statcounter.com/9285564/0/a62292a4/1/\x22 alt\x3d\x22web counter\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3c/noscript\x3e\n',true,6,'AdCenter','\x3cscript type\x3d\x22text/gtmscript\x22\x3ewindow.mstag||(mstag\x3d{loadTag:function(){},time:(new Date).getTime()});\x3c/script\x3e \x3cscript id\x3d\x22mstag_tops\x22 type\x3d\x22text/gtmscript\x22 data-gtmsrc\x3d\x22//flex.msn.com/mstag/site/418307d7-bb30-4f45-b3b1-b3aa91a80065/mstag.js\x22\x3e\x3c/script\x3e \x3cscript type\x3d\x22text/gtmscript\x22\x3emstag.loadTag(\x22analytics\x22,{dedup:\x221\x22,domainId:\x222647193\x22,type:\x221\x22,actionid:\x22182055\x22});\x3c/script\x3e \x3cnoscript\x3e \x3ciframe src\x3d\x22//flex.msn.com/mstag/tag/418307d7-bb30-4f45-b3b1-b3aa91a80065/analytics.html?dedup\x3d1\x26amp;domainId\x3d2647193\x26amp;type\x3d1\x26amp;actionid\x3d182055\x22 frameborder\x3d\x220\x22 scrolling\x3d\x22no\x22 width\x3d\x221\x22 height\x3d\x221\x22 style\x3d\x22visibility:hidden;display:none\x22\x3e \x3c/iframe\x3e \x3c/noscript\x3e',7,'Wego_Thank_You_Page','\x3cscript type\x3d\x22text/gtmscript\x22\x3evar _wego\x3d_wego||[];_wego.push([\x22conversionId\x22,\x2290acae48-2751-4f89-bb00-92411f1f2395\x22],[\x22transactionId\x22,\x22',_v,'booking_id',_E(_M(2),7),'\x22],[\x22currencyCode\x22,\x22IDR\x22],[\x22commission\x22,0],[\x22totalBookingValue\x22,0]);(function(){var b\x3ddocument.getElementsByTagName(\x22script\x22)[0],a\x3ddocument.createElement(\x22script\x22);a.type\x3d\x22text/javascript\x22;a.src\x3d\x22https://s.wego.com/conversion.js\x22;b.parentNode.insertBefore(a,b)})();\x3c/script\x3e\n',_T(21,24,25),4,_sp,'Google_Remarketing','993272314',{},5,'Vizury_Tag_Thank_You_Page','\x3cscript type\x3d\x22text/gtmscript\x22\x3efunction create(){try{var a\x3ddocument.createElement(\x22iframe\x22);a.src\x3d\x22http://serv3.vizury.com/analyze/analyze.php?account_id\\x3dVIZVRM785\\x26param\\x3dh500\\x26city\\x3d\\x26indate\\x3d\\x26outdate\\x3d\\x26hotelid\\x3d\\x26rooms\\x3d\\x26ad\\x3d\\x26ch\\x3d\\x26oid\\x3d\\x26op\\x3d\\x26curr\\x3d\\x26misc1\\x3d\\x26section\\x3d1\\x26level\\x3d1\x22;a.scrolling\x3d\x22no\x22;a.width\x3d1;a.height\x3d1;a.marginheight\x3d0;a.marginwidth\x3d0;a.frameborder\x3d0;var b\x3ddocument.getElementsByTagName(\x22script\x22)[0];b.parentNode.insertBefore(a,b)}catch(c){}}\nvar existing\x3dwindow.onload;window.onload\x3dfunction(){existing\x26\x26existing();create()};\x3c/script\x3e\n',_T(34),3,'Vizury_Tag_All_Pages','\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(){try{var a\x3ddocument.createElement(\x22script\x22);a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.src\x3d(\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https://ssl.vizury.com\x22:\x22http://serv3.vizury.com\x22)+\x22/analyze/pixel.php?account_id\\x3dVIZVRM785\x22;var b\x3ddocument.getElementsByTagName(\x22script\x22)[0];b.parentNode.insertBefore(a,b);a.onload\x3dfunction(){try{pixel.parse()}catch(a){}};a.onreadystatechange\x3dfunction(){if(\x22complete\x22\x3d\x3da.readyState||\x22loaded\x22\x3d\x3da.readyState)try{pixel.parse()}catch(b){}}}catch(c){}})();\x3c/script\x3e\n',_T(38),2,_f,'referrer','url path','path','url hostname','host'],Kc=[],Lc=0;Lc<Jc.length;Lc++)Kc[Lc]=Ec(Lc,Jc);var Bc=Kc,Gc=Hc(0,"4:0,4:1,7:2,0:3,1:4,4:5,1:6,4:7,4:8,7:9,0:10,1:11,4:12,7:13,5:14,10:15,9:16,7:17,5:18,9:19,7:20,4:22,7:23,8:23,5:26,9:27,4:28,7:29,6:30,3:31,9:32,7:33,5:35,9:36,7:37,5:39,9:40,4:41,7:42,7:43,2:44,7:45,2:46"),Ac=Hc(1,"G,AM,AAA4,AAAAAAG,CAAAAAY,CAAAAAgB"),Mc=Hc(1,"Z,oB,Ay"),X=Hc(1,"AAf,AAhD,AABED,AAAA8B,AABAAO,AABAAwB"),Nc=Hc(2,"F:h:C:,G:W::,F:I::");var Uc=function(){var a=[];return function(c,d){if(void 0===a[c]){var b=Mc[c]&&V(Mc[c],new y,d);a[c]=[b&&ja(b),b]}return a[c]}},Vc=function(a,c){for(var d=c[0],b=0;b<d.length;b++)if(!a.i(d[b],a.d)[0])return!1;for(var e=c[2],b=0;b<e.length;b++)if(a.i(e[b],a.d)[0])return!1;return!0},Wc=Fa=function(a,c){Oa=a;N("tagTypeBlacklist");for(var d={name:a,Ba:c||ea,t:Fc(),u:Fc(),i:Uc(),d:Na()},b=0;b<Nc.length;b++)if(Vc(d,Nc[b])){for(var e=d,f=Nc[b],g=f[1],h=0;h<g.length;h++)e.t[g[h]]=!0;for(var l=f[3],h=0;h<
l.length;h++)e.u[l[h]]=!0}var p=[];for(var m=0;m<Ic;m++)if(d.t[m]&&!d.u[m])if(d.d(X[m])){}else{p[m]=V(X[m],new y,d.d);}d.N=p;for(var q=new oa,n=0;n<Ic;n++)if(d.t[n]&&!d.u[n]&&!d.d(X[n])){var s=d.N[n],E=new na;E.K.push(Vb(s));E.J.push(Zb(s));pa(q,E);ja(s,E.Aa,E.za)}q.addListener(d.Ba);0<q.o||ma(q.M);Oa=null;return 0<d.N.length};var $={set:function(a,c){var d={};d[a]=c;A["dataLayer"].push(d)},event:function(a){Wc(a)},macro:function(a){var c;if(c=Ac[a]){var d=_M(a),b=Na();c=V(d,new y,b)}return c},R:{push:function(a){for(var c=arguments,d=0;d<c.length;d++)try{if(r(c[d][0]))c[d][0]();else $[c[d][0]].apply($,[].slice.call(c[d],1))}catch(b){}}},Ka:function(){var a=A["gtm"];if(a){var c=a.a;x(c)&&$.R.push.apply($.R,c);a.a=$.R;wa.push(function(){$.event("gtm.dom")});Ba.push(function(){$.event("gtm.load")})}},La:function(){var a=
A.google_tag_manager;a||(a=A.google_tag_manager={});a["GTM-TMT4"]||(a["GTM-TMT4"]=$)}};$.La();$.Ka();(function(){var a=D("dataLayer",[]),c=A.google_tag_manager;wa.push(function(){c.gtmDom||(c.gtmDom=!0,a.push({event:"gtm.dom"}))});Ba.push(function(){c.gtmLoad||(c.gtmLoad=!0,a.push({event:"gtm.load"}))});var d=a.push;a.push=function(){var b=[].slice.call(arguments,0);d.apply(a,b);for(M.push.apply(M,b);300<this.length;)this.shift();return Ja()};M.push.apply(M,a.slice(0));L(Ja)})();
if("interactive"==B.readyState||"complete"==B.readyState)xa();else{K(B,"DOMContentLoaded",xa);K(B,"readystatechange",xa);if(B.createEventObject&&B.documentElement.doScroll){var Xc=!0;try{Xc=!A.frameElement}catch(Yc){}Xc&&za()}K(A,"load",xa)}"complete"===B.readyState?Ca():K(A,"load",Ca);var _vs="res_ts:1383551654096000,srv_cl:56238790,ds:live,cv:18";
})()