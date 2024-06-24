"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4857],{95365:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(85893),o=s(11151);const a={},n="Backward compatibility",i={id:"concepts/backward-compatibility",title:"Backward compatibility",description:"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions.",source:"@site/versioned_docs/version-2.0.0/05-concepts/15-backward-compatibility.md",sourceDirName:"05-concepts",slug:"/concepts/backward-compatibility",permalink:"/concepts/backward-compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/15-backward-compatibility.md",tags:[],version:"2.0.0",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streams and messaging",permalink:"/concepts/streams"},next:{title:"Web server",permalink:"/concepts/webserver"}},c={},d=[];function l(e){const t={h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"backward-compatibility",children:"Backward compatibility"}),"\n",(0,r.jsx)(t.p,{children:"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions."}),"\n",(0,r.jsx)(t.p,{children:"Following a simple set of rules, your server will stay compatible with older app versions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Avoid changing parameter names in endpoint methods."})," In the REST API Serverpod generates, the parameters are passed by name. This means that changing the parameter names of the endpoint methods will break backward compatibility."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Do not delete endpoint methods or change their signature."})," Instead, add new methods if you must pass another set of parameters. Technically, you can add new named parameters if they are not required, but creating a new method may still feel cleaner."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Avoid changing or removing fields and types in the serialized classes."})," However, you are free to add new fields as long as they are nullable."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>n});var r=s(67294);const o={},a=r.createContext(o);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);