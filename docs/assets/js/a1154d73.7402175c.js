"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[1103],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},p="Modules",u={unversionedId:"concepts/modules",id:"version-0.9.6/concepts/modules",title:"Modules",description:"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package, but it contains both server and client code, as well as Flutter widgets. A module contains its own name space for endpoints and methods to minimize any conflicts between modules.",source:"@site/versioned_docs/version-0.9.6/02-concepts/06-modules.md",sourceDirName:"02-concepts",slug:"/concepts/modules",permalink:"/0.9.6/concepts/modules",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.6/02-concepts/06-modules.md",tags:[],version:"0.9.6",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/0.9.6/concepts/logging"},next:{title:"Authentication",permalink:"/0.9.6/concepts/authentication"}},d={},c=[{value:"Adding a module to your project",id:"adding-a-module-to-your-project",level:2},{value:"Creating custom modules",id:"creating-custom-modules",level:2}],s={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modules"},"Modules"),(0,a.kt)("p",null,"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package, but it contains both server and client code, as well as Flutter widgets. A module contains its own name space for endpoints and methods to minimize any conflicts between modules."),(0,a.kt)("p",null,"Examples of modules are the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module and the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod_chat")," module that both are maintained by the Serverpod team."),(0,a.kt)("h2",{id:"adding-a-module-to-your-project"},"Adding a module to your project"),(0,a.kt)("p",null,"To add a module to your project you need to include the server and client/Flutter packages to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," files and to add an entry to your ",(0,a.kt)("inlineCode",{parentName:"p"},"config/generator.yaml")," file."),(0,a.kt)("p",null,"For example, to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module to your project you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod_auth_server")," to your server's ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  serverpod_auth_server: ^0.9.x\n")),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"config/generator.yaml")," add the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module and give it a ",(0,a.kt)("inlineCode",{parentName:"p"},"nickname"),". The nickname will determine how you reference the module from the client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  serverpod_auth:\n    nickname: auth\n")),(0,a.kt)("p",null,"Finally, you need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pub get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod generate")," from your server's directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"mypod_server"),") to add the module to your protocol."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub get\nserverpod generate\n")),(0,a.kt)("p",null,"In your app, add the corresponding dart or Flutter package(s) to your ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  serverpod_auth_shared_flutter: ^0.9.x\n  serverpod_auth_google_flutter: ^0.9.x\n  serverpod_auth_apple_flutter: ^0.9.x\n")),(0,a.kt)("h2",{id:"creating-custom-modules"},"Creating custom modules"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod create")," command it is possible to create new modules for code that is shared between projects or that you want to publish to pub.dev. To create a module instead of a server project, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"--template")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"serverpod create --template module my_module\n")),(0,a.kt)("p",null,"The create command will create a server and a client Dart package. If you also want to add custom Flutter code, use ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter create")," to create a package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flutter create --template package my_module_flutter\n")),(0,a.kt)("p",null,"In your Flutter package you most likely want to import the client libraries created by ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod create"),"."))}m.isMDXComponent=!0}}]);