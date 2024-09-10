"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[36762],{78173:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var t=s(85893),a=s(11151);const c={},r="Caching",i={id:"concepts/caching",title:"Caching",description:"Accessing the database can be expensive for complex queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in the memory of your server. Any serializable object can be cached. Objects can be stored in the Redis cache if your Serverpod is hosted across multiple servers in a cluster.",source:"@site/versioned_docs/version-2.0.0/05-concepts/07-caching.md",sourceDirName:"05-concepts",slug:"/concepts/caching",permalink:"/2.0.0/concepts/caching",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/07-caching.md",tags:[],version:"2.0.0",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrations",permalink:"/2.0.0/concepts/database/migrations"},next:{title:"Logging",permalink:"/2.0.0/concepts/logging"}},o={},h=[{value:"Cache miss handler",id:"cache-miss-handler",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"caching",children:"Caching"})}),"\n",(0,t.jsx)(n.p,{children:"Accessing the database can be expensive for complex queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in the memory of your server. Any serializable object can be cached. Objects can be stored in the Redis cache if your Serverpod is hosted across multiple servers in a cluster."}),"\n",(0,t.jsxs)(n.p,{children:["Caches can be accessed through the ",(0,t.jsx)(n.code,{children:"Session"})," object. This is an example of an endpoint method for requesting data about a user:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"Future<UserData> getUserData(Session session, int userId) async {\n  // Define a unique key for the UserData object\n  var cacheKey = 'UserData-$userId';\n\n  // Try to retrieve the object from the cache\n  var userData = await session.caches.local.get<UserData>(cacheKey);\n\n  // If the object wasn't found in the cache, load it from the database and\n  // save it in the cache. Make it valid for 5 minutes.\n  if (userData == null) {\n    userData = UserData.db.findById(session, userId);\n    await session.caches.local.put(cacheKey, userData!, lifetime: Duration(minutes: 5));\n  }\n\n  // Return the user data to the client\n  return userData;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In total, there are three caches where you can store your objects. Two caches are local to the server handling the current session, and one is distributed across the server cluster through Redis. There are two variants for the local cache, one regular cache, and a priority cache. Place objects that are frequently accessed in the priority cache."}),"\n",(0,t.jsx)(n.p,{children:"Depending on the type and number of objects that are cached in the global cache, you may want to specify custom caching rules in Redis. This is currently not handled automatically by Serverpod."}),"\n",(0,t.jsx)(n.h3,{id:"cache-miss-handler",children:"Cache miss handler"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to handle cache misses in a specific way, you can pass in a ",(0,t.jsx)(n.code,{children:"CacheMissHandler"})," to the ",(0,t.jsx)(n.code,{children:"get"})," method. The ",(0,t.jsx)(n.code,{children:"CacheMissHandler"})," makes it possible to store an object in the cache when a cache miss occurs."]}),"\n",(0,t.jsxs)(n.p,{children:["The above example rewritten using the ",(0,t.jsx)(n.code,{children:"CacheMissHandler"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"Future<UserData> getUserData(Session session, int userId) async {\n  // Define a unique key for the UserData object\n  var cacheKey = 'UserData-$userId';\n\n  // Try to retrieve the object from the cache\n  var userData = await session.caches.local.get(\n    cacheKey,\n    // If the object wasn't found in the cache, load it from the database and\n    // save it in the cache. Make it valid for 5 minutes.\n    CacheMissHandler(\n      () async => UserData.db.findById(session, userId),\n      lifetime: Duration(minutes: 5),\n    ),\n    );\n\n  // Return the user data to the client\n  return userData;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"CacheMissHandler"})," returns ",(0,t.jsx)(n.code,{children:"null"}),", no object will be stored in the cache."]})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(67294);const a={},c=t.createContext(a);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);