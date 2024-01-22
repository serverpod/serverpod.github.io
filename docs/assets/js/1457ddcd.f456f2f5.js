"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2733],{98903:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(85893),t=s(11151);const r={},a="Pagination",o={id:"concepts/database/pagination",title:"Pagination",description:"Serverpod provides built-in support for pagination to help manage large datasets, allowing you to retrieve data in smaller chunks. Pagination is achieved using the limit and offset parameters.",source:"@site/versioned_docs/version-1.2.0/05-concepts/06-database/09-pagination.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/pagination",permalink:"/concepts/database/pagination",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/06-database/09-pagination.md",tags:[],version:"1.2.0",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/concepts/database/transactions"},next:{title:"Raw access",permalink:"/concepts/database/raw-access"}},d={},c=[{value:"Limit",id:"limit",level:2},{value:"Offset",id:"offset",level:2},{value:"Using Limit and Offset for Pagination",id:"using-limit-and-offset-for-pagination",level:2},{value:"Tips",id:"tips",level:3},{value:"Cursor-based Pagination",id:"cursor-based-pagination",level:2},{value:"How It Works",id:"how-it-works",level:3},{value:"Implementing Cursor-based Pagination",id:"implementing-cursor-based-pagination",level:3},{value:"Tips",id:"tips-1",level:3}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pagination",children:"Pagination"}),"\n",(0,i.jsxs)(n.p,{children:["Serverpod provides built-in support for pagination to help manage large datasets, allowing you to retrieve data in smaller chunks. Pagination is achieved using the ",(0,i.jsx)(n.code,{children:"limit"})," and ",(0,i.jsx)(n.code,{children:"offset"})," parameters."]}),"\n",(0,i.jsx)(n.h2,{id:"limit",children:"Limit"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"limit"})," parameter specifies the maximum number of records to return from the query. This is equivalent to the number of rows on a page."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  limit: 10,\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the example we fetch the first 10 companies."}),"\n",(0,i.jsx)(n.h2,{id:"offset",children:"Offset"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"offset"})," parameter determines the starting point from which to retrieve records. It essentially skips the first ",(0,i.jsx)(n.code,{children:"n"})," records."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  limit: 10,\n  offset: 30,\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the example we skip the first 30 rows and fetch the 31st to 40th company."}),"\n",(0,i.jsx)(n.h2,{id:"using-limit-and-offset-for-pagination",children:"Using Limit and Offset for Pagination"}),"\n",(0,i.jsxs)(n.p,{children:["Together, ",(0,i.jsx)(n.code,{children:"limit"})," and ",(0,i.jsx)(n.code,{children:"offset"})," can be used to implement pagination."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"int page = 3;\nint companiesPerPage = 10;\n\nvar companies = await Company.db.find(\n  session,\n  orderBy: (t) => t.id,\n  limit: companiesPerPage,\n  offset: (page - 1) * companiesPerPage,\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the example we fetch the third page of companies, with 10 companies per page."}),"\n",(0,i.jsx)(n.h3,{id:"tips",children:"Tips"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance"}),": Be aware that while ",(0,i.jsx)(n.code,{children:"offset"})," can help in pagination, it may not be the most efficient way for very large datasets. Using an indexed column to filter results can sometimes be more performant."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consistency"}),": Due to possible data changes between paginated requests (like additions or deletions), the order of results might vary. It's recommended to use an ",(0,i.jsx)(n.code,{children:"orderBy"})," parameter to ensure consistency across paginated results."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Page Numbering"}),": Page numbers usually start from 1. Adjust the offset calculation accordingly."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cursor-based-pagination",children:"Cursor-based Pagination"}),"\n",(0,i.jsx)(n.p,{children:"A limit-offset pagination may not be the best solution if the table is changed frequently and rows are added or removed between requests."}),"\n",(0,i.jsxs)(n.p,{children:["Cursor-based pagination is an alternative method to the traditional limit-offset pagination. Instead of using an arbitrary offset to skip records, cursor-based pagination uses a unique record identifier (a ",(0,i.jsx)(n.em,{children:"cursor"}),") to mark the starting or ending point of a dataset. This approach is particularly beneficial for large datasets as it offers consistent and efficient paginated results, even if the data is being updated frequently."]}),"\n",(0,i.jsx)(n.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(n.p,{children:["In cursor-based pagination, the client provides a cursor as a reference point, and the server returns data relative to that cursor. This cursor is usually an ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"implementing-cursor-based-pagination",children:"Implementing Cursor-based Pagination"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Initial Request"}),":\nFor the initial request, where no cursor is provided, retrieve the first ",(0,i.jsx)(n.code,{children:"n"})," records:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"int recordsPerPage = 10;\n\nvar companies = await Company.db.find(\n  session,\n  orderBy: (t) => t.id,\n  limit: recordsPerPage,\n);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Subsequent Requests"}),":\nFor the subsequent requests, use the cursor (for example, the last ",(0,i.jsx)(n.code,{children:"id"})," from the previous result) to fetch the next set of records:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"int cursor = lastCompanyIdFromPreviousPage; // This is typically sent by the client\n\nvar companies = await Company.db.find(\n  session,\n  where: Company.t.id > cursor,\n  orderBy: (t) => t.id,\n  limit: recordsPerPage,\n);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returning the Cursor"}),":\nWhen returning data to the client, also return the cursor for the next page."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"return {\n  'data': companies,\n  'nextCursor': companies.last.id,\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tips-1",children:"Tips"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Choosing a Cursor"}),": While IDs are commonly used as cursors, timestamps or other unique, sequentially ordered fields can also serve as effective cursors."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backward Pagination"}),": To implement backward pagination, use the first item from the current page as the cursor and adjust the query accordingly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Combining with Sorting"}),": Ensure the field used as a cursor aligns with the sorting order. For instance, if you're sorting data by a timestamp in descending order, the cursor should also be based on the timestamp."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"End of Data"}),": If the returned data contains fewer items than the requested limit, it indicates that you've reached the end of the dataset."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(67294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);