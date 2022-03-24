"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:0},l="Get started",d={unversionedId:"index",id:"index",title:"Get started",description:"Serverpod is an open-source, scalable app server, written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/next/",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Capabilities",permalink:"/next/capabilities"}},p={},c=[{value:"Installing Serverpod",id:"installing-serverpod",level:2},{value:"Creating your first project",id:"creating-your-first-project",level:2},{value:"Starting the server",id:"starting-the-server",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"Serverpod is an open-source, scalable app server, written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is an early release of Serverpod. The API is stable and used in production by multiple projects, but there may be minor changes in future updates. A few features are still missing that will be part of the 1.0 release. See the ",(0,o.kt)("a",{parentName:"p",href:"/roadmap"},"roadmap")," for more information on what's in the works."))),(0,o.kt)("h2",{id:"installing-serverpod"},"Installing Serverpod"),(0,o.kt)("p",null,"Serverpod is tested on Mac and Linux (Mac recommended), support for Windows is in the works. Before you can install Serverpod, you need to the following tools installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flutter")," and ",(0,o.kt)("strong",{parentName:"li"},"Dart"),". You will need Flutter version 2.10 or later. ",(0,o.kt)("a",{parentName:"li",href:"https://flutter.dev/docs/get-started/install"},"https://flutter.dev/docs/get-started/install")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker"),". Docker is used to manage Postgres and Redis. ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"https://docs.docker.com/desktop/mac/install/"))),(0,o.kt)("p",null,"Once you have Flutter and Docker installed and configured, open up a terminal and install Serverpod by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub global activate serverpod_cli\n")),(0,o.kt)("p",null,"Now test the install by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"serverpod\n")),(0,o.kt)("p",null,"If everything is correctly configured, the help for the serverpod command is now displayed."),(0,o.kt)("h2",{id:"creating-your-first-project"},"Creating your first project"),(0,o.kt)("p",null,"To get your local server up and running, you need to create a new Serverpod project. Make sure that Docker Desktop is running, then create a new project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"serverpod create mypod\n")),(0,o.kt)("p",null,"This command will create a new directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod"),", with three dart packages inside; ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_client"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_flutter"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_server"),": This package contains your server-side code. Modify it to add new endpoints or other features your server needs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_client"),": This is the code needed to communicate with the server. Typically, all code in this package is generated automatically, and you should not edit the files in this package."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_flutter"),": This is the Flutter app, pre-configured to connect to your local server.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It can take up to a few minutes the first time you run ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create"),". This is because Docker will need to download and build the containers used by Serverpod."))),(0,o.kt)("h2",{id:"starting-the-server"},"Starting the server"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod run")," command will start and run your server along with Postgres and Redis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd mypod/mypod_server\nserverpod run\n")),(0,o.kt)("p",null,"If everything is working you should see something like this on your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Starting Serverpod.\n \u2022 Automatic generate and reload are enabled.\n \u2022 Running Postgres and Redis in Docker container.\n\nSpinning up serverpod generate (this can take a few seconds).\nStarting Docker (for Postgres and Redis).\nWaiting for Postgres on localhost:8090.\nWaiting for Redis on localhost:8091.\nSetup complete. Starting the server.\n\nSERVERPOD version: 0.9.x mode: development\nInsights listening on port 8081\nServer id 0 listening on port 8080\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also start Postgres, Redis and the server manually without using the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod run")," command. To do this, first ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_server"),", then run:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d --build\n")),(0,o.kt)("p",{parentName:"div"},"This will build and start a set of Docker containers and give access to Postgres and Redis. If you need to stop the containers at some point, just run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose stop"),"."),(0,o.kt)("p",{parentName:"div"},"Now you should be all set to run your server. Start it by typing:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart bin/main.dart\n")))))}m.isMDXComponent=!0}}]);