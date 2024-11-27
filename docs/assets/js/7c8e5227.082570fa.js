"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[14936],{55168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"concepts/authentication/providers/apple","title":"Apple","description":"Sign-in with Apple, requires that you have a subscription to the Apple developer program, even if you only want to test the feature in development mode.","source":"@site/versioned_docs/version-2.1.0/06-concepts/11-authentication/04-providers/03-apple.md","sourceDirName":"06-concepts/11-authentication/04-providers","slug":"/concepts/authentication/providers/apple","permalink":"/2.1.0/concepts/authentication/providers/apple","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/06-concepts/11-authentication/04-providers/03-apple.md","tags":[],"version":"2.1.0","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Google","permalink":"/2.1.0/concepts/authentication/providers/google"},"next":{"title":"Firebase","permalink":"/2.1.0/concepts/authentication/providers/firebase"}}');var o=t(74848),r=t(28453);const s={},a="Apple",p={},c=[{value:"Server-side configuration",id:"server-side-configuration",level:2},{value:"Client-side configuration",id:"client-side-configuration",level:2},{value:"Config",id:"config",level:3},{value:"Sign in button",id:"sign-in-button",level:3},{value:"Extra",id:"extra",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"apple",children:"Apple"})}),"\n",(0,o.jsxs)(n.p,{children:["Sign-in with Apple, requires that you have a subscription to the ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple developer program"}),", even if you only want to test the feature in development mode."]}),"\n",(0,o.jsxs)(n.p,{children:["A comprehensive tutorial covering Sign in with Apple is available ",(0,o.jsx)(n.a,{href:"https://medium.com/serverpod/integrating-apple-sign-in-with-serverpod-authentication-part-3-f5a49d006800",children:"here"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Right now, we have official support for iOS and MacOS for Sign in with Apple."})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["You need to install the auth module before you continue, see ",(0,o.jsx)(n.a,{href:"../setup",children:"Setup"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"server-side-configuration",children:"Server-side configuration"}),"\n",(0,o.jsx)(n.p,{children:"No extra steps outside installing the auth module are required."}),"\n",(0,o.jsx)(n.h2,{id:"client-side-configuration",children:"Client-side configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Add the dependency to your ",(0,o.jsx)(n.code,{children:"pubspec.yaml"})," in your flutter project."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth_apple_flutter: ^1.x.x\n"})}),"\n",(0,o.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,o.jsx)(n.p,{children:"Enable the sign-in with Apple capability in your Xcode project, this is the same type of configuration for your iOS and MacOS projects respectively."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Add capabilities",src:t(37322).A+"",width:"1600",height:"624"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign in with Apple",src:t(55219).A+"",width:"1342",height:"972"})}),"\n",(0,o.jsx)(n.h3,{id:"sign-in-button",children:"Sign in button"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"serverpod_auth_apple_flutter"})," package comes with the widget ",(0,o.jsx)(n.code,{children:"SignInWithAppleButton"})," that renders a nice Sign in with Apple button and triggers the native sign-in UI."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_email_flutter/serverpod_auth_email_flutter.dart';\n\nSignInWithAppleButton(\n  caller: client.modules.auth,\n);\n"})}),"\n",(0,o.jsx)(n.p,{children:"The SignInWithAppleButton widget takes a caller parameter that you pass in the authentication module from your Serverpod client, in this case, client.modules.auth."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in button",src:t(17673).A+"",width:"528",height:"94"})}),"\n",(0,o.jsx)(n.h2,{id:"extra",children:"Extra"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"serverpod_auth_apple_flutter"})," implements the sign-in logic using ",(0,o.jsx)(n.a,{href:"https://pub.dev/packages/sign_in_with_apple",children:"sign_in_with_apple"}),". The documentation for this package should in most cases also apply to the Serverpod integration."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Note that Sign in with Apple may not work on some versions of the Simulator (iOS 13.5 works). This issue doesn't affect real devices."})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},37322:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/1-xcode-add-4970bf68f8b6a6f6f938b7d48978d0c6.png"},55219:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2-xcode-sign-in-with-apple-81b2b6a5bcfa774fd02732f2ee43b565.png"},17673:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/3-button-4c66de4c4fb6c956ee97bc1de8d55047.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);