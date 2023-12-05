"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[3083],{8468:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var o=s(5893),t=s(1151);const a={},r="Connection",d={id:"concepts/database/connection",title:"Connection",description:"In Serverpod the connection details and password for the database are stored inside the config directory in your server package.",source:"@site/docs/05-concepts/06-database/01-connection.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/connection",permalink:"/next/concepts/database/connection",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-concepts/06-database/01-connection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sessions",permalink:"/next/concepts/sessions"},next:{title:"Models",permalink:"/next/concepts/database/models"}},c={},i=[{value:"Connection details",id:"connection-details",level:3},{value:"Database password",id:"database-password",level:3},{value:"Development database",id:"development-database",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connection",children:"Connection"}),"\n",(0,o.jsxs)(n.p,{children:["In Serverpod the connection details and password for the database are stored inside the ",(0,o.jsx)(n.code,{children:"config"})," directory in your ",(0,o.jsx)(n.code,{children:"server"})," package."]}),"\n",(0,o.jsx)(n.p,{children:"Serverpod automatically establishes a connection to the Postgresql instance by using these configuration details when you start the server."}),"\n",(0,o.jsx)(n.h3,{id:"connection-details",children:"Connection details"}),"\n",(0,o.jsxs)(n.p,{children:["Each environment configuration contains a ",(0,o.jsx)(n.code,{children:"database"})," keyword that specifies the connection details."]}),"\n",(0,o.jsxs)(n.p,{children:["For your development build you can find the connection details in the ",(0,o.jsx)(n.code,{children:"development.yaml"})," file."]}),"\n",(0,o.jsx)(n.p,{children:"An example of this could look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"...\ndatabase:\n  host: localhost\n  port: 8090\n  name: <YOUR_PROJECT_NAME>\n  user: postgres\n...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The variable ",(0,o.jsx)(n.code,{children:"name"})," refers to the database name."]}),"\n",(0,o.jsx)(n.h3,{id:"database-password",children:"Database password"}),"\n",(0,o.jsxs)(n.p,{children:["The database password is stored in a separate file called ",(0,o.jsx)(n.code,{children:"passwords.yaml"})," in the same directory. The password for each environment is stored under the ",(0,o.jsx)(n.code,{children:"database"})," keyword in the file."]}),"\n",(0,o.jsx)(n.p,{children:"An example of this could look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"...\ndevelopment:\n  database: '<MY DATABASE PASSWORD>'\n...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"development-database",children:"Development database"}),"\n",(0,o.jsxs)(n.p,{children:["A newly created Serverpod project comes with a preconfigured docker instance with Postgresql. All you have to do is run the following command from the root of the ",(0,o.jsx)(n.code,{children:"server"})," package to start the database."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," is required for this to work."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ docker compose up --build --detach\n"})}),"\n",(0,o.jsx)(n.p,{children:"To remove the database run (this commands preserve all data)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ docker compose down\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To remove the database and ",(0,o.jsx)(n.strong,{children:"delete"})," all data add the ",(0,o.jsx)(n.code,{children:"-v"})," flag."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ docker compose down -v\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var o=s(7294);const t={},a=o.createContext(t);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);