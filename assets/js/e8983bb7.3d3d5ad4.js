"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[770],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s="Authentication",u={unversionedId:"concepts/authentication",id:"concepts/authentication",title:"Authentication",description:"In Serverpod, authentication is managed through the serverpod_auth module. It makes it easy to authenticate users through email or 3rd parties. Currently supported is Signing in with email, Google, and Apple. Future versions of the authentication module will include more options. Using this module requires some setup with Google and Apple for things to work.",source:"@site/docs/concepts/08-authentication.md",sourceDirName:"concepts",slug:"/concepts/authentication",permalink:"/concepts/authentication",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/concepts/08-authentication.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/concepts/modules"},next:{title:"Deployment",permalink:"/concepts/deployment"}},p={},d=[{value:"Installing the module",id:"installing-the-module",level:2},{value:"Setting up Sign in with Google",id:"setting-up-sign-in-with-google",level:2},{value:"Setting up Sign in with Apple",id:"setting-up-sign-in-with-apple",level:2},{value:"Add sign-in buttons in your code",id:"add-sign-in-buttons-in-your-code",level:2},{value:"Displaying or editing user images",id:"displaying-or-editing-user-images",level:2},{value:"Full example code",id:"full-example-code",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"In Serverpod, authentication is managed through the ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module. It makes it easy to authenticate users through email or 3rd parties. Currently supported is Signing in with email, Google, and Apple. Future versions of the authentication module will include more options. Using this module requires some setup with Google and Apple for things to work."),(0,o.kt)("p",null,"The authentication module also handles basic user information, such as user names and profile pictures."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/serverpod/serverpod/raw/main/misc/images/sign-in.png",alt:"Sign-in with Serverpod"})),(0,o.kt)("h2",{id:"installing-the-module"},"Installing the module"),(0,o.kt)("p",null,"To install the auth module in your Serverpod server, you need to include it in your server's ",(0,o.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod_auth")," module is released with the same version numbers as ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod")," itself, so make sure to use a matching version number in your pubspec file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  serverpod_auth_server: ^0.9.5\n")),(0,o.kt)("p",null,"In addition, you will need to add the module to the config/generator.yaml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  serverpod_auth:\n    nickname: auth\n")),(0,o.kt)("p",null,"This will tell Serverpod to include the module when it generates the client and server code. The nickname defines which name the client is using to reference the module."),(0,o.kt)("p",null,"To finalize the installation you will need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"pub get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate")," from your server's directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flutter pub get\nserverpod generate\n")),(0,o.kt)("h2",{id:"setting-up-sign-in-with-google"},"Setting up Sign in with Google"),(0,o.kt)("p",null,"To set up Sign in with Google, you will need a Google account for your organization and setup a new project. For the project you need to setup ",(0,o.kt)("em",{parentName:"p"},"Credentials")," and ",(0,o.kt)("em",{parentName:"p"},"Oauth consent screen"),". You will need a OAuth 2.0 Client id of type ",(0,o.kt)("em",{parentName:"p"},"Web application"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow the instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/google_sign_in"},"google_sign_in")," plug-in for iOS and Android.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For iOS, make sure that you obtain the ",(0,o.kt)("inlineCode",{parentName:"li"},"GoogleService-Info.plist")," and add it to your Xcode project."),(0,o.kt)("li",{parentName:"ul"},"For Android, there are other setup steps you need to take."))),(0,o.kt)("li",{parentName:"ol"},"In Google cloud, you need to do some additional setup.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Activate the ",(0,o.kt)("em",{parentName:"li"},"People API")," on your project."),(0,o.kt)("li",{parentName:"ul"},"Set up the OAuth consent screen. You will need to add the ",(0,o.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.email")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.profile")," scopes. You can also setup additional scopes and access them through Google's APIs on the client or server side."))),(0,o.kt)("li",{parentName:"ol"},"Finally, you need to set up the Google client secret so your server can authenticate the user with Google. In GCP's ",(0,o.kt)("em",{parentName:"li"},"APIs & Services"),", select the ",(0,o.kt)("em",{parentName:"li"},"Credentials tab"),". Download the json from your ",(0,o.kt)("em",{parentName:"li"},"OAuth 2.0 Client IDs"),". Rename it to ",(0,o.kt)("inlineCode",{parentName:"li"},"google_client_secret.json")," and place it in the ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," directory of your server.")),(0,o.kt)("h2",{id:"setting-up-sign-in-with-apple"},"Setting up Sign in with Apple"),(0,o.kt)("p",null,"To configure Sign in with Apple, you will need an Apple developer account. Follow the instructions in ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/sign_in_with_apple"},"sign_in_with_apple"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that Sign in with Apple may not work on some versions of the Simulator (iOS 13.5 works). This issue doesn't affect real devices.")),(0,o.kt)("h2",{id:"add-sign-in-buttons-in-your-code"},"Add sign-in buttons in your code"),(0,o.kt)("p",null,"First, you need to add dependencies to your app's ",(0,o.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file for the methods of signing in that you want to support. Make sure to use the same version numbers as for serverpod itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n  example_client:\n    path: ../example_client\n  serverpod_auth_google_flutter: ^0.9.5\n  serverpod_auth_apple_flutter: ^0.9.5\n")),(0,o.kt)("p",null,"Next, you need to set up a ",(0,o.kt)("inlineCode",{parentName:"p"},"SessionManager"),", which keeps track of the user's state. It will also handle the authentication keys passed to the client from the server, upload user profile images, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void main() async {\n  // Need to call this as we are using Flutter bindings before runApp is called.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // Sets up a singleton client object that can be used to talk to the server\n  // from anywhere in our app. The client is generated from your server code.\n  // The client is set up to connect to a Serverpod running on a local server on\n  // the default port. You will need to modify this to connect to staging or\n  // production servers.\n  client = Client(\n    'http://localhost:8080/',\n    authenticationKeyManager: FlutterAuthenticationKeyManager(),\n  );\n\n  // The session manager keeps track of the signed-in state of the user. You\n  // can query it to see if the user is currently signed in and get information\n  // about the user.\n  sessionManager = SessionManager(\n    caller: client.modules.auth,\n  );\n  await sessionManager.initialize();\n\n  runApp(MyApp());\n}\n")),(0,o.kt)("p",null,"Now, you can simply add the sign-in buttons to your code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"SignInWithGoogleButton(\n  caller: client.modules.auth,\n  onSignedIn: () { ... handle sign in here ... },\n  onFailure: () { ... handle fail to sign in here ... },\n)\n")),(0,o.kt)("p",null,"This is a complete example of a sign-in dialog: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/serverpod/serverpod/blob/main/packages/serverpod/example/example_flutter/lib/src/sign_in_dialog.dart"},"sign_in_dialog.dart"),"."),(0,o.kt)("h2",{id:"displaying-or-editing-user-images"},"Displaying or editing user images"),(0,o.kt)("p",null,"The module has built-in methods for handling a user's basic settings, including uploading new profile pictures."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/serverpod/serverpod/raw/main/misc/images/user-image-button.png",alt:"UserImageButton"})),(0,o.kt)("p",null,"To display a user's profile picture, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CircularUserImage")," widget and pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserInfo")," retrieved from the ",(0,o.kt)("inlineCode",{parentName:"p"},"SessionManager"),"."),(0,o.kt)("p",null,"To edit a user profile image, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserImageButton")," widget. It will automatically fetch the signed-in user's profile picture and communicate with the server."),(0,o.kt)("h2",{id:"full-example-code"},"Full example code"),(0,o.kt)("p",null,"Check out the Serverpod ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/serverpod/serverpod/tree/main/packages/serverpod/example"},"example")," for a complete example of how to wire everything up."))}m.isMDXComponent=!0}}]);