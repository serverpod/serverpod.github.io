"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[36107],{8870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=r(85893),s=r(11151);const a={},o="Health checks",c={id:"concepts/health-checks",title:"Health checks",description:"Serverpod automatically performs health checks while running. It measures CPU and memory usage and the response time to the database. The metrics are stored in the database every minute in the serverpodhealthmetric and serverpodhealthconnection_info tables. However, the best way to visualize the data is through Serverpod Insights, which gives you a graphical view.",source:"@site/versioned_docs/version-2.1.0/06-concepts/13-health-checks.md",sourceDirName:"06-concepts",slug:"/concepts/health-checks",permalink:"/concepts/health-checks",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/06-concepts/13-health-checks.md",tags:[],version:"2.1.0",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uploading files",permalink:"/concepts/file-uploads"},next:{title:"Scheduling",permalink:"/concepts/scheduling"}},i={},h=[{value:"Adding custom metrics",id:"adding-custom-metrics",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"health-checks",children:"Health checks"})}),"\n",(0,n.jsx)(t.p,{children:"Serverpod automatically performs health checks while running. It measures CPU and memory usage and the response time to the database. The metrics are stored in the database every minute in the serverpod_health_metric and serverpod_health_connection_info tables. However, the best way to visualize the data is through Serverpod Insights, which gives you a graphical view."}),"\n",(0,n.jsx)(t.h2,{id:"adding-custom-metrics",children:"Adding custom metrics"}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes it is helpful to add custom health metrics. This can be for monitoring external services or internal processes within your Serverpod. To set up your custom metrics, you must create a ",(0,n.jsx)(t.code,{children:"HealthCheckHandler"})," and register it with your Serverpod."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"// Create your custom health metric handler.\nFuture<List<ServerHealthMetric>> myHealthCheckHandler(\n    Serverpod pod, DateTime timestamp) async {\n  // Actually perform some checks.\n\n  // Return a list of health metrics for the given timestamp.\n  return [\n    ServerHealthMetric(\n      name: 'MyMetric',\n      serverId: pod.serverId,\n      timestamp: timestamp,\n      isHealthy: true,\n      value: 1.0,\n    ),\n  ];\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Register your handler when you create your Serverpod object."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"final pod = Serverpod(\n    args,\n    Protocol(),\n    Endpoints(),\n    healthCheckHandler: myHealthCheckHandler,\n  );\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once registered, your health check handler will be called once a minute to perform any health checks that you have configured. You can view the status of your checks in Serverpod Insights or in the database."})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var n=r(67294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);