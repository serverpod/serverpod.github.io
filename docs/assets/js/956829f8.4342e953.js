"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[165],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},p="Working with endpoints",d={unversionedId:"concepts/working-with-endpoints",id:"version-0.9.5/concepts/working-with-endpoints",title:"Working with endpoints",description:"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.",source:"@site/versioned_docs/version-0.9.5/02-concepts/01-working-with-endpoints.md",sourceDirName:"02-concepts",slug:"/concepts/working-with-endpoints",permalink:"/concepts/working-with-endpoints",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.5/02-concepts/01-working-with-endpoints.md",tags:[],version:"0.9.5",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capabilities",permalink:"/capabilities"},next:{title:"Serialization",permalink:"/concepts/serialization"}},l={},c=[{value:"Passing parameters",id:"passing-parameters",level:2},{value:"Return types",id:"return-types",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-endpoints"},"Working with endpoints"),(0,a.kt)("p",null,"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Endpoint")," class. For methods to be generated, they need to return a typed ",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),", and its first argument should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," object. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," object holds information about the call being made and provides access to the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n")),(0,a.kt)("p",null,"The above code will create an endpoint called ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," (the Endpoint suffix will be removed) with the single ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," method. To generate the client-side code run ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod generate")," in the home directory of the server."),(0,a.kt)("p",null,"On the client side, you can now call the method by calling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"var result = await client.example.hello('World');\n")),(0,a.kt)("h2",{id:"passing-parameters"},"Passing parameters"),(0,a.kt)("p",null,"There are some limitations to how endpoint methods can be implemented. Currently named parameters are not yet supported (however, optional parameters are). Parameters and return types can be of type ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime"),", or generated serializable objects (see next section). A typed ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," should always be returned. Null safety is supported. When passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime")," it is always converted to UTC."),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," can currently not be passed as arguments, instead use a serializable object that contains the data you want to send. Support is on the roadmap and is a planned future feature."),(0,a.kt)("h2",{id:"return-types"},"Return types"),(0,a.kt)("p",null,"The return type must be a typed Future, supported return types is the same as for parameters."))}m.isMDXComponent=!0}}]);