"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[56449],{39753:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"concepts/database/indexing","title":"Indexing","description":"For performance reasons, you may want to add indexes to your database tables. These are added in the YAML-files defining the serializable objects.","source":"@site/versioned_docs/version-2.2.0/06-concepts/06-database/04-indexing.md","sourceDirName":"06-concepts/06-database","slug":"/concepts/database/indexing","permalink":"/2.2.0/concepts/database/indexing","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.2.0/06-concepts/06-database/04-indexing.md","tags":[],"version":"2.2.0","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Relations with modules","permalink":"/2.2.0/concepts/database/relations/modules"},"next":{"title":"CRUD","permalink":"/2.2.0/concepts/database/crud"}}');var d=i(74848),a=i(28453);const t={},o="Indexing",r={},c=[{value:"Add an index",id:"add-an-index",level:3},{value:"Making fields unique",id:"making-fields-unique",level:3},{value:"Specifying index type",id:"specifying-index-type",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"indexing",children:"Indexing"})}),"\n",(0,d.jsx)(n.p,{children:"For performance reasons, you may want to add indexes to your database tables. These are added in the YAML-files defining the serializable objects."}),"\n",(0,d.jsx)(n.h3,{id:"add-an-index",children:"Add an index"}),"\n",(0,d.jsxs)(n.p,{children:["To add an index, add an ",(0,d.jsx)(n.code,{children:"indexes"})," section to the YAML-file. The ",(0,d.jsx)(n.code,{children:"indexes"})," section is a map where the key is the name of the index and the value is a map with the index details."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\nindexes:\n  company_name_idx:\n    fields: name\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"fields"})," keyword holds a comma-separated list of column names. These are the fields upon which the index is created. Note that the index can contain several fields."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n  foundedAt: DateTime\nindexes:\n  company_idx:\n    fields: name, foundedAt\n"})}),"\n",(0,d.jsx)(n.h3,{id:"making-fields-unique",children:"Making fields unique"}),"\n",(0,d.jsx)(n.p,{children:"Adding a unique index ensures that the value or combination of values stored in the fields are unique for the table. This can be useful for example if you want to make sure that no two companies have the same name."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\nindexes:\n  company_name_idx:\n    fields: name\n    unique: true\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"unique"})," keyword is a bool that can toggle the index to be unique, the default is set to false. If the ",(0,d.jsx)(n.code,{children:"unique"})," keyword is applied to a multi-column index, the index will be unique for the combination of the fields."]}),"\n",(0,d.jsx)(n.h3,{id:"specifying-index-type",children:"Specifying index type"}),"\n",(0,d.jsx)(n.p,{children:"It is possible to add a type key to specify the index type."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\nindexes:\n  company_name_idx:\n    fields: name\n    type: brin\n"})}),"\n",(0,d.jsxs)(n.p,{children:["If no type is specified the default is ",(0,d.jsx)(n.code,{children:"btree"}),". All ",(0,d.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/indexes-types.html",children:"PostgreSQL index types"})," are supported, ",(0,d.jsx)(n.code,{children:"btree"}),", ",(0,d.jsx)(n.code,{children:"hash"}),", ",(0,d.jsx)(n.code,{children:"gist"}),", ",(0,d.jsx)(n.code,{children:"spgist"}),", ",(0,d.jsx)(n.code,{children:"gin"}),", ",(0,d.jsx)(n.code,{children:"brin"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(96540);const d={},a=s.createContext(d);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);