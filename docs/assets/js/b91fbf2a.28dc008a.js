"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4847],{52516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(85893),a=t(11151);const s={},i="Scheduling",l={id:"concepts/scheduling",title:"Scheduling",description:"With Serverpod you can schedule future work with the future call feature. Future calls are calls that will be invoked at a later time. An example is if you want to send a drip-email campaign after a user signs up. You can schedule a future call for a day, a week, or a month. The calls are stored in the database, so they will persist even if the server is restarted.",source:"@site/versioned_docs/version-2.0.0/05-concepts/13-scheduling.md",sourceDirName:"05-concepts",slug:"/concepts/scheduling",permalink:"/concepts/scheduling",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/13-scheduling.md",tags:[],version:"2.0.0",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Health checks",permalink:"/concepts/health-checks"},next:{title:"Streams and messaging",permalink:"/concepts/streams"}},o={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"scheduling",children:"Scheduling"})}),"\n",(0,r.jsxs)(n.p,{children:["With Serverpod you can schedule future work with the ",(0,r.jsx)(n.code,{children:"future call"})," feature. Future calls are calls that will be invoked at a later time. An example is if you want to send a drip-email campaign after a user signs up. You can schedule a future call for a day, a week, or a month. The calls are stored in the database, so they will persist even if the server is restarted."]}),"\n",(0,r.jsx)(n.p,{children:"A future call is guaranteed to only execute once across all your instances that are running, but execution failures are not handled automatically. It is your responsibility to schedule a new future call if the work was not able to complete."}),"\n",(0,r.jsxs)(n.p,{children:["Creating a future call is simple, extend the ",(0,r.jsx)(n.code,{children:"FutureCall"})," class and override the ",(0,r.jsx)(n.code,{children:"invoke"})," method. The method takes two params the first being the ",(0,r.jsx)(n.a,{href:"sessions",children:(0,r.jsx)(n.code,{children:"Session"})})," object and the second being an optional SerializableModel (",(0,r.jsx)(n.a,{href:"models",children:"See models"}),")."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The future call feature is not enabled when running Serverpod in serverless mode."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod/serverpod.dart';\n\nclass ExampleFutureCall extends FutureCall<MyModelEntity> {\n  @override\n  Future<void> invoke(Session session, MyModelEntity? object) async {\n    // Do something interesting in the future here.\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To let your Server get access to the future call you have to register it in the main run method in your ",(0,r.jsx)(n.code,{children:"server.dart"})," file. You register the future call by calling ",(0,r.jsx)(n.code,{children:"registerFutureCall"})," on the Serverpod object and giving it an instance of the future call together with a string that gives the future call a name. The name has to be globally unique and is used to later invoke the future call."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"void run(List<String> args) async {\n  final pod = Serverpod(\n    args,\n    Protocol(),\n    Endpoints(),\n  );\n\n  ...\n\n  pod.registerFutureCall(ExampleFutureCall(), 'exampleFutureCall');\n\n  ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You are now able to register a future call to be invoked in the future by calling either ",(0,r.jsx)(n.code,{children:"futureCallWithDelay"})," or ",(0,r.jsx)(n.code,{children:"futureCallAtTime"})," depending on your needs."]}),"\n",(0,r.jsxs)(n.p,{children:["Invoke the future call 1 hour from now by calling ",(0,r.jsx)(n.code,{children:"futureCallWithDelay"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await session.serverpod.futureCallWithDelay(\n  'exampleFutureCall',\n  data,\n  const Duration(hours: 1),\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Invoke the future call at a specific time and/or date in the future by calling ",(0,r.jsx)(n.code,{children:"futureCallAtTime"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await session.serverpod.futureCallAtTime(\n  'exampleFutureCall',\n  data,\n  DateTime(2025, 1, 1),\n);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"data"})," is an object created from a class defined in one of your yaml files and has to be the same as the one you expect to receive in the future call. in the ",(0,r.jsx)(n.code,{children:"model"})," folder, ",(0,r.jsx)(n.code,{children:"data"})," may also be null if you don't need it."]})}),"\n",(0,r.jsxs)(n.p,{children:["When registering a future call it is also possible to give it an ",(0,r.jsx)(n.code,{children:"identifier"})," so that it can be referenced later. The same identifier can be applied to multiple future calls."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await session.serverpod.futureCallWithDelay(\n  'exampleFutureCall',\n  data,\n  const Duration(hours: 1),\n  identifier: 'an-identifying-string',\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"This identifier can then be used to cancel all future calls registered with said identifier."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await session.serverpod.cancelFutureCall('an-identifying-string');\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);