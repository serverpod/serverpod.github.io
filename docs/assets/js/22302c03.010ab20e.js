"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[98484],{77033:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"concepts/database/crud","title":"CRUD","description":"To interact with the database you need a Session object as this object holds the connection to the database. All CRUD operations are accessible via the session object and the generated models. The methods can be found under the static db field in your generated models.","source":"@site/versioned_docs/version-2.2.0/06-concepts/06-database/05-crud.md","sourceDirName":"06-concepts/06-database","slug":"/concepts/database/crud","permalink":"/concepts/database/crud","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.2.0/06-concepts/06-database/05-crud.md","tags":[],"version":"2.2.0","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Indexing","permalink":"/concepts/database/indexing"},"next":{"title":"Filter","permalink":"/concepts/database/filter"}}');var i=a(74848),t=a(28453);const d={},r="CRUD",o={},l=[{value:"Create",id:"create",level:2},{value:"Inserting a single row",id:"inserting-a-single-row",level:3},{value:"Inserting several rows",id:"inserting-several-rows",level:3},{value:"Read",id:"read",level:2},{value:"Finding by id",id:"finding-by-id",level:3},{value:"Finding a single row",id:"finding-a-single-row",level:3},{value:"Finding multiple rows",id:"finding-multiple-rows",level:3},{value:"Update",id:"update",level:2},{value:"Update a single row",id:"update-a-single-row",level:3},{value:"Update several rows",id:"update-several-rows",level:3},{value:"Update a specific column",id:"update-a-specific-column",level:3},{value:"Delete",id:"delete",level:2},{value:"Delete a single row",id:"delete-a-single-row",level:3},{value:"Delete several rows",id:"delete-several-rows",level:3},{value:"Delete by filter",id:"delete-by-filter",level:3},{value:"Count",id:"count",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"crud",children:"CRUD"})}),"\n",(0,i.jsxs)(n.p,{children:["To interact with the database you need a ",(0,i.jsx)(n.a,{href:"../sessions",children:(0,i.jsx)(n.code,{children:"Session"})})," object as this object holds the connection to the database. All CRUD operations are accessible via the session object and the generated models. The methods can be found under the static ",(0,i.jsx)(n.code,{children:"db"})," field in your generated models."]}),"\n",(0,i.jsx)(n.p,{children:"For the following examples we will use this model:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can also access the database methods through the session object under the field ",(0,i.jsx)(n.code,{children:"db"}),". However, this is typically only recommended if you want to do custom queries where you explicitly type out your SQL queries."]})}),"\n",(0,i.jsx)(n.h2,{id:"create",children:"Create"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to create a new row in the database."}),"\n",(0,i.jsx)(n.h3,{id:"inserting-a-single-row",children:"Inserting a single row"}),"\n",(0,i.jsxs)(n.p,{children:["Inserting a single row to the database is done by calling the ",(0,i.jsx)(n.code,{children:"insertRow"})," method on your generated model. The method will return the entire company object with the ",(0,i.jsx)(n.code,{children:"id"})," field set."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var row = Company(name: 'Serverpod');\nvar company = await Company.db.insertRow(session, row);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"inserting-several-rows",children:"Inserting several rows"}),"\n",(0,i.jsxs)(n.p,{children:["Inserting several rows in a batch operation is done by calling the ",(0,i.jsx)(n.code,{children:"insert"})," method. This is an atomic operation, meaning no entries will be created if any entry fails to be created."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var rows = [Company(name: 'Serverpod'), Company(name: 'Google')];\nvar companies = await Company.db.insert(session, rows);\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In previous versions of Serverpod the ",(0,i.jsx)(n.code,{children:"insert"})," method mutated the input object by setting the ",(0,i.jsx)(n.code,{children:"id"})," field. In the example above the input variable remains unmodified after the ",(0,i.jsx)(n.code,{children:"insert"}),"/",(0,i.jsx)(n.code,{children:"insertRow"})," call."]})}),"\n",(0,i.jsx)(n.h2,{id:"read",children:"Read"}),"\n",(0,i.jsx)(n.p,{children:"There are three different read operations available."}),"\n",(0,i.jsx)(n.h3,{id:"finding-by-id",children:"Finding by id"}),"\n",(0,i.jsxs)(n.p,{children:["You can retrieve a single row by its ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This operation either returns the model or ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"finding-a-single-row",children:"Finding a single row"}),"\n",(0,i.jsx)(n.p,{children:"You can find a single row using an expression."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findFirstRow(\n  session,\n  where: (t) => t.name.equals('Serverpod'),\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This operation returns the first model matching the filtering criteria or ",(0,i.jsx)(n.code,{children:"null"}),". See ",(0,i.jsx)(n.a,{href:"filter",children:"filter"})," and ",(0,i.jsx)(n.a,{href:"sort",children:"sort"})," for all filter operations."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you include an ",(0,i.jsx)(n.code,{children:"orderBy"}),", it will be evaluated before the list is reduced. In this case, ",(0,i.jsx)(n.code,{children:"findFirstRow()"})," will return the first entry from the sorted list."]})}),"\n",(0,i.jsx)(n.h3,{id:"finding-multiple-rows",children:"Finding multiple rows"}),"\n",(0,i.jsx)(n.p,{children:"To find multiple rows, use the same principle as for finding a single row."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(\n  session,\n  where: (t) => t.id < 100,\n  limit: 50,\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This operation returns a ",(0,i.jsx)(n.code,{children:"List"})," of your models matching the filtering criteria."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"filter",children:"filter"})," and ",(0,i.jsx)(n.a,{href:"sort",children:"sort"})," for all filter and sorting operations and ",(0,i.jsx)(n.a,{href:"pagination",children:"pagination"})," for how to paginate the result."]}),"\n",(0,i.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,i.jsx)(n.p,{children:"There are two update operations available."}),"\n",(0,i.jsx)(n.h3,{id:"update-a-single-row",children:"Update a single row"}),"\n",(0,i.jsxs)(n.p,{children:["To update a single row, use the ",(0,i.jsx)(n.code,{children:"updateRow"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId); // Fetched company has its id set \ncompany.name = 'New name';\nvar updatedCompany = await Company.db.updateRow(session, company);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The object that you update must have its ",(0,i.jsx)(n.code,{children:"id"})," set to a non-",(0,i.jsx)(n.code,{children:"null"})," value and the id needs to exist on a row in the database. The ",(0,i.jsx)(n.code,{children:"updateRow"})," method returns the updated object."]}),"\n",(0,i.jsx)(n.h3,{id:"update-several-rows",children:"Update several rows"}),"\n",(0,i.jsxs)(n.p,{children:["To batch update several rows use the ",(0,i.jsx)(n.code,{children:"update"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(session);\ncompanies = companies.map((c) => c.copyWith(name: 'New name')).toList();\nvar updatedCompanies = await Company.db.update(session, companies);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is an atomic operation, meaning no entries will be updated if any entry fails to be updated. The ",(0,i.jsx)(n.code,{children:"update"})," method returns a ",(0,i.jsx)(n.code,{children:"List"})," of the updated objects."]}),"\n",(0,i.jsx)(n.h3,{id:"update-a-specific-column",children:"Update a specific column"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to target one or several columns that you want to mutate, meaning any other column will be left unmodified even if the dart object has introduced a change."}),"\n",(0,i.jsx)(n.p,{children:"Update a single row, the following code will update the company name, but will not change the address column."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId); \ncompany.name = 'New name';\ncompany.address = 'Baker street';\nvar updatedCompany = await Company.db.updateRow(session, company, columns: (t) => [t.name]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The same syntax is available for multiple rows."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.db.find(session);\ncompanies = companies.map((c) => c.copyWith(name: 'New name', address: 'Baker Street')).toList();\nvar updatedCompanies = await Company.db.update(session, companies, columns: (t) => [t.name]);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"delete",children:"Delete"}),"\n",(0,i.jsx)(n.p,{children:"Deleting rows from the database is done in a similar way to updating rows. However, there are three delete operations available."}),"\n",(0,i.jsx)(n.h3,{id:"delete-a-single-row",children:"Delete a single row"}),"\n",(0,i.jsxs)(n.p,{children:["To delete a single row, use the ",(0,i.jsx)(n.code,{children:"deleteRow"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId); // Fetched company has its id set \nvar companyDeleted = await Company.db.deleteRow(session, company);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The input object needs to have the ",(0,i.jsx)(n.code,{children:"id"})," field set. The ",(0,i.jsx)(n.code,{children:"deleteRow"})," method returns the deleted model."]}),"\n",(0,i.jsx)(n.h3,{id:"delete-several-rows",children:"Delete several rows"}),"\n",(0,i.jsxs)(n.p,{children:["To batch delete several rows, use the ",(0,i.jsx)(n.code,{children:"delete"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var companiesDeleted = await Company.db.delete(session, companies);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is an atomic operation, meaning no entries will be deleted if any entry fails to be deleted. The ",(0,i.jsx)(n.code,{children:"delete"})," method returns a ",(0,i.jsx)(n.code,{children:"List"})," of the models deleted."]}),"\n",(0,i.jsx)(n.h3,{id:"delete-by-filter",children:"Delete by filter"}),"\n",(0,i.jsxs)(n.p,{children:["You can also do a ",(0,i.jsx)(n.a,{href:"filter",children:"filtered"})," delete and delete all entries matching a ",(0,i.jsx)(n.code,{children:"where"})," query, by using the ",(0,i.jsx)(n.code,{children:"deleteWhere"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var companiesDeleted = await Company.db.deleteWhere(\n  session,\n  where: (t) => t.name.like('%Ltd'),\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above example will delete any row that ends in ",(0,i.jsx)(n.em,{children:"Ltd"}),". The ",(0,i.jsx)(n.code,{children:"deleteWhere"})," method returns a ",(0,i.jsx)(n.code,{children:"List"})," of the models deleted."]}),"\n",(0,i.jsx)(n.h2,{id:"count",children:"Count"}),"\n",(0,i.jsxs)(n.p,{children:["Count is a special type of query that helps counting the number of rows in the database that matches a specific ",(0,i.jsx)(n.a,{href:"filter",children:"filter"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var count = await Company.db.count(\n  session, \n  where: (t) => t.name.like('s%'),\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The return value is an ",(0,i.jsx)(n.code,{children:"int"})," for the number of rows matching the filter."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>r});var s=a(96540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);