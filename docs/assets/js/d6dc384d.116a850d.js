"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4799],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7214:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="Capabilities",c={unversionedId:"capabilities",id:"capabilities",title:"Capabilities",description:"Serverpod is a complete, competent backend for Flutter. For the glossy sales pitch, head over to our main page at Serverpod.dev.",source:"@site/docs/02-capabilities.md",sourceDirName:".",slug:"/capabilities",permalink:"/next/capabilities",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/02-capabilities.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Support & community",permalink:"/next/support"},next:{title:"Working with endpoints",permalink:"/next/concepts/working-with-endpoints"}},u={},p=[{value:"Code generation",id:"code-generation",level:2},{value:"World-class logging",id:"world-class-logging",level:2},{value:"Built-in caching",id:"built-in-caching",level:2},{value:"Easy to use ORM",id:"easy-to-use-orm",level:2},{value:"File uploads",id:"file-uploads",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Data streaming",id:"data-streaming",level:2},{value:"Task scheduling",id:"task-scheduling",level:2},{value:"Health checks",id:"health-checks",level:2},{value:"Easy deployment",id:"easy-deployment",level:2},{value:"Built in web server",id:"built-in-web-server",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"capabilities"},"Capabilities"),(0,o.kt)("p",null,"Serverpod is a complete, competent backend for Flutter. For the glossy sales pitch, head over to our main page at ",(0,o.kt)("a",{parentName:"p",href:"https://serverpod.dev"},"Serverpod.dev"),"."),(0,o.kt)("p",null,"Every design decision made in Serverpod aims to minimize the amount of code you need to write and make it as readable as possible. Apart from being just a server, Serverpod incorporates many common tasks that are otherwise cumbersome to implement or require external services."),(0,o.kt)("h2",{id:"code-generation"},"Code generation"),(0,o.kt)("p",null,"Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call."),(0,o.kt)("h2",{id:"world-class-logging"},"World-class logging"),(0,o.kt)("p",null,"Stop struggling. You no longer need to search through endless server logs. Pinpoint exceptions and slow database queries in an easy-to-use user interface with a single click. ",(0,o.kt)("em",{parentName:"p"},"The visual interface is coming soon.")),(0,o.kt)("h2",{id:"built-in-caching"},"Built-in caching"),(0,o.kt)("p",null,"Cut down on your database costs. Don't save all your data permanently when you don't have to. Serverpod comes with a high-performance distributed cache built right in. Any serializable objects can be cached locally on your server or using Redis if you need to use the same cache across a cluster of servers."),(0,o.kt)("h2",{id:"easy-to-use-orm"},"Easy to use ORM"),(0,o.kt)("p",null,"Save time. Talking with your database can be a hassle. With Serverpod's ORM, your queries use native Dart types and null-safety. There is a straight path from your statically checked code to the database. Serverpod automatically generates the Postgres queries you need to set up your database. ",(0,o.kt)("em",{parentName:"p"},"Database migrations are coming soon.")),(0,o.kt)("h2",{id:"file-uploads"},"File uploads"),(0,o.kt)("p",null,"Upload files straight to S3 or store them in your database."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Sign in through social logins or wing your own. Currently supported are Google, Apple, and email. ",(0,o.kt)("em",{parentName:"p"},"More options are coming soon.")),(0,o.kt)("h2",{id:"data-streaming"},"Data streaming"),(0,o.kt)("p",null,"Pass serialized objects through authenticated sockets. Push messages from your server for real-time communication. Sending messages across a cluster of servers is supported. Perfect for building games or chatting applications, or anything you can imagine."),(0,o.kt)("h2",{id:"task-scheduling"},"Task scheduling"),(0,o.kt)("p",null,"Serverpod's future calls replace complicated cron jobs. Call a method anytime in the future or after a specified delay. The calls persist even if the server is restarted."),(0,o.kt)("h2",{id:"health-checks"},"Health checks"),(0,o.kt)("p",null,"Monitor the database and external services that you are using. Write custom health checks and get notified when something goes wrong. ",(0,o.kt)("em",{parentName:"p"},"This feature is coming soon in the visual interface.")),(0,o.kt)("h2",{id:"easy-deployment"},"Easy deployment"),(0,o.kt)("p",null,"Serverpod comes with Terraform scripts for AWS which makes it very quick to deploy your server. We are still working on scripts for Google Cloud and other platforms. Please get in touch with us if you want to ",(0,o.kt)("a",{parentName:"p",href:"/contribute"},"contribute"),"."),(0,o.kt)("h2",{id:"built-in-web-server"},"Built in web server"),(0,o.kt)("p",null,"Serverpod comes with a built-in web server. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services. ",(0,o.kt)("em",{parentName:"p"},"The web server is still experimental and we are actively working on it"),"."))}h.isMDXComponent=!0}}]);