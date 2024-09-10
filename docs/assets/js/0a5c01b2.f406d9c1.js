"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[56401],{56402:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(85893),o=r(11151);const i={},s="General notes",a={id:"deployments/general",title:"General notes",description:"We are working hard to bring a set of ready made deployment scripts and deployment guides to Serverpod as part of the 1.0 release. Initially, we will support AWS, but Google cloud will come soon after.",source:"@site/versioned_docs/version-0.9.8/04-deployments/02-general.md",sourceDirName:"04-deployments",slug:"/deployments/general",permalink:"/0.9.8/deployments/general",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.8/04-deployments/02-general.md",tags:[],version:"0.9.8",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying to AWS",permalink:"/0.9.8/deployments/deploying-to-aws"},next:{title:"Roadmap",permalink:"/0.9.8/roadmap"}},d={},l=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Running a cluster of servers",id:"running-a-cluster-of-servers",level:2},{value:"Required services",id:"required-services",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"general-notes",children:"General notes"})}),"\n",(0,t.jsx)(n.p,{children:"We are working hard to bring a set of ready made deployment scripts and deployment guides to Serverpod as part of the 1.0 release. Initially, we will support AWS, but Google cloud will come soon after."}),"\n",(0,t.jsx)(n.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,t.jsxs)(n.p,{children:["Serverpod has three main configuration files, depending on which mode the server is running; ",(0,t.jsx)(n.code,{children:"development"}),", ",(0,t.jsx)(n.code,{children:"staging"}),", or ",(0,t.jsx)(n.code,{children:"production"}),". The files are located in the ",(0,t.jsx)(n.code,{children:"config/"})," directory. By default, the server will start in development mode. To use another configuration file, use the ",(0,t.jsx)(n.code,{children:"--mode"})," option when starting the server. If you are running multiple servers in a cluster, use the ",(0,t.jsx)(n.code,{children:"--server-id"})," option to specify the id of each server. By default, the server will run as id 0. For instance, to start the server in production mode with id 2, run the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dart bin/main.dart --mode production --server-id 2\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"It may be totally valid to run all servers with the same id. If you are using something like AWS Fargate it's hard to configure individual server ids."})}),"\n",(0,t.jsxs)(n.p,{children:["Depending on how memory intensive the server is and how many requests it is serving at peak times, you may want to increase the maximum heap size Dart can use. You can do this by passing the ",(0,t.jsx)(n.code,{children:"--old_gen_heap_size"})," option to dart. If you set it to ",(0,t.jsx)(n.code,{children:"0"})," it will give Dart unlimited heap space. Serverpod will run on most operating systems where you can run Dart; Flutter is not required."]}),"\n",(0,t.jsx)(n.h2,{id:"running-a-cluster-of-servers",children:"Running a cluster of servers"}),"\n",(0,t.jsx)(n.p,{children:"To run a cluster of servers, you need to place your servers behind a load balancer so that they have a common access point to the main API port. If you want to gather runtime information from the servers, the service port needs to be accessible not only between servers in the cluster but also from the outside. You will most likely want to add an HTTPS certificate to your load balancer to make sure all communication with clients is encrypted."}),"\n",(0,t.jsx)(n.h2,{id:"required-services",children:"Required services"}),"\n",(0,t.jsx)(n.p,{children:"Serverpod will not run without a link to a Postgres database with the correct tables added. Serverpod can also use Redis, you will need to manually enable Redis in your configuration files."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);