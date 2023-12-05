"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6719],{9105:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(5893),s=i(1151);const o={},r="Authentication",l={id:"concepts/authentication",title:"Authentication",description:"In Serverpod, authentication is managed through the serverpod_auth module. It makes it easy to authenticate users through email or 3rd parties. Currently supported is Signing in with email, Google, and Apple. Future versions of the authentication module will include more options. Using this module requires some setup with Google and Apple for things to work.",source:"@site/versioned_docs/version-0.9.9/03-concepts/07-authentication.md",sourceDirName:"03-concepts",slug:"/concepts/authentication",permalink:"/0.9.9/concepts/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.9/03-concepts/07-authentication.md",tags:[],version:"0.9.9",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/0.9.9/concepts/modules"},next:{title:"Uploading files",permalink:"/0.9.9/concepts/file-uploads"}},a={},d=[{value:"Installing the module",id:"installing-the-module",level:2},{value:"Setting up Sign in with Google",id:"setting-up-sign-in-with-google",level:2},{value:"Setting up Sign in with Apple",id:"setting-up-sign-in-with-apple",level:2},{value:"Add sign-in buttons in your code",id:"add-sign-in-buttons-in-your-code",level:2},{value:"Displaying or editing user images",id:"displaying-or-editing-user-images",level:2},{value:"Full example code",id:"full-example-code",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["In Serverpod, authentication is managed through the ",(0,t.jsx)(n.code,{children:"serverpod_auth"})," module. It makes it easy to authenticate users through email or 3rd parties. Currently supported is Signing in with email, Google, and Apple. Future versions of the authentication module will include more options. Using this module requires some setup with Google and Apple for things to work."]}),"\n",(0,t.jsx)(n.p,{children:"The authentication module also handles basic user information, such as user names and profile pictures."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/sign-in.png",alt:"Sign-in with Serverpod"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-module",children:"Installing the module"}),"\n",(0,t.jsxs)(n.p,{children:["To install the auth module in your Serverpod server, you need to include it in your server's ",(0,t.jsx)(n.code,{children:"pubspec.yaml"}),". The ",(0,t.jsx)(n.code,{children:"serverpod_auth"})," module is released with the same version numbers as ",(0,t.jsx)(n.code,{children:"serverpod"})," itself, so make sure to use a matching version number in your pubspec file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  serverpod_auth_server: ^0.9.5\n"})}),"\n",(0,t.jsx)(n.p,{children:"In addition, you will need to add the module to the config/generator.yaml file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"modules:\n  serverpod_auth:\n    nickname: auth\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will tell Serverpod to include the module when it generates the client and server code. The nickname defines which name the client is using to reference the module."}),"\n",(0,t.jsxs)(n.p,{children:["To finalize the installation you will need to run ",(0,t.jsx)(n.code,{children:"pub get"})," and ",(0,t.jsx)(n.code,{children:"serverpod generate"})," from your server's directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"flutter pub get\nserverpod generate\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-sign-in-with-google",children:"Setting up Sign in with Google"}),"\n",(0,t.jsxs)(n.p,{children:["To set up Sign in with Google, you will need a Google account for your organization and setup a new project. For the project you need to setup ",(0,t.jsx)(n.em,{children:"Credentials"})," and ",(0,t.jsx)(n.em,{children:"Oauth consent screen"}),". You will need a OAuth 2.0 Client id of type ",(0,t.jsx)(n.em,{children:"Web application"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Follow the instructions in the ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/google_sign_in",children:"google_sign_in"})," plug-in for iOS and Android.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For iOS, make sure that you obtain the ",(0,t.jsx)(n.code,{children:"GoogleService-Info.plist"})," and add it to your Xcode project."]}),"\n",(0,t.jsx)(n.li,{children:"For Android, there are other setup steps you need to take."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["In Google cloud, you need to do some additional setup.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Activate the ",(0,t.jsx)(n.em,{children:"People API"})," on your project."]}),"\n",(0,t.jsxs)(n.li,{children:["Set up the OAuth consent screen. You will need to add the ",(0,t.jsx)(n.code,{children:"../auth/userinfo.email"})," and ",(0,t.jsx)(n.code,{children:"../auth/userinfo.profile"})," scopes. You can also setup additional scopes and access them through Google's APIs on the client or server side."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Finally, you need to set up the Google client secret so your server can authenticate the user with Google. In GCP's ",(0,t.jsx)(n.em,{children:"APIs & Services"}),", select the ",(0,t.jsx)(n.em,{children:"Credentials tab"}),". Download the json from your ",(0,t.jsx)(n.em,{children:"OAuth 2.0 Client IDs"}),". Rename it to ",(0,t.jsx)(n.code,{children:"google_client_secret.json"})," and place it in the ",(0,t.jsx)(n.code,{children:"config"})," directory of your server."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-sign-in-with-apple",children:"Setting up Sign in with Apple"}),"\n",(0,t.jsxs)(n.p,{children:["To configure Sign in with Apple, you will need an Apple developer account. Follow the instructions in ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/sign_in_with_apple",children:"sign_in_with_apple"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note that Sign in with Apple may not work on some versions of the Simulator (iOS 13.5 works). This issue doesn't affect real devices."})}),"\n",(0,t.jsx)(n.h2,{id:"add-sign-in-buttons-in-your-code",children:"Add sign-in buttons in your code"}),"\n",(0,t.jsxs)(n.p,{children:["First, you need to add dependencies to your app's ",(0,t.jsx)(n.code,{children:"pubspec.yaml"})," file for the methods of signing in that you want to support. Make sure to use the same version numbers as for serverpod itself."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  flutter:\n    sdk: flutter\n  example_client:\n    path: ../example_client\n  serverpod_auth_google_flutter: ^0.9.5\n  serverpod_auth_apple_flutter: ^0.9.5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, you need to set up a ",(0,t.jsx)(n.code,{children:"SessionManager"}),", which keeps track of the user's state. It will also handle the authentication keys passed to the client from the server, upload user profile images, etc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"void main() async {\n  // Need to call this as we are using Flutter bindings before runApp is called.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // Sets up a singleton client object that can be used to talk to the server\n  // from anywhere in our app. The client is generated from your server code.\n  // The client is set up to connect to a Serverpod running on a local server on\n  // the default port. You will need to modify this to connect to staging or\n  // production servers.\n  client = Client(\n    'http://localhost:8080/',\n    authenticationKeyManager: FlutterAuthenticationKeyManager(),\n  );\n\n  // The session manager keeps track of the signed-in state of the user. You\n  // can query it to see if the user is currently signed in and get information\n  // about the user.\n  sessionManager = SessionManager(\n    caller: client.modules.auth,\n  );\n  await sessionManager.initialize();\n\n  runApp(MyApp());\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, you can simply add the sign-in buttons to your code."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"SignInWithGoogleButton(\n  caller: client.modules.auth,\n  onSignedIn: () { ... handle sign in here ... },\n  onFailure: () { ... handle fail to sign in here ... },\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is a complete example of a sign-in dialog: ",(0,t.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/blob/main/packages/serverpod/example/example_flutter/lib/src/sign_in_dialog.dart",children:"sign_in_dialog.dart"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"displaying-or-editing-user-images",children:"Displaying or editing user images"}),"\n",(0,t.jsx)(n.p,{children:"The module has built-in methods for handling a user's basic settings, including uploading new profile pictures."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/user-image-button.png",alt:"UserImageButton"})}),"\n",(0,t.jsxs)(n.p,{children:["To display a user's profile picture, use the ",(0,t.jsx)(n.code,{children:"CircularUserImage"})," widget and pass a ",(0,t.jsx)(n.code,{children:"UserInfo"})," retrieved from the ",(0,t.jsx)(n.code,{children:"SessionManager"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To edit a user profile image, use the ",(0,t.jsx)(n.code,{children:"UserImageButton"})," widget. It will automatically fetch the signed-in user's profile picture and communicate with the server."]}),"\n",(0,t.jsx)(n.h2,{id:"full-example-code",children:"Full example code"}),"\n",(0,t.jsxs)(n.p,{children:["Check out the Serverpod ",(0,t.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/tree/main/packages/serverpod/example",children:"example"})," for a complete example of how to wire everything up."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Currently, sign in with Google, Apple, and email is supported, if you write another authentication module please consider ",(0,t.jsx)(n.a,{href:"/contribute",children:"contributing"})," your code."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);