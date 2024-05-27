"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4945],{86376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=n(85893),i=n(11151);const r={},l="Setup",d={id:"concepts/authentication/setup",title:"Setup",description:"Serverpod comes with built-in user management and authentication. It is possible to build a custom authentication implementation, but the recommended way to authenticate users is to use the serverpod_auth module. The module makes it easy to authenticate with email or social sign-ins and currently supports signing in with email, Google, Apple, and Firebase.",source:"@site/versioned_docs/version-2.0.0/05-concepts/10-authentication/01-setup.md",sourceDirName:"05-concepts/10-authentication",slug:"/concepts/authentication/setup",permalink:"/concepts/authentication/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/10-authentication/01-setup.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/concepts/modules"},next:{title:"The basics",permalink:"/concepts/authentication/basics"}},a={},o=[{value:"Installing the auth module",id:"installing-the-auth-module",level:2},{value:"Server setup",id:"server-setup",level:2},{value:"Initialize the auth database",id:"initialize-the-auth-database",level:3},{value:"Configure Authentication",id:"configure-authentication",level:3},{value:"Client setup",id:"client-setup",level:2},{value:"App setup",id:"app-setup",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:["Serverpod comes with built-in user management and authentication. It is possible to build a ",(0,s.jsx)(t.a,{href:"custom-overrides",children:"custom authentication implementation"}),", but the recommended way to authenticate users is to use the ",(0,s.jsx)(t.code,{children:"serverpod_auth"})," module. The module makes it easy to authenticate with email or social sign-ins and currently supports signing in with email, Google, Apple, and Firebase."]}),"\n",(0,s.jsxs)(t.p,{children:["Future versions of the authentication module will include more options. If you write another authentication module, please consider ",(0,s.jsx)(t.a,{href:"/contribute",children:"contributing"})," your code."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/sign-in.png",alt:"Sign-in with Serverpod"})}),"\n",(0,s.jsx)(t.h2,{id:"installing-the-auth-module",children:"Installing the auth module"}),"\n",(0,s.jsx)(t.p,{children:"Serverpod's auth module makes it easy to authenticate users through email or 3rd parties. The authentication module also handles basic user information, such as user names and profile pictures. Make sure to use the same version numbers as for Serverpod itself for all dependencies."}),"\n",(0,s.jsx)(t.h2,{id:"server-setup",children:"Server setup"}),"\n",(0,s.jsxs)(t.p,{children:["Add the module as a dependency to the server project's ",(0,s.jsx)(t.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"$ dart pub add serverpod_auth_server\n"})}),"\n",(0,s.jsx)(t.p,{children:"Add the authentication handler to the Serverpod instance."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"import 'package:serverpod_auth_server/serverpod_auth_server.dart' as auth;\n\nvoid run(List<String> args) async {\n  var pod = Serverpod(\n    args,\n    Protocol(),\n    Endpoints(),\n    authenticationHandler: auth.authenticationHandler, // Add this line\n  );\n\n  ...\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Optionally, add a nickname for the module in the ",(0,s.jsx)(t.code,{children:"config/generator.yaml"})," file. This nickname will be used as the name of the module in the code."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"modules:\n  serverpod_auth:\n    nickname: auth\n"})}),"\n",(0,s.jsxs)(t.p,{children:["While still in the server project, generate the client code and endpoint methods for the auth module by running the ",(0,s.jsx)(t.code,{children:"serverpod generate"})," command line tool."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,s.jsx)(t.h3,{id:"initialize-the-auth-database",children:"Initialize the auth database"}),"\n",(0,s.jsxs)(t.p,{children:["After adding the module to the server project, you need to initialize the database. First you have to create a new migration that includes the auth module tables. This is done by running the ",(0,s.jsx)(t.code,{children:"serverpod create-migration"})," command line tool in the server project."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ serverpod create-migration\n"})}),"\n",(0,s.jsx)(t.p,{children:"Start your database container from the server project."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ docker-compose up --build --detach\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then apply the migration by starting the server with the ",(0,s.jsx)(t.code,{children:"apply-migrations"})," flag."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ dart run bin/main.dart --role maintenance --apply-migrations\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The full migration instructions can be found in the ",(0,s.jsx)(t.a,{href:"../database/migrations",children:"migration guide"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"configure-authentication",children:"Configure Authentication"}),"\n",(0,s.jsxs)(t.p,{children:["Serverpod's auth module comes with a default Authentication Configuration. To customize it, go to your main ",(0,s.jsx)(t.code,{children:"server.dart"})," file, import the ",(0,s.jsx)(t.code,{children:"serverpod_auth_server"})," module and set up the authentication configuration:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"import 'package:serverpod_auth_server/module.dart' as auth;  \n  \nvoid run(List<String> args) async {\n\n  auth.AuthConfig.set(auth.AuthConfig(  \n    minPasswordLength: 12,\n  ));  \n    \n  // Start the Serverpod server.  \n  await pod.start();\n}\n\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Property"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"maxAllowedEmailSignInAttempts"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Max allowed failed email sign in attempts within the reset period."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"emailSignInFailureResetTime"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The reset period for email sign in attempts. Defaults to 5 minutes."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5min"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userCanEditUserImage"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if users can update their profile images."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userCanEditUserName"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if users can edit their user names."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userCanEditFullName"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if users can view their user name."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userCanSeeUserName"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if users can view their user name."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userCanSeeFullName"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if users can view their full name."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"enableUserImages"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if user images are enabled."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"importUserImagesFromGoogleSignIn"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if user images should be imported when signing in with Google."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userImageSize"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The size of user images."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"256"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userImageFormat"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The format used to store user images"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"jpg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userImageQuality"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The quality setting for images if JPG format is used."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"70"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userImageGenerator"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Generator used to produce default user images."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userInfoCacheLifetime"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The duration which user infos are cached locally in the server."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1min"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"onUserWillBeCreated"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Called when a user is about to be created, gives a chance to abort the creation by returning false."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"onUserCreated"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Called after a user has been created. Listen to this callback if you need to do additional setup."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"onUserUpdated"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Called whenever a user has been updated. This can be when the user name is changed or if the user uploads a new profile picture."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"sendPasswordResetEmail"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Called when a user should be sent a reset code by email."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"sendValidationEmail"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Called when a user should be sent a validation code on account setup."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"validationCodeLength"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The length of the validation code used in the authentication process. This value determines the number of digits in the validation code. Setting this value to ",(0,s.jsx)(t.strong,{children:"less than 3 reduces security."})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"8"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"passwordResetExpirationTime"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The time for password resets to be valid."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"24h"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"extraSaltyHash"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if the server should use the accounts email address as part of the salt when storing password hashes (strongly recommended)."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"firebaseServiceAccountKeyJson"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Firebase service account key JSON file. Generate and download from the Firebase console."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"maxPasswordLength"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum length of passwords when signing up with email."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"128"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"minPasswordLength"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The minimum length of passwords when signing up with email."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"8"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"allowUnsecureRandom"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if unsecure random number generation is allowed. If set to false, an error will be thrown if the platform does not support secure random number generation."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"client-setup",children:"Client setup"}),"\n",(0,s.jsxs)(t.p,{children:["Add the auth client in your client project's ",(0,s.jsx)(t.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth_client: ^1.x.x\n"})}),"\n",(0,s.jsx)(t.h2,{id:"app-setup",children:"App setup"}),"\n",(0,s.jsxs)(t.p,{children:["First, add dependencies to your app's ",(0,s.jsx)(t.code,{children:"pubspec.yaml"})," file for the methods of signing in that you want to support."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"dependencies:\n  flutter:\n    sdk: flutter\n  serverpod_flutter: ^1.x.x\n  auth_example_client:\n    path: ../auth_example_client\n  \n  serverpod_auth_shared_flutter: ^1.x.x\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, you need to set up a ",(0,s.jsx)(t.code,{children:"SessionManager"}),", which keeps track of the user's state. It will also handle the authentication keys passed to the client from the server, upload user profile images, etc."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"late SessionManager sessionManager;\nlate Client client;\n\nvoid main() async {\n  // Need to call this as we are using Flutter bindings before runApp is called.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // The android emulator does not have access to the localhost of the machine.\n  // const ipAddress = '10.0.2.2'; // Android emulator ip for the host\n\n  // On a real device replace the ipAddress with the IP address of your computer.\n  const ipAddress = 'localhost';\n\n  // Sets up a singleton client object that can be used to talk to the server from\n  // anywhere in our app. The client is generated from your server code.\n  // The client is set up to connect to a Serverpod running on a local server on\n  // the default port. You will need to modify this to connect to staging or\n  // production servers.\n  client = Client(\n    'http://$ipAddress:8080/',\n    authenticationKeyManager: FlutterAuthenticationKeyManager(),\n  )..connectivityMonitor = FlutterConnectivityMonitor();\n\n  // The session manager keeps track of the signed-in state of the user. You\n  // can query it to see if the user is currently signed in and get information\n  // about the user.\n  sessionManager = SessionManager(\n    caller: client.modules.auth,\n  );\n  await sessionManager.initialize();\n\n  runApp(MyApp());\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SessionManager"})," has useful methods for viewing and monitoring the user's current state:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"signedInUser"})," will return a ",(0,s.jsx)(t.code,{children:"UserInfo"})," if the user is currently signed in (or ",(0,s.jsx)(t.code,{children:"null"})," if the user isn't signed in)."]}),"\n",(0,s.jsxs)(t.li,{children:["Use the ",(0,s.jsx)(t.code,{children:"addListener"})," method to get notified of changes to the user's signed in state."]}),"\n",(0,s.jsxs)(t.li,{children:["Sign out a user by calling the ",(0,s.jsx)(t.code,{children:"signOut"})," method."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For example it can be useful to subscribe to changes in the ",(0,s.jsx)(t.code,{children:"SessionManager"})," and force a rerender of your app."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"@override\nvoid initState() {\n  super.initState();\n\n  // Rebuild the page if signed in status changes.\n  sessionManager.addListener(() {\n    setState(() {});\n  });\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var s=n(67294);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);