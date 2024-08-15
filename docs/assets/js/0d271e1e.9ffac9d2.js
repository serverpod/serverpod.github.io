"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9284],{69424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(85893),a=t(11151);const i={},s="Referential actions",l={id:"concepts/database/relations/referential-actions",title:"Referential actions",description:"In Serverpod, the behavior of update and delete for relations can be precisely defined using the onUpdate and onDelete properties. These properties map directly to the corresponding referential actions in PostgreSQL.",source:"@site/docs/06-concepts/06-database/03-relations/05-referential-actions.md",sourceDirName:"06-concepts/06-database/03-relations",slug:"/concepts/database/relations/referential-actions",permalink:"/next/concepts/database/relations/referential-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/06-database/03-relations/05-referential-actions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Self-relations",permalink:"/next/concepts/database/relations/self-relations"},next:{title:"Relations with modules",permalink:"/next/concepts/database/relations/modules"}},o={},d=[{value:"Available Referential Actions",id:"available-referential-actions",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Full example",id:"full-example",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"referential-actions",children:"Referential actions"})}),"\n",(0,r.jsx)(n.p,{children:"In Serverpod, the behavior of update and delete for relations can be precisely defined using the onUpdate and onDelete properties. These properties map directly to the corresponding referential actions in PostgreSQL."}),"\n",(0,r.jsx)(n.h2,{id:"available-referential-actions",children:"Available Referential Actions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Action"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"NoAction"})}),(0,r.jsx)(n.td,{children:"If any constraint violation occurs, no action will be taken, and an error will be raised."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Restrict"})}),(0,r.jsx)(n.td,{children:"If any referencing rows still exist when the constraint is checked, an error is raised."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"SetDefault"})}),(0,r.jsx)(n.td,{children:"The field will revert to its default value. Note: This action necessitates that a default value is configured for the field."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Cascade"})}),(0,r.jsx)(n.td,{children:"Any action taken on the parent (update/delete) will be mirrored in the child."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"SetNull"})}),(0,r.jsx)(n.td,{children:"The field value is set to null. This action is permissible only if the field has been marked as optional."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:"Use the following syntax to apply referential actions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"relation(onUpdate=<ACTION>, onDelete=<ACTION>)\n"})}),"\n",(0,r.jsx)(n.p,{children:"For instance, the default behavior in Serverpod can be expressed as."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"relation(onUpdate=NoAction, onDelete=Cascade)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The sequence of onUpdate and onDelete is interchangeable."})}),"\n",(0,r.jsx)(n.h3,{id:"full-example",children:"Full example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  parentId: int?, relation(parent=example, onUpdate=SetNull, onDelete=NoAction)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the given example, if the ",(0,r.jsx)(n.code,{children:"example"})," parent is updated, the ",(0,r.jsx)(n.code,{children:"parentId"})," will be set to null. If the parent is deleted, no action will be taken for parentId."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);