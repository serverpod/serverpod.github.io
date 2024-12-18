"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[31080],{57779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"concepts/database/relations/self-relations","title":"Self-relations","description":"A self-referential or self-relation occurs when a table has a foreign key that references its own primary key within the same table. This creates a relationship between different rows within the same table.","source":"@site/versioned_docs/version-2.2.0/06-concepts/06-database/03-relations/04-self-relations.md","sourceDirName":"06-concepts/06-database/03-relations","slug":"/concepts/database/relations/self-relations","permalink":"/2.2.0/concepts/database/relations/self-relations","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.2.0/06-concepts/06-database/03-relations/04-self-relations.md","tags":[],"version":"2.2.0","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Many-to-many","permalink":"/2.2.0/concepts/database/relations/many-to-many"},"next":{"title":"Referential actions","permalink":"/2.2.0/concepts/database/relations/referential-actions"}}');var o=t(74848),i=t(28453);const s={},r="Self-relations",l={},c=[{value:"One-to-one",id:"one-to-one",level:2},{value:"One-to-many",id:"one-to-many",level:2},{value:"Many-to-many",id:"many-to-many",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"self-relations",children:"Self-relations"})}),"\n",(0,o.jsx)(n.p,{children:"A self-referential or self-relation occurs when a table has a foreign key that references its own primary key within the same table. This creates a relationship between different rows within the same table."}),"\n",(0,o.jsx)(n.h2,{id:"one-to-one",children:"One-to-one"}),"\n",(0,o.jsx)(n.p,{children:"Imagine we have a blog and want to create links between our posts, where you can traverse forward and backward in the post history. Then we can create a self-referencing relation pointing to the next post in the chain."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: Post\ntable: post\nfields:\n  content: String\n  previous: Post?, relation(name=next_previous_post)\n  nextId: int?\n  next: Post?, relation(name=next_previous_post, field=nextId, onDelete=SetNull)\nindexes:\n  next_unique_idx:\n    fields: nextId\n    unique: true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, there is a named relation holding the data on both sides of the relation. The field ",(0,o.jsx)(n.code,{children:"nextId"}),' is a nullable field that stores the id of the next post. It is nullable as it would be impossible to create the first entry if we already needed to have a post created. The next post represents the object on "this" side while the previous post is the corresponding object on the "other" side. Meaning that the previous post is connected to the ',(0,o.jsx)(n.code,{children:"nextId"})," of the post that came before it."]}),"\n",(0,o.jsx)(n.h2,{id:"one-to-many",children:"One-to-many"}),"\n",(0,o.jsxs)(n.p,{children:["In a one-to-many self-referenced relation there is one object field connected to a list field. In this example we have modeled the relationship between a cat and her potential kittens. Each cat has at most ",(0,o.jsx)(n.code,{children:"one"})," mother but can have ",(0,o.jsx)(n.code,{children:"n"})," kittens, for brevity, we have only modeled the mother."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: Cat\ntable: cat\nfields:\n  name: String\n  mother: Cat?, relation(name=cat_kittens, optional, onDelete=SetNull)\n  kittens: List<Cat>?, relation(name=cat_kittens)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The field ",(0,o.jsx)(n.code,{children:"motherId: int?"})," is injected into the dart class, the field is nullable since we marked the field ",(0,o.jsx)(n.code,{children:"mother"})," as an ",(0,o.jsx)(n.code,{children:"optional"})," relation. We can now find all the kittens by looking at the ",(0,o.jsx)(n.code,{children:"motherId"})," of other cats which should match the ",(0,o.jsx)(n.code,{children:"id"})," field of the current cat. The other cat can instead be found by looking at the ",(0,o.jsx)(n.code,{children:"motherId"})," of the current cat and matching it against one other cat ",(0,o.jsx)(n.code,{children:"id"})," field."]}),"\n",(0,o.jsx)(n.h2,{id:"many-to-many",children:"Many-to-many"}),"\n",(0,o.jsx)(n.p,{children:"Let's imagine we have a system where we have members that can block other members. We would like to be able to query who I'm blocking and who is blocking me. This can be achieved by modeling the data as a many-to-many relation ship."}),"\n",(0,o.jsx)(n.p,{children:"Each member has a list of all other members they are blocking and another list of all members that are blocking them. But since the list side needs to point to a foreign key and cannot point to another list directly, we have to define a junction table that holds the connection between the rows."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: Member\ntable: member\nfields:\n  name: String\n  blocking: List<Blocking>?, relation(name=member_blocked_by_me)\n  blockedBy: List<Blocking>?, relation(name=member_blocking_me)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"class: Blocking\ntable: blocking\nfields:\n  blocked: Member?, relation(name=member_blocking_me, onDelete=Cascade)\n  blockedBy: Member?, relation(name=member_blocked_by_me, onDelete=Cascade)\nindexes:\n  blocking_blocked_unique_idx:\n    fields: blockedId, blockedById\n    unique: true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The junction table has an entry for who is blocking and another for who is getting blocked. Notice that the ",(0,o.jsx)(n.code,{children:"blockedBy"})," field in the junction table is linked to the ",(0,o.jsx)(n.code,{children:"blocking"})," field in the member table. We have also added a combined unique constraint on both the ",(0,o.jsx)(n.code,{children:"blockedId"})," and ",(0,o.jsx)(n.code,{children:"blockedById"}),", this makes sure we only ever have one entry per relation, meaning I can only block one other member one time."]}),"\n",(0,o.jsx)(n.p,{children:"The cascade delete means that if a member is deleted all the blocking entries are also removed for that member."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);