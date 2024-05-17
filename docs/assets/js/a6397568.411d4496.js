"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5080],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8656:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),o=["components"],s={},i="Caching",u={unversionedId:"concepts/caching",id:"version-0.9.8/concepts/caching",title:"Caching",description:"Accessing the database can sometimes be expensive for complex database queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. If your Serverpod is hosted across multiple servers in a cluster, objects are stored in the Redis cache.",source:"@site/versioned_docs/version-0.9.8/03-concepts/04-caching.md",sourceDirName:"03-concepts",slug:"/concepts/caching",permalink:"/concepts/caching",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.8/03-concepts/04-caching.md",tags:[],version:"0.9.8",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database communication",permalink:"/concepts/database-communication"},next:{title:"Logging",permalink:"/concepts/logging"}},l={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"caching"},"Caching"),(0,c.kt)("p",null,"Accessing the database can sometimes be expensive for complex database queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. If your Serverpod is hosted across multiple servers in a cluster, objects are stored in the Redis cache."),(0,c.kt)("p",null,"Caches can be accessed through the ",(0,c.kt)("inlineCode",{parentName:"p"},"Session")," object. This is an example of an endpoint method for requesting data about a user:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-dart"},"Future<UserData> getUserData(Session session, int userId) async {\n  // Define a unique key for the UserData object\n  var cacheKey = 'UserData-$userId';\n\n  // Try to retrieve the object from the cache\n  var userData = await session.caches.local.get(cacheKey) as UserData?;\n\n  // If the object wasn't found in the cache, load it from the database and\n  // save it in the cache. Make it valid for 5 minutes.\n  if (userData == null) {\n    userData = session.db.findById(tUserData, userId) as UserData?;\n    await session.caches.local.put(cacheKey, userData!, lifetime: Duration(minutes: 5));\n  }\n\n  // Return the user data to the client\n  return userData;\n}\n")),(0,c.kt)("p",null,"In total, there are three caches where you can store your objects. Two caches are local to the server handling the current session, and one is distributed across the server cluster through Redis. There are two variants for the local cache, one regular cache, and a priority cache. Place objects that are frequently accessed in the priority cache."),(0,c.kt)("p",null,"Depending on the type and number of objects that are cached in the global cache, you may want to specify custom caching rules in Redis. This is currently not handled automatically by Serverpod."))}f.isMDXComponent=!0}}]);