"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[7001],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:0},l="Get started",p={unversionedId:"index",id:"version-0.9.20/index",title:"Get started",description:"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.",source:"@site/versioned_docs/version-0.9.20/index.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.20/index.md",tags:[],version:"0.9.20",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Tutorials & Examples",permalink:"/tutorials"}},d={},c=[{value:"Installing Serverpod",id:"installing-serverpod",level:2},{value:"Serverpod Insights",id:"serverpod-insights",level:3},{value:"Creating your first project",id:"creating-your-first-project",level:2},{value:"Starting the server",id:"starting-the-server",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a pre-release of Serverpod. The API is stable and used in production by multiple projects, but there may be minor changes leading up to version 1.0."))),(0,o.kt)("h2",{id:"installing-serverpod"},"Installing Serverpod"),(0,o.kt)("p",null,"Serverpod is tested on Mac and Linux. It works on Windows, but it's still experimental. Before you can install Serverpod, you need to have the following tools installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flutter")," and ",(0,o.kt)("strong",{parentName:"li"},"Dart"),". You will need Flutter version 2.10 or later. ",(0,o.kt)("a",{parentName:"li",href:"https://flutter.dev/docs/get-started/install"},"https://flutter.dev/docs/get-started/install")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker"),". Docker is used to manage Postgres and Redis. ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/"))),(0,o.kt)("p",null,"Once you have Flutter and Docker installed and configured, open up a terminal and install Serverpod by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub global activate serverpod_cli\n")),(0,o.kt)("p",null,"Now test the installation by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"serverpod\n")),(0,o.kt)("p",null,"If everything is correctly configured, the help for the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod")," command is now displayed."),(0,o.kt)("h3",{id:"serverpod-insights"},"Serverpod Insights"),(0,o.kt)("p",null,"Serverpod Insights is a companion app bundled with Serverpod. It allows you to access your server's logs and health metrics. Insights is currently in beta and only available for Mac, but we will be adding support for more platforms in the future."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://serverpod.dev/assets/img/serverpod-screenshot.webp",alt:"Serverpod Insights"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"COMING SOON."))," Download the latest version here: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://serverpod.dev"},"Serverpod Insights")),". It is compatible with Serverpod version 1.x."),(0,o.kt)("h2",{id:"creating-your-first-project"},"Creating your first project"),(0,o.kt)("p",null,"To get your local server up and running, you need to create a new Serverpod project. Make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop")," is running, then create a new project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"serverpod create mypod\n")),(0,o.kt)("p",null,"This command will create a new directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod"),", with three dart packages inside; ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_client"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_flutter"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_server"),": This package contains your server-side code. Modify it to add new endpoints or other features your server needs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_client"),": This is the code needed to communicate with the server. Typically, all code in this package is generated automatically, and you should not edit the files in this package."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_flutter"),": This is the Flutter app, pre-configured to connect to your local server.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It can take up to a few minutes the first time you run ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create"),". This is because Docker will need to download and build the containers used by Serverpod."))),(0,o.kt)("h2",{id:"starting-the-server"},"Starting the server"),(0,o.kt)("p",null,"Start your Docker containers with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up --build --detach"),". It will start Postgres and Redis. Then, run ",(0,o.kt)("inlineCode",{parentName:"p"},"dart bin/main.dart")," to start your server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd mypod/mypod_server\ndocker-compose up --build --detach\ndart bin/main.dart\n")),(0,o.kt)("p",null,"If everything is working, you should see something like this on your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SERVERPOD version: 1.x.x, mode: development, time: 2022-09-12 17:22:02.825468Z\nInsights listening on port 8081\nServer default listening on port 8080\nWebserver listening on port 8082\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need to stop the Docker containers at some point, just run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose stop")," or use the Docker Desktop application. You can also use Docker Desktop to start, stop, and manage your containers."))))}m.isMDXComponent=!0}}]);