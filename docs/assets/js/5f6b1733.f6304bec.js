"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2544],{7180:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=o(5893),s=o(1151);const r={},n="Backward compatibility",i={id:"concepts/backward-compatibility",title:"Backward compatibility",description:"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions.",source:"@site/versioned_docs/version-1.1.1/05-concepts/14-backward-compatibility.md",sourceDirName:"05-concepts",slug:"/concepts/backward-compatibility",permalink:"/concepts/backward-compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/14-backward-compatibility.md",tags:[],version:"1.1.1",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web server",permalink:"/concepts/webserver"},next:{title:"Choosing deployment strategy",permalink:"/deployments/deployment-strategy"}},d={},l=[];function c(e){const t={admonition:"admonition",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"backward-compatibility",children:"Backward compatibility"}),"\n",(0,a.jsx)(t.p,{children:"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions."}),"\n",(0,a.jsx)(t.p,{children:"Following a simple set of rules, your server will stay compatible with older app versions:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Avoid changing parameter names in endpoint methods."})," In the REST API Serverpod generates, the parameters are passed by name. This means that changing the parameter names of the endpoint methods will break backward compatibility."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Do not delete endpoint methods or change their signature."})," Instead, add new methods if you must pass another set of parameters. Technically, you can add new named parameters if they are not required, but creating a new method may still feel cleaner."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Avoid changing or removing fields and types in the serialized classes."})," However, you are free to add new fields as long as they are nullable."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"If you are changing serialized objects with bindings to a database table, you will need to update the database structure manually. Future versions of Serverpod will assist with database migrations."})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>n});var a=o(7294);const s={},r=a.createContext(s);function n(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);