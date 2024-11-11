"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[54905],{57589:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"concepts/database/relation-queries","title":"Relation queries","description":"The Serverpod query framework supports filtering on, sorting on, and including relational data structures. In SQL this is often achieved using a join operation. The functionality is available if there exists any one-to-one or one-to-many object relations between two models.","source":"@site/versioned_docs/version-2.1.0/06-concepts/06-database/07-relation-queries.md","sourceDirName":"06-concepts/06-database","slug":"/concepts/database/relation-queries","permalink":"/concepts/database/relation-queries","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/06-concepts/06-database/07-relation-queries.md","tags":[],"version":"2.1.0","sidebarPosition":7,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Filter","permalink":"/concepts/database/filter"},"next":{"title":"Sort","permalink":"/concepts/database/sort"}}');var i=s(74848),t=s(28453);const l={},d="Relation queries",o={},r=[{value:"Include relational data",id:"include-relational-data",level:2},{value:"Nested includes",id:"nested-includes",level:3},{value:"Include relational lists",id:"include-relational-lists",level:2},{value:"Nested includes",id:"nested-includes-1",level:3},{value:"Filter and sort",id:"filter-and-sort",level:3},{value:"Filter",id:"filter",level:4},{value:"Sort",id:"sort",level:4},{value:"Pagination",id:"pagination",level:3},{value:"Update",id:"update",level:2},{value:"Attach single row",id:"attach-single-row",level:3},{value:"Bulk attach rows",id:"bulk-attach-rows",level:3},{value:"Detach single row",id:"detach-single-row",level:3},{value:"Bulk detach rows",id:"bulk-detach-rows",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"relation-queries",children:"Relation queries"})}),"\n",(0,i.jsxs)(n.p,{children:["The Serverpod query framework supports filtering on, sorting on, and including relational data structures. In SQL this is often achieved using a join operation. The functionality is available if there exists any ",(0,i.jsx)(n.a,{href:"relations/one-to-one",children:"one-to-one"})," or ",(0,i.jsx)(n.a,{href:"relations/one-to-many",children:"one-to-many"})," object relations between two models."]}),"\n",(0,i.jsx)(n.h2,{id:"include-relational-data",children:"Include relational data"}),"\n",(0,i.jsxs)(n.p,{children:["To include relational data in a query, use the ",(0,i.jsx)(n.code,{children:"include"})," method. The ",(0,i.jsx)(n.code,{children:"include"})," method has a typed interface and contains all the declared relations in your yaml file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var employee = await Employee.db.findById(\n  session,\n  employeeId,\n  include: Employee.include(\n    address: Address.include(),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above return a employee including the related address object."}),"\n",(0,i.jsx)(n.h3,{id:"nested-includes",children:"Nested includes"}),"\n",(0,i.jsx)(n.p,{children:"It is also possible to include deeply nested objects."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var employee = await Employee.db.findById(\n  session,\n  employeeId,\n  include: Employee.include(\n    company: Company.include(\n      address: Address.include(),\n    ),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above returns an employee including the related company object that has the related address object included."}),"\n",(0,i.jsx)(n.p,{children:"Any relational object can be included or not when making a query but only the includes that are explicitly defined will be included in the result."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var user = await Employee.db.findById(\n  session,\n  employeeId,\n  include: Employee.include(\n    address: Address.include(),\n    company: Company.include(\n      address: Address.include(),\n    ),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above includes several different objects configured by specifying the named parameters."}),"\n",(0,i.jsx)(n.h2,{id:"include-relational-lists",children:"Include relational lists"}),"\n",(0,i.jsxs)(n.p,{children:["Including a list of objects (1",":n"," relation) can be done with the special ",(0,i.jsx)(n.code,{children:"includeList"})," method. In the simplest case, the entire list is included."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var user = await Company.db.findById(\n  session,\n  employeeId,\n  include: Company.include(\n    employees: Employee.includeList(),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above returns a company with all related employees included."}),"\n",(0,i.jsx)(n.h3,{id:"nested-includes-1",children:"Nested includes"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"includeList"})," method works slightly differently from a normal ",(0,i.jsx)(n.code,{children:"include"})," and to include nested objects the ",(0,i.jsx)(n.code,{children:"includes"})," field must be used. When including something on a list it means that every entry in the list will each have access to the nested object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var user = await Company.db.findById(\n  session,\n  employeeId,\n  include: Company.include(\n    employees: Employee.includeList(\n      includes: Employee.include(\n        address: Address.include(),\n      ),\n    ),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above returns a company with all related employees included. Each employee will have the related address object included."}),"\n",(0,i.jsx)(n.p,{children:"It is even possible to include lists within lists."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var user = await Company.db.findById(\n  session,\n  employeeId,\n  include: Company.include(\n    employees: Employee.includeList(\n      includes: Employee.include(\n        tools: Tool.includeList(),\n      ),\n    ),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above returns a company with all related employees included. Each employee will have the related tools list included."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"For each call to includeList (nested or not) the Serverpod Framework will perform one additional query to the database."})}),"\n",(0,i.jsx)(n.h3,{id:"filter-and-sort",children:"Filter and sort"}),"\n",(0,i.jsxs)(n.p,{children:["When working with large datasets, it's often necessary to ",(0,i.jsx)(n.a,{href:"filter",children:"filter"})," and ",(0,i.jsx)(n.a,{href:"sort",children:"sort"})," the records to retrieve the most relevant data. Serverpod offers methods to refine the included list of related objects:"]}),"\n",(0,i.jsx)(n.h4,{id:"filter",children:"Filter"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"where"})," clause to filter the results based on certain conditions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var user = await Company.db.findById(\n  session,\n  employeeId,\n  include: Company.include(\n    employees: Employee.includeList(\n      where: (t) => t.name.ilike('a%')\n    ),\n  ),\n);`\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above retrieves only employees whose names start with the letter 'a':"}),"\n",(0,i.jsx)(n.h4,{id:"sort",children:"Sort"}),"\n",(0,i.jsx)(n.p,{children:"The orderBy clause lets you sort the results based on a specific field."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var user = await Company.db.findById(\n  session,\n  employeeId,\n  include: Company.include(\n    employees: Employee.includeList(\n      orderBy: (t) => t.name,\n    ),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above sorts the employees by their names in ascending order."}),"\n",(0,i.jsx)(n.h3,{id:"pagination",children:"Pagination"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"pagination",children:"Paginate"})," results by specifying a limit on the number of records and an offset."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var user = await Company.db.findById(\n  session,\n  employeeId,\n  include: Company.include(\n    employees: Employee.includeList(\n      limit: 10,\n      offset: 10,\n    ),\n  ),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above retrieves the next 10 employees starting from the 11th record:"}),"\n",(0,i.jsx)(n.p,{children:"Using these methods in conjunction provides a powerful way to query, filter, and sort relational data efficiently."}),"\n",(0,i.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,i.jsx)(n.p,{children:"Managing relationships between tables is a common task. Serverpod provides methods to link (attach) and unlink (detach) related records:"}),"\n",(0,i.jsx)(n.h3,{id:"attach-single-row",children:"Attach single row"}),"\n",(0,i.jsx)(n.p,{children:"Link an individual employee to a company. This operation associates an employee with a specific company:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId);\nvar employee = await Employee.db.findById(session, employeeId);\n\nawait Company.db.attachRow.employees(session, company!, employee!);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bulk-attach-rows",children:"Bulk attach rows"}),"\n",(0,i.jsx)(n.p,{children:"For scenarios where you need to associate multiple employees with a company at once, use the bulk attach method. This operation is atomic, ensuring all or none of the records are linked:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var company = await Company.db.findById(session, companyId);\nvar employee = await Employee.db.findById(session, employeeId);\n\nawait Company.db.attach.employees(session, company!, [employee!]);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"detach-single-row",children:"Detach single row"}),"\n",(0,i.jsx)(n.p,{children:"To remove the association between an employee and a company, use the detach row method:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var employee = await Employee.db.findById(session, employeeId);\n\nawait Company.db.detachRow.employees(session, employee!);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bulk-detach-rows",children:"Bulk detach rows"}),"\n",(0,i.jsx)(n.p,{children:"In cases where you need to remove associations for multiple employees simultaneously, use the bulk detach method. This operation is atomic:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var employee = await Employee.db.findById(session, employeeId);\n\nawait Company.db.detach.employees(session, [employee!]);\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["When using the attach and detach methods the objects passed to them have to have the ",(0,i.jsx)(n.code,{children:"id"})," field set."]}),(0,i.jsx)(n.p,{children:"The detach method is also required to have the related nested object set if you make the call from the side that does not hold the foreign key."})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var a=s(96540);const i={},t=a.createContext(i);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);