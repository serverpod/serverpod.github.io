"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9784],{602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var s=t(85893),a=t(11151);const r={},o="Sort",d={id:"concepts/database/sort",title:"Sort",description:"It is often desirable to order the results of a database query. The 'find' method has an orderBy parameter where you can specify a column for sorting. The parameter takes a callback as an argument that passes a model-specific table descriptor, also accessible through the t field on the model. The table descriptor represents the database table associated with the model and includes fields for each corresponding column. The callback is then used to specify the column to sort by.",source:"@site/docs/06-concepts/06-database/08-sort.md",sourceDirName:"06-concepts/06-database",slug:"/concepts/database/sort",permalink:"/next/concepts/database/sort",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/06-database/08-sort.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Relation queries",permalink:"/next/concepts/database/relation-queries"},next:{title:"Transactions",permalink:"/next/concepts/database/transactions"}},c={},i=[{value:"Sort on relations",id:"sort-on-relations",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sort",children:"Sort"}),"\n",(0,s.jsxs)(n.p,{children:["It is often desirable to order the results of a database query. The 'find' method has an ",(0,s.jsx)(n.code,{children:"orderBy"})," parameter where you can specify a column for sorting. The parameter takes a callback as an argument that passes a model-specific table descriptor, also accessible through the ",(0,s.jsx)(n.code,{children:"t"})," field on the model. The table descriptor represents the database table associated with the model and includes fields for each corresponding column. The callback is then used to specify the column to sort by."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: (t) => t.name,\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their name."}),"\n",(0,s.jsxs)(n.p,{children:["By default the order is set to ascending, this can be changed to descending by setting the param ",(0,s.jsx)(n.code,{children:"orderDecending: true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: (t) => t.name,\n  orderDescending: true,\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their name in descending order."}),"\n",(0,s.jsxs)(n.p,{children:["To order by several different columns use ",(0,s.jsx)(n.code,{children:"orderByList"}),", note that this cannot be used in conjunction with ",(0,s.jsx)(n.code,{children:"orderBy"})," and ",(0,s.jsx)(n.code,{children:"orderDescending"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderByList: (t) => [\n    Order(column: t.name, orderDescending: true), \n    Order(column: t.id),\n  ],\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their name in descending order, and then by their id in ascending order."}),"\n",(0,s.jsx)(n.h2,{id:"sort-on-relations",children:"Sort on relations"}),"\n",(0,s.jsx)(n.p,{children:"To sort based on a field from a related model, use the chained field reference."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: (t) => t.ceo.name,\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the example we fetch all companies and sort them by their CEO's name."}),"\n",(0,s.jsxs)(n.p,{children:["You can order results based on the count of a list relation (1",":n",")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: (t) => t.employees.count(),\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the example we fetch all companies and sort them by the number of employees."}),"\n",(0,s.jsx)(n.p,{children:"The count used for sorting can also be filtered using a sub-filter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  orderBy: (t) => t.employees.count(\n    (employee) => employee.role.equals('developer'),\n  ),\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:'In the example we fetch all companies and sort them by the number of employees with the role of "developer".'})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var s=t(67294);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);