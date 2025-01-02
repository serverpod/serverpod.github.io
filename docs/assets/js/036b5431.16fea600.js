"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[38691],{12740:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"concepts/database/connection","title":"Connection","description":"In Serverpod the connection details and password for the database are stored inside the config directory in your server package.","source":"@site/versioned_docs/version-2.0.0/05-concepts/06-database/01-connection.md","sourceDirName":"05-concepts/06-database","slug":"/concepts/database/connection","permalink":"/2.0.0/concepts/database/connection","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/06-database/01-connection.md","tags":[],"version":"2.0.0","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Sessions","permalink":"/2.0.0/concepts/sessions"},"next":{"title":"Models","permalink":"/2.0.0/concepts/database/models"}}');var a=s(74848),t=s(28453);const r={},d="Connection",c={},i=[{value:"Connection details",id:"connection-details",level:3},{value:"Database password",id:"database-password",level:3},{value:"Development database",id:"development-database",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"connection",children:"Connection"})}),"\n",(0,a.jsxs)(n.p,{children:["In Serverpod the connection details and password for the database are stored inside the ",(0,a.jsx)(n.code,{children:"config"})," directory in your server package."]}),"\n",(0,a.jsx)(n.p,{children:"Serverpod automatically establishes a connection to the Postgresql instance by using these configuration details when you start the server."}),"\n",(0,a.jsx)(n.h3,{id:"connection-details",children:"Connection details"}),"\n",(0,a.jsxs)(n.p,{children:["Each environment configuration contains a ",(0,a.jsx)(n.code,{children:"database"})," keyword that specifies the connection details."]}),"\n",(0,a.jsxs)(n.p,{children:["For your development build you can find the connection details in the ",(0,a.jsx)(n.code,{children:"development.yaml"})," file."]}),"\n",(0,a.jsx)(n.p,{children:"This is an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"...\ndatabase:\n  host: localhost\n  port: 8090\n  name: <YOUR_PROJECT_NAME>\n  user: postgres\n...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The variable ",(0,a.jsx)(n.code,{children:"name"})," refers to the database name."]}),"\n",(0,a.jsx)(n.h3,{id:"database-password",children:"Database password"}),"\n",(0,a.jsxs)(n.p,{children:["The database password is stored in a separate file called ",(0,a.jsx)(n.code,{children:"passwords.yaml"})," in the same ",(0,a.jsx)(n.code,{children:"config"})," directory. The password for each environment is stored under the ",(0,a.jsx)(n.code,{children:"database"})," keyword in the file."]}),"\n",(0,a.jsx)(n.p,{children:"An example of this could look like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"...\ndevelopment:\n  database: '<MY DATABASE PASSWORD>'\n...\n"})}),"\n",(0,a.jsx)(n.h2,{id:"development-database",children:"Development database"}),"\n",(0,a.jsxs)(n.p,{children:["A newly created Serverpod project comes with a preconfigured docker instance with Postgresql. All you have to do is run the following command from the root of the ",(0,a.jsx)(n.code,{children:"server"})," package to start the database."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," is required for this to work."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ docker compose up --build --detach\n"})}),"\n",(0,a.jsx)(n.p,{children:"To remove the database run (this commands preserve all data)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ docker compose down\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To remove the database and ",(0,a.jsx)(n.strong,{children:"delete"})," all data add the ",(0,a.jsx)(n.code,{children:"-v"})," flag."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ docker compose down -v\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var o=s(96540);const a={},t=o.createContext(a);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);