"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6288],{43719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=r(85893),n=r(11151);const o={},l="Choosing deployment strategy",i={id:"deployments/deployment-strategy",title:"Choosing deployment strategy",description:"There are different options for hosting Serverpod. The minimal requirements are a single server or a serverless managed platform like Google Cloud Run and a Postgres database. Which setup you choose depends on the requirements of your architecture.",source:"@site/versioned_docs/version-1.2.0/06-deployments/01-deployment-strategy.md",sourceDirName:"06-deployments",slug:"/deployments/deployment-strategy",permalink:"/1.2.0/deployments/deployment-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/06-deployments/01-deployment-strategy.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web server",permalink:"/1.2.0/concepts/webserver"},next:{title:"Google Cloud Engine with Terraform",permalink:"/1.2.0/deployments/deploying-to-gce-terraform"}},a={},d=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"Server cluster",id:"server-cluster",level:3},{value:"Serverless",id:"serverless",level:3}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"choosing-deployment-strategy",children:"Choosing deployment strategy"})}),"\n",(0,s.jsx)(t.p,{children:"There are different options for hosting Serverpod. The minimal requirements are a single server or a serverless managed platform like Google Cloud Run and a Postgres database. Which setup you choose depends on the requirements of your architecture."}),"\n",(0,s.jsxs)(t.p,{children:["The main two options are running Serverpod on a cluster of servers or on a serverless platform. You must run your servers on a cluster of servers (such as Google Cloud Engine) if your servers have a state. If they are stateless, you can run on a serverless platform (such as Google Cloud Run). An example of a stateful server is ",(0,s.jsx)(t.a,{href:"https://pixorama.live",children:"Pixorama"}),", where the server keeps the state up to date in real time in the server's memory. If you only make API calls to retrieve data from a database, running on a serverless platform may be your best option."]}),"\n",(0,s.jsx)(t.p,{children:"Here are some pros and cons for the different options:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Server cluster"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Serverless"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Pros"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["All features are supported.",(0,s.jsx)("br",{}),"Great for real time communication.",(0,s.jsx)("br",{}),"Cost efficient at scale."]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Minimal starting cost.",(0,s.jsx)("br",{}),"Easier configuration.",(0,s.jsx)("br",{}),"Minimal maintenance."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cons"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Slightly higher starting cost.",(0,s.jsx)("br",{}),"More complex to set up."]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Limited feature set.",(0,s.jsx)("br",{}),"The server cannot have a state."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The features that currently are not supported by the serverless option are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Future calls. (Configuration is possible but requires a more advanced setup.)"}),"\n",(0,s.jsx)(t.li,{children:"Health metrics."}),"\n",(0,s.jsx)(t.li,{children:"On-server caching. Caching on the server can still occur when serverless instances are kept alive but can be lost at any time. Caching with Redis is supported."}),"\n",(0,s.jsx)(t.li,{children:"State. You cannot store any global information in the server's memory. Instead, you must rely on external services such as Postgres, Redis, or other APIs."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"supported-platforms",children:"Supported platforms"}),"\n",(0,s.jsx)(t.p,{children:"We provide Terraform scripts for setting up your infrastructure with Google Cloud Platform or Amazon Web Services. Still, you can run Serverpod anywhere you can run Dart or host a Docker container."}),"\n",(0,s.jsx)(t.h3,{id:"server-cluster",children:"Server cluster"}),"\n",(0,s.jsx)(t.p,{children:"Serverpod's Terraform scripts will set up an auto-scaling group of servers and configure a database, load balancer, domain names, and certificates. Optionally, you can deploy a staging environment and additional services such as Redis and buckets for file uploads. You deploy new revisions through Github actions, where you can also set up continuous testing."}),"\n",(0,s.jsx)(t.p,{children:"These are approximate starting pricing for the primary required services of a minimal setup on Google Cloud Platform. The minimal setup can handle a fair amount of users at no additional cost. With more traffic, the price will be higher but typically scale well. In addition, with a server cluster you can cache data and state directly on your servers which can cut down costs as you scale."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Service"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Min cost"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute Engine Instance"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$7 / mo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cloud Load Balancing"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$19 / mo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cloud SQL for PostgreSQL"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$10 / mo"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"serverless",children:"Serverless"}),"\n",(0,s.jsx)(t.p,{children:"Serverpod runs well on serverless platforms such as Google Cloud run. We do not yet provide terraform scripts for Cloud Run, but it is easy to set up using the GCP console. You can upload new revisions from your command line."}),"\n",(0,s.jsx)(t.p,{children:"With Cloud Run, you only pay for handling the traffic you receive. There is no starting cost, and no extra load balancer is required."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Service"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Min cost"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cloud Run"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$0 / mo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cloud SQL for PostgreSQL"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$10 / mo"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"The prices shown on this page are approximations and are meant to give you a rough idea of hosting costs. Additional costs may occur, and prices may change. Make sure to do your own research before deploying your infrastructure."})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>l});var s=r(67294);const n={},o=s.createContext(n);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);