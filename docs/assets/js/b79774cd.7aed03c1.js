"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2284],{28250:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(85893),t=i(11151);const a={},d="CRUD",r={id:"concepts/database/crud",title:"CRUD",description:"To interact with the database you need a Session object as this object holds the connection to the database. All CRUD operations are accessible via the session object and the generated models. The methods can be found under the static db field in your generated models.",source:"@site/docs/05-concepts/06-database/05-crud.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/crud",permalink:"/next/concepts/database/crud",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/06-database/05-crud.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Indexing",permalink:"/next/concepts/database/indexing"},next:{title:"Filter",permalink:"/next/concepts/database/filter"}},o={},l=[{value:"Create",id:"create",level:2},{value:"Inserting a single row",id:"inserting-a-single-row",level:3},{value:"Inserting several rows",id:"inserting-several-rows",level:3},{value:"Read",id:"read",level:2},{value:"Finding by id",id:"finding-by-id",level:3},{value:"Finding a single row",id:"finding-a-single-row",level:3},{value:"Finding multiple rows",id:"finding-multiple-rows",level:3},{value:"Update",id:"update",level:2},{value:"Update a single row",id:"update-a-single-row",level:3},{value:"Update several rows",id:"update-several-rows",level:3},{value:"Delete",id:"delete",level:2},{value:"Delete a single row",id:"delete-a-single-row",level:3},{value:"Delete several rows",id:"delete-several-rows",level:3},{value:"Delete by filter",id:"delete-by-filter",level:3},{value:"Count",id:"count",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"crud",children:"CRUD"}),"\n",(0,s.jsxs)(n.p,{children:["To interact with the database you need a ",(0,s.jsx)(n.a,{href:"../sessions",children:(0,s.jsx)(n.code,{children:"Session"})})," object as this object holds the connection to the database. All CRUD operations are accessible via the session object and the generated models. The methods can be found under the static ",(0,s.jsx)(n.code,{children:"db"})," field in your generated models."]}),"\n",(0,s.jsx)(n.p,{children:"For the following examples we will use this model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can also access the database methods through the session object under the field ",(0,s.jsx)(n.code,{children:"db"}),". However, this is typically only recommended if you want to do custom queries where you explicitly type out your SQL queries."]})}),"\n",(0,s.jsx)(n.h2,{id:"create",children:"Create"}),"\n",(0,s.jsx)(n.p,{children:"There are two ways to create a new row in the database."}),"\n",(0,s.jsx)(n.h3,{id:"inserting-a-single-row",children:"Inserting a single row"}),"\n",(0,s.jsxs)(n.p,{children:["Inserting a single row to the database is done by calling the ",(0,s.jsx)(n.code,{children:"insertRow"})," method on your generated model. The method will return the entire company object with the ",(0,s.jsx)(n.code,{children:"id"})," field set."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var row = Company(name: 'Serverpod');\nvar company = await Company.db.insertRow(session, row);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"inserting-several-rows",children:"Inserting several rows"}),"\n",(0,s.jsxs)(n.p,{children:["Inserting several rows in a batch operation is done by calling the ",(0,s.jsx)(n.code,{children:"insert"})," method. This is an atomic operation, meaning no entries will be created if any entry fails to be created."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var rows = [Company(name: 'Serverpod'), Company(name: 'Google')];\nvar companies = await Company.db.insert(session, rows);\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In previous versions of Serverpod the ",(0,s.jsx)(n.code,{children:"insert"})," method mutated the input object by setting the ",(0,s.jsx)(n.code,{children:"id"})," field. In the example above the input variable remains unmodified after the ",(0,s.jsx)(n.code,{children:"insert"}),"/",(0,s.jsx)(n.code,{children:"insertRow"})," call."]})}),"\n",(0,s.jsx)(n.h2,{id:"read",children:"Read"}),"\n",(0,s.jsx)(n.p,{children:"There are three different read operations available."}),"\n",(0,s.jsx)(n.h3,{id:"finding-by-id",children:"Finding by id"}),"\n",(0,s.jsxs)(n.p,{children:["You can retrieve a single row by its ",(0,s.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This operation either returns the model or ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"finding-a-single-row",children:"Finding a single row"}),"\n",(0,s.jsx)(n.p,{children:"You can find a single row using an expression."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findRow(\n  session,\n  where: (t) => t.name.equals('Serverpod'),\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This operation returns the first model matching the filtering criteria or ",(0,s.jsx)(n.code,{children:"null"}),". See ",(0,s.jsx)(n.a,{href:"filter",children:"filter"})," and ",(0,s.jsx)(n.a,{href:"sort",children:"sort"})," for all filter operations."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Note that ordering of the entries is important here as it will return the fist row returned by the database query."})}),"\n",(0,s.jsx)(n.h3,{id:"finding-multiple-rows",children:"Finding multiple rows"}),"\n",(0,s.jsx)(n.p,{children:"To find multiple rows, use the same principle as for finding a single row."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  where: (t) => t.id < 100,\n  limit 50,\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This operation returns a ",(0,s.jsx)(n.code,{children:"List"})," of your models matching the filtering criteria."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"filter",children:"filter"})," and ",(0,s.jsx)(n.a,{href:"sort",children:"sort"})," for all filter and sorting operations and ",(0,s.jsx)(n.a,{href:"pagination",children:"pagination"})," for how to paginate the result."]}),"\n",(0,s.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,s.jsx)(n.p,{children:"There are two update operations available."}),"\n",(0,s.jsx)(n.h3,{id:"update-a-single-row",children:"Update a single row"}),"\n",(0,s.jsxs)(n.p,{children:["To update a single row, use the ",(0,s.jsx)(n.code,{children:"updateRow"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId); // Fetched company has its id set \ncompany.name = 'New name';\nvar updatedCompany = await Company.db.updateRow(company);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The object that you update must have its ",(0,s.jsx)(n.code,{children:"id"})," set to a non-",(0,s.jsx)(n.code,{children:"null"})," value and the id needs to exist on a row in the database. The ",(0,s.jsx)(n.code,{children:"updateRow"})," method returns the updated object."]}),"\n",(0,s.jsx)(n.h3,{id:"update-several-rows",children:"Update several rows"}),"\n",(0,s.jsxs)(n.p,{children:["To batch update several rows use the ",(0,s.jsx)(n.code,{children:"update"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(session);\ncompanies = companies.map((c) => c.copyWith(name: 'New name')).toList();\nvar updatedCompanies = await Company.db.update(session, companies);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is an atomic operation, meaning no entries will be updated if any entry fails to be updated. The ",(0,s.jsx)(n.code,{children:"update"})," method returns a ",(0,s.jsx)(n.code,{children:"List"})," of the updated objects."]}),"\n",(0,s.jsx)(n.h2,{id:"delete",children:"Delete"}),"\n",(0,s.jsx)(n.p,{children:"Deleting rows from the database is done in a similar way to updating rows. However, there are three delete operations available."}),"\n",(0,s.jsx)(n.h3,{id:"delete-a-single-row",children:"Delete a single row"}),"\n",(0,s.jsxs)(n.p,{children:["To delete a single row, use the ",(0,s.jsx)(n.code,{children:"deleteRow"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId); // Fetched company has its id set \nvar id = await Company.db.deleteRow(session, company);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The input object needs to have the ",(0,s.jsx)(n.code,{children:"id"})," field set. The ",(0,s.jsx)(n.code,{children:"deleteRow"})," method returns the ",(0,s.jsx)(n.code,{children:"id"})," of the deleted row."]}),"\n",(0,s.jsx)(n.h3,{id:"delete-several-rows",children:"Delete several rows"}),"\n",(0,s.jsxs)(n.p,{children:["To batch delete several rows, use the ",(0,s.jsx)(n.code,{children:"delete"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var ids = await Company.db.delete(session, companies);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is an atomic operation, meaning no entries will be deleted if any entry fails to be deleted. The ",(0,s.jsx)(n.code,{children:"delete"})," method returns a ",(0,s.jsx)(n.code,{children:"List"})," of the ",(0,s.jsx)(n.code,{children:"id"}),"s of the deleted row(s)."]}),"\n",(0,s.jsx)(n.h3,{id:"delete-by-filter",children:"Delete by filter"}),"\n",(0,s.jsxs)(n.p,{children:["You can also do a ",(0,s.jsx)(n.a,{href:"filter",children:"filtered"})," delete and delete all entries matching a ",(0,s.jsx)(n.code,{children:"where"})," query, by using the ",(0,s.jsx)(n.code,{children:"deleteWhere"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var ids = await Company.db.deleteWhere(\n  session,\n  where: (t) => t.name.like('%Ltd'),\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The above example will delete any row that ends in ",(0,s.jsx)(n.em,{children:"Ltd"}),". The ",(0,s.jsx)(n.code,{children:"deleteWhere"})," method returns a ",(0,s.jsx)(n.code,{children:"List"})," of the ",(0,s.jsx)(n.code,{children:"id"}),"s of the deleted row(s)."]}),"\n",(0,s.jsx)(n.h2,{id:"count",children:"Count"}),"\n",(0,s.jsxs)(n.p,{children:["Count is a special type of query that helps counting the number of rows in the database that matches a specific ",(0,s.jsx)(n.a,{href:"filter",children:"filter"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var count = await Company.db.count(\n  session, \n  where: (t) => t.name.like('s%'),\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The return value is an ",(0,s.jsx)(n.code,{children:"int"})," for the number of rows matching the filter."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>d});var s=i(67294);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);