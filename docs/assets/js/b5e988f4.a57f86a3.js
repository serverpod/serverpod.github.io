"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[74408],{70912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"concepts/authentication/custom-overrides","title":"Custom overrides","description":"It is recommended to use the serverpod_auth package but if you have special requirements not fulfilled by it, you can implement your authentication module. Serverpod is designed to make it easy to add custom authentication overrides.","source":"@site/versioned_docs/version-2.4.0/06-concepts/11-authentication/05-custom-overrides.md","sourceDirName":"06-concepts/11-authentication","slug":"/concepts/authentication/custom-overrides","permalink":"/concepts/authentication/custom-overrides","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.4.0/06-concepts/11-authentication/05-custom-overrides.md","tags":[],"version":"2.4.0","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Custom providers","permalink":"/concepts/authentication/providers/custom-providers"},"next":{"title":"Uploading files","permalink":"/concepts/file-uploads"}}');var o=t(74848),r=t(28453);const a={},s="Custom overrides",d={},c=[{value:"Server setup",id:"server-setup",level:2},{value:"Token validation",id:"token-validation",level:3},{value:"Scopes",id:"scopes",level:4},{value:"Handling revoked authentication",id:"handling-revoked-authentication",level:3},{value:"Parameters",id:"parameters",level:5},{value:"Revoked authentication messages",id:"revoked-authentication-messages",level:4},{value:"Send token to client",id:"send-token-to-client",level:3},{value:"Client setup",id:"client-setup",level:2},{value:"Configure key manager",id:"configure-key-manager",level:3},{value:"Store token",id:"store-token",level:3},{value:"Remove token",id:"remove-token",level:3},{value:"Retrieve token",id:"retrieve-token",level:3},{value:"Authentication schemes",id:"authentication-schemes",level:2},{value:"Implementing your own authentication scheme",id:"implementing-your-own-authentication-scheme",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"custom-overrides",children:"Custom overrides"})}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended to use the ",(0,o.jsx)(n.code,{children:"serverpod_auth"})," package but if you have special requirements not fulfilled by it, you can implement your authentication module. Serverpod is designed to make it easy to add custom authentication overrides."]}),"\n",(0,o.jsx)(n.h2,{id:"server-setup",children:"Server setup"}),"\n",(0,o.jsx)(n.p,{children:"When running a custom auth integration it is up to you to build the authentication model and issuing auth tokens."}),"\n",(0,o.jsx)(n.h3,{id:"token-validation",children:"Token validation"}),"\n",(0,o.jsxs)(n.p,{children:["The token validation is performed by providing a custom ",(0,o.jsx)(n.code,{children:"AuthenticationHandler"})," callback when initializing Serverpod. The callback should return an ",(0,o.jsx)(n.code,{children:"AuthenticationInfo"})," object if the token is valid, otherwise ",(0,o.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"// Initialize Serverpod and connect it with your generated code.\nfinal pod = Serverpod(\n  args,\n  Protocol(),\n  Endpoints(),\n  authenticationHandler: (Session session, String token) async {\n    /// Custom validation handler\n    if (token != 'valid') return null;\n\n    return AuthenticationInfo(1, <Scope>{});\n  },\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, the ",(0,o.jsx)(n.code,{children:"authenticationHandler"})," callback is overridden with a custom validation method. The method returns an ",(0,o.jsx)(n.code,{children:"AuthenticationInfo"})," object with user id ",(0,o.jsx)(n.code,{children:"1"})," and no scopes if the token is valid, otherwise ",(0,o.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the authenticationHandler callback the ",(0,o.jsx)(n.code,{children:"authenticated"})," field on the session will always be ",(0,o.jsx)(n.code,{children:"null"})," as it is the authenticationHandler that figures out who the user is."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["By specifying the optional ",(0,o.jsx)(n.code,{children:"authId"})," field in the ",(0,o.jsx)(n.code,{children:"AuthenticationInfo"})," object you can link the user to a specific authentication id. This is useful when revoking authentication for a specific device."]})}),"\n",(0,o.jsx)(n.h4,{id:"scopes",children:"Scopes"}),"\n",(0,o.jsxs)(n.p,{children:["The scopes returned from the ",(0,o.jsx)(n.code,{children:"authenticationHandler"})," is used to grant access to scope restricted endpoints. The ",(0,o.jsx)(n.code,{children:"Scope"})," class is a simple wrapper around a nullable ",(0,o.jsx)(n.code,{children:"String"})," in dart. This means that you can format your scopes however you want as long as they are in a String format."]}),"\n",(0,o.jsx)(n.p,{children:"Normally if you implement a JWT you would store the scopes inside the token. When extracting them all you have to do is convert the String stored in the token into a Scope object by calling the constructor."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"List<String> scopes = extractScopes(token);\nSet<Scope> userScopes = scopes.map((scope) => Scope(scope)).toSet();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"handling-revoked-authentication",children:"Handling revoked authentication"}),"\n",(0,o.jsxs)(n.p,{children:["When a user's authentication is revoked, the server must be notified to respect the changes (e.g. to close method streams). Invoke the ",(0,o.jsx)(n.code,{children:"session.messages.authenticationRevoked"})," method and raise the appropriate event to notify the server."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"var userId = 1;\nvar revokedScopes = ['write'];\nvar message = RevokedAuthenticationScope(\n  scopes: revokedScopes,\n);\n\nawait session.messages.authenticationRevoked(\n  userId,\n  message,\n);\n"})}),"\n",(0,o.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"userId"})," - The user id belonging to the ",(0,o.jsx)(n.code,{children:"AuthenticationInfo"})," object to be revoked."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"message"})," - The revoked authentication event message. See below for the different type of messages."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"revoked-authentication-messages",children:"Revoked authentication messages"}),"\n",(0,o.jsxs)(n.p,{children:["There are three types of ",(0,o.jsx)(n.code,{children:"RevokedAuthentication"})," messages that are used to specify the extent of the authentication revocation:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Message type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"RevokedAuthenticationUser"})}),(0,o.jsx)(n.td,{children:"All authentication is revoked for a user."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"RevokedAuthenticationAuthId"})}),(0,o.jsxs)(n.td,{children:["A single authentication id is revoked for the user. This should match the ",(0,o.jsx)(n.code,{children:"authId"})," field in the ",(0,o.jsx)(n.code,{children:"AuthenticationInfo"})," object."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"RevokedAuthenticationScope"})}),(0,o.jsx)(n.td,{children:"List of scopes that have been revoked for a user."})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Each message type provides a tailored approach to revoke authentication based on different needs."}),"\n",(0,o.jsx)(n.h3,{id:"send-token-to-client",children:"Send token to client"}),"\n",(0,o.jsx)(n.p,{children:"You are responsible for implementing the endpoints to authenticate/authorize the user. But as an example such an endpoint could look like the following."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"class UserEndpoint extends Endpoint {\n  Future<LoginResponse> login(\n    Session session,\n    String username,\n    String password,\n  ) async {\n    var identifier = authenticateUser(session, username, password);\n    if (identifier == null) return null;\n\n    return issueMyToken(identifier, scopes: {});\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, the ",(0,o.jsx)(n.code,{children:"login"})," method authenticates the user and creates an auth token. The token is then returned to the client."]}),"\n",(0,o.jsx)(n.h2,{id:"client-setup",children:"Client setup"}),"\n",(0,o.jsx)(n.p,{children:"Enabling authentication in the client is as simple as configuring a key manager and placing any token in it. If a key manager is configured, the client will automatically query the manager for a token and include it in communication with the server."}),"\n",(0,o.jsx)(n.h3,{id:"configure-key-manager",children:"Configure key manager"}),"\n",(0,o.jsxs)(n.p,{children:["Key managers need to implement the ",(0,o.jsx)(n.code,{children:"AuthenticationKeyManager"})," interface. The key manager is configured when creating the client by passing it as the named parameter ",(0,o.jsx)(n.code,{children:"authenticationKeyManager"}),". If no key manager is configured, the client will not include tokens in requests to the server."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"class SimpleAuthKeyManager extends AuthenticationKeyManager {\n  String? _key;\n\n  @override\n  Future<String?> get() async {\n    return _key;\n  }\n\n  @override\n  Future<void> put(String key) async {\n    _key = key;\n  }\n\n  @override\n  Future<void> remove() async {\n    _key = null;\n  }\n}\n\n\nvar client = Client('http://$localhost:8080/',\n    authenticationKeyManager: SimpleAuthKeyManager())\n  ..connectivityMonitor = FlutterConnectivityMonitor();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, the ",(0,o.jsx)(n.code,{children:"SimpleAuthKeyManager"})," is configured as the client's authentication key manager. The ",(0,o.jsx)(n.code,{children:"SimpleAuthKeyManager"})," stores the token in memory."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"SimpleAuthKeyManager"})," is not practical and should only be used for testing. A secure implementation of the key manager is available in the ",(0,o.jsx)(n.code,{children:"serverpod_auth_shared_flutter"})," package named ",(0,o.jsx)(n.code,{children:"FlutterAuthenticationKeyManager"}),". It provides safe, persistent storage for the auth token."]})}),"\n",(0,o.jsxs)(n.p,{children:["The key manager is then available through the client's ",(0,o.jsx)(n.code,{children:"authenticationKeyManager"})," field."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"var keyManager = client.authenticationKeyManager;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"store-token",children:"Store token"}),"\n",(0,o.jsxs)(n.p,{children:["When the client receives a token from the server, it is responsible for storing it in the key manager using the ",(0,o.jsx)(n.code,{children:"put"})," method. The key manager will then include the token in all requests to the server."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"await client.authenticationKeyManager?.put(token);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, the ",(0,o.jsx)(n.code,{children:"token"})," is placed in the key manager. It will now be included in communication with the server."]}),"\n",(0,o.jsx)(n.h3,{id:"remove-token",children:"Remove token"}),"\n",(0,o.jsxs)(n.p,{children:["To remove the token from the key manager, call the ",(0,o.jsx)(n.code,{children:"remove"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"await client.authenticationKeyManager?.remove();\n"})}),"\n",(0,o.jsx)(n.p,{children:"The above example removes any token from the key manager."}),"\n",(0,o.jsx)(n.h3,{id:"retrieve-token",children:"Retrieve token"}),"\n",(0,o.jsxs)(n.p,{children:["To retrieve the token from the key manager, call the ",(0,o.jsx)(n.code,{children:"get"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"var token = await client.authenticationKeyManager?.get();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The above example retrieves the token from the key manager and stores it in the ",(0,o.jsx)(n.code,{children:"token"})," variable."]}),"\n",(0,o.jsx)(n.h2,{id:"authentication-schemes",children:"Authentication schemes"}),"\n",(0,o.jsxs)(n.p,{children:["By default Serverpod will pass the authentication token from client to server in accordance with the HTTP ",(0,o.jsx)(n.code,{children:"authorization"})," header standard with the ",(0,o.jsx)(n.code,{children:"basic"})," scheme name and encoding. This is securely transferred as the connection is TLS encrypted."]}),"\n",(0,o.jsxs)(n.p,{children:["The default implementation encodes and wraps the user-provided token in a ",(0,o.jsx)(n.code,{children:"basic"})," scheme which is automatically unwrapped on the server side before being handed to the user-provided authentication handler described above."]}),"\n",(0,o.jsx)(n.p,{children:'In other words the default transport implementation is "invisible" to user code.'}),"\n",(0,o.jsx)(n.h3,{id:"implementing-your-own-authentication-scheme",children:"Implementing your own authentication scheme"}),"\n",(0,o.jsxs)(n.p,{children:["If you are implementing your own authentication and are using the ",(0,o.jsx)(n.code,{children:"basic"})," scheme, note that this is supported but will be automatically unwrapped i.e. decoded on the server side before being handed to your ",(0,o.jsx)(n.code,{children:"AuthenticationHandler"})," implementation. It will in this case receive the decoded auth key value after the ",(0,o.jsx)(n.code,{children:"basic"})," scheme name."]}),"\n",(0,o.jsxs)(n.p,{children:["If you are implementing a different authentication scheme, for example OAuth 2 using bearer tokens, you should override the default method ",(0,o.jsx)(n.code,{children:"toHeaderValue"})," of ",(0,o.jsx)(n.code,{children:"AuthenticationKeyManager"}),". This client-side method converts the authentication key to the format that shall be sent as a transport header to the server."]}),"\n",(0,o.jsxs)(n.p,{children:["You will also need to implement the ",(0,o.jsx)(n.code,{children:"AuthenticationHandler"})," accordingly, in order to process that header value server-side."]}),"\n",(0,o.jsx)(n.p,{children:"The header value must be compliant with the HTTP header format defined in RFC 9110 HTTP Semantics, 11.6.2. Authorization.\nSee:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization",children:"HTTP Authorization header"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://httpwg.org/specs/rfc9110.html#field.authorization",children:"RFC 9110, 11.6.2. Authorization"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"An approach to adding OAuth handling might make changes to the above code akin to the following."}),"\n",(0,o.jsx)(n.p,{children:"Client side:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"class MyOAuthKeyManager extends AuthenticationKeyManager {\n  String? _key;\n\n  @override\n  Future<String?> get() async {\n    return _key;\n  }\n\n  @override\n  Future<void> put(String key) async {\n    _key = key;\n  }\n\n  @override\n  Future<void> remove() async {\n    _key = null;\n  }\n\n  @override\n  Future<String?> toHeaderValue(String? key) async {\n    if (key == null) return null;\n    return 'Bearer ${myBearerTokenObtainer(key)}';\n  }\n}\n\n\nvar client = Client('http://$localhost:8080/',\n    authenticationKeyManager: SimpleAuthKeyManager())\n  ..connectivityMonitor = FlutterConnectivityMonitor();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Server side:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"// Initialize Serverpod and connect it with your generated code.\nfinal pod = Serverpod(\n  args,\n  Protocol(),\n  Endpoints(),\n  authenticationHandler: (Session session, String token) async {\n    /// Bearer token validation handler\n    var (uid, scopes) = myBearerTokenValidator(token)\n    if (uid == null) return null;\n\n    return AuthenticationInfo(uid, scopes);\n  },\n);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);