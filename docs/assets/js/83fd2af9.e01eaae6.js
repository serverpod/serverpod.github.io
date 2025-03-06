"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[85026],{66609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"concepts/authentication/providers/custom-providers","title":"Custom providers","description":"Serverpod\'s authentication module makes it easy to implement custom authentication providers. This allows you to leverage all the existing providers supplied by the module along with the specific providers your project requires.","source":"@site/versioned_docs/version-2.3.0/06-concepts/11-authentication/04-providers/06-custom-providers.md","sourceDirName":"06-concepts/11-authentication/04-providers","slug":"/concepts/authentication/providers/custom-providers","permalink":"/2.3.0/concepts/authentication/providers/custom-providers","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.3.0/06-concepts/11-authentication/04-providers/06-custom-providers.md","tags":[],"version":"2.3.0","sidebarPosition":6,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Firebase","permalink":"/2.3.0/concepts/authentication/providers/firebase"},"next":{"title":"Custom overrides","permalink":"/2.3.0/concepts/authentication/custom-overrides"}}');var i=t(74848),r=t(28453);const o={},a="Custom providers",c={},d=[{value:"Server setup",id:"server-setup",level:2},{value:"Connect user",id:"connect-user",level:3},{value:"Custom identification methods",id:"custom-identification-methods",level:3},{value:"Create auth token",id:"create-auth-token",level:3},{value:"Send auth token to client",id:"send-auth-token-to-client",level:3},{value:"Revoking authentication keys",id:"revoking-authentication-keys",level:3},{value:"Revoking specific keys",id:"revoking-specific-keys",level:4},{value:"Fetching and revoking an authentication key using AuthenticationInfo",id:"fetching-and-revoking-an-authentication-key-using-authenticationinfo",level:5},{value:"Fetching and revoking a specific authentication key for a user",id:"fetching-and-revoking-a-specific-authentication-key-for-a-user",level:5},{value:"Removing specific tokens (direct deletion)",id:"removing-specific-tokens-direct-deletion",level:5},{value:"Signing out all devices",id:"signing-out-all-devices",level:4},{value:"Signing out a specific user",id:"signing-out-a-specific-user",level:5},{value:"Signing out the currently authenticated user",id:"signing-out-the-currently-authenticated-user",level:5},{value:"Creating a logout endpoint",id:"creating-a-logout-endpoint",level:4},{value:"Client setup",id:"client-setup",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"custom-providers",children:"Custom providers"})}),"\n",(0,i.jsx)(n.p,{children:"Serverpod's authentication module makes it easy to implement custom authentication providers. This allows you to leverage all the existing providers supplied by the module along with the specific providers your project requires."}),"\n",(0,i.jsx)(n.h2,{id:"server-setup",children:"Server setup"}),"\n",(0,i.jsx)(n.p,{children:"After successfully authenticating a user through a customer provider, an auth token can be created and connected to the user to preserve the authenticated user's permissions. This token is used to identify the user and facilitate endpoint authorization validation. The token can be removed when the user signs out to prevent further access."}),"\n",(0,i.jsx)(n.h3,{id:"connect-user",children:"Connect user"}),"\n",(0,i.jsx)(n.p,{children:"The authentication module provides methods to find or create users. This ensures that all authentication tokens from the same user are connected."}),"\n",(0,i.jsxs)(n.p,{children:["Users can be identified either by their email through the ",(0,i.jsx)(n.code,{children:"Users.findUserByEmail(...)"})," method or by a unique identifier through the ",(0,i.jsx)(n.code,{children:"Users.findUserByIdentifier(...)"})," method."]}),"\n",(0,i.jsxs)(n.p,{children:["If no user is found, a new user can be created through the ",(0,i.jsx)(n.code,{children:"Users.createUser(...)"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"UserInfo? userInfo;\nuserInfo = await Users.findUserByEmail(session, email);\nuserInfo ??= await Users.findUserByIdentifier(session, userIdentifier);\nif (userInfo == null) {\n  userInfo = UserInfo(\n    userIdentifier: userIdentifier,\n    userName: name,\n    email: email,\n    blocked: false,\n    created: DateTime.now().toUtc(),\n    scopeNames: [],\n  );\n  userInfo = await Users.createUser(session, userInfo, _authMethod);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above tries to find a user by email and user identifier. If no user is found, a new user is created with the provided information."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For many authentication platforms the ",(0,i.jsx)(n.code,{children:"userIdentifier"})," is the user's email, but it can also be another unique identifier such as a phone number or a social security number."]})}),"\n",(0,i.jsx)(n.h3,{id:"custom-identification-methods",children:"Custom identification methods"}),"\n",(0,i.jsxs)(n.p,{children:["If other identification methods are required you can easily implement them by accessing the database directly. The ",(0,i.jsx)(n.code,{children:"UserInfo"})," model can be interacted with in the same way as any other model with a database in Serverpod."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var userInfo = await UserInfo.db.findFirstRow(\n  session,\n  where: (t) => t.fullName.equals(name),\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The example above shows how to find a user by name using the ",(0,i.jsx)(n.code,{children:"UserInfo"})," model."]}),"\n",(0,i.jsx)(n.h3,{id:"create-auth-token",children:"Create auth token"}),"\n",(0,i.jsx)(n.p,{children:"When a user has been found or created, an auth token that is connected to the user should be created."}),"\n",(0,i.jsxs)(n.p,{children:["To create an auth token, call the ",(0,i.jsx)(n.code,{children:"signInUser"})," method in the ",(0,i.jsx)(n.code,{children:"UserAuthentication"})," class, accessible as a static method, e.g. ",(0,i.jsx)(n.code,{children:"UserAuthentication.signInUser"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"signInUser"})," method takes four arguments: the first is the session object, the second is the user ID, the third is information about the method of authentication, and the fourth is a set of scopes granted to the auth token."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var authToken = await UserAuthentication.signInUser(userInfo.id, 'myAuthMethod', scopes: {\n    Scope('delete'),\n    Scope('create'),\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The example above creates an auth token for a user with the unique identifier taken from the ",(0,i.jsx)(n.code,{children:"userInfo"}),". The auth token preserves that it was created using the method ",(0,i.jsx)(n.code,{children:"myAuthMethod"})," and has the scopes ",(0,i.jsx)(n.code,{children:"delete"})," and ",(0,i.jsx)(n.code,{children:"create"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The unique identifier for the user should uniquely identify the user regardless of authentication method. The information allows authentication tokens associated with the same user to be grouped."})}),"\n",(0,i.jsx)(n.h3,{id:"send-auth-token-to-client",children:"Send auth token to client"}),"\n",(0,i.jsxs)(n.p,{children:["Once the auth token is created, it should be sent to the client. We recommend doing this using an ",(0,i.jsx)(n.code,{children:"AuthenticationResponse"}),". This ensures compatibility with the client-side authentication module."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class MyAuthenticationEndpoint extends Endpoint {\n  Future<AuthenticationResponse> login(\n    Session session,\n    String username,\n    String password,\n  ) async {\n    // Authenticates a user with email and password.\n    if (!authenticateUser(session, username, password)) {\n      return AuthenticationResponse(success: false);\n    }\n\n    // Finds or creates a user in the database using the User methods.\n    var userInfo = findOrCreateUser(session, username);\n\n    // Creates an authentication key for the user.\n    var authToken = await UserAuthentication.signInUser(\n      session,\n      userInfo.id!,\n      'myAuth',\n      scopes: {},\n    );\n\n    // Returns the authentication response.\n    return AuthenticationResponse(\n      success: true,\n      keyId: authToken.id,\n      key: authToken.key,\n      userInfo: userInfo,\n    );\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The example above shows how to create an ",(0,i.jsx)(n.code,{children:"AuthenticationResponse"})," with the auth token and user information."]}),"\n",(0,i.jsx)(n.h3,{id:"revoking-authentication-keys",children:"Revoking authentication keys"}),"\n",(0,i.jsxs)(n.p,{children:["Serverpod provides built-in methods for managing user authentication across multiple devices. These methods handle several critical security and state management processes automatically, ensuring consistent and secure authentication state across your servers. When using the authentication management methods (",(0,i.jsx)(n.code,{children:"signOutUser"})," or ",(0,i.jsx)(n.code,{children:"revokeAuthKey"}),"), the following key actions are automatically handled:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Closing all affected method streaming connections to maintain connection integrity."}),"\n",(0,i.jsx)(n.li,{children:"Synchronizing authentication state across all connected servers."}),"\n",(0,i.jsxs)(n.li,{children:["Updating the session's authentication state with ",(0,i.jsx)(n.code,{children:"session.updateAuthenticated(null)"})," if the affected user is currently authenticated."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"revoking-specific-keys",children:"Revoking specific keys"}),"\n",(0,i.jsxs)(n.p,{children:["To revoke specific authentication keys, use the ",(0,i.jsx)(n.code,{children:"revokeAuthKey"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await UserAuthentication.revokeAuthKey(\n  session,\n  authKeyId: 'auth-key-id-here',\n);\n"})}),"\n",(0,i.jsx)(n.h5,{id:"fetching-and-revoking-an-authentication-key-using-authenticationinfo",children:"Fetching and revoking an authentication key using AuthenticationInfo"}),"\n",(0,i.jsxs)(n.p,{children:["To revoke a specific authentication key for the current session, you can directly access the session's authentication information and call the ",(0,i.jsx)(n.code,{children:"revokeAuthKey"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"// Fetch the authentication information for the current session\nvar authId = (await session.authenticated)?.authId;\n\n// Revoke the authentication key if the session is authenticated and has an authId\nif (authId != null) {\n  await UserAuthentication.revokeAuthKey(\n    session,\n    authKeyId: authId,\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"fetching-and-revoking-a-specific-authentication-key-for-a-user",children:"Fetching and revoking a specific authentication key for a user"}),"\n",(0,i.jsx)(n.p,{children:"To revoke a specific authentication key associated with a user, you can retrieve all authentication keys for that user and select the key you wish to revoke:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"// Fetch all authentication keys for the user\nvar authKeys = await AuthKey.db.find(\n  session,\n  where: (t) => t.userId.equals(userId),\n);\n\n// Revoke a specific key (for example, the last one)\nif (authKeys.isNotEmpty) {\n  var authKeyId = authKeys.last.id.toString();  // Convert the ID to string\n  await UserAuthentication.revokeAuthKey(\n    session,\n    authKeyId: authKeyId,\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"removing-specific-tokens-direct-deletion",children:"Removing specific tokens (direct deletion)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await AuthKey.db.deleteWhere(\n  session,\n  where: (t) => t.userId.equals(userId) & t.method.equals('username'),\n);\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Directly removing authentication tokens from the ",(0,i.jsx)(n.code,{children:"AuthKey"})," table bypasses necessary processes such as closing method streaming connections and synchronizing servers state. It is strongly recommended to use ",(0,i.jsx)(n.code,{children:"UserAuthentication.revokeAuthKey"})," to ensure a complete and consistent sign-out."]})}),"\n",(0,i.jsx)(n.h4,{id:"signing-out-all-devices",children:"Signing out all devices"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"signOutUser"})," method signs a user out from all devices:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await UserAuthentication.signOutUser(\n  session,\n  userId: 123,  // Optional: If omitted, the currently authenticated user will be signed out\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"This method deletes all authentication keys associated with the user."}),"\n",(0,i.jsx)(n.h5,{id:"signing-out-a-specific-user",children:"Signing out a specific user"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, a specific ",(0,i.jsx)(n.code,{children:"userId"})," is provided to sign out that user from all their devices:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"// Sign out the user with ID 123 from all devices\nawait UserAuthentication.signOutUser(\n  session,\n  userId: 123,\n);\n"})}),"\n",(0,i.jsx)(n.h5,{id:"signing-out-the-currently-authenticated-user",children:"Signing out the currently authenticated user"}),"\n",(0,i.jsxs)(n.p,{children:["If no ",(0,i.jsx)(n.code,{children:"userId"})," is provided, ",(0,i.jsx)(n.code,{children:"signOutUser"})," will automatically sign out the user who is currently authenticated in the session:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"// Sign out the currently authenticated user\nawait UserAuthentication.signOutUser(\n  session,  // No userId provided, signs out the current user\n);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"creating-a-logout-endpoint",children:"Creating a logout endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["To sign out a user on all devices using an endpoint, the ",(0,i.jsx)(n.code,{children:"signOutUser"})," method in the ",(0,i.jsx)(n.code,{children:"UserAuthentication"})," class can be used:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class AuthenticatedEndpoint extends Endpoint {\n  @override\n  bool get requireLogin => true;\n\n  Future<void> logout(Session session) async {\n    await UserAuthentication.signOutUser(session);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"client-setup",children:"Client setup"}),"\n",(0,i.jsxs)(n.p,{children:["The client must store and include the auth token in communication with the server. Luckily, the client-side authentication module handles this for you through the ",(0,i.jsx)(n.code,{children:"SessionManager"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The session manager is responsible for storing the auth token and user information. It is initialized on client startup and will restore any existing user session from local storage."}),"\n",(0,i.jsxs)(n.p,{children:["After a successful authentication where an authentication response is returned from the server, the user should be registered in the session manager through the ",(0,i.jsx)(n.code,{children:"sessionManager.registerSignedInUser(...)"})," method. The session manager singleton is accessible by calling ",(0,i.jsx)(n.code,{children:"SessionManager.instance"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var serverResponse = await caller.myAuthentication.login(username, password);\n\nif (serverResponse.success) {\n    // Store the user info in the session manager.\n    SessionManager sessionManager = await SessionManager.instance;\n    await sessionManager.registerSignedInUser(\n        serverResponse.userInfo!,\n        serverResponse.keyId!,\n        serverResponse.key!,\n    );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The example above shows how to register a signed-in user in the session manager."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);