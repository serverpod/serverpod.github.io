"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[76372],{36890:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"concepts/serialization","title":"Serialization","description":"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database. The structure for the classes is defined in yaml-files in the protocol directory. Run serverpod generate to build the Dart code for the classes and make them accessible to both the server and client.","source":"@site/versioned_docs/version-0.9.8/03-concepts/02-serialization.md","sourceDirName":"03-concepts","slug":"/concepts/serialization","permalink":"/0.9.8/concepts/serialization","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.8/03-concepts/02-serialization.md","tags":[],"version":"0.9.8","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Working with endpoints","permalink":"/0.9.8/concepts/working-with-endpoints"},"next":{"title":"Database communication","permalink":"/0.9.8/concepts/database-communication"}}');var o=s(74848),i=s(28453);const r={},a="Serialization",c={},d=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"serialization",children:"Serialization"})}),"\n",(0,o.jsxs)(t.p,{children:["Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database. The structure for the classes is defined in yaml-files in the ",(0,o.jsx)(t.code,{children:"protocol"})," directory. Run ",(0,o.jsx)(t.code,{children:"serverpod generate"})," to build the Dart code for the classes and make them accessible to both the server and client."]}),"\n",(0,o.jsx)(t.p,{children:"Here is a simple example of a yaml-file defining a serializable class:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Supported types are ",(0,o.jsx)(t.code,{children:"bool"}),", ",(0,o.jsx)(t.code,{children:"int"}),", ",(0,o.jsx)(t.code,{children:"double"}),", ",(0,o.jsx)(t.code,{children:"String"}),", ",(0,o.jsx)(t.code,{children:"DateTime"}),", and other serializable classes. You can also use lists of objects. Null safety is supported. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["There is not yet support for ",(0,o.jsx)(t.code,{children:"Map"})," or lists of lists. These are planned to be added in a future version."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);