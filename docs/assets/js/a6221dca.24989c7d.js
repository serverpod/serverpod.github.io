"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[1290],{82588:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(85893),o=n(11151);const s={},d="Modules",a={id:"concepts/modules",title:"Modules",description:"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server, client, and Flutter code. A module contains its own namespace for endpoints and methods to minimize the risk of conflicts.",source:"@site/docs/05-concepts/10-modules.md",sourceDirName:"05-concepts",slug:"/concepts/modules",permalink:"/next/concepts/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/10-modules.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/next/concepts/logging"},next:{title:"Setup",permalink:"/next/concepts/authentication/setup"}},l={},c=[{value:"Adding a module to your project",id:"adding-a-module-to-your-project",level:2},{value:"Server setup",id:"server-setup",level:3},{value:"Client setup",id:"client-setup",level:3},{value:"Flutter app setup",id:"flutter-app-setup",level:3},{value:"Referencing a module",id:"referencing-a-module",level:2},{value:"Creating custom modules",id:"creating-custom-modules",level:2}];function i(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"modules",children:"Modules"}),"\n",(0,t.jsx)(r.p,{children:"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server, client, and Flutter code. A module contains its own namespace for endpoints and methods to minimize the risk of conflicts."}),"\n",(0,t.jsxs)(r.p,{children:["Examples of modules are the ",(0,t.jsx)(r.code,{children:"serverpod_auth"})," module and the ",(0,t.jsx)(r.code,{children:"serverpod_chat"})," module, which both are maintained by the Serverpod team."]}),"\n",(0,t.jsx)(r.h2,{id:"adding-a-module-to-your-project",children:"Adding a module to your project"}),"\n",(0,t.jsx)(r.h3,{id:"server-setup",children:"Server setup"}),"\n",(0,t.jsxs)(r.p,{children:["To add a module to your project, you must include the server and client/Flutter packages in your project's ",(0,t.jsx)(r.code,{children:"pubspec.yaml"})," files."]}),"\n",(0,t.jsxs)(r.p,{children:["For example, to add the ",(0,t.jsx)(r.code,{children:"serverpod_auth"})," module to your project, you need to add ",(0,t.jsx)(r.code,{children:"serverpod_auth_server"})," to your server's ",(0,t.jsx)(r.code,{children:"pubspec.yaml"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_server: ^1.x.x\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["Make sure to replace ",(0,t.jsx)(r.code,{children:"1.x.x"})," with the Serverpod version you are using. Serverpod uses the same version number for all official packages. If you use the same version, you will be sure that everything works together."]})}),"\n",(0,t.jsxs)(r.p,{children:["In your ",(0,t.jsx)(r.code,{children:"config/generator.yaml"})," you can optionally add the ",(0,t.jsx)(r.code,{children:"serverpod_auth"})," module and give it a ",(0,t.jsx)(r.code,{children:"nickname"}),". The nickname will determine how you reference the module from the client. If the module isn't added in the ",(0,t.jsx)(r.code,{children:"generator.yaml"}),", the default nickname for the module will be used."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"modules:\n  serverpod_auth:\n    nickname: auth\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Then run ",(0,t.jsx)(r.code,{children:"pub get"})," and ",(0,t.jsx)(r.code,{children:"serverpod generate"})," from your server's directory (e.g., ",(0,t.jsx)(r.code,{children:"mypod_server"}),") to add the module to your project's deserializer."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ dart pub get\n$ serverpod generate\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Finally, since modules might include modifications to the database schema, you should create a new database migration and apply it by running ",(0,t.jsx)(r.code,{children:"serverpod create-migration"}),"  then ",(0,t.jsx)(r.code,{children:"dart bin/main.dart --apply-migrations"})," from your server's directory."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ serverpod create-migration\n$ dart bin/main.dart --apply-migrations\n"})}),"\n",(0,t.jsx)(r.h3,{id:"client-setup",children:"Client setup"}),"\n",(0,t.jsxs)(r.p,{children:["In your client's ",(0,t.jsx)(r.code,{children:"pubspec.yaml"}),", you will need to add the generated client code from the module."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_client: ^1.x.x\n"})}),"\n",(0,t.jsx)(r.h3,{id:"flutter-app-setup",children:"Flutter app setup"}),"\n",(0,t.jsxs)(r.p,{children:["In your Flutter app, add the corresponding dart or Flutter package(s) to your ",(0,t.jsx)(r.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_shared_flutter: ^1.x.x\n  serverpod_auth_google_flutter: ^1.x.x\n  serverpod_auth_apple_flutter: ^1.x.x\n"})}),"\n",(0,t.jsx)(r.h2,{id:"referencing-a-module",children:"Referencing a module"}),"\n",(0,t.jsx)(r.p,{children:"It can be useful to reference serializable objects in other modules from the yaml-files in your model directory. You do this by adding the module prefix, followed by the nickname of the package. For instance, this is how you reference a serializable class in the auth package."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"class: MyClass\nfields:\n  userInfo: module:auth:UserInfo\n"})}),"\n",(0,t.jsx)(r.h2,{id:"creating-custom-modules",children:"Creating custom modules"}),"\n",(0,t.jsxs)(r.p,{children:["With the ",(0,t.jsx)(r.code,{children:"serverpod create"})," command, it is possible to create new modules for code that is shared between projects or that you want to publish to pub.dev. To create a module instead of a server project, pass ",(0,t.jsx)(r.code,{children:"module"})," to the ",(0,t.jsx)(r.code,{children:"--template"})," flag."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ serverpod create --template module my_module\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The create command will create a server and a client Dart package. If you also want to add custom Flutter code, use ",(0,t.jsx)(r.code,{children:"flutter create"})," to create a package."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ flutter create --template package my_module_flutter\n"})}),"\n",(0,t.jsxs)(r.p,{children:["In your Flutter package, you most likely want to import the client libraries created by ",(0,t.jsx)(r.code,{children:"serverpod create"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["Most modules will need a set of database tables to function. When naming the tables, you should use the module name as a prefix to the table name to avoid any conflicts. For instance, the Serverpod tables are prefixed with ",(0,t.jsx)(r.code,{children:"serverpod_"}),"."]})})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>d});var t=n(67294);const o={},s=t.createContext(o);function d(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);