"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9298],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1894:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},d="Get started",l={unversionedId:"get-started",id:"get-started",title:"Get started",description:"This page should give you an understanding of how a Serverpod project is structured, how you make callls to endpoints, and how you communicate with the database. Before going through it, make sure that you have the latest version of Serverpod installed. In the previous section, you can learn how to set up the command line tools and install Serverpod Insights.",source:"@site/docs/01-get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/next/get-started",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/01-get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing Serverpod",permalink:"/next/"},next:{title:"Capabilities",permalink:"/next/capabilities"}},p={},c=[{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"Starting the server",id:"starting-the-server",level:3},{value:"Running the demo app",id:"running-the-demo-app",level:3},{value:"Server overview",id:"server-overview",level:2},{value:"Generating code",id:"generating-code",level:3},{value:"Working with endpoints",id:"working-with-endpoints",level:3},{value:"Serializing data",id:"serializing-data",level:3},{value:"Working with the database",id:"working-with-the-database",level:2},{value:"Connecting to the database",id:"connecting-to-the-database",level:3},{value:"Reading and writing to the database",id:"reading-and-writing-to-the-database",level:3},{value:"Inserting a table row",id:"inserting-a-table-row",level:3},{value:"Finding a single row",id:"finding-a-single-row",level:3},{value:"Where to go next",id:"where-to-go-next",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"This page should give you an understanding of how a Serverpod project is structured, how you make callls to endpoints, and how you communicate with the database. Before going through it, make sure that you have the latest version of Serverpod installed. In the previous section, you can learn how to set up the command line tools and install Serverpod Insights."),(0,o.kt)("h2",{id:"creating-a-new-project"},"Creating a new project"),(0,o.kt)("p",null,"To get your local server up and running, you need to create a new Serverpod project. Make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop")," is running, then create a new project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"serverpod create mypod\n")),(0,o.kt)("p",null,"This command will create a new directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod"),", with three dart packages inside; ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_client"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"mypod_flutter"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_server"),": This package contains your server-side code. Modify it to add new endpoints or other features your server needs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_client"),": This is the code needed to communicate with the server. Typically, all code in this package is generated automatically, and you should not edit the files in this package."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypod_flutter"),": This is the Flutter app, pre-configured to connect to your local server.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It can take up to a few minutes the first time you run ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod create"),". This is because Docker will need to download and build the containers used by Serverpod."))),(0,o.kt)("h3",{id:"starting-the-server"},"Starting the server"),(0,o.kt)("p",null,"Start your Docker containers with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up --build --detach"),". It will start Postgres and Redis. Then, run ",(0,o.kt)("inlineCode",{parentName:"p"},"dart bin/main.dart")," to start your server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd mypod/mypod_server\ndocker compose up --build --detach\ndart bin/main.dart\n")),(0,o.kt)("p",null,"If everything is working, you should see something like this on your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SERVERPOD version: 1.x.x, mode: development, time: 2022-09-12 17:22:02.825468Z\nInsights listening on port 8081\nServer default listening on port 8080\nWebserver listening on port 8082\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need to stop the Docker containers at some point, just run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose stop")," or use the Docker Desktop application. You can also use Docker Desktop to start, stop, and manage your containers."))),(0,o.kt)("h3",{id:"running-the-demo-app"},"Running the demo app"),(0,o.kt)("p",null,"Start the default demo app by changing directory into the Flutter package that was created and running ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter run"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd mypod/mypod_flutter\nflutter run -d chrome\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you run the app on MacOS you will need to add permissions for outgoing connections in your Xcode project. To do this, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Runner.xcworkspace")," in Xcode. Then check the ",(0,o.kt)("em",{parentName:"p"},"Outgoing Connections (Client)")," under ",(0,o.kt)("em",{parentName:"p"},"Runner")," > ",(0,o.kt)("em",{parentName:"p"},"Signing & Capabilities")," > ",(0,o.kt)("em",{parentName:"p"},"App Sandbox"),". Make sure to add the capability for all run configurations."))),(0,o.kt)("h2",{id:"server-overview"},"Server overview"),(0,o.kt)("p",null,"At first glance, the complexity of the server may seem daunting, but there are only a few directories and files you need to pay attention to. The rest of the files will be there when you need them in the future, e.g., when you want to deploy your server or if you want to set up continuous integration."),(0,o.kt)("p",null,"These are the most important directories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," These are the configuration files for your Serverpod. These include a ",(0,o.kt)("inlineCode",{parentName:"li"},"password.yaml")," file with your passwords and configurations for running your server in development, staging, and production. By default, everything is correctly configured to run your server locally."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lib/src/endpoints")," This is where you place your server's endpoints. When you add methods to an endpoint, Serverpod will generate the corresponding methods in your client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lib/src/protocol")," Place your entity definition files here. These files define the classes you can pass through your API and how they relate to your database.")),(0,o.kt)("p",null,"Both the ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol")," directories contain sample files that give a quick idea of how they work. So this a great place to start learning."),(0,o.kt)("h3",{id:"generating-code"},"Generating code"),(0,o.kt)("p",null,"Whenever you change your code in either the ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol")," directory, you will need to regenerate the classes managed by Serverpod. Do this by running ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd mypod/mypod_server\nserverpod generate\n")),(0,o.kt)("h3",{id:"working-with-endpoints"},"Working with endpoints"),(0,o.kt)("p",null,"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated. For the code to be generated, you need to place your endpoint in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/src/endpoints")," directory of your server. Your endpoint should extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"Endpoint")," class. For methods to be generated, they need to return a typed ",(0,o.kt)("inlineCode",{parentName:"p"},"Future"),", and its first argument should be a ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," object. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," object holds information about the call being made and provides access to the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:serverpod/serverpod.dart';\n\nclass ExampleEndpoint extends Endpoint {\n  Future<String> hello(Session session, String name) async {\n    return 'Hello $name';\n  }\n}\n")),(0,o.kt)("p",null,"The above code will create an endpoint called ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," (the Endpoint suffix will be removed) with the single ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," method. To generate the client-side code run ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate")," in the home directory of the server."),(0,o.kt)("p",null,"On the client side, you can now invoke the method by calling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var result = await client.example.hello('World');\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To learn more about endpoints, see the ",(0,o.kt)("a",{parentName:"p",href:"concepts/working-with-endpoints"},"Working with endpoints")," section."))),(0,o.kt)("h3",{id:"serializing-data"},"Serializing data"),(0,o.kt)("p",null,"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database."),(0,o.kt)("p",null,"The structure for your serialized classes is defined in yaml-files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/src/protocol")," directory. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate")," to build the Dart code for the classes and make them accessible to both the server and client."),(0,o.kt)("p",null,"Here is a simple example of a yaml-file defining a serializable class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\nfields:\n  name: String\n  foundedDate: DateTime?\n  employees: List<Employee>\n")),(0,o.kt)("p",null,"Supported types are ",(0,o.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteData"),", and other serializable classes. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"List"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),"s of the supported types, just make sure to specify the types. Null safety is supported. The keys of ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," must be non-nullable ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"s. Once your classes are generated, you can use them as parameters or return types to endpoint methods."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also create custom serialized classes with tools such as Freezed. Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"concepts/serialization"},"Serialization")," section."))),(0,o.kt)("h2",{id:"working-with-the-database"},"Working with the database"),(0,o.kt)("p",null,"A core feature of Serverpod is to query the database easily. Serverpod provides an ORM that supports type and null safety."),(0,o.kt)("h3",{id:"connecting-to-the-database"},"Connecting to the database"),(0,o.kt)("p",null,"When working with the database, it is common that you want to connect to it with a database viewer such as ",(0,o.kt)("a",{parentName:"p",href:"https://eggerapps.at/postico2/"},"Postico2"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://dbeaver.io/download/"},"DBeaver"),". To connect to the database you need to specify the the host and port as well as the database name, user name, and password. In Serverpod these variables are defined inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," folder of your server project."),(0,o.kt)("p",null,"The connection details can be found in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"config/development.yaml"),", the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," refers to the database name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n  host: localhost\n  port: 8090\n  name: projectname\n  user: postgres\n\n...\n")),(0,o.kt)("p",null,"The password can be found in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"config/passwords.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"development:\n  database: '<MY DATABASE PASSWORD>'\n\n...\n")),(0,o.kt)("h3",{id:"reading-and-writing-to-the-database"},"Reading and writing to the database"),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"table")," key to your protocol file to add a mapping to the database. Here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," class from earlier with a database table mapping:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: Company\ntable: company\nfields:\n  name: String\n  foundedDate: DateTime?\n")),(0,o.kt)("p",null,"When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"serverpod generate"),", Serverpod will create the SQL queries needed to create the table. The generated SQL code is found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"generated/tables.pgsql")," file."),(0,o.kt)("h3",{id:"inserting-a-table-row"},"Inserting a table row"),(0,o.kt)("p",null,"Insert a new row in the database by calling the insert method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var myRow = Company(name: 'Serverpod corp.', foundedDate: DateTime.now());\nawait Company.insert(session, myRow);\n")),(0,o.kt)("p",null,"After the object has been inserted, its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field is set from its row in the database."),(0,o.kt)("h3",{id:"finding-a-single-row"},"Finding a single row"),(0,o.kt)("p",null,"You can find a single row, either by its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or using an expression. You need to pass a reference to the session in the call. Tables are accessible through generated serializable classes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await Company.findById(session, companyId);\n")),(0,o.kt)("p",null,"If no matching row is found, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," is returned. You can also search for rows using expressions with the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," parameter. The ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," parameter is a typed expression builder. The builder's parameter, ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", contains a description of the table which gives access to the table's columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var myCompany = await Company.findSingleRow(\n  session,\n  where: (t) => t.name.equals('My Company'),\n);\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Working with a database is an extensive subject. Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"concepts/database-communication"},"Database communication")," section."))),(0,o.kt)("h2",{id:"where-to-go-next"},"Where to go next"),(0,o.kt)("p",null,"You should now have a basic understanding of how Serverpod works. The different topics are described in more detail in the ",(0,o.kt)("em",{parentName:"p"},"Concepts")," section of the documentation. If you are unfamiliar with server-side development, a good staring place for learning is to do the ",(0,o.kt)("a",{parentName:"p",href:"tutorials/first-app"},"Build your first app")," tutorial. There are also many good video tutorials linked in the ",(0,o.kt)("em",{parentName:"p"},"Tutorials")," section."),(0,o.kt)("p",null,"If you get stuck, never be afraid to ask questions in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/serverpod/serverpod/discussions"},"community on Github"),". The Serverpod team is very active there, and many questions are also answered by other developers in the community."))}u.isMDXComponent=!0}}]);