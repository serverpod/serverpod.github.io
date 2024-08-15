"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[8492],{15210:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(85893),t=a(11151);const i={},d="Upgrade to 1.2",s={id:"upgrading/upgrade-to-one-point-two",title:"Upgrade to 1.2",description:"Serverpod 1.2. is backward compatible with Serverpod 1.0 and Serverpod 1.1. There are a few changes to the database layer, meaning you probably want to use the new methods. The old methods still works, but have been deprecated and will be permanently removed with the upcoming version 2.",source:"@site/versioned_docs/version-1.2.0/12-upgrading/01-upgrade-to-one-point-two.md",sourceDirName:"12-upgrading",slug:"/upgrading/upgrade-to-one-point-two",permalink:"/1.2.0/upgrading/upgrade-to-one-point-two",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/12-upgrading/01-upgrade-to-one-point-two.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/1.2.0/contribute"}},o={},l=[{value:"Updating your CLI",id:"updating-your-cli",level:2},{value:"Updating your pubspecs",id:"updating-your-pubspecs",level:2},{value:"Update to Dart 3",id:"update-to-dart-3",level:3},{value:"Deprecated methods",id:"deprecated-methods",level:2},{value:"Model changes",id:"model-changes",level:2},{value:"Moved and renamed SQL file",id:"moved-and-renamed-sql-file",level:2},{value:"Initialize the migration system",id:"initialize-the-migration-system",level:2},{value:"No data to preserve",id:"no-data-to-preserve",level:3},{value:"Data to preserve",id:"data-to-preserve",level:3},{value:"Closing remarks",id:"closing-remarks",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upgrade-to-12",children:"Upgrade to 1.2"})}),"\n",(0,r.jsx)(n.p,{children:"Serverpod 1.2. is backward compatible with Serverpod 1.0 and Serverpod 1.1. There are a few changes to the database layer, meaning you probably want to use the new methods. The old methods still works, but have been deprecated and will be permanently removed with the upcoming version 2."}),"\n",(0,r.jsx)(n.p,{children:"Database migrations are new in Serverpod 1.2. You can still opt to manage your database manually, but it is recommended that you move to the new migration system. Using the new migration will make keeping your database up-to-date much easier."}),"\n",(0,r.jsx)(n.h2,{id:"updating-your-cli",children:"Updating your CLI"}),"\n",(0,r.jsx)(n.p,{children:"To update you Serverpod command line interface to the latest version, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dart pub global activate serverpod_cli\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can verify that you have the latest version installed by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"serverpod version\n"})}),"\n",(0,r.jsx)(n.h2,{id:"updating-your-pubspecs",children:"Updating your pubspecs"}),"\n",(0,r.jsxs)(n.p,{children:["To move to Serverpod 1.2, you will need to update the ",(0,r.jsx)(n.code,{children:"pubspec.yaml"})," files of your ",(0,r.jsx)(n.code,{children:"server"}),", ",(0,r.jsx)(n.code,{children:"client"}),", and ",(0,r.jsx)(n.code,{children:"flutter"})," directories. Anywhere ",(0,r.jsx)(n.code,{children:"serverpod"})," is mentioned, change the version to ",(0,r.jsx)(n.code,{children:"1.2.0"})," (or any later version of Serverpod 1.2). It is recommended to use explicit versions of the Serverpod packages, to make sure that they are all compatible."]}),"\n",(0,r.jsx)(n.h3,{id:"update-to-dart-3",children:"Update to Dart 3"}),"\n",(0,r.jsxs)(n.p,{children:["This update has bumped the minimum required dart version to ",(0,r.jsx)(n.code,{children:"3.0.0"}),". You will have to change the Dart SDK version in all your ",(0,r.jsx)(n.code,{children:"pubspec.yaml"})," files."]}),"\n",(0,r.jsx)(n.p,{children:"Old pubspec.yaml configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"...\nenvironment:\n  sdk: '>=2.19.0 <4.0.0'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Updated pubspec.yaml configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"...\nenvironment:\n  sdk: '>=3.0.0 <4.0.0'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Dockerfile"})," in your project should be updated with the new Dart version:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-docker",children:"FROM dart:3.0 AS build\n\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After updating your ",(0,r.jsx)(n.code,{children:"pubspec.yaml"})," files, make sure to run ",(0,r.jsx)(n.code,{children:"dart pub update"})," on all your packages. You must also run ",(0,r.jsx)(n.code,{children:"serverpod generate"})," in your ",(0,r.jsx)(n.code,{children:"server"})," directory."]}),"\n",(0,r.jsx)(n.h2,{id:"deprecated-methods",children:"Deprecated methods"}),"\n",(0,r.jsxs)(n.p,{children:["In this version, we have completely reworked the database layer of Serverpod. The new methods have been placed under a static ",(0,r.jsx)(n.code,{children:"db"})," field on the generated models. The old methods are still available, but the deprecation warnings will guide you toward moving to the updated API."]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["A few of the methods work slightly differently in their new versions. Most notably, the ",(0,r.jsx)(n.code,{children:"insertRow"})," method will not modify the model you pass to it. Instead, it will return a modified copy with the inserted row ",(0,r.jsx)(n.code,{children:"id"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// The new find method is a drop-in replacement.\nExample.find(...); // old\nExample.db.find(...); // new\n\n// The old findSingleRow method has changed name to findFirstRow but is otherwise a drop-in replacement.\nExample.findSingleRow(...);\nExample.db.findFirstRow(...);\n\n// The new findById method is a drop-in replacement.\nExample.findById(...); // old\nExample.db.findById(...); // new\n\n// The old delete method has been renamed to deleteWhere and now returns a list of ids of rows that was deleted.\nExample.delete(...);\nExample.db.deleteWhere(...);\n\n// The new findById method is a drop-in replacement but returns the id of the row deleted.\nExample.deleteRow(...); // old\nExample.db.deleteRow(...); // new\n\n// The old update method has been renamed too updateRow and now returns the entire updated object as a new copy.\nExample.update(...);\nExample.db.updateRow(...);\n\n// The old insert method has been renamed too insertRow. The object you pass in is no longer modified, instead a new copy with the added row is returned which contains the inserted id. This means no mutations of the input object.\nExample.insert(...);\nExample.db.insertRow(...);\n\n// The new count method is a drop-in replacement.\nExample.count(...);\nExample.db.count(...);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"model-changes",children:"Model changes"}),"\n",(0,r.jsxs)(n.p,{children:["We have made some improvements to the Serverpod model files (previously referred to as protocol files or serializable entities). By default, the model files are now located in the ",(0,r.jsx)(n.code,{children:"lib/src/models/"})," directory, although using ",(0,r.jsx)(n.code,{children:"lib/src/protocol"})," still works."]}),"\n",(0,r.jsxs)(n.p,{children:["When making the improvements to the model files, we made additions and changes to the syntax. All old keywords still work, but ",(0,r.jsx)(n.code,{children:"serverpod generate"})," will give deprecation warnings, guiding you toward updating your models. The changes are listed below."]}),"\n",(0,r.jsxs)(n.p,{children:["The keyword ",(0,r.jsx)(n.code,{children:"api"})," has been deprecated and replaced with the new keyword ",(0,r.jsx)(n.code,{children:"!persist"})," as a drop-in replacement."]}),"\n",(0,r.jsx)(n.p,{children:"Old syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  name: String\n  apiField: String, api\n"})}),"\n",(0,r.jsx)(n.p,{children:"New syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  name: String\n  apiField: String, !persist\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The keyword ",(0,r.jsx)(n.code,{children:"database"})," has been deprecated and replaced with the new keyword ",(0,r.jsx)(n.code,{children:"scope"})," with the value ",(0,r.jsx)(n.code,{children:"serverOnly"})," as a drop-in replacement."]}),"\n",(0,r.jsx)(n.p,{children:"Old syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  name: String\n  serverField: String, database\n"})}),"\n",(0,r.jsx)(n.p,{children:"New syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  name: String\n  serverField: String, scope=serverOnly\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The keyword ",(0,r.jsx)(n.code,{children:"parent"})," has been moved and should be placed inside the new ",(0,r.jsx)(n.code,{children:"relation"})," keyword, see the section on ",(0,r.jsx)(n.a,{href:"../concepts/database/relations/one-to-one",children:"relations"})," for the full new feature set."]}),"\n",(0,r.jsx)(n.p,{children:"Old syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  name: String\n  parentId: int, parent=example\n"})}),"\n",(0,r.jsx)(n.p,{children:"New Syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Example\ntable: example\nfields:\n  name: String\n  parentId: int, relation(parent=example)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"moved-and-renamed-sql-file",children:"Moved and renamed SQL file"}),"\n",(0,r.jsxs)(n.p,{children:["Serverpod has moved and renamed the generated SQL file for the complete database schema. Instead of the file ",(0,r.jsx)(n.code,{children:"generated/tables.pgsql"}),", Serverpod now includes it as a part of each migration located in the ",(0,r.jsx)(n.code,{children:"migrations"})," directory, under the name ",(0,r.jsx)(n.code,{children:"definition.sql"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"initialize-the-migration-system",children:"Initialize the migration system"}),"\n",(0,r.jsx)(n.p,{children:"If your project was created before migrations were introduced in Serverpod, you need to run a one-time setup to make it compatible with the new migration system. There are two guides to help you upgrade: one for projects that don't need to preserve any data and another for those that do."}),"\n",(0,r.jsx)(n.p,{children:"The guides assume that you have already installed Serverpod 1.2 and that you have a project created with an earlier version of Serverpod."}),"\n",(0,r.jsx)(n.h3,{id:"no-data-to-preserve",children:"No data to preserve"}),"\n",(0,r.jsx)(n.p,{children:"If it is not important to preserve the data that is in your database, you can simply remove the database and let the migration system create a new one."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Generate the project."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This ensures that the project is up to date with the latest version of Serverpod. Navigate to your project's ",(0,r.jsx)(n.code,{children:"server"})," package directory and run the ",(0,r.jsx)(n.code,{children:"generate"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Create a migration for your project."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The migration system will create a migration as if the database needs to be initialized from scratch. Navigate to your project's ",(0,r.jsx)(n.code,{children:"server"})," package directory and run the ",(0,r.jsx)(n.code,{children:"create-migration"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ serverpod create-migration\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Recreate database."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In a Serverpod development project, the database is hosted in a docker container. To remove the existing database and start a new one run the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker-compose down -v\n$ docker-compose up --build --detach \n"})}),"\n",(0,r.jsx)(n.p,{children:"The command first removes the running container along with its volume and the second command starts a new database from scratch."}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Initialize database from migration."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Initialize the database by applying the migration to it using the ",(0,r.jsx)(n.code,{children:"--apply-migrations"})," flag when starting the server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ dart run bin/main.dart --apply-migrations\n"})}),"\n",(0,r.jsx)(n.h3,{id:"data-to-preserve",children:"Data to preserve"}),"\n",(0,r.jsx)(n.p,{children:"If your project already has data in the database that should be preserved, we can use the repair migration system to bring the project up to date with the migration system."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Generate the project."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This ensures that the project is up to date with the latest version of Serverpod. Navigate to your project's ",(0,r.jsx)(n.code,{children:"server"})," package directory and run the ",(0,r.jsx)(n.code,{children:"generate"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Create a migration for your project."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The migration system will create a migration as if the database needs to be initialized from scratch. Navigate to your project's ",(0,r.jsx)(n.code,{children:"server"})," package directory and run the ",(0,r.jsx)(n.code,{children:"create-migration"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ serverpod create-migration\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Create a repair migration."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The repair migration system will create a repair migration that makes your live database schema match the newly created migration. To enable the command to fetch your live database schema it requires a running server. Navigate to your project's ",(0,r.jsx)(n.code,{children:"server"})," package directory and start the server, then run the ",(0,r.jsx)(n.code,{children:"create-repair-migration"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ dart run bin/main.dart\n$ serverpod create-repair-migration\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"When starting the server, warnings will be displayed about the database schema not matching the target database schema. These warnings are expected and can safely be ignored when creating the repair migration."})}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"--mode"})," option to specify the database source to use. By default, the repair migration system connects to your ",(0,r.jsx)(n.code,{children:"development"})," database using the information specified in your Serverpod config."]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Apply the repair migration to your database."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To apply the repair migration to your database, restart the server using the ",(0,r.jsx)(n.code,{children:"--apply-repair-migration"})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ dart run bin/main.dart --apply-repair-migration\n"})}),"\n",(0,r.jsx)(n.h2,{id:"closing-remarks",children:"Closing remarks"}),"\n",(0,r.jsx)(n.p,{children:"Your project is now compatible with the database migration system in Serverpod 1.2."}),"\n",(0,r.jsx)(n.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>d});var r=a(67294);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);