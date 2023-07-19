"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[8172],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1142:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="General notes",u={unversionedId:"deployments/general",id:"version-1.0.0/deployments/general",title:"General notes",description:"Serverpod comes with a set of Terraform scripts that makes it very easy to deploy your server. We currently support deployments to AWS but hope to support more platforms (like Google Cloud) in the future.",source:"@site/versioned_docs/version-1.0.0/05-deployments/02-general.md",sourceDirName:"05-deployments",slug:"/deployments/general",permalink:"/1.0.0/deployments/general",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.0.0/05-deployments/02-general.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying to AWS",permalink:"/1.0.0/deployments/deploying-to-aws"},next:{title:"Roadmap",permalink:"/1.0.0/roadmap"}},p={},d=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Running a cluster of servers",id:"running-a-cluster-of-servers",level:2},{value:"Required services",id:"required-services",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general-notes"},"General notes"),(0,i.kt)("p",null,"Serverpod comes with a set of Terraform scripts that makes it very easy to deploy your server. We currently support deployments to AWS but hope to support more platforms (like Google Cloud) in the future."),(0,i.kt)("h2",{id:"configuration-files"},"Configuration files"),(0,i.kt)("p",null,"Serverpod has three main configuration files, depending on which mode the server is running; ",(0,i.kt)("inlineCode",{parentName:"p"},"development"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"staging"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"production"),". The files are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," directory. By default, the server will start in development mode. To use another configuration file, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--mode")," option when starting the server. If you are running multiple servers in a cluster, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--server-id")," option to specify the id of each server. By default, the server will run as id ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". For instance, to start the server in production mode with id ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dart bin/main.dart --mode production --server-id 2\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It may be totally valid to run all servers with the same id. If you are using something like AWS Fargate it's hard to configure individual server ids."))),(0,i.kt)("p",null,"Depending on how memory intensive the server is and how many requests it is serving at peak times, you may want to increase the maximum heap size Dart can use. You can do this by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--old_gen_heap_size")," option to dart. If you set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," it will give Dart unlimited heap space. Serverpod will run on most operating systems where you can run Dart; Flutter is not required."),(0,i.kt)("h2",{id:"running-a-cluster-of-servers"},"Running a cluster of servers"),(0,i.kt)("p",null,"To run a cluster of servers, you need to place your servers behind a load balancer so that they have a common access point to the main API port. If you want to gather runtime information from the servers, the service port needs to be accessible not only between servers in the cluster but also from the outside. You will likely want to add an HTTPS certificate to your load balancer to ensure all communication with clients is encrypted."),(0,i.kt)("h2",{id:"required-services"},"Required services"),(0,i.kt)("p",null,"Serverpod will not run without a link to a Postgres database with the correct tables added. Serverpod can also use Redis. You enable Redis in your configuration files."))}m.isMDXComponent=!0}}]);