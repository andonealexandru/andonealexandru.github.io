(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,n=1;n<o.length;n++){var s=o[n];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},n={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-612328a3":"7be01c50"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={"chunk-612328a3":1};n[t]?e.push(n[t]):0!==n[t]&&o[t]&&e.push(n[t]=new Promise((function(e,o){for(var r="css/"+({}[t]||t)+"."+{"chunk-612328a3":"d479b12c"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],d.parentNode.removeChild(d),o(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,o){r=a[t]=[e,o]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var o=a[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",p.name="ChunkLoadError",p.type=r,p.request=n,o[1](p)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0a3b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABEElEQVRYR92WMQ4CMQwEuZ9RU/JQSmp+FpQiyDi2s85anAQdHJeZrO0oR2utXU78HH8pcL0/p0xfj5uZc2kCA2zBvGdlAh0gwTIF/bv8XiIg4VEKvQZalBbQcK/WsgHkO5TADlynsC2go8wcJXQCDJxOgIVTAtXwLgP3gDfXmdpvj2HmaI2ErASXCVjwAUFmfvzXK18oIE81TwSRiHrHFUDgSBKrxjUFMvBIYgU3p8CC95ijXrAkEPgkwMClBAo3BeRu0Z3r0UMac7zz6QG9+1/AvxLQJx1Sc2bnbgLZoxUZxWjNqQQ7Apma6/VpAQbujiGaAgunBCrg4UkYpVAFDy8kVXeAVTmX94HVAuzz0wXensc2sOIrAfUAAAAASUVORK5CYII="},"19c4":function(t,e,o){"use strict";var r=o("75dd"),n=o.n(r);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Navbar"),o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-toolbar",{staticClass:"bg-dark text-white"},[r("q-avatar",{attrs:{rounded:""}},[r("img",{attrs:{src:o("0a3b")}})]),r("q-toolbar-title",[t._v("Farmacia online Moisil")]),r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"shopping_cart"},on:{click:function(e){t.viewShop=!0}}}),r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"emoji_objects"},on:{click:t.triggerDark}}),r("q-dialog",{model:{value:t.viewShop,callback:function(e){t.viewShop=e},expression:"viewShop"}},[r("Shop")],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"shadow-2 rounded-borders",staticStyle:{height:"800px","max-width":"1000px"},attrs:{view:"Lhh lpR fff",container:""}},[o("q-header",{staticClass:"bg-dark",attrs:{elevated:""}},[o("q-toolbar",[o("q-toolbar-title",[t._v(" Lista de cumparaturi ")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),o("q-page-container",{class:{"bg-dark":t.$q.dark.isActive,"bg-white":!t.$q.dark.isActive}},[o("q-page",{attrs:{padding:""}},[o("div",{staticClass:"row justify-center q-gutter-md"},t._l(t.$store.state.shop,(function(e,r){return o("ShopCard",{key:r,attrs:{title:t.$store.state.products[e].title,image:t.$store.state.products[e].image,index:e}})})),1)])],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[o("q-card-section",{attrs:{horizontal:""}},[o("q-img",{staticClass:"col",attrs:{src:t.image}},[o("div",{staticClass:"absolute-bottom text-h6"},[t._v(" "+t._s(t.title)+" ")])]),o("q-card-actions",{staticClass:"justify-around q-px-md",attrs:{vertical:""}},[o("q-btn",{attrs:{flat:"",round:"",icon:"remove_shopping_cart"},on:{click:t.removeProduct}}),o("q-btn",{attrs:{flat:"",round:"",icon:"more_horiz"}})],1)],1)],1)},p=[],d={name:"ShopCard",props:{image:null,title:"",index:null},methods:{removeProduct:function(){this.$store.commit("removeItemFromShop",this.index)}}},f=d,m=(o("19c4"),o("2877")),h=o("fe09"),g=Object(m["a"])(f,u,p,!1,null,"9b367612",null),b=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QCard:h["d"],QCardSection:h["f"],QImg:h["i"],QCardActions:h["e"],QBtn:h["c"]});var v={name:"Shop",components:{ShopCard:b}},y=v,A=Object(m["a"])(y,c,l,!1,null,"cfb319d0",null),w=A.exports;A.options.components=Object.assign(Object.create(A.options.components||null),A.options.components||{},{QLayout:h["j"],QHeader:h["h"],QToolbar:h["m"],QToolbarTitle:h["n"],QBtn:h["c"],QPageContainer:h["l"],QPage:h["k"]}),A.options.directives=Object.assign(Object.create(A.options.directives||null),A.options.directives||{},{ClosePopup:h["a"]});var C={name:"Navbar",components:{Shop:w},data:function(){return{viewShop:!1}},methods:{triggerDark:function(){this.$q.dark.toggle()}}},k=C,j=Object(m["a"])(k,i,s,!1,null,"79a33824",null),D=j.exports;j.options.components=Object.assign(Object.create(j.options.components||null),j.options.components||{},{QToolbar:h["m"],QAvatar:h["b"],QToolbarTitle:h["n"],QBtn:h["c"],QDialog:h["g"]});var S={name:"LayoutDefault",components:{Navbar:D}},x=S,Q=Object(m["a"])(x,n,a,!1,null,null,null),O=Q.exports;Q.options.components=Object.assign(Object.create(Q.options.components||null),Q.options.components||{},{QLayout:h["j"]});o("d3b7");var V=o("8c4f");r["a"].use(V["a"]);var E=[{path:"/",name:"Home",component:function(){return o.e("chunk-612328a3").then(o.bind(null,"bb51"))}}],q=new V["a"]({routes:E}),I=q,B=(o("c975"),o("a434"),o("2f62"));r["a"].use(B["a"]);var T=new B["a"].Store({state:{shop:[],products:[{title:"Hairinator1",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")},{title:"Hairinator2",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")},{title:"Hairinator3",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")},{title:"Hairinator4",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")},{title:"Hairinator5",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")},{title:"Hairinator6",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")},{title:"Hairinator7",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")},{title:"Hairinator8",shortDescription:"Very good product for hair loss",longDescription:"Very good product for hair loss. It's made by Doofensmidths and will make your hair grow instantly.",image:o("f31a")}]},mutations:{addItemInShop:function(t,e){var o=t.shop.indexOf(e);-1===o&&t.shop.push(e)},removeItemFromShop:function(t,e){var o=t.shop.indexOf(e);o>-1&&t.shop.splice(o,1)}},actions:{},modules:{}}),_=(o("c867"),o("e54f"),o("573e"),o("b05d"));r["a"].use(_["a"],{config:{},components:{},directives:{},plugins:{}}),r["a"].config.productionTip=!1,new r["a"]({router:I,store:T,render:function(t){return t(O)}}).$mount("#app")},"75dd":function(t,e,o){},c867:function(t,e,o){},f31a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABI0lEQVRYR8WWMRLCMAwEycughgoeChXU8DIYMWPmkCX7bAlCaZLs6uQoXjYr/5aV+ZufCGyP16cu7HE5mKxUgQK+n/dVsLvT7b2mRdIEBI7gAhSoXkeJFAGEF7CVgsjI/6kCGu6BsScoEUpgBq5TmBbQPR95ncMJRODhBKLwkEA2XGToPYDTjdnp3p6Yeg2t0TojoeFUAha8VDciYcG7AjjbcbRivIyEB28KMHAmiRbcFRiBtyR6cFPAgkvMXgu8djDwSiACxyRYuCmA1bKVs6cfazZ8BpGu/h/wrwT0pGN6Hqm83FslMPJZxWu9Q2fveSkCs3C3BT3rjMqrFshCa+5bUpHKwwIZ8OYkbLUhC059jDL73RxEIxsv81r6SJYJxWe9ACTF0yHdDrr2AAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.aba67ae9.js.map