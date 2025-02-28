"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[62814],{48109:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"deployments/general","title":"Hosting elsewhere","description":"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform.","source":"@site/versioned_docs/version-2.3.0/07-deployments/05-general.md","sourceDirName":"07-deployments","slug":"/deployments/general","permalink":"/deployments/general","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.3.0/07-deployments/05-general.md","tags":[],"version":"2.3.0","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"AWS EC2 with Terraform","permalink":"/deployments/deploying-to-aws"},"next":{"title":"Community-supported deployments","permalink":"/deployments/community-supported-deployments"}}');var s=r(74848),o=r(28453);const i={},l="Hosting elsewhere",d={},a=[{value:"Required services",id:"required-services",level:2},{value:"Configuration files",id:"configuration-files",level:2},{value:"Server roles",id:"server-roles",level:2},{value:"Docker container",id:"docker-container",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"hosting-elsewhere",children:"Hosting elsewhere"})}),"\n",(0,s.jsx)(n.p,{children:"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform."}),"\n",(0,s.jsx)(n.h2,{id:"required-services",children:"Required services"}),"\n",(0,s.jsx)(n.p,{children:"Serverpod will not run without a link to a Postgres database with the correct tables added (unless you're running Serverpod mini). Serverpod can also optionally use Redis. You enable Redis in your configuration files."}),"\n",(0,s.jsx)(n.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,s.jsxs)(n.p,{children:["Serverpod has three main configuration files, depending on which mode the server is running; ",(0,s.jsx)(n.code,{children:"development"}),", ",(0,s.jsx)(n.code,{children:"staging"}),", or ",(0,s.jsx)(n.code,{children:"production"}),". The files are located in the ",(0,s.jsx)(n.code,{children:"config/"})," directory. By default, the server will start in development mode. To use another configuration file, use the ",(0,s.jsx)(n.code,{children:"--mode"})," option when starting the server. If you are running multiple servers in a cluster, use the ",(0,s.jsx)(n.code,{children:"--server-id"})," option to specify the id of each server. By default, the server will run as id ",(0,s.jsx)(n.code,{children:"default"}),". For instance, to start the server in production mode with id ",(0,s.jsx)(n.code,{children:"2"}),", run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ dart bin/main.dart --mode production --server-id 2\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"It may be totally valid to run all servers with the same id. If you are using something like AWS Fargate it's hard to configure individual server ids."})}),"\n",(0,s.jsx)(n.p,{children:"By default, Serverpod will listen on ports 8080, 8081, and 8082. The ports are used by the API server, Serverpod Insights, and Relic (Serverpod's web server). You can configure the ports in the configuration files. Most often, you will want to place your server or servers behind a load balancer that handles the SSL certificates for your server and maps the traffic to different domain addresses and ports (typically 443 for HTTPS)."}),"\n",(0,s.jsx)(n.h2,{id:"server-roles",children:"Server roles"}),"\n",(0,s.jsxs)(n.p,{children:["Serverpod can assume different roles depending on your configuration. If you run Serverpod on a single server or a cluster of servers, you typically will want to use the default ",(0,s.jsx)(n.code,{children:"monolith"})," role. If you use a serverless service, use the ",(0,s.jsx)(n.code,{children:"serverless"})," role. When Serverpod runs as a monolith, it will handle all maintenance tasks, such as health checks and future calls. If you run it serverless, you will need to schedule a cron job to start Serverpod in the ",(0,s.jsx)(n.code,{children:"maintenance"})," role once every minute if you need support for future calls and health checks."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Role"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Function"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"monolith"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Handles incoming connections and maintenance tasks. Allows the server to contain a state. Default role."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"serverless"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Only handles incoming connections."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"maintenance"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Runs the maintenance tasks once, then exits."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the role of your server when you launch it by setting the ",(0,s.jsx)(n.code,{children:"--role"})," argument."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ dart bin/main.dart --role serverless\n"})}),"\n",(0,s.jsx)(n.h2,{id:"docker-container",children:"Docker container"}),"\n",(0,s.jsx)(n.p,{children:"Running Serverpod through a Docker container is often the best option as it provides a well-defined environment. It's also easy to integrate into your build and deployment process and runs well on most platforms."}),"\n",(0,s.jsxs)(n.p,{children:["You will get a ",(0,s.jsx)(n.code,{children:"Dockerfile"})," created in your server directory when you set up a new project. The file works out of the box but can be tailored to your needs. The file has no build options, but you can define environment variables when running it. The following variables are supported."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Environment variable"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Meaning"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"runmode"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The run mode to start the server in, possible values are ",(0,s.jsx)(n.code,{children:"development"})," (default), ",(0,s.jsx)(n.code,{children:"staging"}),", or ",(0,s.jsx)(n.code,{children:"production"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"serverid"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Identifier of your server, default is ",(0,s.jsx)(n.code,{children:"default"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"logging"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Logging mode at startup, default is ",(0,s.jsx)(n.code,{children:"normal"}),", but you can specify ",(0,s.jsx)(n.code,{children:"verbose"})," to get more information during startup which can help with debugging."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"role"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The role that the server will assume, possible values are ",(0,s.jsx)(n.code,{children:"monolith"})," (default), ",(0,s.jsx)(n.code,{children:"serverless"}),", or ",(0,s.jsx)(n.code,{children:"maintenance"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);