"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[26411],{7822:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"upgrading/upgrade-to-two-point-two","title":"Upgrade to 2.2","description":"Serverpod 2.2 includes new test tools that make it easy to create tests for endpoint methods. For new projects they are configured by default, but existing projects need to go through some steps to enable it (see below). The full documentation of this feature can also be found here.","source":"@site/versioned_docs/version-2.3.0/08-upgrading/04-upgrade-to-two-point-two.md","sourceDirName":"08-upgrading","slug":"/upgrading/upgrade-to-two-point-two","permalink":"/upgrading/upgrade-to-two-point-two","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.3.0/08-upgrading/04-upgrade-to-two-point-two.md","tags":[],"version":"2.3.0","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Upgrade to 2.0","permalink":"/upgrading/upgrade-to-two"},"next":{"title":"Serverpod Insights","permalink":"/tools/insights"}}');var o=s(74848),r=s(28453);const i={},a="Upgrade to 2.2",d={},l=[{value:"Add test tools to existing projects",id:"add-test-tools-to-existing-projects",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"upgrade-to-22",children:"Upgrade to 2.2"})}),"\n",(0,o.jsxs)(t.p,{children:["Serverpod 2.2 includes new test tools that make it easy to create tests for endpoint methods. For new projects they are configured by default, but existing projects need to go through some steps to enable it (see below). The full documentation of this feature can also be found ",(0,o.jsx)(t.a,{href:"../concepts/testing/get-started",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"add-test-tools-to-existing-projects",children:"Add test tools to existing projects"}),"\n",(0,o.jsx)(t.p,{children:"For existing non-Mini projects, a few extra things need to be done:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Add the ",(0,o.jsx)(t.code,{children:"server_test_tools_path"})," key with the value ",(0,o.jsx)(t.code,{children:"test/integration/test_tools"})," to ",(0,o.jsx)(t.code,{children:"config/generator.yaml"}),":"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"server_test_tools_path: test/integration/test_tools\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Without this key, the test tools file is not generated. With the above config the location of the test tools file is ",(0,o.jsx)(t.code,{children:"test/integration/test_tools/serverpod_test_tools.dart"}),", but this can be set to any folder (though should be outside of ",(0,o.jsx)(t.code,{children:"lib"})," as per Dart's test conventions)."]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["New projects now come with a test profile in ",(0,o.jsx)(t.code,{children:"docker-compose.yaml"}),". This is not strictly mandatory, but is recommended to ensure that the testing state is never polluted. Add the snippet below to the ",(0,o.jsx)(t.code,{children:"docker-compose.yaml"})," file in the server directory:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"# Add to the existing services\npostgres_test:\n  image: postgres:16.3\n  ports:\n    - '9090:5432'\n  environment:\n    POSTGRES_USER: postgres\n    POSTGRES_DB: <projectname>_test\n    POSTGRES_PASSWORD: \"<insert database test password>\"\n  volumes:\n    - <projectname>_test_data:/var/lib/postgresql/data\n  profiles:\n    - '' # Default profile\n    - test\nredis_test:\n  image: redis:6.2.6\n  ports:\n    - '9091:6379'\n  command: redis-server --requirepass \"<insert redis test password>\"\n  environment:\n    - REDIS_REPLICATION_MODE=master\n  profiles:\n    - '' # Default profile\n    - test\nvolumes:\n  # ...\n  <projectname>_test_data:\n"})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Or copy the complete file here."}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"services:\n  # Development services\n  postgres:\n    image: postgres:16.3\n    ports:\n      - '8090:5432'\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_DB: <projectname>\n      POSTGRES_PASSWORD: \"<insert database development password>\"\n    volumes:\n      - <projectname>_data:/var/lib/postgresql/data\n    profiles:\n      - '' # Default profile\n      - dev\n  redis:\n    image: redis:6.2.6\n    ports:\n      - '8091:6379'\n    command: redis-server --requirepass \"<insert redis development password>\"\n    environment:\n      - REDIS_REPLICATION_MODE=master\n    profiles:\n      - '' # Default profile\n      - dev\n\n  # Test services\n  postgres_test:\n    image: postgres:16.3\n    ports:\n      - '9090:5432'\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_DB: <projectname>_test\n      POSTGRES_PASSWORD: \"<insert database test password>\"\n    volumes:\n      - <projectname>_test_data:/var/lib/postgresql/data\n    profiles:\n      - '' # Default profile\n      - test\n  redis_test:\n    image: redis:6.2.6\n    ports:\n      - '9091:6379'\n    command: redis-server --requirepass \"<insert redis test password>\"\n    environment:\n      - REDIS_REPLICATION_MODE=master\n    profiles:\n      - '' # Default profile\n      - test\n\nvolumes:\n  <projectname>_data:\n  <projectname>_test_data:\n"})})})]}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["Create a ",(0,o.jsx)(t.code,{children:"test.yaml"})," file and add it to the ",(0,o.jsx)(t.code,{children:"config"})," directory:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"# This is the configuration file for your test environment.\n# All ports are set to zero in this file which makes the server find the next available port.\n# This is needed to enable running tests concurrently. To set up your server, you will\n# need to add the name of the database you are connecting to and the user name.\n# The password for the database is stored in the config/passwords.yaml.\n\n# Configuration for the main API test server.\napiServer:\n  port: 0\n  publicHost: localhost\n  publicPort: 0\n  publicScheme: http\n\n# Configuration for the Insights test server.\ninsightsServer:\n  port: 0\n  publicHost: localhost\n  publicPort: 0\n  publicScheme: http\n\n# Configuration for the web test server.\nwebServer:\n  port: 0\n  publicHost: localhost\n  publicPort: 0\n  publicScheme: http\n\n# This is the database setup for your test server.\ndatabase:\n  host: localhost\n  port: 9090\n  name: <projectname>_test\n  user: postgres\n\n# This is the setup for your Redis test instance.\nredis:\n  enabled: false\n  host: localhost\n  port: 9091\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["Add this entry to ",(0,o.jsx)(t.code,{children:"config/passwords.yaml"})]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"test:\n  database: '<insert database test password>'\n  redis: '<insert redis test password>'\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsxs)(t.li,{children:["Add a ",(0,o.jsx)(t.code,{children:"dart_test.yaml"})," file to the ",(0,o.jsx)(t.code,{children:"server"})," directory (next to ",(0,o.jsx)(t.code,{children:"pubspec.yaml"}),") with the following contents:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"tags:\n  integration: {}\n\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsxs)(t.li,{children:["Finally, add the ",(0,o.jsx)(t.code,{children:"test"})," and ",(0,o.jsx)(t.code,{children:"serverpod_test"})," packages as dev dependencies in ",(0,o.jsx)(t.code,{children:"pubspec.yaml"}),":"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"dev_dependencies:\n  serverpod_test: <serverpod version> # Should be same version as the `serverpod` package\n  test: ^1.24.2\n"})}),"\n",(0,o.jsx)(t.p,{children:"That's it, the project setup should be ready to start using the test tools!"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);