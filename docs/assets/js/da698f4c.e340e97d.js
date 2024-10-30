"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5e3],{98150:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(74848),t=a(28453);const r={},i="Serialization",o={id:"concepts/serialization",title:"Serialization",description:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database.",source:"@site/versioned_docs/version-0.9.20/04-concepts/02-serialization.md",sourceDirName:"04-concepts",slug:"/concepts/serialization",permalink:"/0.9.20/concepts/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.20/04-concepts/02-serialization.md",tags:[],version:"0.9.20",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with endpoints",permalink:"/0.9.20/concepts/working-with-endpoints"},next:{title:"Database communication",permalink:"/0.9.20/concepts/database-communication"}},l={},c=[{value:"Serverpod&#39;s native serialization",id:"serverpods-native-serialization",level:2},{value:"Extending the generated classes",id:"extending-the-generated-classes",level:3},{value:"Custom serializable objects",id:"custom-serializable-objects",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"serialization",children:"Serialization"})}),"\n",(0,n.jsx)(s.p,{children:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database."}),"\n",(0,n.jsx)(s.h2,{id:"serverpods-native-serialization",children:"Serverpod's native serialization"}),"\n",(0,n.jsxs)(s.p,{children:["The structure for your serialized classes is defined in yaml-files in the ",(0,n.jsx)(s.code,{children:"protocol"})," directory. Run ",(0,n.jsx)(s.code,{children:"serverpod generate"})," to build the Dart code for the classes and make them accessible to both the server and client."]}),"\n",(0,n.jsx)(s.p,{children:"Here is a simple example of a yaml-file defining a serializable class:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Supported types are ",(0,n.jsx)(s.code,{children:"bool"}),", ",(0,n.jsx)(s.code,{children:"int"}),", ",(0,n.jsx)(s.code,{children:"double"}),", ",(0,n.jsx)(s.code,{children:"String"}),", ",(0,n.jsx)(s.code,{children:"DateTime"}),", ",(0,n.jsx)(s.code,{children:"ByteData"}),", and other serializable classes. You can also use ",(0,n.jsx)(s.code,{children:"List"}),"s and ",(0,n.jsx)(s.code,{children:"Map"}),"s of the supported types, just make sure to specify the types. Null safety is supported. The keys of ",(0,n.jsx)(s.code,{children:"Map"})," must be non-nullable ",(0,n.jsx)(s.code,{children:"String"}),"s. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,n.jsx)(s.h3,{id:"extending-the-generated-classes",children:"Extending the generated classes"}),"\n",(0,n.jsx)(s.p,{children:"Sometimes you will want to add custom methods to the generated classes. The easiest way to do this is with Dart's extension feature."}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Serverpod's serializable objects can easily be saved to or read from the database. You can read more about this in the next section, ",(0,n.jsx)(s.a,{href:"./database-communication",children:"Database communication"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"custom-serializable-objects",children:"Custom serializable objects"}),"\n",(0,n.jsx)(s.p,{children:"For most purposes, you will want to use Serverpod's native serialization as described above. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to two simple rules:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Your objects must have a method called toJson() which returns a JSON serialization of the object."}),"\n",(0,n.jsx)(s.li,{children:"There must be a constructor or factory called fromJson(), which takes a JSON serialization and a Serialization manager as parameters."}),"\n",(0,n.jsx)(s.li,{children:"You must declare your custom serializable objects in the config/generator.yaml file."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Typically, you will want to place your serializable objects in a shared package between the client and your server. For instance, if you use Freezed to do your serialization, the class would look something like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-dart",children:"import 'package:freezed_annotation/freezed_annotation.dart';\nimport 'package:serverpod_serialization/serverpod_serialization.dart';\n\npart 'freezed_custom_class.freezed.dart';\npart 'freezed_custom_class.g.dart';\n\n@freezed\nclass FreezedCustomClass with _$FreezedCustomClass {\n  const factory FreezedCustomClass({\n    required String firstName,\n    required String lastName,\n    required int age,\n  }) = _FreezedCustomClass;\n\n  factory FreezedCustomClass.fromJson(\n    Map<String, Object?> json,\n    SerializationManager serializationManager,\n  ) =>\n      _$FreezedCustomClassFromJson(json);\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"In the config/generator.yaml, you declare the package and the class:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"extraClasses:\n  - package:my_shared_package/my_shared_package.dart:FreezedCustomClass\n"})}),"\n",(0,n.jsxs)(s.p,{children:["After adding a new serializable class, you must run ",(0,n.jsx)(s.code,{children:"serverpod generate"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>o});var n=a(96540);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);