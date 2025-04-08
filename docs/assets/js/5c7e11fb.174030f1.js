"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[74961],{35148:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"concepts/logging","title":"Logging","description":"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.","source":"@site/versioned_docs/version-2.3.0/06-concepts/09-logging.md","sourceDirName":"06-concepts","slug":"/concepts/logging","permalink":"/2.3.0/concepts/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.3.0/06-concepts/09-logging.md","tags":[],"version":"2.3.0","sidebarPosition":9,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Caching","permalink":"/2.3.0/concepts/caching"},"next":{"title":"Modules","permalink":"/2.3.0/concepts/modules"}}');var i=n(74848),r=n(28453);const t={},l="Logging",a={},c=[{value:"Controlling Session Logs with Environment Variables or Configuration Files",id:"controlling-session-logs-with-environment-variables-or-configuration-files",level:3},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Configuration File Example",id:"configuration-file-example",level:4},{value:"Default Behavior for Session Logs",id:"default-behavior-for-session-logs",level:3},{value:"Important: Persistent Logging Requires a Database",id:"important-persistent-logging-requires-a-database",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"logging",children:"Logging"})}),"\n",(0,i.jsxs)(s.p,{children:["Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the ",(0,i.jsx)(s.code,{children:"log"})," method of the ",(0,i.jsx)(s.code,{children:"session"})," object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-dart",children:"session.log('This is working well');\n"})}),"\n",(0,i.jsxs)(s.p,{children:["You can also pass exceptions and stack traces to the ",(0,i.jsx)(s.code,{children:"log"})," method or set the logging level."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-dart",children:"session.log(\n  'Oops, something went wrong',\n  level: LogLevel.warning,\n  exception: e,\n  stackTrace: stackTrace,\n);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Log entries are stored in the following tables of the database: ",(0,i.jsx)(s.code,{children:"serverpod_log"})," for text messages, ",(0,i.jsx)(s.code,{children:"serverpod_query_log"})," for queries, and ",(0,i.jsx)(s.code,{children:"serverpod_session_log"})," for completed sessions. Optionally, it's possible to pass a log level with the message to filter out messages depending on the server's runtime settings."]}),"\n",(0,i.jsx)(s.h3,{id:"controlling-session-logs-with-environment-variables-or-configuration-files",children:"Controlling Session Logs with Environment Variables or Configuration Files"}),"\n",(0,i.jsxs)(s.p,{children:["You can control whether session logs are written to the database, the console, both, or neither, using environment variables or configuration files. ",(0,i.jsx)(s.strong,{children:"Environment variables take priority"})," over configuration file settings if both are provided."]}),"\n",(0,i.jsx)(s.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SERVERPOD_SESSION_PERSISTENT_LOG_ENABLED"}),": Controls whether session logs are written to the database."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SERVERPOD_SESSION_CONSOLE_LOG_ENABLED"}),": Controls whether session logs are output to the console."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"configuration-file-example",children:"Configuration File Example"}),"\n",(0,i.jsx)(s.p,{children:"You can also configure logging behavior directly in the configuration file:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"sessionLogs:\n  persistentEnabled: true   # Logs are stored in the database\n  consoleEnabled: true      # Logs are output to the console\n"})}),"\n",(0,i.jsx)(s.h3,{id:"default-behavior-for-session-logs",children:"Default Behavior for Session Logs"}),"\n",(0,i.jsx)(s.p,{children:"By default, session logging behavior depends on whether the project has database support:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"When a database is present"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"persistentEnabled"})," is set to ",(0,i.jsx)(s.code,{children:"true"}),", meaning logs are stored in the database."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"consoleEnabled"})," is set to ",(0,i.jsx)(s.code,{children:"false"})," by default, meaning logs are not printed to the console unless explicitly enabled."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"When no database is present"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"persistentEnabled"})," is set to ",(0,i.jsx)(s.code,{children:"false"})," since persistent logging requires a database."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"consoleEnabled"})," is set to ",(0,i.jsx)(s.code,{children:"true"}),", meaning logs are printed to the console by default."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"important-persistent-logging-requires-a-database",children:"Important: Persistent Logging Requires a Database"}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.code,{children:"persistentEnabled"})," is set to ",(0,i.jsx)(s.code,{children:"true"})," but ",(0,i.jsx)(s.strong,{children:"no database is configured"}),", a ",(0,i.jsx)(s.code,{children:"StateError"})," will be thrown. Persistent logging requires database support, and Serverpod ensures that misconfigurations are caught early by raising this error."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["You can use the companion app  ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"../tools/insights",children:"Serverpod Insights"})})," to read, search, and configure the logs."]})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var o=n(96540);const i={},r=o.createContext(i);function t(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);