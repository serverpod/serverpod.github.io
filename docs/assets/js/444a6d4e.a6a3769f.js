"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[16869],{1762:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"concepts/authentication","title":"Authentication","description":"Serverpod comes with built-in user management and authentication. You can either build your custom authentication method or use the serverpod_auth module. The module makes it easy to authenticate with email or social sign-ins.","source":"@site/versioned_docs/version-0.9.22/04-concepts/07-authentication.md","sourceDirName":"04-concepts","slug":"/concepts/authentication","permalink":"/0.9.22/concepts/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.22/04-concepts/07-authentication.md","tags":[],"version":"0.9.22","sidebarPosition":7,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Modules","permalink":"/0.9.22/concepts/modules"},"next":{"title":"Uploading files","permalink":"/0.9.22/concepts/file-uploads"}}');var t=i(74848),o=i(28453);const r={},a="Authentication",d={},l=[{value:"The basics",id:"the-basics",level:2},{value:"Restricting access to endpoints",id:"restricting-access-to-endpoints",level:3},{value:"Installing the auth module",id:"installing-the-auth-module",level:2},{value:"App setup",id:"app-setup",level:2},{value:"Setting up Sign in with Email",id:"setting-up-sign-in-with-email",level:2},{value:"Setting up Sign in with Google",id:"setting-up-sign-in-with-google",level:2},{value:"Configure Google Cloud console and your server",id:"configure-google-cloud-console-and-your-server",level:3},{value:"Configure your app",id:"configure-your-app",level:3},{value:"Calling Google APIs",id:"calling-google-apis",level:3},{value:"Setting up Sign in with Apple",id:"setting-up-sign-in-with-apple",level:2},{value:"Setting up Sign in with Firebase",id:"setting-up-sign-in-with-firebase",level:2},{value:"Working with users",id:"working-with-users",level:2},{value:"Displaying or editing user images",id:"displaying-or-editing-user-images",level:2},{value:"Supported authentication methods",id:"supported-authentication-methods",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"authentication",children:"Authentication"})}),"\n",(0,t.jsxs)(n.p,{children:["Serverpod comes with built-in user management and authentication. You can either build your custom authentication method or use the ",(0,t.jsx)(n.code,{children:"serverpod_auth"})," module. The module makes it easy to authenticate with email or social sign-ins."]}),"\n",(0,t.jsx)(n.h2,{id:"the-basics",children:"The basics"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Session"})," object provides information about the current user. A unique ",(0,t.jsx)(n.code,{children:"userId"})," identifies a user. You should use this id whenever you a referring to a user. Access the id of a signed-in user through the ",(0,t.jsx)(n.code,{children:"auth"})," field of the ",(0,t.jsx)(n.code,{children:"Session"})," object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"Future<void> myMethod(Session session) async {\n  var userId = await session.auth.authenticatedUserId;\n  var isSignedIn = userId == null;\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["It's most common to use the ",(0,t.jsx)(n.code,{children:"auth"})," module for handling sign ins, but you can also build your own. If you are building custom authentication methods, use the ",(0,t.jsx)(n.code,{children:"session.auth.signInUser()"})," method to sign in a user and ",(0,t.jsx)(n.code,{children:"session.auth.signOutUser()"})," to sign someone out."]})}),"\n",(0,t.jsx)(n.h3,{id:"restricting-access-to-endpoints",children:"Restricting access to endpoints"}),"\n",(0,t.jsxs)(n.p,{children:["It is common to want to restrict access to an endpoint to users that have signed in. You can do this by overriding the ",(0,t.jsx)(n.code,{children:"requireLogin"})," property of the ",(0,t.jsx)(n.code,{children:"Endpoint"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class MyEndpoint extends Endpoint {\n  @override\n  bool get requireLogin => true;\n\n  ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Serverpod also supports scopes for restricting access. One or more scopes can be associated with a user. For instance, this can be used to give admin access to a specific user. To restrict access for an endpoint, override the ",(0,t.jsx)(n.code,{children:"requiredScopes"})," property."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class MyEndpoint extends Endpoint {\n  @override\n  bool get requireLogin => true;\n\n  @override\n  Set<Scope> get requiredScopes => {Scope.admin};\n  ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"serverpod_auth_server"})," package provides convenient methods for handling basic user information and scopes."]}),"\n",(0,t.jsxs)(n.p,{children:["To update a user's scopes, use the ",(0,t.jsx)(n.code,{children:"Users"})," class's ",(0,t.jsx)(n.code,{children:"updateUserScopes"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"await Users.updateUserScopes(session, userId, {Scope.admin});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-auth-module",children:"Installing the auth module"}),"\n",(0,t.jsx)(n.p,{children:"Serverpod's auth module makes it easy to authenticate users through email or 3rd parties. Currently supported is Signing in with email, Google, Apple, and Firebase. Future versions of the authentication module will include more options. Using this module requires some setup with Google and Apple to work."}),"\n",(0,t.jsx)(n.p,{children:"The authentication module also handles basic user information, such as user names and profile pictures."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/sign-in.png",alt:"Sign-in with Serverpod"})}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the previous section, ",(0,t.jsx)(n.a,{href:"./modules",children:"Modules"}),", for instructions on how to add a module to your project."]}),"\n",(0,t.jsx)(n.h2,{id:"app-setup",children:"App setup"}),"\n",(0,t.jsxs)(n.p,{children:["First, add dependencies to your app's ",(0,t.jsx)(n.code,{children:"pubspec.yaml"})," file for the methods of signing in that you want to support. Make sure to use the same version numbers as for Serverpod itself."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  flutter:\n    sdk: flutter\n  serverpod_flutter: ^1.x.x\n  auth_example_client:\n    path: ../auth_example_client\n  \n  serverpod_auth_shared_flutter: ^1.x.x\n  serverpod_auth_email_flutter: ^1.x.x\n  serverpod_auth_google_flutter: ^1.x.x\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, you need to set up a ",(0,t.jsx)(n.code,{children:"SessionManager"}),", which keeps track of the user's state. It will also handle the authentication keys passed to the client from the server, upload user profile images, etc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"void main() async {\n  // Need to call this as we are using Flutter bindings before runApp is called.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // Sets up a singleton client object that can be used to talk to the server\n  // from anywhere in our app. The client is generated from your server code.\n  // The client is set up to connect to a Serverpod running on a local server on\n  // the default port. You will need to modify this to connect to staging or\n  // production servers.\n  client = Client(\n    'http://localhost:8080/',\n    authenticationKeyManager: FlutterAuthenticationKeyManager(),\n  );\n\n  // The session manager keeps track of the signed-in state of the user. You\n  // can query it to see if the user is currently signed in and get information\n  // about the user.\n  sessionManager = SessionManager(\n    caller: client.modules.auth,\n  );\n  await sessionManager.initialize();\n\n  runApp(MyApp());\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SessionManager"})," has useful methods for viewing and monitoring the user's current state:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"signedInUser"})," will return a ",(0,t.jsx)(n.code,{children:"UserInfo"})," if the user is currently signed in (or ",(0,t.jsx)(n.code,{children:"null"})," if the user isn't signed in)."]}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"addListener"})," method to get notified of changes to the user's signed in state."]}),"\n",(0,t.jsxs)(n.li,{children:["Sign out a user by calling the ",(0,t.jsx)(n.code,{children:"signOut"})," method."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-sign-in-with-email",children:"Setting up Sign in with Email"}),"\n",(0,t.jsxs)(n.p,{children:["To properly configure Sign in with Email, you must connect your Serverpod to an external service that can send the emails. One convenient option is the ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/mailer",children:"mailer"})," package, which can send emails through any SMTP service. Most email providers, such as Sendgrid or Mandrill, support SMTP."]}),"\n",(0,t.jsxs)(n.p,{children:["In your main ",(0,t.jsx)(n.code,{children:"server.dart"})," file, you can configure the auth module. First, make sure to include the module:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_server/module.dart' as auth;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, add the configuration before you start your Serverpod:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"auth.AuthConfig.set(auth.AuthConfig(\n  sendValidationEmail: (session, email, validationCode) async {\n    // Send your validation email here.\n  },\n  sendPasswordResetEmail: (session, userInfo, validationCode) async {\n    // Send a password reset email here.\n  },\n));\n\n// Start the server.\nawait pod.start();\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For debugging purposes, you can print the validation code to the console. The chat module example does just this. You can view that code ",(0,t.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/blob/main/examples/chat/chat_server/lib/server.dart",children:"here"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["In your app, you will need to add the ",(0,t.jsx)(n.code,{children:"serverpod_auth_email_flutter"})," package to your ",(0,t.jsx)(n.code,{children:"pubspec.yaml"}),". The package includes both methods for creating a custom email sign-in form and a pre-made ",(0,t.jsx)(n.code,{children:"SignInWithEmailButton"})," widget. If you are building custom forms, it is helpful to read the documentation provided in the module and review the code in the ",(0,t.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/blob/main/modules/serverpod_auth/serverpod_auth_email_flutter/lib/src/signin_dialog.dart",children:"SignInWithEmailDialog"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-sign-in-with-google",children:"Setting up Sign in with Google"}),"\n",(0,t.jsxs)(n.p,{children:["To set up Sign in with Google, you will need a Google account for your organization and set up a new project. For the project, you need to set up ",(0,t.jsx)(n.em,{children:"Credentials"})," and ",(0,t.jsx)(n.em,{children:"Oauth consent screen"}),". You will also need to add the ",(0,t.jsx)(n.code,{children:"serverpod_auth_google_flutter"})," package to your app and do some additional setup depending on each platform."]}),"\n",(0,t.jsx)(n.h3,{id:"configure-google-cloud-console-and-your-server",children:"Configure Google Cloud console and your server"}),"\n",(0,t.jsx)(n.p,{children:"In the Google Cloud console, you need to set up a few things:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Activate the ",(0,t.jsx)(n.em,{children:"People API"})," for your project. You find it in ",(0,t.jsx)(n.em,{children:"APIs & Services"})," > ",(0,t.jsx)(n.em,{children:"Enabled APIs & services"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set up the OAuth consent screen. It's in ",(0,t.jsx)(n.em,{children:"APIs & Services"})," > ",(0,t.jsx)(n.em,{children:"OAuth consent screen"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You will need a domain for your project, which you add under ",(0,t.jsx)(n.code,{children:"Authorized domains"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:".../auth/userinfo.email"})," and ",(0,t.jsx)(n.code,{children:".../auth/userinfo.profile"})," to your ",(0,t.jsx)(n.code,{children:"Scopes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Add OAuth 2.0 credentials for your web application. Do this under ",(0,t.jsx)(n.em,{children:"APIs & Services"})," > ",(0,t.jsx)(n.em,{children:"Credentials"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.em,{children:"Web application OAuth Client ID"}),". This is required even if you only want to provide sign-in with iOS or Android, as the server uses it to access Google's APIs."]}),"\n",(0,t.jsx)(n.li,{children:"For _Authorized JavaScript origins`, enter your domain name."}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.em,{children:"Authorized redirect URIs"}),", enter your domain name. You may also want to add your development server here, e.g., ",(0,t.jsx)(n.code,{children:"http://localhost:8080"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Download the JSON file for your web application OAuth client. This file contains both the client id and the client secret. Rename the file to ",(0,t.jsx)(n.code,{children:"google_client_secret.json"})," and place it in your server's ",(0,t.jsx)(n.code,{children:"config"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Add OAuth 2.0 credentials for iOS and Android.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create an ",(0,t.jsx)(n.em,{children:"OAuth Client ID"})," for iOS or Android."]}),"\n",(0,t.jsx)(n.li,{children:"Download the associated Plist-file."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Google credentials",src:i(1065).A+"",width:"2286",height:"1020"}),"\n",(0,t.jsx)(n.em,{children:"Credentials configured for the server and an iOS app."})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"google_client_secret.json"})," contains a private key and should not be version controlled."]})}),"\n",(0,t.jsx)(n.h3,{id:"configure-your-app",children:"Configure your app"}),"\n",(0,t.jsx)(n.p,{children:"You need to take platform-dependent steps to configure Sign in with Google in your app."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the ",(0,t.jsx)(n.code,{children:"serverpod_auth_google_flutter"})," package to your app."]}),"\n",(0,t.jsxs)(n.li,{children:["For iOS, download the plist from the ",(0,t.jsx)(n.em,{children:"Credentials"})," page in Google Cloud console. Rename the file to ",(0,t.jsx)(n.code,{children:"GoogleService-Info.plist"})," and add it to your Xcode project. Open the plist file. If there is no entry for ",(0,t.jsx)(n.code,{children:"SERVER_CLIENT_ID"}),", you will need to add that to the file. The ",(0,t.jsx)(n.code,{children:"SERVER_CLIENT_ID"})," is the ",(0,t.jsx)(n.em,{children:"Client ID"})," of your web app, and you get it from the ",(0,t.jsx)(n.em,{children:"Credentials"})," page."]}),"\n",(0,t.jsxs)(n.li,{children:["For iOS, add a URL type to your ",(0,t.jsx)(n.em,{children:"Info"}),". You find it in Xcode under ",(0,t.jsx)(n.em,{children:"Targets"})," > ",(0,t.jsx)(n.em,{children:"Runner"})," > ",(0,t.jsx)(n.em,{children:"Info"}),". Set the ",(0,t.jsx)(n.em,{children:"URL Schemes"})," to the ",(0,t.jsx)(n.code,{children:"REVERSE_CLIENT_ID"})," as specified in the plist, and the ",(0,t.jsx)(n.em,{children:"Role"})," to ",(0,t.jsx)(n.em,{children:"Editor"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For Android, there are similar steps you need to take. The ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/google_sign_in",children:"google_sign_in"})," package provides information about the setup."]}),"\n",(0,t.jsxs)(n.li,{children:["In your code, you sign in with Google by calling the ",(0,t.jsx)(n.code,{children:"signInWithGoogle"})," method or by adding the ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," widget. For the process to work, you must pass in the ",(0,t.jsx)(n.code,{children:"redirectUri"})," parameter. This Uri should be the same as you configured in the OAuth consent screen. For debugging purposes, use ",(0,t.jsx)(n.code,{children:"Uri.parse('http://localhost:8080')"}),";"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Rather than using the ",(0,t.jsx)(n.code,{children:"GoogleService-Info.plist"})," file for iOS, you can pass the ",(0,t.jsx)(n.code,{children:"clientId"})," and the ",(0,t.jsx)(n.code,{children:"serverClientId"})," to the ",(0,t.jsx)(n.code,{children:"signInWithGoogle"})," method or the ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," widget. The ",(0,t.jsx)(n.code,{children:"serverClientId"})," is the client ID of the web application."]})}),"\n",(0,t.jsx)(n.h3,{id:"calling-google-apis",children:"Calling Google APIs"}),"\n",(0,t.jsx)(n.p,{children:"The default setup allows access to basic user information, such as email, profile image, and name. You may require additional access scopes, such as accessing a user's calendar, contacts, or files. To do this, you will need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add the required scopes to the OAuth consent screen."}),"\n",(0,t.jsxs)(n.li,{children:["Request access to the scopes when signing in. Do this by setting the ",(0,t.jsx)(n.code,{children:"scopes"})," parameter of the ",(0,t.jsx)(n.code,{children:"signInWithGoogle"})," method or the ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," widget."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the server side, you can now access these Google APIs. If a user has signed in with Google, use the ",(0,t.jsx)(n.code,{children:"authClientForUser"})," method from the ",(0,t.jsx)(n.code,{children:"serverpod_auth_server"})," package to request an ",(0,t.jsx)(n.code,{children:"AutoRefreshingAuthClient"}),". The ",(0,t.jsx)(n.code,{children:"AutoRefreshingAuthClient"})," can be used to access Google's APIs on the user's behalf."]}),"\n",(0,t.jsxs)(n.p,{children:["For instance, to access the Youtube APIs, add the scope to your ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," in your app:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"SignInWithGoogleButton(\n  scopes: [YouTubeApi.youtubeReadonlyScope],\n  // other required parameters\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"On the server, access the Youtube API by first creating a client, then calling the API."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"var googleClient = await authClientForUser(session, userId);\n\nif (googleClient != null) {\n  var youtubeApi = YouTubeApi(googleClient);\n\n  var favorites = await youTubeApi.playlistItems.list(\n    ['snippet'],\n    playlistId: 'LL', // Liked List\n  );\n\n}\nelse {\n  // The user hasn't signed in with Google.\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Adding additional scopes may require approval by Google. On the OAuth consent screen, you can see which of your scopes are considered sensitive."})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-sign-in-with-apple",children:"Setting up Sign in with Apple"}),"\n",(0,t.jsxs)(n.p,{children:["You will need an Apple developer account to configure Sign in with Apple. Follow the instructions in ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/sign_in_with_apple",children:"sign_in_with_apple"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note that Sign in with Apple may not work on some versions of the Simulator (iOS 13.5 works). This issue doesn't affect real devices."})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-sign-in-with-firebase",children:"Setting up Sign in with Firebase"}),"\n",(0,t.jsx)(n.p,{children:"Serverpod uses FlutterFire UI to handle authentication through Firebase. It allows you to add social sign-in types that Serverpod doesn't directly support."}),"\n",(0,t.jsxs)(n.p,{children:["To add authentication with Firebase, you must first install and initialize the Firebase CLI tools and Flutter fire. Follow the instructions ",(0,t.jsx)(n.a,{href:"https://firebase.google.com/docs/flutter/setup?platform=web",children:"here"})," for your Flutter project. In the Firebase console, configure the different social sign-ins you plan to use. Then pass your provider configurations to either the signInWithFirebase method or the SignInWithFirebaseButton of the ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/serverpod_auth_firebase_flutter",children:"serverpod_auth_firebase_flutter"})," package."]}),"\n",(0,t.jsxs)(n.p,{children:["Server-side, you need to create a set of authentication keys in the ",(0,t.jsx)(n.a,{href:"https://console.firebase.google.com/",children:"Firebase console"}),", download the JSON file, rename it to firebase_service_account_key.json and place it in the config folder."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Serverpod automatically merges accounts that are using the same email addresses, so make sure only to allow sign-ins where the email has been verified."})}),"\n",(0,t.jsx)(n.h2,{id:"working-with-users",children:"Working with users"}),"\n",(0,t.jsx)(n.p,{children:"It's a common task to read or update user information on your server. You can always retrieve the id of a signed-in user through the session object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"var userId = await session.auth.authorizedUserId;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you sign in users through the auth module, you will be able to retrieve more information through the static methods of the ",(0,t.jsx)(n.code,{children:"Users"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"var userInfo = await Users.findUserByUserId(session, userId!);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"UserInfo"})," is automatically populated when the user signs in. Different data may be available depending on which method was used for authentication."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Users"})," class contains many other convenient methods for working with users. You can find the full documentation ",(0,t.jsx)(n.a,{href:"https://pub.dev/documentation/serverpod_auth_server/latest/protocol/Users-class.html",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"displaying-or-editing-user-images",children:"Displaying or editing user images"}),"\n",(0,t.jsx)(n.p,{children:"The module has built-in methods for handling a user's basic settings, including uploading new profile pictures."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/user-image-button.png",alt:"UserImageButton"})}),"\n",(0,t.jsxs)(n.p,{children:["To display a user's profile picture, use the ",(0,t.jsx)(n.code,{children:"CircularUserImage"})," widget and pass a ",(0,t.jsx)(n.code,{children:"UserInfo"})," retrieved from the ",(0,t.jsx)(n.code,{children:"SessionManager"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To edit a user profile image, use the ",(0,t.jsx)(n.code,{children:"UserImageButton"})," widget. It will automatically fetch the signed-in user's profile picture and communicate with the server."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-authentication-methods",children:"Supported authentication methods"}),"\n",(0,t.jsxs)(n.p,{children:["Currently, sign-in with Google, Apple, Firebase, and email is natively supported. If you write another authentication module, please consider ",(0,t.jsx)(n.a,{href:"/contribute",children:"contributing"})," your code."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1065:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/6-google-credentials-aba2aae45d64b6d5438133a0c68765f6.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);