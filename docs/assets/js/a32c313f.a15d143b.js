"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[33577],{97893:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts/logging","title":"Logging","description":"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.","source":"@site/versioned_docs/version-0.9.8/03-concepts/05-logging.md","sourceDirName":"03-concepts","slug":"/concepts/logging","permalink":"/0.9.8/concepts/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.8/03-concepts/05-logging.md","tags":[],"version":"0.9.8","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Caching","permalink":"/0.9.8/concepts/caching"},"next":{"title":"Modules","permalink":"/0.9.8/concepts/modules"}}');var t=o(74848),r=o(28453);const i={},c="Logging",a={},l=[];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"logging",children:"Logging"})}),"\n",(0,t.jsxs)(s.p,{children:["Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the ",(0,t.jsx)(s.code,{children:"log"})," method of the ",(0,t.jsx)(s.code,{children:"session"})," object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-dart",children:"session.log('This is working well');\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also pass exceptions and stack traces to the ",(0,t.jsx)(s.code,{children:"log"})," method or set the logging level."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-dart",children:"session.log(\n  'Oops, something went wrong',\n  level: LogLevel.warning,\n  exception: e,\n  stackTrace: stackTrace,\n);\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Log entries are stored in the following tables of the database: ",(0,t.jsx)(s.code,{children:"serverpod_log"})," for text messages, ",(0,t.jsx)(s.code,{children:"serverpod_query_log"})," for queries, and ",(0,t.jsx)(s.code,{children:"serverpod_session_log"})," for completed sessions. Optionally, it's possible to pass a log level with the message to filter out messages depending on the server's runtime settings."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"The Serverpod GUI is coming soon, which makes it possible to easily read, search, and configure the logs."})})]})}function g(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>c});var n=o(96540);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);