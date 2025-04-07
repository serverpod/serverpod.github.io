"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[37270],{9434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"concepts/testing/advanced-examples","title":"Advanced examples","description":"Run unit and integration tests separately","source":"@site/versioned_docs/version-2.5.0/06-concepts/19-testing/03-advanced-examples.md","sourceDirName":"06-concepts/19-testing","slug":"/concepts/testing/advanced-examples","permalink":"/concepts/testing/advanced-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.5.0/06-concepts/19-testing/03-advanced-examples.md","tags":[],"version":"2.5.0","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"The basics","permalink":"/concepts/testing/the-basics"},"next":{"title":"Best practises","permalink":"/concepts/testing/best-practises"}}');var i=t(74848),a=t(28453);const r={},o="Advanced examples",d={},c=[{value:"Run unit and integration tests separately",id:"run-unit-and-integration-tests-separately",level:2},{value:"Test business logic that depends on <code>Session</code>",id:"test-business-logic-that-depends-on-session",level:2},{value:"Multiple users interacting with a shared stream",id:"multiple-users-interacting-with-a-shared-stream",level:2},{value:"Optimising number of database connections",id:"optimising-number-of-database-connections",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"advanced-examples",children:"Advanced examples"})}),"\n",(0,i.jsx)(n.h2,{id:"run-unit-and-integration-tests-separately",children:"Run unit and integration tests separately"}),"\n",(0,i.jsxs)(n.p,{children:["To run unit and integration tests separately, the ",(0,i.jsx)(n.code,{children:'"integration"'})," tag can be used as a filter. See the following examples:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# All tests (unit and integration)\ndart test\n\n# Only integration tests: add --tags (-t) flag\ndart test -t integration\n\n# Only unit tests: add --exclude-tags (-x) flag\ndart test -x integration\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To change the name of this tag, see the ",(0,i.jsx)(n.a,{href:"the-basics#configuration",children:(0,i.jsx)(n.code,{children:"testGroupTagsOverride"})})," configuration option."]}),"\n",(0,i.jsxs)(n.h2,{id:"test-business-logic-that-depends-on-session",children:["Test business logic that depends on ",(0,i.jsx)(n.code,{children:"Session"})]}),"\n",(0,i.jsxs)(n.p,{children:["It is common to break out business logic into modules and keep it separate from the endpoints. If such a module depends on a ",(0,i.jsx)(n.code,{children:"Session"})," object (e.g to interact with the database), then the ",(0,i.jsx)(n.code,{children:"withServerpod"})," helper can still be used and the second ",(0,i.jsx)(n.code,{children:"endpoint"})," argument can simply be ignored:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"withServerpod('Given decreasing product quantity when quantity is zero', (\n  sessionBuilder,\n  _,\n) {\n  var session = sessionBuilder.build();\n\n  setUp(() async {\n    await Product.db.insertRow(session, [\n      Product(\n        id: 123,\n        name: 'Apple',\n        quantity: 0,\n      ),\n    ]);\n  });\n\n  test('then should throw `InvalidOperationException`',\n      () async {\n    var future = ProductsBusinessLogic.updateQuantity(\n      session,\n      id: 123,\n      decrease: 1,\n    );\n\n    await expectLater(future, throwsA(isA<InvalidOperationException>()));\n  });\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"multiple-users-interacting-with-a-shared-stream",children:"Multiple users interacting with a shared stream"}),"\n",(0,i.jsx)(n.p,{children:"For cases where there are multiple users reading from or writing to a stream, such as real-time communication, it can be helpful to validate this behavior in tests."}),"\n",(0,i.jsx)(n.p,{children:"Given the following simplified endpoint:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class CommunicationExampleEndpoint {\n  static const sharedStreamName = 'shared-stream';\n  Future<void> postNumberToSharedStream(Session session, int number) async {\n    await session.messages\n        .postMessage(sharedStreamName, SimpleData(num: number));\n  }\n\n  Stream<int> listenForNumbersOnSharedStream(Session session) async* {\n    var sharedStream =\n        session.messages.createStream<SimpleData>(sharedStreamName);\n\n    await for (var message in sharedStream) {\n      yield message.num;\n    }\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then a test to verify this behavior can be written as below. Note the call to the ",(0,i.jsx)(n.code,{children:"flushEventQueue"})," helper (exported by the test tools), which ensures that ",(0,i.jsx)(n.code,{children:"listenForNumbersOnSharedStream"})," executes up to its first ",(0,i.jsx)(n.code,{children:"yield"})," statement before continuing with the test. This guarantees that the stream was registered by Serverpod before messages are posted to it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"withServerpod('Given CommunicationExampleEndpoint', (sessionBuilder, endpoints) {\n  const int userId1 = 1;\n  const int userId2 = 2;\n\n  test(\n      'when calling postNumberToSharedStream and listenForNumbersOnSharedStream '\n      'with different sessions then number should be echoed',\n      () async {\n    var userSession1 = sessionBuilder.copyWith(\n      authentication: AuthenticationOverride.authenticationInfo(\n        userId1,\n        {},\n      ),\n    );\n    var userSession2 = sessionBuilder.copyWith(\n      authentication: AuthenticationOverride.authenticationInfo(\n        userId2,\n        {},\n      ),\n    );\n\n    var stream =\n        endpoints.testTools.listenForNumbersOnSharedStream(userSession1);\n    // Wait for `listenForNumbersOnSharedStream` to execute up to its \n    // `yield` statement before continuing\n    await flushEventQueue(); \n\n    await endpoints.testTools.postNumberToSharedStream(userSession2, 111);\n    await endpoints.testTools.postNumberToSharedStream(userSession2, 222);\n\n    await expectLater(stream.take(2), emitsInOrder([111, 222]));\n  });\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"optimising-number-of-database-connections",children:"Optimising number of database connections"}),"\n",(0,i.jsx)(n.p,{children:"By default, Dart's test runner runs tests concurrently. The number of concurrent tests depends on the running hosts' available CPU cores. If the host has a lot of cores it could trigger a case where the number of connections to the database exceeeds the maximum connections limit set for the database, which will cause tests to fail."}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"withServerpod"})," call will lazily create its own Serverpod instance which will connect to the database. Specifically, the code that causes the Serverpod instance to be created is ",(0,i.jsx)(n.code,{children:"sessionBuilder.build()"}),", which happens at the latest in an endpoint call if not called by the test before."]}),"\n",(0,i.jsxs)(n.p,{children:["If a test needs a session before the endpoint call (e.g. to seed the database), ",(0,i.jsx)(n.code,{children:"sessionBuilder.build()"})," has to be called which then triggers a database connection attempt."]}),"\n",(0,i.jsx)(n.p,{children:"If the max connection limit is hit, there are two options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Raise the max connections limit on the database."}),"\n",(0,i.jsxs)(n.li,{children:["Build out the session in ",(0,i.jsx)(n.code,{children:"setUp"}),"/",(0,i.jsx)(n.code,{children:"setUpAll"})," instead of the top level scope:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"withServerpod('Given example test', (sessionBuilder, endpoints) {\n  // Instead of this\n  var session = sessionBuilder.build();\n\n\n  // Do this to postpone connecting to the database until the test group is running\n  late Session session;\n  setUpAll(() {\n    session = sessionBuilder.build();\n  });\n  // ...\n});\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This case should be rare and the above example is not a recommended best practice unless this problem is anticipated, or it has started happening."})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);