(function(t){function e(e){for(var r,i,a=e[0],c=e[1],l=e[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"401c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Problema de Monty Hall")]),n("div",{staticClass:"form"},[t.started?t._e():n("div",[n("label",{attrs:{for:"portsAmount"}},[t._v("Quantas portas?")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.portsAmount,expression:"portsAmount",modifiers:{number:!0}}],attrs:{type:"text",id:"portsAmount",size:"3"},domProps:{value:t.portsAmount},on:{input:function(e){e.target.composing||(t.portsAmount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.started?t._e():n("div",[n("label",{attrs:{for:"selectedPort"}},[t._v("Qual porta é premiada?")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.selectedPort,expression:"selectedPort",modifiers:{number:!0}}],attrs:{type:"text",id:"selectedPort",size:"3"},domProps:{value:t.selectedPort},on:{input:function(e){e.target.composing||(t.selectedPort=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.started?t._e():n("button",{on:{click:function(e){t.started=!0}}},[t._v("Iniciar")]),t.started?n("button",{on:{click:function(e){t.started=!1}}},[t._v("Reiniciar")]):t._e()]),t.started?n("div",{staticClass:"doors"},t._l(t.portsAmount,(function(e){return n("div",{key:e},[n("Door",{attrs:{hasGift:e==t.selectedPort,number:e}})],1)})),0):t._e()])},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"door-area"},[n("div",{staticClass:"door-frame",class:{selected:t.selected&&!t.open}},[t.open&&t.hasGift?n("Gift"):t._e()],1),n("div",{staticClass:"door",class:{open:t.open},on:{click:function(e){t.selected=!t.selected}}},[n("div",{staticClass:"number",class:{selected:t.selected}},[t._v(" "+t._s(t.number))]),n("div",{staticClass:"knob",class:{selected:t.selected},on:{click:function(e){e.stopPropagation(),t.open=!0}}})])])},a=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gift"},[n("div",{staticClass:"gift-tie-1"}),n("div",{staticClass:"gift-tie-2"}),n("div",{staticClass:"gift-top"}),n("div",{staticClass:"gift-body"})])}],u={name:"Gift"},d=u,f=(n("7f0d"),n("2877")),p=Object(f["a"])(d,c,l,!1,null,null,null),v=p.exports,m={name:"Door",components:{Gift:v},props:{number:{},hasGift:{type:Boolean}},data:function(){return{open:!1,selected:!1}},methods:{}},b=m,_=(n("f5dc"),Object(f["a"])(b,i,a,!1,null,null,null)),h=_.exports,g={name:"App",components:{Door:h},data:function(){return{started:!1,portsAmount:3,selectedPort:null}}},y=g,P=(n("034f"),Object(f["a"])(y,o,s,!1,null,null,null)),O=P.exports;new r["a"]({render:t=>t(O)}).$mount("#app")},"7f0d":function(t,e,n){"use strict";n("e301")},"85ec":function(t,e,n){},e301:function(t,e,n){},f5dc:function(t,e,n){"use strict";n("401c")}});
//# sourceMappingURL=app.f0f7961f.js.map