"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5664],{8068:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(5893),t=n(1151);const i={},a="Sessions",r={id:"concepts/sessions",title:"Sessions",description:"The Session object provides information about the current context in a method call in Serverpod. It provides access to the database, caching, authentication, data storage, and messaging within the server. It will also contain information about the HTTP request object.",source:"@site/versioned_docs/version-1.1.1/05-concepts/03-sessions.md",sourceDirName:"05-concepts",slug:"/concepts/sessions",permalink:"/concepts/sessions",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/03-sessions.md",tags:[],version:"1.1.1",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Serialization",permalink:"/concepts/serialization"},next:{title:"Error handling and exceptions",permalink:"/concepts/exceptions"}},c={},d=[{value:"Creating sessions",id:"creating-sessions",level:2}];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"sessions",children:"Sessions"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"Session"})," object provides information about the current context in a method call in Serverpod. It provides access to the database, caching, authentication, data storage, and messaging within the server. It will also contain information about the HTTP request object."]}),"\n",(0,o.jsxs)(s.p,{children:["If you need additional information about a call, you may need to cast the Session to one of its subclasses, e.g., ",(0,o.jsx)(s.code,{children:"MethodCallSession"})," or ",(0,o.jsx)(s.code,{children:"StreamingSession"}),". The ",(0,o.jsx)(s.code,{children:"MethodCallSession"})," object provides additional properties, such as the name of the endpoint and method and the underlying HttpRequest object."]}),"\n",(0,o.jsxs)(s.admonition,{type:"tip",children:[(0,o.jsx)(s.p,{children:"You can use the Session object to access the IP address of the client calling a method. Serverpod includes an extension on HttpRequest that allows you to access the IP address even if your server is running behind a load balancer."}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-dart",children:"session as MethodCallSession;\nvar ipAddress = session.httpRequest.remoteIpAddress;\n"})})]}),"\n",(0,o.jsx)(s.h2,{id:"creating-sessions",children:"Creating sessions"}),"\n",(0,o.jsxs)(s.p,{children:["In most cases, Serverpod manages the life cycle of the Session objects for you. A session is created for a call or a streaming connection and is disposed of when the call has been completed. In rare cases, you may want to create a session manually. For instance, if you are making a database call outside the scope of a method or a future call. In these cases, you can create a new session with the ",(0,o.jsx)(s.code,{children:"createSession"})," method of the ",(0,o.jsx)(s.code,{children:"Serverpod"})," singleton. You can access the singleton by calling ",(0,o.jsx)(s.code,{children:"Serverpod.instance"}),". If you create a new session, you are also responsible for closing it using the ",(0,o.jsx)(s.code,{children:"session.close()"})," method. It's not recommended to keep a session open indefinitely as it can lead to memory leaks, as the session stores logs until it is closed."]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var o=n(7294);const t={},i=o.createContext(t);function a(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);