"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5836],{66796:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(85893),o=n(11151);const i={},a="Sessions",c={id:"concepts/sessions",title:"Sessions",description:"The Session object provides information about the current context in a method call in Serverpod. It provides access to the database, caching, authentication, data storage, and messaging within the server. It will also contain information about the HTTP request object.",source:"@site/docs/05-concepts/05-sessions.md",sourceDirName:"05-concepts",slug:"/concepts/sessions",permalink:"/next/concepts/sessions",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/05-sessions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error handling and exceptions",permalink:"/next/concepts/exceptions"},next:{title:"Connection",permalink:"/next/concepts/database/connection"}},r={},d=[{value:"Creating sessions",id:"creating-sessions",level:2}];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"sessions",children:"Sessions"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Session"})," object provides information about the current context in a method call in Serverpod. It provides access to the database, caching, authentication, data storage, and messaging within the server. It will also contain information about the HTTP request object."]}),"\n",(0,t.jsxs)(s.p,{children:["If you need additional information about a call, you may need to cast the Session to one of its subclasses, e.g., ",(0,t.jsx)(s.code,{children:"MethodCallSession"})," or ",(0,t.jsx)(s.code,{children:"StreamingSession"}),". The ",(0,t.jsx)(s.code,{children:"MethodCallSession"})," object provides additional properties, such as the name of the endpoint and method and the underlying ",(0,t.jsx)(s.code,{children:"HttpRequest"})," object."]}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["You can use the Session object to access the IP address of the client calling a method. Serverpod includes an extension on ",(0,t.jsx)(s.code,{children:"HttpRequest"})," that allows you to access the IP address even if your server is running behind a load balancer."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-dart",children:"session as MethodCallSession;\nvar ipAddress = session.httpRequest.remoteIpAddress;\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"creating-sessions",children:"Creating sessions"}),"\n",(0,t.jsxs)(s.p,{children:["In most cases, Serverpod manages the life cycle of the Session objects for you. A session is created for a call or a streaming connection and is disposed of when the call has been completed. In rare cases, you may want to create a session manually. For instance, if you are making a database call outside the scope of a method or a future call. In these cases, you can create a new session with the ",(0,t.jsx)(s.code,{children:"createSession"})," method of the ",(0,t.jsx)(s.code,{children:"Serverpod"})," singleton. You can access the singleton by the static ",(0,t.jsx)(s.code,{children:"Serverpod.instance"})," field. If you create a new session, you are also responsible for closing it using the ",(0,t.jsx)(s.code,{children:"session.close()"})," method."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"It's not recommended to keep a session open indefinitely as it can lead to memory leaks, as the session stores logs until it is closed. It's inexpensive to create a new session, so keep them short."})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var t=n(67294);const o={},i=t.createContext(o);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);