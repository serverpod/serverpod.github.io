"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[7987],{67627:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=n(85893),r=n(11151);const s={},o="Firebase",a={id:"concepts/authentication/providers/firebase",title:"Firebase",description:"Serverpod uses Firebase UI auth to handle authentication through Firebase. It allows you to add social sign-in types that Serverpod doesn't directly support.",source:"@site/docs/06-concepts/11-authentication/04-providers/05-firebase.md",sourceDirName:"06-concepts/11-authentication/04-providers",slug:"/concepts/authentication/providers/firebase",permalink:"/next/concepts/authentication/providers/firebase",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/11-authentication/04-providers/05-firebase.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apple",permalink:"/next/concepts/authentication/providers/apple"},next:{title:"Custom providers",permalink:"/next/concepts/authentication/providers/custom-providers"}},c={},d=[{value:"Server-side Configuration",id:"server-side-configuration",level:2},{value:"Client-side Configuration",id:"client-side-configuration",level:2},{value:"Firebase config",id:"firebase-config",level:2},{value:"Trigger the auth UI with Serverpod",id:"trigger-the-auth-ui-with-serverpod",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"firebase",children:"Firebase"})}),"\n",(0,t.jsxs)(i.p,{children:["Serverpod uses ",(0,t.jsx)(i.a,{href:"https://pub.dev/packages/firebase_ui_auth",children:"Firebase UI auth"})," to handle authentication through Firebase. It allows you to add social sign-in types that Serverpod doesn't directly support."]}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"Serverpod automatically merges accounts that are using the same email addresses, so make sure only to allow sign-ins where the email has been verified."})}),"\n",(0,t.jsx)(i.h2,{id:"server-side-configuration",children:"Server-side Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["The server needs the service account credentials for access to your Firebase project. To create a new key go to the ",(0,t.jsx)(i.a,{href:"https://console.firebase.google.com/",children:"Firebase console"})," then navigate to ",(0,t.jsx)(i.code,{children:"project settings > service accounts"})," click on ",(0,t.jsx)(i.code,{children:"Generate new private key"})," and then ",(0,t.jsx)(i.code,{children:"Generate key"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Service account",src:n(7802).Z+"",width:"2000",height:"1360"})}),"\n",(0,t.jsxs)(i.p,{children:["This will download the JSON file, rename it to ",(0,t.jsx)(i.code,{children:"firebase_service_account_key.json"})," and place it in the ",(0,t.jsx)(i.code,{children:"config"})," folder in your server project. Note that if this file is corrupt or if the name does not follow the convention here the authentication with firebase will fail."]}),"\n",(0,t.jsx)(i.admonition,{type:"danger",children:(0,t.jsx)(i.p,{children:"The firebase_service_account_key.json file gives admin access to your Firebase project, never store it in version control."})}),"\n",(0,t.jsx)(i.h2,{id:"client-side-configuration",children:"Client-side Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["To add authentication with Firebase, you must first install and initialize the Firebase CLI tools and Flutter fire. Follow the instructions ",(0,t.jsx)(i.a,{href:"https://firebase.google.com/docs/flutter/setup?platform=web",children:"here"})," for your Flutter project."]}),"\n",(0,t.jsx)(i.h2,{id:"firebase-config",children:"Firebase config"}),"\n",(0,t.jsx)(i.p,{children:"The short version:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"$ flutter pub add firebase_core firebase_auth firebase_ui_auth\n$ flutterfire configure\n"})}),"\n",(0,t.jsxs)(i.p,{children:["In the Firebase console, configure the different social sign-ins you plan to use, under ",(0,t.jsx)(i.code,{children:"Authentication > Sign-in method"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Auth provider",src:n(10578).Z+"",width:"1992",height:"510"})}),"\n",(0,t.jsxs)(i.p,{children:["In your ",(0,t.jsx)(i.code,{children:"main.dart"})," in your flutter project add:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"import 'package:firebase_ui_auth/firebase_ui_auth.dart' as firebase;\nimport 'package:firebase_core/firebase_core.dart';\nimport 'firebase_options.dart';\n\n...\nvoid main() async {\n  ...\n  await Firebase.initializeApp(\n      options: DefaultFirebaseOptions.currentPlatform,\n    );\n\n  firebase.FirebaseUIAuth.configureProviders([\n    firebase.PhoneAuthProvider(),\n  ]);\n\n  ...\n  runApp(const MyApp());\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"trigger-the-auth-ui-with-serverpod",children:"Trigger the auth UI with Serverpod"}),"\n",(0,t.jsxs)(i.p,{children:["Add the ",(0,t.jsx)(i.a,{href:"https://pub.dev/packages/serverpod_auth_firebase_flutter",children:"serverpod_auth_firebase_flutter"})," package."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"$ flutter pub add serverpod_auth_firebase_flutter\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"SignInWithFirebaseButton"})," is a convenient button that triggers the sign-in flow and can be used like this:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"SignInWithFirebaseButton(\n  caller: client.modules.auth,\n  authProviders: [\n    firebase.PhoneAuthProvider(),\n  ],\n  onFailure: () => print('Failed to sign in with Firebase.'),\n  onSignedIn: () => print('Signed in with Firebase.'),\n)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Where ",(0,t.jsx)(i.code,{children:"caller"})," is the Serverpod client you use to talk with the server and ",(0,t.jsx)(i.code,{children:"authProviders"})," a list with the firebase auth providers you want to enable in the UI."]}),"\n",(0,t.jsxs)(i.p,{children:["You can also trigger the Firebase auth UI by calling the method ",(0,t.jsx)(i.code,{children:"signInWithFirebase"})," like so:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"await signInWithFirebase(\n  context: context, \n  caller: client.modules.auth, \n  authProviders: [\n    firebase.PhoneAuthProvider(),\n  ],\n);\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Where ",(0,t.jsx)(i.code,{children:"context"})," is your ",(0,t.jsx)(i.code,{children:"BuildContext"}),", ",(0,t.jsx)(i.code,{children:"caller"})," and ",(0,t.jsx)(i.code,{children:"authProviders"})," are the same as for the button. The method returns a nullable ",(0,t.jsx)(i.a,{href:"../working-with-users",children:"UserInfo"})," object, if the object is null the Sign-in failed, if not the Sign-in was successful."]})]})}function l(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7802:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/1-server-key-a3d225c962e46d6135eff54f7191bb84.png"},10578:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/2-auth-provider-3d8a103f08b06690db115d59dd029039.png"},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var t=n(67294);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);