"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[70326],{66301:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"concepts/caching","title":"Caching","description":"Accessing the database can be expensive for complex queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in the memory of your server. Any serializable object can be cached. Objects can be stored in the Redis cache if your Serverpod is hosted across multiple servers in a cluster.","source":"@site/versioned_docs/version-1.2.0/05-concepts/07-caching.md","sourceDirName":"05-concepts","slug":"/concepts/caching","permalink":"/1.2.0/concepts/caching","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/07-caching.md","tags":[],"version":"1.2.0","sidebarPosition":7,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Migrations","permalink":"/1.2.0/concepts/database/migrations"},"next":{"title":"Logging","permalink":"/1.2.0/concepts/logging"}}');var r=s(74848),a=s(28453);const c={},o="Caching",i={},d=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"caching",children:"Caching"})}),"\n",(0,r.jsx)(t.p,{children:"Accessing the database can be expensive for complex queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in the memory of your server. Any serializable object can be cached. Objects can be stored in the Redis cache if your Serverpod is hosted across multiple servers in a cluster."}),"\n",(0,r.jsxs)(t.p,{children:["Caches can be accessed through the ",(0,r.jsx)(t.code,{children:"Session"})," object. This is an example of an endpoint method for requesting data about a user:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"Future<UserData> getUserData(Session session, int userId) async {\n  // Define a unique key for the UserData object\n  var cacheKey = 'UserData-$userId';\n\n  // Try to retrieve the object from the cache\n  var userData = await session.caches.local.get<UserData>(cacheKey);\n\n  // If the object wasn't found in the cache, load it from the database and\n  // save it in the cache. Make it valid for 5 minutes.\n  if (userData == null) {\n    userData = session.db.findById(tUserData, userId) as UserData?;\n    await session.caches.local.put(cacheKey, userData!, lifetime: Duration(minutes: 5));\n  }\n\n  // Return the user data to the client\n  return userData;\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"In total, there are three caches where you can store your objects. Two caches are local to the server handling the current session, and one is distributed across the server cluster through Redis. There are two variants for the local cache, one regular cache, and a priority cache. Place objects that are frequently accessed in the priority cache."}),"\n",(0,r.jsx)(t.p,{children:"Depending on the type and number of objects that are cached in the global cache, you may want to specify custom caching rules in Redis. This is currently not handled automatically by Serverpod."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);