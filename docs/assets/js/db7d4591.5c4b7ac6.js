"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[35223],{28450:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"concepts/modules","title":"Modules","description":"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server and client code and Flutter widgets. A module contains its own namespace for endpoints and methods to minimize module conflicts.","source":"@site/versioned_docs/version-1.0.0/04-concepts/06-modules.md","sourceDirName":"04-concepts","slug":"/concepts/modules","permalink":"/1.0.0/concepts/modules","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.0.0/04-concepts/06-modules.md","tags":[],"version":"1.0.0","sidebarPosition":6,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Logging","permalink":"/1.0.0/concepts/logging"},"next":{"title":"Authentication","permalink":"/1.0.0/concepts/authentication"}}');var n=o(74848),s=o(28453);const d={},a="Modules",l={},c=[{value:"Adding a module to your project",id:"adding-a-module-to-your-project",level:2},{value:"Database setup",id:"database-setup",level:3},{value:"Server setup",id:"server-setup",level:3},{value:"Client setup",id:"client-setup",level:3},{value:"Flutter app setup",id:"flutter-app-setup",level:3},{value:"Referencing a module",id:"referencing-a-module",level:2},{value:"Creating custom modules",id:"creating-custom-modules",level:2}];function i(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"modules",children:"Modules"})}),"\n",(0,n.jsx)(t.p,{children:"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server and client code and Flutter widgets. A module contains its own namespace for endpoints and methods to minimize module conflicts."}),"\n",(0,n.jsxs)(t.p,{children:["Examples of modules are the ",(0,n.jsx)(t.code,{children:"serverpod_auth"})," module and the ",(0,n.jsx)(t.code,{children:"serverpod_chat"})," module, which both are maintained by the Serverpod team."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-a-module-to-your-project",children:"Adding a module to your project"}),"\n",(0,n.jsx)(t.h3,{id:"database-setup",children:"Database setup"}),"\n",(0,n.jsxs)(t.p,{children:["Each module comes with a set of database tables. You must add these to your database for the module to work. The code for creating the tables lives in the ",(0,n.jsx)(t.code,{children:"generated/tables.pgsql"})," file of the ",(0,n.jsx)(t.code,{children:"server"})," part of the module. For instance, you can find the database tables for the auth module ",(0,n.jsx)(t.a,{href:"https://github.com/serverpod/serverpod/blob/main/modules/serverpod_auth/serverpod_auth_server/generated/tables.pgsql",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"server-setup",children:"Server setup"}),"\n",(0,n.jsxs)(t.p,{children:["To add a module to your project, you must include the server and client/Flutter packages in your project's ",(0,n.jsx)(t.code,{children:"pubspec.yaml"})," files and to add an entry to your ",(0,n.jsx)(t.code,{children:"config/generator.yaml"})," file."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, to add the ",(0,n.jsx)(t.code,{children:"serverpod_auth"})," module to your project, you need to add ",(0,n.jsx)(t.code,{children:"serverpod_auth_server"})," to your server's ",(0,n.jsx)(t.code,{children:"pubspec.yaml"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_server: ^1.x.x\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Make sure to replace ",(0,n.jsx)(t.code,{children:"1.x.x"})," with the Serverpod version you are using. Serverpod uses the same version number for all official packages. If you use the same version, you will be sure that everything works together."]})}),"\n",(0,n.jsxs)(t.p,{children:["In your ",(0,n.jsx)(t.code,{children:"config/generator.yaml"})," add the ",(0,n.jsx)(t.code,{children:"serverpod_auth"})," module and give it a ",(0,n.jsx)(t.code,{children:"nickname"}),". The nickname will determine how you reference the module from the client."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"modules:\n  serverpod_auth:\n    nickname: auth\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Finally, you need to run ",(0,n.jsx)(t.code,{children:"pub get"})," and ",(0,n.jsx)(t.code,{children:"serverpod generate"})," from your server's directory (e.g., ",(0,n.jsx)(t.code,{children:"mypod_server"}),") to add the module to your protocol."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dart pub get\nserverpod generate\n"})}),"\n",(0,n.jsx)(t.h3,{id:"client-setup",children:"Client setup"}),"\n",(0,n.jsxs)(t.p,{children:["In your client's ",(0,n.jsx)(t.code,{children:"pubspec.yaml"}),", you will need to add the generated client code from the module."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_client: ^1.x.x\n"})}),"\n",(0,n.jsx)(t.h3,{id:"flutter-app-setup",children:"Flutter app setup"}),"\n",(0,n.jsxs)(t.p,{children:["In your Flutter app, add the corresponding dart or Flutter package(s) to your ",(0,n.jsx)(t.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_shared_flutter: ^1.x.x\n  serverpod_auth_google_flutter: ^1.x.x\n  serverpod_auth_apple_flutter: ^1.x.x\n"})}),"\n",(0,n.jsx)(t.h2,{id:"referencing-a-module",children:"Referencing a module"}),"\n",(0,n.jsx)(t.p,{children:"It can be useful to reference serializable objects in other modules from the yaml-files in your protocol directory. You do this by adding the module prefix, followed by the nickname of the package. For instance, this is how you reference a serializable class in the auth package."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"class: MyClass\nfields:\n  userInfo: module:auth:UserInfo\n"})}),"\n",(0,n.jsx)(t.h2,{id:"creating-custom-modules",children:"Creating custom modules"}),"\n",(0,n.jsxs)(t.p,{children:["With the ",(0,n.jsx)(t.code,{children:"serverpod create"})," command, it is possible to create new modules for code that is shared between projects or that you want to publish to pub.dev. To create a module instead of a server project, pass ",(0,n.jsx)(t.code,{children:"module"})," to the ",(0,n.jsx)(t.code,{children:"--template"})," flag."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"serverpod create --template module my_module\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The create command will create a server and a client Dart package. If you also want to add custom Flutter code, use ",(0,n.jsx)(t.code,{children:"flutter create"})," to create a package."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"flutter create --template package my_module_flutter\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In your Flutter package, you most likely want to import the client libraries created by ",(0,n.jsx)(t.code,{children:"serverpod create"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Most modules will need a set of database tables to function. When naming the tables, you should use the module name as a prefix to the table name to avoid any conflicts. For instance, the Serverpod tables are prefixed with ",(0,n.jsx)(t.code,{children:"serverpod_"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>a});var r=o(96540);const n={},s=r.createContext(n);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);