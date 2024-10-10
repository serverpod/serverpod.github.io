"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[64431],{33336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var s=n(85893),i=n(11151);const a={},l="The basics",d={id:"concepts/testing/the-basics",title:"The basics",description:"Set up a test scenario",source:"@site/docs/06-concepts/18-testing/02-the-basics.md",sourceDirName:"06-concepts/18-testing",slug:"/concepts/testing/the-basics",permalink:"/next/concepts/testing/the-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/18-testing/02-the-basics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/next/concepts/testing/get-started"},next:{title:"Advanced examples",permalink:"/next/concepts/testing/advanced-examples"}},r={},o=[{value:"Set up a test scenario",id:"set-up-a-test-scenario",level:2},{value:"Setting authenticated state",id:"setting-authenticated-state",level:3},{value:"Seeding the database",id:"seeding-the-database",level:3},{value:"Environment",id:"environment",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>rollbackDatabase</code>",id:"rollback-database-configuration",level:3},{value:"<code>runMode</code>",id:"runmode",level:3},{value:"<code>enableSessionLogging</code>",id:"enablesessionlogging",level:3},{value:"<code>applyMigrations</code>",id:"applymigrations",level:3},{value:"Test exceptions",id:"test-exceptions",level:2},{value:"Test helpers",id:"test-helpers",level:2},{value:"<code>flushEventQueue</code>",id:"flusheventqueue",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"the-basics",children:"The basics"})}),"\n",(0,s.jsx)(t.h2,{id:"set-up-a-test-scenario",children:"Set up a test scenario"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"withServerpod"})," helper provides a ",(0,s.jsx)(t.code,{children:"sessionBuilder"})," that helps with setting up different scenarios for tests. To modify the session builder's properties, call its ",(0,s.jsx)(t.code,{children:"copyWith"})," method. It takes the following named parameters:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Default"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"authentication"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"AuthenticationOverride?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"AuthenticationOverride.unauthenticated()"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["See section ",(0,s.jsx)(t.a,{href:"#setting-authenticated-state",children:"Setting authenticated state"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"enableLogging"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"bool?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Wether logging is turned on for the session."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"copyWith"})," method creates a new unique session builder with the provided properties. This can then be used in endpoint calls (see section ",(0,s.jsx)(t.a,{href:"#setting-authenticated-state",children:"Setting authenticated state"})," for an example)."]}),"\n",(0,s.jsxs)(t.p,{children:["To build out a ",(0,s.jsx)(t.code,{children:"Session"})," (to use for ",(0,s.jsx)(t.a,{href:"#seeding-the-database",children:"database calls"})," or ",(0,s.jsx)(t.a,{href:"advanced-examples#test-business-logic-that-depends-on-session",children:"pass on to functions"}),"), simply call the ",(0,s.jsx)(t.code,{children:"build"})," method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Session session = sessionBuilder.build();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Given the properties set on the session builder through the ",(0,s.jsx)(t.code,{children:"copyWith"})," method, this returns a Serverpod ",(0,s.jsx)(t.code,{children:"Session"})," that has the corresponding state."]}),"\n",(0,s.jsx)(t.h3,{id:"setting-authenticated-state",children:"Setting authenticated state"}),"\n",(0,s.jsxs)(t.p,{children:["To control the authenticated state of the session, the ",(0,s.jsx)(t.code,{children:"AuthenticationOverride"})," class can be used."]}),"\n",(0,s.jsxs)(t.p,{children:["To create an unauthenticated override (this is the default value for new sessions), call ",(0,s.jsx)(t.code,{children:"AuthenticationOverride unauthenticated()"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"static AuthenticationOverride unauthenticated();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To create an authenticated override, call ",(0,s.jsx)(t.code,{children:"AuthenticationOverride.authenticationInfo(...)"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"static AuthenticationOverride authenticationInfo(\n  int userId,\n  Set<Scope> scopes, {\n  String? authId,\n})\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Pass these to ",(0,s.jsx)(t.code,{children:"sessionBuilder.copyWith"})," to simulate different scenarios. Below follows an example for each case:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"withServerpod('Given AuthenticatedExample endpoint', (sessionBuilder, endpoints) {\n  // Corresponds to an actual user id\n  const int userId = 1234;\n\n  group('when authenticated', () {\n    var authenticatedSessionBuilder = sessionBuilder.copyWith(\n      authentication:\n          AuthenticationOverride.authenticationInfo(userId, {Scope('user')}),\n    );\n\n    test('then calling `hello` should return greeting', () async {\n      final greeting = await endpoints.authenticatedExample\n          .hello(authenticatedSessionBuilder, 'Michael');\n      expect(greeting, 'Hello, Michael!');\n    });\n  });\n\n  group('when unauthenticated', () {\n    var unauthenticatedSessionBuilder = sessionBuilder.copyWith(\n      authentication: AuthenticationOverride.unauthenticated(),\n    );\n\n    test(\n        'then calling `hello` should throw `ServerpodUnauthenticatedException`',\n        () async {\n      final future = endpoints.authenticatedExample\n          .hello(unauthenticatedSessionBuilder, 'Michael');\n      await expectLater(\n          future, throwsA(isA<ServerpodUnauthenticatedException>()));\n    });\n  });\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"seeding-the-database",children:"Seeding the database"}),"\n",(0,s.jsxs)(t.p,{children:["To seed the database before tests, ",(0,s.jsx)(t.code,{children:"build"})," a ",(0,s.jsx)(t.code,{children:"session"})," and pass it to the database call just as in production code."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["By default ",(0,s.jsx)(t.code,{children:"withServerpod"})," does all database operations inside a transaction that is rolled back after each ",(0,s.jsx)(t.code,{children:"test"})," case. See the ",(0,s.jsx)(t.a,{href:"#rollback-database-configuration",children:"rollback database configuration"})," for how to configure this behavior."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"withServerpod('Given Products endpoint', (sessionBuilder, endpoints) {\n  var session = sessionBuilder.build();\n\n  setUp(() async {\n    await Product.db.insert(session, [\n    Product(name: 'Apple', price: 10),\n    Product(name: 'Banana', price: 10)\n    ]);\n  });\n\n  test('then calling `all` should return all products', () async {\n    final products = await endpoints.products.all(sessionBuilder);\n    expect(products, hasLength(2));\n    expect(products.map((p) => p.name), contains(['Apple', 'Banana']));\n  });\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"environment",children:"Environment"}),"\n",(0,s.jsxs)(t.p,{children:["By default ",(0,s.jsx)(t.code,{children:"withServerpod"})," uses the ",(0,s.jsx)(t.code,{children:"test"})," run mode and the database settings will be read from ",(0,s.jsx)(t.code,{children:"config/test.yaml"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to override the default run mode by setting the ",(0,s.jsx)(t.code,{children:"runMode"})," setting:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"withServerpod(\n  'Given Products endpoint',\n  (sessionBuilder, endpoints) {\n    /* test code */\n  },\n  runMode: ServerpodRunMode.development,\n);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["The following optional configuration options are available to pass as a second argument to ",(0,s.jsx)(t.code,{children:"withServerpod"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"rollbackDatabase"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"RollbackDatabase?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"RollbackDatabase.afterEach"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"runMode"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"String?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"ServerpodRunmode.test"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"enableSessionLogging"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"bool?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"applyMigrations"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"bool?"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"true"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"rollback-database-configuration",children:(0,s.jsx)(t.code,{children:"rollbackDatabase"})}),"\n",(0,s.jsxs)(t.p,{children:["By default ",(0,s.jsx)(t.code,{children:"withServerpod"})," does all database operations inside a transaction that is rolled back after each ",(0,s.jsx)(t.code,{children:"test"})," case. Just like the following enum describes, the behavior of the automatic rollbacks can be configured:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"/// Options for when to rollback the database during the test lifecycle.\nenum RollbackDatabase {\n  /// After each test. This is the default.\n  afterEach,\n\n  /// After all tests.\n  afterAll,\n\n  /// Disable rolling back the database.\n  disabled,\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"There are two main reasons to change the default setting:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Scenario tests"}),": when consecutive ",(0,s.jsx)(t.code,{children:"test"})," cases depend on each other. While generally considered an anti-pattern, it can be useful when the set up for the test group is very expensive. In this case ",(0,s.jsx)(t.code,{children:"rollbackDatabase"})," can be set to ",(0,s.jsx)(t.code,{children:"RollbackDatabase.afterAll"})," to ensure that the database state persists between ",(0,s.jsx)(t.code,{children:"test"})," cases. At the end of the ",(0,s.jsx)(t.code,{children:"withServerpod"})," scope, all database changes will be rolled back."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Concurrent transactions in endpoints"}),": when concurrent calls are made to ",(0,s.jsx)(t.code,{children:"session.db.transaction"})," inside an endpoint, it is no longer possible for the Serverpod test tools to do these operations as part of a top level transaction. In this case this feature should be disabled by passing ",(0,s.jsx)(t.code,{children:"RollbackDatabase.disabled"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<void> concurrentTransactionCalls(\n  Session session,\n) async {\n  await Future.wait([\n    session.db.transaction((tx) => /*...*/),\n    // Will throw `InvalidConfigurationException` if `rollbackDatabase` \n    // is not set to `RollbackDatabase.disabled` in `withServerpod`\n    session.db.transaction((tx) => /*...*/),\n  ]);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When setting ",(0,s.jsx)(t.code,{children:"rollbackDatabase.disabled"})," to be able to test ",(0,s.jsx)(t.code,{children:"concurrentTransactionCalls"}),", remember that the database has to be manually cleaned up to not leak data:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"withServerpod(\n  'Given ProductsEndpoint when calling concurrentTransactionCalls',\n  (sessionBuilder, endpoints) {\n    tearDownAll(() async {\n      var session = sessionBuilder.build();\n      // If something was saved to the database in the endpoint,\n      // for example a `Product`, then it has to be cleaned up!\n      await Product.db.deleteWhere(\n        session,\n        where: (_) => Constant.bool(true),\n      );\n    });\n\n    test('then should execute and commit all transactions', () async {\n      var result =\n          await endpoints.products.concurrentTransactionCalls(sessionBuilder);\n      // ...\n    });\n  },\n  rollbackDatabase: RollbackDatabase.disabled,\n);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, when setting ",(0,s.jsx)(t.code,{children:"rollbackDatabase.disabled"}),", it may also be needed to pass the ",(0,s.jsx)(t.code,{children:"--concurrency=1"})," flag to the dart test runner. Otherwise multiple tests might pollute each others database state:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"dart test integration_test --concurrency=1\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For the other cases this is not an issue, as each ",(0,s.jsx)(t.code,{children:"withServerpod"})," has its own transaction and will therefore be isolated."]}),"\n",(0,s.jsx)(t.h3,{id:"runmode",children:(0,s.jsx)(t.code,{children:"runMode"})}),"\n",(0,s.jsxs)(t.p,{children:["The run mode that Serverpod should be running in. Defaults to ",(0,s.jsx)(t.code,{children:"test"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"enablesessionlogging",children:(0,s.jsx)(t.code,{children:"enableSessionLogging"})}),"\n",(0,s.jsxs)(t.p,{children:["Wether session logging should be enabled. Defaults to ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"applymigrations",children:(0,s.jsx)(t.code,{children:"applyMigrations"})}),"\n",(0,s.jsxs)(t.p,{children:["Wether pending migrations should be applied when starting Serverpod. Defaults to ",(0,s.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"test-exceptions",children:"Test exceptions"}),"\n",(0,s.jsx)(t.p,{children:"The following exceptions are exported from the generated test tools file and can be thrown by the test tools in various scenarios, see below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Exception"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ServerpodUnauthenticatedException"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Thrown during an endpoint method call when the user was not authenticated."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ServerpodInsufficientAccessException"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Thrown during an endpoint method call when the authentication key provided did not have sufficient access."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ConnectionClosedException"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Thrown during an endpoint method call if a stream connection was closed with an error. For example, if the user authentication was revoked."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"InvalidConfigurationException"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Thrown when an invalid configuration state is found."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"test-helpers",children:"Test helpers"}),"\n",(0,s.jsx)(t.h3,{id:"flusheventqueue",children:(0,s.jsx)(t.code,{children:"flushEventQueue"})}),"\n",(0,s.jsx)(t.p,{children:"Test helper to flush the event queue.\nUseful for waiting for async events to complete before continuing the test."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<void> flushEventQueue();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For example, if depending on a generator function to execute up to its ",(0,s.jsx)(t.code,{children:"yield"}),", then the\nevent queue can be flushed to ensure the generator has executed up to that point:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"var stream = endpoints.someEndoint.generatorFunction(session);\nawait flushEventQueue();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["See also ",(0,s.jsx)(t.a,{href:"advanced-examples#multiple-users-interacting-with-a-shared-stream",children:"this complete example"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var s=n(67294);const i={},a=s.createContext(i);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);