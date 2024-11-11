"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[68912],{6190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"contribute","title":"Contribute","description":"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod\'s lead developer Viktor Lidholt before you get started. This makes sure that your contribution aligns with Serverpod\'s overall vision and roadmap and that multiple persons don\'t do the same work.","source":"@site/versioned_docs/version-1.2.0/11-contribute.md","sourceDirName":".","slug":"/contribute","permalink":"/1.2.0/contribute","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/11-contribute.md","tags":[],"version":"1.2.0","sidebarPosition":11,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Roadmap","permalink":"/1.2.0/roadmap"},"next":{"title":"Upgrade to 1.2","permalink":"/1.2.0/upgrading/upgrade-to-one-point-two"}}');var s=n(74848),o=n(28453);const i={},d="Contribute",a={},l=[{value:"Working on Serverpod",id:"working-on-serverpod",level:2},{value:"Writing code",id:"writing-code",level:3},{value:"Running all tests",id:"running-all-tests",level:3},{value:"Running individual tests",id:"running-individual-tests",level:3},{value:"Command line tools",id:"command-line-tools",level:3},{value:"Editing the pubspec.yaml files",id:"editing-the-pubspecyaml-files",level:3},{value:"Submitting your pull request",id:"submitting-your-pull-request",level:2},{value:"Getting support",id:"getting-support",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"contribute",children:"Contribute"})}),"\n",(0,s.jsxs)(t.p,{children:["Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod's lead developer ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/viktorlidholt/",children:"Viktor Lidholt"})," before you get started. This makes sure that your contribution aligns with Serverpod's overall vision and roadmap and that multiple persons don't do the same work."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to contribute, please view our ",(0,s.jsx)(t.a,{href:"https://github.com/serverpod/serverpod/projects/1",children:"roadmap"})," and pick issues from there. This will make it much more likely that we can include the new features you are building."]}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["For us to be able to accept your code, you must follow the guidelines below. ",(0,s.jsx)(t.strong,{children:"We cannot accept contributions unless there are tests written for it."})," We also cannot accept features that are not complete for all use cases. In very rare circumstances, we may still be able to use code that doesn't comply with the guidelines, but it may take a long time for us to free up a resource that can clean up the code or write missing tests."]})}),"\n",(0,s.jsx)(t.h2,{id:"working-on-serverpod",children:"Working on Serverpod"}),"\n",(0,s.jsxs)(t.p,{children:["The main ",(0,s.jsx)(t.a,{href:"https://github.com/serverpod/serverpod",children:"Serverpod repository"})," contains all Serverpod code and code for tests and official modules and integrations. Send any pull requests to the ",(0,s.jsx)(t.code,{children:"main"})," branch."]}),"\n",(0,s.jsx)(t.h3,{id:"writing-code",children:"Writing code"}),"\n",(0,s.jsxs)(t.p,{children:["We are very conscious about keeping the Serverpod code base clean. When you write your code, make sure to use ",(0,s.jsx)(t.code,{children:"dart format"})," and that you don't get any errors or lints from ",(0,s.jsx)(t.code,{children:"dart analyze"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"running-all-tests",children:"Running all tests"}),"\n",(0,s.jsxs)(t.p,{children:["Continuous integration tests are automatically run when sending a pull request to the ",(0,s.jsx)(t.code,{children:"main"})," branch. You can run the tests locally by changing your working directory into the root serverpod directory and running:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ util/run_tests\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"Tests may not yet work if running on a Windows machine. Mac or Linux is recommended for Serverpod development."})}),"\n",(0,s.jsx)(t.h3,{id:"running-individual-tests",children:"Running individual tests"}),"\n",(0,s.jsxs)(t.p,{children:["Running single individual tests is useful when you are working on a specific feature. To do it, you will need to manually start the test server, then run the integration tests from the ",(0,s.jsx)(t.code,{children:"serverpod"})," package."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Add entries for the test server, postgres and redis at the end of your ",(0,s.jsx)(t.code,{children:"/etc/hosts file"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"127.0.0.1 serverpod_test_server\n127.0.0.1 postgres\n127.0.0.1 redis\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Start the Docker container for the test server."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd tests/serverpod_test_server/docker-local\n$ docker-compose up --build --detach\n$ ./setup-tables\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Start the test server."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd tests/serverpod_test_server\n$ dart bin/main.dart\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Run an individual test"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd tests/serverpod_test_server\n$ dart test test/connection_test.dart\n"})}),"\n",(0,s.jsx)(t.h3,{id:"command-line-tools",children:"Command line tools"}),"\n",(0,s.jsxs)(t.p,{children:["To run the ",(0,s.jsx)(t.code,{children:"serverpod"})," command from your cloned repository, you will need to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd tools/serverpod_cli\n$ dart pub get\n$ dart pub global activate --source path .\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Depending on your Dart version you may need to run the ",(0,s.jsx)(t.code,{children:"dart pub global"})," command above every time you've made changes in the Serverpod tooling."]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["If you run the local version of the ",(0,s.jsx)(t.code,{children:"serverpod"})," command line interface, you will need to set the ",(0,s.jsx)(t.code,{children:"SERVERPOD_HOME"})," environment variable. It should point to the root your cloned ",(0,s.jsx)(t.code,{children:"serverpod"})," monorepo. (E.g. ",(0,s.jsx)(t.code,{children:"/Users/myuser/MyRepos/serverpod"}),")"]}),(0,s.jsxs)(t.p,{children:["If you use ",(0,s.jsx)(t.code,{children:"serverpod create"})," to set up a new project with a local version of the tooling, you may need to edit the pubspec files in the created packages to point to your local serverpod packages."]})]}),"\n",(0,s.jsx)(t.h3,{id:"editing-the-pubspecyaml-files",children:"Editing the pubspec.yaml files"}),"\n",(0,s.jsx)(t.p,{children:"First off, we are restrictive about which new packages we include in the Serverpod project. So before starting to add new dependencies, you should probably get in touch with the maintainers of Serverpod to clear it."}),"\n",(0,s.jsxs)(t.p,{children:["Secondly, you shouldn't edit the ",(0,s.jsx)(t.code,{children:"pubspec.yaml"})," files directly. Instead, make changes to the files in the ",(0,s.jsx)(t.code,{children:"templates/"})," directory. When you've made changes, run the ",(0,s.jsx)(t.code,{children:"update_pubspecs"})," command to generate the ",(0,s.jsx)(t.code,{children:"pubspec.yaml"})," files."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ util/update_pubspecs\n"})}),"\n",(0,s.jsx)(t.h2,{id:"submitting-your-pull-request",children:"Submitting your pull request"}),"\n",(0,s.jsx)(t.p,{children:"To keep commits clean, Serverpod squashes them when merging pull requests. Therefore, it is essential that each pull request only contains a single feature or bug fix. Keeping the pull requests smaller also makes it faster and easier to review the code."}),"\n",(0,s.jsxs)(t.p,{children:["If you are contributing new code, you will also need to provide tests for your code. The tests should be placed in the ",(0,s.jsx)(t.code,{children:"tests/serverpod_test_server"})," package."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-support",children:"Getting support"}),"\n",(0,s.jsxs)(t.p,{children:["Feel free to post on ",(0,s.jsx)(t.a,{href:"https://github.com/serverpod/serverpod/discussions",children:"Serverpod's discussion board"})," if you have any questions. We check the board daily."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);