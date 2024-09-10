"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[24378],{60837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(85893),s=a(11151);const r={},n="Backward compatibility",i={id:"concepts/backward-compatibility",title:"Backward compatibility",description:"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions.",source:"@site/versioned_docs/version-0.9.21/04-concepts/12-backward-compatibility.md",sourceDirName:"04-concepts",slug:"/concepts/backward-compatibility",permalink:"/0.9.21/concepts/backward-compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.21/04-concepts/12-backward-compatibility.md",tags:[],version:"0.9.21",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web server",permalink:"/0.9.21/concepts/webserver"},next:{title:"Deploying to AWS",permalink:"/0.9.21/deployments/deploying-to-aws"}},d={},l=[];function c(e){const t={admonition:"admonition",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"backward-compatibility",children:"Backward compatibility"})}),"\n",(0,o.jsx)(t.p,{children:"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions."}),"\n",(0,o.jsx)(t.p,{children:"Following a simple set of rules, your server will stay compatible with older app versions:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Avoid changing parameter names in endpoint methods."})," In the REST API Serverpod generates, the parameters are passed by name. This means that changing the parameter names of the endpoint methods will break backward compatibility."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Do not delete endpoint methods or change their signature."})," Instead, add new methods if you must pass another set of parameters. Technically, you can add new named parameters if they are not required, but creating a new method may still feel cleaner."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Avoid changing or removing fields and types in the serialized classes."})," However, you are free to add new fields as long as they are nullable."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"If you are changing serialized objects with bindings to a database table, you will need to update the database structure manually. Future versions of Serverpod will assist with database migrations."})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>n});var o=a(67294);const s={},r=o.createContext(s);function n(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);