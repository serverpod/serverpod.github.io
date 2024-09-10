"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[83377],{58381:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=n(85893),s=n(11151);const o={sidebar_position:0},i="Get started",d={id:"index",title:"Get started",description:"Serverpod is an open-source, scalable app server, written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.",source:"@site/versioned_docs/version-0.9.8/index.md",sourceDirName:".",slug:"/",permalink:"/0.9.8/",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.8/index.md",tags:[],version:"0.9.8",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Support",permalink:"/0.9.8/support"}},a={},c=[{value:"Installing Serverpod",id:"installing-serverpod",level:2},{value:"Creating your first project",id:"creating-your-first-project",level:2},{value:"Starting the server",id:"starting-the-server",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"get-started",children:"Get started"})}),"\n",(0,t.jsx)(r.p,{children:"Serverpod is an open-source, scalable app server, written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call."}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["This is an early release of Serverpod. The API is stable and used in production by multiple projects, but there may be minor changes in future updates. A few features are still missing that will be part of the 1.0 release. See the ",(0,t.jsx)(r.a,{href:"contribute",children:"roadmap"})," for more information on what's in the works."]})}),"\n",(0,t.jsx)(r.h2,{id:"installing-serverpod",children:"Installing Serverpod"}),"\n",(0,t.jsx)(r.p,{children:"Serverpod is tested on Mac and Linux (Mac recommended), support for Windows is experimental. Before you can install Serverpod, you need to the following tools installed:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Flutter"})," and ",(0,t.jsx)(r.strong,{children:"Dart"}),". You will need Flutter version 2.10 or later. ",(0,t.jsx)(r.a,{href:"https://flutter.dev/docs/get-started/install",children:"https://flutter.dev/docs/get-started/install"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Docker"}),". Docker is used to manage Postgres and Redis. ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/desktop/mac/install/",children:"https://docs.docker.com/desktop/mac/install/"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Once you have Flutter and Docker installed and configured, open up a terminal and install Serverpod by running:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"dart pub global activate serverpod_cli\n"})}),"\n",(0,t.jsx)(r.p,{children:"Now test the install by running:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"serverpod\n"})}),"\n",(0,t.jsx)(r.p,{children:"If everything is correctly configured, the help for the serverpod command is now displayed."}),"\n",(0,t.jsx)(r.h2,{id:"creating-your-first-project",children:"Creating your first project"}),"\n",(0,t.jsxs)(r.p,{children:["To get your local server up and running, you need to create a new Serverpod project. Make sure that Docker Desktop is running, then create a new project by running ",(0,t.jsx)(r.code,{children:"serverpod create"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"serverpod create mypod\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This command will create a new directory called ",(0,t.jsx)(r.code,{children:"mypod"}),", with three dart packages inside; ",(0,t.jsx)(r.code,{children:"mypod_server"}),", ",(0,t.jsx)(r.code,{children:"mypod_client"}),", and ",(0,t.jsx)(r.code,{children:"mypod_flutter"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mypod_server"}),": This package contains your server-side code. Modify it to add new endpoints or other features your server needs."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mypod_client"}),": This is the code needed to communicate with the server. Typically, all code in this package is generated automatically, and you should not edit the files in this package."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mypod_flutter"}),": This is the Flutter app, pre-configured to connect to your local server."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["It can take up to a few minutes the first time you run ",(0,t.jsx)(r.code,{children:"serverpod create"}),". This is because Docker will need to download and build the containers used by Serverpod."]})}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["If you are running on Windows, a few extra steps are required when setting up a new project. The ",(0,t.jsx)(r.code,{children:"serverpod create"})," command will guide you through the process."]})}),"\n",(0,t.jsx)(r.h2,{id:"starting-the-server",children:"Starting the server"}),"\n",(0,t.jsxs)(r.p,{children:["Start your Docker container with ",(0,t.jsx)(r.code,{children:"docker-compose up -d build"}),", then ",(0,t.jsx)(r.code,{children:"serverpod run"})," command will start your server."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd mypod/mypod_server\ndocker-compose up -d --build\nserverpod run\n"})}),"\n",(0,t.jsx)(r.p,{children:"If everything is working you should see something like this on your terminal:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Starting Serverpod.\n\n \u2022 Automatic generate and reload are enabled.\n\nSpinning up serverpod generate (this can take a few seconds).\nStarting Docker (for Postgres and Redis).\nWaiting for Postgres on localhost:8090.\nWaiting for Redis on localhost:8091.\nSetup complete. Starting the server.\n\nSERVERPOD version: 0.9.x mode: development\nInsights listening on port 8081\nServer id 0 listening on port 8080\n"})}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.p,{children:["You can also start Postgres, Redis and the server manually without using the ",(0,t.jsx)(r.code,{children:"serverpod run"})," command. To do this, first ",(0,t.jsx)(r.code,{children:"cd"})," into ",(0,t.jsx)(r.code,{children:"mypod_server"}),", then run:"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker-compose up -d --build\n"})}),(0,t.jsxs)(r.p,{children:["This will build and start a set of Docker containers and give access to Postgres and Redis. If you need to stop the containers at some point, just run ",(0,t.jsx)(r.code,{children:"docker-compose stop"}),"."]}),(0,t.jsx)(r.p,{children:"Now you should be all set to run your server. Start it by typing:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"dart bin/main.dart\n"})})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var t=n(67294);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);