"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[55064],{22768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"get-started-with-mini","title":"Get started with Mini","description":"Serverpod Mini is a slimmer version of Serverpod that does not need to be connected to a Postgres database. Before you begin, make sure that you have Flutter and Serverpod installed.","source":"@site/versioned_docs/version-2.4.0/02-get-started-with-mini.md","sourceDirName":".","slug":"/get-started-with-mini","permalink":"/2.4.0/get-started-with-mini","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.4.0/02-get-started-with-mini.md","tags":[],"version":"2.4.0","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Get started","permalink":"/2.4.0/get-started"},"next":{"title":"Capabilities","permalink":"/2.4.0/capabilities"}}');var o=t(74848),s=t(28453);const i={},a="Get started with Mini",d={},l=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Creating models",id:"creating-models",level:2},{value:"Adding methods to your server",id:"adding-methods-to-your-server",level:2},{value:"Calling the server methods from the app",id:"calling-the-server-methods-from-the-app",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"get-started-with-mini",children:"Get started with Mini"})}),"\n",(0,o.jsxs)(n.p,{children:["Serverpod Mini is a slimmer version of Serverpod that does not need to be connected to a Postgres database. Before you begin, make sure that you have ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://flutter.dev/docs/get-started/install",children:"Flutter"})})," and ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/",children:"Serverpod"})})," installed."]}),"\n",(0,o.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0"},children:(0,o.jsx)("iframe",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/dSBK4JOZRyI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,o.jsx)(n.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,o.jsx)(n.p,{children:"Create a mini project by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ serverpod create myminipod --mini\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Serverpod will create a new project for you. It contains three Dart packages, but you only need to pay attention to the ",(0,o.jsx)(n.code,{children:"myminipod_server"})," and ",(0,o.jsx)(n.code,{children:"myminipod_flutter"})," directories. The server directory contains your server files, and the flutter directory contains your app. The third package (",(0,o.jsx)(n.code,{children:"myminipod_client"}),") contains generated code that is used by the Flutter app to communicate with the server."]}),"\n",(0,o.jsxs)(n.p,{children:["Start your server by changing directory into your server directory, and run the ",(0,o.jsx)(n.code,{children:"bin/main.dart"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cd myminipod/myminipod_server\n$ dart bin/main.dart\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Your default project comes with a sample Flutter app, all hooked up to talk with your server. Run it with the ",(0,o.jsx)(n.code,{children:"flutter"})," command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cd myminipod/myminipod_flutter\n$ flutter run -d chrome\n"})}),"\n",(0,o.jsx)(n.p,{children:"Easy as that. \ud83e\udd73"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"If you are using VS Code, install our Serverpod extension. It will help you validate any Serverpod-related files in your project!"})}),"\n",(0,o.jsx)(n.h2,{id:"creating-models",children:"Creating models"}),"\n",(0,o.jsxs)(n.p,{children:["In Serverpod, you define your models in easy-to-read YAML-files, which you place anywhere in your server\u2019s ",(0,o.jsx)(n.code,{children:"lib"})," directory with the ",(0,o.jsx)(n.code,{children:".spy.yaml"})," extension. Model files will be converted to Dart classes that can be serialized and sent to and from the server to your app. This is an example of a model file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<String>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For types, you can use most basic Dart types, such as ",(0,o.jsx)(n.code,{children:"String"}),", ",(0,o.jsx)(n.code,{children:"double"}),", ",(0,o.jsx)(n.code,{children:"int"}),", ",(0,o.jsx)(n.code,{children:"bool"}),", ",(0,o.jsx)(n.code,{children:"DateTime"}),", and ",(0,o.jsx)(n.code,{children:"ByteData"}),". You can also include ",(0,o.jsx)(n.code,{children:"List"})," and ",(0,o.jsx)(n.code,{children:"Map"}),", just make sure to specify their types. Any other class specified among your models is also supported."]}),"\n",(0,o.jsxs)(n.p,{children:["Whenever you add or edit a model file, run ",(0,o.jsx)(n.code,{children:"serverpod generate"})," in your server directory. Then, Serverpod will generate all the updated Dart classes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cd myminipod/myminipod_server\n$ serverpod generate\n"})}),"\n",(0,o.jsx)(n.h2,{id:"adding-methods-to-your-server",children:"Adding methods to your server"}),"\n",(0,o.jsxs)(n.p,{children:["With Serverpod, you add Dart methods to endpoints placed in your server\u2019s ",(0,o.jsx)(n.code,{children:"lib/src/endpoints"})," directory. By doing so, Serverpod will analyze your server code and automatically generate the corresponding methods in your Flutter app. Calling a method on the server is just like calling a local method in your app."]}),"\n",(0,o.jsx)(n.p,{children:"For the server methods to work, there are a few things you need to keep in mind:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You must place the methods in a class that extends the Endpoint class."}),"\n",(0,o.jsx)(n.li,{children:"The methods must return a typed Future. The types you use in your methods are the same as those supported by your models."}),"\n",(0,o.jsx)(n.li,{children:"The first parameter of your method must be a Session object. The session contains extra information about the call being made to the server, such as the HTTP request object."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This is an example of an endpoint that uses the Company class that we defined in the example model in the previous section."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod/serverpod.dart';\n\nclass CompanyEndpoint extends Endpoint {\n  Future<bool> isLegit(Session session, Company company) async {\n    // Check if the company has the foundedDate set and that it\n    // has been around for more than one year.\n\n    if (company.foundedDate == null) {\n      return false;\n    }\n\n    var oneYearAgo = DateTime.now().subract(Duration(days: 365));\n    return company.foundedDate!.isBefore(oneYearAgo);\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After adding or modifying endpoints and endpoint methods, you must run ",(0,o.jsx)(n.code,{children:"serverpod generate"})," to keep your Flutter app up-to-date."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cd myminipod/myminipod_server\n$ serverpod generate\n"})}),"\n",(0,o.jsx)(n.h2,{id:"calling-the-server-methods-from-the-app",children:"Calling the server methods from the app"}),"\n",(0,o.jsxs)(n.p,{children:["When you run ",(0,o.jsx)(n.code,{children:"serverpod generate"})," Serverpod will add your endpoints and server methods to the ",(0,o.jsx)(n.code,{children:"client"})," object in your Flutter app. From the client, you can access all endpoints and methods."]}),"\n",(0,o.jsxs)(n.p,{children:["To call the endpoint method we just created from Flutter, just create a ",(0,o.jsx)(n.code,{children:"Company"})," object, call the method, and await the result:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"var company = Company(\n  name: 'Serverpod',\n  foundedDate: DateTime(2021, 9, 27),\n  employees: [\n    'Alex',\n    'Isak',\n    'Viktor',\n  ],\n);\n\nvar result = await client.company.isLegit(company);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["You are now ready to start exploring the exciting world of Serverpod! And even if you start out with Serverpod mini, you can always ",(0,o.jsx)(n.a,{href:"upgrading/upgrade-from-mini",children:"upgrade"})," to the full version later."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);