"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[7311],{7955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(5893),r=n(1151);const s={},i="Working with endpoints",d={id:"concepts/working-with-endpoints",title:"Working with endpoints",description:"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.",source:"@site/versioned_docs/version-0.9.10/03-concepts/01-working-with-endpoints.md",sourceDirName:"03-concepts",slug:"/concepts/working-with-endpoints",permalink:"/0.9.10/concepts/working-with-endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.10/03-concepts/01-working-with-endpoints.md",tags:[],version:"0.9.10",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capabilities",permalink:"/0.9.10/capabilities"},next:{title:"Serialization",permalink:"/0.9.10/concepts/serialization"}},a={},c=[{value:"Passing parameters",id:"passing-parameters",level:2},{value:"Return types",id:"return-types",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"working-with-endpoints",children:"Working with endpoints"}),"\n",(0,o.jsxs)(t.p,{children:["Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the ",(0,o.jsx)(t.code,{children:"Endpoint"})," class. For methods to be generated, they need to return a typed ",(0,o.jsx)(t.code,{children:"Future"}),", and its first argument should be a ",(0,o.jsx)(t.code,{children:"Session"})," object. The ",(0,o.jsx)(t.code,{children:"Session"})," object holds information about the call being made and provides access to the database."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The above code will create an endpoint called ",(0,o.jsx)(t.code,{children:"example"})," (the Endpoint suffix will be removed) with the single ",(0,o.jsx)(t.code,{children:"hello"})," method. To generate the client-side code run ",(0,o.jsx)(t.code,{children:"serverpod generate"})," in the home directory of the server."]}),"\n",(0,o.jsx)(t.p,{children:"On the client side, you can now call the method by calling:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"var result = await client.example.hello('World');\n"})}),"\n",(0,o.jsx)(t.h2,{id:"passing-parameters",children:"Passing parameters"}),"\n",(0,o.jsxs)(t.p,{children:["There are some limitations to how endpoint methods can be implemented. Currently named parameters are not yet supported (however, optional parameters are). Parameters and return types can be of type ",(0,o.jsx)(t.code,{children:"bool"}),", ",(0,o.jsx)(t.code,{children:"int"}),", ",(0,o.jsx)(t.code,{children:"double"}),", ",(0,o.jsx)(t.code,{children:"String"}),", ",(0,o.jsx)(t.code,{children:"DateTime"}),", or generated serializable objects (see next section). A typed ",(0,o.jsx)(t.code,{children:"Future"})," should always be returned. Null safety is supported. When passing a ",(0,o.jsx)(t.code,{children:"DateTime"})," it is always converted to UTC."]}),"\n",(0,o.jsxs)(t.p,{children:["Note: ",(0,o.jsx)(t.code,{children:"List"})," and ",(0,o.jsx)(t.code,{children:"Map"})," can currently not be passed as arguments, instead use a serializable object that contains the data you want to send. Support is on the roadmap and is a planned future feature."]}),"\n",(0,o.jsx)(t.h2,{id:"return-types",children:"Return types"}),"\n",(0,o.jsx)(t.p,{children:"The return type must be a typed Future, supported return types is the same as for parameters."})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);