"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2372],{586:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(5893),o=s(1151);const i={},r="Serialization",a={id:"concepts/serialization",title:"Serialization",description:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database. The structure for the classes is defined in yaml-files in the protocol directory. Run serverpod generate to build the Dart code for the classes and make them accessible to both the server and client.",source:"@site/versioned_docs/version-0.9.7/03-concepts/02-serialization.md",sourceDirName:"03-concepts",slug:"/concepts/serialization",permalink:"/0.9.7/concepts/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.7/03-concepts/02-serialization.md",tags:[],version:"0.9.7",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with endpoints",permalink:"/0.9.7/concepts/working-with-endpoints"},next:{title:"Database communication",permalink:"/0.9.7/concepts/database-communication"}},c={},d=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"serialization",children:"Serialization"}),"\n",(0,n.jsxs)(t.p,{children:["Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database. The structure for the classes is defined in yaml-files in the ",(0,n.jsx)(t.code,{children:"protocol"})," directory. Run ",(0,n.jsx)(t.code,{children:"serverpod generate"})," to build the Dart code for the classes and make them accessible to both the server and client."]}),"\n",(0,n.jsx)(t.p,{children:"Here is a simple example of a yaml-file defining a serializable class:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Supported types are ",(0,n.jsx)(t.code,{children:"bool"}),", ",(0,n.jsx)(t.code,{children:"int"}),", ",(0,n.jsx)(t.code,{children:"double"}),", ",(0,n.jsx)(t.code,{children:"String"}),", ",(0,n.jsx)(t.code,{children:"DateTime"}),", and other serializable classes. You can also use lists of objects. Null safety is supported. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["There is not yet support for ",(0,n.jsx)(t.code,{children:"Map"})," or lists of lists. These are planned to be added in a future version."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(7294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);