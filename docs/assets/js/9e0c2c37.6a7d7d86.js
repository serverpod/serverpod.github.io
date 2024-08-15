"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4013],{67437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=t(85893),r=t(11151);const s={},i="Working with endpoints",d={id:"concepts/working-with-endpoints",title:"Working with endpoints",description:"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.",source:"@site/versioned_docs/version-1.1.0/04-concepts/01-working-with-endpoints.md",sourceDirName:"04-concepts",slug:"/concepts/working-with-endpoints",permalink:"/1.1.0/concepts/working-with-endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.0/04-concepts/01-working-with-endpoints.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capabilities",permalink:"/1.1.0/capabilities"},next:{title:"Serialization",permalink:"/1.1.0/concepts/serialization"}},a={},c=[{value:"Passing parameters",id:"passing-parameters",level:2},{value:"Return types",id:"return-types",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"working-with-endpoints",children:"Working with endpoints"})}),"\n",(0,o.jsxs)(n.p,{children:["Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the ",(0,o.jsx)(n.code,{children:"Endpoint"})," class. For methods to be generated, they need to return a typed ",(0,o.jsx)(n.code,{children:"Future"}),", and its first argument should be a ",(0,o.jsx)(n.code,{children:"Session"})," object. The ",(0,o.jsx)(n.code,{children:"Session"})," object holds information about the call being made and provides access to the database."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The above code will create an endpoint called ",(0,o.jsx)(n.code,{children:"example"})," (the Endpoint suffix will be removed) with the single ",(0,o.jsx)(n.code,{children:"hello"})," method. To generate the client-side code run ",(0,o.jsx)(n.code,{children:"serverpod generate"})," in the home directory of the server."]}),"\n",(0,o.jsx)(n.p,{children:"On the client side, you can now call the method by calling:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"var result = await client.example.hello('World');\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You can pass the ",(0,o.jsx)(n.code,{children:"--watch"})," flag to ",(0,o.jsx)(n.code,{children:"serverpod generate"})," to watch for changed files and generate code when needed continuously. This is useful during the development of your server."]})}),"\n",(0,o.jsx)(n.h2,{id:"passing-parameters",children:"Passing parameters"}),"\n",(0,o.jsxs)(n.p,{children:["There are some limitations to how endpoint methods can be implemented. Parameters and return types can be of type ",(0,o.jsx)(n.code,{children:"bool"}),", ",(0,o.jsx)(n.code,{children:"int"}),", ",(0,o.jsx)(n.code,{children:"double"}),", ",(0,o.jsx)(n.code,{children:"String"}),", ",(0,o.jsx)(n.code,{children:"DateTime"}),", ",(0,o.jsx)(n.code,{children:"ByteData"}),", or generated serializable objects (see next section). A typed ",(0,o.jsx)(n.code,{children:"Future"})," should always be returned. Null safety is supported. When passing a ",(0,o.jsx)(n.code,{children:"DateTime"})," it is always converted to UTC."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also pass ",(0,o.jsx)(n.code,{children:"List"})," and ",(0,o.jsx)(n.code,{children:"Map"})," as parameters, but they need to be stricly typed with one of the types mentioned above. For ",(0,o.jsx)(n.code,{children:"Map"}),", the keys must be non-nullable strings. E.g., ",(0,o.jsx)(n.code,{children:"Map<String, int?>"})," is valid, but ",(0,o.jsx)(n.code,{children:"Map<int, String>"})," is not."]}),"\n",(0,o.jsx)(n.h2,{id:"return-types",children:"Return types"}),"\n",(0,o.jsx)(n.p,{children:"The return type must be a typed Future. Supported return types are the same as for parameters."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);