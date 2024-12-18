"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[47452],{14274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"upgrading/upgrade-to-two","title":"Upgrade to 2.0","description":"Changes to authentication","source":"@site/versioned_docs/version-2.2.0/08-upgrading/03-upgrade-to-two.md","sourceDirName":"08-upgrading","slug":"/upgrading/upgrade-to-two","permalink":"/2.2.0/upgrading/upgrade-to-two","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.2.0/08-upgrading/03-upgrade-to-two.md","tags":[],"version":"2.2.0","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Upgrade to 1.2","permalink":"/2.2.0/upgrading/upgrade-to-one-point-two"},"next":{"title":"Upgrade to 2.2","permalink":"/2.2.0/upgrading/upgrade-to-two-point-two"}}');var i=t(74848),s=t(28453);const r={},o="Upgrade to 2.0",d={},l=[{value:"Changes to authentication",id:"changes-to-authentication",level:2},{value:"Advanced integrations",id:"advanced-integrations",level:3},{value:"Changes to the Session Object",id:"changes-to-the-session-object",level:2},{value:"Removed deprecated fields",id:"removed-deprecated-fields",level:3},{value:"Authenticated user information retrieval",id:"authenticated-user-information-retrieval",level:3},{value:"Authentication helpers",id:"authentication-helpers",level:3},{value:"Changes to database queries",id:"changes-to-database-queries",level:2},{value:"Removed unsafeQueryMappedResults(...)",id:"removed-unsafequerymappedresults",level:3},{value:"Update return type for delete operations",id:"update-return-type-for-delete-operations",level:3},{value:"Changes to database tables",id:"changes-to-database-tables",level:2},{value:"Integer representation changed to bigint",id:"integer-representation-changed-to-bigint",level:3},{value:"Why is this change made?",id:"why-is-this-change-made",level:4},{value:"Ensuring new databases are created with the new representation",id:"ensuring-new-databases-are-created-with-the-new-representation",level:4},{value:"Migration of existing tables",id:"migration-of-existing-tables",level:4},{value:"Small tables",id:"small-tables",level:5},{value:"Large tables",id:"large-tables",level:5},{value:"Changes in the authentication module",id:"changes-in-the-authentication-module",level:2},{value:"Unsecure random disabled by default",id:"unsecure-random-disabled-by-default",level:3},{value:"Updates to Serialization in Serverpod 2.0",id:"updates-to-serialization-in-serverpod-20",level:2},{value:"General Changes to Model Serialization",id:"general-changes-to-model-serialization",level:3},{value:"Before change",id:"before-change",level:4},{value:"After change",id:"after-change",level:4},{value:"Enhancements for Custom Serialization",id:"enhancements-for-custom-serialization",level:3},{value:"Previous Implementation",id:"previous-implementation",level:4},{value:"Updated Implementation",id:"updated-implementation",level:4},{value:"Deprecation Notice for <code>SerializableEntity</code>",id:"deprecation-notice-for-serializableentity",level:2},{value:"Migration Guide",id:"migration-guide",level:3},{value:"Example",id:"example",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"upgrade-to-20",children:"Upgrade to 2.0"})}),"\n",(0,i.jsx)(n.h2,{id:"changes-to-authentication",children:"Changes to authentication"}),"\n",(0,i.jsxs)(n.p,{children:["The base auth implementation has been removed from Serverpod core and moved into the ",(0,i.jsx)(n.code,{children:"serverpod_auth"})," package. If you are not using authentication at all this change does not impact you. If you are using the auth module already the transition is simple."]}),"\n",(0,i.jsxs)(n.p,{children:["The default authentication handler will now throw an ",(0,i.jsx)(n.code,{children:"UnimplementedError"}),". It is now required to supply the authentication handler to the Serverpod object, in your server.dart file make the following change:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_server/serverpod_auth_server.dart' as auth;\n\nvoid run(List<String> args) async {\n  var pod = Serverpod(\n    args,\n    Protocol(),\n    Endpoints(),\n    authenticationHandler: auth.authenticationHandler, // Add this line\n  );\n\n  ...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"advanced-integrations",children:"Advanced integrations"}),"\n",(0,i.jsxs)(n.p,{children:["The methods ",(0,i.jsx)(n.code,{children:"signInUser"})," and ",(0,i.jsx)(n.code,{children:"signOutUser"})," now takes the session object as a param and is no longer available on the session object. Instead import the class ",(0,i.jsx)(n.code,{children:"UserAuthentication"})," from the auth module to access these static methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"UserAuthentication.signInUser(session, userId, 'provider');\n\nUserAuthentication.signOutUser(session);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The table ",(0,i.jsx)(n.code,{children:"serverpod_auth_key"})," has been removed from Serverpod core but is available in the serverpod_auth module instead. This means that if you wrote a custom integration before without using the serverpod_auth module you have to take care of managing your token implementation."]}),"\n",(0,i.jsxs)(n.p,{children:["Adding the definition of the ",(0,i.jsx)(n.code,{children:"serverpod_auth_key"})," table to your project is the simplest way to do a seamless migration."]}),"\n",(0,i.jsx)(n.p,{children:"The table was defined in the following way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"### Provides a method of access for a user to authenticate with the server.\nclass: AuthKey\ntable: serverpod_auth_key\nfields:\n  ### The id of the user to provide access to.\n  userId: int\n\n  ### The hashed version of the key.\n  hash: String\n\n  ### The key sent to the server to authenticate.\n  key: String?, !persist\n\n  ### The scopes this key provides access to.\n  scopeNames: List<String>\n\n  ### The method of signing in this key was generated through. This can be email\n  ### or different social logins.\n  method: String\nindexes:\n  serverpod_auth_key_userId_idx:\n    fields: userId\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Your are then responsible for creating/removing entries in this table, the old ",(0,i.jsx)(n.code,{children:"signInUser"})," and ",(0,i.jsx)(n.code,{children:"signOutUser"})," that used to provide this functionality can be found ",(0,i.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/blob/13795a7bd4c0cc5a03101b6f378cb914673046dd/packages/serverpod/lib/src/server/session.dart#L359-L394",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"changes-to-the-session-object",children:"Changes to the Session Object"}),"\n",(0,i.jsx)(n.h3,{id:"removed-deprecated-fields",children:"Removed deprecated fields"}),"\n",(0,i.jsxs)(n.p,{children:["With Serverpod 2.0, we have removed the deprecated legacy database layer from the ",(0,i.jsx)(n.code,{children:"Session"})," object. The ",(0,i.jsx)(n.code,{children:"Session"})," object now incorporates the new database layer, accessed via the ",(0,i.jsx)(n.code,{children:"dbNext"})," field in Serverpod 1.2, under the ",(0,i.jsx)(n.code,{children:"db"})," field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"session.dbNext.find(...);\n"})}),"\n",(0,i.jsx)(n.p,{children:"becomes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"session.db.find(...);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"authenticated-user-information-retrieval",children:"Authenticated user information retrieval"}),"\n",(0,i.jsxs)(n.p,{children:["In Serverpod 2.0, we have removed the getters ",(0,i.jsx)(n.code,{children:"scopes"})," and ",(0,i.jsx)(n.code,{children:"authenticatedUser"})," from session. This information is now retrievable through the ",(0,i.jsx)(n.code,{children:"authenticated"})," getter as fields of the returned object."]}),"\n",(0,i.jsx)(n.p,{children:"Replace this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"int? userId = await session.auth.authenticatedUser;\n\nSet<Scopes>? scopes = await session.scopes;\n"})}),"\n",(0,i.jsx)(n.p,{children:"With this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"final authenticated = await session.authenticated;\n\n//Read authenticated userId\nint? userId = authenticated?.userId;\n\n//Read scopes\nSet<Scopes>? scopes = authenticated?.scopes;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"authenticated"})," property is set on the session it effectively means there is an authenticated user making the request."]}),"\n",(0,i.jsx)(n.h3,{id:"authentication-helpers",children:"Authentication helpers"}),"\n",(0,i.jsxs)(n.p,{children:["The field ",(0,i.jsx)(n.code,{children:"auth"})," has been removed and the methods ",(0,i.jsx)(n.code,{children:"signInUser"})," and ",(0,i.jsx)(n.code,{children:"signOutUser"})," have been moved to the ",(0,i.jsx)(n.code,{children:"serverpod_auth"})," module."]}),"\n",(0,i.jsx)(n.h2,{id:"changes-to-database-queries",children:"Changes to database queries"}),"\n",(0,i.jsx)(n.h3,{id:"removed-unsafequerymappedresults",children:"Removed unsafeQueryMappedResults(...)"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"unsafeQueryMappedResults(...)"})," method has been removed. A similar result can now instead be formatted from the ",(0,i.jsx)(n.code,{children:"unsafeQuery(...)"})," result by calling the ",(0,i.jsx)(n.code,{children:"toColumnMap()"})," method for each row of the result. ",(0,i.jsx)(n.code,{children:"toColumnMap"})," returns a map containing the query alias for the column as key and the row-column value as value."]}),"\n",(0,i.jsx)(n.p,{children:"Given a query that performs a join like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT\n "company"."id" AS "company.id",\n "company"."name" AS "company.name",\n "company"."townId" AS "company.townId",\n "company_town_town"."id" AS "company_town_town.id",\n "company_town_town"."name" AS "company_town_town.name",\n "company_town_town"."mayorId" AS "company_town_town.mayorId"\nFROM\n "company"\nLEFT JOIN\n "town" AS "company_town_town" ON "company"."townId" = "company_town_town"."id"\nORDER BY\n "company"."name"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The return type from ",(0,i.jsx)(n.code,{children:"unsafeQueryMappedResults(...)"})," in 1.2 was:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "company": {\n      "company.id": 40,\n      "company.name": "Apple",\n      "company.townId": 64\n    },\n    "town": {\n      "company_town_town.id": 64,\n      "company_town_town.name": "San Francisco",\n      "company_town_town.mayorId": null\n    }\n  },\n  {\n    "company": {\n      "company.id": 39,\n      "company.name": "Serverpod",\n      "company.townId": 63\n    },\n    "town": {\n      "company_town_town.id": 63,\n      "company_town_town.name": "Stockholm",\n      "company_town_town.mayorId": null\n    }\n  }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["And if ",(0,i.jsx)(n.code,{children:"result.map((row) => row.toColumnMap())"})," is used to format the result from ",(0,i.jsx)(n.code,{children:"unsafeQuery(...)"})," in 2.0, the following result is obtained:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "company.id": 38,\n    "company.name": "Apple",\n    "company.townId": 62,\n    "company_town_town.id": 62,\n    "company_town_town.name": "San Francisco",\n    "company_town_town.mayorId": null\n  },\n  {\n    "company.id": 37,\n    "company.name": "Serverpod",\n    "company.townId": 61,\n    "company_town_town.id": 61,\n    "company_town_town.name": "Stockholm",\n    "company_town_town.mayorId": null\n  }\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"or for a simple query without aliases:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT\n "id",\n "name",\n "townId"\nFROM\n "company"\nORDER BY\n "name"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["the return type from ",(0,i.jsx)(n.code,{children:"unsafeQueryMappedResults(...)"})," in 1.2 was:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "company": {\n      "id": 54,\n      "name": "Apple",\n      "townId": 86\n    }\n  },\n  {\n    "company": {\n      "id": 53,\n      "name": "Serverpod",\n      "townId": 85\n    }\n  }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["and if ",(0,i.jsx)(n.code,{children:"result.map((row) => row.toColumnMap())"})," is used to format the result from ",(0,i.jsx)(n.code,{children:"unsafeQuery(...)"})," in 2.0, the following result is obtained:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:' [\n  {\n    "id": 54,\n    "name": "Apple",\n    "townId": 86\n  },\n  {\n    "id": 53,\n    "name": "Serverpod",\n    "townId": 85\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"update-return-type-for-delete-operations",children:"Update return type for delete operations"}),"\n",(0,i.jsxs)(n.p,{children:["The return type for all delete operations has been changed from the ",(0,i.jsx)(n.code,{children:"id"})," of the deleted rows to the actual deleted rows. This makes the return type for the delete operations consistent with the return type of the other database operations. It also dramatically simplifies retrieving and removing rows in concurrent environments."]}),"\n",(0,i.jsx)(n.p,{children:"Return type before the change:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"int companyId = await Company.db.deleteRow(session, company);\nList<int> companyIds = await Company.db.delete(session, [company]);\nList<int> companyIds = await Company.db.deleteWhere(session, where: (t) => t.name.like('%Ltd'));\n"})}),"\n",(0,i.jsx)(n.p,{children:"Return types after the change:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"Company company = await Company.db.deleteRow(session, company);\nList<Company> companies = await Company.db.delete(session, [company]);\nList<Company> companies = await Company.db.deleteWhere(session, where: (t) => t.name.like('%Ltd'));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"changes-to-database-tables",children:"Changes to database tables"}),"\n",(0,i.jsx)(n.h3,{id:"integer-representation-changed-to-bigint",children:"Integer representation changed to bigint"}),"\n",(0,i.jsxs)(n.p,{children:["Integer representation in the database has changed from ",(0,i.jsx)(n.code,{children:"int"})," to ",(0,i.jsx)(n.code,{children:"bigint"}),". From now on, models with ",(0,i.jsx)(n.code,{children:"int"})," fields will generate database migrations where that field is defined as a ",(0,i.jsx)(n.code,{children:"bigint"})," type in the database."]}),"\n",(0,i.jsxs)(n.p,{children:["This change also applies to the ",(0,i.jsx)(n.code,{children:"id"})," field of models where ",(0,i.jsx)(n.code,{children:"bigserial"})," is now used to generate the id."]}),"\n",(0,i.jsx)(n.p,{children:"The change is compatible with existing databases. Existing migrations therefore, won't be changed by the Serverpod migration system. No manual modification to the database is required if this data representation is not essential for the application. However, all new migrations will be created with the new representation."}),"\n",(0,i.jsx)(n.h4,{id:"why-is-this-change-made",children:"Why is this change made?"}),"\n",(0,i.jsxs)(n.p,{children:["The change was made to ensure that ",(0,i.jsx)(n.a,{href:"https://dart.dev/guides/language/numbers",children:"Dart"})," and the database representation of integers is consistent. Dart uses 64-bit integers, and the ",(0,i.jsx)(n.code,{children:"int"})," type in Dart is a 64-bit integer. The ",(0,i.jsx)(n.code,{children:"int"})," type in PostgreSQL is a 32-bit integer. This means that the ",(0,i.jsx)(n.code,{children:"int"})," type in Dart can represent larger numbers than the ",(0,i.jsx)(n.code,{children:"int"})," type in PostgreSQL. By using ",(0,i.jsx)(n.code,{children:"bigint"})," in PostgreSQL, the integer representation is consistent between Dart and the database."]}),"\n",(0,i.jsxs)(n.p,{children:["In terms of performance, there are usually no significant drawbacks with using ",(0,i.jsx)(n.code,{children:"bigint"})," instead of ",(0,i.jsx)(n.code,{children:"int"}),". In most cases a good index strategy will be more important than the integer representation. Here is a guide that benchmarks the performance of ",(0,i.jsx)(n.code,{children:"int"})," and ",(0,i.jsx)(n.code,{children:"bigint"})," in PostgreSQL: ",(0,i.jsx)(n.a,{href:"https://blog.rustprooflabs.com/2021/06/postgres-bigint-by-default",children:"Use BIGINT in Postgres"})]}),"\n",(0,i.jsx)(n.h4,{id:"ensuring-new-databases-are-created-with-the-new-representation",children:"Ensuring new databases are created with the new representation"}),"\n",(0,i.jsxs)(n.p,{children:["Since existing migrations won't be changed, databases that are created with these will still use ",(0,i.jsx)(n.code,{children:"int"})," to represent integers."]}),"\n",(0,i.jsx)(n.p,{children:"To ensure new databases are created with the new representation, the latest migration should be generated using Serverpod 2.0. It is enough to have an empty migration to ensure new databases use the new representation."}),"\n",(0,i.jsx)(n.p,{children:"A new empty migration can be created by running the following command in the terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ serverpod create-migration --force\n"})}),"\n",(0,i.jsx)(n.h4,{id:"migration-of-existing-tables",children:"Migration of existing tables"}),"\n",(0,i.jsx)(n.p,{children:"The migration of existing tables to use the new representation will vary depending on the database content. Utilizing the wrong migration strategy might cause downtime for your application. That is the reason Serverpod does not automatically migrate existing tables."}),"\n",(0,i.jsx)(n.h5,{id:"small-tables",children:"Small tables"}),"\n",(0,i.jsx)(n.p,{children:"A simple way to migrate for small tables is to execute the following sql query to the database:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SEQUENCE "my_table_id_seq" AS bigint;\nALTER TABLE "my_table" ALTER "id" TYPE bigint;\nALTER TABLE "my_table" ALTER "myNumber" TYPE bigint;\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The first two lines modify the id sequence for a table named ",(0,i.jsx)(n.code,{children:'"my_table"'})," to use ",(0,i.jsx)(n.code,{children:"bigint"})," instead of ",(0,i.jsx)(n.code,{children:"int"}),". The last line modifies a column of the same table to use ",(0,i.jsx)(n.code,{children:"bigint"}),". The drawback of this approach is that it locks the table during the migration. Therefore, this strategy is not recommended for large tables."]}),"\n",(0,i.jsx)(n.h5,{id:"large-tables",children:"Large tables"}),"\n",(0,i.jsx)(n.p,{children:"Migrating large tables without application downtime is a more complex operation, and the approach will vary depending on the data structure. Below are some gathered resources on the subject."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://zemanta.github.io/2021/08/25/column-migration-from-int-to-bigint-in-postgresql/",children:"Zemata - Column migration from INT to BIGINT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://am2.co/2019/12/changing-a-column-from-int-to-bigint-without-downtime/",children:"AM^2 - Changing a column from int to bigint, without downtime"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.crunchydata.com/blog/the-integer-at-the-end-of-the-universe-integer-overflow-in-postgres",children:"Crunch data - The integer at the End of the Universe"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"changes-in-the-authentication-module",children:"Changes in the authentication module"}),"\n",(0,i.jsx)(n.h3,{id:"unsecure-random-disabled-by-default",children:"Unsecure random disabled by default"}),"\n",(0,i.jsxs)(n.p,{children:["The authentication module's default value for allowing unsecure random number generation is now ",(0,i.jsx)(n.code,{children:"false"}),". An exception will be thrown when trying to hash a password if no secure random number generator is available. To preserve the old behavior and enable unsecure random number generation, set the ",(0,i.jsx)(n.code,{children:"allowUnsecureRandom"})," property in the ",(0,i.jsx)(n.code,{children:"AuthConfig"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"auth.AuthConfig.set(auth.AuthConfig(\n  allowUnsecureRandom: true,\n));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"updates-to-serialization-in-serverpod-20",children:"Updates to Serialization in Serverpod 2.0"}),"\n",(0,i.jsx)(n.h3,{id:"general-changes-to-model-serialization",children:"General Changes to Model Serialization"}),"\n",(0,i.jsxs)(n.p,{children:["Serverpod 2.0 significantly streamlines the model serialization process. In earlier versions, the ",(0,i.jsx)(n.code,{children:"fromJson"})," factory constructors needed a ",(0,i.jsx)(n.code,{children:"serializationManager"})," parameter to handle object deserialization. This parameter has now been removed, enhancing simplicity and usability."]}),"\n",(0,i.jsx)(n.h4,{id:"before-change",children:"Before change"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"final Map<String, dynamic> json = classInstance.toJson();\nfinal SerializationManager serializationManager = Protocol();\nfinal ClassName test = ClassName.fromJson(json, serializationManager);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"after-change",children:"After change"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"final Map<String, dynamic> json = classInstance.toJson();\nfinal ClassName test = ClassName.fromJson(json);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"enhancements-for-custom-serialization",children:"Enhancements for Custom Serialization"}),"\n",(0,i.jsxs)(n.p,{children:["The removal of the ",(0,i.jsx)(n.code,{children:"serializationManager"})," parameter in Serverpod 2.0 simplifies the serialization process not only for general models but also significantly enhances custom serialization workflows.\nFor custom classes that previously utilized unique serialization logic with the ",(0,i.jsx)(n.code,{children:"serializationManager"}),", adjustments may be necessary."]}),"\n",(0,i.jsx)(n.h4,{id:"previous-implementation",children:"Previous Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["In the previous versions, models required the ",(0,i.jsx)(n.code,{children:"serializationManager"})," to be passed explicitly, as shown in the following code snippet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"factory ClassName.fromJson(\n    Map<String, dynamic> json,\n    SerializationManager serializationManager,\n  ) {\n    return ClassName(\n      json['name'],\n    );\n  }\n"})}),"\n",(0,i.jsx)(n.h4,{id:"updated-implementation",children:"Updated Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["With the release of Serverpod 2.0, the ",(0,i.jsx)(n.code,{children:"fromJson"})," constructor has been simplified and the ",(0,i.jsx)(n.code,{children:"serializationManager"})," has been removed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"factory ClassName.fromJson(\n    Map<String, dynamic> json,\n  ) {\n    return ClassName(\n      json['name'],\n    );\n  }\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"deprecation-notice-for-serializableentity",children:["Deprecation Notice for ",(0,i.jsx)(n.code,{children:"SerializableEntity"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"SerializableEntity"})," class is deprecated and will be removed in version 3. Please implement the ",(0,i.jsx)(n.code,{children:"SerializableModel"})," interface instead for creating serializable models."]}),"\n",(0,i.jsx)(n.h3,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,i.jsxs)(n.p,{children:["To migrate your code from ",(0,i.jsx)(n.code,{children:"SerializableEntity"})," to ",(0,i.jsx)(n.code,{children:"SerializableModel"}),", replace ",(0,i.jsx)(n.code,{children:"extends SerializableEntity"})," with ",(0,i.jsx)(n.code,{children:"implements SerializableModel"})," in your model classes."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Before:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class CustomClass extends SerializableEntity {\n  // Your code here\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"After:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class CustomClass implements SerializableModel {\n  // Your code here\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);