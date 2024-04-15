"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5754],{37633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(85893),i=t(11151);const o={},s="Upgrade to 2.0",r={id:"upgrading/upgrade-to-two",title:"Upgrade to 2.0",description:"Changes to the Session Object",source:"@site/docs/12-upgrading/01-upgrade-to-two.md",sourceDirName:"12-upgrading",slug:"/upgrading/upgrade-to-two",permalink:"/next/upgrading/upgrade-to-two",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/12-upgrading/01-upgrade-to-two.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/next/contribute"},next:{title:"Upgrade to 1.2",permalink:"/next/upgrading/upgrade-to-one-point-two"}},d={},l=[{value:"Changes to the Session Object",id:"changes-to-the-session-object",level:2},{value:"Changes to database queries",id:"changes-to-database-queries",level:2},{value:"Removed unsafeQueryMappedResults(...)",id:"removed-unsafequerymappedresults",level:3},{value:"Changes to database tables",id:"changes-to-database-tables",level:2},{value:"Integer representation changed to bigint",id:"integer-representation-changed-to-bigint",level:3},{value:"Why is this change made?",id:"why-is-this-change-made",level:4},{value:"Ensuring new databases are created with the new representation",id:"ensuring-new-databases-are-created-with-the-new-representation",level:4},{value:"Migration of existing tables",id:"migration-of-existing-tables",level:4},{value:"Small tables",id:"small-tables",level:5},{value:"Large tables",id:"large-tables",level:5}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"upgrade-to-20",children:"Upgrade to 2.0"}),"\n",(0,a.jsx)(n.h2,{id:"changes-to-the-session-object",children:"Changes to the Session Object"}),"\n",(0,a.jsxs)(n.p,{children:["With Serverpod 2.0, we have removed the deprecated legacy database layer from the ",(0,a.jsx)(n.code,{children:"Session"})," object. The ",(0,a.jsx)(n.code,{children:"Session"})," object now incorporates the new database layer, accessed via the ",(0,a.jsx)(n.code,{children:"dbNext"})," field in Serverpod 1.2, under the ",(0,a.jsx)(n.code,{children:"db"})," field."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"session.dbNext.find(...);\n"})}),"\n",(0,a.jsx)(n.p,{children:"becomes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"session.db.find(...);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"changes-to-database-queries",children:"Changes to database queries"}),"\n",(0,a.jsx)(n.h3,{id:"removed-unsafequerymappedresults",children:"Removed unsafeQueryMappedResults(...)"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"unsafeQueryMappedResults(...)"})," method has been removed. A similar result can now instead be formatted from the ",(0,a.jsx)(n.code,{children:"unsafeQuery(...)"})," result by calling the ",(0,a.jsx)(n.code,{children:"toColumnMap()"})," method for each row of the result. ",(0,a.jsx)(n.code,{children:"toColumnMap"})," returns a map containing the query alias for the column as key and the row-column value as value."]}),"\n",(0,a.jsx)(n.p,{children:"Given a query that performs a join like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT\n "company"."id" AS "company.id",\n "company"."name" AS "company.name",\n "company"."townId" AS "company.townId",\n "company_town_town"."id" AS "company_town_town.id",\n "company_town_town"."name" AS "company_town_town.name",\n "company_town_town"."mayorId" AS "company_town_town.mayorId"\nFROM\n "company"\nLEFT JOIN\n "town" AS "company_town_town" ON "company"."townId" = "company_town_town"."id"\nORDER BY\n "company"."name"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The return type from ",(0,a.jsx)(n.code,{children:"unsafeQueryMappedResults(...)"})," in 1.2 was:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "company": {\n      "company.id": 40,\n      "company.name": "Apple",\n      "company.townId": 64\n    },\n    "town": {\n      "company_town_town.id": 64,\n      "company_town_town.name": "San Francisco",\n      "company_town_town.mayorId": null\n    }\n  },\n  {\n    "company": {\n      "company.id": 39,\n      "company.name": "Serverpod",\n      "company.townId": 63\n    },\n    "town": {\n      "company_town_town.id": 63,\n      "company_town_town.name": "Stockholm",\n      "company_town_town.mayorId": null\n    }\n  }\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["And if ",(0,a.jsx)(n.code,{children:"result.map((row) => row.toColumnMap())"})," is used to format the result from ",(0,a.jsx)(n.code,{children:"unsafeQuery(...)"})," in 2.0, the following result is obtained:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "company.id": 38,\n    "company.name": "Apple",\n    "company.townId": 62,\n    "company_town_town.id": 62,\n    "company_town_town.name": "San Francisco",\n    "company_town_town.mayorId": null\n  },\n  {\n    "company.id": 37,\n    "company.name": "Serverpod",\n    "company.townId": 61,\n    "company_town_town.id": 61,\n    "company_town_town.name": "Stockholm",\n    "company_town_town.mayorId": null\n  }\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"or for a simple query without aliases:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SELECT\n "id",\n "name",\n "townId"\nFROM\n "company"\nORDER BY\n "name"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["the return type from ",(0,a.jsx)(n.code,{children:"unsafeQueryMappedResults(...)"})," in 1.2 was:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "company": {\n      "id": 54,\n      "name": "Apple",\n      "townId": 86\n    }\n  },\n  {\n    "company": {\n      "id": 53,\n      "name": "Serverpod",\n      "townId": 85\n    }\n  }\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["and if ",(0,a.jsx)(n.code,{children:"result.map((row) => row.toColumnMap())"})," is used to format the result from ",(0,a.jsx)(n.code,{children:"unsafeQuery(...)"})," in 2.0, the following result is obtained:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:' [\n  {\n    "id": 54,\n    "name": "Apple",\n    "townId": 86\n  },\n  {\n    "id": 53,\n    "name": "Serverpod",\n    "townId": 85\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"changes-to-database-tables",children:"Changes to database tables"}),"\n",(0,a.jsx)(n.h3,{id:"integer-representation-changed-to-bigint",children:"Integer representation changed to bigint"}),"\n",(0,a.jsxs)(n.p,{children:["Integer representation in the database has changed from ",(0,a.jsx)(n.code,{children:"int"})," to ",(0,a.jsx)(n.code,{children:"bigint"}),". From now on, models with ",(0,a.jsx)(n.code,{children:"int"})," fields will generate database migrations where that field is defined as a ",(0,a.jsx)(n.code,{children:"bigint"})," type in the database."]}),"\n",(0,a.jsxs)(n.p,{children:["This change also applies to the ",(0,a.jsx)(n.code,{children:"id"})," field of models where ",(0,a.jsx)(n.code,{children:"bigserial"})," is now used to generate the id."]}),"\n",(0,a.jsx)(n.p,{children:"The change is compatible with existing databases. Existing migrations therefore, won't be changed by the Serverpod migration system. No manual modification to the database is required if this data representation is not essential for the application. However, all new migrations will be created with the new representation."}),"\n",(0,a.jsx)(n.h4,{id:"why-is-this-change-made",children:"Why is this change made?"}),"\n",(0,a.jsxs)(n.p,{children:["The change was made to ensure that ",(0,a.jsx)(n.a,{href:"https://dart.dev/guides/language/numbers",children:"Dart"})," and the database representation of integers is consistent. Dart uses 64-bit integers, and the ",(0,a.jsx)(n.code,{children:"int"})," type in Dart is a 64-bit integer. The ",(0,a.jsx)(n.code,{children:"int"})," type in PostgreSQL is a 32-bit integer. This means that the ",(0,a.jsx)(n.code,{children:"int"})," type in Dart can represent larger numbers than the ",(0,a.jsx)(n.code,{children:"int"})," type in PostgreSQL. By using ",(0,a.jsx)(n.code,{children:"bigint"})," in PostgreSQL, the integer representation is consistent between Dart and the database."]}),"\n",(0,a.jsxs)(n.p,{children:["In terms of performance, there are usually no significant drawbacks with using ",(0,a.jsx)(n.code,{children:"bigint"})," instead of ",(0,a.jsx)(n.code,{children:"int"}),". In most cases a good index strategy will be more important than the integer representation. Here is a guide that benchmarks the performance of ",(0,a.jsx)(n.code,{children:"int"})," and ",(0,a.jsx)(n.code,{children:"bigint"})," in PostgreSQL: (Use BIGINT in Postgres)[",(0,a.jsx)(n.a,{href:"https://blog.rustprooflabs.com/2021/06/postgres-bigint-by-default",children:"https://blog.rustprooflabs.com/2021/06/postgres-bigint-by-default"}),"]"]}),"\n",(0,a.jsx)(n.h4,{id:"ensuring-new-databases-are-created-with-the-new-representation",children:"Ensuring new databases are created with the new representation"}),"\n",(0,a.jsxs)(n.p,{children:["Since existing migrations won't be changed, databases that are created with these will still use ",(0,a.jsx)(n.code,{children:"int"})," to represent integers."]}),"\n",(0,a.jsx)(n.p,{children:"To ensure new databases are created with the new representation, the latest migration should be generated using Serverpod 2.0. It is enough to have an empty migration to ensure new databases use the new representation."}),"\n",(0,a.jsx)(n.p,{children:"A new empty migration can be created by running the following command in the terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ serverpod create-migration --force\n"})}),"\n",(0,a.jsx)(n.h4,{id:"migration-of-existing-tables",children:"Migration of existing tables"}),"\n",(0,a.jsx)(n.p,{children:"The migration of existing tables to use the new representation will vary depending on the database content. Utilizing the wrong migration strategy might cause downtime for your application. That is the reason Serverpod does not automatically migrate existing tables."}),"\n",(0,a.jsx)(n.h5,{id:"small-tables",children:"Small tables"}),"\n",(0,a.jsx)(n.p,{children:"A simple way to migrate for small tables is to execute the following sql query to the database:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SEQUENCE "my_table_id_seq" AS bigint;\nALTER TABLE "my_table" ALTER "id" TYPE bigint;\nALTER TABLE "my_table" ALTER "myNumber" TYPE bigint;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The first two lines modify the id sequence for a table named ",(0,a.jsx)(n.code,{children:'"my_table"'})," to use ",(0,a.jsx)(n.code,{children:"bigint"})," instead of ",(0,a.jsx)(n.code,{children:"int"}),". The last line modifies a column of the same table to use ",(0,a.jsx)(n.code,{children:"bigint"}),". The drawback of this approach is that it locks the table during the migration. Therefore, this strategy is not recommended for large tables."]}),"\n",(0,a.jsx)(n.h5,{id:"large-tables",children:"Large tables"}),"\n",(0,a.jsx)(n.p,{children:"Migrating large tables without application downtime is a more complex operation, and the approach will vary depending on the data structure. Below are some gathered resources on the subject."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["(Zemata - Column migration from INT to BIGINT)[",(0,a.jsx)(n.a,{href:"http://zemanta.github.io/2021/08/25/column-migration-from-int-to-bigint-in-postgresql/",children:"http://zemanta.github.io/2021/08/25/column-migration-from-int-to-bigint-in-postgresql/"}),"]"]}),"\n",(0,a.jsxs)(n.li,{children:["(AM^2 - Changing a column from int to bigint, without downtime)[",(0,a.jsx)(n.a,{href:"https://am2.co/2019/12/changing-a-column-from-int-to-bigint-without-downtime/",children:"https://am2.co/2019/12/changing-a-column-from-int-to-bigint-without-downtime/"}),"]"]}),"\n",(0,a.jsxs)(n.li,{children:["(Crunch data - The integer at the End of the Universe)[",(0,a.jsx)(n.a,{href:"https://www.crunchydata.com/blog/the-integer-at-the-end-of-the-universe-integer-overflow-in-postgres",children:"https://www.crunchydata.com/blog/the-integer-at-the-end-of-the-universe-integer-overflow-in-postgres"}),"]"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);