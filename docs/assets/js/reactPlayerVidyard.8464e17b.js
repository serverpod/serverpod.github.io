(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[3392],{53552:(e,t,a)=>{var r,s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,y=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))p.call(e,s)||s===a||o(e,s,{get:()=>t[s],enumerable:!(r=l(t,s))||r.enumerable});return e},u=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),d={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>P}),e.exports=(r=d,y(o({},"__esModule",{value:!0}),r));var h=((e,t,a)=>(a=null!=e?s(i(e)):{},y(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)))(a(96540)),c=a(75635),m=a(50327);class P extends h.Component{constructor(){super(...arguments),u(this,"callPlayer",c.callPlayer),u(this,"mute",(()=>{this.setVolume(0)})),u(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),u(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,config:a,onError:r,onDuration:s}=this.props,o=e&&e.match(m.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,c.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((e=>{this.container&&(e.api.addReadyListener(((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))}),o),e.api.renderPlayer({uuid:o,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(o).then((e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)})))}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return h.default.createElement("div",{style:t},h.default.createElement("div",{ref:this.ref}))}}u(P,"displayName","Vidyard"),u(P,"canPlay",m.canPlay.vidyard)}}]);