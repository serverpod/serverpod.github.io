"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[979],{6831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(5893),s=t(1151);const i={},o="Hosting elsewhere",l={id:"deployments/general",title:"Hosting elsewhere",description:"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform.",source:"@site/docs/06-deployments/05-general.md",sourceDirName:"06-deployments",slug:"/deployments/general",permalink:"/next/deployments/general",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-deployments/05-general.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS EC2 with Terraform",permalink:"/next/deployments/deploying-to-aws"},next:{title:"Serverpod CLI",permalink:"/next/cli"}},d={},c=[{value:"Required services",id:"required-services",level:2},{value:"Configuration files",id:"configuration-files",level:2},{value:"Server roles",id:"server-roles",level:2},{value:"Docker container",id:"docker-container",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hosting-elsewhere",children:"Hosting elsewhere"}),"\n",(0,r.jsx)(n.p,{children:"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform."}),"\n",(0,r.jsx)(n.h2,{id:"required-services",children:"Required services"}),"\n",(0,r.jsx)(n.p,{children:"Serverpod will not run without a link to a Postgres database with the correct tables added. Serverpod can also optionally use Redis. You enable Redis in your configuration files."}),"\n",(0,r.jsx)(n.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,r.jsxs)(n.p,{children:["Serverpod has three main configuration files, depending on which mode the server is running; ",(0,r.jsx)(n.code,{children:"development"}),", ",(0,r.jsx)(n.code,{children:"staging"}),", or ",(0,r.jsx)(n.code,{children:"production"}),". The files are located in the ",(0,r.jsx)(n.code,{children:"config/"})," directory. By default, the server will start in development mode. To use another configuration file, use the ",(0,r.jsx)(n.code,{children:"--mode"})," option when starting the server. If you are running multiple servers in a cluster, use the ",(0,r.jsx)(n.code,{children:"--server-id"})," option to specify the id of each server. By default, the server will run as id ",(0,r.jsx)(n.code,{children:"default"}),". For instance, to start the server in production mode with id ",(0,r.jsx)(n.code,{children:"2"}),", run the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ dart bin/main.dart --mode production --server-id 2\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"It may be totally valid to run all servers with the same id. If you are using something like AWS Fargate it's hard to configure individual server ids."})}),"\n",(0,r.jsx)(n.p,{children:"By default, Serverpod will listen on ports 8080, 8081, and 8082. The ports are used by the API server, Serverpod Insights, and Relic (Serverpod's web server). You can configure the ports in the configuration files. Most often, you will want to place your server or servers behind a load balancer that handles the SSL certificates for your server and maps the traffic to different domain addresses and ports (typically 443 for HTTPS)."}),"\n",(0,r.jsx)(n.h2,{id:"server-roles",children:"Server roles"}),"\n",(0,r.jsxs)(n.p,{children:["Serverpod can assume different roles depending on your configuration. If you run Serverpod on a single server or a cluster of servers, you typically will want to use the default ",(0,r.jsx)(n.code,{children:"monolith"})," role. If you use a serverless service, use the ",(0,r.jsx)(n.code,{children:"serverless"})," role. When Serverpod runs as a monolith, it will handle all maintenance tasks, such as health checks and future calls. If you run it serverless, you will need to schedule a cron job to start Serverpod in the ",(0,r.jsx)(n.code,{children:"maintenance"})," role once every minute if you need support for future calls and health checks."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Role"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Function"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"monolith"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Handles incoming connections and maintenance tasks. Allows the server to contain a state. Default role."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"serverless"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Only handles incoming connections."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"maintenance"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Runs the maintenance tasks once, then exits."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can specify the role of your server when you launch it by setting the ",(0,r.jsx)(n.code,{children:"--role"})," argument."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ dart bin/main.dart --role serverless\n"})}),"\n",(0,r.jsx)(n.h2,{id:"docker-container",children:"Docker container"}),"\n",(0,r.jsx)(n.p,{children:"Running Serverpod through a Docker container is often the best option as it provides a well-defined environment. It's also easy to integrate into your build and deployment process and runs well on most platforms."}),"\n",(0,r.jsxs)(n.p,{children:["You will get a ",(0,r.jsx)(n.code,{children:"Dockerfile"})," created in your server directory when you set up a new project. The file works out of the box but can be tailored to your needs. The file has no build options, but you can define environment variables when running it. The following variables are supported."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Environment variable"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Meaning"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"runmode"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The run mode to start the server in, possible values are ",(0,r.jsx)(n.code,{children:"development"})," (default), ",(0,r.jsx)(n.code,{children:"staging"}),", or ",(0,r.jsx)(n.code,{children:"production"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"serverid"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Identifier of your server, default is ",(0,r.jsx)(n.code,{children:"default"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"logging"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Logging mode at startup, default is ",(0,r.jsx)(n.code,{children:"normal"}),", but you can specify ",(0,r.jsx)(n.code,{children:"verbose"})," to get more information during startup which can help with debugging."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"role"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The role that the server will assume, possible values are ",(0,r.jsx)(n.code,{children:"monolith"})," (default), ",(0,r.jsx)(n.code,{children:"serverless"}),", or ",(0,r.jsx)(n.code,{children:"maintenance"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);