"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6971],{59925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(85893),s=t(11151);const o={sidebar_position:-1},i="Installing Serverpod",d={id:"index",title:"Installing Serverpod",description:"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your model and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/next/",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"tutorialSidebar",next:{title:"Get started",permalink:"/next/get-started"}},a={},l=[{value:"Command line tools",id:"command-line-tools",level:2},{value:"Serverpod Insights",id:"serverpod-insights",level:2},{value:"VS Code Extension",id:"vs-code-extension",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"installing-serverpod",children:"Installing Serverpod"}),"\n",(0,r.jsx)(n.p,{children:"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your model and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call."}),"\n",(0,r.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0"},children:(0,r.jsx)("iframe",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/QN6juNWW3js",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,r.jsx)(n.h2,{id:"command-line-tools",children:"Command line tools"}),"\n",(0,r.jsx)(n.p,{children:"Serverpod is tested on Mac, Windows, and Linux. Before you can install Serverpod, you need to have the following tools installed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Flutter"})," and ",(0,r.jsx)(n.strong,{children:"Dart"}),". You will need Flutter version 3.7 or later. ",(0,r.jsx)(n.a,{href:"https://flutter.dev/docs/get-started/install",children:"https://flutter.dev/docs/get-started/install"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Docker"}),". Docker is used to manage Postgres and (optionally) Redis. ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"https://docs.docker.com/get-docker/"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Once you have Flutter and Docker installed and configured, open up a terminal and install Serverpod by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ dart pub global activate serverpod_cli\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now test the installation by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ serverpod\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If everything is correctly configured, the help for the ",(0,r.jsx)(n.code,{children:"serverpod"})," command is now displayed."]}),"\n",(0,r.jsx)(n.h2,{id:"serverpod-insights",children:"Serverpod Insights"}),"\n",(0,r.jsx)(n.p,{children:"Serverpod Insights is a companion app bundled with Serverpod. It allows you to access your server's logs and health metrics. Insights is available for Mac and Windows, but we will be adding support for Linux in the future."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://serverpod.dev/assets/img/serverpod-screenshot.webp",alt:"Serverpod Insights"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Download the latest version here: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"insights",children:"Serverpod Insights"})}),". It is compatible with Serverpod version 1.2.x. Always use the same version of Serverpod Insights as for the framework itself."]})}),"\n",(0,r.jsx)(n.h2,{id:"vs-code-extension",children:"VS Code Extension"}),"\n",(0,r.jsx)(n.p,{children:"The Serverpod VS Code extension makes it easy to work with your Serverpod projects. It provides real-time diagnostics and syntax highlighting for model files in your project."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Serverpod extension",src:t(54972).Z+"",width:"1264",height:"404"})}),"\n",(0,r.jsxs)(n.p,{children:["Install the extension from the VS Code Marketplace: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=serverpod.serverpod",children:"Serverpod extension"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The extension requires Serverpod 1.2 or later."})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},54972:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/syntax-highlighting-1a62bab671134ae8f2ba872840c023e6.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);