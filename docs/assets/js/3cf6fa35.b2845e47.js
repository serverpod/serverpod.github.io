"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[285],{58809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(85893),s=t(11151);const a={},i="Relations with modules",r={id:"concepts/database/relations/modules",title:"Relations with modules",description:"Serverpod modules usually come with predefined tables and data structures. Sometimes it can be useful to extend them with your data structures by creating a relation to the module tables. Relations to modules come with some restrictions since you do not own the definition of the table, you cannot change the table structure of a module table.",source:"@site/docs/06-concepts/06-database/03-relations/06-modules.md",sourceDirName:"06-concepts/06-database/03-relations",slug:"/concepts/database/relations/modules",permalink:"/next/concepts/database/relations/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/06-database/03-relations/06-modules.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Referential actions",permalink:"/next/concepts/database/relations/referential-actions"},next:{title:"Indexing",permalink:"/next/concepts/database/indexing"}},l={},d=[{value:"Advanced example",id:"advanced-example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"relations-with-modules",children:"Relations with modules"}),"\n",(0,o.jsxs)(n.p,{children:["Serverpod ",(0,o.jsx)(n.a,{href:"concepts/modules",children:"modules"})," usually come with predefined tables and data structures. Sometimes it can be useful to extend them with your data structures by creating a relation to the module tables. Relations to modules come with some restrictions since you do not own the definition of the table, you cannot change the table structure of a module table."]}),"\n",(0,o.jsx)(n.p,{children:'Since you do not directly control the models inside the modules it is recommended to create a so-called "bridge" table/model linking the module\'s model to your own. This can be done in the same way we normally would setup a one-to-one relation.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: User\ntable: user\nfields:\n  userInfo: module:auth:UserInfo?, relation\n  age: int\nindexes:\n  user_info_id_unique_idx:\n    fields: userInfoId\n    unique: true\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or by referencing the table name if you only want to access the id."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: User\ntable: user\nfields:\n  userInfoId: int, relation(parent=serverpod_user_info)\n  age: int\nindexes:\n  user_info_id_unique_idx:\n    fields: userInfoId\n    unique: true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It is now possible to make any other relation to our model as described in ",(0,o.jsx)(n.a,{href:"./one-to-one",children:"one-to-one"}),", ",(0,o.jsx)(n.a,{href:"./one-to-many",children:"one-to-many"}),", ",(0,o.jsx)(n.a,{href:"./many-to-many",children:"many-to-many"})," and ",(0,o.jsx)(n.a,{href:"./self-relations",children:"self-relations"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"advanced-example",children:"Advanced example"}),"\n",(0,o.jsx)(n.p,{children:'A one-to-many relation with the "bridge" table could look like this.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: User\ntable: user\nfields:\n  userInfo: module:auth:UserInfo?, relation\n  age: int\n  company: Company?, relation(name=company_employee)\nindexes:\n  user_info_id_unique_idx:\n    fields: userInfoId\n    unique: true\n  company_unique_idx:\n    fields: companyId\n    unique: true\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n  employees: List<User>?, relation(name=company_employee)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);