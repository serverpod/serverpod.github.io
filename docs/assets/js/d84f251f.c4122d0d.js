"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[3642],{16382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const a={},r="Setup",o={id:"concepts/authentication/setup",title:"Setup",description:"Serverpod comes with built-in user management and authentication. It is possible to build a custom authentication implementation, but the recommended way to authenticate users is to use the serverpod_auth module. The module makes it easy to authenticate with email or social sign-ins and currently supports signing in with email, Google, Apple, and Firebase.",source:"@site/docs/05-concepts/10-authentication/01-setup.md",sourceDirName:"05-concepts/10-authentication",slug:"/concepts/authentication/setup",permalink:"/next/concepts/authentication/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/10-authentication/01-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/next/concepts/modules"},next:{title:"The basics",permalink:"/next/concepts/authentication/basics"}},d={},l=[{value:"Installing the auth module",id:"installing-the-auth-module",level:2},{value:"Server setup",id:"server-setup",level:2},{value:"Initialize the auth database",id:"initialize-the-auth-database",level:3},{value:"Client setup",id:"client-setup",level:2},{value:"App setup",id:"app-setup",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Serverpod comes with built-in user management and authentication. It is possible to build a ",(0,s.jsx)(n.a,{href:"custom-overrides",children:"custom authentication implementation"}),", but the recommended way to authenticate users is to use the ",(0,s.jsx)(n.code,{children:"serverpod_auth"})," module. The module makes it easy to authenticate with email or social sign-ins and currently supports signing in with email, Google, Apple, and Firebase."]}),"\n",(0,s.jsxs)(n.p,{children:["Future versions of the authentication module will include more options. If you write another authentication module, please consider ",(0,s.jsx)(n.a,{href:"/contribute",children:"contributing"})," your code."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/sign-in.png",alt:"Sign-in with Serverpod"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-auth-module",children:"Installing the auth module"}),"\n",(0,s.jsx)(n.p,{children:"Serverpod's auth module makes it easy to authenticate users through email or 3rd parties. The authentication module also handles basic user information, such as user names and profile pictures. Make sure to use the same version numbers as for Serverpod itself for all dependencies."}),"\n",(0,s.jsx)(n.h2,{id:"server-setup",children:"Server setup"}),"\n",(0,s.jsxs)(n.p,{children:["Add the module as a dependency to the server projects ",(0,s.jsx)(n.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth_server: ^1.x.x\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add a nickname for the module in the ",(0,s.jsx)(n.code,{children:"config/generator.yaml"})," file. This nickname will be used as the name of the module in the code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"modules:\n  serverpod_auth:\n    nickname: auth\n"})}),"\n",(0,s.jsx)(n.h3,{id:"initialize-the-auth-database",children:"Initialize the auth database"}),"\n",(0,s.jsxs)(n.p,{children:["After adding the module to the server project, you need to initialize the database. First you have to create a new migration that includes the auth module tables. This is done by running the ",(0,s.jsx)(n.code,{children:"serverpod create-migration"})," command line tool in the server project."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ serverpod create-migration\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start your database container from the server project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker-compose up --build --detach\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then apply the migration by starting the server with the ",(0,s.jsx)(n.code,{children:"apply-migration"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ dart run bin/main.dart --role maintenance --apply-migrations\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The full migration instructions can be found in the ",(0,s.jsx)(n.a,{href:"../database/migrations",children:"migration guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"client-setup",children:"Client setup"}),"\n",(0,s.jsxs)(n.p,{children:["Add the auth client in your client projects ",(0,s.jsx)(n.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth_client: ^1.x.x\n"})}),"\n",(0,s.jsx)(n.h2,{id:"app-setup",children:"App setup"}),"\n",(0,s.jsxs)(n.p,{children:["First, add dependencies to your app's ",(0,s.jsx)(n.code,{children:"pubspec.yaml"})," file for the methods of signing in that you want to support."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  flutter:\n    sdk: flutter\n  serverpod_flutter: ^1.x.x\n  auth_example_client:\n    path: ../auth_example_client\n  \n  serverpod_auth_shared_flutter: ^1.x.x\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, you need to set up a ",(0,s.jsx)(n.code,{children:"SessionManager"}),", which keeps track of the user's state. It will also handle the authentication keys passed to the client from the server, upload user profile images, etc."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"late SessionManager sessionManager;\nlate Client client;\n\nvoid main() async {\n  // Need to call this as we are using Flutter bindings before runApp is called.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // The android emulator does not have access to the localhost of the machine.\n  // const ipAddress = '10.0.2.2'; // Android emulator ip for the host\n\n  // On a real device replace the ipAddress with the IP address of your computer.\n  const ipAddress = 'localhost';\n\n  // Sets up a singleton client object that can be used to talk to the server from\n  // anywhere in our app. The client is generated from your server code.\n  // The client is set up to connect to a Serverpod running on a local server on\n  // the default port. You will need to modify this to connect to staging or\n  // production servers.\n  client = Client(\n    'http://$ipAddress:8080/',\n    authenticationKeyManager: FlutterAuthenticationKeyManager(),\n  )..connectivityMonitor = FlutterConnectivityMonitor();\n\n  // The session manager keeps track of the signed-in state of the user. You\n  // can query it to see if the user is currently signed in and get information\n  // about the user.\n  sessionManager = SessionManager(\n    caller: client.modules.auth,\n  );\n  await sessionManager.initialize();\n\n  runApp(MyApp());\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"SessionManager"})," has useful methods for viewing and monitoring the user's current state:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"signedInUser"})," will return a ",(0,s.jsx)(n.code,{children:"UserInfo"})," if the user is currently signed in (or ",(0,s.jsx)(n.code,{children:"null"})," if the user isn't signed in)."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"addListener"})," method to get notified of changes to the user's signed in state."]}),"\n",(0,s.jsxs)(n.li,{children:["Sign out a user by calling the ",(0,s.jsx)(n.code,{children:"signOut"})," method."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example it can be useful to subscribe to changes in the ",(0,s.jsx)(n.code,{children:"SessionManager"})," and force a rerender of your app."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"@override\nvoid initState() {\n  super.initState();\n\n  // Rebuild the page if signed in status changes.\n  sessionManager.addListener(() {\n    setState(() {});\n  });\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);