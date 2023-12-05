"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[3109],{5623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(1151);const i={},s="General notes",a={id:"deployments/general",title:"General notes",description:"We are working hard to bring a set of ready made deployment scripts and deployment guides to Serverpod as part of the 1.0 release. Initially, we hope to support both AWS and Google Cloud.",source:"@site/versioned_docs/version-0.9.6/03-deployments/01-general.md",sourceDirName:"03-deployments",slug:"/deployments/general",permalink:"/0.9.6/deployments/general",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.6/03-deployments/01-general.md",tags:[],version:"0.9.6",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streams and messaging",permalink:"/0.9.6/concepts/streams"},next:{title:"Roadmap",permalink:"/0.9.6/roadmap"}},d={},l=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Running a cluster of servers",id:"running-a-cluster-of-servers",level:2},{value:"Required services",id:"required-services",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"general-notes",children:"General notes"}),"\n",(0,r.jsx)(n.p,{children:"We are working hard to bring a set of ready made deployment scripts and deployment guides to Serverpod as part of the 1.0 release. Initially, we hope to support both AWS and Google Cloud."}),"\n",(0,r.jsx)(n.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,r.jsxs)(n.p,{children:["Serverpod has three main configuration files, depending on which mode the server is running; ",(0,r.jsx)(n.code,{children:"development"}),", ",(0,r.jsx)(n.code,{children:"staging"}),", or ",(0,r.jsx)(n.code,{children:"production"}),". The files are located in the ",(0,r.jsx)(n.code,{children:"config/"})," directory. By default, the server will start in development mode. To use another configuration file, use the ",(0,r.jsx)(n.code,{children:"--mode"})," option when starting the server. If you are running multiple servers in a cluster, use the ",(0,r.jsx)(n.code,{children:"--server-id"})," option to specify the id of each server. By default, the server will run as id 0. For instance, to start the server in production mode with id 2, run the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dart bin/main.dart --mode production --server-id 2\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"It may be totally valid to run all servers with the same id. If you are using something like AWS Fargate it's hard to configure individual server ids."})}),"\n",(0,r.jsxs)(n.p,{children:["Depending on how memory intensive the server is and how many requests it is serving at peak times, you may want to increase the maximum heap size Dart can use. You can do this by passing the ",(0,r.jsx)(n.code,{children:"--old_gen_heap_size"})," option to dart. If you set it to ",(0,r.jsx)(n.code,{children:"0"})," it will give Dart unlimited heap space. Serverpod will run on most operating systems where you can run Dart; Flutter is not required."]}),"\n",(0,r.jsx)(n.h2,{id:"running-a-cluster-of-servers",children:"Running a cluster of servers"}),"\n",(0,r.jsx)(n.p,{children:"To run a cluster of servers, you need to place your servers behind a load balancer so that they have a common access point to the main API port. If you want to gather runtime information from the servers, the service port needs to be accessible not only between servers in the cluster but also from the outside. By default, communication with the service API is encrypted, while you most likely want to add an HTTPS certificate to your load balancer to make sure all communication with clients is encrypted."}),"\n",(0,r.jsx)(n.h2,{id:"required-services",children:"Required services"}),"\n",(0,r.jsxs)(n.p,{children:["Serverpod will not run without a link to a Postgres database. By default, Serverpod also use Redis, but Redis can be disabled by setting ",(0,r.jsx)(n.code,{children:"enableRedis"})," to ",(0,r.jsx)(n.code,{children:"false"})," when creating the Serverpod singleton object. This option may be moved to configuration files in the future."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);