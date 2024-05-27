"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9301],{77060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(85893),s=n(11151);const o={},r="Transactions",i={id:"concepts/database/transactions",title:"Transactions",description:"The essential point of a database transaction is that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all.",source:"@site/versioned_docs/version-2.0.0/05-concepts/06-database/08-transactions.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/transactions",permalink:"/concepts/database/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/06-database/08-transactions.md",tags:[],version:"2.0.0",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sort",permalink:"/concepts/database/sort"},next:{title:"Pagination",permalink:"/concepts/database/pagination"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsx)(t.p,{children:"The essential point of a database transaction is that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all."}),"\n",(0,a.jsxs)(t.p,{children:["Serverpod handles database transactions through the ",(0,a.jsx)(t.code,{children:"session.db.transaction"})," method. The transaction takes a method that performs any database queries or other operations and optionally returns a value."]}),"\n",(0,a.jsx)(t.p,{children:"Simply pass the transaction object to each database operation method to include them in the same atomic operation:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"var result = await session.db.transaction((transaction) async {\n  // Do some database queries here.\n  await Company.db.insertRow(session, company, transaction: transaction);\n  await Employee.db.insertRow(session, employee, transaction: transaction);\n\n  // Optionally return a value.\n  return true;\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the example we insert a company and an employee in the same transaction. If any of the operations fail, the entire transaction will be rolled back and no changes will be made to the database. If the transaction is successful, the return value will be ",(0,a.jsx)(t.code,{children:"true"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);