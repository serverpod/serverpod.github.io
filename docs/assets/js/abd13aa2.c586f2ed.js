"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4235],{20076:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=o(85893),t=o(11151);const r={},i="Logging",c={id:"concepts/logging",title:"Logging",description:"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.",source:"@site/versioned_docs/version-1.1.1/05-concepts/07-logging.md",sourceDirName:"05-concepts",slug:"/concepts/logging",permalink:"/1.1.1/concepts/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/07-logging.md",tags:[],version:"1.1.1",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Caching",permalink:"/1.1.1/concepts/caching"},next:{title:"Modules",permalink:"/1.1.1/concepts/modules"}},a={},l=[];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"logging",children:"Logging"}),"\n",(0,n.jsxs)(s.p,{children:["Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the ",(0,n.jsx)(s.code,{children:"log"})," method of the ",(0,n.jsx)(s.code,{children:"session"})," object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-dart",children:"session.log('This is working well');\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can also pass exceptions and stack traces to the ",(0,n.jsx)(s.code,{children:"log"})," method or set the logging level."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-dart",children:"session.log(\n  'Oops, something went wrong',\n  level: LogLevel.warning,\n  exception: e,\n  stackTrace: stackTrace,\n);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Log entries are stored in the following tables of the database: ",(0,n.jsx)(s.code,{children:"serverpod_log"})," for text messages, ",(0,n.jsx)(s.code,{children:"serverpod_query_log"})," for queries, and ",(0,n.jsx)(s.code,{children:"serverpod_session_log"})," for completed sessions. Optionally, it's possible to pass a log level with the message to filter out messages depending on the server's runtime settings."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"The Serverpod GUI is coming soon, making it easy to read, search, and configure the logs."})})]})}function g(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,o)=>{o.d(s,{Z:()=>c,a:()=>i});var n=o(67294);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);