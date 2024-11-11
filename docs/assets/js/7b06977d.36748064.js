"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6615],{47286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"concepts/database/transactions","title":"Transactions","description":"The essential point of a database transaction is that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all.","source":"@site/docs/06-concepts/06-database/08-transactions.md","sourceDirName":"06-concepts/06-database","slug":"/concepts/database/transactions","permalink":"/next/concepts/database/transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/06-database/08-transactions.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Sort","permalink":"/next/concepts/database/sort"},"next":{"title":"Pagination","permalink":"/next/concepts/database/pagination"}}');var s=n(74848),o=n(28453);const r={},i="Transactions",c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"transactions",children:"Transactions"})}),"\n",(0,s.jsx)(t.p,{children:"The essential point of a database transaction is that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all."}),"\n",(0,s.jsxs)(t.p,{children:["Serverpod handles database transactions through the ",(0,s.jsx)(t.code,{children:"session.db.transaction"})," method. The transaction takes a method that performs any database queries or other operations and optionally returns a value."]}),"\n",(0,s.jsx)(t.p,{children:"Simply pass the transaction object to each database operation method to include them in the same atomic operation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"var result = await session.db.transaction((transaction) async {\n  // Do some database queries here.\n  await Company.db.insertRow(session, company, transaction: transaction);\n  await Employee.db.insertRow(session, employee, transaction: transaction);\n\n  // Optionally return a value.\n  return true;\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the example we insert a company and an employee in the same transaction. If any of the operations fail, the entire transaction will be rolled back and no changes will be made to the database. If the transaction is successful, the return value will be ",(0,s.jsx)(t.code,{children:"true"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(96540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);