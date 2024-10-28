"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[75157],{53046:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(85893),i=s(11151);const a={},r="Experimental features",l={id:"concepts/experimental",title:"Experimental features",description:"Experimental features should not be used in production environments, as their stability is uncertain and they may receive breaking changes in upcoming releases.",source:"@site/docs/06-concepts/19-experimental.md",sourceDirName:"06-concepts",slug:"/concepts/experimental",permalink:"/next/concepts/experimental",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/19-experimental.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Best practises",permalink:"/next/concepts/testing/best-practises"},next:{title:"Choosing deployment strategy",permalink:"/next/deployments/deployment-strategy"}},d={},c=[{value:"Inheritance",id:"inheritance",level:2},{value:"Extending a Class",id:"extending-a-class",level:3},{value:"Sealed Classes",id:"sealed-classes",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"experimental-features",children:"Experimental features"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Experimental features should not be used in production environments, as their stability is uncertain and they may receive breaking changes in upcoming releases."})}),"\n",(0,t.jsx)(n.p,{children:'"Experimental Features" are cutting-edge additions to Serverpod that are currently under development or testing. These features allow developers to explore new functionalities and provide feedback, helping shape the future of Serverpod. However, they may not be fully stable or complete and are subject to change.'}),"\n",(0,t.jsxs)(n.p,{children:["By default, experimental features are disabled. To opt into using them, include the ",(0,t.jsx)(n.code,{children:"--experimental-features"})," flag when running the serverpod command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ serverpod generate --experimental-features=all\n"})}),"\n",(0,t.jsx)(n.p,{children:"The current options you can pass are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"Feature"})}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"all"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Enables all available experimental features."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"inheritance"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["Allows using the ",(0,t.jsx)(n.code,{children:"extends"})," keyword in your model files to create class hierarchies."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"testTools"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["Generates the Serverpod test tools, see the ",(0,t.jsx)(n.a,{href:"testing/get-started",children:"testing get started page"})," for more information."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Adding a new subtype to a class hierarchy may introduce breaking changes for older clients. Ensure client compatibility when expanding class hierarchies to avoid deserialization issues."})}),"\n",(0,t.jsx)(n.p,{children:"Inheritance allows you to define class hierarchies in your model files by sharing fields between parent and child classes, simplifying class structures and promoting consistency by avoiding duplicate field definitions."}),"\n",(0,t.jsx)(n.h3,{id:"extending-a-class",children:"Extending a Class"}),"\n",(0,t.jsxs)(n.p,{children:["To inherit from a class, use the ",(0,t.jsx)(n.code,{children:"extends"})," keyword in your model files, as shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"class: ParentClass\nfields:\n    name: String\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"class: ChildClass\nextends: ParentClass\nfields:\n    int: age\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will generate a class with both ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"age"})," field."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"class ChildClass extends ParentClass {\n    String name\n    int age\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sealed-classes",children:"Sealed Classes"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the ",(0,t.jsx)(n.code,{children:"extends"})," keyword, you can also use the ",(0,t.jsx)(n.code,{children:"sealed"})," keyword to create sealed class hierarchies, enabling exhaustive type checking. With sealed classes, the compiler knows all subclasses, ensuring that every possible case is handled when working with the model."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"class: ParentClass\nsealed: true\nfields:\n    name: String\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"class: ChildClass\nextends: ParentClass\nfields:\n    age: int\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will generate the following classes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"sealed class ParentClass {\n    String name;\n}\n\nclass ChildClass extends ParentClass {\n    String name;\n    int age;\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"All files in a sealed hierarchy need to be located in the same directory."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);