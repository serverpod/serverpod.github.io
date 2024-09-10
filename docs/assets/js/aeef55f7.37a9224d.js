"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[85690],{37452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(85893),o=t(11151);const r={},a="Custom overrides",s={id:"concepts/authentication/custom-overrides",title:"Custom overrides",description:"It is recommended to use the serverpod_auth package but if you have special requirements not fulfilled by it, you can implement your authentication module. Serverpod is designed to make it easy to add custom authentication overrides.",source:"@site/versioned_docs/version-2.0.0/05-concepts/10-authentication/05-custom-overrides.md",sourceDirName:"05-concepts/10-authentication",slug:"/concepts/authentication/custom-overrides",permalink:"/2.0.0/concepts/authentication/custom-overrides",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/10-authentication/05-custom-overrides.md",tags:[],version:"2.0.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom providers",permalink:"/2.0.0/concepts/authentication/providers/custom-providers"},next:{title:"Uploading files",permalink:"/2.0.0/concepts/file-uploads"}},c={},d=[{value:"Server setup",id:"server-setup",level:2},{value:"Token validation",id:"token-validation",level:3},{value:"Scopes",id:"scopes",level:4},{value:"Send token to client",id:"send-token-to-client",level:3},{value:"Client setup",id:"client-setup",level:2},{value:"Configure key manager",id:"configure-key-manager",level:3},{value:"Store token",id:"store-token",level:3},{value:"Remove token",id:"remove-token",level:3},{value:"Retrieve token",id:"retrieve-token",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"custom-overrides",children:"Custom overrides"})}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended to use the ",(0,i.jsx)(n.code,{children:"serverpod_auth"})," package but if you have special requirements not fulfilled by it, you can implement your authentication module. Serverpod is designed to make it easy to add custom authentication overrides."]}),"\n",(0,i.jsx)(n.h2,{id:"server-setup",children:"Server setup"}),"\n",(0,i.jsx)(n.p,{children:"When running a custom auth integration it is up to you to build the authentication model and issuing auth tokens."}),"\n",(0,i.jsx)(n.h3,{id:"token-validation",children:"Token validation"}),"\n",(0,i.jsxs)(n.p,{children:["The token validation is performed by providing a custom ",(0,i.jsx)(n.code,{children:"authenticationHandler"})," callback when initializing Serverpod. The callback should return an ",(0,i.jsx)(n.code,{children:"AuthenticationInfo"})," object if the token is valid, otherwise ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"// Initialize Serverpod and connect it with your generated code.\nfinal pod = Serverpod(\n  args,\n  Protocol(),\n  Endpoints(),\n  authenticationHandler: (Session session, String token) async {\n    /// Custom validation handler\n    if (token != 'valid') return null;\n\n    return AuthenticationInfo(1, <Scope>{});\n  },\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, the ",(0,i.jsx)(n.code,{children:"authenticationHandler"})," callback is overridden with a custom validation method. The method returns an ",(0,i.jsx)(n.code,{children:"AuthenticationInfo"})," object with user id ",(0,i.jsx)(n.code,{children:"1"})," and no scopes if the token is valid, otherwise ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the authenticationHandler callback the ",(0,i.jsx)(n.code,{children:"authenticated"})," field on the session will always be ",(0,i.jsx)(n.code,{children:"null"})," as it is the authenticationHandler that figures out who the user is."]})}),"\n",(0,i.jsx)(n.h4,{id:"scopes",children:"Scopes"}),"\n",(0,i.jsxs)(n.p,{children:["The scopes returned from the ",(0,i.jsx)(n.code,{children:"authenticationHandler"})," is used to grant access to scope restricted endpoints. The ",(0,i.jsx)(n.code,{children:"Scope"})," class is a simple wrapper around a nullable ",(0,i.jsx)(n.code,{children:"String"})," in dart. This means that you can format your scopes however you want as long as they are in a String format."]}),"\n",(0,i.jsx)(n.p,{children:"Normally if you implement a JWT you would store the scopes inside the token. When extracting them all you have to do is convert the String stored in the token into a Scope object by calling the constructor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"List<String> scopes = extractScopes(token);\nSet<Scope> userScopes = scopes.map((scope) => Scope(scope)).toSet();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"send-token-to-client",children:"Send token to client"}),"\n",(0,i.jsx)(n.p,{children:"You are responsible for implementing the endpoints to authenticate/authorize the user. But as an example such an endpoint could look like the following."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class UserEndpoint extends Endpoint {\n  Future<LoginResponse> login(\n    Session session,\n    String username,\n    String password,\n  ) async {\n    var identifier = authenticateUser(session, username, password);\n    if (identifier == null) return null;\n\n    return issueMyToken(identifier, scopes: {});\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, the ",(0,i.jsx)(n.code,{children:"login"})," method authenticates the user and creates an auth token. The token is then returned to the client."]}),"\n",(0,i.jsx)(n.h2,{id:"client-setup",children:"Client setup"}),"\n",(0,i.jsx)(n.p,{children:"Enabling authentication in the client is as simple as configuring a key manager and placing any token in it. If a key manager is configured, the client will automatically query the manager for a token and include it in communication with the server."}),"\n",(0,i.jsx)(n.h3,{id:"configure-key-manager",children:"Configure key manager"}),"\n",(0,i.jsxs)(n.p,{children:["Key managers need to implement the ",(0,i.jsx)(n.code,{children:"AuthenticationKeyManager"})," interface. The key manager is configured when creating the client by passing it as the named parameter ",(0,i.jsx)(n.code,{children:"authenticationKeyManager"}),". If no key manager is configured, the client will not include tokens in requests to the server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class SimpleAuthKeyManager extends AuthenticationKeyManager {\n  String? _key;\n\n  @override\n  Future<String?> get() async {\n    return _key;\n  }\n\n  @override\n  Future<void> put(String key) async {\n    _key = key;\n  }\n\n  @override\n  Future<void> remove() async {\n    _key = null;\n  }\n}\n\n\nvar client = Client('http://$localhost:8080/',\n    authenticationKeyManager: SimpleAuthKeyManager())\n  ..connectivityMonitor = FlutterConnectivityMonitor();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, the ",(0,i.jsx)(n.code,{children:"SimpleAuthKeyManager"})," is configured as the client's authentication key manager. The ",(0,i.jsx)(n.code,{children:"SimpleAuthKeyManager"})," stores the token in memory."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"SimpleAuthKeyManager"})," is not practical and should only be used for testing. A secure implementation of the key manager is available in the ",(0,i.jsx)(n.code,{children:"serverpod_auth_shared_flutter"})," package named ",(0,i.jsx)(n.code,{children:"FlutterAuthenticationKeyManager"}),". It provides safe, persistent storage for the auth token."]})}),"\n",(0,i.jsxs)(n.p,{children:["The key manager is then available through the client's ",(0,i.jsx)(n.code,{children:"authenticationKeyManager"})," field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var keyManager = client.authenticationKeyManager;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"store-token",children:"Store token"}),"\n",(0,i.jsxs)(n.p,{children:["When the client receives a token from the server, it is responsible for storing it in the key manager using the ",(0,i.jsx)(n.code,{children:"put"})," method. The key manager will then include the token in all requests to the server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await client.authenticationKeyManager?.put(token);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, the ",(0,i.jsx)(n.code,{children:"token"})," is placed in the key manager. It will now be included in communication with the server."]}),"\n",(0,i.jsx)(n.h3,{id:"remove-token",children:"Remove token"}),"\n",(0,i.jsxs)(n.p,{children:["To remove the token from the key manager, call the ",(0,i.jsx)(n.code,{children:"remove"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"await client.authenticationKeyManager?.remove();\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above example removes any token from the key manager."}),"\n",(0,i.jsx)(n.h3,{id:"retrieve-token",children:"Retrieve token"}),"\n",(0,i.jsxs)(n.p,{children:["To retrieve the token from the key manager, call the ",(0,i.jsx)(n.code,{children:"get"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"var token = await client.authenticationKeyManager?.get();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above example retrieves the token from the key manager and stores it in the ",(0,i.jsx)(n.code,{children:"token"})," variable."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);