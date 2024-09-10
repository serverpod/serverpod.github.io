"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[96738],{93749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=n(85893),r=n(11151);const i={},s="Contribute",d={id:"contribute",title:"Contribute",description:"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod's lead developer Viktor Lidholt before you get started. This makes sure that your contribution aligns with Serverpod's overall vision and roadmap and that multiple persons don't do the same work.",source:"@site/versioned_docs/version-0.9.6/04-contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/0.9.6/contribute",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.6/04-contribute.md",tags:[],version:"0.9.6",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/0.9.6/roadmap"}},a={},c=[{value:"Working on Serverpod",id:"working-on-serverpod",level:2},{value:"Writing code",id:"writing-code",level:3},{value:"Testing",id:"testing",level:3},{value:"Command line tools",id:"command-line-tools",level:3},{value:"Editing the pubspec.yaml files",id:"editing-the-pubspecyaml-files",level:3},{value:"Getting support",id:"getting-support",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"contribute",children:"Contribute"})}),"\n",(0,o.jsxs)(t.p,{children:["Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod's lead developer ",(0,o.jsx)(t.a,{href:"https://www.linkedin.com/in/viktorlidholt/",children:"Viktor Lidholt"})," before you get started. This makes sure that your contribution aligns with Serverpod's overall vision and roadmap and that multiple persons don't do the same work."]}),"\n",(0,o.jsx)(t.h2,{id:"working-on-serverpod",children:"Working on Serverpod"}),"\n",(0,o.jsxs)(t.p,{children:["The main ",(0,o.jsx)(t.a,{href:"https://github.com/serverpod/serverpod",children:"Serverpod repository"})," contains all Serverpod code and code for tests and official modules and integrations. Send any pull requests to the ",(0,o.jsx)(t.code,{children:"dev"})," branch."]}),"\n",(0,o.jsx)(t.h3,{id:"writing-code",children:"Writing code"}),"\n",(0,o.jsxs)(t.p,{children:["We are very conscious about keeping the Serverpod code base clean. When you write your code, make sure to use ",(0,o.jsx)(t.code,{children:"dart format"})," and that you don't get any errors or lints from ",(0,o.jsx)(t.code,{children:"dart analyze"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(t.p,{children:["Continuous integration tests are automatically run when sending a pull request to the ",(0,o.jsx)(t.code,{children:"dev"})," branch. You can run the tests locally by changing your working directory into the root serverpod directory and running:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"util/run_tests\n"})}),"\n",(0,o.jsx)(t.p,{children:"We are currently refactoring the testing infrastructure to make it easier to run individual tests. We will update this documentation page as soon as that work is complete."}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsx)(t.p,{children:"Tests may not yet work if running on a Windows machine."})}),"\n",(0,o.jsx)(t.h3,{id:"command-line-tools",children:"Command line tools"}),"\n",(0,o.jsxs)(t.p,{children:["To run the ",(0,o.jsx)(t.code,{children:"serverpod"})," command from your cloned repository, you will need to:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd tools/serverpod_cli\ndart pub get\ndart pub global activate --source path .\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Depending on your Dart version you may need to run the ",(0,o.jsx)(t.code,{children:"dart pub global"})," command above every time you've made changes in the Serverpod tooling."]}),"\n",(0,o.jsx)(t.h3,{id:"editing-the-pubspecyaml-files",children:"Editing the pubspec.yaml files"}),"\n",(0,o.jsx)(t.p,{children:"First off, we are restrictive about which new packages we include in the Serverpod project. So before starting to add new dependencies you should probably get in touch with the maintainers of Serverpod to clear it."}),"\n",(0,o.jsxs)(t.p,{children:["Secondly, you shouldn't edit the ",(0,o.jsx)(t.code,{children:"pubspec.yaml"})," files directly. Instead make changes to the files in the ",(0,o.jsx)(t.code,{children:"templates/"})," directory. When you've made changes, run the command to generate new correct ",(0,o.jsx)(t.code,{children:"pubspec.yaml"})," files:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"util/update_pubspecs\n"})}),"\n",(0,o.jsx)(t.h2,{id:"getting-support",children:"Getting support"}),"\n",(0,o.jsxs)(t.p,{children:["Feel free to post on ",(0,o.jsx)(t.a,{href:"https://github.com/serverpod/serverpod/discussions",children:"Serverpod's discussion board"})," if you have any questions. We check the board daily."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);