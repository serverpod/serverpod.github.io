"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6789],{89:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var d=s(5893),i=s(1151);const t={},a="One-to-one",r={id:"concepts/database/relations/one-to-one",title:"One-to-one",description:"One-to-one (1n) relation.",source:"@site/docs/05-concepts/06-database/03-relations/01-one-to-one.md",sourceDirName:"05-concepts/06-database/03-relations",slug:"/concepts/database/relations/one-to-one",permalink:"/next/concepts/database/relations/one-to-one",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/06-database/03-relations/01-one-to-one.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/next/concepts/database/models"},next:{title:"One-to-many",permalink:"/next/concepts/database/relations/one-to-many"}},l={},o=[{value:"Defining the Relationship",id:"defining-the-relationship",level:2},{value:"With an Id field",id:"with-an-id-field",level:3},{value:"With an object",id:"with-an-object",level:3},{value:"Optional relation",id:"optional-relation",level:3},{value:"Custom foreign key field",id:"custom-foreign-key-field",level:3},{value:"Generated SQL",id:"generated-sql",level:3},{value:"Independent relations defined on both sides",id:"independent-relations-defined-on-both-sides",level:2},{value:"Bidirectional relations",id:"bidirectional-relations",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"one-to-one",children:"One-to-one"}),"\n",(0,d.jsxs)(n.p,{children:["One-to-one (1:1) relationships represent a unique association between two entities, there is at most one entity that can be connected on either side of the relation. This means we have to set a ",(0,d.jsx)(n.strong,{children:"unique index"})," on the foreign key in the database. Without the unique index the relation would be considered a one-to-many (1",":n",") relation."]}),"\n",(0,d.jsx)(n.h2,{id:"defining-the-relationship",children:"Defining the Relationship"}),"\n",(0,d.jsxs)(n.p,{children:["In the following examples we show how to configure a 1:1 relationship between  ",(0,d.jsx)(n.code,{children:"User"})," and ",(0,d.jsx)(n.code,{children:"Address"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"with-an-id-field",children:"With an Id field"}),"\n",(0,d.jsxs)(n.p,{children:["In the most simple case, all we have to do is add an ",(0,d.jsx)(n.code,{children:"id"})," field on one of the models."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"# address.yaml\nclass: Address\ntable: address\nfields:\n  street: String\n\n# user.yaml\nclass: User\ntable: user\nfields:\n  addressId: int, relation(parent=address) // Foreign key field\nindexes:\n  user_address_unique_idx:\n    fields: addressId\n    unique: true\n"})}),"\n",(0,d.jsxs)(n.p,{children:["In the example, the ",(0,d.jsx)(n.code,{children:"relation"})," keyword annotates the ",(0,d.jsx)(n.code,{children:"addressId"})," field to hold the foreign key. The field needs to be of type ",(0,d.jsx)(n.code,{children:"int"})," and the relation keyword needs to specify the ",(0,d.jsx)(n.code,{children:"parent"})," parameter. The ",(0,d.jsx)(n.code,{children:"parent"})," parameter defines which table the relation is towards, in this case the ",(0,d.jsx)(n.code,{children:"Address"})," table."]}),"\n",(0,d.jsxs)(n.p,{children:["The addressId is ",(0,d.jsx)(n.strong,{children:"required"})," in this example because the field is not nullable. That means that each ",(0,d.jsx)(n.code,{children:"User"})," must have a related ",(0,d.jsx)(n.code,{children:"Address"}),". If you want to make the relation optional, change the datatype from ",(0,d.jsx)(n.code,{children:"int"})," to ",(0,d.jsx)(n.code,{children:"int?"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["When fetching a ",(0,d.jsx)(n.code,{children:"User"})," from the database the ",(0,d.jsx)(n.code,{children:"addressId"})," field will automatically be populated with the related ",(0,d.jsx)(n.code,{children:"Address"})," object ",(0,d.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"with-an-object",children:"With an object"}),"\n",(0,d.jsx)(n.p,{children:"While the previous example highlights manual handling of data, there's an alternative approach that simplifies data access using automated handling. By directly specifying the Address type in the User class, Serverpod can automatically handle the relation for you."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"# address.yaml\nclass: Address\ntable: address\nfields:\n  street: String\n\n# user.yaml\nclass: User\ntable: user\nfields:\n  address: Address?, relation // Object relation field\nindexes:\n  user_address_unique_idx:\n    fields: addressId\n    unique: true\n"})}),"\n",(0,d.jsxs)(n.p,{children:["In this example, we define an object relation field by annotating the ",(0,d.jsx)(n.code,{children:"address"})," field with the ",(0,d.jsx)(n.code,{children:"relation"})," keyword where the type is another entity, ",(0,d.jsx)(n.code,{children:"Address?"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Serverpod then automatically generates a foreign key field (as seen in the last example) named ",(0,d.jsx)(n.code,{children:"addressId"})," in the ",(0,d.jsx)(n.code,{children:"User"})," class. This auto-generated field is non-nullable by default and is by default always named from the object relation field with the suffix ",(0,d.jsx)(n.code,{children:"Id"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The object field, in this case ",(0,d.jsx)(n.code,{children:"address"}),", must always be nullable (as indicated by ",(0,d.jsx)(n.code,{children:"Address?"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["An object relation field gives a big advantage when fetching data. Utilizing ",(0,d.jsx)(n.a,{href:"../relation-queries",children:"relational queries"})," enables filtering based on relation attributes or optionally including the related data in the result."]}),"\n",(0,d.jsxs)(n.p,{children:["No ",(0,d.jsx)(n.code,{children:"parent"})," keyword is needed here because the relational table is inferred from the type on the field."]}),"\n",(0,d.jsx)(n.h3,{id:"optional-relation",children:"Optional relation"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"# user.yaml\nclass: User\ntable: user\nfields:\n  address: Address?, relation(optional)\nindexes:\n  user_address_unique_idx:\n    fields: addressId\n    unique: true\n"})}),"\n",(0,d.jsxs)(n.p,{children:["With the introduction of the ",(0,d.jsx)(n.code,{children:"optional"})," keyword in the relation, the automatically generated ",(0,d.jsx)(n.code,{children:"addressId"})," field becomes nullable. This means that the ",(0,d.jsx)(n.code,{children:"addressId"})," can either hold a foreign key to the related ",(0,d.jsx)(n.code,{children:"address"})," table or be set to null, indicating no associated address."]}),"\n",(0,d.jsx)(n.h3,{id:"custom-foreign-key-field",children:"Custom foreign key field"}),"\n",(0,d.jsx)(n.p,{children:"Serverpod also provides a way to customize the name of the foreign key field used in an object relation."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"# user.yaml\nclass: User\ntable: user\nfields:\n  customIdField: int\n  address: Address?, relation(field=customIdField)\nindexes:\n  user_address_unique_idx:\n    fields: customIdField\n    unique: true\n"})}),"\n",(0,d.jsxs)(n.p,{children:["In this example, we define a custom foreign key field with the ",(0,d.jsx)(n.code,{children:"field"})," parameter. The argument defines what field that is used as the foreign key field. In this case, ",(0,d.jsx)(n.code,{children:"customIdField"})," is used instead of the default auto-generated name."]}),"\n",(0,d.jsxs)(n.p,{children:["If you want the custom foreign key to be nullable, simply define its type as ",(0,d.jsx)(n.code,{children:"int?"}),". Note that the ",(0,d.jsx)(n.code,{children:"field"})," keyword cannot be used in conjunction with the ",(0,d.jsx)(n.code,{children:"optional"})," keyword. Instead, directly mark the field as nullable."]}),"\n",(0,d.jsx)(n.h3,{id:"generated-sql",children:"Generated SQL"}),"\n",(0,d.jsx)(n.p,{children:"The following code block shows how to set up the same relation with raw SQL. Serverpod will generate this code behind the scenes."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE "address" (\n    "id" serial PRIMARY KEY,\n    "street" text NOT NULL\n);\n\nCREATE TABLE "user" (\n    "id" serial PRIMARY KEY,\n    "addressId" integer NOT NULL\n);\n\n\nCREATE UNIQUE INDEX "user_address_unique_idx" ON "user" USING btree ("addressId");\n\nALTER TABLE ONLY "user"\n    ADD CONSTRAINT "user_fk_0"\n    FOREIGN KEY("addressId")\n    REFERENCES "address"("id")\n    ON DELETE CASCADE\n    ON UPDATE NO ACTION;\n'})}),"\n",(0,d.jsx)(n.h2,{id:"independent-relations-defined-on-both-sides",children:"Independent relations defined on both sides"}),"\n",(0,d.jsx)(n.p,{children:"You are able to define as many independent relations as you wish on each side of the relation. This is useful when you want to have multiple relations between two entities."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"# user.yaml\nclass: User\ntable: user\nfields:\n  friendsAddress: Address?, relation\nindexes:\n  user_address_unique_idx:\n    fields: friendsAddressId\n    unique: true\n\n# address.yaml\nclass: Address\ntable: address\nfields:\n  street: String\n  resident: User?, relation\nindexes:\n  address_user_unique_idx:\n    fields: residentId\n    unique: true\n"})}),"\n",(0,d.jsx)(n.p,{children:"Both relations operate independently of each other, resulting in two distinct relationships with their respective unique indexes."}),"\n",(0,d.jsx)(n.h2,{id:"bidirectional-relations",children:"Bidirectional relations"}),"\n",(0,d.jsx)(n.p,{children:"If access to the same relation is desired from both sided, a bidirectional relation can be defined."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"# user.yaml\nclass: User\ntable: user\nfields:\n  addressId: int\n  address: Address?, relation(name=user_address, field=addressId)\nindexes:\n  user_address_unique_idx:\n    fields: addressId\n    unique: true\n\n# address.yaml\nclass: Address\ntable: address\nfields:\n  street: String\n  user: User?, relation(name=user_address)\n"})}),"\n",(0,d.jsx)(n.p,{children:"The example illustrates a 1:1 relationship between User and Address where both sides of the relationship are explicitly specified."}),"\n",(0,d.jsxs)(n.p,{children:["Using the ",(0,d.jsx)(n.code,{children:"name"})," parameter, we define a shared name for the relationship. It serves as the bridge connecting the ",(0,d.jsx)(n.code,{children:"address"})," field in the User class to the ",(0,d.jsx)(n.code,{children:"user"})," field in the Address class. Meaning that the same ",(0,d.jsx)(n.code,{children:"User"})," referencing an ",(0,d.jsx)(n.code,{children:"Address"})," is accessible from the ",(0,d.jsx)(n.code,{children:"Address"})," as well."]}),"\n",(0,d.jsxs)(n.p,{children:["Without specifying the ",(0,d.jsx)(n.code,{children:"name"})," parameter, you'd end up with two unrelated relationships."]}),"\n",(0,d.jsxs)(n.p,{children:["When the relationship is defined on both sides, it's ",(0,d.jsx)(n.strong,{children:"required"})," to specify the ",(0,d.jsx)(n.code,{children:"field"})," keyword. This is because Serverpod cannot automatically determine which side should hold the foreign key field. You decide which side is most logical for your data."]}),"\n",(0,d.jsxs)(n.p,{children:["In a relationship where there is an object on both sides a unique index is always ",(0,d.jsx)(n.strong,{children:"required"})," on the foreign key field."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var d=s(7294);const i={},t=d.createContext(i);function a(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);