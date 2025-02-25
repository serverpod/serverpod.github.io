"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[12716],{8540:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"concepts/database/relations/one-to-many","title":"One-to-many","description":"One-to-many (1:n) relationships describes a scenario where multiple records from one table can relate to a single record in another table. An example of this would the relationship between a company and its employees, where multiple employees can be employed at a single company.","source":"@site/versioned_docs/version-1.2.0/05-concepts/06-database/03-relations/02-one-to-many.md","sourceDirName":"05-concepts/06-database/03-relations","slug":"/concepts/database/relations/one-to-many","permalink":"/1.2.0/concepts/database/relations/one-to-many","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/06-database/03-relations/02-one-to-many.md","tags":[],"version":"1.2.0","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"One-to-one","permalink":"/1.2.0/concepts/database/relations/one-to-one"},"next":{"title":"Many-to-Many","permalink":"/1.2.0/concepts/database/relations/many-to-many"}}');var a=i(74848),t=i(28453);const s={},l="One-to-many",r={},c=[{value:"Defining the Relationship",id:"defining-the-relationship",level:2},{value:"Implicit Definition",id:"implicit-definition",level:3},{value:"Explicit Definition",id:"explicit-definition",level:3},{value:"Bidirectional relations",id:"bidirectional-relations",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"one-to-many",children:"One-to-many"})}),"\n",(0,a.jsxs)(n.p,{children:["One-to-many (1",":n",") relationships describes a scenario where multiple records from one table can relate to a single record in another table. An example of this would the relationship between a company and its employees, where multiple employees can be employed at a single company."]}),"\n",(0,a.jsxs)(n.p,{children:["The Serverpod framework provides versatility in establishing these relations. Depending on the specific use case and clarity desired, you can define the model relationship either from the 'many' side (like ",(0,a.jsx)(n.code,{children:"Employee"}),") or the 'one' side (like ",(0,a.jsx)(n.code,{children:"Company"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"defining-the-relationship",children:"Defining the Relationship"}),"\n",(0,a.jsxs)(n.p,{children:["In the following examples we show how to configure a 1",":n"," relationship between ",(0,a.jsx)(n.code,{children:"Company"})," and ",(0,a.jsx)(n.code,{children:"Employee"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"implicit-definition",children:"Implicit Definition"}),"\n",(0,a.jsx)(n.p,{children:"With an implicit setup, Serverpod determines and establishes the relationship based on the table and class structures."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# company.yaml\nclass: Company\ntable: company\nfields:\n  name: String\n  employees: List<Employee>?, relation\n\n# employee.yaml\nclass: Employee\ntable: employee\nfields:\n  name: String\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the example, we define a 1",":n"," relation between ",(0,a.jsx)(n.code,{children:"Company"})," and ",(0,a.jsx)(n.code,{children:"Employee"})," by using the ",(0,a.jsx)(n.code,{children:"List<Employee>"})," type on the ",(0,a.jsx)(n.code,{children:"employees"})," field together with the ",(0,a.jsx)(n.code,{children:"relation"})," keyword."]}),"\n",(0,a.jsxs)(n.p,{children:["The corresponding foreign key field is automatically integrated into the 'many' side (e.g., ",(0,a.jsx)(n.code,{children:"Employee"}),") as a concealed column."]}),"\n",(0,a.jsxs)(n.p,{children:["When fetching companies it now becomes possible to include any or all employees in the query. 1",":n"," relations also enables additional ",(0,a.jsx)(n.a,{href:"../filter#one-to-many",children:"filtering"})," and ",(0,a.jsx)(n.a,{href:"../sort#sort-on-relations",children:"sorting"})," operations for ",(0,a.jsx)(n.a,{href:"../relation-queries",children:"relational queries"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"explicit-definition",children:"Explicit Definition"}),"\n",(0,a.jsx)(n.p,{children:"In an explicit definition, you directly specify the relationship in a one-to-many relation."}),"\n",(0,a.jsxs)(n.p,{children:["This can be done by through an ",(0,a.jsx)(n.a,{href:"one-to-one#with-an-object",children:"object relation"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# company.yaml\nclass: Company\ntable: company\nfields:\n  name: String\n\n# employee.yaml\nclass: Employee\ntable: employee\nfields:\n  name: String\n  company: Company?, relation\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Or through a ",(0,a.jsx)(n.a,{href:"one-to-one#with-an-id-field",children:"foreign key field"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# company.yaml\nclass: Company\ntable: company\nfields:\n  name: String\n\n# employee.yaml\nclass: Employee\ntable: employee\nfields:\n  name: String\n  companyId: int, relation\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The examples are 1",":n"," relations because there is ",(0,a.jsx)(n.strong,{children:"no"})," unique index constraint on the foreign key field. This means that multiple employees can reference the same company."]}),"\n",(0,a.jsx)(n.h2,{id:"bidirectional-relations",children:"Bidirectional relations"}),"\n",(0,a.jsx)(n.p,{children:"For a more comprehensive representation, you can define the relationship from both sides."}),"\n",(0,a.jsxs)(n.p,{children:["Either through an ",(0,a.jsx)(n.a,{href:"one-to-one#with-an-object",children:"object relation"})," on the many side:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# company.yaml\nclass: Company\ntable: company\nfields:\n  name: String\n  employees: List<Employee>?, relation(name=company_employees)\n\n# employee.yaml\nclass: Employee\ntable: employee\nfields:\n  name: String\n  company: Company?, relation(name=company_employees)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Or through a ",(0,a.jsx)(n.a,{href:"one-to-one#with-an-id-field",children:"foreign key field"})," on the many side:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# company.yaml\nclass: Company\ntable: company\nfields:\n  name: String\n  employees: List<Employee>?, relation(name=company_employees)\n\n# employee.yaml\nclass: Employee\ntable: employee\nfields:\n  name: String\n  companyId: int, relation(name=company_employees, parent=company)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Just as in the 1:1 examples, the ",(0,a.jsx)(n.code,{children:"name"})," parameter with a unique string that links both sides together."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(96540);const a={},t=o.createContext(a);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);