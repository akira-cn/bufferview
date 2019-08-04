!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BufferView=t():e.BufferView=t()}(window,function(){return function(e){var t=window.webpackHotUpdateBufferView;window.webpackHotUpdateBufferView=function(e,n){!function(e,t){if(!O[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--m&&0===w&&D()}(e,n),t&&t(e,n)};var n,r=!0,o="1489279d8cd23ec93442",i=1e4,c={},s=[],d=[];function a(e){var t=x[e];if(!t)return U;var r=function(r){return t.hot.active?(x[r]?-1===x[r].parents.indexOf(e)&&x[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),U(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return U[e]},set:function(t){U[e]=t}}};for(var i in U)Object.prototype.hasOwnProperty.call(U,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&p("prepare"),w++,U.e(e).then(t,function(e){throw t(),e});function t(){w--,"prepare"===u&&(v[e]||E(e),0===w&&0===m&&D())}},r.t=function(e,t){return 1&t&&(e=r(e)),U.t(e,-2&t)},r}function f(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:P,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:c[e]};return n=void 0,t}var l=[],u="idle";function p(e){u=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,y,b,m=0,w=0,v={},g={},O={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=U.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;g={},v={},O=e.c,b=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});y={};return E(0),"prepare"===u&&0===w&&0===m&&D(),t});var t}function E(e){O[e]?(g[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=U.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function D(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return P(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(j(n));e.resolve(t)}}function P(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,i,d,a;function f(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((d=x[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<d.parents.length;s++){var a=d.parents[s],f=x[a];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([a]),moduleId:i,parentId:a};-1===t.indexOf(a)&&(f.hot._acceptedDependencies[i]?(n[a]||(n[a]=[]),l(n[a],[i])):(delete n[a],t.push(a),r.push({chain:c.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},m=[],w={},v=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var _;a=j(g);var E=!1,D=!1,P=!1,M="";switch((_=y[g]?f(a):{type:"disposed",moduleId:g}).chain&&(M="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+_.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(E=new Error("Aborted because "+a+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(_),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(E)return p("abort"),Promise.reject(E);if(D)for(a in w[a]=y[a],l(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,a)&&(h[a]||(h[a]=[]),l(h[a],_.outdatedDependencies[a]));P&&(l(m,[_.moduleId]),w[a]=v)}var H,k=[];for(r=0;r<m.length;r++)a=m[r],x[a]&&x[a].hot._selfAccepted&&w[a]!==v&&k.push({module:a,errorHandler:x[a].hot._selfAccepted});p("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var I,S,A=m.slice();A.length>0;)if(a=A.pop(),d=x[a]){var B={},N=d.hot._disposeHandlers;for(i=0;i<N.length;i++)(n=N[i])(B);for(c[a]=B,d.hot.active=!1,delete x[a],delete h[a],i=0;i<d.children.length;i++){var V=x[d.children[i]];V&&((H=V.parents.indexOf(a))>=0&&V.parents.splice(H,1))}}for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(d=x[a]))for(S=h[a],i=0;i<S.length;i++)I=S[i],(H=d.children.indexOf(I))>=0&&d.children.splice(H,1);for(a in p("apply"),o=b,w)Object.prototype.hasOwnProperty.call(w,a)&&(e[a]=w[a]);var q=null;for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(d=x[a])){S=h[a];var T=[];for(r=0;r<S.length;r++)if(I=S[r],n=d.hot._acceptedDependencies[I]){if(-1!==T.indexOf(n))continue;T.push(n)}for(r=0;r<T.length;r++){n=T[r];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:a,dependencyId:S[r],error:e}),t.ignoreErrored||q||(q=e)}}}for(r=0;r<k.length;r++){var $=k[r];a=$.module,s=[a];try{U(a)}catch(e){if("function"==typeof $.errorHandler)try{$.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:n,originalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:a,error:e}),t.ignoreErrored||q||(q=e)}}return q?(p("fail"),Promise.reject(q)):(p("idle"),new Promise(function(e){e(m)}))}var x={};function U(t){if(x[t])return x[t].exports;var n=x[t]={i:t,l:!1,exports:{},hot:f(t),parents:(d=s,s=[],d),children:[]};return e[t].call(n.exports,n,n.exports,a(t)),n.l=!0,n.exports}return U.m=e,U.c=x,U.d=function(e,t,n){U.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},U.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},U.t=function(e,t){if(1&t&&(e=U(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(U.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)U.d(n,r,function(t){return e[t]}.bind(null,r));return n},U.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return U.d(t,"a",t),t},U.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},U.p="/js/",U.h=function(){return o},a(0)(U.s=0)}([function(e,t,n){"use strict";n.r(t);const r=new ArrayBuffer(9),o=new DataView(r);function i(e,t,n=0,r=32){"bigint"!=typeof t&&"number"!=typeof t&&(t=Number(t)||0);const i=Math.floor(n/8),c=n%8,s=(8-(n+r)%8)%8,d=new DataView(e);!function(e,t=0,n){if("bigint"==typeof e?o.setBigUint64(1,e):"number"==typeof e&&(n<=32?o.setInt32(5,e):o.setFloat64(1,e)),t){if(t<0||t>7)throw new Error("Offset must between 0 and 7.");const e=8-t;let n=0;for(let r=8;r>=0;r--){const i=o.getUint8(r);o.setUint8(r,i<<t|n),n=i>>>e}}}(t,s,r);const a=Math.ceil((r+s)/8),f=9-a;for(let e=0;e<a;e++){const t=o.getUint8(f+e),n=d.getUint8(i+e);let r=t;if(c&&0===e){const e=2**(8-c)-1;r=r&e|n&~e}if(s&&e===a-1){const e=2**s-1;r=r&~e|n&e}d.setUint8(i+e,r)}}function c(e,t,n,r="Uint32"){const i=Math.floor(t/8),c=t%8,s=(8-(t+n)%8)%8,d=new DataView(e),a=Math.ceil((n+s)/8),f=[];for(let e=0;e<a;e++){let t=d.getUint8(i+e);if(c&&0===e){t&=2**(8-c)-1}if(s&&e===a-1){t&=~(2**s-1)}f.push(t)}if(s){const e=2**s-1;let t=0;for(let n=0;n<f.length;n++){const r=f[n];f[n]=r>>>s|t<<8-s,t=r&e}}const l=f.length;for(let e=0;e<9;e++)if(e+l<9)o.setUint8(e,0);else{const t=f[e+l-9];o.setUint8(e,t)}const u=`get${r.slice(0,1).toUpperCase()}${r.slice(1)}`;let p;return p=/64$/.test(u)?1:/32$/.test(u)?5:/16$/.test(u)?7:8,o[u](p)}const s=Symbol("keys"),d=Symbol("struct");class a{constructor(e,t=null,n=0){let r=n;this[s]=new Set;const o=Object.entries(e).map(([e,t])=>{if(this[s].add(e),"buffer"===e||"bitWidth"===e)throw new Error(`${e} is reserved key, use another name pls.`);if(t>64)throw new Error("Size must between 1 and 64.");let n=null;t===Number?(t=64,n=Number):t===Boolean&&(t=1,n=Boolean);const o={key:e,size:t,offset:r,exType:n};return r+=t,o});t||(t=new ArrayBuffer(Math.ceil(r/8))),this[d]=e,Object.defineProperty(this,"buffer",{get:()=>t}),Object.defineProperty(this,"bitWidth",{get:()=>r-n});for(let e=0;e<o.length;e++){const{key:n,size:r,offset:s,exType:d}=o[e];64===r&&d===Number?Object.defineProperty(this,n,{get:()=>c(t,s,r,"Float64"),set(e){i(t,e,s,r)},enumerable:!0}):1===r&&d===Boolean?Object.defineProperty(this,n,{get:()=>!!c(t,s,r,"Uint32"),set(e){i(t,e,s,r)},enumerable:!0}):r>32?Object.defineProperty(this,n,{get:()=>c(t,s,r,"BigUint64"),set(e){"bigint"!=typeof e&&(e=BigInt(e)),i(t,e,s,r)},enumerable:!0}):Object.defineProperty(this,n,{get:()=>c(t,s,r,"Uint32"),set(e){i(t,e,s,r)},enumerable:!0})}}fromObject(e={}){const t=Object.keys(e),n=this[s];return t.forEach(t=>{n.has(t)&&(this[t]=e[t])}),this}toObject(){const e={};return[...this[s]].forEach(t=>{e[t]=this[t]}),e}}const f=Symbol("struct"),l=Symbol("buffers");t.default=class{constructor(e,t=1){const n=Object.values(e).reduce((e,t)=>(t===Number?t=64:t===Boolean&&(t=1),e+t),0);let r;"number"==typeof t?(r=t,t=new ArrayBuffer(Math.ceil(n*r/8))):r=Math.ceil(8*t.byteLength/n),Object.defineProperty(this,"buffer",{get:()=>t}),Object.defineProperty(this,"bitWidth",{get:()=>n}),Object.defineProperty(this,"length",{get:()=>r}),this[f]=e,this[l]=new Map}fill(e={}){return[...this].forEach(t=>t.fromObject(e)),this}forEach(e,t){[...this].forEach(function(t,n,r){e.call(this,t,n,r)},null)}get(e){if(e<this.length){if(this[l].has(e))return this[l].get(e);const t=this.bitWidth*e,n=new a(this[f],this.buffer,t);return this[l].set(e,n),n}}*[Symbol.iterator](){for(let e=0;e<this.length;e++)yield this.get(e)}}}]).default});