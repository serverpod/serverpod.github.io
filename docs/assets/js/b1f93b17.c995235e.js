"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[65492],{5225:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"concepts/exceptions","title":"Error handling and exceptions","description":"Handling errors well is essential when you are building your server. To simplify things, Serverpod allows you to throw an exception on the server, serialize it, and catch it in your client app.","source":"@site/versioned_docs/version-2.4.0/06-concepts/04-exceptions.md","sourceDirName":"06-concepts","slug":"/concepts/exceptions","permalink":"/concepts/exceptions","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.4.0/06-concepts/04-exceptions.md","tags":[],"version":"2.4.0","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Custom serialization","permalink":"/concepts/serialization"},"next":{"title":"Sessions","permalink":"/concepts/sessions"}}');var t=i(74848),o=i(28453);const r={},a="Error handling and exceptions",l={},c=[{value:"Serializable exceptions",id:"serializable-exceptions",level:2},{value:"Default values in exceptions",id:"default-values-in-exceptions",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"error-handling-and-exceptions",children:"Error handling and exceptions"})}),"\n",(0,t.jsx)(n.p,{children:"Handling errors well is essential when you are building your server. To simplify things, Serverpod allows you to throw an exception on the server, serialize it, and catch it in your client app."}),"\n",(0,t.jsx)(n.p,{children:"If you throw a normal exception that isn't caught by your code, it will be treated as an internal server error. The exception will be logged together with its stack trace, and a 500 HTTP status (internal server error) will be sent to the client. On the client side, this will throw a non-specific ServerpodException, which provides no more data than a session id number which can help identifiy the call in your logs."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Use the Serverpod Insights app to view your logs. It will show any failed or slow calls and will make it easy to pinpoint any errors in your server."})}),"\n",(0,t.jsx)(n.h2,{id:"serializable-exceptions",children:"Serializable exceptions"}),"\n",(0,t.jsxs)(n.p,{children:["Serverpod allows adding data to an exception you throw on the server and extracting that data in the client. This is useful for passing error messages back to the client when a call fails. You use the same YAML-files to define the serializable exceptions as you would with any serializable model (see ",(0,t.jsx)(n.a,{href:"serialization",children:"serialization"})," for details). The only difference is that you use the keyword ",(0,t.jsx)(n.code,{children:"exception"})," instead of ",(0,t.jsx)(n.code,{children:"class"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"exception: MyException\nfields:\n  message: String\n  errorType: MyEnum\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After you run ",(0,t.jsx)(n.code,{children:"serverpod generate"}),", you can throw that exception when processing a call to the server."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class ExampleEndpoint extends Endpoint {\n  Future<void> doThingy(Session session) {\n    // ... do stuff ...\n    if (failure) {\n      throw MyException(\n        message: 'Failed to do thingy',\n        errorType: MyEnum.thingyError,\n      );\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In your app, catch the exception as you would catch any exception."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"try {\n  client.example.doThingy();\n}\non MyException catch(e) {\n  print(e.message);\n}\ncatch(e) {\n  print('Something else went wrong.');\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"default-values-in-exceptions",children:"Default values in exceptions"}),"\n",(0,t.jsxs)(n.p,{children:["Serverpod allows you to specify default values for fields in exceptions, similar to how it's done in models using the ",(0,t.jsx)(n.code,{children:"default"})," and ",(0,t.jsx)(n.code,{children:"defaultModel"})," keywords. If you're unfamiliar with how these keywords work, you can refer to the ",(0,t.jsx)(n.a,{href:"models#default-values",children:"Default Values"})," section in the ",(0,t.jsx)(n.a,{href:"models",children:"Working with Models"})," documentation."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Since exceptions are not persisted in the database, the ",(0,t.jsx)(n.code,{children:"defaultPersist"})," keyword is not supported. If both ",(0,t.jsx)(n.code,{children:"default"})," and ",(0,t.jsx)(n.code,{children:"defaultModel"})," are specified, ",(0,t.jsx)(n.code,{children:"defaultModel"})," will always take precedence, making it unnecessary to use both."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'exception: MyException\nfields:\n  message: String, default="An error occurred"\n  errorCode: int, default=1001\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"message"})," field will default to ",(0,t.jsx)(n.code,{children:'"An error occurred"'})," if not provided."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"errorCode"})," field will default to ",(0,t.jsx)(n.code,{children:"1001"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);