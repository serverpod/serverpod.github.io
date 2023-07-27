"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6055],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9600:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Serialization",c={unversionedId:"concepts/serialization",id:"version-1.1.1/concepts/serialization",title:"Serialization",description:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database.",source:"@site/versioned_docs/version-1.1.1/05-concepts/02-serialization.md",sourceDirName:"05-concepts",slug:"/concepts/serialization",permalink:"/concepts/serialization",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/02-serialization.md",tags:[],version:"1.1.1",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with endpoints",permalink:"/concepts/working-with-endpoints"},next:{title:"Sessions",permalink:"/concepts/sessions"}},d={},p=[{value:"Serverpod&#39;s native serialization",id:"serverpods-native-serialization",level:2},{value:"Extending the generated classes",id:"extending-the-generated-classes",level:3},{value:"Limiting visibility of a generated class",id:"limiting-visibility-of-a-generated-class",level:3},{value:"Adding documentation",id:"adding-documentation",level:3},{value:"Custom serializable objects",id:"custom-serializable-objects",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"serialization"},"Serialization"),(0,i.kt)("p",null,"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database."),(0,i.kt)("h2",{id:"serverpods-native-serialization"},"Serverpod's native serialization"),(0,i.kt)("p",null,"The structure for your serialized classes is defined in yaml-files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol")," directory. Run ",(0,i.kt)("inlineCode",{parentName:"p"},"serverpod generate")," to build the Dart code for the classes and make them accessible to both the server and client."),(0,i.kt)("p",null,"Here is a simple example of a yaml-file defining a serializable class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n")),(0,i.kt)("p",null,"Supported types are ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteData"),", and other serializable classes. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"s of the supported types, just make sure to specify the types. Null safety is supported. The keys of ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," must be non-nullable ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"s. Once your classes are generated, you can use them as parameters or return types to endpoint methods."),(0,i.kt)("h3",{id:"extending-the-generated-classes"},"Extending the generated classes"),(0,i.kt)("p",null,"Sometimes you will want to add custom methods to the generated classes. The easiest way to do this is with Dart's extension feature."),(0,i.kt)("h3",{id:"limiting-visibility-of-a-generated-class"},"Limiting visibility of a generated class"),(0,i.kt)("p",null,"By default, generated code for your serializable objects is available both on the server and the client. You may want to have the code on the server side only. E.g., if the serializable object is connected to a database table containing private information."),(0,i.kt)("p",null,"To make a serializable class generated only on the server side, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverOnly")," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"class: MyPrivateClass\nserverOnly: true\nfields:\n  hiddenSecretKey: String\n")),(0,i.kt)("h3",{id:"adding-documentation"},"Adding documentation"),(0,i.kt)("p",null,"Serverpod allows you to add documentation to your serializable objects in a similar way that you would add documentation to your Dart code. Use three hashes (",(0,i.kt)("inlineCode",{parentName:"p"},"###"),") to indicate that a comment should be considered documentation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"### Information about a company.\nclass: Company\nfields:\n  ### The name of the company.\n  name: String\n\n  ### The date the company was founded, if known.\n  foundedDate: DateTime?\n\n  ### A list of people currently employed at the company.\n  employees: List<Employee>\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Serverpod's serializable objects can easily be saved to or read from the database. You can read more about this in the next section, ",(0,i.kt)("a",{parentName:"p",href:"./database-communication"},"Database communication"),"."))),(0,i.kt)("h2",{id:"custom-serializable-objects"},"Custom serializable objects"),(0,i.kt)("p",null,"For most purposes, you will want to use Serverpod's native serialization as described above. However, there may be cases where you want to serialize more advanced objects. With Serverpod, you can pass any serializable objects as long as they conform to two simple rules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your objects must have a method called toJson() which returns a JSON serialization of the object."),(0,i.kt)("li",{parentName:"ol"},"There must be a constructor or factory called fromJson(), which takes a JSON serialization and a Serialization manager as parameters."),(0,i.kt)("li",{parentName:"ol"},"You must declare your custom serializable objects in the config/generator.yaml file.")),(0,i.kt)("p",null,"Typically, you will want to place your serializable objects in a shared package between the client and your server. For instance, if you use Freezed to do your serialization, the class would look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:freezed_annotation/freezed_annotation.dart';\nimport 'package:serverpod_serialization/serverpod_serialization.dart';\n\npart 'freezed_custom_class.freezed.dart';\npart 'freezed_custom_class.g.dart';\n\n@freezed\nclass FreezedCustomClass with _$FreezedCustomClass {\n  const factory FreezedCustomClass({\n    required String firstName,\n    required String lastName,\n    required int age,\n  }) = _FreezedCustomClass;\n\n  factory FreezedCustomClass.fromJson(\n    Map<String, Object?> json,\n    SerializationManager serializationManager,\n  ) =>\n      _$FreezedCustomClassFromJson(json);\n}\n")),(0,i.kt)("p",null,"In the config/generator.yaml, you declare the package and the class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"extraClasses:\n  - package:my_shared_package/my_shared_package.dart:FreezedCustomClass\n")),(0,i.kt)("p",null,"After adding a new serializable class, you must run ",(0,i.kt)("inlineCode",{parentName:"p"},"serverpod generate"),"."))}m.isMDXComponent=!0}}]);