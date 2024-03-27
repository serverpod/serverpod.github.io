"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[372],{6433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const r={},s="Error handling and exceptions",a={id:"concepts/exceptions",title:"Error handling and exceptions",description:"Handling errors well is essential when you are building your server. To simplify things, Serverpod allows you to throw an exception on the server, serialize it, and catch it in your client app.",source:"@site/versioned_docs/version-1.1.1/05-concepts/04-exceptions.md",sourceDirName:"05-concepts",slug:"/concepts/exceptions",permalink:"/concepts/exceptions",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/04-exceptions.md",tags:[],version:"1.1.1",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sessions",permalink:"/concepts/sessions"},next:{title:"Database communication",permalink:"/concepts/database-communication"}},c={},l=[{value:"Serializable exceptions",id:"serializable-exceptions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"error-handling-and-exceptions",children:"Error handling and exceptions"}),"\n",(0,i.jsx)(n.p,{children:"Handling errors well is essential when you are building your server. To simplify things, Serverpod allows you to throw an exception on the server, serialize it, and catch it in your client app."}),"\n",(0,i.jsx)(n.p,{children:"If you throw a normal exception that isn't caught by your code, it will be treated as an internal server error. The exception will be logged together with its stack trace, and a 500 HTTP status (internal server error) will be sent to the client. On the client side, this will throw a non-specific ServerpodException, which provides no more data than a session id number which can help identifiy the call in your logs."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Use the Serverpod Insights app to view your logs. It will show any failed or slow calls and will make it easy to pinpoint any errors in your server."})}),"\n",(0,i.jsx)(n.h2,{id:"serializable-exceptions",children:"Serializable exceptions"}),"\n",(0,i.jsxs)(n.p,{children:["Serverpod allows adding data to an exception you throw on the server and extracting that data in the client. This is useful for passing error messages back to the client when a call fails. You use the same yaml-files to define the serializable exceptions as you would with any serializable entity (see ",(0,i.jsx)(n.a,{href:"serialization",children:"serialization"})," for details). The only difference is that you use the keyword ",(0,i.jsx)(n.code,{children:"exception"})," instead of ",(0,i.jsx)(n.code,{children:"class"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"exception: MyException\nfields:\n  message: String\n  errorType: MyEnum\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After you run ",(0,i.jsx)(n.code,{children:"serverpod generate"}),", you can throw that exception when processing a call to the server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class ExampleEndpoint extends Endpoint {\n  Future<void> doThingy(Session session) {\n    // ... do stuff ...\n    if (failure) {\n      throw MyException(\n        message: 'Failed to do thingy',\n        errorType: MyEnum.thingyError,\n      );\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In your app, catch the exception as you would catch any exception."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"try {\n  client.example.doThingy();\n}\non (MyException) catch(e) {\n  print(e.message);\n}\ncatch(e) {\n  print('Something else went wrong.');\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);