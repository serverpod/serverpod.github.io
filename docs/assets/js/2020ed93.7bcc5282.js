"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9953],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Contribute",u={unversionedId:"contribute",id:"version-0.9.21/contribute",title:"Contribute",description:"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod's lead developer Viktor Lidholt before you get started. This makes sure that your contribution aligns with Serverpod's overall vision and roadmap and that multiple persons don't do the same work.",source:"@site/versioned_docs/version-0.9.21/07-contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/0.9.21/contribute",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.21/07-contribute.md",tags:[],version:"0.9.21",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/0.9.21/roadmap"}},p={},d=[{value:"Working on Serverpod",id:"working-on-serverpod",level:2},{value:"Writing code",id:"writing-code",level:3},{value:"Running all tests",id:"running-all-tests",level:3},{value:"Running individual tests",id:"running-individual-tests",level:3},{value:"Command line tools",id:"command-line-tools",level:3},{value:"Editing the pubspec.yaml files",id:"editing-the-pubspecyaml-files",level:3},{value:"Submitting your pull request",id:"submitting-your-pull-request",level:2},{value:"Getting support",id:"getting-support",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contribute"},"Contribute"),(0,a.kt)("p",null,"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod's lead developer ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/viktorlidholt/"},"Viktor Lidholt")," before you get started. This makes sure that your contribution aligns with Serverpod's overall vision and roadmap and that multiple persons don't do the same work."),(0,a.kt)("p",null,"If you want to contribute, please view our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverpod/serverpod/projects/1"},"roadmap")," and pick issues from there. This will make it much more likely that we can include the new features you are building."),(0,a.kt)("h2",{id:"working-on-serverpod"},"Working on Serverpod"),(0,a.kt)("p",null,"The main ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverpod/serverpod"},"Serverpod repository")," contains all Serverpod code and code for tests and official modules and integrations. Send any pull requests to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,a.kt)("h3",{id:"writing-code"},"Writing code"),(0,a.kt)("p",null,"We are very conscious about keeping the Serverpod code base clean. When you write your code, make sure to use ",(0,a.kt)("inlineCode",{parentName:"p"},"dart format")," and that you don't get any errors or lints from ",(0,a.kt)("inlineCode",{parentName:"p"},"dart analyze"),"."),(0,a.kt)("h3",{id:"running-all-tests"},"Running all tests"),(0,a.kt)("p",null,"Continuous integration tests are automatically run when sending a pull request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch. You can run the tests locally by changing your working directory into the root serverpod directory and running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"util/run_tests\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Tests may not yet work if running on a Windows machine. Mac is recommended for Serverpod development."))),(0,a.kt)("h3",{id:"running-individual-tests"},"Running individual tests"),(0,a.kt)("p",null,"Running single individual tests is useful when you are working on a specific feature. To do it, you will need to manually start the test server, then run the integration tests from the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod")," package."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add an entry for the test server at the end of your ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/hosts file"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"127.0.0.1 serverpod_test_server\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Start the Docker container for the test server.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd tests/serverpod_test_server/docker_local\ndocker-compose up --build --detach\n./setup-tables\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Start the test server.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd tests/serverpod_test_server\ndart bin/main.dart\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run an individual test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd tests/serverpod_test_server\ndart test test/connection_test.dart\n")),(0,a.kt)("h3",{id:"command-line-tools"},"Command line tools"),(0,a.kt)("p",null,"To run the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod")," command from your cloned repository, you will need to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd tools/serverpod_cli\ndart pub get\ndart pub global activate --source path .\n")),(0,a.kt)("p",null,"Depending on your Dart version you may need to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"dart pub global")," command above every time you've made changes in the Serverpod tooling."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you run the local version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod")," command line interface you will need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVERPOD_HOME")," environment variable. It should point to your cloned ",(0,a.kt)("inlineCode",{parentName:"p"},"serverpod")," repository."))),(0,a.kt)("h3",{id:"editing-the-pubspecyaml-files"},"Editing the pubspec.yaml files"),(0,a.kt)("p",null,"First off, we are restrictive about which new packages we include in the Serverpod project. So before starting to add new dependencies you should probably get in touch with the maintainers of Serverpod to clear it."),(0,a.kt)("p",null,"Secondly, you shouldn't edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," files directly. Instead, make changes to the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"templates/")," directory. When you've made changes, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"update_pubspecs")," command to generate the ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"util/update_pubspecs\n")),(0,a.kt)("h2",{id:"submitting-your-pull-request"},"Submitting your pull request"),(0,a.kt)("p",null,"To keep commits clean, Serverpod squashes them when merging pull requests. Therefore, it is essential that each pull request only contains a single feature or bug fix. Keeping the pull requests smaller also makes it faster and easier to review the code."),(0,a.kt)("p",null,"If you are contributing new code, you will also need to provide tests for your code. The tests should be placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/serverpod_test_server")," package."),(0,a.kt)("h2",{id:"getting-support"},"Getting support"),(0,a.kt)("p",null,"Feel free to post on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverpod/serverpod/discussions"},"Serverpod's discussion board")," if you have any questions. We check the board daily."))}m.isMDXComponent=!0}}]);