(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[39503],{19365:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{"use strict";r.d(t,{A:()=>O});var a=r(96540),n=r(34164),o=r(23104),i=r(56347),l=r(205),s=r(57485),u=r(31682),c=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function y(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),m=(()=>{const e=u??f;return y({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var P=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),n=l[r].value;n!==a&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,P.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,P.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,P.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=f(e);return(0,P.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,P.jsx)(g,{...t,...e}),(0,P.jsx)(v,{...t,...e})]})}function O(e){const t=(0,b.A)();return(0,P.jsx)(w,{...e,children:d(e.children)},String(t))}},14744:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function n(e,t,r){return e.concat(t).map((function(e){return a(e,r)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function l(e,t,r){var n={};return r.isMergeableObject(e)&&o(e).forEach((function(t){n[t]=a(e[t],r)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&r.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,r)(e[o],t[o],r):n[o]=a(t[o],r))})),n}function s(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||n,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=a;var i=Array.isArray(r);return i===Array.isArray(e)?i?o.arrayMerge(e,r,o):l(e,r,o):a(r,o)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var u=s;e.exports=u},6147:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,a,n){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof a&&(n=a,a={}),a=a||{},n=n||function(){},i.type=a.type||"text/javascript",i.charset=a.charset||"utf8",i.async=!("async"in a)||!!a.async,i.src=e,a.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,a.attrs),a.text&&(i.text=""+a.text),("onload"in i?t:r)(i,n),i.onload||t(i,n),o.appendChild(i)}},41811:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function n(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||a(n)&&a(o)))return!1;var n,o;return!0}const o=function(e,t){var r;void 0===t&&(t=n);var a,o=[],i=!1;return function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return i&&r===this&&t(n,o)||(a=e.apply(this,n),i=!0,r=this,o=n),a}}},88021:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>P}),e.exports=(a=y,c(o({},"__esModule",{value:!0}),a));var h=d(r(96540)),f=d(r(30115)),b=r(7604),m=r(75635);class P extends h.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),p(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),p(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const a={playedSeconds:e,played:e/r};null!==t&&(a.loadedSeconds=t,a.loaded=t/r),a.playedSeconds===this.prevPlayed&&a.loadedSeconds===this.prevLoaded||this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),p(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:a}=this.props;e(),a||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),p(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),p(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),p(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),p(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),p(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),p(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:a,muted:n,playbackRate:o,pip:i,loop:l,activePlayer:s,disableDeferredLoading:u}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!s.forceLoad&&!u&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==n&&(n?this.player.mute():(this.player.unmute(),null!==a&&setTimeout((()=>this.player.setVolume(a))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?h.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(P,"displayName","Player"),p(P,"propTypes",b.propTypes),p(P,"defaultProps",b.defaultProps)},15580:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{createReactPlayer:()=>I}),e.exports=(a=y,c(o({},"__esModule",{value:!0}),a));var h=d(r(96540)),f=d(r(14744)),b=d(r(41811)),m=d(r(30115)),P=r(7604),g=r(75635),v=d(r(88021));const w=(0,g.lazy)((()=>r.e(36353).then(r.t.bind(r,66734,23)))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,k=void 0!==r.g&&r.g.window&&r.g.window.document,_=Object.keys(P.propTypes),T=O||k?h.Suspense:()=>null,j=[],I=(e,t)=>{var r;return r=class extends h.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),p(this,"showPreview",(()=>{this.setState({showPreview:!0})})),p(this,"getDuration",(()=>this.player?this.player.getDuration():null)),p(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),p(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),p(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),p(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),p(this,"handleReady",(()=>{this.props.onReady(this)})),p(this,"getActivePlayer",(0,b.default)((r=>{for(const t of[...j,...e])if(t.canPlay(r))return t;return t||null}))),p(this,"getConfig",(0,b.default)(((e,t)=>{const{config:r}=this.props;return f.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])}))),p(this,"getAttributes",(0,b.default)((e=>(0,g.omit)(this.props,_)))),p(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return h.default.createElement(v.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,m.default)(this.props,e)||!(0,m.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:a,oEmbedUrl:n,previewAriaLabel:o}=this.props;return h.default.createElement(w,{url:e,light:t,playIcon:r,previewTabIndex:a,previewAriaLabel:o,oEmbedUrl:n,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:a,fallback:n,wrapper:o}=this.props,{showPreview:i}=this.state,l=this.getAttributes(e),s="string"==typeof o?this.references.wrapper:void 0;return h.default.createElement(o,{ref:s,style:{...t,width:r,height:a},...l},h.default.createElement(T,{fallback:n},i?this.renderPreview(e):this.renderActivePlayer(e)))}},p(r,"displayName","ReactPlayer"),p(r,"propTypes",P.propTypes),p(r,"defaultProps",P.defaultProps),p(r,"addCustomPlayer",(e=>{j.push(e)})),p(r,"removeCustomPlayers",(()=>{j.length=0})),p(r,"canPlay",(t=>{for(const r of[...j,...e])if(r.canPlay(t))return!0;return!1})),p(r,"canEnablePIP",(t=>{for(const r of[...j,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},13554:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=(a=d,c(o({},"__esModule",{value:!0}),a));var p=((e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(97015)),y=r(15580);const h=p.default[p.default.length-1];var f=(0,y.createReactPlayer)(p.default,h)},50327:(e,t,r)=>{var a,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(s,{AUDIO_EXTENSIONS:()=>_,DASH_EXTENSIONS:()=>I,FLV_EXTENSIONS:()=>E,HLS_EXTENSIONS:()=>j,MATCH_URL_DAILYMOTION:()=>v,MATCH_URL_FACEBOOK:()=>h,MATCH_URL_FACEBOOK_WATCH:()=>f,MATCH_URL_KALTURA:()=>k,MATCH_URL_MIXCLOUD:()=>w,MATCH_URL_MUX:()=>y,MATCH_URL_SOUNDCLOUD:()=>d,MATCH_URL_STREAMABLE:()=>b,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>p,MATCH_URL_WISTIA:()=>m,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>T,canPlay:()=>A}),e.exports=(a=s,((e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))l.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e})(n({},"__esModule",{value:!0}),a));var u=r(75635);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,d=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,p=/vimeo\.com\/(?!progressive_redirect).+/,y=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,h=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,f=/^https?:\/\/fb\.watch\/.+$/,b=/streamable\.com\/([a-z0-9]+)$/,m=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,w=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,k=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,_=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,T=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,j=/\.(m3u8)($|\?)/i,I=/\.(mpd)($|\?)/i,E=/\.(flv)($|\?)/i,S=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&S(t))return!0;if(S(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(_.test(e)||T.test(e)||j.test(e)||I.test(e)||E.test(e))},A={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>d.test(e)&&!_.test(e),vimeo:e=>p.test(e)&&!T.test(e)&&!j.test(e),mux:e=>y.test(e),facebook:e=>h.test(e)||f.test(e),streamable:e=>b.test(e),wistia:e=>m.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>v.test(e),mixcloud:e=>w.test(e),vidyard:e=>O.test(e),kaltura:e=>k.test(e),file:S}},97015:(e,t,r)=>{Object.create;var a,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),s=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))l.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e},u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>p}),e.exports=(a=u,s(n({},"__esModule",{value:!0}),a));var c=r(75635),d=r(50327),p=[{key:"youtube",name:"YouTube",canPlay:d.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(18446).then(r.t.bind(r,82910,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:d.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(69979).then(r.t.bind(r,93127,23))))},{key:"vimeo",name:"Vimeo",canPlay:d.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(26173).then(r.t.bind(r,91423,23))))},{key:"mux",name:"Mux",canPlay:d.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(52723).then(r.t.bind(r,47553,23))))},{key:"facebook",name:"Facebook",canPlay:d.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(86887).then(r.t.bind(r,61343,23))))},{key:"streamable",name:"Streamable",canPlay:d.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(47627).then(r.t.bind(r,9643,23))))},{key:"wistia",name:"Wistia",canPlay:d.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(99340).then(r.t.bind(r,23330,23))))},{key:"twitch",name:"Twitch",canPlay:d.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(12042).then(r.t.bind(r,21400,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:d.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(16328).then(r.t.bind(r,39348,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:d.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(67570).then(r.t.bind(r,3276,23))))},{key:"vidyard",name:"Vidyard",canPlay:d.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(3392).then(r.t.bind(r,53552,23))))},{key:"kaltura",name:"Kaltura",canPlay:d.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(6463).then(r.t.bind(r,97945,23))))},{key:"file",name:"FilePlayer",canPlay:d.canPlay.file,canEnablePIP:e=>d.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!d.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(97458).then(r.t.bind(r,20688,23))))}]},7604:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{defaultProps:()=>_,propTypes:()=>O}),e.exports=(a=d,c(o({},"__esModule",{value:!0}),a));var p=((e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(5556));const{string:y,bool:h,number:f,array:b,oneOfType:m,shape:P,object:g,func:v,node:w}=p.default,O={url:m([y,b,g]),playing:h,loop:h,controls:h,volume:f,muted:h,playbackRate:f,width:m([y,f]),height:m([y,f]),style:g,progressInterval:f,playsinline:h,pip:h,stopOnUnmount:h,light:m([h,y,g]),playIcon:w,previewTabIndex:f,previewAriaLabel:y,fallback:w,oEmbedUrl:y,wrapper:m([y,v,P({render:v.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:v}),facebook:P({appId:y,version:y,playerId:y,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:y}),mux:P({attributes:g,version:y}),file:P({attributes:g,tracks:b,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:g,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:P({options:g,playerId:y,customControls:b}),mixcloud:P({options:g}),twitch:P({options:g,playerId:y}),vidyard:P({options:g})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},k=()=>{},_={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},75635:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{callPlayer:()=>C,getConfig:()=>S,getSDK:()=>E,isBlobUrl:()=>R,isMediaStream:()=>x,lazy:()=>b,omit:()=>A,parseEndTime:()=>k,parseStartTime:()=>O,queryString:()=>T,randomString:()=>_,supportsWebKitPresentationMode:()=>M}),e.exports=(a=p,c(o({},"__esModule",{value:!0}),a));var y=d(r(96540)),h=d(r(6147)),f=d(r(14744));const b=e=>y.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,P=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,v=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,a,n]=r;"h"===n&&(t+=60*parseInt(a,10)*60),"m"===n&&(t+=60*parseInt(a,10)),"s"===n&&(t+=parseInt(a,10)),r=g.exec(e)}return t}(e);if(v.test(e))return parseInt(e)}}function O(e){return w(e,m)}function k(e){return w(e,P)}function _(){return Math.random().toString(36).substr(2,5)}function T(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function j(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const I={},E=function(e){0;return e}((function(e,t,r=null,a=()=>!0,n=h.default){const o=j(t);return o&&a(o)?Promise.resolve(o):new Promise(((a,o)=>{if(I[e])return void I[e].push({resolve:a,reject:o});I[e]=[{resolve:a,reject:o}];const i=t=>{I[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(j(t))}}n(e,(a=>{a?(I[e].forEach((e=>e.reject(a))),I[e]=null):r||i(j(t))}))}))}));function S(e,t){return(0,f.default)(t.config,e.config)}function A(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)-1===r.indexOf(o)&&(a[o]=e[o]);return a}function C(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function x(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function R(e){return/^blob:/.test(e)}function M(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},28453:(e,t,r)=>{"use strict";r.d(t,{R:()=>i,x:()=>l});var a=r(96540);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);