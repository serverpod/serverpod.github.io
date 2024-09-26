"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9178],{19344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=t(85893),r=t(11151);const i={},a="Experimental features",l={id:"concepts/experimental",title:"Experimental features",description:"Experimental features should not be used in production environments, as their stability is uncertain and they may receive breaking changes in upcoming releases.",source:"@site/docs/06-concepts/18-experimental.md",sourceDirName:"06-concepts",slug:"/concepts/experimental",permalink:"/next/concepts/experimental",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/18-experimental.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web server",permalink:"/next/concepts/webserver"},next:{title:"Choosing deployment strategy",permalink:"/next/deployments/deployment-strategy"}},d={},o=[{value:"Inheritance",id:"inheritance",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"experimental-features",children:"Experimental features"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Experimental features should not be used in production environments, as their stability is uncertain and they may receive breaking changes in upcoming releases."})}),"\n",(0,s.jsx)(n.p,{children:'"Experimental Features" are cutting-edge additions to Serverpod that are currently under development or testing. These features allow developers to explore new functionalities and provide feedback, helping shape the future of Serverpod. However, they may not be fully stable or complete and are subject to change.'}),"\n",(0,s.jsxs)(n.p,{children:["By default, experimental features are disabled. To opt into using them, include the ",(0,s.jsx)(n.code,{children:"--experimental-features"})," flag when running the serverpod command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ serverpod generate --experimental-features=all\n"})}),"\n",(0,s.jsx)(n.p,{children:"The current options you can pass are:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:(0,s.jsx)(n.strong,{children:"Feature"})}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.strong,{children:"all"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Enables all available experimental features."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.strong,{children:"inheritance"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Allows using the ",(0,s.jsx)(n.code,{children:"extends"})," keyword in your model files to create class hierarchies."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,s.jsx)(n.p,{children:"Inheritance allows you to define class hierarchies in your model files by sharing fields between parent and child classes, simplifying class structures and promoting consistency by avoiding duplicate field definitions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: ParentClass\nfields:\n    name: String\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"class: ChildClass\nextends: ParentClass\nfields:\n    int: age\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will generate a class with both ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"age"})," field."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"class ChildClass extends ParentClass {\n    String name\n    int age\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"extends"})," keyword does not work for models with a ",(0,s.jsx)(n.code,{children:"table"})," field."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(67294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);