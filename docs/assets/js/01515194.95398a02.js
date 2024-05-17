"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[7620],{436:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=a(5893),n=a(1151);const i={},s="Upgrade to 1.2",o={id:"upgrading/upgrade-to-one-point-two",title:"Upgrade to 1.2",description:"Serverpod 1.2 introduces database migrations, a new way to handle database schema changes. This greatly simplifies the process of upgrading your database schema.",source:"@site/docs/12-upgrading/01-upgrade-to-one-point-two.md",sourceDirName:"12-upgrading",slug:"/upgrading/upgrade-to-one-point-two",permalink:"/next/upgrading/upgrade-to-one-point-two",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/12-upgrading/01-upgrade-to-one-point-two.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/next/contribute"}},d={},c=[{value:"Moved and renamed SQL file",id:"moved-and-renamed-sql-file",level:2},{value:"Initialize migration system",id:"initialize-migration-system",level:2},{value:"No data to preserve",id:"no-data-to-preserve",level:3},{value:"Data to preserve",id:"data-to-preserve",level:3},{value:"Closing remarks",id:"closing-remarks",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"upgrade-to-12",children:"Upgrade to 1.2"}),"\n",(0,t.jsx)(r.p,{children:"Serverpod 1.2 introduces database migrations, a new way to handle database schema changes. This greatly simplifies the process of upgrading your database schema."}),"\n",(0,t.jsx)(r.h2,{id:"moved-and-renamed-sql-file",children:"Moved and renamed SQL file"}),"\n",(0,t.jsxs)(r.p,{children:["Serverpod has moved and renamed the generated SQL file for the complete database schema. Instead of the file ",(0,t.jsx)(r.code,{children:"generated/tables.pgsql"}),", Serverpod now includes it as a part of each migration located in ",(0,t.jsx)(r.code,{children:"generated/migration/migrations"}),", under the name ",(0,t.jsx)(r.code,{children:"definition.sql"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"initialize-migration-system",children:"Initialize migration system"}),"\n",(0,t.jsx)(r.p,{children:"If your project was created before migrations were introduced in Serverpod, you need to run a one-time setup to make it compatible with the migrations system. There are two guides to help you upgrade: one for projects that don't need to preserve any data and another for those that do."}),"\n",(0,t.jsx)(r.p,{children:"The guides assume that you have already installed Serverpod 1.2 and that you have a project created with an earlier version of Serverpod."}),"\n",(0,t.jsx)(r.h3,{id:"no-data-to-preserve",children:"No data to preserve"}),"\n",(0,t.jsx)(r.p,{children:"If it is not important to preserve the data that is in your database, you can simply remove the database and let the migration system create a new one."}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Generate the project."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["This ensures that the project is up to date with the latest version of Serverpod. Navigate to your project's ",(0,t.jsx)(r.code,{children:"server"})," package directory and run the ",(0,t.jsx)(r.code,{children:"generate"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Create a migration for your project."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The migration system will create a migration as if the database needs to be initialized from scratch. Navigate to your project's ",(0,t.jsx)(r.code,{children:"server"})," package directory and run the ",(0,t.jsx)(r.code,{children:"create-migration"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ serverpod create-migration\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsx)(r.li,{children:"Recreate database."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"In a Serverpod development project, the database is hosted in a docker container. To remove the existing database and start a new one run the following commands:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ docker-compose down -v\n$ docker-compose up --build --detach \n"})}),"\n",(0,t.jsx)(r.p,{children:"The command first removes the running container along with its volume and the second command starts a new database from scratch."}),"\n",(0,t.jsxs)(r.ol,{start:"4",children:["\n",(0,t.jsx)(r.li,{children:"Initialize database from migration."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Initialize the database by applying the migration to it using the ",(0,t.jsx)(r.code,{children:"--apply-migrations"})," flag when starting the server."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ dart run bin/main.dart --apply-migrations\n"})}),"\n",(0,t.jsx)(r.h3,{id:"data-to-preserve",children:"Data to preserve"}),"\n",(0,t.jsx)(r.p,{children:"If your project already has data in the database that should be preserved, we can use the repair migration system to bring the project up to date with the migration system."}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Generate the project."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["This ensures that the project is up to date with the latest version of Serverpod. Navigate to your project's ",(0,t.jsx)(r.code,{children:"server"})," package directory and run the ",(0,t.jsx)(r.code,{children:"generate"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Create a migration for your project."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The migration system will create a migration as if the database needs to be initialized from scratch. Navigate to your project's ",(0,t.jsx)(r.code,{children:"server"})," package directory and run the ",(0,t.jsx)(r.code,{children:"create-migration"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ serverpod create-migration\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsx)(r.li,{children:"Create a repair migration."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The repair migration system will create a repair migration that makes your live database schema match the newly created migration. Navigate to your project's ",(0,t.jsx)(r.code,{children:"server"})," package directory and run the ",(0,t.jsx)(r.code,{children:"create-repair-migration"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ serverpod create-repair-migration\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"--mode"})," option to specify the database source to use. By default, the repair migration system connects to your ",(0,t.jsx)(r.code,{children:"development"})," database using the information specified in your Serverpod config."]}),"\n",(0,t.jsxs)(r.ol,{start:"4",children:["\n",(0,t.jsx)(r.li,{children:"Apply the repair migration to your database."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Apply the repair migration to your database using the ",(0,t.jsx)(r.code,{children:"--apply-repair-migration"})," flag when starting the server."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ dart run bin/main.dart --apply-repair-migration\n"})}),"\n",(0,t.jsx)(r.h2,{id:"closing-remarks",children:"Closing remarks"}),"\n",(0,t.jsx)(r.p,{children:"Your project is now compatible with the database migration system in Serverpod 1.2."}),"\n",(0,t.jsx)(r.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,a)=>{a.d(r,{Z:()=>o,a:()=>s});var t=a(7294);const n={},i=t.createContext(n);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);