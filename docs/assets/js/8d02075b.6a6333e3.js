"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[503],{62125:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=n(85893),a=n(11151);const t={},i="Raw Access",o={id:"concepts/database/raw-access",title:"Raw Access",description:"The library provides methods to execute raw SQL queries directly on the database for advanced scenarios.",source:"@site/versioned_docs/version-2.0.0/05-concepts/06-database/10-raw-access.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/raw-access",permalink:"/concepts/database/raw-access",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/06-database/10-raw-access.md",tags:[],version:"2.0.0",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/concepts/database/pagination"},next:{title:"Migrations",permalink:"/concepts/database/migrations"}},c={},d=[{value:"<code>unsafeQuery</code>",id:"unsafequery",level:2},{value:"<code>unsafeExecute</code>",id:"unsafeexecute",level:2},{value:"<code>unsafeSimpleQuery</code>",id:"unsafesimplequery",level:2},{value:"<code>unsafeSimpleExecute</code>",id:"unsafesimpleexecute",level:2},{value:"Query Parameters",id:"query-parameters",level:2}];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"raw-access",children:"Raw Access"})}),"\n",(0,r.jsx)(s.p,{children:"The library provides methods to execute raw SQL queries directly on the database for advanced scenarios."}),"\n",(0,r.jsx)(s.h2,{id:"unsafequery",children:(0,r.jsx)(s.code,{children:"unsafeQuery"})}),"\n",(0,r.jsxs)(s.p,{children:["Executes a single SQL query and returns a ",(0,r.jsx)(s.code,{children:"DatabaseResult"})," containing the results. This method uses the extended query protocol, allowing for parameter binding to prevent SQL injection."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"DatabaseResult result = await session.db.unsafeQuery(\n  r'SELECT * FROM mytable WHERE id = @id', \n  parameters: QueryParameters.named({'id': 1}),\n);\n"})}),"\n",(0,r.jsx)(s.h2,{id:"unsafeexecute",children:(0,r.jsx)(s.code,{children:"unsafeExecute"})}),"\n",(0,r.jsxs)(s.p,{children:["Executes a single SQL query without returning any results. Use this for statements that modify data, such as ",(0,r.jsx)(s.code,{children:"INSERT"}),", ",(0,r.jsx)(s.code,{children:"UPDATE"}),", or ",(0,r.jsx)(s.code,{children:"DELETE"}),". Returns the number of rows affected."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"int result = await session.db.unsafeExecute(\n  r'DELETE FROM mytable WHERE id = @id',\n  parameters: QueryParameters.named({'id': 1}),\n);\n"})}),"\n",(0,r.jsx)(s.h2,{id:"unsafesimplequery",children:(0,r.jsx)(s.code,{children:"unsafeSimpleQuery"})}),"\n",(0,r.jsxs)(s.p,{children:["Similar to ",(0,r.jsx)(s.code,{children:"unsafeQuery"}),", but uses the simple query protocol. This protocol does not support parameter binding, making it more susceptible to SQL injection. ",(0,r.jsx)(s.strong,{children:"Use with extreme caution and only when absolutely necessary."})]}),"\n",(0,r.jsx)(s.p,{children:"Simple query mode is suitable for:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Queries containing multiple statements."}),"\n",(0,r.jsx)(s.li,{children:"Situations where the extended query protocol is not available (e.g., replication mode or with proxies like PGBouncer)."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"  DatabaseResult result = await session.db.unsafeSimpleQuery(\n      r'SELECT * FROM mytable WHERE id = 1; SELECT * FROM othertable;'\n  );\n"})}),"\n",(0,r.jsx)(s.h2,{id:"unsafesimpleexecute",children:(0,r.jsx)(s.code,{children:"unsafeSimpleExecute"})}),"\n",(0,r.jsxs)(s.p,{children:["Similar to ",(0,r.jsx)(s.code,{children:"unsafeExecute"}),", but uses the simple query protocol. It does not return any results. ",(0,r.jsx)(s.strong,{children:"Use with extreme caution and only when absolutely necessary."})]}),"\n",(0,r.jsxs)(s.p,{children:["Simple query mode is suitable for the same scenarios as ",(0,r.jsx)(s.code,{children:"unsafeSimpleQuery"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"  int result = await session.db.unsafeSimpleExecute(\n      r'DELETE FROM mytable WHERE id = 1; DELETE FROM othertable;'\n  );\n"})}),"\n",(0,r.jsx)(s.h2,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,r.jsx)(s.p,{children:"To protect against SQL injection attacks, always use query parameters when passing values into raw SQL queries. The library provides two types of query parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Named Parameters:"})," Use ",(0,r.jsx)(s.code,{children:"@"})," to denote named parameters in your query and pass a ",(0,r.jsx)(s.code,{children:"Map"})," of parameter names and values."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Positional Parameters:"})," Use ",(0,r.jsx)(s.code,{children:"$1"}),", ",(0,r.jsx)(s.code,{children:"$2"}),", etc., to denote positional parameters and pass a ",(0,r.jsx)(s.code,{children:"List"})," of parameter values in the correct order."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"// Named parameters\nvar result = await db.unsafeQuery(\n  r'SELECT id FROM apparel WHERE color = @color AND size = @size',\n  QueryParameters.named({\n    'color': 'green',\n    'size': 'XL',\n  }));\n\n// Positional parameters\nvar result = await db.unsafeQuery(\n  r'SELECT id FROM apparel WHERE color = $1 AND size = $2',\n  QueryParameters.positional(['green', 'XL']),\n);\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:["Always sanitize your input when using raw query methods. For the ",(0,r.jsx)(s.code,{children:"unsafeQuery"})," and ",(0,r.jsx)(s.code,{children:"unsafeExecute"})," methods, use query parameters to prevent SQL injection. Avoid using ",(0,r.jsx)(s.code,{children:"unsafeSimpleQuery"})," and ",(0,r.jsx)(s.code,{children:"unsafeSimpleExecute"})," unless the simple query protocol is strictly required."]})})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var r=n(67294);const a={},t=r.createContext(a);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);