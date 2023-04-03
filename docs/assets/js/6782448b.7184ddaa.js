"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6090],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Hosting elsewhere",d={unversionedId:"deployments/general",id:"deployments/general",title:"Hosting elsewhere",description:"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform.",source:"@site/docs/05-deployments/05-general.md",sourceDirName:"05-deployments",slug:"/deployments/general",permalink:"/next/deployments/general",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-deployments/05-general.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS EC2 with Terraform",permalink:"/next/deployments/deploying-to-aws"},next:{title:"Roadmap",permalink:"/next/roadmap"}},p={},u=[{value:"Required services",id:"required-services",level:2},{value:"Configuration files",id:"configuration-files",level:2},{value:"Server roles",id:"server-roles",level:2},{value:"Docker container",id:"docker-container",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hosting-elsewhere"},"Hosting elsewhere"),(0,o.kt)("p",null,"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform."),(0,o.kt)("h2",{id:"required-services"},"Required services"),(0,o.kt)("p",null,"Serverpod will not run without a link to a Postgres database with the correct tables added. Serverpod can also optionally use Redis. You enable Redis in your configuration files."),(0,o.kt)("h2",{id:"configuration-files"},"Configuration files"),(0,o.kt)("p",null,"Serverpod has three main configuration files, depending on which mode the server is running; ",(0,o.kt)("inlineCode",{parentName:"p"},"development"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"staging"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"production"),". The files are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," directory. By default, the server will start in development mode. To use another configuration file, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--mode")," option when starting the server. If you are running multiple servers in a cluster, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--server-id")," option to specify the id of each server. By default, the server will run as id ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". For instance, to start the server in production mode with id ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart bin/main.dart --mode production --server-id 2\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It may be totally valid to run all servers with the same id. If you are using something like AWS Fargate it's hard to configure individual server ids."))),(0,o.kt)("p",null,"By default, Serverpod will listen on ports 8080, 8081, and 8082. The ports are used by the API server, Serverpod Insights, and Relic (Serverpod's web server). You can configure the ports in the configuration files. Most often, you will want to place your server or servers behind a load balancer that handles the SSL certificates for your server and maps the traffic to different domain addresses and ports (typically 443 for HTTPS)."),(0,o.kt)("p",null,"Depending on how memory intensive the server is and how many requests it is serving at peak times, you may want to increase the maximum heap size Dart can use. You can do this by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--old_gen_heap_size")," option to dart. If you set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," it will give Dart unlimited heap space. Serverpod will run on most operating systems where you can run Dart; Flutter is not required."),(0,o.kt)("h2",{id:"server-roles"},"Server roles"),(0,o.kt)("p",null,"Serverpod can assume different roles depending on your configuration. If you run Serverpod on a single server or a cluster of servers, you typically will want to use the default ",(0,o.kt)("inlineCode",{parentName:"p"},"monolith")," role. If you use a serverless service, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverless")," role. When Serverpod runs as a monolith, it will handle all maintenance tasks, such as health checks and future calls. If you run it serverless, you will need to schedule a cron job to start Serverpod in the ",(0,o.kt)("inlineCode",{parentName:"p"},"maintenance")," role once every minute if you need support for future calls and health checks."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Role"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Function"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"monolith")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Handles incoming connections and maintenance tasks. Allows the server to contain a state. Default role.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"serverless")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Only handles incoming connections.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"maintenance")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Runs the maintenance tasks once, then exits.")))),(0,o.kt)("p",null,"You can specify the role of your server when you launch it by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"--role")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart bin/main.dart --role serverless\n")),(0,o.kt)("h2",{id:"docker-container"},"Docker container"),(0,o.kt)("p",null,"Running Serverpod through a Docker container is often the best option as it provides a well-defined environment. It's also easy to integrate into your build and deployment process and runs well on most platforms."),(0,o.kt)("p",null,"You will get a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," created in your server directory when you set up a new project. The file works out of the box but can be tailored to your needs. The file has no build options, but you can define environment variables when running it. The following variables are supported."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Environment variable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"runmode")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The run mode to start the server in, possible values are ",(0,o.kt)("inlineCode",{parentName:"td"},"development")," (default), ",(0,o.kt)("inlineCode",{parentName:"td"},"staging"),", or ",(0,o.kt)("inlineCode",{parentName:"td"},"production"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"serverid")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Identifier of your server, default is ",(0,o.kt)("inlineCode",{parentName:"td"},"default"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"logging")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Logging mode at startup, default is ",(0,o.kt)("inlineCode",{parentName:"td"},"normal"),", but you can specify ",(0,o.kt)("inlineCode",{parentName:"td"},"verbose")," to get more information during startup which can help with debugging.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"role")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The role that the server will assume, possible values are ",(0,o.kt)("inlineCode",{parentName:"td"},"monolith")," (default), ",(0,o.kt)("inlineCode",{parentName:"td"},"serverless"),", or ",(0,o.kt)("inlineCode",{parentName:"td"},"maintenance"),".")))))}m.isMDXComponent=!0}}]);