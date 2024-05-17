"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[8856],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(y,r(r({ref:t},d),{},{components:n})):a.createElement(y,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},l="Database communication",p={unversionedId:"concepts/database-communication",id:"version-0.9.10/concepts/database-communication",title:"Database communication",description:"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files.",source:"@site/versioned_docs/version-0.9.10/03-concepts/03-database-communication.md",sourceDirName:"03-concepts",slug:"/concepts/database-communication",permalink:"/concepts/database-communication",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.10/03-concepts/03-database-communication.md",tags:[],version:"0.9.10",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Serialization",permalink:"/concepts/serialization"},next:{title:"Caching",permalink:"/concepts/caching"}},d={},c=[{value:"Database mappings",id:"database-mappings",level:2},{value:"Database indexes",id:"database-indexes",level:3},{value:"Making queries",id:"making-queries",level:2},{value:"Inserting a table row",id:"inserting-a-table-row",level:3},{value:"Finding a single row",id:"finding-a-single-row",level:3},{value:"Finding multiple rows",id:"finding-multiple-rows",level:3},{value:"Updating a row",id:"updating-a-row",level:3},{value:"Deleting rows",id:"deleting-rows",level:3},{value:"Creating expressions",id:"creating-expressions",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Executing raw queries",id:"executing-raw-queries",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-communication"},"Database communication"),(0,o.kt)("p",null,"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files."),(0,o.kt)("h2",{id:"database-mappings"},"Database mappings"),(0,o.kt)("p",null,"It's possible to map serializable classes straight to tables in your database. To do this, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"table")," key to your yaml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n")),(0,o.kt)("p",null,"When running ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate"),", the database schema will be saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},"generated/tables.pgsql")," file. You can use this to create the corresponding database tables."),(0,o.kt)("p",null,"In some cases, you want to save a field to the database, but it should never be sent to the server. You can exclude it from the protocol by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"database")," flag to the type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: UserData\nfields:\n  name: String\n  password: String, database\n")),(0,o.kt)("p",null,"Likewise, if you only want a field to be accessible in the protocol but not stored in the server, you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," flag. By default, a field is accessible to both the API and the database."),(0,o.kt)("h3",{id:"database-indexes"},"Database indexes"),(0,o.kt)("p",null,"For performance reasons, you may want to add indexes to your database tables. You add these in the yaml-files defining the serializable objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\nindexes:\n  company_name_idx:\n    fields: name\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," key holds a comma-separated list of column names. In addition, it's possible to add a type key (default is ",(0,o.kt)("inlineCode",{parentName:"p"},"btree"),"), and a ",(0,o.kt)("inlineCode",{parentName:"p"},"unique")," key (default is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("h2",{id:"making-queries"},"Making queries"),(0,o.kt)("p",null,"For the communication to work, you need to have generated serializable classes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"table")," key set, and the corresponding table must have been created in the database."),(0,o.kt)("h3",{id:"inserting-a-table-row"},"Inserting a table row"),(0,o.kt)("p",null,"Insert a new row in the database by calling the insert method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var myRow = Company(name: 'Serverpod corp.', employees: []);\nawait Company.insert(session, myRow);\n")),(0,o.kt)("p",null,"After the object has been inserted, it's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field is set from its row in the database."),(0,o.kt)("h3",{id:"finding-a-single-row"},"Finding a single row"),(0,o.kt)("p",null,"You can find a single row, either by its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or using an expression. You need to pass a reference to the a session in the call. Tables are accessible through generated serializable classes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await Company.findById(session, companyId);\n")),(0,o.kt)("p",null,"If no matching row is found, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," is returned. You can also search for rows using expressions with the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," parameter. The ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," parameter is a typed expression builder. The builder's parameter, ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", contains a description of the table which gives access to the table's columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await Company.findSingleRow(\n  session,\n  where: (t) => t.name.equals('My Company'),\n);\n")),(0,o.kt)("h3",{id:"finding-multiple-rows"},"Finding multiple rows"),(0,o.kt)("p",null,"To find multiple rows, use the same principle as for finding a single row. Returned will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"TableRow"),"s."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var companies = await Company.find(\n  tCompany,\n  where: (t) => t.id < 100,\n  limit 50,\n);\n")),(0,o.kt)("h3",{id:"updating-a-row"},"Updating a row"),(0,o.kt)("p",null,"To update a row, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," method. The object that you update must have its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," set to a non ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await session.db.findById(tCompany, companyId) as Company?;\nmyCompany.name = 'New name';\nawait session.db.update(myCompany);\n")),(0,o.kt)("h3",{id:"deleting-rows"},"Deleting rows"),(0,o.kt)("p",null,"Deleting a single row works similarly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," method, but you can also delete rows using the where parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// Delete a single row\nawait Company.deleteRow(session, myCompany);\n\n// Delete all rows where the company name ends with 'Ltd'\nawait Company.delete(\n  where: (t) => t.name.like('%Ltd'),\n);\n")),(0,o.kt)("h3",{id:"creating-expressions"},"Creating expressions"),(0,o.kt)("p",null,"To find or delete specific rows, most often, expressions are needed. Serverpod makes it easy to build expressions that are statically type-checked. Columns are referenced using the global table descriptor objects. The table descriptors, ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," are passed to the expression builder function. The ",(0,o.kt)("inlineCode",{parentName:"p"},">"),", ",(0,o.kt)("inlineCode",{parentName:"p"},">="),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,o.kt)("inlineCode",{parentName:"p"},"&"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," operators are overridden to make it easier to work with column values. When using the operators, it's a good practice to place them within a set of parentheses as the precedence rules are not always what would be expected. These are some examples of expressions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// The name column of the Company table equals 'My company')\nt.name.equals('My company')\n\n// Companies founded at or after 2020\nt.foundedDate >= DateTime.utc(2020)\n\n// Companies with number of employees between 10 and 100\n(t.numEmployees > 10) & (t.numEmployees <= 100)\n\n// Companies that has the founded date set\nt.foundedDate.notEquals(null)\n")),(0,o.kt)("h3",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"Docs coming."),(0,o.kt)("h3",{id:"executing-raw-queries"},"Executing raw queries"),(0,o.kt)("p",null,"Sometimes more advanced tasks need to be performed on the database. For those occasions, it's possible to run raw SQL queries on the database. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," method. A ",(0,o.kt)("inlineCode",{parentName:"p"},"List<List<dynamic>>")," will be returned with rows and columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var result = await session.db.query('SELECT * FROM mytable WHERE ...');\n")))}m.isMDXComponent=!0}}]);