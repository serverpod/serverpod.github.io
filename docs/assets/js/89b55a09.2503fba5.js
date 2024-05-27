"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5239],{32499:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=i(85893),t=i(11151);const n={},s="Migrations",o={id:"concepts/database/migrations",title:"Migrations",description:"Serverpod comes bundled with a simple-to-use but powerful migration system that helps you keep your database schema up to date as your project evolves. Database migrations provide a structured way of upgrading your database while maintaining existing data.",source:"@site/versioned_docs/version-1.2.0/05-concepts/06-database/11-migrations.md",sourceDirName:"05-concepts/06-database",slug:"/concepts/database/migrations",permalink:"/1.2.0/concepts/database/migrations",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/06-database/11-migrations.md",tags:[],version:"1.2.0",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raw access",permalink:"/1.2.0/concepts/database/raw-access"},next:{title:"Caching",permalink:"/1.2.0/concepts/caching"}},d={},c=[{value:"Opt out of migrations",id:"opt-out-of-migrations",level:2},{value:"Creating a migration",id:"creating-a-migration",level:2},{value:"Force create migration",id:"force-create-migration",level:3},{value:"Tag migration",id:"tag-migration",level:3},{value:"Add data in a migration",id:"add-data-in-a-migration",level:3},{value:"Migrations directory structure",id:"migrations-directory-structure",level:3},{value:"Apply migrations",id:"apply-migrations",level:2},{value:"Creating a repair migration",id:"creating-a-repair-migration",level:2},{value:"Migration database source",id:"migration-database-source",level:3},{value:"Targeting a specific migration",id:"targeting-a-specific-migration",level:3},{value:"Force create repair migration",id:"force-create-repair-migration",level:3},{value:"Tag repair migration",id:"tag-repair-migration",level:3},{value:"Repair migrations directory structure",id:"repair-migrations-directory-structure",level:3},{value:"Applying a repair migration",id:"applying-a-repair-migration",level:2},{value:"Rolling back migrations",id:"rolling-back-migrations",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"migrations",children:"Migrations"}),"\n",(0,r.jsx)(a.p,{children:"Serverpod comes bundled with a simple-to-use but powerful migration system that helps you keep your database schema up to date as your project evolves. Database migrations provide a structured way of upgrading your database while maintaining existing data."}),"\n",(0,r.jsx)(a.p,{children:"A migration is a set of database operations (e.g. creating a table, adding a column, etc.) required to update the database schema to match the requirements of the project. Each migration handles both initializing a new database and rolling an existing one forward from a previous state."}),"\n",(0,r.jsx)(a.p,{children:"If you ever get out of sync with the migration system, repair migrations can be used to bring the database schema up to date with the migration system. Repair migrations identify the differences between the two and create a unique migration that brings the live database schema in sync with a migration database schema."}),"\n",(0,r.jsx)(a.h2,{id:"opt-out-of-migrations",children:"Opt out of migrations"}),"\n",(0,r.jsxs)(a.p,{children:["It is possible to selectively opt out of the migration system per table basis, by setting the ",(0,r.jsx)(a.code,{children:"managedMigration"})," key to false in your model. When this flag is set to false the generated migrations will not define any SQL code for this table. You will instead have to manually define and manage the life cycle of this table."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"class: Example\ntable: example\nmanagedMigration: false\nfields:\n  name: String\n"})}),"\n",(0,r.jsxs)(a.p,{children:["If you want to transition a manually managed table to then be managed by Serverpod you first need to set this flag to ",(0,r.jsx)(a.code,{children:"true"}),". Then you have two options:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Delete the old table you had created by yourself, and this will let Serverpod manage the schema from a clean state. However, this means that you would lose any data that was stored in the table."}),"\n",(0,r.jsxs)(a.li,{children:["Make sure that the table schema matches the expected schema you have configured. This can be done by either manually making sure the schema aligns, or by creating a ",(0,r.jsx)(a.a,{href:"#creating-a-repair-migration",children:"repair migration"})," to get back into the correct state."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"creating-a-migration",children:"Creating a migration"}),"\n",(0,r.jsxs)(a.p,{children:["To create a migration navigate to your project's ",(0,r.jsx)(a.code,{children:"server"})," package directory and run the ",(0,r.jsx)(a.code,{children:"create-migration"})," command."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ serverpod create-migration\n"})}),"\n",(0,r.jsxs)(a.p,{children:["The command reads the database schema from the last migration, then compares it to the database schema necessary to accommodate the projects, and any module dependencies, current database requirements. If differences are identified, a new migration is created in the ",(0,r.jsx)(a.code,{children:"migrations"})," directory to roll the database forward."]}),"\n",(0,r.jsx)(a.p,{children:"If no previous migration exists it will create a migration assuming there is no initial state."}),"\n",(0,r.jsxs)(a.p,{children:["See the ",(0,r.jsx)(a.a,{href:"../../upgrading/upgrade-to-one-point-two",children:"Pre-migration project upgrade path"})," section for more information on how to get started with migrations for any project created before migrations were introduced in Serverpod."]}),"\n",(0,r.jsx)(a.h3,{id:"force-create-migration",children:"Force create migration"}),"\n",(0,r.jsx)(a.p,{children:"The migration command aborts and displays an error under two conditions:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"When no changes are identified between the database schema in the latest migration and the schema required by the project."}),"\n",(0,r.jsx)(a.li,{children:"When there is a risk of data loss."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["To override these safeguards and force the creation of a migration, use the ",(0,r.jsx)(a.code,{children:"--force"})," flag."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ serverpod create-migration --force\n"})}),"\n",(0,r.jsx)(a.h3,{id:"tag-migration",children:"Tag migration"}),"\n",(0,r.jsxs)(a.p,{children:["Tags can be useful to identify migrations that introduced specific changes to the project. Tags are appended to the migration name and can be added with the ",(0,r.jsx)(a.code,{children:"--tag"})," option."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'$ serverpod create-migration --tag "v1-0-0"\n'})}),"\n",(0,r.jsxs)(a.p,{children:["This would create a migration named ",(0,r.jsx)(a.code,{children:"<timestamp>-v1-0-0"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\u251c\u2500\u2500 migrations\n\u2502    \u2514\u2500\u2500 20231205080937028-v1-0-0\n"})}),"\n",(0,r.jsx)(a.h3,{id:"add-data-in-a-migration",children:"Add data in a migration"}),"\n",(0,r.jsx)(a.p,{children:"Since the migrations are written in SQL, it is possible to add data to the database in a migration. This can be useful if you want to add initial data to the database."}),"\n",(0,r.jsx)(a.p,{children:"The developer is responsible for ensuring that any added SQL statements are compatible with the database schema and rolling forward from the previous migrations."}),"\n",(0,r.jsx)(a.h3,{id:"migrations-directory-structure",children:"Migrations directory structure"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"migrations"})," directory contains a folder for each migration that is created, looking like this for a project with two migrations:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\u251c\u2500\u2500 migrations\n\u2502    \u251c\u2500\u2500 20231205080937028\n\u2502    \u251c\u2500\u2500 20231205081959122\n\u2502    \u2514\u2500\u2500 migration_registry.txt \n"})}),"\n",(0,r.jsxs)(a.p,{children:["Every migration is denoted by a directory labeled with a timestamp indicating when the migration was generated. Within the directory, there is a ",(0,r.jsx)(a.code,{children:"migration_registry.txt"})," file. This file is automatically created whenever migrations are generated and serves the purpose of cataloging the migrations. Its primary function is to identify migration conflicts."]}),"\n",(0,r.jsx)(a.p,{children:"For each migration, five files are created:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"definition.json"})," - Contains the complete definition of the database schema, including any database schema changes from Serverpod module dependencies. This file is parsed by the Serverpod CLI to determine the target database schema for the migration."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"definition.sql"})," - Contains SQL statements to create the complete database schema. This file is applied when initializing a new database."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"definition_project.json"})," - Contains the definition of the database schema for only your project. This file is parsed by the Serverpod CLI to determine what tables are different by Serverpod modules."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"migration.json"})," - Contains the actions that are part of the migration. This file is parsed by the Serverpod CLI."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"migration.sql"})," - Contains SQL statements to update the database schema from the last migration to the current version. This file is applied when rolling the database forward."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"apply-migrations",children:"Apply migrations"}),"\n",(0,r.jsxs)(a.p,{children:["Migrations are applied using the server runtime. To apply migrations, navigate to your project's ",(0,r.jsx)(a.code,{children:"server"})," package directory, then start the server with the ",(0,r.jsx)(a.code,{children:"--apply-migrations"})," flag. Migrations are applied as part of the startup sequence and the framework asserts that each migration is only applied once to the database."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ dart run bin/main.dart --apply-migrations\n"})}),"\n",(0,r.jsx)(a.p,{children:"Migrations can also be applied using the maintenance role. In maintenance, after migrations are applied, the server exits with an exit code indicating if migrations were successfully applied, zero for success or non-zero for failure."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ dart run bin/main.dart --role maintenance --apply-migrations\n"})}),"\n",(0,r.jsx)(a.p,{children:"This is useful if migrations are applied as part of an automated process."}),"\n",(0,r.jsx)(a.p,{children:"If migrations are applied at the same time as repair migration, the repair migration is applied first."}),"\n",(0,r.jsx)(a.h2,{id:"creating-a-repair-migration",children:"Creating a repair migration"}),"\n",(0,r.jsx)(a.p,{children:"If the database has been manually modified the database schema may be out of sync with the migration system. In this case, a repair migration can be created to bring the database schema up to date with the migration system."}),"\n",(0,r.jsx)(a.p,{children:"By default, the command connects to and pulls a live database schema from a running development server."}),"\n",(0,r.jsxs)(a.p,{children:["To create a repair migration, navigate to your project's ",(0,r.jsx)(a.code,{children:"server"})," package directory and run the ",(0,r.jsx)(a.code,{children:"create-repair-migration"})," command."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ serverpod create-repair-migration\n"})}),"\n",(0,r.jsxs)(a.p,{children:["This creates a repair migration in the ",(0,r.jsx)(a.code,{children:"repair-migration"})," directory targeting the project's latest migration."]}),"\n",(0,r.jsx)(a.p,{children:"A repair migration is represented by a single SQL file that contains the SQL statements necessary to bring the database schema up to date with the migration system."}),"\n",(0,r.jsx)(a.admonition,{type:"warning",children:(0,r.jsxs)(a.p,{children:["To restore the integrity of the database schema, repair migrations will attempt to remove any tables that are not part of the migration system. To preserve manually created or managed tables the ",(0,r.jsx)(a.a,{href:"#repair-migrations-directory-structure",children:"repair migration"})," needs to be modified accordingly before application."]})}),"\n",(0,r.jsx)(a.p,{children:"Since each repair migration is created for a specific live database schema, Serverpod will overwrite the latest repair migration each time a new repair migration is created."}),"\n",(0,r.jsx)(a.h3,{id:"migration-database-source",children:"Migration database source"}),"\n",(0,r.jsxs)(a.p,{children:["By default, the repair migration system connects to your ",(0,r.jsx)(a.code,{children:"development"})," database using the information specified in your Serverpod config. To use a different database source, the ",(0,r.jsx)(a.code,{children:"--mode"})," option is used."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ serverpod create-repair-migration --mode production\n"})}),"\n",(0,r.jsx)(a.p,{children:"The command connects and pulls the live database schema from a running server."}),"\n",(0,r.jsx)(a.h3,{id:"targeting-a-specific-migration",children:"Targeting a specific migration"}),"\n",(0,r.jsxs)(a.p,{children:["Repair migrations can also target a specific migration version by specifying the migration name with the ",(0,r.jsx)(a.code,{children:"--version"})," option."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ serverpod create-repair-migration --version 20230821135718-v1-0-0\n"})}),"\n",(0,r.jsx)(a.p,{children:"This makes it possible to revert your database schema back to any older migration version."}),"\n",(0,r.jsx)(a.h3,{id:"force-create-repair-migration",children:"Force create repair migration"}),"\n",(0,r.jsx)(a.p,{children:"The repair migration command aborts and displays an error under two conditions:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"When no changes are identified between the database schema in the latest migration and the schema required by the project."}),"\n",(0,r.jsx)(a.li,{children:"When there is a risk of data loss."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["To override these safeguards and force the creation of a repair migration, use the ",(0,r.jsx)(a.code,{children:"--force"})," flag."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ serverpod create-repair-migration --force\n"})}),"\n",(0,r.jsx)(a.h3,{id:"tag-repair-migration",children:"Tag repair migration"}),"\n",(0,r.jsxs)(a.p,{children:["Repair migrations can be tagged just like regular migrations. Tags are appended to the migration name and can be added with the ",(0,r.jsx)(a.code,{children:"--tag"})," option."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'$ serverpod create-repair-migration --tag "reset-migrations"\n'})}),"\n",(0,r.jsxs)(a.p,{children:["This would create a repair migration named ",(0,r.jsx)(a.code,{children:"<timestamp>-reset-migrations"})," in the ",(0,r.jsx)(a.code,{children:"repair"})," directory:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\u251c\u2500\u2500 repair\n\u2502    \u2514\u2500\u2500 20230821135718-v1-0-0.sql\n"})}),"\n",(0,r.jsx)(a.h3,{id:"repair-migrations-directory-structure",children:"Repair migrations directory structure"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"repair"})," directory only exists if a repair migration has been created and contains a single SQL file containing statements to repair the database schema."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\u251c\u2500\u2500 repair\n\u2502    \u2514\u2500\u2500 20230821135718-v1-0-0.sql\n"})}),"\n",(0,r.jsx)(a.h2,{id:"applying-a-repair-migration",children:"Applying a repair migration"}),"\n",(0,r.jsxs)(a.p,{children:["The repair migration is applied using the server runtime. To apply a repair migration, start the server with the ",(0,r.jsx)(a.code,{children:"--apply-repair-migration"})," flag. The repair migration is applied as part of the startup sequence and the framework asserts that each repair migration is only applied once to the database."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ dart run bin/main.dart --apply-repair-migration\n"})}),"\n",(0,r.jsx)(a.p,{children:"The repair migration can also be applied using the maintenance role. In maintenance, after migrations are applied, the server exits with an exit code indicating if migrations were successfully applied, zero for success or non-zero for failure."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"$ dart run bin/main.dart --role maintenance --apply-repair-migration\n"})}),"\n",(0,r.jsx)(a.p,{children:"If a repair migration is applied at the same time as migrations, the repair migration is applied first."}),"\n",(0,r.jsx)(a.h2,{id:"rolling-back-migrations",children:"Rolling back migrations"}),"\n",(0,r.jsx)(a.p,{children:"Utilizing repair migrations it is easy to roll back the project to any migration. This is useful if you want to revert the database schema to a previous state. To roll back to a previous migration, create a repair migration targeting the migration you want to roll back to, then apply the repair migration."}),"\n",(0,r.jsx)(a.p,{children:"Note that data is not rolled back, only the database schema."})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>s});var r=i(67294);const t={},n=r.createContext(t);function s(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);