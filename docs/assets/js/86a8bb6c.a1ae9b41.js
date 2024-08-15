"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9670],{22290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var o=n(85893),s=n(11151),i=n(22004),a=n.n(i),r=n(74866),d=n(85162);const l={},c="Build your first app",h={id:"tutorials/first-app",title:"Build your first app",description:"You will build a simple note-taking app in this tutorial. You will learn the fundamental building blocks of Serverpod that enable you to create powerful and scalable server-side applications with ease.",source:"@site/versioned_docs/version-1.1.1/03-tutorials/01-first-app.mdx",sourceDirName:"03-tutorials",slug:"/tutorials/first-app",permalink:"/1.1.1/tutorials/first-app",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/03-tutorials/01-first-app.mdx",tags:[],version:"1.1.1",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capabilities",permalink:"/1.1.1/capabilities"},next:{title:"Videos",permalink:"/1.1.1/tutorials/videos"}},p={},u=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Serialize objects",id:"serialize-objects",level:2},{value:"Create database tables",id:"create-database-tables",level:2},{value:"Access the generated SQL code",id:"access-the-generated-sql-code",level:3},{value:"Apply database changes",id:"apply-database-changes",level:3},{value:"Create API endpoints",id:"create-api-endpoints",level:2},{value:"Define endpoints",id:"define-endpoints",level:3},{value:"Store notes in the database",id:"store-notes-in-the-database",level:3},{value:"Delete notes from the database",id:"delete-notes-from-the-database",level:3},{value:"Fetch notes from the database",id:"fetch-notes-from-the-database",level:3},{value:"Generate the client library",id:"generate-the-client-library",level:3},{value:"Build the Flutter app",id:"build-the-flutter-app",level:2},{value:"Fetch the notes from the server",id:"fetch-the-notes-from-the-server",level:3},{value:"Render the notes",id:"render-the-notes",level:3},{value:"Create new notes",id:"create-new-notes",level:3},{value:"Run the app",id:"run-the-app",level:3},{value:"Delete notes",id:"delete-notes",level:3},{value:"Edit notes",id:"edit-notes",level:3},{value:"Summary",id:"summary",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"build-your-first-app",children:"Build your first app"})}),"\n",(0,o.jsx)(t.p,{children:"You will build a simple note-taking app in this tutorial. You will learn the fundamental building blocks of Serverpod that enable you to create powerful and scalable server-side applications with ease."}),"\n",(0,o.jsxs)(t.p,{children:["We are assuming you have all the tools setup and ready to go. If not, please follow the ",(0,o.jsx)(t.a,{href:"/",children:"Installing Serverpod"})," guide to get up and running."]}),"\n",(0,o.jsx)(t.p,{children:"We will cover the following topics:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Creating serializable objects"}),"\n",(0,o.jsx)(t.li,{children:"Creating a database table"}),"\n",(0,o.jsx)(t.li,{children:"Creating API endpoints for CRUD operations"}),"\n",(0,o.jsx)(t.li,{children:"Using the serverpod code generator"}),"\n",(0,o.jsx)(t.li,{children:"Using the generated client library"}),"\n",(0,o.jsx)(t.li,{children:"Connecting a Flutter app to the server"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Demo of what we will build: (",(0,o.jsx)(t.a,{href:"https://github.com/serverpod/notes",children:"Full code example"}),")."]}),"\n",(0,o.jsx)(a(),{playing:!0,loop:!0,controls:!0,width:"960px",height:"720px",url:"/img/tutorial/note-app/01-note-app-demo.mp4"}),"\n",(0,o.jsx)(t.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,o.jsx)(t.p,{children:"Create a new project using the Serverpod CLI. Run the following command in your terminal:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ serverpod create notes\n"})}),"\n",(0,o.jsx)(t.p,{children:"To start the server:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd notes/notes_server\ndocker compose up --build --detach\ndart bin/main.dart\n"})}),"\n",(0,o.jsx)(t.h2,{id:"serialize-objects",children:"Serialize objects"}),"\n",(0,o.jsx)(t.p,{children:"Serverpod comes with a convenient way to create serializable objects with the help of code generation. These objects can easily be sent back and forth between the server and the client. This is managed by defining our objects in a YAML file which the code generator then parses and generates the necessary code for."}),"\n",(0,o.jsxs)(t.p,{children:["To define the structure of our Note object, we will create a YAML file called ",(0,o.jsx)(t.code,{children:"note.yaml"}),". Navigate to the ",(0,o.jsx)(t.code,{children:"lib/src/protocol"})," folder in your Serverpod project (",(0,o.jsx)(t.code,{children:"notes_server"}),"). Create the file and add the following content:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"### Holds a note with a text written by the user.\nclass: Note\nfields:\n  ### The contents of the note.\n  text: String\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's take a closer look at the content of the ",(0,o.jsx)(t.code,{children:"notes.yaml"})," file:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"class: Note"})," Specifies the name of the class to be generated, which in this case is Note."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"fields:"})," This keyword indicates the beginning of the field definitions for the Note class."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"text: String"})," Defines a text field of type String in the Note class, in this minimal example we only have one field but you can add however many fields you need."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Use the code generator to generate the code for the ",(0,o.jsx)(t.code,{children:"Note"})," class from the definition in ",(0,o.jsx)(t.code,{children:"notes.yaml"}),". Run the following command from the root of your server project:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After the code generation process is complete, you can access the generated code for the ",(0,o.jsx)(t.code,{children:"Note"})," class in ",(0,o.jsx)(t.code,{children:"lib/src/generated/note.dart"})," inside your Serverpod project."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Serverpod Insights",src:n(56675).Z+"",width:"2110",height:"1644"})}),"\n",(0,o.jsxs)(t.p,{children:["By extending the ",(0,o.jsx)(t.code,{children:"SerializableEntity"})," class, the ",(0,o.jsx)(t.code,{children:"Note"})," object becomes capable of automatic serialization and deserialization. This makes the ",(0,o.jsx)(t.code,{children:"Note"})," object transmittable between the server and the client."]}),"\n",(0,o.jsxs)(t.p,{children:["In simpler terms, we have created a class, ",(0,o.jsx)(t.code,{children:"Note"}),", that can hold information and be passed around within the server. Additionally, we can send this object all the way to the client side of our application. Serverpod takes care of handling the conversion between the object and its serialized representation, making it convenient to work with and transfer data seamlessly."]}),"\n",(0,o.jsx)(t.h2,{id:"create-database-tables",children:"Create database tables"}),"\n",(0,o.jsxs)(t.p,{children:["Serverpod provides built-in support for database integrations. By defining a database table named ",(0,o.jsx)(t.code,{children:"note"})," in the YAML file using the ",(0,o.jsx)(t.code,{children:"table"})," keyword, we create database bindings for our ",(0,o.jsx)(t.code,{children:"Note"})," class."]}),"\n",(0,o.jsxs)(t.p,{children:["The updated content of the ",(0,o.jsx)(t.code,{children:"note.yaml"})," file should look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"### Holds a note with a text written by the user.\nclass: Note\ntable: note\nfields:\n  ### The contents of the note.\n  text: String\n"})}),"\n",(0,o.jsx)(t.p,{children:"Run the code generator again to generate the necessary code for the database table:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Take a look at the updated ",(0,o.jsx)(t.code,{children:"lib/src/generated/note.dart"})," file. You will notice that the code generator has added new methods for interacting with the database."]}),"\n",(0,o.jsx)(t.h3,{id:"access-the-generated-sql-code",children:"Access the generated SQL code"}),"\n",(0,o.jsxs)(t.p,{children:["The code generator also generate the necessary SQL code for creating the database table. The SQL code can be found in the ",(0,o.jsx)(t.code,{children:"notes_server/generated/tables.pgsql"})," file."]}),"\n",(0,o.jsx)(t.p,{children:"Here is the SQL code generated for the Note table:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:'--\n-- Class Note as table note\n--\n\nCREATE TABLE "note" (\n  "id" serial,\n  "text" text NOT NULL\n);\n\nALTER TABLE ONLY "note"\n  ADD CONSTRAINT note_pkey PRIMARY KEY (id);\n'})}),"\n",(0,o.jsx)(t.h3,{id:"apply-database-changes",children:"Apply database changes"}),"\n",(0,o.jsxs)(t.p,{children:["To apply the changes to the database, you need to execute the SQL code generated in the ",(0,o.jsx)(t.code,{children:"notes_server/generated/tables.pgsql"})," file. You can use a database administration tool or the command line to run the SQL code."]}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(d.Z,{value:"unix",label:"MacOS & Linux",default:!0,children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'docker compose run -T --rm postgres env PGPASSWORD="<DATABASE_PASSWORD>" psql -h postgres -U postgres -d notes < generated/tables.pgsql\n'})})}),(0,o.jsx)(d.Z,{value:"windows",label:"Windows",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cmd",children:'type .\\generated\\tables.pgsql | docker compose run -T postgres env PGPASSWORD="<DATABASE_PASSWORD>" psql -h postgres -U postgres -d notes\n'})})})]}),"\n",(0,o.jsxs)(t.p,{children:["You need to replace ",(0,o.jsx)(t.code,{children:"<DATABASE_PASSWORD>"})," with the password for the database, you can find it inside the ",(0,o.jsx)(t.code,{children:"notes_server/config/passwords.yaml"})," file.\nIf you didn't name your project ",(0,o.jsx)(t.code,{children:"notes"})," you need to replace ",(0,o.jsx)(t.code,{children:"-d notes"})," with the name of your project."]}),"\n",(0,o.jsx)(t.p,{children:"Once the SQL code is executed successfully, the database table for storing the note data will be created."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Any time you update the table definitions you have to run the sql code on your database to update the database schema."})}),"\n",(0,o.jsx)(t.h2,{id:"create-api-endpoints",children:"Create API endpoints"}),"\n",(0,o.jsxs)(t.p,{children:["In Serverpod, endpoints are defined in the ",(0,o.jsx)(t.code,{children:"endpoints"})," folder within your server project. The code generator analyzes the code within these endpoints and generates a client library based on the defined functions. This client library is then used by your Flutter app to interact with your backend server."]}),"\n",(0,o.jsxs)(t.p,{children:["Create a new file called ",(0,o.jsx)(t.code,{children:"notes_endpoint.dart"})," inside ",(0,o.jsx)(t.code,{children:"lib/src/endpoints"})," folder."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:serverpod/server.dart';\n\nimport '../generated/protocol.dart';\n\nclass NotesEndpoint extends Endpoint {\n  // Endpoint implementation goes here\n}\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above code, we import the necessary dependencies and import the generated ",(0,o.jsx)(t.code,{children:"Note"})," class from the protocol.dart file. We also define the ",(0,o.jsx)(t.code,{children:"NotesEndpoint"})," class, which extends the ",(0,o.jsx)(t.code,{children:"Endpoint"})," class provided by Serverpod. This is required for the endpoint to be recognized by Serverpod's code generator."]}),"\n",(0,o.jsx)(t.h3,{id:"define-endpoints",children:"Define endpoints"}),"\n",(0,o.jsxs)(t.p,{children:["To define a method that can be called from the client, we need to create a method inside the ",(0,o.jsx)(t.code,{children:"NotesEndpoint"})," class. This method must return a ",(0,o.jsx)(t.code,{children:"Future"})," of a ",(0,o.jsx)(t.strong,{children:"serializable object"}),", ",(0,o.jsx)(t.strong,{children:"primitive datatype"}),", or ",(0,o.jsx)(t.strong,{children:"void"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The first method parameter must be a ",(0,o.jsx)(t.code,{children:"Session"})," object. This is a special object in Serverpod that contains information about the current session, as well as other helpful methods."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> example(Session session) async {\n  // Endpoint implementation goes here\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"The method is also allowed to have any number of extra parameters. These parameters will be passed from the client when the endpoint is called. The parameters follow the same type restrictions as the return type."}),"\n",(0,o.jsx)(t.h3,{id:"store-notes-in-the-database",children:"Store notes in the database"}),"\n",(0,o.jsxs)(t.p,{children:["To store notes in the database we define a ",(0,o.jsx)(t.code,{children:"createNote"})," method in the ",(0,o.jsx)(t.code,{children:"NotesEndpoint"})," class. The method takes a ",(0,o.jsx)(t.code,{children:"Note"})," object and stores it in the database. To make the method accessible from the app, make sure that its first parameter is a ",(0,o.jsx)(t.code,{children:"Session"})," object."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> createNote(Session session, Note note) async {\n  await Note.insert(session, note);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above code, we use the ",(0,o.jsx)(t.code,{children:"Note.insert"})," method, created by ",(0,o.jsx)(t.code,{children:"serverpod generate"}),", to insert the specified ",(0,o.jsx)(t.code,{children:"Note"})," object into the database."]}),"\n",(0,o.jsx)(t.h3,{id:"delete-notes-from-the-database",children:"Delete notes from the database"}),"\n",(0,o.jsxs)(t.p,{children:["To delete notes in the database we define a ",(0,o.jsx)(t.code,{children:"deleteNote"})," method in the ",(0,o.jsx)(t.code,{children:"NotesEndpoint"})," class. The method takes a ",(0,o.jsx)(t.code,{children:"Note"})," object representing the note that should be deleted."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> deleteNote(Session session, Note note) async {\n  await Note.deleteRow(session, note);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above code, we use the ",(0,o.jsx)(t.code,{children:"Note.deleteRow"})," method to delete the specified ",(0,o.jsx)(t.code,{children:"Note"})," object from the database."]}),"\n",(0,o.jsx)(t.h3,{id:"fetch-notes-from-the-database",children:"Fetch notes from the database"}),"\n",(0,o.jsxs)(t.p,{children:["To retrieve all notes from the database we define the ",(0,o.jsx)(t.code,{children:"getAllNotes"})," method. The method retrieves all the notes from the database and returns them as a list of ",(0,o.jsx)(t.code,{children:"Note"})," objects."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<List<Note>> getAllNotes(Session session) async {\n  // By ordering by the id column, we always get the notes in the same order\n  // and not in the order they were updated.\n  return await Note.find(\n    session,\n    orderBy: Note.t.id,\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the code above, we use the ",(0,o.jsx)(t.code,{children:"Note.find"})," method to retrieve all the notes from the database. By specifying ",(0,o.jsx)(t.code,{children:"orderBy: Note.t.id"}),", we ensure that the notes are always returned in the same order based on the id column."]}),"\n",(0,o.jsx)(t.p,{children:"Putting it all together you end up with a file that looks like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:serverpod/server.dart';\n\nimport '../generated/protocol.dart';\n\nclass NotesEndpoint extends Endpoint {\n  Future<List<Note>> getAllNotes(Session session) async {\n    // By ordering by the id column, we always get the notes in the same order\n    // and not in the order they were updated.\n    return await Note.find(\n      session,\n      orderBy: Note.t.id,\n    );\n  }\n\n  Future<void> createNote(Session session, Note note) async {\n    await Note.insert(session, note);\n  }\n\n  Future<void> deleteNote(Session session, Note note) async {\n    await Note.deleteRow(session, note);\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"generate-the-client-library",children:"Generate the client library"}),"\n",(0,o.jsx)(t.p,{children:"Congratulations! You have now created all the endpoints needed for the note app. Complete with a database integration that persistently stores the notes."}),"\n",(0,o.jsxs)(t.p,{children:["Now run the code generator again to generate the client library for our endpoints. This needs to be run from the server directory ",(0,o.jsx)(t.code,{children:"notes_server"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ serverpod generate\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can find all the newly generated code in the client directory ",(0,o.jsx)(t.code,{children:"notes_client"}),". You normally don't need to touch this package, but it's good to know where it is located."]}),"\n",(0,o.jsx)(t.h2,{id:"build-the-flutter-app",children:"Build the Flutter app"}),"\n",(0,o.jsxs)(t.p,{children:["Open the ",(0,o.jsx)(t.code,{children:"main.dart"})," file in your Flutter project."]}),"\n",(0,o.jsxs)(t.p,{children:["Locate the ",(0,o.jsx)(t.code,{children:"MyHomePageState"})," class."]}),"\n",(0,o.jsxs)(t.p,{children:["Update the ",(0,o.jsx)(t.code,{children:"MyHomePageState"})," class by removing all unnecessary code, so that it looks like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"class MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n    );\n  }\n}\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can also remove the entire ",(0,o.jsx)(t.code,{children:"_ResultDisplay"})," class from the file."]}),"\n",(0,o.jsx)(t.h3,{id:"fetch-the-notes-from-the-server",children:"Fetch the notes from the server"}),"\n",(0,o.jsxs)(t.p,{children:["To fetch all the notes from the server and handle potential connection failures, we first need to declare variables to hold the state inside the ",(0,o.jsx)(t.code,{children:"MyHomePageState"})," class."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:notes_client/notes_client.dart';\n...\n\nclass MyHomePageState extends State<MyHomePage> {\n\n  List<Note>? _notes;\n  Exception? _connectionException;\n\n  ...\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's create a method to handle the connection failures. Call it ",(0,o.jsx)(t.code,{children:"_connectionFailed"}),", it updates the state to set ",(0,o.jsx)(t.code,{children:"_notes"})," to ",(0,o.jsx)(t.code,{children:"null"})," and stores the thrown exception in ",(0,o.jsx)(t.code,{children:"_connectionException"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"void _connectionFailed(dynamic exception) {\n  setState(() {\n    _notes = null;\n    _connectionException = exception;\n  });\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Next, let's add a method for fetching notes from the server endpoint we created earlier. The method updates the state with the notes we received. If the call fails, we catch an exception and call the ",(0,o.jsx)(t.code,{children:"_connectionFailed"})," method."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> _loadNotes() async {\n  try {\n    final notes = await client.notes.getAllNotes();\n    setState(() {\n      _notes = notes;\n    });\n  } catch (e) {\n    _connectionFailed(e);\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Finally, we want to call the ",(0,o.jsx)(t.code,{children:"_loadNotes"})," method when the app is started. We do this by overriding the ",(0,o.jsx)(t.code,{children:"initState"})," method and calling ",(0,o.jsx)(t.code,{children:"_loadNotes"})," from there."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nvoid initState() {\n  super.initState();\n  _loadNotes();\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"render-the-notes",children:"Render the notes"}),"\n",(0,o.jsxs)(t.p,{children:["To render the fetched notes in the app's main screen, we will update the build method inside the ",(0,o.jsx)(t.code,{children:"MyHomePageState"})," class. Here is the modified code:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) {\n  return Scaffold(\n    appBar: AppBar(\n      title: Text(widget.title),\n    ),\n    body: _notes == null\n      ? Container()\n      : ListView.builder(\n          itemCount: _notes!.length,\n          itemBuilder: ((context, index) {\n            return ListTile(\n              title: Text(_notes![index].text),\n            );\n          }),\n        ),\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"_notes"})," variable is checked to determine if notes have been fetched from the server. If ",(0,o.jsx)(t.code,{children:"_notes"})," is null, an empty Container widget is displayed as a placeholder."]}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"_notes"})," is not null, a ",(0,o.jsx)(t.code,{children:"ListView.builder"})," widget is used to render the notes. The ",(0,o.jsx)(t.code,{children:"itemCount"})," property is set to the length of the ",(0,o.jsx)(t.code,{children:"_notes"})," list, and the itemBuilder callback is responsible for building the individual ",(0,o.jsx)(t.code,{children:"ListTile"})," widgets."]}),"\n",(0,o.jsxs)(t.p,{children:["Inside the ",(0,o.jsx)(t.code,{children:"itemBuilder"})," callback, each note's text is displayed in a ",(0,o.jsx)(t.code,{children:"ListTile"})," using the ",(0,o.jsx)(t.code,{children:"Text"})," widget."]}),"\n",(0,o.jsx)(t.h3,{id:"create-new-notes",children:"Create new notes"}),"\n",(0,o.jsxs)(t.p,{children:["To create new notes we need to access the ",(0,o.jsx)(t.code,{children:"createNote"})," method of our ",(0,o.jsx)(t.code,{children:"notes"})," endpoint. To do this we create a helper method called ",(0,o.jsx)(t.code,{children:"_createNote"})," that takes a ",(0,o.jsx)(t.code,{children:"Note"})," object as a parameter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> _createNote(Note note) async {\n  try {\n    await client.notes.createNote(note);\n    await _loadNotes();\n  } catch (e) {\n    _connectionFailed(e);\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"_createNote"})," method calls the ",(0,o.jsx)(t.code,{children:"createNote"})," method to store the note in the database on the server. Then ",(0,o.jsx)(t.code,{children:"_loadNotes"})," is called to refresh our list of notes."]}),"\n",(0,o.jsxs)(t.p,{children:["The user needs graphical interface to create notes, so let's create a dialog for this. Create a new file called ",(0,o.jsx)(t.code,{children:"note_dialog.dart"})," in the ",(0,o.jsx)(t.code,{children:"src/lib"})," directory of your Flutter app. Add the following code:"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Code: note_dialog.dart"}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nvoid showNoteDialog({\n  required BuildContext context,\n  String text = '',\n  required ValueChanged<String> onSaved,\n}) {\n  showDialog(\n    context: context,\n    builder: (context) => NoteDialog(\n      text: text,\n      onSaved: onSaved,\n    ),\n  );\n}\n\nclass NoteDialog extends StatefulWidget {\n  const NoteDialog({\n    required this.text,\n    required this.onSaved,\n    super.key,\n  });\n\n  final String text;\n  final ValueChanged<String> onSaved;\n\n  @override\n  NoteDialogState createState() => NoteDialogState();\n}\n\nclass NoteDialogState extends State<NoteDialog> {\n  final TextEditingController controller = TextEditingController();\n\n  @override\n  void initState() {\n    super.initState();\n    controller.text = widget.text;\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Dialog(\n      child: Padding(\n        padding: const EdgeInsets.all(16.0),\n        child: Column(\n          children: [\n            Expanded(\n              child: TextField(\n                controller: controller,\n                expands: true,\n                maxLines: null,\n                minLines: null,\n                decoration: const InputDecoration(\n                  border: InputBorder.none,\n                  hintText: 'Write your note here...',\n                ),\n              ),\n            ),\n            const SizedBox(height: 16),\n            ElevatedButton(\n              onPressed: () {\n                widget.onSaved(controller.text);\n                Navigator.of(context).pop();\n              },\n              child: const Text('Save'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"})})})]}),"\n",(0,o.jsx)(t.p,{children:"The dialog is needed but we will skip going into details on how it works as this is just normal Flutter code. The gist is that we have a function that triggers an input dialog and a callback for when the user saves the input."}),"\n",(0,o.jsxs)(t.p,{children:["We need a button to trigger this dialog and the floating action button is great for this. Add the following code to the build method inside the ",(0,o.jsx)(t.code,{children:"MyHomePageState"})," class:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) {\n  return Scaffold(\n    ...\n    floatingActionButton: _notes == null\n      ? null\n      : FloatingActionButton(\n          onPressed: () {\n            showNoteDialog(\n              context: context,\n              onSaved: (text) {\n                var note = Note(\n                  text: text,\n                );\n                _notes!.add(note);\n\n                _createNote(note);\n              },\n            );\n          },\n          child: const Icon(Icons.add),\n        ),\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We trigger the note dialog when the action button is pressed and then save the note in the ",(0,o.jsx)(t.code,{children:"onSaved"})," callback. To make the UI feel more responsive we add the changes to the notes list before calling ",(0,o.jsx)(t.code,{children:"_createNote"}),". This way the note will be added to the list immediately and then updated when the server responds."]}),"\n",(0,o.jsxs)(t.p,{children:["Finally, add the loading screen to the project, create a new file called ",(0,o.jsx)(t.code,{children:"loading_screen.dart"})," and add the code."]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Code: loading_screen.dart"}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nclass LoadingScreen extends StatelessWidget {\n  const LoadingScreen({\n    this.exception,\n    required this.onTryAgain,\n    super.key,\n  });\n\n  final Exception? exception;\n  final VoidCallback onTryAgain;\n\n  @override\n  Widget build(BuildContext context) {\n    if (exception != null) {\n      return Center(\n        child: ElevatedButton(\n          onPressed: onTryAgain,\n          child: const Text('Try again'),\n        ),\n      );\n    } else {\n      return const Center(\n        child: CircularProgressIndicator(),\n      );\n    }\n  }\n}\n\n"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["Replace the empty container with the loading screen in the ",(0,o.jsx)(t.code,{children:"build"})," method."]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Code: main.dart"}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"import 'package:notes_client/notes_client.dart';\nimport 'package:flutter/material.dart';\nimport 'package:serverpod_flutter/serverpod_flutter.dart';\n\nimport 'note_dialog.dart';\n\n// Sets up a singleton client object that can be used to talk to the server from\n// anywhere in our app. The client is generated from your server code.\n// The client is set up to connect to a Serverpod running on a local server on\n// the default port. You will need to modify this to connect to staging or\n// production servers.\nvar client = Client('http://localhost:8080/')\n  ..connectivityMonitor = FlutterConnectivityMonitor();\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Notes',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: const MyHomePage(title: 'Notes'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({Key? key, required this.title}) : super(key: key);\n\n  final String title;\n\n  @override\n  MyHomePageState createState() => MyHomePageState();\n}\n\nclass MyHomePageState extends State<MyHomePage> {\n  // This field holds the list of notes that we've received from the server or\n  // null if no notes have been received yet.\n  List<Note>? _notes;\n\n  // If the connection to the server fails, this field will hold the exception\n  // that was thrown.\n  Exception? _connectionException;\n\n  @override\n  void initState() {\n    super.initState();\n    _loadNotes();\n  }\n\n  Future<void> _loadNotes() async {\n    try {\n      final notes = await client.notes.getAllNotes();\n      setState(() {\n        _notes = notes;\n      });\n    } catch (e) {\n      _connectionFailed(e);\n    }\n  }\n\n  Future<void> _createNote(Note note) async {\n    try {\n      await client.notes.createNote(note);\n      await _loadNotes();\n    } catch (e) {\n      _connectionFailed(e);\n    }\n  }\n\n  void _connectionFailed(dynamic exception) {\n    // If the connection to the server fails, we clear the list of notes and\n    // store the exception that was thrown. This will make the loading screen\n    // appear and show a button to try again.\n\n    // In a real app you would probably want to do more complete error handling.\n    setState(() {\n      _notes = null;\n      _connectionException = exception;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n      body: _notes == null\n          ? LoadingScreen(\n              exception: _connectionException,\n              onTryAgain: _loadNotes,\n            )\n          : ListView.builder(\n              itemCount: _notes!.length,\n              itemBuilder: ((context, index) {\n                return ListTile(\n                  title: Text(_notes![index].text),\n                );\n              }),\n            ),\n      floatingActionButton: _notes == null\n          ? null\n          : FloatingActionButton(\n              onPressed: () {\n                // When we tap the floating action button we want to show a\n                // dialog where we can create a new note.\n                showNoteDialog(\n                  context: context,\n                  onSaved: (text) {\n                    var note = Note(\n                      text: text,\n                    );\n\n                    // Add the note to the list of notes before we've received\n                    // a response from the server which makes the UI feel more\n                    // responsive.\n                    _notes!.add(note);\n\n                    // Actually create the note on the server.\n                    _createNote(note);\n                  },\n                );\n              },\n              child: const Icon(Icons.add),\n            ),\n    );\n  }\n}\n"})})})]}),"\n",(0,o.jsx)(t.h3,{id:"run-the-app",children:"Run the app"}),"\n",(0,o.jsx)(t.p,{children:"Start the database and server:\nMake sure you reboot the server if you started it earlier."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd notes_server\ndocker compose up --build --detach\ndart bin/main.dart\n"})}),"\n",(0,o.jsx)(t.p,{children:"Start the Flutter app in Chrome (or the platform of your choice):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd notes_flutter\nflutter run -d chrome\n"})}),"\n",(0,o.jsx)(a(),{playing:!0,loop:!0,controls:!0,width:"960px",height:"720px",url:"/img/tutorial/note-app/03-note-create.mp4"}),"\n",(0,o.jsx)(t.h3,{id:"delete-notes",children:"Delete notes"}),"\n",(0,o.jsx)(t.p,{children:"Implementing the delete functionality is very similar to the create functionality. We will add a delete button to each note and then call the delete endpoint when the button is pressed. First, let's add a helper method to call the endpoint:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> _deleteNote(Note note) async {\n  try {\n    await client.notes.deleteNote(note);\n    await _loadNotes();\n  } catch (e) {\n    _connectionFailed(e);\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"_deleteNote"})," method calls the ",(0,o.jsx)(t.code,{children:"deleteNote"})," endpoint to delete the note from the database on the server. Then ",(0,o.jsx)(t.code,{children:"_loadNotes"})," is called to refresh the notes list."]}),"\n",(0,o.jsxs)(t.p,{children:["Next in our ",(0,o.jsx)(t.code,{children:"ListTile"})," we add a delete button and call the ",(0,o.jsx)(t.code,{children:"_deleteNote"})," method when the button is pressed. Just as before we update the local state first to make the UI feel more responsive."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"ListTile(\n  ...\n  trailing: IconButton(\n    icon: const Icon(Icons.delete),\n    onPressed: () {\n      var note = _notes![index];\n\n      setState(() {\n        _notes!.remove(note);\n      });\n\n      _deleteNote(note);\n    },\n  ),\n),\n"})}),"\n",(0,o.jsx)(t.p,{children:"We can now delete all the notes we have created."}),"\n",(0,o.jsx)(a(),{playing:!0,controls:!0,width:"960px",height:"720px",url:"/img/tutorial/note-app/04-note-delete.mp4"}),"\n",(0,o.jsx)(t.h3,{id:"edit-notes",children:"Edit notes"}),"\n",(0,o.jsxs)(t.p,{children:["We leave this part as an exercise for the reader. Try to see if you can implement the edit functionality. You can use the ",(0,o.jsx)(t.code,{children:"showNoteDialog"})," method we created earlier to show the dialog for editing the note. If you followed along so far you have all the tools you need to implement this feature!"]}),"\n",(0,o.jsxs)(t.p,{children:["Give it a go, in case you need some help you can look at the (",(0,o.jsx)(t.a,{href:"https://github.com/serverpod/notes",children:"full code example"}),")."]}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial, you learned how to build a simple note-taking app using the Serverpod backend framework. You started by setting up the necessary tools and environment to work with Serverpod. Then, you covered various aspects of building an app, including creating serializable objects, creating database tables, and creating API endpoints for performing CRUD operations."}),"\n",(0,o.jsx)(t.p,{children:"You also learned how to use Serverpod's code generator and how to use the generated client library to connect the Flutter app to the server. By establishing this connection, you were able to fetch data from the server and display it in the app."}),"\n",(0,o.jsx)(t.p,{children:"Throughout the tutorial, you gained an understanding of how Serverpod simplifies the development process by automatically handling the serialization and deserialization of objects, managing database tables, and seamlessly integrating with Flutter. You have acquired the foundational knowledge to build powerful and scalable server-side applications using Serverpod."}),"\n",(0,o.jsx)(t.p,{children:"Congratulations on completing this tutorial. You are now equipped with the skills to build your own server-side applications using Serverpod. Happy coding!"}),"\n",(0,o.jsx)(t.p,{children:"Want to learn more? Check out some of our other tutorials, or the tutorials created by our community."})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},56675:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/02-note-class-8592653a41745f29d3ad1539074c86bf.png"}}]);