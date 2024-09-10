"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[22436],{76583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(85893),r=n(11151);const s={},i="Working with endpoints",d={id:"concepts/working-with-endpoints",title:"Working with endpoints",description:"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.",source:"@site/versioned_docs/version-2.1.0/06-concepts/01-working-with-endpoints.md",sourceDirName:"06-concepts",slug:"/concepts/working-with-endpoints",permalink:"/concepts/working-with-endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/06-concepts/01-working-with-endpoints.md",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/tutorials/authentication"},next:{title:"Working with models",permalink:"/concepts/models"}},a={},c=[{value:"Passing parameters",id:"passing-parameters",level:2},{value:"Return types",id:"return-types",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"working-with-endpoints",children:"Working with endpoints"})}),"\n",(0,o.jsxs)(t.p,{children:["Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the ",(0,o.jsx)(t.code,{children:"Endpoint"})," class. For methods to be generated, they need to return a typed ",(0,o.jsx)(t.code,{children:"Future"}),", and its first argument should be a ",(0,o.jsx)(t.code,{children:"Session"})," object. The ",(0,o.jsx)(t.code,{children:"Session"})," object holds information about the call being made and provides access to the database."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The above code will create an endpoint called ",(0,o.jsx)(t.code,{children:"example"})," (the Endpoint suffix will be removed) with the single ",(0,o.jsx)(t.code,{children:"hello"})," method. To generate the client-side code run ",(0,o.jsx)(t.code,{children:"serverpod generate"})," in the home directory of the server."]}),"\n",(0,o.jsx)(t.p,{children:"On the client side, you can now call the method by calling:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"var result = await client.example.hello('World');\n"})}),"\n",(0,o.jsx)(t.p,{children:"The client is initialized like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"// Sets up a singleton client object that can be used to talk to the server from\n// anywhere in our app. The client is generated from your server code.\n// The client is set up to connect to a Serverpod running on a local server on\n// the default port. You will need to modify this to connect to staging or\n// production servers.\nvar client = Client('http://$localhost:8080/')\n  ..connectivityMonitor = FlutterConnectivityMonitor();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you run the app in an Android emulator, the ",(0,o.jsx)(t.code,{children:"localhost"})," parameter points to ",(0,o.jsx)(t.code,{children:"10.0.2.2"}),", rather than ",(0,o.jsx)(t.code,{children:"127.0.0.1"})," as this is the IP address of the host machine. To access the server from a different device on the same network (such as a physical phone) replace ",(0,o.jsx)(t.code,{children:"localhost"})," with the local ip address. You can find the local ip by running ",(0,o.jsx)(t.code,{children:"ifconfig"})," (Linux/MacOS) or ",(0,o.jsx)(t.code,{children:"ipconfig"})," (Windows)."]}),"\n",(0,o.jsxs)(t.p,{children:["Make sure to also update the ",(0,o.jsx)(t.code,{children:"publicHost"})," in the development config to make sure the server always serves the client with the correct path to assets etc."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"# your_project_server/config/development.yaml\n\napiServer:\n  port: 8080\n  publicHost: localhost # Change this line\n  publicPort: 8080\n  publicScheme: http\n...\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can pass the ",(0,o.jsx)(t.code,{children:"--watch"})," flag to ",(0,o.jsx)(t.code,{children:"serverpod generate"})," to watch for changed files and generate code whenever your source files are updated. This is useful during the development of your server."]})}),"\n",(0,o.jsx)(t.h2,{id:"passing-parameters",children:"Passing parameters"}),"\n",(0,o.jsxs)(t.p,{children:["There are some limitations to how endpoint methods can be implemented. Parameters and return types can be of type ",(0,o.jsx)(t.code,{children:"bool"}),", ",(0,o.jsx)(t.code,{children:"int"}),", ",(0,o.jsx)(t.code,{children:"double"}),", ",(0,o.jsx)(t.code,{children:"String"}),", ",(0,o.jsx)(t.code,{children:"UuidValue"}),", ",(0,o.jsx)(t.code,{children:"Duration"}),", ",(0,o.jsx)(t.code,{children:"DateTime"}),", ",(0,o.jsx)(t.code,{children:"ByteData"}),", or generated serializable objects (see next section). A typed ",(0,o.jsx)(t.code,{children:"Future"})," should always be returned. Null safety is supported. When passing a ",(0,o.jsx)(t.code,{children:"DateTime"})," it is always converted to UTC."]}),"\n",(0,o.jsxs)(t.p,{children:["You can also pass ",(0,o.jsx)(t.code,{children:"List"})," and ",(0,o.jsx)(t.code,{children:"Map"})," as parameters, but they need to be strictly typed with one of the types mentioned above. For ",(0,o.jsx)(t.code,{children:"Map"}),", the keys must be non-nullable strings. E.g., ",(0,o.jsx)(t.code,{children:"Map<String, int?>"})," is valid, but ",(0,o.jsx)(t.code,{children:"Map<int, String>"})," is not."]}),"\n",(0,o.jsxs)(t.admonition,{type:"warning",children:[(0,o.jsxs)(t.p,{children:["While it's possible to pass binary data through a method call and ",(0,o.jsx)(t.code,{children:"ByteData"}),", it is not the most efficient way to transfer large files. See our ",(0,o.jsx)(t.a,{href:"file-uploads",children:"file upload"})," interface. The size of a call is by default limited to 512 kB. It's possible to change by adding the ",(0,o.jsx)(t.code,{children:"maxRequestSize"})," to your config files. E.g., this will double the request size to 1 MB:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"maxRequestSize: 1048576\n"})})]}),"\n",(0,o.jsx)(t.h2,{id:"return-types",children:"Return types"}),"\n",(0,o.jsx)(t.p,{children:"The return type must be a typed Future. Supported return types are the same as for parameters."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);