"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9298],{27769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(85893),o=t(11151);const a={},i="Get started",s={id:"get-started",title:"Get started",description:"This page should give you an understanding of how a Serverpod project is structured, how you make calls to endpoints, and how you communicate with the database. Before going through it, make sure that you have the latest version of Serverpod installed. In the previous section, you can learn how to set up the Serverpod command line tools and install Serverpod Insights.",source:"@site/docs/01-get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/next/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/01-get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing Serverpod",permalink:"/next/"},next:{title:"Capabilities",permalink:"/next/capabilities"}},d={},c=[{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"Starting the server",id:"starting-the-server",level:3},{value:"Running the demo app",id:"running-the-demo-app",level:3},{value:"Server overview",id:"server-overview",level:2},{value:"Generating code",id:"generating-code",level:3},{value:"Working with endpoints",id:"working-with-endpoints",level:3},{value:"Serializing data",id:"serializing-data",level:3},{value:"Working with the database",id:"working-with-the-database",level:2},{value:"Connecting to the database",id:"connecting-to-the-database",level:3},{value:"Migrations",id:"migrations",level:3},{value:"Object database mapping",id:"object-database-mapping",level:3},{value:"Writing to database",id:"writing-to-database",level:3},{value:"Reading from database",id:"reading-from-database",level:3},{value:"Where to go next",id:"where-to-go-next",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get-started",children:"Get started"}),"\n",(0,r.jsx)(n.p,{children:"This page should give you an understanding of how a Serverpod project is structured, how you make calls to endpoints, and how you communicate with the database. Before going through it, make sure that you have the latest version of Serverpod installed. In the previous section, you can learn how to set up the Serverpod command line tools and install Serverpod Insights."}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-new-project",children:"Creating a new project"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new project by running ",(0,r.jsx)(n.code,{children:"serverpod create"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ serverpod create mypod\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Serverpod executes the ",(0,r.jsx)(n.code,{children:"flutter create"})," command inside the flutter package during project creation. On Windows, ",(0,r.jsx)(n.code,{children:"flutter"})," commands require that developer mode is enabled in the system settings."]})}),"\n",(0,r.jsxs)(n.p,{children:["This command will create a new directory called ",(0,r.jsx)(n.code,{children:"mypod"}),", with three dart packages inside; ",(0,r.jsx)(n.code,{children:"mypod_server"}),", ",(0,r.jsx)(n.code,{children:"mypod_client"}),", and ",(0,r.jsx)(n.code,{children:"mypod_flutter"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mypod_server"}),": This package contains your server-side code. Modify it to add new endpoints or other features your server needs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mypod_client"}),": This is the code needed to communicate with the server. Typically, all code in this package is generated automatically, and you should not edit the files in this package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mypod_flutter"}),": This is the Flutter app, pre-configured to connect to your local server."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"starting-the-server",children:"Starting the server"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that ",(0,r.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker Desktop"})," is running, then start your Docker containers with ",(0,r.jsx)(n.code,{children:"docker compose up --build --detach"}),". It will start Postgres and Redis. Then, run ",(0,r.jsx)(n.code,{children:"dart bin/main.dart --apply-migrations"})," to start your server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ docker compose up --build --detach\n$ dart bin/main.dart --apply-migrations\n"})}),"\n",(0,r.jsx)(n.p,{children:"If everything is working, you should see something like this on your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SERVERPOD version: 1.x.x, mode: development, time: 2022-09-12 17:22:02.825468Z\nInsights listening on port 8081\nServer default listening on port 8080\nWebserver listening on port 8082\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If you need to stop the Docker containers at some point, just run ",(0,r.jsx)(n.code,{children:"docker compose stop"})," or use the Docker Desktop application. You can also use Docker Desktop to start, stop, and manage your containers."]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["In your development environment it can be helpful to always start Serverpod with the ",(0,r.jsx)(n.code,{children:"--apply-migrations"})," flag, as this will ensure that the database is always up-to-date with your latest migration. However, in production you should typically start the server without the flag, unless you want to actually apply a new migration."]})}),"\n",(0,r.jsx)(n.h3,{id:"running-the-demo-app",children:"Running the demo app"}),"\n",(0,r.jsxs)(n.p,{children:["Start the default demo app by changing the directory into the Flutter package that was created and running ",(0,r.jsx)(n.code,{children:"flutter run"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ cd mypod/mypod_flutter\n$ flutter run -d chrome\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The flag ",(0,r.jsx)(n.code,{children:"-d chrome"})," runs the app in Chrome, for other run options please see the Flutter documentation."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If you run the app on MacOS you will need to add permissions for outgoing connections in your Xcode project. To do this, open the ",(0,r.jsx)(n.code,{children:"Runner.xcworkspace"})," in Xcode. Then check the ",(0,r.jsx)(n.em,{children:"Outgoing Connections (Client)"})," under ",(0,r.jsx)(n.em,{children:"Runner"})," > ",(0,r.jsx)(n.em,{children:"Signing & Capabilities"})," > ",(0,r.jsx)(n.em,{children:"App Sandbox"}),". Make sure to add the capability for all run configurations."]})}),"\n",(0,r.jsx)(n.h2,{id:"server-overview",children:"Server overview"}),"\n",(0,r.jsx)(n.p,{children:"At first glance, the complexity of the server may seem daunting, but there are only a few directories and files you need to pay attention to. The rest of the files will be there when you need them in the future, e.g., when you want to deploy your server or if you want to set up continuous integration."}),"\n",(0,r.jsx)(n.p,{children:"These are the most important directories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config"}),": These are the configuration files for your Serverpod. These include a ",(0,r.jsx)(n.code,{children:"password.yaml"})," file with your passwords and configurations for running your server in development, staging, and production. By default, everything is correctly configured to run your server locally."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib/src/endpoints"}),": This is where you place your server's endpoints. When you add methods to an endpoint, Serverpod will generate the corresponding methods in your client."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib/src/model"}),": The model definition files are placed here. The files define the classes you can pass through your API and how they relate to your database. Serverpod generates serializable objects from the model definitions."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Both the ",(0,r.jsx)(n.code,{children:"endpoints"})," and ",(0,r.jsx)(n.code,{children:"model"})," directories contain sample files that give a quick idea of how they work. So this a great place to start learning."]}),"\n",(0,r.jsx)(n.h3,{id:"generating-code",children:"Generating code"}),"\n",(0,r.jsxs)(n.p,{children:["Whenever you change your code in either the ",(0,r.jsx)(n.code,{children:"endpoints"})," or ",(0,r.jsx)(n.code,{children:"model"})," directory, you will need to regenerate the classes managed by Serverpod. Do this by running ",(0,r.jsx)(n.code,{children:"serverpod generate"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ serverpod generate\n"})}),"\n",(0,r.jsx)(n.h3,{id:"working-with-endpoints",children:"Working with endpoints"}),"\n",(0,r.jsxs)(n.p,{children:["Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated. For the code to be generated, you need to place your endpoint in the ",(0,r.jsx)(n.code,{children:"lib/src/endpoints"})," directory of your server. Your endpoint should extend the ",(0,r.jsx)(n.code,{children:"Endpoint"})," class. For methods to be generated, they need to return a typed ",(0,r.jsx)(n.code,{children:"Future"}),", and its first parameter should be a ",(0,r.jsx)(n.code,{children:"Session"})," object. The ",(0,r.jsx)(n.code,{children:"Session"})," object holds information about the call being made and provides access to the database."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above code will create an endpoint called ",(0,r.jsx)(n.code,{children:"example"})," (the Endpoint suffix will be removed) with the single ",(0,r.jsx)(n.code,{children:"hello"})," method. To generate the client-side code run ",(0,r.jsx)(n.code,{children:"serverpod generate"})," in the home directory of the server."]}),"\n",(0,r.jsx)(n.p,{children:"On the client side, you can now invoke the method by calling:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var result = await client.example.hello('World');\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To learn more about endpoints, see the ",(0,r.jsx)(n.a,{href:"concepts/working-with-endpoints",children:"Working with endpoints"})," section."]})}),"\n",(0,r.jsx)(n.h3,{id:"serializing-data",children:"Serializing data"}),"\n",(0,r.jsx)(n.p,{children:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database."}),"\n",(0,r.jsxs)(n.p,{children:["The structure for your serialized classes is defined in yaml-files in the ",(0,r.jsx)(n.code,{children:"lib/src/model"})," directory. Run ",(0,r.jsx)(n.code,{children:"serverpod generate"})," in the home directory of the server to build the Dart code for the classes and make them accessible to both the server and client."]}),"\n",(0,r.jsx)(n.p,{children:"Here is a simple example of a yaml-file defining a serializable class:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Supported types are ",(0,r.jsx)(n.code,{children:"bool"}),", ",(0,r.jsx)(n.code,{children:"int"}),", ",(0,r.jsx)(n.code,{children:"double"}),", ",(0,r.jsx)(n.code,{children:"String"}),", ",(0,r.jsx)(n.code,{children:"DateTime"}),", ",(0,r.jsx)(n.code,{children:"ByteData"}),", and other serializable classes. You can also use ",(0,r.jsx)(n.code,{children:"List"}),"s and ",(0,r.jsx)(n.code,{children:"Map"}),"s of the supported types, just make sure to specify the types. Null safety is supported. The keys of ",(0,r.jsx)(n.code,{children:"Map"})," must be non-nullable ",(0,r.jsx)(n.code,{children:"String"}),"s. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can also create custom serialized classes with tools such as Freezed. Learn more in the ",(0,r.jsx)(n.a,{href:"concepts/serialization",children:"Serialization"})," section."]})}),"\n",(0,r.jsx)(n.h2,{id:"working-with-the-database",children:"Working with the database"}),"\n",(0,r.jsx)(n.p,{children:"A core feature of Serverpod is to query the database easily. Serverpod provides an ORM that supports type and null safety."}),"\n",(0,r.jsx)(n.h3,{id:"connecting-to-the-database",children:"Connecting to the database"}),"\n",(0,r.jsxs)(n.p,{children:["When working with the database, it is common that you want to connect to it with a database viewer such as ",(0,r.jsx)(n.a,{href:"https://eggerapps.at/postico2/",children:"Postico2"}),", ",(0,r.jsx)(n.a,{href:"https://www.pgadmin.org/download/",children:"PgAdmin"}),", or ",(0,r.jsx)(n.a,{href:"https://dbeaver.io/download/",children:"DBeaver"}),". To connect to the database, you need to specify the host and port along with the database name, user name, and password. In your project, you can find these inside the ",(0,r.jsx)(n.code,{children:"config"})," directory."]}),"\n",(0,r.jsxs)(n.p,{children:["The connection details can be found in the file ",(0,r.jsx)(n.code,{children:"config/development.yaml"}),". The variable ",(0,r.jsx)(n.code,{children:"name"})," refers to the database name (which is your project name only)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"database:\n  host: localhost\n  port: 8090\n  name: projectname\n  user: postgres\n\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The password can be found in the file ",(0,r.jsx)(n.code,{children:"config/passwords.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"development:\n  database: '<MY DATABASE PASSWORD>'\n\n...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"migrations",children:"Migrations"}),"\n",(0,r.jsxs)(n.p,{children:["With database migrations, Serverpod makes it easy to evolve your database schema. When you make changes to your project that should be reflected in your database, you need to create a migration. A migration is a set of SQL queries that are run to update the database. To create a migration, run ",(0,r.jsx)(n.code,{children:"serverpod create-migration"})," in the home directory of the server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ serverpod create-migration\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Migrations are then applied to the database as part of the server startup by adding the ",(0,r.jsx)(n.code,{children:"--apply-migrations"})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ dart bin/main.dart --apply-migrations\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To learn more about database migrations, see the ",(0,r.jsx)(n.a,{href:"concepts/database/migrations",children:"Migrations"})," section."]})}),"\n",(0,r.jsx)(n.h3,{id:"object-database-mapping",children:"Object database mapping"}),"\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.code,{children:"table"})," key to your model file to add a mapping to the database. The value specified after the key sets the database table name. Here is the ",(0,r.jsx)(n.code,{children:"Company"})," class from earlier with a database table mapping to a table called ",(0,r.jsx)(n.code,{children:"company"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n"})}),"\n",(0,r.jsxs)(n.p,{children:["CRUD operations are available through the static ",(0,r.jsx)(n.code,{children:"db"})," method on all classes with database bindings."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To learn more about database CRUD operations, see the ",(0,r.jsx)(n.a,{href:"concepts/database/CRUD",children:"CRUD"})," section."]})}),"\n",(0,r.jsx)(n.h3,{id:"writing-to-database",children:"Writing to database"}),"\n",(0,r.jsxs)(n.p,{children:["Inserting a new row into the database is as simple as calling the static ",(0,r.jsx)(n.code,{children:"db.insertRow"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var myCompany = Company(name: 'Serverpod corp.', foundedDate: DateTime.now());\nmyCompany = await Company.db.insertRow(session, myCompany);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The method returns the inserted object with its ",(0,r.jsx)(n.code,{children:"id"})," field set from the database."]}),"\n",(0,r.jsx)(n.h3,{id:"reading-from-database",children:"Reading from database"}),"\n",(0,r.jsxs)(n.p,{children:["Retrieving a single row from the database can done by calling the static ",(0,r.jsx)(n.code,{children:"db.findById"})," method and providing the ",(0,r.jsx)(n.code,{children:"id"})," of the row."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var myCompany = await Company.db.findById(session, companyId);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use an expression to do a more refined search through the ",(0,r.jsx)(n.code,{children:"db.findSingleRow(...)"}),". method. The ",(0,r.jsx)(n.code,{children:"where"})," parameter is a typed expression builder. The builder's parameter, ",(0,r.jsx)(n.code,{children:"t"}),", contains a description of the table and gives access to the table's columns."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"var myCompany = await Company.db.findSingleRow(\n  session,\n  where: (t) => t.name.equals('My Company'),\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The example above will return a single row from the database where the ",(0,r.jsx)(n.code,{children:"name"})," column is equal to ",(0,r.jsx)(n.code,{children:"My Company"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If no matching row is found, ",(0,r.jsx)(n.code,{children:"null"})," is returned."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Working with a database is an extensive subject. Learn more in the ",(0,r.jsx)(n.a,{href:"concepts/database/connection",children:"Database"})," section."]})}),"\n",(0,r.jsx)(n.h2,{id:"where-to-go-next",children:"Where to go next"}),"\n",(0,r.jsxs)(n.p,{children:["You should now have a basic understanding of how Serverpod works. The different topics are described in more detail in the ",(0,r.jsx)(n.em,{children:"Concepts"})," section of the documentation. If you are unfamiliar with server-side development, a good staring place for learning is to do the ",(0,r.jsx)(n.a,{href:"tutorials/first-app",children:"Build your first app"})," tutorial. There are also many good video tutorials linked in the ",(0,r.jsx)(n.em,{children:"Tutorials"})," section."]}),"\n",(0,r.jsxs)(n.p,{children:["If you get stuck, never be afraid to ask questions in our ",(0,r.jsx)(n.a,{href:"https://github.com/serverpod/serverpod/discussions",children:"community on Github"}),". The Serverpod team is very active there, and many questions are also answered by other developers in the community."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);