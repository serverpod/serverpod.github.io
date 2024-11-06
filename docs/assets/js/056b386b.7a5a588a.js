"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[82075],{22845:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var s=a(74848),i=a(28453);const t={},o="Database communication",r={id:"concepts/database-communication",title:"Database communication",description:"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files.",source:"@site/versioned_docs/version-0.9.7/03-concepts/03-database-communication.md",sourceDirName:"03-concepts",slug:"/concepts/database-communication",permalink:"/0.9.7/concepts/database-communication",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.7/03-concepts/03-database-communication.md",tags:[],version:"0.9.7",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Serialization",permalink:"/0.9.7/concepts/serialization"},next:{title:"Caching",permalink:"/0.9.7/concepts/caching"}},d={},l=[{value:"Database mappings",id:"database-mappings",level:2},{value:"Database indexes",id:"database-indexes",level:3},{value:"Making queries",id:"making-queries",level:2},{value:"Inserting a table row",id:"inserting-a-table-row",level:3},{value:"Finding a single row",id:"finding-a-single-row",level:3},{value:"Finding multiple rows",id:"finding-multiple-rows",level:3},{value:"Updating a row",id:"updating-a-row",level:3},{value:"Deleting rows",id:"deleting-rows",level:3},{value:"Creating expressions",id:"creating-expressions",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Executing raw queries",id:"executing-raw-queries",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"database-communication",children:"Database communication"})}),"\n",(0,s.jsx)(n.p,{children:"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files."}),"\n",(0,s.jsx)(n.h2,{id:"database-mappings",children:"Database mappings"}),"\n",(0,s.jsxs)(n.p,{children:["It's possible to map serializable classes straight to tables in your database. To do this, add the ",(0,s.jsx)(n.code,{children:"table"})," key to your yaml file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When running ",(0,s.jsx)(n.code,{children:"serverpod generate"}),", the database schema will be saved in the ",(0,s.jsx)(n.code,{children:"generated/tables.pgsql"})," file. You can use this to create the corresponding database tables."]}),"\n",(0,s.jsxs)(n.p,{children:["In some cases, you want to save a field to the database, but it should never be sent to the server. You can exclude it from the protocol by adding the ",(0,s.jsx)(n.code,{children:"database"})," flag to the type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: UserData\nfields:\n  name: String\n  password: String, database\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Likewise, if you only want a field to be accessible in the protocol but not stored in the server, you can add the ",(0,s.jsx)(n.code,{children:"api"})," flag. By default, a field is accessible to both the API and the database."]}),"\n",(0,s.jsx)(n.h3,{id:"database-indexes",children:"Database indexes"}),"\n",(0,s.jsx)(n.p,{children:"For performance reasons, you may want to add indexes to your database tables. You add these in the yaml-files defining the serializable objects."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\nindexes:\n  company_name_idx:\n    fields: name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fields"})," key holds a comma-separated list of column names. In addition, it's possible to add a type key (default is ",(0,s.jsx)(n.code,{children:"btree"}),"), and a ",(0,s.jsx)(n.code,{children:"unique"})," key (default is ",(0,s.jsx)(n.code,{children:"false"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"making-queries",children:"Making queries"}),"\n",(0,s.jsxs)(n.p,{children:["For the communication to work, you need to have generated serializable classes with the ",(0,s.jsx)(n.code,{children:"table"})," key set, and the corresponding table must have been created in the database."]}),"\n",(0,s.jsx)(n.h3,{id:"inserting-a-table-row",children:"Inserting a table row"}),"\n",(0,s.jsxs)(n.p,{children:["Insert a new row in the database by calling the insert method of the ",(0,s.jsx)(n.code,{children:"db"})," field in your ",(0,s.jsx)(n.code,{children:"Session"})," object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var myRow = Company(name: 'Serverpod corp.', employees: []);\nawait Company.insert(session, myRow);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After the object has been inserted, it's ",(0,s.jsx)(n.code,{children:"id"})," field is set from its row in the database."]}),"\n",(0,s.jsx)(n.h3,{id:"finding-a-single-row",children:"Finding a single row"}),"\n",(0,s.jsxs)(n.p,{children:["You can find a single row, either by its ",(0,s.jsx)(n.code,{children:"id"})," or using an expression. You need to pass a reference to the a session in the call. Tables are accessible through generated serializable classes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var myCompany = await Company.findById(session, companyId);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If no matching row is found, ",(0,s.jsx)(n.code,{children:"null"})," is returned. You can also search for rows using expressions with the ",(0,s.jsx)(n.code,{children:"where"})," parameter. The ",(0,s.jsx)(n.code,{children:"where"})," parameter is a typed expression builder. The builder's parameter, ",(0,s.jsx)(n.code,{children:"t"}),", contains a description of the table which gives access to the table's columns."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var myCompany = await Company.findSingleRow(\n  session,\n  where: (t) => t.name.equals('My Company'),\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"finding-multiple-rows",children:"Finding multiple rows"}),"\n",(0,s.jsxs)(n.p,{children:["To find multiple rows, use the same principle as for finding a single row. Returned will be a ",(0,s.jsx)(n.code,{children:"List"})," of ",(0,s.jsx)(n.code,{children:"TableRow"}),"s."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var companies = await Company.find(\n  tCompany,\n  where: (t) => t.id < 100,\n  limit: 50,\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updating-a-row",children:"Updating a row"}),"\n",(0,s.jsxs)(n.p,{children:["To update a row, use the ",(0,s.jsx)(n.code,{children:"update"})," method. The object that you update must have its ",(0,s.jsx)(n.code,{children:"id"})," set to a non ",(0,s.jsx)(n.code,{children:"null"})," value."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var myCompany = await session.db.findById(tCompany, companyId) as Company?;\nmyCompany.name = 'New name';\nawait session.db.update(myCompany);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deleting-rows",children:"Deleting rows"}),"\n",(0,s.jsxs)(n.p,{children:["Deleting a single row works similarly to the ",(0,s.jsx)(n.code,{children:"update"})," method, but you can also delete rows using the where parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"// Delete a single row\nawait Company.deleteRow(session, myCompany);\n\n// Delete all rows where the company name ends with 'Ltd'\nawait Company.delete(\n  where: (t) => t.name.like('%Ltd'),\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-expressions",children:"Creating expressions"}),"\n",(0,s.jsxs)(n.p,{children:["To find or delete specific rows, most often, expressions are needed. Serverpod makes it easy to build expressions that are statically type-checked. Columns are referenced using the global table descriptor objects. The table descriptors, ",(0,s.jsx)(n.code,{children:"t"})," are passed to the expression builder function. The ",(0,s.jsx)(n.code,{children:">"}),", ",(0,s.jsx)(n.code,{children:">="}),", ",(0,s.jsx)(n.code,{children:"<"}),", ",(0,s.jsx)(n.code,{children:"<="}),", ",(0,s.jsx)(n.code,{children:"&"}),", and ",(0,s.jsx)(n.code,{children:"|"})," operators are overridden to make it easier to work with column values. When using the operators, it's a good practice to place them within a set of parentheses as the precedence rules are not always what would be expected. These are some examples of expressions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"// The name column of the Company table equals 'My company')\nt.name.equals('My company')\n\n// Companies founded at or after 2020\nt.foundedDate >= DateTime.utc(2020)\n\n// Companies with number of employees between 10 and 100\n(t.numEmployees > 10) & (t.numEmployees <= 100)\n\n// Companies that has the founded date set\nt.foundedDate.notEquals(null)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsx)(n.p,{children:"Docs coming."}),"\n",(0,s.jsx)(n.h3,{id:"executing-raw-queries",children:"Executing raw queries"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes more advanced tasks need to be performed on the database. For those occasions, it's possible to run raw SQL queries on the database. Use the ",(0,s.jsx)(n.code,{children:"query"})," method. A ",(0,s.jsx)(n.code,{children:"List<List<dynamic>>"})," will be returned with rows and columns."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var result = await session.db.query('SELECT * FROM mytable WHERE ...');\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);