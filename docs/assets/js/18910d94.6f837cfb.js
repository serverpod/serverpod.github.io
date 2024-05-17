"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5261],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9385:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},s="Health checks",l={unversionedId:"concepts/health-checks",id:"version-0.9.22/concepts/health-checks",title:"Health checks",description:"Serverpod automatically performs health checks while running. It measures CPU and memory usage and the response time to the database. The metrics are stored in the database every minute in the serverpodhealtmetric and serverpodhealthconnection_info tables. However, the best way to visualize the data is through Serverpod Insights, which gives you a graphical view.",source:"@site/versioned_docs/version-0.9.22/04-concepts/10-health-checks.md",sourceDirName:"04-concepts",slug:"/concepts/health-checks",permalink:"/0.9.22/concepts/health-checks",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.22/04-concepts/10-health-checks.md",tags:[],version:"0.9.22",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streams and messaging",permalink:"/0.9.22/concepts/streams"},next:{title:"Web server",permalink:"/0.9.22/concepts/webserver"}},u={},h=[{value:"Adding custom metrics",id:"adding-custom-metrics",level:2}],p={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"health-checks"},"Health checks"),(0,o.kt)("p",null,"Serverpod automatically performs health checks while running. It measures CPU and memory usage and the response time to the database. The metrics are stored in the database every minute in the serverpod_healt_metric and serverpod_health_connection_info tables. However, the best way to visualize the data is through Serverpod Insights, which gives you a graphical view."),(0,o.kt)("h2",{id:"adding-custom-metrics"},"Adding custom metrics"),(0,o.kt)("p",null,"Sometimes it is helpful to add custom health metrics. This can be for monitoring external services or internal processes within your Serverpod. To set up your custom metrics, you must create a ",(0,o.kt)("inlineCode",{parentName:"p"},"HealthCheckHandler")," and register it with your Serverpod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// Create your custom health metric handler.\nFuture<List<ServerHealthMetric>> myHealthCheckHandler(\n    Serverpod pod, DateTime timestamp) async {\n  // Actually perform some checks.\n\n  // Return a list of health metrics for the given timestamp.\n  return [\n    ServerHealthMetric(\n      name: 'MyMetric',\n      serverId: pod.serverId,\n      timestamp: timestamp,\n      isHealthy: true,\n      value: 1.0,\n    ),\n  ];\n}\n")),(0,o.kt)("p",null,"Register your handler when you create your Serverpod object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final pod = Serverpod(\n    args,\n    Protocol(),\n    Endpoints(),\n    healthCheckHandler: myHealthCheckHandler,\n  );\n")),(0,o.kt)("p",null,"Once registered, your health check handler will be called once a minute to perform any health checks that you have configured. You can view the status of your checks in Serverpod Insights or in the database."))}d.isMDXComponent=!0}}]);