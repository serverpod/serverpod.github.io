"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2372],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},295:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Serialization",l={unversionedId:"concepts/serialization",id:"version-0.9.7/concepts/serialization",title:"Serialization",description:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database. The structure for the classes is defined in yaml-files in the protocol directory. Run serverpod generate to build the Dart code for the classes and make them accessible to both the server and client.",source:"@site/versioned_docs/version-0.9.7/03-concepts/02-serialization.md",sourceDirName:"03-concepts",slug:"/concepts/serialization",permalink:"/0.9.7/concepts/serialization",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.7/03-concepts/02-serialization.md",tags:[],version:"0.9.7",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with endpoints",permalink:"/0.9.7/concepts/working-with-endpoints"},next:{title:"Database communication",permalink:"/0.9.7/concepts/database-communication"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serialization"},"Serialization"),(0,o.kt)("p",null,"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database. The structure for the classes is defined in yaml-files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol")," directory. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate")," to build the Dart code for the classes and make them accessible to both the server and client."),(0,o.kt)("p",null,"Here is a simple example of a yaml-file defining a serializable class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n")),(0,o.kt)("p",null,"Supported types are ",(0,o.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTime"),", and other serializable classes. You can also use lists of objects. Null safety is supported. Once your classes are generated, you can use them as parameters or return types to endpoint methods."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is not yet support for ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," or lists of lists. These are planned to be added in a future version."))))}m.isMDXComponent=!0}}]);