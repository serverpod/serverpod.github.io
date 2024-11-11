"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[10700],{10494:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"concepts/caching","title":"Caching","description":"Accessing the database can sometimes be expensive for complex database queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. If your Serverpod is hosted across multiple servers in a cluster, objects are stored in the Redis cache.","source":"@site/versioned_docs/version-0.9.6/02-concepts/04-caching.md","sourceDirName":"02-concepts","slug":"/concepts/caching","permalink":"/0.9.6/concepts/caching","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.6/02-concepts/04-caching.md","tags":[],"version":"0.9.6","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Database communication","permalink":"/0.9.6/concepts/database-communication"},"next":{"title":"Logging","permalink":"/0.9.6/concepts/logging"}}');var n=s(74848),r=s(28453);const c={},o="Caching",i={},d=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"caching",children:"Caching"})}),"\n",(0,n.jsx)(t.p,{children:"Accessing the database can sometimes be expensive for complex database queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. If your Serverpod is hosted across multiple servers in a cluster, objects are stored in the Redis cache."}),"\n",(0,n.jsxs)(t.p,{children:["Caches can be accessed through the ",(0,n.jsx)(t.code,{children:"Session"})," object. This is an example of an endpoint method for requesting data about a user:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"Future<UserData> getUserData(Session session, int userId) async {\n  // Define a unique key for the UserData object\n  var cacheKey = 'UserData-$userId';\n\n  // Try to retrieve the object from the cache\n  var userData = await session.caches.local.get(cacheKey) as UserData?;\n\n  // If the object wasn't found in the cache, load it from the database and\n  // save it in the cache. Make it valid for 5 minutes.\n  if (userData == null) {\n    userData = session.db.findById(tUserData, userId) as UserData?;\n    await session.caches.local.put(cacheKey, userData!, lifetime: Duration(minutes: 5));\n  }\n\n  // Return the user data to the client\n  return userData;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"In total, there are three caches where you can store your objects. Two caches are local to the server handling the current session, and one is distributed across the server cluster through Redis. There are two variants for the local cache, one regular cache, and a priority cache. Place objects that are frequently accessed in the priority cache."}),"\n",(0,n.jsx)(t.p,{children:"Depending on the type and number of objects that are cached in the global cache, you may want to specify custom caching rules in Redis. This is currently not handled automatically by Serverpod."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var a=s(96540);const n={},r=a.createContext(n);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);