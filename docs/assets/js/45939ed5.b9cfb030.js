"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[969],{4691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(85893),o=t(11151);const s={},a="Sort",d={id:"concepts/database/sort",title:"Sort",description:"It is often desirable to order the results of a database query. The 'find' method has an orderBy parameter where you can specify a column for sorting. In your model, the static t field provides a reference to a representation of the database table associated with the model, and this representation includes a field corresponding to each column.",source:"@site/versioned_docs/version-1.2.0/05-concepts/06-database/08-sort.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/sort",permalink:"/concepts/database/sort",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/06-database/08-sort.md",tags:[],version:"1.2.0",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Relation queries",permalink:"/concepts/database/relation-queries"},next:{title:"Transactions",permalink:"/concepts/database/transactions"}},i={},c=[{value:"Sort on relations",id:"sort-on-relations",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sort",children:"Sort"}),"\n",(0,r.jsxs)(n.p,{children:["It is often desirable to order the results of a database query. The 'find' method has an ",(0,r.jsx)(n.code,{children:"orderBy"})," parameter where you can specify a column for sorting. In your model, the static ",(0,r.jsx)(n.code,{children:"t"})," field provides a reference to a representation of the database table associated with the model, and this representation includes a field corresponding to each column."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: Company.t.name,\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their name."}),"\n",(0,r.jsxs)(n.p,{children:["By default the order is set to ascending, this can be changed to descending by setting the param ",(0,r.jsx)(n.code,{children:"orderDecending: true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: Company.t.name,\n  orderDescending: true,\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their name in descending order."}),"\n",(0,r.jsxs)(n.p,{children:["To order by several different columns use ",(0,r.jsx)(n.code,{children:"orderByList"}),", note that this cannot be used in conjunction with ",(0,r.jsx)(n.code,{children:"orderBy"})," and ",(0,r.jsx)(n.code,{children:"orderDescending"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderByList: [\n    Order(column: Company.t.name, orderDescending: true), \n    Order(column: Company.t.id),\n  ],\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their name in descending order, and then by their id in ascending order."}),"\n",(0,r.jsx)(n.h2,{id:"sort-on-relations",children:"Sort on relations"}),"\n",(0,r.jsx)(n.p,{children:"To sort based on a field from a related model, use the chained field reference."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: Company.t.ceo.name,\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their CEO's name."}),"\n",(0,r.jsxs)(n.p,{children:["You can order results based on the count of a list relation (1",":n",")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: Company.t.employees.count(),\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all companies and sort them by the number of employees."}),"\n",(0,r.jsx)(n.p,{children:"The count used for sorting can also be filtered using a sub-filter."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: Company.t.employees.count(\n    (employee) => employee.role.equals('developer'),\n  ),\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:'In the example we fetch all companies and sort them by the number of employees with the role of "developer".'})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);