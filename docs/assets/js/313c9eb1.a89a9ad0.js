"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[58],{21192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=a(85893),n=a(11151);const r={},c="Caching",o={id:"concepts/caching",title:"Caching",description:"Accessing the database can sometimes be expensive for complex database queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. If your Serverpod is hosted across multiple servers in a cluster, objects are stored in the Redis cache.",source:"@site/versioned_docs/version-0.9.6/02-concepts/04-caching.md",sourceDirName:"02-concepts",slug:"/concepts/caching",permalink:"/0.9.6/concepts/caching",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.6/02-concepts/04-caching.md",tags:[],version:"0.9.6",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database communication",permalink:"/0.9.6/concepts/database-communication"},next:{title:"Logging",permalink:"/0.9.6/concepts/logging"}},i={},d=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"caching",children:"Caching"})}),"\n",(0,s.jsx)(t.p,{children:"Accessing the database can sometimes be expensive for complex database queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. If your Serverpod is hosted across multiple servers in a cluster, objects are stored in the Redis cache."}),"\n",(0,s.jsxs)(t.p,{children:["Caches can be accessed through the ",(0,s.jsx)(t.code,{children:"Session"})," object. This is an example of an endpoint method for requesting data about a user:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<UserData> getUserData(Session session, int userId) async {\n  // Define a unique key for the UserData object\n  var cacheKey = 'UserData-$userId';\n\n  // Try to retrieve the object from the cache\n  var userData = await session.caches.local.get(cacheKey) as UserData?;\n\n  // If the object wasn't found in the cache, load it from the database and\n  // save it in the cache. Make it valid for 5 minutes.\n  if (userData == null) {\n    userData = session.db.findById(tUserData, userId) as UserData?;\n    await session.caches.local.put(cacheKey, userData!, lifetime: Duration(minutes: 5));\n  }\n\n  // Return the user data to the client\n  return userData;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"In total, there are three caches where you can store your objects. Two caches are local to the server handling the current session, and one is distributed across the server cluster through Redis. There are two variants for the local cache, one regular cache, and a priority cache. Place objects that are frequently accessed in the priority cache."}),"\n",(0,s.jsx)(t.p,{children:"Depending on the type and number of objects that are cached in the global cache, you may want to specify custom caching rules in Redis. This is currently not handled automatically by Serverpod."})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>c});var s=a(67294);const n={},r=s.createContext(n);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);