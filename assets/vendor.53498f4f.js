function t(){}const n=t=>t;function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let c;function a(t,n){return c||(c=document.createElement("a")),c.href=n,t===c.href}function u(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function f(t,n,e){t.$$.on_destroy.push(u(n,e))}function l(t,n,e,r){if(t){const o=d(t,n,e,r);return t[0](o)}}function d(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function h(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function p(t,n,e,r,o,i){if(o){const s=d(n,e,r,i);t.p(s,o)}}function v(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function g(n){return n&&i(n.destroy)?n.destroy:t}const m="undefined"!=typeof window;let y=m?()=>window.performance.now():()=>Date.now(),b=m?t=>requestAnimationFrame(t):t;const $=new Set;function w(t){$.forEach((n=>{n.c(t)||($.delete(n),n.f())})),0!==$.size&&b(w)}function E(t,n){t.appendChild(n)}function k(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n.host?n:document}function x(t){const n=L("style");return function(t,n){E(t.head||t,n)}(k(t),n),n}function S(t,n,e){t.insertBefore(n,e||null)}function P(t){t.parentNode.removeChild(t)}function j(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function L(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function R(){return A(" ")}function W(){return A("")}function O(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function C(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function U(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function M(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function I(t,n){t.value=null==n?"":n}function N(t,n,e){t.classList[e?"add":"remove"](n)}const T=new Set;let z,B=0;function q(t,n){const e=(t.style.animation||"").split(", "),r=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),o=e.length-r.length;o&&(t.style.animation=r.join(", "),B-=o,B||b((()=>{B||(T.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),T.clear())})))}function D(t){z=t}function F(){if(!z)throw new Error("Function called outside component initialization");return z}function G(t){F().$$.on_mount.push(t)}const K=[],H=[],J=[],Q=[],V=Promise.resolve();let X=!1;function Y(t){J.push(t)}function Z(t){Q.push(t)}let tt=!1;const nt=new Set;function et(){if(!tt){tt=!0;do{for(let t=0;t<K.length;t+=1){const n=K[t];D(n),rt(n.$$)}for(D(null),K.length=0;H.length;)H.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];nt.has(n)||(nt.add(n),n())}J.length=0}while(K.length);for(;Q.length;)Q.pop()();X=!1,tt=!1,nt.clear()}}function rt(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Y)}}let ot;function it(t,n,e){t.dispatchEvent(function(t,n,e=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,!1,n),r}(`${n?"intro":"outro"}${e}`))}const st=new Set;let ct;function at(){ct={r:0,c:[],p:ct}}function ut(){ct.r||o(ct.c),ct=ct.p}function ft(t,n){t&&t.i&&(st.delete(t),t.i(n))}function lt(t,n,e,r){if(t&&t.o){if(st.has(t))return;st.add(t),ct.c.push((()=>{st.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}const dt={duration:0};function ht(e,r,o){let s,c,a=r(e,o),u=!1,f=0;function l(){s&&q(e,s)}function d(){const{delay:r=0,duration:o=300,easing:i=n,tick:d=t,css:h}=a||dt;h&&(s=function(t,n,e,r,o,i,s,c=0){const a=16.666/r;let u="{\n";for(let g=0;g<=1;g+=a){const t=n+(e-n)*i(g);u+=100*g+`%{${s(t,1-t)}}\n`}const f=u+`100% {${s(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${c}`,d=k(t);T.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=x(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[l]||(p[l]=!0,h.insertRule(`@keyframes ${l} ${f}`,h.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${l} ${r}ms linear ${o}ms 1 both`,B+=1,l}(e,0,1,o,r,i,h,f++)),d(0,1);const p=y()+r,v=p+o;c&&c.abort(),u=!0,Y((()=>it(e,!0,"start"))),c=function(t){let n;return 0===$.size&&b(w),{promise:new Promise((e=>{$.add(n={c:t,f:e})})),abort(){$.delete(n)}}}((t=>{if(u){if(t>=v)return d(1,0),it(e,!0,"end"),l(),u=!1;if(t>=p){const n=i((t-p)/o);d(n,1-n)}}return u}))}let h=!1;return{start(){h||(h=!0,q(e),i(a)?(a=a(),(ot||(ot=Promise.resolve(),ot.then((()=>{ot=null}))),ot).then(d)):d())},invalidate(){h=!1},end(){u&&(l(),u=!1)}}}function pt(t,n){const e=n.token={};function r(t,r,o,i){if(n.token!==e)return;n.resolved=i;let s=n.ctx;void 0!==o&&(s=s.slice(),s[o]=i);const c=t&&(n.current=t)(s);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==r&&t&&(at(),lt(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),ut())})):n.block.d(1),c.c(),ft(c,1),c.m(n.mount(),n.anchor),a=!0),n.block=c,n.blocks&&(n.blocks[r]=c),a&&et()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const e=F();if(t.then((t=>{D(e),r(n.then,1,n.value,t),D(null)}),(t=>{if(D(e),r(n.catch,2,n.error,t),D(null),!n.hasCatch)throw t})),n.current!==n.pending)return r(n.pending,0),!0}else{if(n.current!==n.then)return r(n.then,1,n.value,t),!0;n.resolved=t}var o}function vt(t,n,e){const r=n.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,e)}function gt(t,n,e){const r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function mt(t){t&&t.c()}function yt(t,n,r,s){const{fragment:c,on_mount:a,on_destroy:u,after_update:f}=t.$$;c&&c.m(n,r),s||Y((()=>{const n=a.map(e).filter(i);u?u.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(Y)}function bt(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function $t(t,n){-1===t.$$.dirty[0]&&(K.push(t),X||(X=!0,V.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function wt(n,e,i,s,c,a,u,f=[-1]){const l=z;D(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:r(),dirty:f,skip_bound:!1,root:e.target||l.$$.root};u&&u(d.root);let h=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&$t(n,t)),e})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=(p=e.target,Array.from(p.childNodes));d.fragment&&d.fragment.l(t),t.forEach(P)}else d.fragment&&d.fragment.c();e.intro&&ft(n.$$.fragment),yt(n,e.target,e.anchor,e.customElement),et()}var p;D(l)}class _t{$destroy(){bt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Et(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function kt(t,{delay:n=0,duration:e=400,easing:r=Et,amount:o=5,opacity:i=0}={}){const s=getComputedStyle(t),c=+s.opacity,a="none"===s.filter?"":s.filter,u=c*(1-i);return{delay:n,duration:e,easing:r,css:(t,n)=>`opacity: ${c-u*n}; filter: ${a} blur(${n*o}px);`}}const xt=[];function St(n,e=t){let r;const o=new Set;function i(t){if(s(n,t)&&(n=t,r)){const t=!xt.length;for(const e of o)e[1](),xt.push(e,n);if(t){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(s,c=t){const a=[s,c];return o.add(a),1===o.size&&(r=e(i)||t),s(n),()=>{o.delete(a),0===o.size&&(r(),r=null)}}}}function Pt(n,e,r){const s=!Array.isArray(n),c=s?[n]:n,a=e.length<2;return{subscribe:St(r,(n=>{let r=!1;const f=[];let l=0,d=t;const h=()=>{if(l)return;d();const r=e(s?f[0]:f,n);a?n(r):d=i(r)?r:t},p=c.map(((t,n)=>u(t,(t=>{f[n]=t,l&=~(1<<n),r&&h()}),(()=>{l|=1<<n}))));return r=!0,h(),function(){o(p),d()}})).subscribe}}try{self["workbox:window:6.2.4"]&&_()}catch(Nt){}function jt(t,n){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(t){e(t.data)},t.postMessage(n,[r.port2])}))}function Lt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}try{self["workbox:core:6.2.4"]&&_()}catch(Nt){}var At=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};function Rt(t,n){var e=location.href;return new URL(t,e).href===new URL(n,e).href}var Wt=function(t,n){this.type=t,Object.assign(this,n)};function Ot(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}function Ct(){}var Ut={type:"SKIP_WAITING"};function Mt(t,n){if(!n)return t&&t.then?t.then(Ct):Promise.resolve()}var It=function(t){var n,e;function r(n,e){var r,o;return void 0===e&&(e={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new At,r.en=new At,r.on=new At,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,n=t.installing;r.tn>0||!Rt(n.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=n,t.removeEventListener("updatefound",r.cn)):(r.hn=n,r.an.add(n),r.rn.resolve(n)),++r.tn,n.addEventListener("statechange",r.ln)},r.ln=function(t){var n=r.fn,e=t.target,o=e.state,i=e===r.vn,s={sw:e,isExternal:i,originalEvent:t};!i&&r.mn&&(s.isUpdate=!0),r.dispatchEvent(new Wt(o,s)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&n.waiting===e&&r.dispatchEvent(new Wt("waiting",s))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.dn=function(t){var n=r.hn,e=n!==navigator.serviceWorker.controller;r.dispatchEvent(new Wt("controlling",{isExternal:e,originalEvent:t,sw:n,isUpdate:r.mn})),e||r.on.resolve(n)},r.gn=(o=function(t){var n=t.data,e=t.ports,o=t.source;return Ot(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new Wt("message",{data:n,originalEvent:t,ports:e,sw:o}))}))},function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(o.apply(this,t))}catch(e){return Promise.reject(e)}}),r.sn=n,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var o,i=r.prototype;return i.register=function(t){var n,e,r=(void 0===t?{}:t).immediate,o=void 0!==r&&r;try{var i=this;return n=function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),Ot(i.bn(),(function(t){i.fn=t,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var n=i.fn.waiting;return n&&Rt(n.scriptURL,i.sn.toString())&&(i.hn=n,Promise.resolve().then((function(){i.dispatchEvent(new Wt("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn}))},(e=function(){if(!o&&"complete"!==document.readyState)return Mt(new Promise((function(t){return window.addEventListener("load",t)})))}())&&e.then?e.then(n):n()}catch(s){return Promise.reject(s)}},i.update=function(){try{return this.fn?Mt(this.fn.update()):void 0}catch(Nt){return Promise.reject(Nt)}},i.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},i.messageSW=function(t){try{return Ot(this.getSW(),(function(n){return jt(n,t)}))}catch(Nt){return Promise.reject(Nt)}},i.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&jt(this.fn.waiting,Ut)},i.pn=function(){var t=navigator.serviceWorker.controller;return t&&Rt(t.scriptURL,this.sn.toString())?t:void 0},i.bn=function(){try{var t=this;return function(n,e){try{var r=Ot(navigator.serviceWorker.register(t.sn,t.nn),(function(n){return t.un=performance.now(),n}))}catch(o){return e(o)}return r&&r.then?r.then(void 0,e):r}(0,(function(t){throw t}))}catch(n){return Promise.reject(n)}},(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(r.prototype,o),r}(function(){function t(){this.Pn=new Map}var n=t.prototype;return n.addEventListener=function(t,n){this.Sn(t).add(n)},n.removeEventListener=function(t,n){this.Sn(t).delete(n)},n.dispatchEvent=function(t){t.target=this;for(var n,e=function(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return Lt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Lt(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}(this.Sn(t.type));!(n=e()).done;)(0,n.value)(t)},n.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());export{l as A,I as B,O as C,St as D,Pt as E,N as F,g as G,i as H,o as I,f as J,mt as K,yt as L,bt as M,G as N,H as O,gt as P,Z as Q,C as R,_t as S,It as T,jt as U,S as a,L as b,R as c,P as d,W as e,A as f,a as g,pt as h,wt as i,U as j,E as k,M as l,Y as m,t as n,ht as o,kt as p,p as q,v as r,s,ft as t,vt as u,h as v,lt as w,at as x,ut as y,j as z};
