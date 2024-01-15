"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6055],{50797:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(85893),t=a(11151);const i={},o="Serialization",r={id:"concepts/serialization",title:"Serialization",description:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database.",source:"@site/versioned_docs/version-1.1.1/05-concepts/02-serialization.md",sourceDirName:"05-concepts",slug:"/concepts/serialization",permalink:"/1.1.1/concepts/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/02-serialization.md",tags:[],version:"1.1.1",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with endpoints",permalink:"/1.1.1/concepts/working-with-endpoints"},next:{title:"Sessions",permalink:"/1.1.1/concepts/sessions"}},l={},d=[{value:"Serverpod&#39;s native serialization",id:"serverpods-native-serialization",level:2},{value:"Extending the generated classes",id:"extending-the-generated-classes",level:3},{value:"Limiting visibility of a generated class",id:"limiting-visibility-of-a-generated-class",level:3},{value:"Adding documentation",id:"adding-documentation",level:3},{value:"Custom serializable objects",id:"custom-serializable-objects",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"serialization",children:"Serialization"}),"\n",(0,n.jsx)(s.p,{children:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database."}),"\n",(0,n.jsx)(s.h2,{id:"serverpods-native-serialization",children:"Serverpod's native serialization"}),"\n",(0,n.jsxs)(s.p,{children:["The structure for your serialized classes is defined in yaml-files in the ",(0,n.jsx)(s.code,{children:"protocol"})," directory. Run ",(0,n.jsx)(s.code,{children:"serverpod generate"})," to build the Dart code for the classes and make them accessible to both the server and client."]}),"\n",(0,n.jsx)(s.p,{children:"Here is a simple example of a yaml-file defining a serializable class:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Supported types are ",(0,n.jsx)(s.code,{children:"bool"}),", ",(0,n.jsx)(s.code,{children:"int"}),", ",(0,n.jsx)(s.code,{children:"double"}),", ",(0,n.jsx)(s.code,{children:"String"}),", ",(0,n.jsx)(s.code,{children:"DateTime"}),", ",(0,n.jsx)(s.code,{children:"ByteData"}),", and other serializable classes. You can also use ",(0,n.jsx)(s.code,{children:"List"}),"s and ",(0,n.jsx)(s.code,{children:"Map"}),"s of the supported types, just make sure to specify the types. Null safety is supported. The keys of ",(0,n.jsx)(s.code,{children:"Map"})," must be non-nullable ",(0,n.jsx)(s.code,{children:"String"}),"s. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,n.jsx)(s.h3,{id:"extending-the-generated-classes",children:"Extending the generated classes"}),"\n",(0,n.jsx)(s.p,{children:"Sometimes you will want to add custom methods to the generated classes. The easiest way to do this is with Dart's extension feature."}),"\n",(0,n.jsx)(s.h3,{id:"limiting-visibility-of-a-generated-class",children:"Limiting visibility of a generated class"}),"\n",(0,n.jsx)(s.p,{children:"By default, generated code for your serializable objects is available both on the server and the client. You may want to have the code on the server side only. E.g., if the serializable object is connected to a database table containing private information."}),"\n",(0,n.jsxs)(s.p,{children:["To make a serializable class generated only on the server side, set the ",(0,n.jsx)(s.code,{children:"serverOnly"})," property to ",(0,n.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"class: MyPrivateClass\nserverOnly: true\nfields:\n  hiddenSecretKey: String\n"})}),"\n",(0,n.jsx)(s.h3,{id:"adding-documentation",children:"Adding documentation"}),"\n",(0,n.jsxs)(s.p,{children:["Serverpod allows you to add documentation to your serializable objects in a similar way that you would add documentation to your Dart code. Use three hashes (",(0,n.jsx)(s.code,{children:"###"}),") to indicate that a comment should be considered documentation."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"### Information about a company.\nclass: Company\nfields:\n  ### The name of the company.\n  name: String\n\n  ### The date the company was founded, if known.\n  foundedDate: DateTime?\n\n  ### A list of people currently employed at the company.\n  employees: List<Employee>\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Serverpod's serializable objects can easily be saved to or read from the database. You can read more about this in the next section, ",(0,n.jsx)(s.a,{href:"./database-communication",children:"Database communication"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"custom-serializable-objects",children:"Custom serializable objects"}),"\n",(0,n.jsx)(s.p,{children:"For most purposes, you will want to use Serverpod's native serialization as described above. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to two simple rules:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Your objects must have a method called toJson() which returns a JSON serialization of the object."}),"\n",(0,n.jsx)(s.li,{children:"There must be a constructor or factory called fromJson(), which takes a JSON serialization and a Serialization manager as parameters."}),"\n",(0,n.jsx)(s.li,{children:"You must declare your custom serializable objects in the config/generator.yaml file."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Typically, you will want to place your serializable objects in a shared package between the client and your server. For instance, if you use Freezed to do your serialization, the class would look something like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-dart",children:"import 'package:freezed_annotation/freezed_annotation.dart';\nimport 'package:serverpod_serialization/serverpod_serialization.dart';\n\npart 'freezed_custom_class.freezed.dart';\npart 'freezed_custom_class.g.dart';\n\n@freezed\nclass FreezedCustomClass with _$FreezedCustomClass {\n  const factory FreezedCustomClass({\n    required String firstName,\n    required String lastName,\n    required int age,\n  }) = _FreezedCustomClass;\n\n  factory FreezedCustomClass.fromJson(\n    Map<String, Object?> json,\n    SerializationManager serializationManager,\n  ) =>\n      _$FreezedCustomClassFromJson(json);\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"In the config/generator.yaml, you declare the package and the class:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"extraClasses:\n  - package:my_shared_package/my_shared_package.dart:FreezedCustomClass\n"})}),"\n",(0,n.jsxs)(s.p,{children:["After adding a new serializable class, you must run ",(0,n.jsx)(s.code,{children:"serverpod generate"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>o});var n=a(67294);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);