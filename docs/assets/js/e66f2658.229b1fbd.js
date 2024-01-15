"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[8344],{46860:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(85893),o=s(11151);const i={},r="The basics",c={id:"concepts/authentication/basics",title:"The basics",description:"Serverpod automatically checks if the user is logged in and if the user has the right privileges to access the endpoint. When using the serverpod_auth module you will not have to worry about keeping track of tokens, refreshing them or, even including them in requests as this all happens automatically under the hood.",source:"@site/versioned_docs/version-1.2.0/05-concepts/10-authentication/02-basics.md",sourceDirName:"05-concepts/10-authentication",slug:"/concepts/authentication/basics",permalink:"/concepts/authentication/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/10-authentication/02-basics.md",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/concepts/authentication/setup"},next:{title:"Working with users",permalink:"/concepts/authentication/working-with-users"}},a={},d=[{value:"Requiring authentication on endpoints",id:"requiring-authentication-on-endpoints",level:2},{value:"Authorization on endpoints",id:"authorization-on-endpoints",level:2},{value:"Managing scopes",id:"managing-scopes",level:3},{value:"Custom scopes",id:"custom-scopes",level:3}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"the-basics",children:"The basics"}),"\n",(0,t.jsxs)(n.p,{children:["Serverpod automatically checks if the user is logged in and if the user has the right privileges to access the endpoint. When using the ",(0,t.jsx)(n.code,{children:"serverpod_auth"})," module you will not have to worry about keeping track of tokens, refreshing them or, even including them in requests as this all happens automatically under the hood."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Session"})," object provides information about the current user. A unique ",(0,t.jsx)(n.code,{children:"userId"})," identifies a user. You should use this id whenever you a referring to a user. Access the id of a signed-in user through the ",(0,t.jsx)(n.code,{children:"auth"})," field of the ",(0,t.jsx)(n.code,{children:"Session"})," object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"Future<void> myMethod(Session session) async {\n  var userId = await session.auth.authenticatedUserId;\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also use the Session object to check if a user is authenticated:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"Future<void> myMethod(Session session) async {\n  var isSignedIn = await session.isUserSignedIn;\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"requiring-authentication-on-endpoints",children:"Requiring authentication on endpoints"}),"\n",(0,t.jsxs)(n.p,{children:["It is common to want to restrict access to an endpoint to users that have signed in. You can do this by overriding the ",(0,t.jsx)(n.code,{children:"requireLogin"})," property of the ",(0,t.jsx)(n.code,{children:"Endpoint"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class MyEndpoint extends Endpoint {\n  @override\n  bool get requireLogin => true;\n\n  Future<void> myMethod(Session session) async {\n    ...\n  }\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"authorization-on-endpoints",children:"Authorization on endpoints"}),"\n",(0,t.jsxs)(n.p,{children:["Serverpod also supports scopes for restricting access. One or more scopes can be associated with a user. For instance, this can be used to give admin access to a specific user. To restrict access for an endpoint, override the ",(0,t.jsx)(n.code,{children:"requiredScopes"})," property. Note that setting ",(0,t.jsx)(n.code,{children:"requiredScopes"})," implicitly sets ",(0,t.jsx)(n.code,{children:"requireLogin"})," to true."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class MyEndpoint extends Endpoint {\n  @override\n  bool get requireLogin => true;\n\n  @override\n  Set<Scope> get requiredScopes => {Scope.admin};\n\n  Future<void> myMethod(Session session) async {\n    ...\n  }\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"managing-scopes",children:"Managing scopes"}),"\n",(0,t.jsxs)(n.p,{children:["New users are created without any scopes. To update a user's scopes, use the ",(0,t.jsx)(n.code,{children:"Users"})," class's ",(0,t.jsx)(n.code,{children:"updateUserScopes"})," method (requires the ",(0,t.jsx)(n.code,{children:"serverpod_auth_server"})," package). This method replaces all previously stored scopes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"await Users.updateUserScopes(session, userId, {Scope.admin});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"custom-scopes",children:"Custom scopes"}),"\n",(0,t.jsx)(n.p,{children:"You may need more granular access control for specific endpoints. To create custom scopes, extend the Scope class, as shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class CustomScope extends Scope {\n  const CustomScope(String name) : super(name);\n\n  static const userRead = CustomScope('userRead');\n  static const userWrite = CustomScope('userWrite');\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then use the custom scopes like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class MyEndpoint extends Endpoint {\n  @override\n  bool get requireLogin => true;\n\n  @override\n  Set<Scope> get requiredScopes => {CustomScope.userRead, CustomScope.userWrite};\n\n  Future<void> myMethod(Session session) async {\n    ...\n  }\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Keep in mind that a scope is merely an arbitrary string and can be written in any format you prefer. However, it's crucial to use unique strings for each scope, as duplicated scope strings may lead to unintentional data exposure."})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);