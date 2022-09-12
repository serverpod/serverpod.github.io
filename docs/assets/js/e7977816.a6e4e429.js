"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2001],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||s;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return g}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],a={},c="Logging",l={unversionedId:"concepts/logging",id:"version-0.9.11/concepts/logging",title:"Logging",description:"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.",source:"@site/versioned_docs/version-0.9.11/03-concepts/05-logging.md",sourceDirName:"03-concepts",slug:"/concepts/logging",permalink:"/concepts/logging",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.11/03-concepts/05-logging.md",tags:[],version:"0.9.11",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Caching",permalink:"/concepts/caching"},next:{title:"Modules",permalink:"/concepts/modules"}},p={},g=[],u={toc:g};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"logging"},"Logging"),(0,s.kt)("p",null,"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"log")," method of the ",(0,s.kt)("inlineCode",{parentName:"p"},"session")," object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"session.log('This is working well');\n")),(0,s.kt)("p",null,"You can also pass exceptions and stack traces to the ",(0,s.kt)("inlineCode",{parentName:"p"},"log")," method or set the logging level."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"session.log(\n  'Oops, something went wrong',\n  level: LogLevel.warning,\n  exception: e,\n  stackTrace: stackTrace,\n);\n")),(0,s.kt)("p",null,"Log entries are stored in the following tables of the database: ",(0,s.kt)("inlineCode",{parentName:"p"},"serverpod_log")," for text messages, ",(0,s.kt)("inlineCode",{parentName:"p"},"serverpod_query_log")," for queries, and ",(0,s.kt)("inlineCode",{parentName:"p"},"serverpod_session_log")," for completed sessions. Optionally, it's possible to pass a log level with the message to filter out messages depending on the server's runtime settings."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The Serverpod GUI is coming soon, which makes it possible to easily read, search, and configure the logs."))))}d.isMDXComponent=!0}}]);