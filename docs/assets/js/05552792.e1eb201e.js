"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5754],{37633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(85893),r=n(11151);const s={},d="Upgrade to 2.0",a={id:"upgrading/upgrade-to-two",title:"Upgrade to 2.0",description:"Changes to the Session Object",source:"@site/docs/12-upgrading/01-upgrade-to-two.md",sourceDirName:"12-upgrading",slug:"/upgrading/upgrade-to-two",permalink:"/next/upgrading/upgrade-to-two",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/12-upgrading/01-upgrade-to-two.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/next/contribute"},next:{title:"Upgrade to 1.2",permalink:"/next/upgrading/upgrade-to-one-point-two"}},i={},c=[{value:"Changes to the Session Object",id:"changes-to-the-session-object",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"upgrade-to-20",children:"Upgrade to 2.0"}),"\n",(0,o.jsx)(t.h2,{id:"changes-to-the-session-object",children:"Changes to the Session Object"}),"\n",(0,o.jsxs)(t.p,{children:["With Serverpod 2.0, we have removed the deprecated legacy database layer from the ",(0,o.jsx)(t.code,{children:"Session"})," object. The ",(0,o.jsx)(t.code,{children:"Session"})," object now incorporates the new database layer, accessed via the ",(0,o.jsx)(t.code,{children:"dbNext"})," field in Serverpod 1.2, under the ",(0,o.jsx)(t.code,{children:"db"})," field."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"session.dbNext.find(...);\n"})}),"\n",(0,o.jsx)(t.p,{children:"becomes"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"session.db.find(...);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>d});var o=n(67294);const r={},s=o.createContext(r);function d(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);