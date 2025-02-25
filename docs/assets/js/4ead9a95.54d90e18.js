"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[81509],{5654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"get-started","title":"Get started","description":"This page will help you understand how a Serverpod project is structured, how to make calls to endpoints, and how to communicate with the database.","source":"@site/versioned_docs/version-2.1.0/01-get-started.md","sourceDirName":".","slug":"/get-started","permalink":"/2.1.0/get-started","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.1.0/01-get-started.md","tags":[],"version":"2.1.0","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Installing Serverpod","permalink":"/2.1.0/"},"next":{"title":"Get started with Mini","permalink":"/2.1.0/get-started-with-mini"}}');var s=n(74848),i=n(28453);const o={},d="Get started",a={},l=[{value:"Serverpod or Serverpod Mini?",id:"serverpod-or-serverpod-mini",level:2},{value:"Creating a new Serverpod project",id:"creating-a-new-serverpod-project",level:2},{value:"Starting the server",id:"starting-the-server",level:3},{value:"Running the demo app",id:"running-the-demo-app",level:3},{value:"Server overview",id:"server-overview",level:2},{value:"Generating code",id:"generating-code",level:3},{value:"Working with endpoints",id:"working-with-endpoints",level:3},{value:"Serializing data",id:"serializing-data",level:3},{value:"Working with the database",id:"working-with-the-database",level:2},{value:"Connecting to the database",id:"connecting-to-the-database",level:3},{value:"Migrations",id:"migrations",level:3},{value:"Object database mapping",id:"object-database-mapping",level:3},{value:"Writing to database",id:"writing-to-database",level:3},{value:"Reading from database",id:"reading-from-database",level:3},{value:"Where to go next",id:"where-to-go-next",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"get-started",children:"Get started"})}),"\n",(0,s.jsx)(t.p,{children:"This page will help you understand how a Serverpod project is structured, how to make calls to endpoints, and how to communicate with the database."}),"\n",(0,s.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0"},children:(0,s.jsx)("iframe",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/FwttjcKyWFk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,s.jsx)(t.h2,{id:"serverpod-or-serverpod-mini",children:"Serverpod or Serverpod Mini?"}),"\n",(0,s.jsx)(t.p,{children:"Serverpod Mini is a lightweight version of Serverpod that is perfect for small projects or when you want to try out Serverpod without setting up a Postgres database. If you start with Mini, you can upgrade to the full version of Serverpod anytime."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"get-started-with-mini",children:"Get started with Mini"})})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(t.strong,{children:"Serverpod vs Serverpod Mini comparison"})}),(0,s.jsx)("p",{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Feature"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Serverpod"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Serverpod Mini"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Remote method calls"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Generated data models"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Streaming data"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Custom auth"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pre-built auth"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Postgres database ORM"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Task scheduling"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Basic logging"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Serverpod Insights"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Caching"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"File uploads"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Health checks"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Relic web server"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Easy deployment"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-new-serverpod-project",children:"Creating a new Serverpod project"}),"\n",(0,s.jsxs)(t.p,{children:["The full version of Serverpod needs access to a Postgres database. The easiest way to set that up is to use our pre-configured Docker container. Install ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://flutter.dev/docs/get-started/install",children:"Flutter"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/",children:"Serverpod"})})," and ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://docs.docker.com/get-docker/",children:"Docker Desktop"})})," before you begin."]}),"\n",(0,s.jsxs)(t.p,{children:["Create a new project by running ",(0,s.jsx)(t.code,{children:"serverpod create"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ serverpod create mypod\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Serverpod executes the ",(0,s.jsx)(t.code,{children:"flutter create"})," command inside the flutter package during project creation. On Windows, ",(0,s.jsx)(t.code,{children:"flutter"})," commands require that developer mode is enabled in the system settings."]})}),"\n",(0,s.jsxs)(t.p,{children:["This command will create a new directory called ",(0,s.jsx)(t.code,{children:"mypod"}),", with three dart packages inside; ",(0,s.jsx)(t.code,{children:"mypod_server"}),", ",(0,s.jsx)(t.code,{children:"mypod_client"}),", and ",(0,s.jsx)(t.code,{children:"mypod_flutter"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"mypod_server"}),": This package contains your server-side code. Modify it to add new endpoints or other features your server needs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"mypod_client"}),": This is the code needed to communicate with the server. Typically, all code in this package is generated automatically, and you should not edit the files in this package."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"mypod_flutter"}),": This is the Flutter app, pre-configured to connect to your local server."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"starting-the-server",children:"Starting the server"}),"\n",(0,s.jsxs)(t.p,{children:["Make sure that ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker Desktop"})})," is running, then start your Docker containers with ",(0,s.jsx)(t.code,{children:"docker compose up --build --detach"}),". It will start Postgres and Redis. Then, run ",(0,s.jsx)(t.code,{children:"dart bin/main.dart --apply-migrations"})," to start your server."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ docker compose up --build --detach\n$ dart bin/main.dart --apply-migrations\n"})}),"\n",(0,s.jsx)(t.p,{children:"If everything is working, you should see something like this on your terminal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"SERVERPOD version: 2.x.x, mode: development, time: 2022-09-12 17:22:02.825468Z\nInsights listening on port 8081\nServer default listening on port 8080\nWebserver listening on port 8082\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["If you need to stop the Docker containers at some point, just run ",(0,s.jsx)(t.code,{children:"docker compose stop"})," or use the Docker Desktop application. You can also use Docker Desktop to start, stop, and manage your containers."]})}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["In your development environment it can be helpful to always start Serverpod with the ",(0,s.jsx)(t.code,{children:"--apply-migrations"})," flag, as this will ensure that the database is always up-to-date with your latest migration. However, in production you should typically start the server without the flag, unless you want to actually apply a new migration."]})}),"\n",(0,s.jsx)(t.h3,{id:"running-the-demo-app",children:"Running the demo app"}),"\n",(0,s.jsxs)(t.p,{children:["Start the default demo app by changing the directory into the Flutter package that was created and running ",(0,s.jsx)(t.code,{children:"flutter run"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd mypod/mypod_flutter\n$ flutter run -d chrome\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The flag ",(0,s.jsx)(t.code,{children:"-d chrome"})," runs the app in Chrome, for other run options please see the Flutter documentation."]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"iOS Simulator"}),": Because an iOS simulator has its own localhost, it won't find the server running on your machine. Therefore, you will need to pass the IP address of your machine when creating the client in ",(0,s.jsx)(t.code,{children:"mypod/mypod_flutter/lib/main.dart"}),". Depending on your local network, it might look something like this:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"var client = Client('http://192.168.1.117:8080/')\n  ..connectivityMonitor = FlutterConnectivityMonitor();\n"})})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"MacOS"}),":\nIf you run the app on MacOS, you will need to add permissions for outgoing connections in your Xcode project. To do this, open the ",(0,s.jsx)(t.code,{children:"Runner.xcworkspace"})," in Xcode. Then check the ",(0,s.jsx)(t.em,{children:"Outgoing Connections (Client)"})," under ",(0,s.jsx)(t.em,{children:"Runner"})," > ",(0,s.jsx)(t.em,{children:"Signing & Capabilities"})," > ",(0,s.jsx)(t.em,{children:"App Sandbox"}),". Make sure to add the capability for all run configurations."]})}),"\n",(0,s.jsx)(t.h2,{id:"server-overview",children:"Server overview"}),"\n",(0,s.jsx)(t.p,{children:"At first glance, the complexity of the server may seem daunting, but there are only a few directories and files you need to pay attention to. The rest of the files will be there when you need them in the future, e.g., when you want to deploy your server or if you want to set up continuous integration."}),"\n",(0,s.jsx)(t.p,{children:"These are the most important directories:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"config"}),": These are the configuration files for your Serverpod. These include a ",(0,s.jsx)(t.code,{children:"password.yaml"})," file with your passwords and configurations for running your server in development, staging, and production. By default, everything is correctly configured to run your server locally."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"lib/src/endpoints"}),": This is where you place your server's endpoints. When you add methods to an endpoint, Serverpod will generate the corresponding methods in your client."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"lib/src/models"}),": The model definition files are placed here. The files define the classes you can pass through your API and how they relate to your database. Serverpod generates serializable objects from the model definitions."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Both the ",(0,s.jsx)(t.code,{children:"endpoints"})," and ",(0,s.jsx)(t.code,{children:"models"})," directories contain sample files that give a quick idea of how they work. So this a great place to start learning."]}),"\n",(0,s.jsx)(t.h3,{id:"generating-code",children:"Generating code"}),"\n",(0,s.jsxs)(t.p,{children:["Whenever you change your code in either the ",(0,s.jsx)(t.code,{children:"endpoints"})," or ",(0,s.jsx)(t.code,{children:"models"})," directory, you will need to regenerate the classes managed by Serverpod. Do this by running ",(0,s.jsx)(t.code,{children:"serverpod generate"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ serverpod generate\n"})}),"\n",(0,s.jsx)(t.h3,{id:"working-with-endpoints",children:"Working with endpoints"}),"\n",(0,s.jsxs)(t.p,{children:["Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated. For the code to be generated, you need to place your endpoint in the ",(0,s.jsx)(t.code,{children:"lib/src/endpoints"})," directory of your server. Your endpoint should extend the ",(0,s.jsx)(t.code,{children:"Endpoint"})," class. For methods to be generated, they need to return a typed ",(0,s.jsx)(t.code,{children:"Future"}),", and its first parameter should be a ",(0,s.jsx)(t.code,{children:"Session"})," object. The ",(0,s.jsx)(t.code,{children:"Session"})," object holds information about the call being made and provides access to the database."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The above code will create an endpoint called ",(0,s.jsx)(t.code,{children:"example"})," (the Endpoint suffix will be removed) with the single ",(0,s.jsx)(t.code,{children:"hello"})," method. To generate the client-side code run ",(0,s.jsx)(t.code,{children:"serverpod generate"})," in the home directory of the server."]}),"\n",(0,s.jsx)(t.p,{children:"On the client side, you can now invoke the method by calling:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"var result = await client.example.hello('World');\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To learn more about endpoints, see the ",(0,s.jsx)(t.a,{href:"concepts/working-with-endpoints",children:"Working with endpoints"})," section."]})}),"\n",(0,s.jsx)(t.h3,{id:"serializing-data",children:"Serializing data"}),"\n",(0,s.jsx)(t.p,{children:"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database."}),"\n",(0,s.jsxs)(t.p,{children:["The structure for your serialized classes is defined in YAML-files in the ",(0,s.jsx)(t.code,{children:"lib/src/models"})," directory. Run ",(0,s.jsx)(t.code,{children:"serverpod generate"})," in the home directory of the server to build the Dart code for the classes and make them accessible to both the server and client."]}),"\n",(0,s.jsx)(t.p,{children:"Here is a simple example of a YAML-file defining a serializable class:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Supported types are ",(0,s.jsx)(t.code,{children:"bool"}),", ",(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"double"}),", ",(0,s.jsx)(t.code,{children:"String"}),", ",(0,s.jsx)(t.code,{children:"DateTime"}),", ",(0,s.jsx)(t.code,{children:"ByteData"}),", and other serializable classes. You can also use ",(0,s.jsx)(t.code,{children:"List"}),"s and ",(0,s.jsx)(t.code,{children:"Map"}),"s of the supported types, just make sure to specify the types. Null safety is supported. The keys of ",(0,s.jsx)(t.code,{children:"Map"})," must be non-nullable ",(0,s.jsx)(t.code,{children:"String"}),"s. Once your classes are generated, you can use them as parameters or return types to endpoint methods."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can also create custom serialized classes with tools such as Freezed. Learn more in the ",(0,s.jsx)(t.a,{href:"concepts/serialization",children:"Serialization"})," section."]})}),"\n",(0,s.jsx)(t.h2,{id:"working-with-the-database",children:"Working with the database"}),"\n",(0,s.jsx)(t.p,{children:"A core feature of Serverpod is to query the database easily. Serverpod provides an ORM that supports type and null safety."}),"\n",(0,s.jsx)(t.h3,{id:"connecting-to-the-database",children:"Connecting to the database"}),"\n",(0,s.jsxs)(t.p,{children:["When working with the database, it is common that you want to connect to it with a database viewer such as ",(0,s.jsx)(t.a,{href:"https://eggerapps.at/postico2/",children:"Postico2"}),", ",(0,s.jsx)(t.a,{href:"https://www.pgadmin.org/download/",children:"PgAdmin"}),", or ",(0,s.jsx)(t.a,{href:"https://dbeaver.io/download/",children:"DBeaver"}),". To connect to the database, you need to specify the host and port along with the database name, user name, and password. In your project, you can find these inside the ",(0,s.jsx)(t.code,{children:"config"})," directory."]}),"\n",(0,s.jsxs)(t.p,{children:["The connection details can be found in the file ",(0,s.jsx)(t.code,{children:"config/development.yaml"}),". The variable ",(0,s.jsx)(t.code,{children:"name"})," refers to the database name (which is your project name only)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"database:\n  host: localhost\n  port: 8090\n  name: projectname\n  user: postgres\n\n...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The password can be found in the file ",(0,s.jsx)(t.code,{children:"config/passwords.yaml"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"development:\n  database: '<MY DATABASE PASSWORD>'\n\n...\n"})}),"\n",(0,s.jsx)(t.h3,{id:"migrations",children:"Migrations"}),"\n",(0,s.jsxs)(t.p,{children:["With database migrations, Serverpod makes it easy to evolve your database schema. When you make changes to your project that should be reflected in your database, you need to create a migration. A migration is a set of SQL queries that are run to update the database. To create a migration, run ",(0,s.jsx)(t.code,{children:"serverpod create-migration"})," in the home directory of the server."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ serverpod create-migration\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Migrations are then applied to the database as part of the server startup by adding the ",(0,s.jsx)(t.code,{children:"--apply-migrations"})," flag."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd mypod/mypod_server\n$ dart bin/main.dart --apply-migrations\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To learn more about database migrations, see the ",(0,s.jsx)(t.a,{href:"concepts/database/migrations",children:"Migrations"})," section."]})}),"\n",(0,s.jsx)(t.h3,{id:"object-database-mapping",children:"Object database mapping"}),"\n",(0,s.jsxs)(t.p,{children:["Add a ",(0,s.jsx)(t.code,{children:"table"})," key to your model file to add a mapping to the database. The value specified after the key sets the database table name. Here is the ",(0,s.jsx)(t.code,{children:"Company"})," class from earlier with a database table mapping to a table called ",(0,s.jsx)(t.code,{children:"company"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n"})}),"\n",(0,s.jsxs)(t.p,{children:["CRUD operations are available through the static ",(0,s.jsx)(t.code,{children:"db"})," method on all classes with database bindings."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To learn more about database CRUD operations, see the ",(0,s.jsx)(t.a,{href:"concepts/database/crud",children:"CRUD"})," section."]})}),"\n",(0,s.jsx)(t.h3,{id:"writing-to-database",children:"Writing to database"}),"\n",(0,s.jsxs)(t.p,{children:["Inserting a new row into the database is as simple as calling the static ",(0,s.jsx)(t.code,{children:"db.insertRow"})," method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"var myCompany = Company(name: 'Serverpod corp.', foundedDate: DateTime.now());\nmyCompany = await Company.db.insertRow(session, myCompany);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The method returns the inserted object with its ",(0,s.jsx)(t.code,{children:"id"})," field set from the database."]}),"\n",(0,s.jsx)(t.h3,{id:"reading-from-database",children:"Reading from database"}),"\n",(0,s.jsxs)(t.p,{children:["Retrieving a single row from the database can done by calling the static ",(0,s.jsx)(t.code,{children:"db.findById"})," method and providing the ",(0,s.jsx)(t.code,{children:"id"})," of the row."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"var myCompany = await Company.db.findById(session, companyId);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also use an expression to do a more refined search through the ",(0,s.jsx)(t.code,{children:"db.findFirstRow(...)"}),". method. The ",(0,s.jsx)(t.code,{children:"where"})," parameter is a typed expression builder. The builder's parameter, ",(0,s.jsx)(t.code,{children:"t"}),", contains a description of the table and gives access to the table's columns."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"var myCompany = await Company.db.findFirstRow(\n  session,\n  where: (t) => t.name.equals('My Company'),\n);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The example above will return a single row from the database where the ",(0,s.jsx)(t.code,{children:"name"})," column is equal to ",(0,s.jsx)(t.code,{children:"My Company"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If no matching row is found, ",(0,s.jsx)(t.code,{children:"null"})," is returned."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Working with a database is an extensive subject. Learn more in the ",(0,s.jsx)(t.a,{href:"concepts/database/connection",children:"Database"})," section."]})}),"\n",(0,s.jsx)(t.h2,{id:"where-to-go-next",children:"Where to go next"}),"\n",(0,s.jsxs)(t.p,{children:["You should now have a basic understanding of how Serverpod works. The different topics are described in more detail in the ",(0,s.jsx)(t.em,{children:"Concepts"})," section of the documentation. If you are unfamiliar with server-side development, a good starting place for learning is to do the ",(0,s.jsx)(t.a,{href:"tutorials/first-app",children:"Build your first app"})," tutorial. There are also many good video tutorials linked in the ",(0,s.jsx)(t.em,{children:"Tutorials"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["If you get stuck, never be afraid to ask questions in our ",(0,s.jsx)(t.a,{href:"https://github.com/serverpod/serverpod/discussions",children:"community on Github"}),". The Serverpod team is very active there, and many questions are also answered by other developers in the community."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);