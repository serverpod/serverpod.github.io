"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[1703],{59758:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(85893),a=s(11151);const t={},o="Custom serialization",c={id:"concepts/serialization",title:"Custom serialization",description:"For most purposes, you will want to use Serverpod's native serialization. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to three simple rules:",source:"@site/docs/05-concepts/03-serialization.md",sourceDirName:"05-concepts",slug:"/concepts/serialization",permalink:"/next/concepts/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/03-serialization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with models",permalink:"/next/concepts/models"},next:{title:"Error handling and exceptions",permalink:"/next/concepts/exceptions"}},i={},l=[{value:"Setup example",id:"setup-example",level:2},{value:"Custom object with Freezed",id:"custom-object-with-freezed",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"custom-serialization",children:"Custom serialization"}),"\n",(0,r.jsx)(n.p,{children:"For most purposes, you will want to use Serverpod's native serialization. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to three simple rules:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Your objects must have a method called ",(0,r.jsx)(n.code,{children:"toJson()"})," which returns a JSON serialization of the object."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Map<String, dynamic> toJson() {\n  return {\n    name: 'John Doe',\n  };\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["There must be a constructor or factory called ",(0,r.jsx)(n.code,{children:"fromJson()"}),", which takes a JSON serialization as parameters."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"factory ClassName.fromJson(\n  Map<String, dynamic> json,\n) {\n  return ClassName(\n    name: json['name'] as String,\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["You must declare your custom serializable objects in the ",(0,r.jsx)(n.code,{children:"config/generator.yaml"})," file in the server project, the path needs to be accessible from both the server package and the client package."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"...\nextraClasses:\n  - package:my_project_shared/my_project_shared.dart:ClassName\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setup-example",children:"Setup example"}),"\n",(0,r.jsxs)(n.p,{children:["We recommend creating a new dart package specifically for sharing these types of classes and importing it into the server and client ",(0,r.jsx)(n.code,{children:"pubspec.yaml"}),". This can easily be done by running ",(0,r.jsx)(n.code,{children:"$ dart create -t package <my_project>_shared"})," in the root folder of your project."]}),"\n",(0,r.jsx)(n.p,{children:"Your folder structure should then look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u251c\u2500\u2500 my_project_client\n\u251c\u2500\u2500 my_project_flutter\n\u251c\u2500\u2500 my_project_server\n\u251c\u2500\u2500 my_project_shared\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you need to update both your ",(0,r.jsx)(n.code,{children:"my_project_server/pubspec.yaml"})," and ",(0,r.jsx)(n.code,{children:"my_project_client/pubspec.yaml"})," and add the new package as a dependency."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  my_project_client:\n    path: ../my_project_shared\n  ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now you can create your custom class in your new shared package:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"class ClassName {\n  String name;\n  ClassName(this.name);\n\n  toJson() {\n    return {\n      'name': name,\n    };\n  }\n\n  factory ClassName.fromJson(\n    Map<String, dynamic> jsonSerialization,\n  ) {\n    return ClassName(\n      jsonSerialization['name'],\n    );\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After adding a new serializable class, you must run ",(0,r.jsx)(n.code,{children:"serverpod generate"}),". You are now able to use this class in your endpoints and leverage the full serialization/deserialization management that comes with Serverpod."]}),"\n",(0,r.jsx)(n.p,{children:"In your server project, you can create an endpoint returning your custom object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:relation_test_shared/relation_test_shared.dart';\nimport 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<ClassName> getMyCustomClass(Session session) async {\n    return ClassName(\n      'John Doe',\n    );\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"custom-object-with-freezed",children:"Custom object with Freezed"}),"\n",(0,r.jsxs)(n.p,{children:["Serverpod also has support for using custom classes created with the ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/freezed",children:"Freezed"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:freezed_annotation/freezed_annotation.dart';\n\npart 'freezed_custom_class.freezed.dart';\npart 'freezed_custom_class.g.dart';\n\n@freezed\nclass FreezedCustomClass with _$FreezedCustomClass {\n  const factory FreezedCustomClass({\n    required String firstName,\n    required String lastName,\n    required int age,\n  }) = _FreezedCustomClass;\n\n  factory FreezedCustomClass.fromJson(\n    Map<String, Object?> json,\n  ) =>\n      _$FreezedCustomClassFromJson(json);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the config/generator.yaml, you declare the package and the class:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"extraClasses:\n  - package:my_shared_package/my_shared_package.dart:FreezedCustomClass\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var r=s(67294);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);