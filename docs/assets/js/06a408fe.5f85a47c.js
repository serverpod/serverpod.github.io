"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[8349],{79736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"concepts/database/filter","title":"Filter","description":"Serverpod makes it easy to build expressions that are statically type-checked. Columns and relational fields are referenced using table descriptor objects. The table descriptors, t, are accessible from each model and are passed as an argument to a model specific expression builder function. A callback is then used as argument to the where parameter when fetching data from the database.","source":"@site/versioned_docs/version-2.1.0/06-concepts/06-database/06-filter.md","sourceDirName":"06-concepts/06-database","slug":"/concepts/database/filter","permalink":"/2.1.0/concepts/database/filter","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/06-concepts/06-database/06-filter.md","tags":[],"version":"2.1.0","sidebarPosition":6,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CRUD","permalink":"/2.1.0/concepts/database/crud"},"next":{"title":"Relation queries","permalink":"/2.1.0/concepts/database/relation-queries"}}');var r=t(74848),s=t(28453);const i={},l="Filter",o={},d=[{value:"Column operations",id:"column-operations",level:2},{value:"Equals",id:"equals",level:3},{value:"Comparison operators",id:"comparison-operators",level:3},{value:"Between",id:"between",level:3},{value:"In set",id:"in-set",level:3},{value:"Like",id:"like",level:3},{value:"ilike",id:"ilike",level:3},{value:"Logical operators",id:"logical-operators",level:3},{value:"Relation operations",id:"relation-operations",level:2},{value:"One-to-one",id:"one-to-one",level:3},{value:"One-to-many",id:"one-to-many",level:3},{value:"Count",id:"count",level:4},{value:"None",id:"none",level:4},{value:"Any",id:"any",level:4},{value:"Every",id:"every",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"filter",children:"Filter"})}),"\n",(0,r.jsxs)(n.p,{children:["Serverpod makes it easy to build expressions that are statically type-checked. Columns and relational fields are referenced using table descriptor objects. The table descriptors, ",(0,r.jsx)(n.code,{children:"t"}),", are accessible from each model and are passed as an argument to a model specific expression builder function. A callback is then used as argument to the ",(0,r.jsx)(n.code,{children:"where"})," parameter when fetching data from the database."]}),"\n",(0,r.jsx)(n.h2,{id:"column-operations",children:"Column operations"}),"\n",(0,r.jsx)(n.p,{children:"The following column operations are supported in Serverpod, each column datatype supports a different set of operations that make sense for that type."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"When using the operators, it's a good practice to place them within a set of parentheses as the precedence rules are not always what would be expected."})}),"\n",(0,r.jsx)(n.h3,{id:"equals",children:"Equals"}),"\n",(0,r.jsx)(n.p,{children:"Compare a column to an exact value, meaning only rows that match exactly will remain in the result."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.equals('Alice')\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users with the name Alice."}),"\n",(0,r.jsx)(n.p,{children:"Not equals is the negated version of equals."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.notEquals('Bob')\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example we fetch all users with a name that is not Bob. If a non-",(0,r.jsx)(n.code,{children:"null"})," value is used as an argument for the notEquals comparison, rows with a ",(0,r.jsx)(n.code,{children:"null"})," value in the column will be included in the result."]}),"\n",(0,r.jsx)(n.h3,{id:"comparison-operators",children:"Comparison operators"}),"\n",(0,r.jsxs)(n.p,{children:["Compare a column to a value, these operators are support for ",(0,r.jsx)(n.code,{children:"int"}),", ",(0,r.jsx)(n.code,{children:"double"}),", ",(0,r.jsx)(n.code,{children:"Duration"}),", and ",(0,r.jsx)(n.code,{children:"DateTime"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.age > 25\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users that are older than 25 years old."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.age >= 25\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch users that are 25 years old or older."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.age < 25\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users that are younger than 25 years old."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.age <= 25\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users that are 25 years old or younger."}),"\n",(0,r.jsx)(n.h3,{id:"between",children:"Between"}),"\n",(0,r.jsxs)(n.p,{children:["The between method takes two values and checks if the columns value is between the two input variables ",(0,r.jsx)(n.em,{children:"inclusively"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.age.between(18, 65)\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example we fetch all users between 18 and 65 years old. This can also be expressed as ",(0,r.jsx)(n.code,{children:"(t.age >= 18) & (t.age <= 65)"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The 'not between' operation functions similarly to 'between' but it negates the condition. It also works inclusively with the boundaries."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.age.notBetween(18, 65)\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example we fetch all users that are not between 18 and 65 years old. This can also be expressed as ",(0,r.jsx)(n.code,{children:"(t.age < 18) | (t.age > 65)"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"in-set",children:"In set"}),"\n",(0,r.jsxs)(n.p,{children:["In set can be used to match with several values at once. This method functions the same as equals but for multiple values, ",(0,r.jsx)(n.code,{children:"inSet"})," will make an exact comparison."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.inSet({'Alice', 'Bob'})\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users with a name matching either Alice or Bob. If an empty set is used as an argument for the inSet comparison, no rows will be included in the result."}),"\n",(0,r.jsxs)(n.p,{children:["The 'not in set' operation functions similarly to ",(0,r.jsx)(n.code,{children:"inSet"}),", but it negates the condition."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.notInSet({'Alice', 'Bob'})\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example we fetch all users with a name not matching Alice or Bob. Rows with a ",(0,r.jsx)(n.code,{children:"null"})," value in the column will be included in the result. If an empty set is used as an argument for the notInSet comparison, all rows will be included in the result."]}),"\n",(0,r.jsx)(n.h3,{id:"like",children:"Like"}),"\n",(0,r.jsxs)(n.p,{children:["Like can be used to perform match searches against ",(0,r.jsx)(n.code,{children:"String"})," entries in the database, this matcher is case-sensitive. This is useful when matching against partial entries."]}),"\n",(0,r.jsx)(n.p,{children:"Two special characters enables matching against partial entries."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"%"})})," Matching any sequence of character."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"_"})})," Matching any single character."]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"String"}),(0,r.jsx)(n.th,{children:"\xa0Matcher"}),(0,r.jsx)(n.th,{children:"Is matching"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"abc"}),(0,r.jsx)(n.td,{children:"\xa0a%\xa0"}),(0,r.jsx)(n.td,{children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xa0abc"}),(0,r.jsx)(n.td,{children:"_b%"}),(0,r.jsx)(n.td,{children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"abc"}),(0,r.jsx)(n.td,{children:"a_c"}),(0,r.jsx)(n.td,{children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"abc"}),(0,r.jsx)(n.td,{children:"b_"}),(0,r.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"We use like to match against a partial string."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.like('A%')\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users with a name that starts with A."}),"\n",(0,r.jsx)(n.p,{children:"There is a negated version of like that can be used to exclude rows from the result."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.notLike('B%')\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users with a name that does not start with B."}),"\n",(0,r.jsx)(n.h3,{id:"ilike",children:"ilike"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ilike"})," works the same as ",(0,r.jsx)(n.code,{children:"like"})," but is case-insensitive."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.ilike('a%')\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users with a name that starts with a or A."}),"\n",(0,r.jsxs)(n.p,{children:["There is a negated version of ",(0,r.jsx)(n.code,{children:"ilike"})," that can be used to exclude rows from the result."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.name.notIlike('b%')\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users with a name that does not start with b or B."}),"\n",(0,r.jsx)(n.h3,{id:"logical-operators",children:"Logical operators"}),"\n",(0,r.jsx)(n.p,{children:"Logical operators are also supported when filtering, allowing you to chain multiple statements together to create more complex queries."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"&"})," operator is used to chain two statements together with an ",(0,r.jsx)(n.code,{children:"and"})," operation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => (t.name.equals('Alice') & (t.age > 25))\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:['In the example we fetch all users with the name "Alice" ',(0,r.jsx)(n.em,{children:"and"})," are older than 25."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"|"})," operator is used to chain two statements together with an ",(0,r.jsx)(n.code,{children:"or"})," operation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => (t.name.like('A%') | t.name.like('B%'))\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example we fetch all users that has a name that starts with A ",(0,r.jsx)(n.em,{children:"or"})," B."]}),"\n",(0,r.jsx)(n.h2,{id:"relation-operations",children:"Relation operations"}),"\n",(0,r.jsxs)(n.p,{children:["If a relation between two models is defined a ",(0,r.jsx)(n.a,{href:"relations/one-to-one",children:"one-to-one"})," or ",(0,r.jsx)(n.a,{href:"relations/one-to-many",children:"one-to-many"})," object relation, then relation operations are supported in Serverpod."]}),"\n",(0,r.jsx)(n.h3,{id:"one-to-one",children:"One-to-one"}),"\n",(0,r.jsx)(n.p,{children:"For 1:1 relations the columns of the relation can be accessed directly on the relation field. This enables filtering on related objects properties."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.address.street.like('%road%')\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:'In the example each user has a relation to an address that has a street field. Using relation operations we then fetch all users where the related address has a street that contains the word "road".'}),"\n",(0,r.jsx)(n.h3,{id:"one-to-many",children:"One-to-many"}),"\n",(0,r.jsxs)(n.p,{children:["For 1",":n"," relations, there are special filter methods where you can create sub-filters on all the related data. With them, you can answer questions on the aggregated result on many relations."]}),"\n",(0,r.jsx)(n.h4,{id:"count",children:"Count"}),"\n",(0,r.jsxs)(n.p,{children:["Count can be used to count the number of related entries in a 1",":n"," relation. The ",(0,r.jsx)(n.code,{children:"count"})," always needs to be compared with a static value."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.orders.count() > 3\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users with more than three orders."}),"\n",(0,r.jsxs)(n.p,{children:["We can apply a sub-filter to the ",(0,r.jsx)(n.code,{children:"count"})," operator filter the related entries before they are counted."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.orders.count((o) => o.itemType.equals('book')) > 3\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:'In the example we fetch all users with more than three "book" orders.'}),"\n",(0,r.jsx)(n.h4,{id:"none",children:"None"}),"\n",(0,r.jsxs)(n.p,{children:["None can be used to retrieve rows that have no related entries in a 1",":n"," relation. Meaning if there exists a related entry then the row is omitted from the result. The operation is useful if you want to ensure that a many relation does not contain any related rows."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.orders.none()\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users that have no orders."}),"\n",(0,r.jsxs)(n.p,{children:["We can apply a sub-filter to the ",(0,r.jsx)(n.code,{children:"none"})," operator to filter the related entries. Meaning if there is a match in the sub-filter the row will be omitted from the result."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where:((t) => t.orders.none((o) => o.itemType.equals('book')))\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:'In the example we fetch all users that have no "book" orders.'}),"\n",(0,r.jsx)(n.h4,{id:"any",children:"Any"}),"\n",(0,r.jsxs)(n.p,{children:["Any works similarly to the ",(0,r.jsx)(n.code,{children:"any"})," method on lists in Dart. If there exists any related entry then include the row in the result."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.orders.any()\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the example we fetch all users that have any order."}),"\n",(0,r.jsxs)(n.p,{children:["We can apply a sub-filter to the ",(0,r.jsx)(n.code,{children:"any"})," operator to filter the related entries. Meaning if there is a match in the sub-filter the row will be included in the result."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where:((t) => t.orders.any((o) => o.itemType.equals('book')))\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:'In the example we fetch all users that have any "book" order.'}),"\n",(0,r.jsx)(n.h4,{id:"every",children:"Every"}),"\n",(0,r.jsxs)(n.p,{children:["Every works similarly to the ",(0,r.jsx)(n.code,{children:"every"})," method on lists in Dart. If every related entry matches the sub-filter then include the row in the result. For the ",(0,r.jsx)(n.code,{children:"every"})," operator the sub-filter is mandatory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"await User.db.find(\n  where: (t) => t.orders.every((o) => o.itemType.equals('book'))\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:'In the example we fetch all users that have only "book" orders.'})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);