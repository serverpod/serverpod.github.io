"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9992],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8413:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={},l="Database communication",p={unversionedId:"concepts/database-communication",id:"concepts/database-communication",title:"Database communication",description:"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files.",source:"@site/docs/04-concepts/04-database-communication.md",sourceDirName:"04-concepts",slug:"/concepts/database-communication",permalink:"/next/concepts/database-communication",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/04-concepts/04-database-communication.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error handling and exceptions",permalink:"/next/concepts/exceptions"},next:{title:"Caching",permalink:"/next/concepts/caching"}},d={},m=[{value:"Database mappings",id:"database-mappings",level:2},{value:"Field scopes",id:"field-scopes",level:3},{value:"Database indexes",id:"database-indexes",level:3},{value:"Parent/child relationships",id:"parentchild-relationships",level:3},{value:"Storing objects or references",id:"storing-objects-or-references",level:3},{value:"Making queries",id:"making-queries",level:2},{value:"Inserting a table row",id:"inserting-a-table-row",level:3},{value:"Finding a single row",id:"finding-a-single-row",level:3},{value:"Finding multiple rows",id:"finding-multiple-rows",level:3},{value:"Updating a row",id:"updating-a-row",level:3},{value:"Deleting rows",id:"deleting-rows",level:3},{value:"Creating expressions",id:"creating-expressions",level:3},{value:"Ordering rows",id:"ordering-rows",level:3},{value:"Joining tables and nesting objects",id:"joining-tables-and-nesting-objects",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Executing raw queries",id:"executing-raw-queries",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-communication"},"Database communication"),(0,i.kt)("p",null,"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files."),(0,i.kt)("h2",{id:"database-mappings"},"Database mappings"),(0,i.kt)("p",null,"It's possible to map serializable classes straight to tables in your database. To do this, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," key to your yaml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n")),(0,i.kt)("p",null,"When running ",(0,i.kt)("inlineCode",{parentName:"p"},"serverpod generate"),", the database schema will be saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/tables.pgsql")," file. You can use this to create the corresponding database tables."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When you add a ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," to a serializable class, Serverpod will automatically add an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field of type ",(0,i.kt)("inlineCode",{parentName:"p"},"int?")," to the class. You should not define this field yourself. The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is set when you insert or select a row from the database. The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field allows you to do updates and reference the rows from other objects and tables."))),(0,i.kt)("h3",{id:"field-scopes"},"Field scopes"),(0,i.kt)("p",null,"In some cases, you want to save a field to the database, but it should never be sent to the server. You can exclude it from the protocol by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," scope to the type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"class: UserData\nfields:\n  name: String\n  password: String?, database\n")),(0,i.kt)("p",null,"Likewise, if you only want a field to be accessible in the protocol but not stored in the server, you can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," flag. By default, a field is accessible to both the API and the database."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," options the field must be nullable."))),(0,i.kt)("h3",{id:"database-indexes"},"Database indexes"),(0,i.kt)("p",null,"For performance reasons, you may want to add indexes to your database tables. You add these in the yaml-files defining the serializable objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>?, api\nindexes:\n  company_name_idx:\n    fields: name\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," key holds a comma-separated list of column names. In addition, it's possible to add a type key (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"btree"),"), and a ",(0,i.kt)("inlineCode",{parentName:"p"},"unique")," key (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("h3",{id:"parentchild-relationships"},"Parent/child relationships"),(0,i.kt)("p",null,"With a field's parent property, you can define a relationship with a table's parent table. This relationship ensures that the parent id is always valid and that if you delete the referenced parent, the referencing row will automatically be deleted."),(0,i.kt)("p",null,"The employee's ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," is set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"company")," table in the example below. If you remove the company, all employees of the company will automatically be removed. When you insert the employee into the database, you must specify a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"companyId")," that corresponds to the id field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"company")," table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Employee\ntable: employee\nfields:\n  companyId: int, parent=company\n  name: String\n  birthday: DateTime\n")),(0,i.kt)("h3",{id:"storing-objects-or-references"},"Storing objects or references"),(0,i.kt)("p",null,"If you reference another serializable object in your yaml file, it will be stored as a JSON entry in the database. This creates a copy of that object. In many cases, this is not desirable. Instead, you may want to reference that object by an id from another table. See the section on ",(0,i.kt)("a",{parentName:"p",href:"#joining-tables-and-nesting-objects"},"joining tables and nesting objects")," below for more information."),(0,i.kt)("p",null,"In the example below, a list of employees is stored as a JSON structure for each company in the database. A better solution would be to create a database row for each employee and reference the company. However, there are cases where it is convenient to store whole JSON structures in each row."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\ntable: company\nfields:\n  name: String\n  employees: List<Employee> # Stored as JSON structure\n")),(0,i.kt)("h2",{id:"making-queries"},"Making queries"),(0,i.kt)("p",null,"For the communication to work, you need to have generated serializable classes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," key set, and the corresponding table must have been created in the database."),(0,i.kt)("h3",{id:"inserting-a-table-row"},"Inserting a table row"),(0,i.kt)("p",null,"Insert a new row in the database by calling the insert method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," field in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var myRow = Company(name: 'Serverpod corp.', employees: []);\nawait Company.insert(session, myRow);\n")),(0,i.kt)("p",null,"After the object has been inserted, it's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field is set from its row in the database."),(0,i.kt)("h3",{id:"finding-a-single-row"},"Finding a single row"),(0,i.kt)("p",null,"You can find a single row, either by its ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," or using an expression. You need to pass a reference to the a session in the call. Tables are accessible through generated serializable classes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await Company.findById(session, companyId);\n")),(0,i.kt)("p",null,"If no matching row is found, ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," is returned. You can also search for rows using expressions with the ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," parameter. The ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," parameter is a typed expression builder. The builder's parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", contains a description of the table which gives access to the table's columns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await Company.findSingleRow(\n  session,\n  where: (t) => t.name.equals('My Company'),\n);\n")),(0,i.kt)("h3",{id:"finding-multiple-rows"},"Finding multiple rows"),(0,i.kt)("p",null,"To find multiple rows, use the same principle as for finding a single row. Returned will be a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRow"),"s."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var companies = await Company.find(\n  tCompany,\n  where: (t) => t.id < 100,\n  limit 50,\n);\n")),(0,i.kt)("h3",{id:"updating-a-row"},"Updating a row"),(0,i.kt)("p",null,"To update a row, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," method. The object that you update must have its ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," set to a non-",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await session.db.findById(tCompany, companyId) as Company?;\nmyCompany.name = 'New name';\nawait session.db.update(myCompany);\n")),(0,i.kt)("h3",{id:"deleting-rows"},"Deleting rows"),(0,i.kt)("p",null,"Deleting a single row works similarly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," method, but you can also delete rows using the where parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// Delete a single row\nawait Company.deleteRow(session, myCompany);\n\n// Delete all rows where the company name ends with 'Ltd'\nawait Company.delete(\n  where: (t) => t.name.like('%Ltd'),\n);\n")),(0,i.kt)("h3",{id:"creating-expressions"},"Creating expressions"),(0,i.kt)("p",null,"To find or delete specific rows, most often, expressions are needed. Serverpod makes it easy to build expressions that are statically type-checked. Columns are referenced using the global table descriptor objects. The table descriptors, ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," are passed to the expression builder function. The ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", ",(0,i.kt)("inlineCode",{parentName:"p"},">="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"&"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," operators are overridden to make it easier to work with column values. When using the operators, it's a good practice to place them within a set of parentheses as the precedence rules are not always what would be expected. These are some examples of expressions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// The name column of the Company table equals 'My company')\nt.name.equals('My company')\n\n// Companies founded at or after 2020\nt.foundedDate >= DateTime.utc(2020)\n\n// Companies with number of employees between 10 and 100\n(t.numEmployees > 10) & (t.numEmployees <= 100)\n\n// Companies that has the founded date set\nt.foundedDate.notEquals(null)\n")),(0,i.kt)("h3",{id:"ordering-rows"},"Ordering rows"),(0,i.kt)("p",null,"It is often desirable to order the results of a database query. The ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," method contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"orderBy")," parameter, to which you can pass a column to order by. The static ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," field on your serializable objects includes a reference to a representation of your table. It has a field for each column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var companies = await Company.find(\n  session,\n  orderBy: Company.t.name,\n);\n")),(0,i.kt)("h3",{id:"joining-tables-and-nesting-objects"},"Joining tables and nesting objects"),(0,i.kt)("p",null,"Serverpod does not yet support joins automatically. However, you can easily create nested objects by performing two or more queries."),(0,i.kt)("p",null,"For instance, if you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Company")," object with a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Employee")," it can be declared like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# company.yaml\nclass: Company\ntable: company\nfields:\n  name: String\n  employees: List<Employee>?, api\n\n# employee.yaml\nclass: Employee\ntable: employee\nfields:\n  companyId: int\n  name: String\n  birthday: DateTime\n")),(0,i.kt)("p",null,"This prevents the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Employee")," to be automatically fetched or stored in the database. After you fetch a ",(0,i.kt)("inlineCode",{parentName:"p"},"Company")," object from the database, format it by fetching the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Employees"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var company = await Company.findById(session, id);\n\nvar employees = await Employee.find(\n  session,\n  where: (t) => t.companyId.equals(company.id),\n);\n\ncompany.employees = employees;\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Future versions of Serverpod will add support for automatic joins and database views."))),(0,i.kt)("h3",{id:"transactions"},"Transactions"),(0,i.kt)("p",null,"The essential point of a database transaction is that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all."),(0,i.kt)("p",null,"Serverpod handles database transactions through the ",(0,i.kt)("inlineCode",{parentName:"p"},"session.db.transaction")," method. The transaction takes a method that performs any database queries or other operations and optionally returns a value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var result = await session.db.transaction((transaction) async {\n  // Do some database queries here.\n\n  // Optionally return a value.\n  return true;\n});\n")),(0,i.kt)("h3",{id:"executing-raw-queries"},"Executing raw queries"),(0,i.kt)("p",null,"Sometimes more advanced tasks need to be performed on the database. For those occasions, it's possible to run raw SQL queries on the database. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," method. A ",(0,i.kt)("inlineCode",{parentName:"p"},"List<List<dynamic>>")," will be returned with rows and columns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var result = await session.db.query('SELECT * FROM mytable WHERE ...');\n")))}u.isMDXComponent=!0}}]);