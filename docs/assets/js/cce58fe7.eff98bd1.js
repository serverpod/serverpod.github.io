"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6157],{89696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"concepts/models","title":"Working with models","description":"Models are Yaml files used to define serializable classes in Serverpod. They are used to generate Dart code for the server and client, and, if a database table is defined, to generate database code for the server. Using regular .yaml files within lib/src/models is supported, but it is recommended to use .spy.yaml (.spy stands for \\"Serverpod YAML\\") to leverage syntax highlighting provided by the Serverpod Extension for VS Code.","source":"@site/versioned_docs/version-1.2.0/05-concepts/02-models.md","sourceDirName":"05-concepts","slug":"/concepts/models","permalink":"/1.2.0/concepts/models","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/02-models.md","tags":[],"version":"1.2.0","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Working with endpoints","permalink":"/1.2.0/concepts/working-with-endpoints"},"next":{"title":"Custom serialization","permalink":"/1.2.0/concepts/serialization"}}');var i=n(74848),r=n(28453);const d={},l="Working with models",a={},o=[{value:"Class",id:"class",level:2},{value:"Limiting visibility of a generated class",id:"limiting-visibility-of-a-generated-class",level:3},{value:"Exception",id:"exception",level:2},{value:"Enum",id:"enum",level:2},{value:"Adding documentation",id:"adding-documentation",level:2},{value:"Generated code",id:"generated-code",level:2},{value:"copyWith",id:"copywith",level:3},{value:"toJson / fromJson",id:"tojson--fromjson",level:3},{value:"Custom methods",id:"custom-methods",level:3},{value:"Keywords",id:"keywords",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"working-with-models",children:"Working with models"})}),"\n",(0,i.jsxs)(t.p,{children:["Models are Yaml files used to define serializable classes in Serverpod. They are used to generate Dart code for the server and client, and, if a database table is defined, to generate database code for the server. Using regular ",(0,i.jsx)(t.code,{children:".yaml"})," files within ",(0,i.jsx)(t.code,{children:"lib/src/models"})," is supported, but it is recommended to use ",(0,i.jsx)(t.code,{children:".spy.yaml"}),' (.spy stands for "Serverpod YAML") to leverage syntax highlighting provided by the ',(0,i.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=serverpod.serverpod",children:"Serverpod Extension"})," for VS Code."]}),"\n",(0,i.jsx)(t.p,{children:"The files are analyzed by the Serverpod CLI when generating the project and creating migrations."}),"\n",(0,i.jsxs)(t.p,{children:["Run ",(0,i.jsx)(t.code,{children:"serverpod generate"})," to generate dart classes from the model files."]}),"\n",(0,i.jsx)(t.h2,{id:"class",children:"Class"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Supported types are ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/bool-class.html",children:"bool"}),", ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/int-class.html",children:"int"}),", ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/double-class.html",children:"double"}),", ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/String-class.html",children:"String"}),", ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/Duration-class.html",children:"Duration"}),", ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/DateTime-class.html",children:"DateTime"}),", ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-typed_data/ByteData-class.html",children:"ByteData"}),", ",(0,i.jsx)(t.a,{href:"https://pub.dev/documentation/uuid/latest/uuid_value/UuidValue-class.html",children:"UuidValue"}),", and other serializable ",(0,i.jsx)(t.a,{href:"#class",children:"classes"}),", ",(0,i.jsx)(t.a,{href:"#exception",children:"exceptions"})," and ",(0,i.jsx)(t.a,{href:"#enum",children:"enums"}),". You can also use ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/List-class.html",children:"List"}),"s and ",(0,i.jsx)(t.a,{href:"https://api.dart.dev/dart-core/Map-class.html",children:"Map"}),"s of the supported types, just make sure to specify the types. Null safety is supported. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,i.jsx)(t.h3,{id:"limiting-visibility-of-a-generated-class",children:"Limiting visibility of a generated class"}),"\n",(0,i.jsx)(t.p,{children:"By default, generated code for your serializable objects is available both on the server and the client. You may want to have the code on the server side only. E.g., if the serializable object is connected to a database table containing private information."}),"\n",(0,i.jsx)(t.p,{children:"To make a serializable class generated only on the server side, set the serverOnly property to true."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"class: MyPrivateClass\nserverOnly: true\nfields:\n  hiddenSecretKey: String\n"})}),"\n",(0,i.jsxs)(t.p,{children:["It is also possible to set a ",(0,i.jsx)(t.code,{children:"scope"})," on a per-field basis. By default all fields are visible to both the server and the client. The available scopes are ",(0,i.jsx)(t.code,{children:"all"}),", ",(0,i.jsx)(t.code,{children:"serverOnly"}),", ",(0,i.jsx)(t.code,{children:"none"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"class: SelectivelyHiddenClass\nfields:\n  hiddenSecretKey: String, scope=serverOnly\n  publicKey: String\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Serverpod's models can easily be saved to or read from the database. You can read more about this in the ",(0,i.jsx)(t.a,{href:"database/models",children:"Database"})," section."]})}),"\n",(0,i.jsx)(t.h2,{id:"exception",children:"Exception"}),"\n",(0,i.jsxs)(t.p,{children:["The Serverpod models supports creating exceptions that can be thrown in endpoints by using the ",(0,i.jsx)(t.code,{children:"exception"})," keyword. For more in-depth description on how to work with exceptions see ",(0,i.jsx)(t.a,{href:"exceptions",children:"Error handling and exceptions"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"exception: MyException\nfields:\n  message: String\n  errorType: MyEnum\n"})}),"\n",(0,i.jsx)(t.h2,{id:"enum",children:"Enum"}),"\n",(0,i.jsxs)(t.p,{children:["It is easy to add custom enums with serialization support by using the ",(0,i.jsx)(t.code,{children:"enum"})," keyword."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"enum: Animal\nvalues:\n - dog\n - cat\n - bird\n"})}),"\n",(0,i.jsx)(t.p,{children:"By default the serialization will convert the enum to an int representing the index of the value. Changing the order may therefore have unforeseen consequences when reusing old data (such as from a database). Changing the serialization to be based on the name instead of index is easy."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"enum: Animal\nserialized: byName\nvalues:\n - dog\n - cat\n - bird\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"serialized"})," has two valid values ",(0,i.jsx)(t.code,{children:"byName"})," and ",(0,i.jsx)(t.code,{children:"byIndex"}),". When using ",(0,i.jsx)(t.code,{children:"byName"})," the string literal of the enum is used, when using ",(0,i.jsx)(t.code,{children:"byIndex"})," the index value (0, 1, 2, etc) is used."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["It's recommended to always set ",(0,i.jsx)(t.code,{children:"serialized"})," to ",(0,i.jsx)(t.code,{children:"byName"})," in any new Enum models, as this is less fragile and will be changed to the default setting in version 3 of Serverpod."]})}),"\n",(0,i.jsx)(t.h2,{id:"adding-documentation",children:"Adding documentation"}),"\n",(0,i.jsx)(t.p,{children:"Serverpod allows you to add documentation to your serializable objects in a similar way that you would add documentation to your Dart code. Use three hashes (###) to indicate that a comment should be considered documentation."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"### Information about a company.\nclass: Company\nfields:\n  ### The name of the company.\n  name: String\n\n  ### The date the company was founded, if known.\n  foundedDate: DateTime?\n\n  ### A list of people currently employed at the company.\n  employees: List<Employee>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"generated-code",children:"Generated code"}),"\n",(0,i.jsx)(t.p,{children:"Serverpod generates some convenience methods on the Dart classes."}),"\n",(0,i.jsx)(t.h3,{id:"copywith",children:"copyWith"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"copyWith"})," method allows for efficient object copying with selective field updates and is available on all generated ",(0,i.jsx)(t.code,{children:"class"}),"es. Here's how it operates:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"var john = User(name: 'John Doe', age: 25);\nvar jane = john.copyWith(name: 'Jane Doe');\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"copyWith"})," method generates a deep copy of an object, preserving all original fields unless explicitly modified. It can distinguish between a field set to ",(0,i.jsx)(t.code,{children:"null"})," and a field left unspecified (undefined). When using ",(0,i.jsx)(t.code,{children:"copyWith"}),", any field you don't update remains unchanged in the new object."]}),"\n",(0,i.jsx)(t.h3,{id:"tojson--fromjson",children:"toJson / fromJson"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"toJson"})," and ",(0,i.jsx)(t.code,{children:"fromJson"})," methods are generated on all models to help with serialization. Serverpod manages all serialization for you out of the box and you will rarely have to use these methods by your self. See the ",(0,i.jsx)(t.a,{href:"serialization",children:"Serialization"})," section for more info."]}),"\n",(0,i.jsx)(t.h3,{id:"custom-methods",children:"Custom methods"}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes you will want to add custom methods to the generated classes. The easiest way to do this is with ",(0,i.jsx)(t.a,{href:"https://dart.dev/language/extension-methods",children:"Dart's extension feature"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"extension MyExtension on MyClass {\n  bool isCustomMethod() {\n    return true;\n  }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Keyword"})}),(0,i.jsx)(t.th,{children:"Note"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#class",children:"class"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#exception",children:"exception"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"#enum",children:"enum"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#enum",children:(0,i.jsx)(t.strong,{children:"values"})})}),(0,i.jsx)(t.td,{children:"A special key for enums with a list of all enum values."}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#enum",children:(0,i.jsx)(t.strong,{children:"serialized"})})}),(0,i.jsx)(t.td,{children:"Sets the mode enums are serialized in"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#limiting-visibility-of-a-generated-class",children:(0,i.jsx)(t.strong,{children:"serverOnly"})})}),(0,i.jsx)(t.td,{children:"Boolean flag if code generator only should create the code for the server."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/models",children:(0,i.jsx)(t.strong,{children:"table"})})}),(0,i.jsx)(t.td,{children:"A name for the database table, enables generation of database code."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/migrations#opt-out-of-migrations",children:(0,i.jsx)(t.strong,{children:"managedMigration"})})}),(0,i.jsx)(t.td,{children:"A boolean flag to opt out of the database migration system."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#class",children:(0,i.jsx)(t.strong,{children:"fields"})})}),(0,i.jsx)(t.td,{children:"All fields in the generated class should be listed here."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#class",children:(0,i.jsx)(t.strong,{children:"type (fields)"})})}),(0,i.jsx)(t.td,{children:"Denotes the data type for a field."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#limiting-visibility-of-a-generated-class",children:(0,i.jsx)(t.strong,{children:"scope"})})}),(0,i.jsx)(t.td,{children:"Denotes the scope for a field."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/models",children:(0,i.jsx)(t.strong,{children:"persist"})})}),(0,i.jsxs)(t.td,{children:["A boolean flag if the data should be stored in the database or not can be negated with ",(0,i.jsx)(t.code,{children:"!persist"})]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/relations/one-to-one",children:(0,i.jsx)(t.strong,{children:"relation"})})}),(0,i.jsx)(t.td,{children:"Sets a relation between model files, requires a table name to be set."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/relations/one-to-one#bidirectional-relations",children:(0,i.jsx)(t.strong,{children:"name"})})}),(0,i.jsx)(t.td,{children:"Give a name to a relation to pair them."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/relations/one-to-one#with-an-id-field",children:(0,i.jsx)(t.strong,{children:"parent"})})}),(0,i.jsx)(t.td,{children:"Sets the parent table on a relation."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/relations/one-to-one#custom-foreign-key-field",children:(0,i.jsx)(t.strong,{children:"field"})})}),(0,i.jsx)(t.td,{children:"A manual specified foreign key field."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/relations/referential-actions",children:(0,i.jsx)(t.strong,{children:"onUpdate"})})}),(0,i.jsx)(t.td,{children:"Set the referential actions when updating data in the database."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/relations/referential-actions",children:(0,i.jsx)(t.strong,{children:"onDelete"})})}),(0,i.jsx)(t.td,{children:"Set the referential actions when deleting data in the database."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/relations/one-to-one#optional-relation",children:(0,i.jsx)(t.strong,{children:"optional"})})}),(0,i.jsx)(t.td,{children:"A boolean flag to make a relation optional."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/indexing",children:(0,i.jsx)(t.strong,{children:"indexes"})})}),(0,i.jsx)(t.td,{children:"Create indexes on your fields / columns."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/indexing",children:(0,i.jsx)(t.strong,{children:"fields (index)"})})}),(0,i.jsx)(t.td,{children:"List the fields to create the indexes on."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/indexing",children:(0,i.jsx)(t.strong,{children:"type (index)"})})}),(0,i.jsx)(t.td,{children:"The type of index to create."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"database/indexing",children:(0,i.jsx)(t.strong,{children:"unique"})})}),(0,i.jsx)(t.td,{children:"Boolean flag to make the entries unique in the database."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);