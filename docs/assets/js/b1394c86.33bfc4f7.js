"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[99],{62676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const r={},a="Email",o={id:"concepts/authentication/providers/email",title:"Email",description:"To properly configure Sign in with Email, you must connect your Serverpod to an external service that can send the emails. One convenient option is the mailer package, which can send emails through any SMTP service. Most email providers, such as Sendgrid or Mandrill, support SMTP.",source:"@site/versioned_docs/version-1.2.0/05-concepts/10-authentication/04-providers/01-email.md",sourceDirName:"05-concepts/10-authentication/04-providers",slug:"/concepts/authentication/providers/email",permalink:"/1.2.0/concepts/authentication/providers/email",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/10-authentication/04-providers/01-email.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with users",permalink:"/1.2.0/concepts/authentication/working-with-users"},next:{title:"Google",permalink:"/1.2.0/concepts/authentication/providers/google"}},d={},l=[{value:"Server-side Configuration",id:"server-side-configuration",level:2},{value:"Client-side Configuration",id:"client-side-configuration",level:2},{value:"Prebuilt SignIn Button",id:"prebuilt-signin-button",level:3},{value:"Modal example",id:"modal-example",level:3},{value:"Custom UI with EmailAuthController",id:"custom-ui-with-emailauthcontroller",level:2},{value:"Password storage security",id:"password-storage-security",level:2},{value:"Peppering",id:"peppering",level:3},{value:"Secure random",id:"secure-random",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"email",children:"Email"}),"\n",(0,i.jsxs)(n.p,{children:["To properly configure Sign in with Email, you must connect your Serverpod to an external service that can send the emails. One convenient option is the ",(0,i.jsx)(n.a,{href:"https://pub.dev/packages/mailer",children:"mailer"})," package, which can send emails through any SMTP service. Most email providers, such as Sendgrid or Mandrill, support SMTP."]}),"\n",(0,i.jsxs)(n.p,{children:["A comprehensive tutorial covering email/password sign-in complete with sending the validation code via email is available ",(0,i.jsx)(n.a,{href:"https://medium.com/serverpod/getting-started-with-serverpod-authentication-part-1-72c25280e6e9",children:"here"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["You need to install the auth module before you continue, see ",(0,i.jsx)(n.a,{href:"../setup",children:"Setup"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"server-side-configuration",children:"Server-side Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["In your main ",(0,i.jsx)(n.code,{children:"server.dart"})," file,  import the ",(0,i.jsx)(n.code,{children:"serverpod_auth_server"})," module, and set up the authentication configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_server/module.dart' as auth;\n\nauth.AuthConfig.set(auth.AuthConfig(\n  sendValidationEmail: (session, email, validationCode) async {\n    // Send the validation email to the user.\n    // Return `true` if the email was successfully sent, otherwise `false`.\n    return true;\n  },\n  sendPasswordResetEmail: (session, userInfo, validationCode) async {\n    // Send the password reset email to the user.\n    // Return `true` if the email was successfully sent, otherwise `false`.\n    return true;\n  },\n));\n\n// Start the Serverpod server.\nawait pod.start();\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For debugging purposes, you can print the validation code to the console. The chat module example does just this. You can view that code ",(0,i.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/blob/main/examples/chat/chat_server/lib/server.dart",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"client-side-configuration",children:"Client-side Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Add the dependencies to your ",(0,i.jsx)(n.code,{children:"pubspec.yaml"})," in your ",(0,i.jsx)(n.strong,{children:"client"})," project."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth_client: ^1.x.x\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the dependencies to your ",(0,i.jsx)(n.code,{children:"pubspec.yaml"})," in your ",(0,i.jsx)(n.strong,{children:"Flutter"})," project."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth_email_flutter: ^1.x.x\n  serverpod_auth_shared_flutter: ^1.x.x\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prebuilt-signin-button",children:"Prebuilt SignIn Button"}),"\n",(0,i.jsxs)(n.p,{children:["The package includes both methods for creating a custom email sign-in form and a pre-made ",(0,i.jsx)(n.code,{children:"SignInWithEmailButton"})," widget. The widget is easy to use, all you have to do is supply the auth client. It handles everything from user signups, login, and password resets for you."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:" SignInWithEmailButton(\n  caller: client.modules.auth,\n  onSignedIn: () {\n    // Optional callback when user successfully signs in\n  },\n),\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SignInWithEmailButton",src:t(46250).Z+"",width:"542",height:"124"})}),"\n",(0,i.jsx)(n.h3,{id:"modal-example",children:"Modal example"}),"\n",(0,i.jsx)(n.p,{children:"The triggered modal will look like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SignInWithEmailDialog",src:t(16245).Z+"",width:"802",height:"736"})}),"\n",(0,i.jsx)(n.h2,{id:"custom-ui-with-emailauthcontroller",children:"Custom UI with EmailAuthController"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"serverpod_auth_email_flutter"})," module provides the ",(0,i.jsx)(n.code,{children:"EmailAuthController"})," class, which encapsulates the functionality for email/password authentication. You can use this class and create a custom UI for user registration, login, and password management."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod_auth_email_flutter/serverpod_auth_email_flutter.dart';\n\nfinal authController = EmailAuthController(client.modules.auth);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To let a user signup first call the ",(0,i.jsx)(n.code,{children:"createAccountRequest"})," method which will trigger the backend to send an email to the user with the validation code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await authController.createAccountRequest(userName, email, password);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then let the user type in the code and send it to the backend with the ",(0,i.jsx)(n.code,{children:"validateAccount"})," method. This method will create the user and sign them in if the code is valid."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await authController.validateAccount(email, verificationCode);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To let users log in if they already have an account you can use the ",(0,i.jsx)(n.code,{children:"signIn"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await authController.signIn(email, password);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally to let a user reset their password you first initiate a password reset with the ",(0,i.jsx)(n.code,{children:"initiatePasswordReset"})," this will trigger the backend to send a verification email to the user."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await authController.initiatePasswordReset(email);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Let the user type in the verification code along with the new password and send it to the backend with the ",(0,i.jsx)(n.code,{children:"resetPassword"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await authController.resetPassword(email, verificationCode, password);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After the password has been reset you have to call the ",(0,i.jsx)(n.code,{children:"signIn"})," method to log in. This can be achieved by either letting the user type in the details again or simply chaining the ",(0,i.jsx)(n.code,{children:"resetPassword"})," method and the ",(0,i.jsx)(n.code,{children:"singIn"})," method for a seamless UX."]}),"\n",(0,i.jsx)(n.h2,{id:"password-storage-security",children:"Password storage security"}),"\n",(0,i.jsx)(n.p,{children:"Serverpod provides some additional configurable options to provide extra layers of security for stored password hashes."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"By default, the minimum password length is set to 8 characters. If you wish to modify this requirement, you can utilize the properties within AuthConfig."})}),"\n",(0,i.jsx)(n.h3,{id:"peppering",children:"Peppering"}),"\n",(0,i.jsx)(n.p,{children:"For an additional layer of security, it is possible to configure a password hash pepper. A pepper is a server-side secret that is added, along with a unique salt, to a password before it is hashed and stored. The pepper makes it harder for an attacker to crack password hashes if they have only gained access to the database."}),"\n",(0,i.jsxs)(n.p,{children:["The (recommended pepper length)[",(0,i.jsx)(n.a,{href:"https://www.ietf.org/archive/id/draft-ietf-kitten-password-storage-04.html#name-storage-2",children:"https://www.ietf.org/archive/id/draft-ietf-kitten-password-storage-04.html#name-storage-2"}),"]"," is 32 bytes."]}),"\n",(0,i.jsxs)(n.p,{children:["To configure a pepper, set the ",(0,i.jsx)(n.code,{children:"emailPasswordPepper"})," property in the ",(0,i.jsx)(n.code,{children:"config/passwords.yaml"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"development:\n  emailPasswordPepper: 'your-pepper'\n"})}),"\n",(0,i.jsx)(n.p,{children:"It is essential to keep the pepper secret and never expose it to the client."}),"\n",(0,i.jsx)(n.p,{children:"If the pepper is changed, all passwords in the database will need to be re-hashed with the new pepper."}),"\n",(0,i.jsx)(n.h3,{id:"secure-random",children:"Secure random"}),"\n",(0,i.jsxs)(n.p,{children:["Serverpod uses the ",(0,i.jsx)(n.code,{children:"dart:math"})," library to generate random salts for password hashing. By default, if no secure random number generator is available, a cryptographically unsecure random number is used."]}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to prevent this fallback by setting the ",(0,i.jsx)(n.code,{children:"allowUnsecureRandom"})," property in the ",(0,i.jsx)(n.code,{children:"AuthConfig"})," to ",(0,i.jsx)(n.code,{children:"false"}),". If the ",(0,i.jsx)(n.code,{children:"allowUnsecureRandom"})," property is false, the server will throw an exception if a secure random number generator is unavailable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"auth.AuthConfig.set(auth.AuthConfig(\n  allowUnsecureRandom: false,\n));\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The default value will change to ",(0,i.jsx)(n.code,{children:"false"})," in Serverpod 2.0."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},46250:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-sign-in-with-email-button-806454adfce788284d1f0ac766c36840.png"},16245:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/2-auth-email-dialog-6bbfac8235385603c5199bf4e7bfaac5.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);