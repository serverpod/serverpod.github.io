"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[61532],{63048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(85893),r=n(11151);const o={},i="Get started",a={id:"concepts/testing/get-started",title:"Get started",description:"Serverpod provides simple but feature rich test tools to make testing your backend a breeze.",source:"@site/docs/06-concepts/18-testing/01-get-started.md",sourceDirName:"06-concepts/18-testing",slug:"/concepts/testing/get-started",permalink:"/next/concepts/testing/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/18-testing/01-get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web server",permalink:"/next/concepts/webserver"},next:{title:"The basics",permalink:"/next/concepts/testing/the-basics"}},d={},l=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"get-started",children:"Get started"})}),"\n",(0,s.jsx)(t.p,{children:"Serverpod provides simple but feature rich test tools to make testing your backend a breeze."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"The test tools are an experimental feature. Experimental features should not be used in production environments, as their stability is uncertain and they may receive breaking changes in upcoming releases."})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"For Serverpod Mini projects, everything related to the database in this guide can be ignored."})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:" Have an existing project? Follow these steps first!"}),(0,s.jsxs)("p",{children:[(0,s.jsx)(t.p,{children:"For existing non-Mini projects, a few extra things need to be done:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Add the ",(0,s.jsx)(t.code,{children:"server_test_tools_path"})," key to ",(0,s.jsx)(t.code,{children:"config/generator.yaml"}),". Without this key, the test tools file is not generated. The default location for the generated file is ",(0,s.jsx)(t.code,{children:"integration_test/test_tools/serverpod_test_tools.dart"}),", but this can be set to any path (though should be outside of ",(0,s.jsx)(t.code,{children:"lib"})," as per Dart's test conventions)."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["New projects now come with a test profile in ",(0,s.jsx)(t.code,{children:"docker-compose.yaml"}),". This is not strictly mandatory, but is recommended to ensure that the testing state is never polluted. Add the snippet below to the ",(0,s.jsx)(t.code,{children:"docker-compose.yaml"})," file in the server directory:"]}),"\n"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"# Test services\npostgres_test:\n  image: postgres:16.3\n  ports:\n    - '9090:5432'\n  environment:\n    POSTGRES_USER: postgres_test\n    POSTGRES_DB: projectname_test\n    POSTGRES_PASSWORD: \"<insert database test password>\"\n  volumes:\n    - projectname_data:/var/lib/postgresql/data\n  profiles:\n    - '' # Default profile\n    - test\nredis_test:\n  image: redis:6.2.6\n  ports:\n    - '9091:6379'\n  command: redis-server --requirepass \"<insert redis test password>\"\n  environment:\n    - REDIS_REPLICATION_MODE=master\n  profiles:\n    - '' # Default profile\n    - test\n"})}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Or copy the complete file here."}),(0,s.jsx)("p",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"services:\n  # Development services\n  postgres:\n    image: postgres:16.3\n    ports:\n      - '8090:5432'\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_DB: projectname\n      POSTGRES_PASSWORD: \"<insert database development password>\"\n    volumes:\n      - projectname_data:/var/lib/postgresql/data\n    profiles:\n      - '' # Default profile\n      - dev\n  redis:\n    image: redis:6.2.6\n    ports:\n      - '8091:6379'\n    command: redis-server --requirepass \"<insert redis development password>\"\n    environment:\n      - REDIS_REPLICATION_MODE=master\n    profiles:\n      - '' # Default profile\n      - dev\n\n  # Test services\n  postgres_test:\n    image: postgres:16.3\n    ports:\n      - '9090:5432'\n    environment:\n      POSTGRES_USER: postgres_test\n      POSTGRES_DB: projectname_test\n      POSTGRES_PASSWORD: \"<insert database test password>\"\n    volumes:\n      - projectname_data:/var/lib/postgresql/data\n    profiles:\n      - '' # Default profile\n      - test\n  redis_test:\n    image: redis:6.2.6\n    ports:\n      - '9091:6379'\n    command: redis-server --requirepass \"<insert redis test password>\"\n    environment:\n      - REDIS_REPLICATION_MODE=master\n    profiles:\n      - '' # Default profile\n      - test\n\nvolumes:\n  projectname_data:\n"})})})]}),(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Create a ",(0,s.jsx)(t.code,{children:"test.yaml"})," file and add it to the ",(0,s.jsx)(t.code,{children:"config"})," directory:"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"# This is the configuration file for your local test environment. By\n# default, it runs a single server on port 8090. To set up your server, you will\n# need to add the name of the database you are connecting to and the user name.\n# The password for the database is stored in the config/passwords.yaml.\n#\n# When running your server locally, the server ports are the same as the public\n# facing ports.\n\n# Configuration for the main API test server.\napiServer:\n  port: 9080\n  publicHost: localhost\n  publicPort: 9080\n  publicScheme: http\n\n# Configuration for the Insights test server.\ninsightsServer:\n  port: 9081\n  publicHost: localhost\n  publicPort: 9081\n  publicScheme: http\n\n# Configuration for the web test server.\nwebServer:\n  port: 9082\n  publicHost: localhost\n  publicPort: 9082\n  publicScheme: http\n\n# This is the database setup for your test server.\ndatabase:\n  host: localhost\n  port: 9090\n  name: projectname_test\n  user: postgres\n\n# This is the setup for your Redis test instance.\nredis:\n  enabled: false\n  host: localhost\n  port: 9091\n"})}),(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Add this entry to ",(0,s.jsx)(t.code,{children:"config/passwords.yaml"})]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"test:\n  database: '<insert database test password>'\n  redis: '<insert redis test password>'\n"})}),(0,s.jsx)(t.p,{children:"That's it, the project setup should be ready to start using the test tools!"})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Go to the server directory and generate the test tools by running ",(0,s.jsx)(t.code,{children:"serverpod generate --experimental-features testTools"}),". The default location for the generated file is ",(0,s.jsx)(t.code,{children:"integration_test/test_tools/serverpod_test_tools.dart"}),". The folder name ",(0,s.jsx)(t.code,{children:"integration_test"})," is chosen to differentiate from unit tests (see the ",(0,s.jsx)(t.a,{href:"best-practises#unit-and-integration-tests",children:"best practises section"})," for more information on this)."]}),"\n",(0,s.jsxs)(t.p,{children:["The generated file exports a ",(0,s.jsx)(t.code,{children:"withServerpod"})," helper that enables you to call your endpoints directly like regular functions:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"// Import the generated file, it contains everything you need.\nimport 'test_tools/serverpod_test_tools.dart';\n\nvoid main() {\n  withServerpod('Given Example endpoint', (sessionBuilder, endpoints) {\n    test('when calling `hello` then should return greeting', () async {\n      final greeting =\n          await endpoints.example.hello(sessionBuilder, 'Michael');\n      expect(greeting, 'Hello, Michael!');\n    });\n  });\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"A few things to note from the above example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The test tools should be imported from the generated test tools file and not the ",(0,s.jsx)(t.code,{children:"serverpod_test"})," package."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"withServerpod"})," callback takes two parameters: ",(0,s.jsx)(t.code,{children:"sessionBuilder"})," and ",(0,s.jsx)(t.code,{children:"endpoints"}),".","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"sessionBuilder"})," is used to build a ",(0,s.jsx)(t.code,{children:"session"})," object that represents the server state during an endpoint call and is used to set up scenarios."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"endpoints"})," contains all your Serverpod endpoints and lets you call them."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The location of the test tools can be changed by changing the  ",(0,s.jsx)(t.code,{children:"server_test_tools_path"})," key in ",(0,s.jsx)(t.code,{children:"config/generator.yaml"}),". If you remove the ",(0,s.jsx)(t.code,{children:"server_test_tools_path"})," key, the test tools will stop being generated."]})}),"\n",(0,s.jsx)(t.p,{children:"Before the test can be run the Postgres and Redis also have to be started:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker-compose up --build --detach\n"})}),"\n",(0,s.jsxs)(t.p,{children:["By default this starts up both the ",(0,s.jsx)(t.code,{children:"development"})," and ",(0,s.jsx)(t.code,{children:"test"})," profiles. To only start one profile, simply add ",(0,s.jsx)(t.code,{children:"--profile test"})," to the command."]}),"\n",(0,s.jsx)(t.p,{children:"Now the test is ready to be run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"dart test integration_test\n"})}),"\n",(0,s.jsx)(t.p,{children:"Happy testing!"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);