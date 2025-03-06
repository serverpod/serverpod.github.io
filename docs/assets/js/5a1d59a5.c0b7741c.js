"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[26310],{9925:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts/testing/get-started","title":"Get started","description":"Serverpod provides simple but feature rich test tools to make testing your backend a breeze.","source":"@site/versioned_docs/version-2.4.0/06-concepts/19-testing/01-get-started.md","sourceDirName":"06-concepts/19-testing","slug":"/concepts/testing/get-started","permalink":"/concepts/testing/get-started","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.4.0/06-concepts/19-testing/01-get-started.md","tags":[],"version":"2.4.0","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Web server","permalink":"/concepts/webserver"},"next":{"title":"The basics","permalink":"/concepts/testing/the-basics"}}');var r=s(74848),o=s(28453);const i={},a="Get started",d={},l=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"get-started",children:"Get started"})}),"\n",(0,r.jsx)(t.p,{children:"Serverpod provides simple but feature rich test tools to make testing your backend a breeze."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"For Serverpod Mini projects, everything related to the database in this guide can be ignored."})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:" Have an existing project? Follow these steps first!"}),(0,r.jsxs)("p",{children:[(0,r.jsx)(t.p,{children:"For existing non-Mini projects, a few extra things need to be done:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Add the ",(0,r.jsx)(t.code,{children:"server_test_tools_path"})," key with the value ",(0,r.jsx)(t.code,{children:"test/integration/test_tools"})," to ",(0,r.jsx)(t.code,{children:"config/generator.yaml"}),":"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"server_test_tools_path: test/integration/test_tools\n"})}),(0,r.jsxs)(t.p,{children:["Without this key, the test tools file is not generated. With the above config the location of the test tools file is ",(0,r.jsx)(t.code,{children:"test/integration/test_tools/serverpod_test_tools.dart"}),", but this can be set to any folder (though should be outside of ",(0,r.jsx)(t.code,{children:"lib"})," as per Dart's test conventions)."]}),(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["New projects now come with a test postgres and redis instance in ",(0,r.jsx)(t.code,{children:"docker-compose.yaml"}),". This is not strictly mandatory, but is recommended to ensure that the testing state is never polluted. Add the snippet below to the ",(0,r.jsx)(t.code,{children:"docker-compose.yaml"})," file in the server directory:"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# Add to the existing services\npostgres_test:\n  image: postgres:16.3\n  ports:\n    - '9090:5432'\n  environment:\n    POSTGRES_USER: postgres\n    POSTGRES_DB: <projectname>_test\n    POSTGRES_PASSWORD: \"<insert database test password>\"\n  volumes:\n    - <projectname>_test_data:/var/lib/postgresql/data\nredis_test:\n  image: redis:6.2.6\n  ports:\n    - '9091:6379'\n  command: redis-server --requirepass 'REDIS_TEST_PASSWORD'\n  environment:\n    - REDIS_REPLICATION_MODE=master\nvolumes:\n  # ...\n  <projectname>_test_data:\n"})}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Or copy the complete file here."}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"services:\n  # Development services\n  postgres:\n    image: postgres:16.3\n    ports:\n      - '8090:5432'\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_DB: <projectname>\n      POSTGRES_PASSWORD: \"<insert database development password>\"\n    volumes:\n      - <projectname>_data:/var/lib/postgresql/data\n  redis:\n    image: redis:6.2.6\n    ports:\n      - '8091:6379'\n    command: redis-server --requirepass \"<insert redis development password>\"\n    environment:\n      - REDIS_REPLICATION_MODE=master\n\n  # Test services\n  postgres_test:\n    image: postgres:16.3\n    ports:\n      - '9090:5432'\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_DB: <projectname>_test\n      POSTGRES_PASSWORD: \"<insert database test password>\"\n    volumes:\n      - <projectname>_test_data:/var/lib/postgresql/data\n  redis_test:\n    image: redis:6.2.6\n    ports:\n      - '9091:6379'\n    command: redis-server --requirepass \"<insert redis test password>\"\n    environment:\n      - REDIS_REPLICATION_MODE=master\n\nvolumes:\n  <projectname>_data:\n  <projectname>_test_data:\n"})})})]}),(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Create a ",(0,r.jsx)(t.code,{children:"test.yaml"})," file and add it to the ",(0,r.jsx)(t.code,{children:"config"})," directory:"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# This is the configuration file for your test environment.\n# All ports are set to zero in this file which makes the server find the next available port.\n# This is needed to enable running tests concurrently. To set up your server, you will\n# need to add the name of the database you are connecting to and the user name.\n# The password for the database is stored in the config/passwords.yaml.\n\n# Configuration for the main API test server.\napiServer:\n  port: 0\n  publicHost: localhost\n  publicPort: 0\n  publicScheme: http\n\n# Configuration for the Insights test server.\ninsightsServer:\n  port: 0\n  publicHost: localhost\n  publicPort: 0\n  publicScheme: http\n\n# Configuration for the web test server.\nwebServer:\n  port: 0\n  publicHost: localhost\n  publicPort: 0\n  publicScheme: http\n\n# This is the database setup for your test server.\ndatabase:\n  host: localhost\n  port: 9090\n  name: <projectname>_test\n  user: postgres\n\n# This is the setup for your Redis test instance.\nredis:\n  enabled: false\n  host: localhost\n  port: 9091\n"})}),(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["Add this entry to ",(0,r.jsx)(t.code,{children:"config/passwords.yaml"})]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"test:\n  database: '<insert database test password>'\n  redis: '<insert redis test password>'\n"})}),(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:["Add a ",(0,r.jsx)(t.code,{children:"dart_test.yaml"})," file to the ",(0,r.jsx)(t.code,{children:"server"})," directory (next to ",(0,r.jsx)(t.code,{children:"pubspec.yaml"}),") with the following contents:"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"tags:\n  integration: {}\n\n"})}),(0,r.jsxs)(t.ol,{start:"6",children:["\n",(0,r.jsxs)(t.li,{children:["Finally, add the ",(0,r.jsx)(t.code,{children:"test"})," and ",(0,r.jsx)(t.code,{children:"serverpod_test"})," packages as dev dependencies in ",(0,r.jsx)(t.code,{children:"pubspec.yaml"}),":"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"dev_dependencies:\n  serverpod_test: <serverpod version> # Should be same version as the `serverpod` package\n  test: ^1.24.2\n"})}),(0,r.jsx)(t.p,{children:"That's it, the project setup should be ready to start using the test tools!"})]})]}),"\n",(0,r.jsx)(t.p,{children:"Go to the server directory and generate the test tools:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"serverpod generate\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The default location for the generated file is ",(0,r.jsx)(t.code,{children:"test/integration/test_tools/serverpod_test_tools.dart"}),". The folder name ",(0,r.jsx)(t.code,{children:"test/integration"})," is chosen to differentiate from unit tests (see the ",(0,r.jsx)(t.a,{href:"best-practises#unit-and-integration-tests",children:"best practises section"})," for more information on this)."]}),"\n",(0,r.jsxs)(t.p,{children:["The generated file exports a ",(0,r.jsx)(t.code,{children:"withServerpod"})," helper that enables you to call your endpoints directly like regular functions:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"import 'package:test/test.dart';\n\n// Import the generated file, it contains everything you need.\nimport 'test_tools/serverpod_test_tools.dart';\n\nvoid main() {\n  withServerpod('Given Example endpoint', (sessionBuilder, endpoints) {\n    test('when calling `hello` then should return greeting', () async {\n      final greeting = await endpoints.example.hello(sessionBuilder, 'Michael');\n      expect(greeting, 'Hello Michael');\n    });\n  });\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"A few things to note from the above example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The test tools should be imported from the generated test tools file and not the ",(0,r.jsx)(t.code,{children:"serverpod_test"})," package."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"withServerpod"})," callback takes two parameters: ",(0,r.jsx)(t.code,{children:"sessionBuilder"})," and ",(0,r.jsx)(t.code,{children:"endpoints"}),".","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"sessionBuilder"})," is used to build a ",(0,r.jsx)(t.code,{children:"session"})," object that represents the server state during an endpoint call and is used to set up scenarios."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"endpoints"})," contains all your Serverpod endpoints and lets you call them."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The location of the test tools can be changed by changing the  ",(0,r.jsx)(t.code,{children:"server_test_tools_path"})," key in ",(0,r.jsx)(t.code,{children:"config/generator.yaml"}),". If you remove the ",(0,r.jsx)(t.code,{children:"server_test_tools_path"})," key, the test tools will stop being generated."]})}),"\n",(0,r.jsx)(t.p,{children:"Before the test can be run the Postgres and Redis also have to be started:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker-compose up --build --detach\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now the test is ready to be run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dart test\n"})}),"\n",(0,r.jsx)(t.p,{children:"Happy testing!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);