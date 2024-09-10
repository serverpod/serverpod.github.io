"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[56847],{74276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=t(85893),i=t(11151);const r={},o="Custom providers",a={id:"concepts/authentication/providers/custom-providers",title:"Custom providers",description:"Serverpod's authentication module makes it easy to implement custom authentication providers. This allows you to leverage all the existing providers supplied by the module along with the specific providers your project requires.",source:"@site/versioned_docs/version-2.1.0/06-concepts/11-authentication/04-providers/06-custom-providers.md",sourceDirName:"06-concepts/11-authentication/04-providers",slug:"/concepts/authentication/providers/custom-providers",permalink:"/concepts/authentication/providers/custom-providers",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/06-concepts/11-authentication/04-providers/06-custom-providers.md",tags:[],version:"2.1.0",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Firebase",permalink:"/concepts/authentication/providers/firebase"},next:{title:"Custom overrides",permalink:"/concepts/authentication/custom-overrides"}},d={},h=[{value:"Server setup",id:"server-setup",level:2},{value:"Connect user",id:"connect-user",level:3},{value:"Custom identification methods",id:"custom-identification-methods",level:3},{value:"Create auth token",id:"create-auth-token",level:3},{value:"Send auth token to client",id:"send-auth-token-to-client",level:3},{value:"Remove auth token",id:"remove-auth-token",level:3},{value:"Remove specific tokens",id:"remove-specific-tokens",level:4},{value:"Client setup",id:"client-setup",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"custom-providers",children:"Custom providers"})}),"\n",(0,s.jsx)(n.p,{children:"Serverpod's authentication module makes it easy to implement custom authentication providers. This allows you to leverage all the existing providers supplied by the module along with the specific providers your project requires."}),"\n",(0,s.jsx)(n.h2,{id:"server-setup",children:"Server setup"}),"\n",(0,s.jsx)(n.p,{children:"After successfully authenticating a user through a customer provider, an auth token can be created and connected to the user to preserve the authenticated user's permissions. This token is used to identify the user and facilitate endpoint authorization validation. The token can be removed when the user signs out to prevent further access."}),"\n",(0,s.jsx)(n.h3,{id:"connect-user",children:"Connect user"}),"\n",(0,s.jsx)(n.p,{children:"The authentication module provides methods to find or create users. This ensures that all authentication tokens from the same user are connected."}),"\n",(0,s.jsxs)(n.p,{children:["Users can be identified either by their email through the ",(0,s.jsx)(n.code,{children:"Users.findUserByEmail(...)"})," method or by a unique identifier through the ",(0,s.jsx)(n.code,{children:"Users.findUserByIdentifier(...)"})," method."]}),"\n",(0,s.jsxs)(n.p,{children:["If no user is found, a new user can be created through the ",(0,s.jsx)(n.code,{children:"Users.createUser(...)"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"UserInfo? userInfo;\nuserInfo = await Users.findUserByEmail(session, email);\nuserInfo ??= await Users.findUserByIdentifier(session, userIdentifier);\nif (userInfo == null) {\n  userInfo = UserInfo(\n    userIdentifier: userIdentifier,\n    userName: name,\n    email: email,\n    blocked: false,\n    created: DateTime.now().toUtc(),\n    scopeNames: [],\n  );\n  userInfo = await Users.createUser(session, userInfo, _authMethod);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The example above tries to find a user by email and user identifier. If no user is found, a new user is created with the provided information."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For many authentication platforms the ",(0,s.jsx)(n.code,{children:"userIdentifier"})," is the user's email, but it can also be another unique identifier such as a phone number or a social security number."]})}),"\n",(0,s.jsx)(n.h3,{id:"custom-identification-methods",children:"Custom identification methods"}),"\n",(0,s.jsxs)(n.p,{children:["If other identification methods are required you can easily implement them by accessing the database directly. The ",(0,s.jsx)(n.code,{children:"UserInfo"})," model can be interacted with in the same way as any other model with a database in Serverpod."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var userInfo = await UserInfo.db.findFirstRow(\n  session,\n  where: (t) => t.fullName.equals(name),\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The example above shows how to find a user by name using the ",(0,s.jsx)(n.code,{children:"UserInfo"})," model."]}),"\n",(0,s.jsx)(n.h3,{id:"create-auth-token",children:"Create auth token"}),"\n",(0,s.jsx)(n.p,{children:"When a user has been found or created, an auth token that is connected to the user should be created."}),"\n",(0,s.jsxs)(n.p,{children:["To create an auth token, call the ",(0,s.jsx)(n.code,{children:"signInUser"})," method in the ",(0,s.jsx)(n.code,{children:"UserAuthentication"})," class, accessible as a static method, e.g. ",(0,s.jsx)(n.code,{children:"UserAuthentication.signInUser"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"signInUser"})," method takes four arguments: the first is the session object, the second is the user ID, the third is information about the method of authentication, and the fourth is a set of scopes granted to the auth token."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var authToken = await UserAuthentication.signInUser(userInfo.id, 'myAuthMethod', scopes: {\n    Scope('delete'),\n    Scope('create'),\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The example above creates an auth token for a user with the unique identifier taken from the ",(0,s.jsx)(n.code,{children:"userInfo"}),". The auth token preserves that it was created using the method ",(0,s.jsx)(n.code,{children:"myAuthMethod"})," and has the scopes ",(0,s.jsx)(n.code,{children:"delete"})," and ",(0,s.jsx)(n.code,{children:"create"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The unique identifier for the user should uniquely identify the user regardless of authentication method. The information allows authentication tokens associated with the same user to be grouped."})}),"\n",(0,s.jsx)(n.h3,{id:"send-auth-token-to-client",children:"Send auth token to client"}),"\n",(0,s.jsxs)(n.p,{children:["Once the auth token is created, it should be sent to the client. We recommend doing this using an ",(0,s.jsx)(n.code,{children:"AuthenticationResponse"}),". This ensures compatibility with the client-side authentication module."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"class MyAuthenticationEndpoint extends Endpoint {\n  Future<AuthenticationResponse> login(\n    Session session,\n    String username,\n    String password,\n  ) async {\n    // Authenticates a user with email and password.\n    if (!authenticateUser(session, username, password)) {\n      return AuthenticationResponse(success: false);\n    }\n\n    // Finds or creates a user in the database using the User methods.\n    var userInfo = findOrCreateUser(session, username);\n\n    // Creates an authentication key for the user.\n    var authToken = await UserAuthentication.signInUser(\n      session,\n      userInfo.id!,\n      'myAuth',\n      scopes: {},\n    );\n\n    // Returns the authentication response.\n    return AuthenticationResponse(\n      success: true,\n      keyId: authToken.id,\n      key: authToken.key,\n      userInfo: userInfo,\n    );\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The example above shows how to create an ",(0,s.jsx)(n.code,{children:"AuthenticationResponse"})," with the auth token and user information."]}),"\n",(0,s.jsx)(n.h3,{id:"remove-auth-token",children:"Remove auth token"}),"\n",(0,s.jsxs)(n.p,{children:["Signing out a user on all devices is made simple with the ",(0,s.jsx)(n.code,{children:"signOutUser"})," method in the ",(0,s.jsx)(n.code,{children:"UserAuthentication"})," class. The method removes all auth tokens associated with the user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"class AuthenticatedEndpoint extends Endpoint {\n  @override\n  bool get requireLogin => true;\n  Future<void> logout(Session session) async {\n    await UserAuthentication.signOutUser(session);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, the ",(0,s.jsx)(n.code,{children:"logout"})," endpoint removes all auth tokens associated with the user. The user is then signed out and loses access to any protected endpoints."]}),"\n",(0,s.jsx)(n.h4,{id:"remove-specific-tokens",children:"Remove specific tokens"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"AuthKey"})," table stores all auth tokens and can be interacted with in the same way as any other model with a database in Serverpod. To remove specific tokens, the ",(0,s.jsx)(n.code,{children:"AuthKey"})," table can be interacted with directly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"await AuthKey.db.deleteWhere(\n  session,\n  where: (t) => t.userId.equals(userId) & t.method.equals('username'),\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, all auth tokens associated with the user ",(0,s.jsx)(n.code,{children:"userId"})," and created with the method ",(0,s.jsx)(n.code,{children:"username"})," are removed from the ",(0,s.jsx)(n.code,{children:"AuthKey"})," table."]}),"\n",(0,s.jsx)(n.h2,{id:"client-setup",children:"Client setup"}),"\n",(0,s.jsxs)(n.p,{children:["The client must store and include the auth token in communication with the server. Luckily, the client-side authentication module handles this for you through the ",(0,s.jsx)(n.code,{children:"SessionManager"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The session manager is responsible for storing the auth token and user information. It is initialized on client startup and will restore any existing user session from local storage."}),"\n",(0,s.jsxs)(n.p,{children:["After a successful authentication where an authentication response is returned from the server, the user should be registered in the session manager through the ",(0,s.jsx)(n.code,{children:"sessionManager.registerSignedInUser(...)"})," method. The session manager singleton is accessible by calling ",(0,s.jsx)(n.code,{children:"SessionManager.instance"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"var serverResponse = await caller.myAuthentication.login(username, password);\n\nif (serverResponse.success) {\n    // Store the user info in the session manager.\n    SessionManager sessionManager = await SessionManager.instance;\n    await sessionManager.registerSignedInUser(\n        serverResponse.userInfo!,\n        serverResponse.keyId!,\n        serverResponse.key!,\n    );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The example above shows how to register a signed-in user in the session manager."})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);