"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2417],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Modules",d={unversionedId:"concepts/modules",id:"concepts/modules",title:"Modules",description:"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server and client code and Flutter widgets. A module contains its own namespace for endpoints and methods to minimize module conflicts.",source:"@site/docs/04-concepts/06-modules.md",sourceDirName:"04-concepts",slug:"/concepts/modules",permalink:"/next/concepts/modules",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/04-concepts/06-modules.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/next/concepts/logging"},next:{title:"Authentication",permalink:"/next/concepts/authentication"}},p={},u=[{value:"Adding a module to your project",id:"adding-a-module-to-your-project",level:2},{value:"Database setup",id:"database-setup",level:3},{value:"Server setup",id:"server-setup",level:3},{value:"Client setup",id:"client-setup",level:3},{value:"Flutter app setup",id:"flutter-app-setup",level:3},{value:"Referencing a module",id:"referencing-a-module",level:2},{value:"Creating custom modules",id:"creating-custom-modules",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server and client code and Flutter widgets. A module contains its own namespace for endpoints and methods to minimize module conflicts."),(0,o.kt)("p",null,"Examples of modules are the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module and the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_chat")," module, which both are maintained by the Serverpod team."),(0,o.kt)("h2",{id:"adding-a-module-to-your-project"},"Adding a module to your project"),(0,o.kt)("h3",{id:"database-setup"},"Database setup"),(0,o.kt)("p",null,"Each module comes with a set of database tables. You must add these to your database for the module to work. The code for creating the tables lives in the ",(0,o.kt)("inlineCode",{parentName:"p"},"generated/tables.pgsql")," file of the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," part of the module. For instance, you can find the database tables for the auth module ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/serverpod/serverpod/blob/main/modules/serverpod_auth/serverpod_auth_server/generated/tables.pgsql"},"here"),"."),(0,o.kt)("h3",{id:"server-setup"},"Server setup"),(0,o.kt)("p",null,"To add a module to your project, you must include the server and client/Flutter packages in your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," files and to add an entry to your ",(0,o.kt)("inlineCode",{parentName:"p"},"config/generator.yaml")," file."),(0,o.kt)("p",null,"For example, to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module to your project, you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_auth_server")," to your server's ",(0,o.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  serverpod_auth_server: ^1.x.x\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"1.x.x")," with the Serverpod version you are using. Serverpod uses the same version number for all official packages. If you use the same version, you will be sure that everything works together."))),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"config/generator.yaml")," add the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module and give it a ",(0,o.kt)("inlineCode",{parentName:"p"},"nickname"),". The nickname will determine how you reference the module from the client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  serverpod_auth:\n    nickname: auth\n")),(0,o.kt)("p",null,"Finally, you need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"pub get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate")," from your server's directory (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_server"),") to add the module to your protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub get\nserverpod generate\n")),(0,o.kt)("h3",{id:"client-setup"},"Client setup"),(0,o.kt)("p",null,"In your client's ",(0,o.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),", you will need to add the generated client code from the module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  serverpod_auth_client: ^1.x.x\n")),(0,o.kt)("h3",{id:"flutter-app-setup"},"Flutter app setup"),(0,o.kt)("p",null,"In your Flutter app, add the corresponding dart or Flutter package(s) to your ",(0,o.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  serverpod_auth_shared_flutter: ^1.x.x\n  serverpod_auth_google_flutter: ^1.x.x\n  serverpod_auth_apple_flutter: ^1.x.x\n")),(0,o.kt)("h2",{id:"referencing-a-module"},"Referencing a module"),(0,o.kt)("p",null,"It can be useful to reference serializable objects in other modules from the yaml-files in your protocol directory. You do this by adding the module prefix, followed by the nickname of the package. For instance, this is how you reference a serializable class in the auth package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: MyClass\nfields:\n  userInfo: module:auth:UserInfo\n")),(0,o.kt)("h2",{id:"creating-custom-modules"},"Creating custom modules"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create")," command, it is possible to create new modules for code that is shared between projects or that you want to publish to pub.dev. To create a module instead of a server project, pass ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"--template")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"serverpod create --template module my_module\n")),(0,o.kt)("p",null,"The create command will create a server and a client Dart package. If you also want to add custom Flutter code, use ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter create")," to create a package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flutter create --template package my_module_flutter\n")),(0,o.kt)("p",null,"In your Flutter package, you most likely want to import the client libraries created by ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Most modules will need a set of database tables to function. When naming the tables, you should use the module name as a prefix to the table name to avoid any conflicts. For instance, the Serverpod tables are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_"),"."))))}m.isMDXComponent=!0}}]);