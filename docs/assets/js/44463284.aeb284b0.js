"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2917],{30615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(85893),a=t(11151);const o={},d="Models",i={id:"concepts/database/models",title:"Models",description:"It's possible to map serializable models to tables in your database. To do this, add the table key to your yaml file:",source:"@site/versioned_docs/version-1.2.0/05-concepts/06-database/02-models.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/models",permalink:"/1.2.0/concepts/database/models",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/06-database/02-models.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection",permalink:"/1.2.0/concepts/database/connection"},next:{title:"One-to-one",permalink:"/1.2.0/concepts/database/relations/one-to-one"}},r={},l=[{value:"Non persistent fields",id:"non-persistent-fields",level:3},{value:"Data representation",id:"data-representation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"models",children:"Models"}),"\n",(0,s.jsxs)(n.p,{children:["It's possible to map serializable models to tables in your database. To do this, add the ",(0,s.jsx)(n.code,{children:"table"})," key to your yaml file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"table"})," keyword is added to the model, the ",(0,s.jsx)(n.code,{children:"serverpod generate"})," command will generate new methods for ",(0,s.jsx)(n.a,{href:"crud",children:"interacting"})," with the database. The addition of the keyword will also be detected by the ",(0,s.jsx)(n.code,{children:"serverpod create-migration"})," command that will generate the necessary ",(0,s.jsx)(n.a,{href:"migrations",children:"migrations"})," needed to update the database."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["When you add a ",(0,s.jsx)(n.code,{children:"table"})," to a serializable class, Serverpod will automatically add an ",(0,s.jsx)(n.code,{children:"id"})," field of type ",(0,s.jsx)(n.code,{children:"int?"})," to the class. You should not define this field yourself. The ",(0,s.jsx)(n.code,{children:"id"})," is set when you interact with an object stored in the database."]})}),"\n",(0,s.jsx)(n.h3,{id:"non-persistent-fields",children:"Non persistent fields"}),"\n",(0,s.jsxs)(n.p,{children:["You can opt out of creating a column in the database for a specific field by using the ",(0,s.jsx)(n.code,{children:"!persist"})," keyword."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String, !persist \n"})}),"\n",(0,s.jsxs)(n.p,{children:["All fields are persisted by default and have an implicit ",(0,s.jsx)(n.code,{children:"persist"})," set on each field."]}),"\n",(0,s.jsx)(n.h3,{id:"data-representation",children:"Data representation"}),"\n",(0,s.jsxs)(n.p,{children:["Storing a field with a primitive / core dart type will be handled as its respective type. However, if you use a complex type, such as another model, a ",(0,s.jsx)(n.code,{children:"List"}),", or a ",(0,s.jsx)(n.code,{children:"Map"}),", these will be stored as a ",(0,s.jsx)(n.code,{children:"json"})," object in the database."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  address: Address # Stored as a json column\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This means that each row has its own copy of the nested object that needs to be updated individually. If you instead want to reference the same object from multiple different tables, you can use the ",(0,s.jsx)(n.code,{children:"relation"})," keyword."]}),"\n",(0,s.jsx)(n.p,{children:"This creates a database relation between two tables and always keeps the data in sync."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  address: Address?, relation\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For a complete guide on how to work with relations see the ",(0,s.jsx)(n.a,{href:"relations/one-to-one",children:"relation section"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var s=t(67294);const a={},o=s.createContext(a);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);