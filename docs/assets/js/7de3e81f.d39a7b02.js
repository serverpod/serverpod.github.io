"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[1826],{5643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var s=t(5893),r=t(1151),a=t(4866),i=t(5162);const o={},l="Setup",u={id:"concepts/authentication/setup",title:"Setup",description:"Serverpod comes with built-in user management and authentication. The recommended way to authenticate users is to use the serverpod_auth module. The module makes it easy to authenticate with email or social sign-ins. It is also possible to build a custom authentication integration but that is an advanced use case and won't be necessary for most implementations. Currently supported is Signing in with email, Google, Apple, and Firebase. Future versions of the authentication module will include more options. If you write another authentication module, please consider contributing your code.",source:"@site/versioned_docs/version-1.1.1/05-concepts/09-authentication/01-setup.mdx",sourceDirName:"05-concepts/09-authentication",slug:"/concepts/authentication/setup",permalink:"/concepts/authentication/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/09-authentication/01-setup.mdx",tags:[],version:"1.1.1",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/concepts/modules"},next:{title:"The basics",permalink:"/concepts/authentication/basics"}},c={},d=[{value:"Installing the auth module",id:"installing-the-auth-module",level:2},{value:"Server setup",id:"server-setup",level:2},{value:"Initialize the auth database",id:"initialize-the-auth-database",level:3},{value:"Client setup",id:"client-setup",level:2},{value:"App setup",id:"app-setup",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Serverpod comes with built-in user management and authentication. The recommended way to authenticate users is to use the ",(0,s.jsx)(n.code,{children:"serverpod_auth"})," module. The module makes it easy to authenticate with email or social sign-ins. It is also possible to build a custom authentication integration but that is an advanced use case and won't be necessary for most implementations. Currently supported is Signing in with email, Google, Apple, and Firebase. Future versions of the authentication module will include more options. If you write another authentication module, please consider ",(0,s.jsx)(n.a,{href:"/contribute",children:"contributing"})," your code."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/sign-in.png",alt:"Sign-in with Serverpod"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-auth-module",children:"Installing the auth module"}),"\n",(0,s.jsx)(n.p,{children:"Serverpod's auth module makes it easy to authenticate users through email or 3rd parties. The authentication module also handles basic user information, such as user names and profile pictures. Make sure to use the same version numbers as for Serverpod itself for all dependencies."}),"\n",(0,s.jsx)(n.h2,{id:"server-setup",children:"Server setup"}),"\n",(0,s.jsxs)(n.p,{children:["Add the module as a dependency to the server projects ",(0,s.jsx)(n.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth: ^1.x.x\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add a nickname for the module in the ",(0,s.jsx)(n.code,{children:"config/generator.yaml"})," file. This nickname will be used as the name of the module in the code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"modules:\n  serverpod_auth:\n    nickname: auth\n"})}),"\n",(0,s.jsx)(n.h3,{id:"initialize-the-auth-database",children:"Initialize the auth database"}),"\n",(0,s.jsx)(n.p,{children:"Start your database container from the server project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up --build --detach\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/blob/main/modules/serverpod_auth/serverpod_auth_server/generated/tables.pgsql",children:"Copy / Download"})," the table definitions for the auth module. Save them as ",(0,s.jsx)(n.code,{children:"tables-auth.pgsql"})," in the ",(0,s.jsx)(n.code,{children:"generated"})," folder of your server project."]}),"\n",(0,s.jsx)(n.p,{children:"Run the SQL code on your database in your database viewer or run the docker command:"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(i.Z,{value:"unix",label:"MacOS & Linux",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker compose run -T --rm postgres env PGPASSWORD="<db_password>" psql -h postgres -U postgres -d <db_name> < generated/tables-auth.pgsql\n'})})}),(0,s.jsx)(i.Z,{value:"windows",label:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmd",children:'type .\\generated\\tables-auth.pgsql | docker compose run -T postgres env PGPASSWORD="<db_password>" psql -h postgres -U postgres -d <db_name>\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"<db_password>"})," needs to be replaced with the password for the database, you can find it inside the ",(0,s.jsx)(n.code,{children:"config/passwords.yaml"})," file inside the server project."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"<db_name>"})," is normally the same as ",(0,s.jsx)(n.code,{children:"project_name"})," the exact configuration can be found inside ",(0,s.jsx)(n.code,{children:"project_name/project_name_server/config/development.yaml"})]}),"\n",(0,s.jsx)(n.h2,{id:"client-setup",children:"Client setup"}),"\n",(0,s.jsxs)(n.p,{children:["Add the auth client in your client projects ",(0,s.jsx)(n.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  ...\n  serverpod_auth_client: ^1.x.x\n"})}),"\n",(0,s.jsx)(n.h2,{id:"app-setup",children:"App setup"}),"\n",(0,s.jsxs)(n.p,{children:["First, add dependencies to your app's ",(0,s.jsx)(n.code,{children:"pubspec.yaml"})," file for the methods of signing in that you want to support."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  flutter:\n    sdk: flutter\n  serverpod_flutter: ^1.x.x\n  auth_example_client:\n    path: ../auth_example_client\n  \n  serverpod_auth_shared_flutter: ^1.x.x\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, you need to set up a ",(0,s.jsx)(n.code,{children:"SessionManager"}),", which keeps track of the user's state. It will also handle the authentication keys passed to the client from the server, upload user profile images, etc."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"late SessionManager sessionManager;\nlate Client client;\n\nvoid main() async {\n  // Need to call this as we are using Flutter bindings before runApp is called.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // The android emulator does not have access to the localhost of the machine.\n  // const ipAddress = '10.0.2.2'; // Android emulator ip for the host\n\n  // On a real device replace the ipAddress with the IP address of your computer.\n  const ipAddress = 'localhost';\n\n  // Sets up a singleton client object that can be used to talk to the server from\n  // anywhere in our app. The client is generated from your server code.\n  // The client is set up to connect to a Serverpod running on a local server on\n  // the default port. You will need to modify this to connect to staging or\n  // production servers.\n  client = Client(\n    'http://$ipAddress:8080/',\n    authenticationKeyManager: FlutterAuthenticationKeyManager(),\n  )..connectivityMonitor = FlutterConnectivityMonitor();\n\n  // The session manager keeps track of the signed-in state of the user. You\n  // can query it to see if the user is currently signed in and get information\n  // about the user.\n  sessionManager = SessionManager(\n    caller: client.modules.auth,\n  );\n  await sessionManager.initialize();\n\n  runApp(MyApp());\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"SessionManager"})," has useful methods for viewing and monitoring the user's current state:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"signedInUser"})," will return a ",(0,s.jsx)(n.code,{children:"UserInfo"})," if the user is currently signed in (or ",(0,s.jsx)(n.code,{children:"null"})," if the user isn't signed in)."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"addListener"})," method to get notified of changes to the user's signed in state."]}),"\n",(0,s.jsxs)(n.li,{children:["Sign out a user by calling the ",(0,s.jsx)(n.code,{children:"signOut"})," method."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example it can be useful to subscribe to changes in the ",(0,s.jsx)(n.code,{children:"SessionManager"})," and force a rerender of your app."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",children:"@override\nvoid initState() {\n  super.initState();\n\n  // Rebuild the page if signed in status changes.\n  sessionManager.addListener(() {\n    setState(() {});\n  });\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var s=t(6010);const r={tabItem:"tabItem_Ymn6"};var a=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(7294),r=t(6010),a=t(2466),i=t(6550),o=t(469),l=t(1980),u=t(7392),c=t(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),b=(()=>{const e=u??g;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==s&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(7294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);