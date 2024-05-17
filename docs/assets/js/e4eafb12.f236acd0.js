"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6495],{6385:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(5893),o=t(1151);const s={},i="General notes",a={id:"deployments/general",title:"General notes",description:"Serverpod comes with a set of Terraform scripts that makes it very easy to deploy your server. We currently support deployments to AWS, but hope to support more platforms (like Google Cloud) in the future.",source:"@site/versioned_docs/version-0.9.10/04-deployments/02-general.md",sourceDirName:"04-deployments",slug:"/deployments/general",permalink:"/0.9.10/deployments/general",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.10/04-deployments/02-general.md",tags:[],version:"0.9.10",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying to AWS",permalink:"/0.9.10/deployments/deploying-to-aws"},next:{title:"Roadmap",permalink:"/0.9.10/roadmap"}},d={},l=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Running a cluster of servers",id:"running-a-cluster-of-servers",level:2},{value:"Required services",id:"required-services",level:2}];function c(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"general-notes",children:"General notes"}),"\n",(0,n.jsx)(r.p,{children:"Serverpod comes with a set of Terraform scripts that makes it very easy to deploy your server. We currently support deployments to AWS, but hope to support more platforms (like Google Cloud) in the future."}),"\n",(0,n.jsx)(r.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,n.jsxs)(r.p,{children:["Serverpod has three main configuration files, depending on which mode the server is running; ",(0,n.jsx)(r.code,{children:"development"}),", ",(0,n.jsx)(r.code,{children:"staging"}),", or ",(0,n.jsx)(r.code,{children:"production"}),". The files are located in the ",(0,n.jsx)(r.code,{children:"config/"})," directory. By default, the server will start in development mode. To use another configuration file, use the ",(0,n.jsx)(r.code,{children:"--mode"})," option when starting the server. If you are running multiple servers in a cluster, use the ",(0,n.jsx)(r.code,{children:"--server-id"})," option to specify the id of each server. By default, the server will run as id ",(0,n.jsx)(r.code,{children:"default"}),". For instance, to start the server in production mode with id ",(0,n.jsx)(r.code,{children:"2"}),", run the following command:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"dart bin/main.dart --mode production --server-id 2\n"})}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"It may be totally valid to run all servers with the same id. If you are using something like AWS Fargate it's hard to configure individual server ids."})}),"\n",(0,n.jsxs)(r.p,{children:["Depending on how memory intensive the server is and how many requests it is serving at peak times, you may want to increase the maximum heap size Dart can use. You can do this by passing the ",(0,n.jsx)(r.code,{children:"--old_gen_heap_size"})," option to dart. If you set it to ",(0,n.jsx)(r.code,{children:"0"})," it will give Dart unlimited heap space. Serverpod will run on most operating systems where you can run Dart; Flutter is not required."]}),"\n",(0,n.jsx)(r.h2,{id:"running-a-cluster-of-servers",children:"Running a cluster of servers"}),"\n",(0,n.jsx)(r.p,{children:"To run a cluster of servers, you need to place your servers behind a load balancer so that they have a common access point to the main API port. If you want to gather runtime information from the servers, the service port needs to be accessible not only between servers in the cluster but also from the outside. You will most likely want to add an HTTPS certificate to your load balancer to make sure all communication with clients is encrypted."}),"\n",(0,n.jsx)(r.h2,{id:"required-services",children:"Required services"}),"\n",(0,n.jsx)(r.p,{children:"Serverpod will not run without a link to a Postgres database with the correct tables added. Serverpod can also use Redis, you will need to manually enable Redis in your configuration files."})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(7294);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);