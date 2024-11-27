"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[26376],{63735:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"concepts/serialization","title":"Custom serialization","description":"For most purposes, you will want to use Serverpod\'s native serialization. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to three simple rules:","source":"@site/versioned_docs/version-2.1.0/06-concepts/03-serialization.md","sourceDirName":"06-concepts","slug":"/concepts/serialization","permalink":"/2.1.0/concepts/serialization","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/06-concepts/03-serialization.md","tags":[],"version":"2.1.0","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Working with models","permalink":"/2.1.0/concepts/models"},"next":{"title":"Error handling and exceptions","permalink":"/2.1.0/concepts/exceptions"}}');var a=s(74848),t=s(28453);const o={},i="Custom serialization",l={},c=[{value:"Setup example",id:"setup-example",level:2},{value:"Custom class with Freezed",id:"custom-class-with-freezed",level:2},{value:"Custom class with ProtocolSerialization",id:"custom-class-with-protocolserialization",level:2},{value:"Implementation Example",id:"implementation-example",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"custom-serialization",children:"Custom serialization"})}),"\n",(0,a.jsx)(n.p,{children:"For most purposes, you will want to use Serverpod's native serialization. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to three simple rules:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Your objects must have a method called ",(0,a.jsx)(n.code,{children:"toJson()"})," which returns a JSON serialization of the object."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Map<String, dynamic> toJson() {\nreturn {\n    name: 'John Doe',\n};\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["There must be a constructor or factory called ",(0,a.jsx)(n.code,{children:"fromJson()"}),", which takes a JSON serialization as parameters."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"factory ClassName.fromJson(\nMap<String, dynamic> json,\n) {\nreturn ClassName(\n    name: json['name'] as String,\n);\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You must declare your custom serializable objects in the ",(0,a.jsx)(n.code,{children:"config/generator.yaml"})," file in the server project, the path needs to be accessible from both the server package and the client package."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"...\nextraClasses:\n- package:my_project_shared/my_project_shared.dart:ClassName\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"setup-example",children:"Setup example"}),"\n",(0,a.jsxs)(n.p,{children:["We recommend creating a new dart package specifically for sharing these types of classes and importing it into the server and client ",(0,a.jsx)(n.code,{children:"pubspec.yaml"}),". This can easily be done by running ",(0,a.jsx)(n.code,{children:"$ dart create -t package <my_project>_shared"})," in the root folder of your project."]}),"\n",(0,a.jsx)(n.p,{children:"Your folder structure should then look like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"\u251c\u2500\u2500 my_project_client\n\u251c\u2500\u2500 my_project_flutter\n\u251c\u2500\u2500 my_project_server\n\u251c\u2500\u2500 my_project_shared\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then you need to update both your ",(0,a.jsx)(n.code,{children:"my_project_server/pubspec.yaml"})," and ",(0,a.jsx)(n.code,{children:"my_project_client/pubspec.yaml"})," and add the new package as a dependency."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  my_project_shared:\n    path: ../my_project_shared\n  ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now you can create your custom class in your new shared package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"class ClassName {\n  String name;\n  ClassName(this.name);\n\n  toJson() {\n    return {\n      'name': name,\n    };\n  }\n\n  factory ClassName.fromJson(\n    Map<String, dynamic> jsonSerialization,\n  ) {\n    return ClassName(\n      jsonSerialization['name'],\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After adding a new serializable class, you must run ",(0,a.jsx)(n.code,{children:"serverpod generate"}),". You are now able to use this class in your endpoints and leverage the full serialization/deserialization management that comes with Serverpod."]}),"\n",(0,a.jsx)(n.p,{children:"In your server project, you can create an endpoint returning your custom object."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:relation_test_shared/relation_test_shared.dart';\nimport 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<ClassName> getMyCustomClass(Session session) async {\n    return ClassName(\n      'John Doe',\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"custom-class-with-freezed",children:"Custom class with Freezed"}),"\n",(0,a.jsxs)(n.p,{children:["Serverpod also has support for using custom classes created with the ",(0,a.jsx)(n.a,{href:"https://pub.dev/packages/freezed",children:"Freezed"})," package."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:freezed_annotation/freezed_annotation.dart';\n\npart 'freezed_custom_class.freezed.dart';\npart 'freezed_custom_class.g.dart';\n\n@freezed\nclass FreezedCustomClass with _$FreezedCustomClass {\n  const factory FreezedCustomClass({\n    required String firstName,\n    required String lastName,\n    required int age,\n  }) = _FreezedCustomClass;\n\n  factory FreezedCustomClass.fromJson(\n    Map<String, Object?> json,\n  ) =>\n      _$FreezedCustomClassFromJson(json);\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the config/generator.yaml, you declare the package and the class:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"extraClasses:\n  - package:my_shared_package/my_shared_package.dart:FreezedCustomClass\n"})}),"\n",(0,a.jsx)(n.h2,{id:"custom-class-with-protocolserialization",children:"Custom class with ProtocolSerialization"}),"\n",(0,a.jsxs)(n.p,{children:["If you need certain fields to be omitted when transmitting to the client-side, your server-side custom class should implement the ",(0,a.jsx)(n.code,{children:"ProtocolSerialization"})," interface. This requires adding a method named ",(0,a.jsx)(n.code,{children:"toJsonForProtocol()"}),". Serverpod will then use this method to serialize your object for protocol communication. If the class does not implement ",(0,a.jsx)(n.code,{children:"ProtocolSerialization"}),", Serverpod defaults to using the ",(0,a.jsx)(n.code,{children:"toJson()"})," method."]}),"\n",(0,a.jsx)(n.h3,{id:"implementation-example",children:"Implementation Example"}),"\n",(0,a.jsx)(n.p,{children:"Here\u2019s how you can implement it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:'class CustomClass implements ProtocolSerialization {\n  final String? value;\n  final String? serverSideValue;\n\n  .......\n\n  // Serializes fields specifically for protocol communication\n  Map<String, dynamic> toJsonForProtocol() {\n    return {\n      "value":value,\n    };\n  }\n\n  // Serializes all fields, including those intended only for server-side use\n  Map<String, dynamic> toJson() {\n    return {\n      "value": value,\n      "serverSideValue": serverSideValue,\n    };\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"This structure ensures that sensitive or server-only data is not exposed to the client, enhancing security and data integrity."}),"\n",(0,a.jsx)(n.p,{children:"Importantly, this implementation is not required for client-side custom models."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(96540);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);