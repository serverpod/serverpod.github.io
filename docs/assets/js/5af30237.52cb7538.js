"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[23452],{53672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"concepts/database/relations/many-to-many","title":"Many-to-Many","description":"Many-to-many (n:m) relationships describes a scenario where multiple records from a table can relate to multiple records in another table. An example of this would be the relationship between students and courses, where a single student can enroll in multiple courses, and a single course can have multiple students.","source":"@site/versioned_docs/version-1.2.0/05-concepts/06-database/03-relations/03-many-to-many.md","sourceDirName":"05-concepts/06-database/03-relations","slug":"/concepts/database/relations/many-to-many","permalink":"/1.2.0/concepts/database/relations/many-to-many","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/06-database/03-relations/03-many-to-many.md","tags":[],"version":"1.2.0","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"One-to-many","permalink":"/1.2.0/concepts/database/relations/one-to-many"},"next":{"title":"Self-relations","permalink":"/1.2.0/concepts/database/relations/self-relations"}}');var a=t(74848),o=t(28453);const l={},r="Many-to-Many",i={},d=[{value:"Overview",id:"overview",level:2},{value:"Defining the Relationship",id:"defining-the-relationship",level:2},{value:"Many tables",id:"many-tables",level:3},{value:"Junction Table",id:"junction-table",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"many-to-many",children:"Many-to-Many"})}),"\n",(0,a.jsxs)(n.p,{children:["Many-to-many (n",":m",") relationships describes a scenario where multiple records from a table can relate to multiple records in another table. An example of this would be the relationship between students and courses, where a single student can enroll in multiple courses, and a single course can have multiple students."]}),"\n",(0,a.jsx)(n.p,{children:"The Serverpod framework supports these complex relationships by explicitly creating a separate model, often called a junction or bridge table, that records the relation."}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["In the context of many-to-many relationships, neither table contains a direct reference to the other. Instead, a separate table holds the foreign keys of both tables. This setup allows for a flexible and normalized approach to represent n",":m"," relationships."]}),"\n",(0,a.jsxs)(n.p,{children:["Modeling the relationship between ",(0,a.jsx)(n.code,{children:"Student"})," and ",(0,a.jsx)(n.code,{children:"Course"}),", we would create an ",(0,a.jsx)(n.code,{children:"Enrollment"})," model as a junction table to store the relationship explicitly."]}),"\n",(0,a.jsx)(n.h2,{id:"defining-the-relationship",children:"Defining the Relationship"}),"\n",(0,a.jsxs)(n.p,{children:["In the following examples we show how to configure a n",":m"," relationship between ",(0,a.jsx)(n.code,{children:"Student"})," and ",(0,a.jsx)(n.code,{children:"Course"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"many-tables",children:"Many tables"}),"\n",(0,a.jsxs)(n.p,{children:["Both the ",(0,a.jsx)(n.code,{children:"Course"})," and ",(0,a.jsx)(n.code,{children:"Student"})," tables have a direct relationship with the ",(0,a.jsx)(n.code,{children:"Enrollment"})," table but no direct relationship with each other."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# course.yaml\nclass: Course\ntable: course\nfields:\n  name: String\n  enrollments: List<Enrollment>?, relation(name=course_enrollments)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# student.yaml\nclass: Student\ntable: student\nfields:\n  name: String\n  enrollments: List<Enrollment>?, relation(name=student_enrollments)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the ",(0,a.jsx)(n.code,{children:"name"})," argument is different, ",(0,a.jsx)(n.code,{children:"course_enrollments"})," and ",(0,a.jsx)(n.code,{children:"student_enrollments"}),", for the many tables. This is because each row in the junction table holds a relation to both many tables, ",(0,a.jsx)(n.code,{children:"Course"})," and ",(0,a.jsx)(n.code,{children:"Student"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"junction-table",children:"Junction Table"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Enrollment"})," table acts as the bridge between ",(0,a.jsx)(n.code,{children:"Course"})," and ",(0,a.jsx)(n.code,{children:"Student"}),". It contains foreign keys from both tables, representing the many-to-many relationship."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# enrollment.yaml\nclass: Enrollment\ntable: enrollment\nfields:\n  student: Student?, relation(name=student_enrollments)\n  course: Course?, relation(name=course_enrollments)\nindexes:\n  enrollment_index_idx:\n    fields: studentId, courseId\n    unique: true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The unique index on the combination of ",(0,a.jsx)(n.code,{children:"studentId"})," and ",(0,a.jsx)(n.code,{children:"courseId"})," ensures that a student can only be enrolled in a particular course once. If omitted a student would be allowed to be enrolled in the same course multiple times."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);