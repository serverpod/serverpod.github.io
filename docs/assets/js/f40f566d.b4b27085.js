"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[86324],{60541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"concepts/testing/best-practises","title":"Best practises","description":"Imports","source":"@site/versioned_docs/version-2.2.0/06-concepts/18-testing/04-best-practises.md","sourceDirName":"06-concepts/18-testing","slug":"/concepts/testing/best-practises","permalink":"/2.2.0/concepts/testing/best-practises","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.2.0/06-concepts/18-testing/04-best-practises.md","tags":[],"version":"2.2.0","sidebarPosition":4,"frontMatter":{"toc_max_heading_level":2},"sidebar":"tutorialSidebar","previous":{"title":"Advanced examples","permalink":"/2.2.0/concepts/testing/advanced-examples"},"next":{"title":"Experimental features","permalink":"/2.2.0/concepts/experimental"}}');var i=t(74848),o=t(28453);const d={toc_max_heading_level:2},r="Best practises",a={},l=[{value:"Imports",id:"imports",level:2},{value:"Don&#39;t",id:"dont",level:3},{value:"Do",id:"do",level:3},{value:"Database clean up",id:"database-clean-up",level:3},{value:"Don&#39;t",id:"dont-1",level:3},{value:"Do",id:"do-1",level:3},{value:"Calling endpoints",id:"calling-endpoints",level:2},{value:"Don&#39;t",id:"dont-2",level:3},{value:"Do",id:"do-2",level:3},{value:"Unit and integration tests",id:"unit-and-integration-tests",level:2},{value:"Don&#39;t",id:"dont-3",level:3},{value:"Do",id:"do-3",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"best-practises",children:"Best practises"})}),"\n",(0,i.jsx)(n.h2,{id:"imports",children:"Imports"}),"\n",(0,i.jsxs)(n.p,{children:["While it's possible to import types and test helpers from the ",(0,i.jsx)(n.code,{children:"serverpod_test"}),", it's completely redundant. The generated file exports everything that is needed. Adding an additional import is just unnecessary noise and will likely also be flagged as duplicated imports by the Dart linter."]}),"\n",(0,i.jsx)(n.h3,{id:"dont",children:"Don't"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"import 'serverpod_test_tools.dart';\n// Don't import `serverpod_test` directly.\nimport 'package:serverpod_test/serverpod_test.dart'; \u274c  \n"})}),"\n",(0,i.jsx)(n.h3,{id:"do",children:"Do"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"// Only import the generated test tools file.\n// It re-exports all helpers and types that are needed.\nimport 'serverpod_test_tools.dart'; \u2705 \n"})}),"\n",(0,i.jsx)(n.h3,{id:"database-clean-up",children:"Database clean up"}),"\n",(0,i.jsxs)(n.p,{children:["Unless configured otherwise, by default ",(0,i.jsx)(n.code,{children:"withServerpod"})," does all database operations inside a transaction that is rolled back after each ",(0,i.jsx)(n.code,{children:"test"})," (see ",(0,i.jsx)(n.a,{href:"the-basics#rollback-database-configuration",children:"the configuration options"})," for more info on this behavior)."]}),"\n",(0,i.jsx)(n.h3,{id:"dont-1",children:"Don't"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"withServerpod('Given ProductsEndpoint', (sessionBuilder, endpoints) {\n  var session = sessionBuilder.build();\n\n  setUp(() async {\n    await Product.db.insertRow(session, Product(name: 'Apple', price: 10));\n  });\n\n  tearDown(() async {   \n    await Product.db.deleteWhere( \u274c // Unnecessary clean up\n      session,\n      where: (_) => Constant.bool(true),\n    );\n  });\n\n  // ...\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"do-1",children:"Do"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"withServerpod('Given ProductsEndpoint', (sessionBuilder, endpoints) {\n  var session = sessionBuilder.build();\n\n  setUp(() async {\n    await Product.db.insertRow(session, Product(name: 'Apple', price: 10));\n  });\n\n  \u2705  // Clean up can be omitted since the transaction is rolled back after each by default\n\n  // ...\n}); \n"})}),"\n",(0,i.jsx)(n.h2,{id:"calling-endpoints",children:"Calling endpoints"}),"\n",(0,i.jsxs)(n.p,{children:["While it's technically possible to instantiate an endpoint class and call its methods directly with a Serverpod ",(0,i.jsx)(n.code,{children:"Session"}),", it's advised that you do not. The reason is that lifecycle events and validation that should happen before or after an endpoint method is called is taken care of by the framework. Calling endpoint methods directly would circumvent that and the code would not behave like production code. Using the test tools guarantees that the way endpoints behave during tests is the same as in production."]}),"\n",(0,i.jsx)(n.h3,{id:"dont-2",children:"Don't"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"void main() {\n  // \u274c Don't instantiate endpoints directly\n  var exampleEndpoint = ExampleEndpoint();\n\n  withServerpod('Given Example endpoint', (\n    sessionBuilder,\n    _ /* not using the provided endpoints */,\n  ) {\n    var session = sessionBuilder.build();\n\n    test('when calling `hello` then should return greeting', () async {\n      // \u274c Don't call and endpoint method directly on the endpoint class.\n      final greeting = await exampleEndpoint.hello(session, 'Michael'); \n      expect(greeting, 'Hello, Michael!');\n    });\n  });\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"do-2",children:"Do"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"void main() {\n  withServerpod('Given Example endpoint', (sessionBuilder, endpoints) {\n    var session = sessionBuilder.build();\n\n    test('when calling `hello` then should return greeting', () async {\n      // \u2705 Use the provided `endpoints` to call the endpoint that should be tested.\n      final greeting =\n          await endpoints.example.hello(session, 'Michael');\n      expect(greeting, 'Hello, Michael!');\n    });\n  });\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"unit-and-integration-tests",children:"Unit and integration tests"}),"\n",(0,i.jsx)(n.p,{children:"It is significantly easier to navigate a project if the different types of tests are clearly separated."}),"\n",(0,i.jsx)(n.h3,{id:"dont-3",children:"Don't"}),"\n",(0,i.jsx)(n.p,{children:"\u274c Mix different types of tests together."}),"\n",(0,i.jsx)(n.h3,{id:"do-3",children:"Do"}),"\n",(0,i.jsxs)(n.p,{children:["\u2705 Have a clear structure for the different types of test. Serverpod recommends the following two folders in the ",(0,i.jsx)(n.code,{children:"server"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test/unit"}),": Unit tests."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test/integration"}),": Tests for endpoints or business logic modules using the ",(0,i.jsx)(n.code,{children:"withServerpod"})," helper."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);