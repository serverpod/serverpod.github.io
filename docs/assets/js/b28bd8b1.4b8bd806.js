"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6092],{41710:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(85893),s=n(11151);const o={sidebar_position:0},i="Get started",d={id:"index",title:"Get started",description:"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.",source:"@site/versioned_docs/version-0.9.21/index.md",sourceDirName:".",slug:"/",permalink:"/0.9.21/",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.21/index.md",tags:[],version:"0.9.21",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Tutorials & Examples",permalink:"/0.9.21/tutorials"}},a={},l=[{value:"Installing Serverpod",id:"installing-serverpod",level:2},{value:"Serverpod Insights",id:"serverpod-insights",level:3},{value:"Creating your first project",id:"creating-your-first-project",level:2},{value:"Starting the server",id:"starting-the-server",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"get-started",children:"Get started"})}),"\n",(0,t.jsx)(r.p,{children:"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call."}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsx)(r.p,{children:"This is a pre-release of Serverpod. The API is stable and used in production by multiple projects, but there may be minor changes leading up to version 1.0."})}),"\n",(0,t.jsx)(r.h2,{id:"installing-serverpod",children:"Installing Serverpod"}),"\n",(0,t.jsx)(r.p,{children:"Serverpod is tested on Mac and Linux. It works on Windows, but it's still experimental. Before you can install Serverpod, you need to have the following tools installed:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Flutter"})," and ",(0,t.jsx)(r.strong,{children:"Dart"}),". You will need Flutter version 2.10 or later. ",(0,t.jsx)(r.a,{href:"https://flutter.dev/docs/get-started/install",children:"https://flutter.dev/docs/get-started/install"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Docker"}),". Docker is used to manage Postgres and Redis. ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/get-docker/",children:"https://docs.docker.com/get-docker/"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Once you have Flutter and Docker installed and configured, open up a terminal and install Serverpod by running:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"dart pub global activate serverpod_cli\n"})}),"\n",(0,t.jsx)(r.p,{children:"Now test the installation by running:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"serverpod\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If everything is correctly configured, the help for the ",(0,t.jsx)(r.code,{children:"serverpod"})," command is now displayed."]}),"\n",(0,t.jsx)(r.h3,{id:"serverpod-insights",children:"Serverpod Insights"}),"\n",(0,t.jsx)(r.p,{children:"Serverpod Insights is a companion app bundled with Serverpod. It allows you to access your server's logs and health metrics. Insights is currently in beta and only available for Mac, but we will be adding support for more platforms in the future."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://serverpod.dev/assets/img/serverpod-screenshot.webp",alt:"Serverpod Insights"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"COMING SOON."})})," Download the latest version here: ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://serverpod.dev",children:"Serverpod Insights"})}),". It is compatible with Serverpod version 1.x."]}),"\n",(0,t.jsx)(r.h2,{id:"creating-your-first-project",children:"Creating your first project"}),"\n",(0,t.jsxs)(r.p,{children:["To get your local server up and running, you need to create a new Serverpod project. Make sure that ",(0,t.jsx)(r.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker Desktop"})," is running, then create a new project by running ",(0,t.jsx)(r.code,{children:"serverpod create"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"serverpod create mypod\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This command will create a new directory called ",(0,t.jsx)(r.code,{children:"mypod"}),", with three dart packages inside; ",(0,t.jsx)(r.code,{children:"mypod_server"}),", ",(0,t.jsx)(r.code,{children:"mypod_client"}),", and ",(0,t.jsx)(r.code,{children:"mypod_flutter"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mypod_server"}),": This package contains your server-side code. Modify it to add new endpoints or other features your server needs."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mypod_client"}),": This is the code needed to communicate with the server. Typically, all code in this package is generated automatically, and you should not edit the files in this package."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"mypod_flutter"}),": This is the Flutter app, pre-configured to connect to your local server."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["It can take up to a few minutes the first time you run ",(0,t.jsx)(r.code,{children:"serverpod create"}),". This is because Docker will need to download and build the containers used by Serverpod."]})}),"\n",(0,t.jsx)(r.h2,{id:"starting-the-server",children:"Starting the server"}),"\n",(0,t.jsxs)(r.p,{children:["Start your Docker containers with ",(0,t.jsx)(r.code,{children:"docker-compose up --build --detach"}),". It will start Postgres and Redis. Then, run ",(0,t.jsx)(r.code,{children:"dart bin/main.dart"})," to start your server."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd mypod/mypod_server\ndocker-compose up --build --detach\ndart bin/main.dart\n"})}),"\n",(0,t.jsx)(r.p,{children:"If everything is working, you should see something like this on your terminal:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"SERVERPOD version: 1.x.x, mode: development, time: 2022-09-12 17:22:02.825468Z\nInsights listening on port 8081\nServer default listening on port 8080\nWebserver listening on port 8082\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["If you need to stop the Docker containers at some point, just run ",(0,t.jsx)(r.code,{children:"docker-compose stop"})," or use the Docker Desktop application. You can also use Docker Desktop to start, stop, and manage your containers."]})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var t=n(67294);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);