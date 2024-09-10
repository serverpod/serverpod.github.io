"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[12068],{56829:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=i(85893),o=i(11151);const r={},s="Google",d={id:"concepts/authentication/providers/google",title:"Google",description:"To set up Sign in with Google, you will need a Google account for your organization and set up a new project. For the project, you need to set up Credentials and Oauth consent screen. You will also need to add the serverpodauthgoogle_flutter package to your app and do some additional setup depending on each platform.",source:"@site/versioned_docs/version-1.2.0/05-concepts/10-authentication/04-providers/02-google.md",sourceDirName:"05-concepts/10-authentication/04-providers",slug:"/concepts/authentication/providers/google",permalink:"/1.2.0/concepts/authentication/providers/google",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/10-authentication/04-providers/02-google.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email",permalink:"/1.2.0/concepts/authentication/providers/email"},next:{title:"Apple",permalink:"/1.2.0/concepts/authentication/providers/apple"}},l={},a=[{value:"Create your credentials",id:"create-your-credentials",level:2},{value:"Enable Peoples API",id:"enable-peoples-api",level:3},{value:"Setup OAuth consent screen",id:"setup-oauth-consent-screen",level:3},{value:"Server-side Configuration",id:"server-side-configuration",level:2},{value:"Client-side Configuration",id:"client-side-configuration",level:2},{value:"iOS",id:"ios",level:3},{value:"Add the URL Scheme",id:"add-the-url-scheme",level:4},{value:"Android",id:"android",level:3},{value:"Web",id:"web",level:3},{value:"Serve the redirect page",id:"serve-the-redirect-page",level:4},{value:"Flutter implementation",id:"flutter-implementation",level:3},{value:"Calling Google APIs",id:"calling-google-apis",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"google",children:"Google"})}),"\n",(0,t.jsxs)(n.p,{children:["To set up Sign in with Google, you will need a Google account for your organization and set up a new project. For the project, you need to set up ",(0,t.jsx)(n.em,{children:"Credentials"})," and ",(0,t.jsx)(n.em,{children:"Oauth consent screen"}),". You will also need to add the ",(0,t.jsx)(n.code,{children:"serverpod_auth_google_flutter"})," package to your app and do some additional setup depending on each platform."]}),"\n",(0,t.jsxs)(n.p,{children:["A comprehensive tutorial covering everything about google sign in is available ",(0,t.jsx)(n.a,{href:"https://medium.com/serverpod/integrating-google-sign-in-with-serverpod-authentication-part-2-6fade3099baf",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Right now, we have official support for iOS, Android, and Web for Google Sign In."})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["You need to install the auth module before you continue, see ",(0,t.jsx)(n.a,{href:"../setup",children:"Setup"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"create-your-credentials",children:"Create your credentials"}),"\n",(0,t.jsxs)(n.p,{children:["To implement Google Sign In, you need a google cloud project. You can create one in the ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"enable-peoples-api",children:"Enable Peoples API"}),"\n",(0,t.jsx)(n.p,{children:"To be allowed to access user data and use the authentication method in Serverpod we have to enable the Peoples API in our project."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/apis/library/people.googleapis.com",children:"Enable it here"})," or find it yourself by, navigating to the ",(0,t.jsx)(n.em,{children:"Library"})," section under ",(0,t.jsx)(n.em,{children:"APIs & Services"}),". Search for ",(0,t.jsx)(n.em,{children:"Google People API"}),", select it, and click on ",(0,t.jsx)(n.em,{children:"Enable"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"setup-oauth-consent-screen",children:"Setup OAuth consent screen"}),"\n",(0,t.jsxs)(n.p,{children:["The setup for the OAuth consent screen can be found ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/apis/credentials/consent",children:"here"})," or under ",(0,t.jsx)(n.em,{children:"APIs & Services"})," > ",(0,t.jsx)(n.em,{children:"OAuth consent screen"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fill in all the required information, for production use you need a domain that adds under ",(0,t.jsx)(n.code,{children:"Authorized"})," domains."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the scopes ",(0,t.jsx)(n.code,{children:".../auth/userinfo.email"})," and ",(0,t.jsx)(n.code,{children:".../auth/userinfo.profile"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add your email to the test users so that you can test your integration in development mode."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Scopes",src:i(18534).Z+"",width:"2466",height:"1868"})}),"\n",(0,t.jsx)(n.h2,{id:"server-side-configuration",children:"Server-side Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Create the server credentials in the google cloud console. Navigate to ",(0,t.jsx)(n.em,{children:"Credentials"})," under ",(0,t.jsx)(n.em,{children:"APIs & Services"}),". Click ",(0,t.jsx)(n.em,{children:"Create Credentials"})," and select ",(0,t.jsx)(n.em,{children:"OAuth client ID"}),". Configure the OAuth client as a ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Web application"})}),". If you have a domain add it to the ",(0,t.jsx)(n.code,{children:"Authorized JavaScript origins"})," and ",(0,t.jsx)(n.code,{children:"Authorized redirect URIs"}),". For development purposes we can add ",(0,t.jsx)(n.code,{children:"http://localhost:8082"})," to both fields, this is the address to the web server."]}),"\n",(0,t.jsxs)(n.p,{children:["Download the JSON file for your web application OAuth client. This file contains both the client id and the client secret. Rename the file to ",(0,t.jsx)(n.code,{children:"google_client_secret.json"})," and place it in your server's ",(0,t.jsx)(n.code,{children:"config"})," directory."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"google_client_secret.json"})," contains a private key and should not be version controlled."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google credentials",src:i(94303).Z+"",width:"2286",height:"1020"})}),"\n",(0,t.jsx)(n.h2,{id:"client-side-configuration",children:"Client-side Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["For our client-side configurations, we have to first create client-side credentials and include the credentials files in our projects. The Android and iOS integrations use the ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/google_sign_in",children:"google_sign_in"})," package under the hood, any documentation there should also apply to this setup."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Rather than using the credentails file for iOS and Android, you can pass the ",(0,t.jsx)(n.code,{children:"clientId"})," and the ",(0,t.jsx)(n.code,{children:"serverClientId"})," to the ",(0,t.jsx)(n.code,{children:"signInWithGoogle"})," method or the ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," widget. The ",(0,t.jsx)(n.code,{children:"serverClientId"})," is the client ID from the server credentials."]})}),"\n",(0,t.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,t.jsxs)(n.p,{children:["Create the client credentials. Navigate to ",(0,t.jsx)(n.em,{children:"Credentials"})," under ",(0,t.jsx)(n.em,{children:"APIs & Services"}),". Click ",(0,t.jsx)(n.em,{children:"Create Credentials"})," and select ",(0,t.jsx)(n.em,{children:"OAuth client ID"}),". Configure the OAuth client as Application type ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"iOS"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Fill in all the required information, and create the credentials. Then download the ",(0,t.jsx)(n.code,{children:"plist"})," file rename it to ",(0,t.jsx)(n.code,{children:"GoogleService-Info.plist"})," and put it inside your ios project folder. Then drag and drop it into your XCode project to include the file in your build."]}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"GoogleService-Info.plist"})," in your editor and add the SERVER_CLIENT_ID if it does not exist:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dict>\n  ...\n  <key>SERVER_CLIENT_ID</key>\n  <string>your_server_client_id</string>\n</dict>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"your_server_client_id"})," with the client id from the JSON file you put inside the config folder in the server."]}),"\n",(0,t.jsx)(n.h4,{id:"add-the-url-scheme",children:"Add the URL Scheme"}),"\n",(0,t.jsxs)(n.p,{children:["To allow us to navigate back to the app after the user has signed in we have to add the URL Scheme, the scheme is the reversed client ID of your iOS app. You can find it inside the ",(0,t.jsx)(n.code,{children:"GoogleService-Info.plist"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"info.plist"})," file in your editor and add the following to register the URL Scheme."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dict>\n  ...\n  <key>CFBundleURLTypes</key>\n  <array>\n    <dict>\n      <key>CFBundleTypeRole</key>\n      <string>Editor</string>\n      <key>CFBundleURLSchemes</key>\n      <array>\n        <string>your_reversed_client_id</string>\n      </array>\n    </dict>\n  </array>\n</dict>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"your_reversed_client_id"})," with your reversed client ID."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:['If you have any social logins in your app you also need to integrate "Sign in with Apple" to publish your app to the app store. (',(0,t.jsx)(n.a,{href:"https://developer.apple.com/sign-in-with-apple/get-started/",children:"Read more"}),")."]})}),"\n",(0,t.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,t.jsxs)(n.p,{children:["Create the client credentials. Navigate to ",(0,t.jsx)(n.em,{children:"Credentials"})," under ",(0,t.jsx)(n.em,{children:"APIs & Services"}),". Click ",(0,t.jsx)(n.em,{children:"Create Credentials"})," and select ",(0,t.jsx)(n.em,{children:"OAuth client ID"}),". Configure the OAuth client as Application type ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Android"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Fill in all required information, you can get the debug SHA-1 hash by running ",(0,t.jsx)(n.code,{children:"./gradlew signingReport"})," in your Android project directory. Create the credentials and download the JSON file."]}),"\n",(0,t.jsxs)(n.p,{children:["Put the file inside the ",(0,t.jsx)(n.code,{children:"android/app/"})," directory and rename it to ",(0,t.jsx)(n.code,{children:"google-services.json"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["For a production app you need to get the SHA-1 key from your production keystore! This can be done by running this command: (",(0,t.jsx)(n.a,{href:"https://support.google.com/cloud/answer/6158849#installedapplications&android&zippy=%2Cnative-applications%2Candroid",children:"Read more"}),")."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ keytool -list -v -keystore /path/to/keystore\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"web",children:"Web"}),"\n",(0,t.jsxs)(n.p,{children:["There is no need to create any client credentials for the web we will simply pass the ",(0,t.jsx)(n.code,{children:"serverClientId"})," to the sign-in button.\nHowever, we have to modify the server credentials inside the google cloud console."]}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.em,{children:"Credentials"})," under ",(0,t.jsx)(n.em,{children:"APIs & Services"})," and select the server credentials. Under ",(0,t.jsx)(n.code,{children:"Authorized JavaScript origins"})," and ",(0,t.jsx)(n.code,{children:"Authorized redirect URIs"})," add the domain for your Flutter app, for development, this is ",(0,t.jsx)(n.code,{children:"http://localhost:port"})," where the port is the port you are using."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Force flutter to run on a specific port by running."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ flutter run -d chrome --web-port=49660\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"Set up the actual redirect URI where the user will navigate after the sign-in. You can choose any path you want but it has to be the same in the credentials, your server, and Flutter configurations."}),"\n",(0,t.jsxs)(n.p,{children:["For example, using the path ",(0,t.jsx)(n.code,{children:"/googlesignin"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For development inside ",(0,t.jsx)(n.code,{children:"Authorized redirect URIs"})," add ",(0,t.jsx)(n.code,{children:"http://localhost:8082/googlesignin"}),", in production use ",(0,t.jsx)(n.code,{children:"https://example.com/googlesignin"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google credentials",src:i(35229).Z+"",width:"1600",height:"1633"})}),"\n",(0,t.jsx)(n.h4,{id:"serve-the-redirect-page",children:"Serve the redirect page"}),"\n",(0,t.jsxs)(n.p,{children:["Register the Google Sign In route inside ",(0,t.jsx)(n.code,{children:"server.dart"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_server/module.dart' as auth\n\n\nvoid run(List<String> args) async {\n  ...\n  pod.webServer.addRoute(auth.RouteGoogleSignIn(), '/googlesignin');\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This page is needed for the web app to receive the authentication code given by Google."}),"\n",(0,t.jsx)(n.h3,{id:"flutter-implementation",children:"Flutter implementation"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Scopes",src:i(40136).Z+"",width:"528",height:"102"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," to your widget."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_google_flutter/serverpod_auth_google_flutter.dart';\n\n\nSignInWithGoogleButton(\n  caller: client.modules.auth,\n  serverClientId: _googleServerClientId, // needs to be supplied for the web integration\n  redirectUri: Uri.parse('http://localhost:8082/googlesignin'),\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"As an alternative to adding the JSON files in your client projects, you can supply the client and server ID on iOS and Android."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_google_flutter/serverpod_auth_google_flutter.dart';\n\n\nSignInWithGoogleButton(\n  caller: client.modules.auth,\n  clientId: _googleClientId, // Client ID of the client (null on web)\n  serverClientId: _googleServerClientId, // Client ID from the server (required on web)\n  redirectUri: Uri.parse('http://localhost:8082/googlesignin'),\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"calling-google-apis",children:"Calling Google APIs"}),"\n",(0,t.jsx)(n.p,{children:"The default setup allows access to basic user information, such as email, profile image, and name. You may require additional access scopes, such as accessing a user's calendar, contacts, or files. To do this, you will need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add the required scopes to the OAuth consent screen."}),"\n",(0,t.jsxs)(n.li,{children:["Request access to the scopes when signing in. Do this by setting the ",(0,t.jsx)(n.code,{children:"additionalScopes"})," parameter of the ",(0,t.jsx)(n.code,{children:"signInWithGoogle"})," method or the ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," widget."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A full list of available scopes can be found ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Adding additional scopes may require approval by Google. On the OAuth consent screen, you can see which of your scopes are considered sensitive."})}),"\n",(0,t.jsxs)(n.p,{children:["On the server side, you can now access these Google APIs. If a user has signed in with Google, use the ",(0,t.jsx)(n.code,{children:"GoogleAuth.authClientForUser"})," method from the ",(0,t.jsx)(n.code,{children:"serverpod_auth_server"})," package to request an ",(0,t.jsx)(n.code,{children:"AutoRefreshingAuthClient"}),". The ",(0,t.jsx)(n.code,{children:"AutoRefreshingAuthClient"})," can be used to access Google's APIs on the user's behalf."]}),"\n",(0,t.jsxs)(n.p,{children:["For instance, to access the Youtube APIs, add the scope to your ",(0,t.jsx)(n.code,{children:"SignInWithGoogleButton"})," in your app:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"SignInWithGoogleButton(\n  ...\n  additionalScopes: const ['https://www.googleapis.com/auth/youtube'],\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["On the server, you can utilize the ",(0,t.jsx)(n.a,{href:"https://pub.dev/packages/googleapis",children:"googleapis"})," package to access the Youtube API by first creating a client, then calling the API."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_server/module.dart';\nimport 'package:googleapis/youtube/v3.dart';\n\n\nfinal googleClient = await GoogleAuth.authClientForUser(session, userId);\n\nif (googleClient != null) {\n  var youTubeApi = YouTubeApi(googleClient);\n\n  var favorites = await youTubeApi.playlistItems.list(\n    ['snippet'],\n    playlistId: 'LL', // Liked List\n  );\n\n} else {\n  // The user hasn't signed in with Google.\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},94303:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/6-google-credentials-aba2aae45d64b6d5438133a0c68765f6.jpg"},18534:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-scopes-d56cd609ea43c479954d557e738e49ae.png"},35229:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/2-credentials-fe2a434385d0a3bf67cd0f415385a21c.png"},40136:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/3-button-006b305c3062843db07848b55897f65f.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>s});var t=i(67294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);