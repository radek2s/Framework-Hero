var k={8667:(l,d,o)=>{var s={"./angular-components":()=>o.e(94).then(()=>()=>o(1094))},c=(f,m)=>(o.R=m,m=o.o(s,f)?s[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),o.R=void 0,m),v=(f,m)=>{if(o.S){var g="default",y=o.S[g];if(y&&y!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return o.S[g]=f,o.I(g,m)}};o.d(d,{get:()=>c,init:()=>v})}},$={};function a(l){var d=$[l];if(void 0!==d)return d.exports;var o=$[l]={exports:{}};return k[l](o,o.exports,a),o.exports}a.m=k,a.c=$,(()=>{var d,l=Object.getPrototypeOf?o=>Object.getPrototypeOf(o):o=>o.__proto__;a.t=function(o,s){if(1&s&&(o=this(o)),8&s||"object"==typeof o&&o&&(4&s&&o.__esModule||16&s&&"function"==typeof o.then))return o;var c=Object.create(null);a.r(c);var v={};d=d||[null,l({}),l([]),l(l)];for(var f=2&s&&o;"object"==typeof f&&!~d.indexOf(f);f=l(f))Object.getOwnPropertyNames(f).forEach(m=>v[m]=()=>o[m]);return v.default=()=>o,a.d(c,v),c}})(),a.d=(l,d)=>{for(var o in d)a.o(d,o)&&!a.o(l,o)&&Object.defineProperty(l,o,{enumerable:!0,get:d[o]})},a.f={},a.e=l=>Promise.all(Object.keys(a.f).reduce((d,o)=>(a.f[o](l,d),d),[])),a.u=l=>l+".js",a.miniCssF=l=>{},a.o=(l,d)=>Object.prototype.hasOwnProperty.call(l,d),(()=>{var l={},d="angular:";a.l=(o,s,c,v)=>{if(l[o])l[o].push(s);else{var f,m;if(void 0!==c)for(var g=document.getElementsByTagName("script"),y=0;y<g.length;y++){var b=g[y];if(b.getAttribute("src")==o||b.getAttribute("data-webpack")==d+c){f=b;break}}f||(m=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",d+c),f.src=a.tu(o)),l[o]=[s];var w=(P,O)=>{f.onerror=f.onload=null,clearTimeout(j);var S=l[o];if(delete l[o],f.parentNode&&f.parentNode.removeChild(f),S&&S.forEach(p=>p(O)),P)return P(O)},j=setTimeout(w.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=w.bind(null,f.onerror),f.onload=w.bind(null,f.onload),m&&document.head.appendChild(f)}}})(),a.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},a.j=272,(()=>{a.S={};var l={},d={};a.I=(o,s)=>{s||(s=[]);var c=d[o];if(c||(c=d[o]={}),!(s.indexOf(c)>=0)){if(s.push(c),l[o])return l[o];a.o(a.S,o)||(a.S[o]={});var v=a.S[o],m="angular",g=(w,j,P,O)=>{var S=v[w]=v[w]||{},p=S[j];(!p||!p.loaded&&(!O!=!p.eager?O:m>p.from))&&(S[j]={get:P,from:m,eager:!!O})},b=[];return"default"===o&&(g("@angular/common","15.2.9",()=>a.e(895).then(()=>()=>a(6895))),g("@angular/core","15.2.9",()=>a.e(738).then(()=>()=>a(6738))),g("@angular/router","15.2.9",()=>a.e(166).then(()=>()=>a(1230)))),l[o]=b.length?Promise.all(b).then(()=>l[o]=1):1}}})(),(()=>{var l;a.tt=()=>(void 0===l&&(l={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(l=trustedTypes.createPolicy("angular#bundler",l))),l)})(),a.tu=l=>a.tt().createScriptURL(l),(()=>{var l;if("string"==typeof import.meta.url&&(l=import.meta.url),!l)throw new Error("Automatic publicPath is not supported in this browser");l=l.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=l})(),(()=>{var l=e=>{var t=i=>i.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},o=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,r+="u"==(typeof(h=e[i]))[0]?"-":(n>0?".":"")+(n=2,h);return r}var u=[];for(i=1;i<e.length;i++){var h=e[i];u.push(0===h?"not("+C()+")":1===h?"("+C()+" || "+C()+")":2===h?u.pop()+" "+u.pop():o(h))}return C();function C(){return u.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=l(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var i=0,u=1,h=!0;;u++,i++){var C,M,V=u<e.length?(typeof e[u])[0]:"";if(i>=t.length||"o"==(M=(typeof(C=t[i]))[0]))return!h||("u"==V?u>r&&!n:""==V!=n);if("u"==M){if(!h||"u"!=V)return!1}else if(h)if(V==M)if(u<=r){if(C!=e[u])return!1}else{if(n?C>e[u]:C<e[u])return!1;C!=e[u]&&(h=!1)}else if("s"!=V&&"n"!=V){if(n||u<=r)return!1;h=!1,u--}else{if(u<=r||M<V!=n)return!1;h=!1}else"s"!=V&&"n"!=V&&(h=!1,u--)}}var F=[],E=F.pop.bind(F);for(i=1;i<e.length;i++){var T=e[i];F.push(1==T?E()|E():2==T?E()&E():T?s(T,t):!E())}return!!E()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,i)=>!n||!r[n].loaded&&((e,t)=>{e=l(e),t=l(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],i=(typeof n)[0];if(r>=t.length)return"u"==i;var u=t[r],h=(typeof u)[0];if(i!=h)return"o"==i&&"n"==h||"s"==h||"u"==i;if("o"!=i&&"u"!=i&&n!=u)return n<u;r++}})(n,i)?i:n,0)},b=(e,t,r,n)=>{var i=f(e,r);if(!s(n,i))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+o(n)+")")(e,r,i,n));return S(e[r][i])},S=e=>(e.loaded=1,e.get()),A=(e=>function(t,r,n,i){var u=a.I(t);return u&&u.then?u.then(e.bind(e,t,a.S[t],r,n,i)):e(t,a.S[t],r,n,i)})((e,t,r,n,i)=>t&&a.o(t,r)?b(t,0,r,n):i()),x={},z={997:()=>A("default","@angular/core",[1,15,2,9],()=>a.e(738).then(()=>()=>a(6738))),6096:()=>A("default","@angular/common",[1,15,2,9],()=>a.e(181).then(()=>()=>a(6895))),6279:()=>A("default","@angular/router",[1,15,2,9],()=>a.e(230).then(()=>()=>a(1230)))},L={94:[997,6096,6279],166:[997,6096],895:[997]};a.f.consumes=(e,t)=>{a.o(L,e)&&L[e].forEach(r=>{if(a.o(x,r))return t.push(x[r]);var n=h=>{x[r]=0,a.m[r]=C=>{delete a.c[r],C.exports=h()}},i=h=>{delete x[r],a.m[r]=C=>{throw delete a.c[r],h}};try{var u=z[r]();u.then?t.push(x[r]=u.then(n).catch(i)):n(u)}catch(h){i(h)}})}})(),(()=>{var l={272:0};a.f.j=(s,c)=>{var v=a.o(l,s)?l[s]:void 0;if(0!==v)if(v)c.push(v[2]);else{var f=new Promise((b,w)=>v=l[s]=[b,w]);c.push(v[2]=f);var m=a.p+a.u(s),g=new Error;a.l(m,b=>{if(a.o(l,s)&&(0!==(v=l[s])&&(l[s]=void 0),v)){var w=b&&("load"===b.type?"missing":b.type),j=b&&b.target&&b.target.src;g.message="Loading chunk "+s+" failed.\n("+w+": "+j+")",g.name="ChunkLoadError",g.type=w,g.request=j,v[1](g)}},"chunk-"+s,s)}};var d=(s,c)=>{var g,y,[v,f,m]=c,b=0;if(v.some(j=>0!==l[j])){for(g in f)a.o(f,g)&&(a.m[g]=f[g]);m&&m(a)}for(s&&s(c);b<v.length;b++)a.o(l,y=v[b])&&l[y]&&l[y][0](),l[y]=0},o=self.webpackChunkangular=self.webpackChunkangular||[];o.forEach(d.bind(null,0)),o.push=d.bind(null,o.push.bind(o))})();var U=a(8667),R=U.get,B=U.init;export{R as get,B as init};