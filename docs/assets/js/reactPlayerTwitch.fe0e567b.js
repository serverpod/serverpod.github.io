/*! For license information please see reactPlayerTwitch.fe0e567b.js.LICENSE.txt */
"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[12042],{23565:(t,e,n)=>{n.r(e),n.d(e,{default:()=>k});var s=n(96540);const i="https://player.twitch.tv",o=/(?:www\.|go\.)?twitch\.tv\/(?:videos?\/|\?video=)(\d+)($|\?)/,a=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,r="Idle",l="Ended",u=2,d=3,c=4,h=10,p=11;function m(t,e={}){const n={src:f(t,e),frameborder:"0",width:"100%",height:"100%",allow:"accelerometer; fullscreen; autoplay; encrypted-media; picture-in-picture;",sandbox:"allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",scrolling:"no"};return e.config&&(n["data-config"]=JSON.stringify(e.config)),`\n    <style>\n      :host {\n        display: inline-block;\n        min-width: 300px;\n        min-height: 150px;\n        position: relative;\n      }\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      :host(:not([controls])) {\n        pointer-events: none;\n      }\n    </style>\n    <iframe${function(t){let e="";for(const n in t){const s=t[n];e+=""===s?` ${g(n)}`:` ${g(n)}="${g(`${s}`)}"`}return e}(n)}></iframe>\n  `}function f(t,e){var n;if(!t.src)return;const s=t.src.match(o),r=t.src.match(a),l={parent:null==(n=globalThis.location)?void 0:n.hostname,controls:""===t.controls&&null,autoplay:""===t.autoplay&&null,muted:t.muted,preload:t.preload,...e.config};if(s){const t=s[1];return`${i}/?video=v${t}&${y(l)}`}if(r){const t=r[1];return`${i}/?channel=${t}&${y(l)}`}return""}class v extends(globalThis.HTMLElement??class{}){static getTemplateHTML=m;static shadowRootOptions={mode:"open"};static observedAttributes=["autoplay","controls","loop","muted","playsinline","preload","src"];loadComplete=new w;#t;#e;#n;#s={};#i=0;#o=!1;#a=1;#r=!this.autoplay;#l=!1;#u=0;#d=null;constructor(){super(),this.#c("config")}get config(){return this.#d}set config(t){this.#d=t}async load(){if(this.#t)return;this.shadowRoot||this.attachShadow({mode:"open"});const t=!this.#e;if(this.#e&&(this.loadComplete=new w),this.#e=!0,await(this.#t=Promise.resolve()),this.#t=null,this.#u=0,this.dispatchEvent(new Event("emptied")),!this.src)return this.shadowRoot.innerHTML="",void globalThis.removeEventListener("message",this.#h);this.dispatchEvent(new Event("loadstart"));let e=this.shadowRoot.querySelector("iframe");const n=function(t){let e={};for(let n of t)e[n.name]=n.value;return e}(this.attributes);t&&e&&(this.#d=JSON.parse(e.getAttribute("data-config")||"{}")),(null==e?void 0:e.src)&&e.src===f(n,this)||(this.shadowRoot.innerHTML=m(n,this),e=this.shadowRoot.querySelector("iframe")),this.#n=e,globalThis.addEventListener("message",this.#h)}attributeChangedCallback(t,e,n){if(e!==n)switch(t){case"src":case"controls":this.load()}}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",t)}get readyState(){return this.#u}get seeking(){return this.#l}get buffered(){var t,e;return function(t,e){if(Array.isArray(t))return b(t);if(null==t||null==e||0===t&&0===e)return b([[0,0]]);return b([[t,e]])}(0,(null==(e=null==(t=this.#s.stats)?void 0:t.videoStats)?void 0:e.bufferSize)??0)}get paused(){return this.#s.playback?this.#s.playback===r:this.#r}get ended(){return!!this.#s.playback&&this.#s.playback===l}get duration(){return this.#s.duration??NaN}get autoplay(){return this.hasAttribute("autoplay")}set autoplay(t){this.autoplay!=t&&this.toggleAttribute("autoplay",Boolean(t))}get controls(){return this.hasAttribute("controls")}set controls(t){this.controls!=t&&this.toggleAttribute("controls",Boolean(t))}get currentTime(){return this.#s.currentTime?this.#s.currentTime:this.#i}set currentTime(t){this.#i=t,this.loadComplete.then((()=>{this.#p(c,t)}))}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(t){this.toggleAttribute("muted",Boolean(t))}get loop(){return this.hasAttribute("loop")}set loop(t){this.toggleAttribute("loop",Boolean(t))}get muted(){return this.#o}set muted(t){this.#o=t,this.loadComplete.then((()=>{this.#p(h,t)}))}get volume(){return this.#a}set volume(t){this.#a=t,this.loadComplete.then((()=>{this.#p(p,t)}))}get playsInline(){return this.hasAttribute("playsinline")}set playsInline(t){this.toggleAttribute("playsinline",Boolean(t))}play(){this.#r=!1,this.#p(d)}pause(){this.#r=!0,this.#p(u)}#h=async t=>{var e,n,s,i;if(!this.#n.contentWindow)return;const{data:o,source:a}=t;if(a===this.#n.contentWindow)if("twitch-embed"===o.namespace)await new Promise((t=>setTimeout(t,10))),"ready"===o.eventName?(this.dispatchEvent(new Event("loadcomplete")),this.loadComplete.resolve(),this.#u=1,this.dispatchEvent(new Event("loadedmetadata"))):"seek"===o.eventName?(this.#l=!0,this.dispatchEvent(new Event("seeking"))):"playing"===o.eventName?(this.#l&&(this.#l=!1,this.dispatchEvent(new Event("seeked"))),this.#u=3,this.dispatchEvent(new Event("playing"))):this.dispatchEvent(new Event(o.eventName));else if("twitch-embed-player-proxy"===o.namespace&&"UPDATE_STATE"===o.eventName){const t=this.#s.duration,a=this.#s.currentTime,r=this.#s.volume,l=this.#s.muted,u=null==(n=null==(e=this.#s.stats)?void 0:e.videoStats)?void 0:n.bufferSize;this.#s={...this.#s,...o.params},t!==this.#s.duration&&this.dispatchEvent(new Event("durationchange")),a!==this.#s.currentTime&&this.dispatchEvent(new Event("timeupdate")),r===this.#s.volume&&l===this.#s.muted||this.dispatchEvent(new Event("volumechange")),u!==(null==(i=null==(s=this.#s.stats)?void 0:s.videoStats)?void 0:i.bufferSize)&&this.dispatchEvent(new Event("progress"))}};#p(t,e){if(!this.#n.contentWindow)return;const n={eventName:t,params:e,namespace:"twitch-embed-player-proxy"};this.#n.contentWindow.postMessage(n,i)}#c(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}}function g(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/`/g,"&#x60;")}function y(t){return String(new URLSearchParams(function(t){let e={};for(let n in t){let s=t[n];!0===s||""===s?e[n]=!0:!1===s?e[n]=!1:null!=s&&(e[n]=s)}return e}(t)))}class w extends Promise{constructor(t=()=>{}){let e,n;super(((s,i)=>{t(s,i),e=s,n=i})),this.resolve=e,this.reject=n}}function b(t){return Object.defineProperties(t,{start:{value:e=>t[e][0]},end:{value:e=>t[e][1]}}),t}globalThis.customElements&&!globalThis.customElements.get("twitch-video")&&globalThis.customElements.define("twitch-video",v);var S=v,E=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),T={className:"class",htmlFor:"for"};function A(t){return t.toLowerCase()}function C(t){return"boolean"==typeof t?t?"":void 0:"function"==typeof t||"object"==typeof t&&null!==t?void 0:t}function L(t,e,n){var s;t[e]=n,null==n&&e in((null==(s=globalThis.HTMLElement)?void 0:s.prototype)??{})&&t.removeAttribute(e)}var k=function({react:t,tagName:e,elementClass:n,events:s,displayName:i,defaultProps:o,toAttributeName:a=A,toAttributeValue:r=C}){const l=Number.parseInt(t.version)>=19,u=t.forwardRef(((i,u)=>{var d,c;const h=t.useRef(null),p=t.useRef(new Map),m={},f={},v={},g={};for(const[t,e]of Object.entries(i)){if(E.has(t)){v[t]=e;continue}const s=a(T[t]??t);if(t in n.prototype&&!(t in((null==(d=globalThis.HTMLElement)?void 0:d.prototype)??{}))&&!(null==(c=n.observedAttributes)?void 0:c.some((t=>t===s)))){g[t]=e;continue}if(t.startsWith("on")){m[t]=e;continue}const i=r(e);if(s&&null!=i&&(f[s]=String(i),l||(v[s]=i)),s&&l){const t=C(e);v[s]=i!==t?i:e}}if("undefined"!=typeof window){for(const e in m){const n=m[e],i=e.endsWith("Capture"),o=((null==s?void 0:s[e])??e.slice(2).toLowerCase()).slice(0,i?-7:void 0);t.useLayoutEffect((()=>{const t=null==h?void 0:h.current;if(t&&"function"==typeof n)return t.addEventListener(o,n,i),()=>{t.removeEventListener(o,n,i)}}),[null==h?void 0:h.current,n])}t.useLayoutEffect((()=>{if(null===h.current)return;const t=new Map;for(const e in g)L(h.current,e,g[e]),p.current.delete(e),t.set(e,g[e]);for(const[e,n]of p.current)L(h.current,e,void 0);p.current=t}))}if("undefined"==typeof window&&(null==n?void 0:n.getTemplateHTML)&&(null==n?void 0:n.shadowRootOptions)){const{mode:e,delegatesFocus:s}=n.shadowRootOptions,o=t.createElement("template",{shadowrootmode:e,shadowrootdelegatesfocus:s,dangerouslySetInnerHTML:{__html:n.getTemplateHTML(f,i)}});v.children=[o,v.children]}return t.createElement(e,{...o,...v,ref:t.useCallback((t=>{h.current=t,"function"==typeof u?u(t):null!==u&&(u.current=t)}),[u])})}));return u.displayName=i??n.name,u}({react:s,tagName:"twitch-video",elementClass:S,toAttributeName:t=>"muted"===t?"":"defaultMuted"===t?"muted":A(t)})}}]);