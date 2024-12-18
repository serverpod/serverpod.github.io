"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[75358],{68046:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"concepts/backward-compatibility","title":"Backward compatibility","description":"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions.","source":"@site/versioned_docs/version-2.2.0/06-concepts/16-backward-compatibility.md","sourceDirName":"06-concepts","slug":"/concepts/backward-compatibility","permalink":"/2.2.0/concepts/backward-compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.2.0/06-concepts/16-backward-compatibility.md","tags":[],"version":"2.2.0","sidebarPosition":16,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Streams and messaging","permalink":"/2.2.0/concepts/streams"},"next":{"title":"Web server","permalink":"/2.2.0/concepts/webserver"}}');var a=s(74848),o=s(28453);const n={},i="Backward compatibility",d={},c=[];function l(e){const t={h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"backward-compatibility",children:"Backward compatibility"})}),"\n",(0,a.jsx)(t.p,{children:"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions."}),"\n",(0,a.jsx)(t.p,{children:"Following a simple set of rules, your server will stay compatible with older app versions:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Avoid changing parameter names in endpoint methods."})," In the REST API Serverpod generates, the parameters are passed by name. This means that changing the parameter names of the endpoint methods will break backward compatibility."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Do not delete endpoint methods or change their signature."})," Instead, add new methods if you must pass another set of parameters. Technically, you can add new named parameters if they are not required, but creating a new method may still feel cleaner."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Avoid changing or removing fields and types in the serialized classes."})," However, you are free to add new fields as long as they are nullable."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>i});var r=s(96540);const a={},o=r.createContext(a);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);