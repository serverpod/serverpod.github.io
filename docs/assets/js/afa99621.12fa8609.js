"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4453],{92125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(85893),i=n(11151);const r={},s="Referential actions",l={id:"concepts/database/relations/referential-actions",title:"Referential actions",description:"In Serverpod, the behavior of update and delete for relations can be precisely defined using the onUpdate and onDelete properties. These properties map directly to the corresponding referential actions in PostgreSQL.",source:"@site/docs/05-concepts/06-database/03-relations/05-referential-actions.md",sourceDirName:"05-concepts/06-database/03-relations",slug:"/concepts/database/relations/referential-actions",permalink:"/next/concepts/database/relations/referential-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/06-database/03-relations/05-referential-actions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Self-relations",permalink:"/next/concepts/database/relations/self-relations"},next:{title:"Relations with modules",permalink:"/next/concepts/database/relations/modules"}},o={},d=[{value:"Available Referential Actions",id:"available-referential-actions",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Full example",id:"full-example",level:3}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"referential-actions",children:"Referential actions"}),"\n",(0,a.jsx)(t.p,{children:"In Serverpod, the behavior of update and delete for relations can be precisely defined using the onUpdate and onDelete properties. These properties map directly to the corresponding referential actions in PostgreSQL."}),"\n",(0,a.jsx)(t.h2,{id:"available-referential-actions",children:"Available Referential Actions"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Action"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"NoAction"})}),(0,a.jsx)(t.td,{children:"If any constraint violation occurs, no action will be taken, and an error will be raised."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Restrict"})}),(0,a.jsx)(t.td,{children:"If any referencing rows still exist when the constraint is checked, an error is raised."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"SetDefault"})}),(0,a.jsx)(t.td,{children:"The field will revert to its default value. Note: This action necessitates that a default value is configured for the field."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Cascade"})}),(0,a.jsx)(t.td,{children:"Any action taken on the parent (update/delete) will be mirrored in the child."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"SetNull"})}),(0,a.jsx)(t.td,{children:"The field value is set to null. This action is permissible only if the field has been marked as optional."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.p,{children:"Use the following syntax to apply referential actions"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"relation(onUpdate=<ACTION>, onDelete=<ACTION>)\n"})}),"\n",(0,a.jsx)(t.p,{children:"For instance, the default behavior in Serverpod can be expressed as."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"relation(onUpdate=NoAction, onDelete=Cascade)\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The sequence of onUpdate and onDelete is interchangeable."})}),"\n",(0,a.jsx)(t.h3,{id:"full-example",children:"Full example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  parentId: int?, relation(parent=example, onUpdate=SetNull, onDelete=NoAction)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the given example, if the ",(0,a.jsx)(t.code,{children:"example"})," parent is updated, the ",(0,a.jsx)(t.code,{children:"parentId"})," will be set to null. If the parent is deleted, no action will be taken for parentId."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);