"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[8752],{3218:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(5893),t=n(1151);const o={},i="Serialization",r={id:"concepts/serialization",title:"Serialization",description:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database.",source:"@site/versioned_docs/version-1.0.0/04-concepts/02-serialization.md",sourceDirName:"04-concepts",slug:"/concepts/serialization",permalink:"/1.0.0/concepts/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.0.0/04-concepts/02-serialization.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with endpoints",permalink:"/1.0.0/concepts/working-with-endpoints"},next:{title:"Database communication",permalink:"/1.0.0/concepts/database-communication"}},d={},l=[{value:"Serverpod&#39;s native serialization",id:"serverpods-native-serialization",level:2},{value:"Extending the generated classes",id:"extending-the-generated-classes",level:3},{value:"Adding documentation",id:"adding-documentation",level:3},{value:"Custom serializable objects",id:"custom-serializable-objects",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"serialization",children:"Serialization"}),"\n",(0,s.jsx)(a.p,{children:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database."}),"\n",(0,s.jsx)(a.h2,{id:"serverpods-native-serialization",children:"Serverpod's native serialization"}),"\n",(0,s.jsxs)(a.p,{children:["The structure for your serialized classes is defined in yaml-files in the ",(0,s.jsx)(a.code,{children:"protocol"})," directory. Run ",(0,s.jsx)(a.code,{children:"serverpod generate"})," to build the Dart code for the classes and make them accessible to both the server and client."]}),"\n",(0,s.jsx)(a.p,{children:"Here is a simple example of a yaml-file defining a serializable class:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Supported types are ",(0,s.jsx)(a.code,{children:"bool"}),", ",(0,s.jsx)(a.code,{children:"int"}),", ",(0,s.jsx)(a.code,{children:"double"}),", ",(0,s.jsx)(a.code,{children:"String"}),", ",(0,s.jsx)(a.code,{children:"DateTime"}),", ",(0,s.jsx)(a.code,{children:"ByteData"}),", and other serializable classes. You can also use ",(0,s.jsx)(a.code,{children:"List"}),"s and ",(0,s.jsx)(a.code,{children:"Map"}),"s of the supported types, just make sure to specify the types. Null safety is supported. The keys of ",(0,s.jsx)(a.code,{children:"Map"})," must be non-nullable ",(0,s.jsx)(a.code,{children:"String"}),"s. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,s.jsx)(a.h3,{id:"extending-the-generated-classes",children:"Extending the generated classes"}),"\n",(0,s.jsx)(a.p,{children:"Sometimes you will want to add custom methods to the generated classes. The easiest way to do this is with Dart's extension feature."}),"\n",(0,s.jsx)(a.h3,{id:"adding-documentation",children:"Adding documentation"}),"\n",(0,s.jsxs)(a.p,{children:["Serverpod allows you to add documentation to your serializable objects in a similar way that you would add documentation to your Dart code. Use three hashes (",(0,s.jsx)(a.code,{children:"###"}),") to indicate that a comment should be considered documentation."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"### Information about a company.\nclass: Company\nfields:\n  ### The name of the company.\n  name: String\n\n  ### The date the company was founded, if known.\n  foundedDate: DateTime?\n\n  ### A list of people currently employed at the company.\n  employees: List<Employee>\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["Serverpod's serializable objects can easily be saved to or read from the database. You can read more about this in the next section, ",(0,s.jsx)(a.a,{href:"./database-communication",children:"Database communication"}),"."]})}),"\n",(0,s.jsx)(a.h2,{id:"custom-serializable-objects",children:"Custom serializable objects"}),"\n",(0,s.jsx)(a.p,{children:"For most purposes, you will want to use Serverpod's native serialization as described above. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to two simple rules:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Your objects must have a method called toJson() which returns a JSON serialization of the object."}),"\n",(0,s.jsx)(a.li,{children:"There must be a constructor or factory called fromJson(), which takes a JSON serialization and a Serialization manager as parameters."}),"\n",(0,s.jsx)(a.li,{children:"You must declare your custom serializable objects in the config/generator.yaml file."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Typically, you will want to place your serializable objects in a shared package between the client and your server. For instance, if you use Freezed to do your serialization, the class would look something like this:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-dart",children:"import 'package:freezed_annotation/freezed_annotation.dart';\nimport 'package:serverpod_serialization/serverpod_serialization.dart';\n\npart 'freezed_custom_class.freezed.dart';\npart 'freezed_custom_class.g.dart';\n\n@freezed\nclass FreezedCustomClass with _$FreezedCustomClass {\n  const factory FreezedCustomClass({\n    required String firstName,\n    required String lastName,\n    required int age,\n  }) = _FreezedCustomClass;\n\n  factory FreezedCustomClass.fromJson(\n    Map<String, Object?> json,\n    SerializationManager serializationManager,\n  ) =>\n      _$FreezedCustomClassFromJson(json);\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:"In the config/generator.yaml, you declare the package and the class:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"extraClasses:\n  - package:my_shared_package/my_shared_package.dart:FreezedCustomClass\n"})}),"\n",(0,s.jsxs)(a.p,{children:["After adding a new serializable class, you must run ",(0,s.jsx)(a.code,{children:"serverpod generate"}),"."]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>i});var s=n(7294);const t={},o=s.createContext(t);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);