"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2877],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={},s="Working with endpoints",d={unversionedId:"concepts/working-with-endpoints",id:"concepts/working-with-endpoints",title:"Working with endpoints",description:"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.",source:"@site/docs/04-concepts/01-working-with-endpoints.md",sourceDirName:"04-concepts",slug:"/concepts/working-with-endpoints",permalink:"/next/concepts/working-with-endpoints",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/04-concepts/01-working-with-endpoints.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capabilities",permalink:"/next/capabilities"},next:{title:"Serialization",permalink:"/next/concepts/serialization"}},l={},c=[{value:"Passing parameters",id:"passing-parameters",level:2},{value:"Return types",id:"return-types",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-endpoints"},"Working with endpoints"),(0,a.kt)("p",null,"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Endpoint")," class. For methods to be generated, they need to return a typed ",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),", and its first argument should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," object. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," object holds information about the call being made and provides access to the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n")),(0,a.kt)("p",null,"The above code will create an endpoint called ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," (the Endpoint suffix will be removed) with the single ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," method. To generate the client-side code run ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod generate")," in the home directory of the server."),(0,a.kt)("p",null,"On the client side, you can now call the method by calling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"var result = await client.example.hello('World');\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod generate")," to watch for changed files and generate code when needed continuously. This is useful during the development of your server."))),(0,a.kt)("h2",{id:"passing-parameters"},"Passing parameters"),(0,a.kt)("p",null,"There are some limitations to how endpoint methods can be implemented. Parameters and return types can be of type ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ByteData"),", or generated serializable objects (see next section). A typed ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," should always be returned. Null safety is supported. When passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime")," it is always converted to UTC."),(0,a.kt)("p",null,"You can also pass ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," as parameters, but they need to be stricly typed with one of the types mentioned above. For ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),", the keys must be non-nullable strings. E.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<"),"String, int?>",(0,a.kt)("inlineCode",{parentName:"p"},"is valid, but"),"Map<int, String>` is not."),(0,a.kt)("h2",{id:"return-types"},"Return types"),(0,a.kt)("p",null,"The return type must be a typed Future. Supported return types are the same as for parameters."))}m.isMDXComponent=!0}}]);