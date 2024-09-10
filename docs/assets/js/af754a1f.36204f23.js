"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[83962],{40840:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=t(85893),n=t(11151);const d={},s="Modules",c={id:"concepts/modules",title:"Modules",description:"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package, but it contains both server and client code, as well as Flutter widgets. A module contains its own name space for endpoints and methods to minimize any conflicts between modules.",source:"@site/versioned_docs/version-0.9.5/02-concepts/06-modules.md",sourceDirName:"02-concepts",slug:"/concepts/modules",permalink:"/0.9.5/concepts/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.5/02-concepts/06-modules.md",tags:[],version:"0.9.5",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/0.9.5/concepts/logging"},next:{title:"Authentication",permalink:"/0.9.5/concepts/authentication"}},a={},l=[{value:"Adding a module to your project",id:"adding-a-module-to-your-project",level:2},{value:"Creating custom modules",id:"creating-custom-modules",level:2}];function i(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"modules",children:"Modules"})}),"\n",(0,r.jsx)(o.p,{children:"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package, but it contains both server and client code, as well as Flutter widgets. A module contains its own name space for endpoints and methods to minimize any conflicts between modules."}),"\n",(0,r.jsxs)(o.p,{children:["Examples of modules are the ",(0,r.jsx)(o.code,{children:"serverpod_auth"})," module and the ",(0,r.jsx)(o.code,{children:"serverpod_chat"})," module that both are maintained by the Serverpod team."]}),"\n",(0,r.jsx)(o.h2,{id:"adding-a-module-to-your-project",children:"Adding a module to your project"}),"\n",(0,r.jsxs)(o.p,{children:["To add a module to your project you need to include the server and client/Flutter packages to your project's ",(0,r.jsx)(o.code,{children:"pubspec.yaml"})," files and to add an entry to your ",(0,r.jsx)(o.code,{children:"config/generator.yaml"})," file."]}),"\n",(0,r.jsxs)(o.p,{children:["For example, to add the ",(0,r.jsx)(o.code,{children:"serverpod_auth"})," module to your project you need to add ",(0,r.jsx)(o.code,{children:"serverpod_auth_server"})," to your server's ",(0,r.jsx)(o.code,{children:"pubspec.yaml"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_server: ^0.9.x\n"})}),"\n",(0,r.jsxs)(o.p,{children:["In your ",(0,r.jsx)(o.code,{children:"config/generator.yaml"})," add the ",(0,r.jsx)(o.code,{children:"serverpod_auth"})," module and give it a ",(0,r.jsx)(o.code,{children:"nickname"}),". The nickname will determine how you reference the module from the client."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"modules:\n  serverpod_auth:\n    nickname: auth\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Finally, you need to run ",(0,r.jsx)(o.code,{children:"pub get"})," and ",(0,r.jsx)(o.code,{children:"serverpod generate"})," from your server's directory (e.g. ",(0,r.jsx)(o.code,{children:"mypod_server"}),") to add the module to your protocol."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"dart pub get\nserverpod generate\n"})}),"\n",(0,r.jsxs)(o.p,{children:["In your app, add the corresponding dart or Flutter package(s) to your ",(0,r.jsx)(o.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_shared_flutter: ^0.9.x\n  serverpod_auth_google_flutter: ^0.9.x\n  serverpod_auth_apple_flutter: ^0.9.x\n"})}),"\n",(0,r.jsx)(o.h2,{id:"creating-custom-modules",children:"Creating custom modules"}),"\n",(0,r.jsxs)(o.p,{children:["With the ",(0,r.jsx)(o.code,{children:"serverpod create"})," command it is possible to create new modules for code that is shared between projects or that you want to publish to pub.dev. To create a module instead of a server project, pass ",(0,r.jsx)(o.code,{children:"module"})," to the ",(0,r.jsx)(o.code,{children:"--template"})," flag."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"serverpod create --template module my_module\n"})}),"\n",(0,r.jsxs)(o.p,{children:["The create command will create a server and a client Dart package. If you also want to add custom Flutter code, use ",(0,r.jsx)(o.code,{children:"flutter create"})," to create a package."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"flutter create --template package my_module_flutter\n"})}),"\n",(0,r.jsxs)(o.p,{children:["In your Flutter package you most likely want to import the client libraries created by ",(0,r.jsx)(o.code,{children:"serverpod create"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>s});var r=t(67294);const n={},d=r.createContext(n);function s(e){const o=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);