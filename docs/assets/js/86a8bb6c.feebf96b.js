"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9670],{406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(2004),l=n(9877),s=n(8215),d=["components"],p={},c="Build your first app",h={unversionedId:"tutorials/first-app",id:"version-1.1.1/tutorials/first-app",title:"Build your first app",description:"You will build a simple note-taking app in this tutorial. You will learn the fundamental building blocks of Serverpod that enable you to create powerful and scalable server-side applications with ease.",source:"@site/versioned_docs/version-1.1.1/03-tutorials/01-first-app.mdx",sourceDirName:"03-tutorials",slug:"/tutorials/first-app",permalink:"/tutorials/first-app",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/03-tutorials/01-first-app.mdx",tags:[],version:"1.1.1",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Capabilities",permalink:"/capabilities"},next:{title:"Videos",permalink:"/tutorials/videos"}},u={},m=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Serialize objects",id:"serialize-objects",level:2},{value:"Create database tables",id:"create-database-tables",level:2},{value:"Access the generated SQL code",id:"access-the-generated-sql-code",level:3},{value:"Apply database changes",id:"apply-database-changes",level:3},{value:"Create API endpoints",id:"create-api-endpoints",level:2},{value:"Define endpoints",id:"define-endpoints",level:3},{value:"Store notes in the database",id:"store-notes-in-the-database",level:3},{value:"Delete notes from the database",id:"delete-notes-from-the-database",level:3},{value:"Fetch notes from the database",id:"fetch-notes-from-the-database",level:3},{value:"Generate the client library",id:"generate-the-client-library",level:3},{value:"Build the Flutter app",id:"build-the-flutter-app",level:2},{value:"Fetch the notes from the server",id:"fetch-the-notes-from-the-server",level:3},{value:"Render the notes",id:"render-the-notes",level:3},{value:"Create new notes",id:"create-new-notes",level:3},{value:"Run the app",id:"run-the-app",level:3},{value:"Delete notes",id:"delete-notes",level:3},{value:"Edit notes",id:"edit-notes",level:3},{value:"Summary",id:"summary",level:2}],g={toc:m};function k(e){var t=e.components,p=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-your-first-app"},"Build your first app"),(0,i.kt)("p",null,"You will build a simple note-taking app in this tutorial. You will learn the fundamental building blocks of Serverpod that enable you to create powerful and scalable server-side applications with ease. "),(0,i.kt)("p",null,"We are assuming you have all the tools setup and ready to go. If not, please follow the ",(0,i.kt)("a",{parentName:"p",href:"/"},"Installing Serverpod")," guide to get up and running."),(0,i.kt)("p",null,"We will cover the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating serializable objects"),(0,i.kt)("li",{parentName:"ul"},"Creating a database table"),(0,i.kt)("li",{parentName:"ul"},"Creating API endpoints for CRUD operations"),(0,i.kt)("li",{parentName:"ul"},"Using the serverpod code generator"),(0,i.kt)("li",{parentName:"ul"},"Using the generated client library"),(0,i.kt)("li",{parentName:"ul"},"Connecting a Flutter app to the server")),(0,i.kt)("p",null,"Demo of what we will build: (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serverpod/notes"},"Full code example"),")."),(0,i.kt)(r.Z,{playing:!0,loop:!0,controls:!0,width:"960px",height:"720px",url:"/img/tutorial/note-app/01-note-app-demo.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,i.kt)("p",null,"Create a new project using the Serverpod CLI. Run the following command in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ serverpod create notes\n")),(0,i.kt)("p",null,"To start the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd notes/notes_server\ndocker compose up --build --detach\ndart bin/main.dart\n")),(0,i.kt)("h2",{id:"serialize-objects"},"Serialize objects"),(0,i.kt)("p",null,"Serverpod comes with a convenient way to create serializable objects with the help of code generation. These objects can easily be sent back and forth between the server and the client. This is managed by defining our objects in a YAML file which the code generator then parses and generates the necessary code for."),(0,i.kt)("p",null,"To define the structure of our Note object, we will create a YAML file called ",(0,i.kt)("inlineCode",{parentName:"p"},"note.yaml"),". Navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/src/protocol")," folder in your Serverpod project (",(0,i.kt)("inlineCode",{parentName:"p"},"notes_server"),"). Create the file and add the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"### Holds a note with a text written by the user.\nclass: Note\nfields:\n  ### The contents of the note.\n  text: String\n")),(0,i.kt)("p",null,"Let's take a closer look at the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"notes.yaml")," file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"class: Note")," Specifies the name of the class to be generated, which in this case is Note."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields:")," This keyword indicates the beginning of the field definitions for the Note class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"text: String")," Defines a text field of type String in the Note class, in this minimal example we only have one field but you can add however many fields you need.")),(0,i.kt)("p",null,"Use the code generator to generate the code for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," class from the definition in ",(0,i.kt)("inlineCode",{parentName:"p"},"notes.yaml"),". Run the following command from the root of your server project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ serverpod generate\n")),(0,i.kt)("p",null,"After the code generation process is complete, you can access the generated code for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," class in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/src/generated/note.dart")," inside your Serverpod project."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Serverpod Insights",src:n(6823).Z,width:"1828",height:"1242"})),(0,i.kt)("p",null,"By extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializableEntity")," class, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," object becomes capable of automatic serialization and deserialization. This makes the ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," object transmittable between the server and the client."),(0,i.kt)("p",null,"In simpler terms, we have created a class, ",(0,i.kt)("inlineCode",{parentName:"p"},"Note"),", that can hold information and be passed around within the server. Additionally, we can send this object all the way to the client side of our application. Serverpod takes care of handling the conversion between the object and its serialized representation, making it convenient to work with and transfer data seamlessly."),(0,i.kt)("h2",{id:"create-database-tables"},"Create database tables"),(0,i.kt)("p",null,"Serverpod provides built-in support for database integrations. By defining a database table named ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," in the YAML file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," keyword, we create database bindings for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," class. "),(0,i.kt)("p",null,"The updated content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"note.yaml")," file should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"### Holds a note with a text written by the user.\nclass: Note\ntable: note\nfields:\n  ### The contents of the note.\n  text: String\n")),(0,i.kt)("p",null,"Run the code generator again to generate the necessary code for the database table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ serverpod generate\n")),(0,i.kt)("p",null,"Take a look at the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/src/generated/note.dart")," file. You will notice that the code generator has added new methods for interacting with the database. "),(0,i.kt)("h3",{id:"access-the-generated-sql-code"},"Access the generated SQL code"),(0,i.kt)("p",null,"The code generator also generate the necessary SQL code for creating the database table. The SQL code can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"notes_server/generated/tables.pgsql")," file."),(0,i.kt)("p",null,"Here is the SQL code generated for the Note table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'--\n-- Class Note as table note\n--\n\nCREATE TABLE "note" (\n  "id" serial,\n  "text" text NOT NULL\n);\n\nALTER TABLE ONLY "note"\n  ADD CONSTRAINT note_pkey PRIMARY KEY (id);\n')),(0,i.kt)("h3",{id:"apply-database-changes"},"Apply database changes"),(0,i.kt)("p",null,"To apply the changes to the database, you need to execute the SQL code generated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"notes_server/generated/tables.pgsql")," file. You can use a database administration tool or the command line to run the SQL code."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"unix",label:"MacOS & Linux",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker compose run -T --rm postgres env PGPASSWORD="<DATABASE_PASSWORD>" psql -h postgres -U postgres -d notes < generated/tables.pgsql\n'))),(0,i.kt)(s.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},'type .\\generated\\tables.pgsql | docker compose run -T postgres env PGPASSWORD="<DATABASE_PASSWORD>" psql -h postgres -U postgres -d notes\n')))),(0,i.kt)("p",null,"You need to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<DATABASE_PASSWORD>")," with the password for the database, you can find it inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"notes_server/config/passwords.yaml")," file.\nIf you didn't name your project ",(0,i.kt)("inlineCode",{parentName:"p"},"notes")," you need to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"-d notes")," with the name of your project."),(0,i.kt)("p",null,"Once the SQL code is executed successfully, the database table for storing the note data will be created."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Any time you update the table definitions you have to run the sql code on your database to update the database schema."))),(0,i.kt)("h2",{id:"create-api-endpoints"},"Create API endpoints"),(0,i.kt)("p",null,"In Serverpod, endpoints are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints")," folder within your server project. The code generator analyzes the code within these endpoints and generates a client library based on the defined functions. This client library is then used by your Flutter app to interact with your backend server."),(0,i.kt)("p",null,"Create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"notes_endpoint.dart")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/src/endpoints")," folder. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:serverpod/server.dart';\n\nimport '../generated/protocol.dart';\n\nclass NotesEndpoint extends Endpoint {\n  // Endpoint implementation goes here\n}\n\n")),(0,i.kt)("p",null,"In the above code, we import the necessary dependencies and import the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," class from the protocol.dart file. We also define the ",(0,i.kt)("inlineCode",{parentName:"p"},"NotesEndpoint")," class, which extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint")," class provided by Serverpod. This is required for the endpoint to be recognized by Serverpod's code generator."),(0,i.kt)("h3",{id:"define-endpoints"},"Define endpoints"),(0,i.kt)("p",null,"To define a method that can be called from the client, we need to create a method inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"NotesEndpoint")," class. This method must return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Future")," of a ",(0,i.kt)("strong",{parentName:"p"},"serializable object"),", ",(0,i.kt)("strong",{parentName:"p"},"primitive datatype"),", or ",(0,i.kt)("strong",{parentName:"p"},"void"),". "),(0,i.kt)("p",null,"The first method parameter must be a ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," object. This is a special object in Serverpod that contains information about the current session, as well as other helpful methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> example(Session session) async {\n  // Endpoint implementation goes here\n}\n")),(0,i.kt)("p",null,"The method is also allowed to have any number of extra parameters. These parameters will be passed from the client when the endpoint is called. The parameters follow the same type restrictions as the return type."),(0,i.kt)("h3",{id:"store-notes-in-the-database"},"Store notes in the database"),(0,i.kt)("p",null,"To store notes in the database we define a ",(0,i.kt)("inlineCode",{parentName:"p"},"createNote")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NotesEndpoint")," class. The method takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," object and stores it in the database. To make the method accessible from the app, make sure that its first parameter is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> createNote(Session session, Note note) async {\n  await Note.insert(session, note);\n}\n")),(0,i.kt)("p",null,"In the above code, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Note.insert")," method, created by ",(0,i.kt)("inlineCode",{parentName:"p"},"serverpod generate"),", to insert the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," object into the database."),(0,i.kt)("h3",{id:"delete-notes-from-the-database"},"Delete notes from the database"),(0,i.kt)("p",null,"To delete notes in the database we define a ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteNote")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NotesEndpoint")," class. The method takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," object representing the note that should be deleted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> deleteNote(Session session, Note note) async {\n  await Note.deleteRow(session, note);\n}\n")),(0,i.kt)("p",null,"In the above code, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Note.deleteRow")," method to delete the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," object from the database."),(0,i.kt)("h3",{id:"fetch-notes-from-the-database"},"Fetch notes from the database"),(0,i.kt)("p",null,"To retrieve all notes from the database we define the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllNotes")," method. The method retrieves all the notes from the database and returns them as a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<List<Note>> getAllNotes(Session session) async {\n  // By ordering by the id column, we always get the notes in the same order\n  // and not in the order they were updated.\n  return await Note.find(\n    session,\n    orderBy: Note.t.id,\n  );\n}\n")),(0,i.kt)("p",null,"In the code above, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Note.find")," method to retrieve all the notes from the database. By specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"orderBy: Note.t.id"),", we ensure that the notes are always returned in the same order based on the id column."),(0,i.kt)("p",null,"Putting it all together you end up with a file that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:serverpod/server.dart';\n\nimport '../generated/protocol.dart';\n\nclass NotesEndpoint extends Endpoint {\n  Future<List<Note>> getAllNotes(Session session) async {\n    // By ordering by the id column, we always get the notes in the same order\n    // and not in the order they were updated.\n    return await Note.find(\n      session,\n      orderBy: Note.t.id,\n    );\n  }\n\n  Future<void> createNote(Session session, Note note) async {\n    await Note.insert(session, note);\n  }\n\n  Future<void> deleteNote(Session session, Note note) async {\n    await Note.deleteRow(session, note);\n  }\n}\n")),(0,i.kt)("h3",{id:"generate-the-client-library"},"Generate the client library"),(0,i.kt)("p",null,"Congratulations! You have now created all the endpoints needed for the note app. Complete with a database integration that persistently stores the notes."),(0,i.kt)("p",null,"Now run the code generator again to generate the client library for our endpoints. This needs to be run from the server directory ",(0,i.kt)("inlineCode",{parentName:"p"},"notes_server"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ serverpod generate\n")),(0,i.kt)("p",null,"You can find all the newly generated code in the client directory ",(0,i.kt)("inlineCode",{parentName:"p"},"notes_client"),". You normally don't need to touch this package, but it's good to know where it is located."),(0,i.kt)("h2",{id:"build-the-flutter-app"},"Build the Flutter app"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.dart")," file in your Flutter project."),(0,i.kt)("p",null,"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyHomePageState")," class."),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyHomePageState")," class by removing all unnecessary code, so that it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n    );\n  }\n}\n\n")),(0,i.kt)("p",null,"You can also remove the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"_ResultDisplay")," class from the file."),(0,i.kt)("h3",{id:"fetch-the-notes-from-the-server"},"Fetch the notes from the server"),(0,i.kt)("p",null,"To fetch all the notes from the server and handle potential connection failures, we first need to declare variables to hold the state inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyHomePageState")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:notes_client/notes_client.dart';\n...\n\nclass MyHomePageState extends State<MyHomePage> {\n\n  List<Note>? _notes;\n  Exception? _connectionException;\n\n  ...\n}\n")),(0,i.kt)("p",null,"Let's create a method to handle the connection failures. Call it ",(0,i.kt)("inlineCode",{parentName:"p"},"_connectionFailed"),", it updates the state to set ",(0,i.kt)("inlineCode",{parentName:"p"},"_notes")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and stores the thrown exception in ",(0,i.kt)("inlineCode",{parentName:"p"},"_connectionException"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"void _connectionFailed(dynamic exception) {\n  setState(() {\n    _notes = null;\n    _connectionException = exception;\n  });\n}\n")),(0,i.kt)("p",null,"Next, let's add a method for fetching notes from the server endpoint we created earlier. The method updates the state with the notes we received. If the call fails, we catch an exception and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"_connectionFailed")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> _loadNotes() async {\n  try {\n    final notes = await client.notes.getAllNotes();\n    setState(() {\n      _notes = notes;\n    });\n  } catch (e) {\n    _connectionFailed(e);\n  }\n}\n")),(0,i.kt)("p",null,"Finally, we want to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"_loadNotes")," method when the app is started. We do this by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"initState")," method and calling ",(0,i.kt)("inlineCode",{parentName:"p"},"_loadNotes")," from there. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid initState() {\n  super.initState();\n  _loadNotes();\n}\n")),(0,i.kt)("h3",{id:"render-the-notes"},"Render the notes"),(0,i.kt)("p",null,"To render the fetched notes in the app's main screen, we will update the build method inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyHomePageState")," class. Here is the modified code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) {\n  return Scaffold(\n    appBar: AppBar(\n      title: Text(widget.title),\n    ),\n    body: _notes == null\n      ? Container()\n      : ListView.builder(\n          itemCount: _notes!.length,\n          itemBuilder: ((context, index) {\n            return ListTile(\n              title: Text(_notes![index].text),\n            );\n          }),\n        ),\n  );\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_notes")," variable is checked to determine if notes have been fetched from the server. If ",(0,i.kt)("inlineCode",{parentName:"p"},"_notes")," is null, an empty Container widget is displayed as a placeholder."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"_notes")," is not null, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListView.builder")," widget is used to render the notes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"itemCount")," property is set to the length of the ",(0,i.kt)("inlineCode",{parentName:"p"},"_notes")," list, and the itemBuilder callback is responsible for building the individual ",(0,i.kt)("inlineCode",{parentName:"p"},"ListTile")," widgets."),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"itemBuilder")," callback, each note's text is displayed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListTile")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," widget."),(0,i.kt)("h3",{id:"create-new-notes"},"Create new notes"),(0,i.kt)("p",null,"To create new notes we need to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"createNote")," method of our ",(0,i.kt)("inlineCode",{parentName:"p"},"notes")," endpoint. To do this we create a helper method called ",(0,i.kt)("inlineCode",{parentName:"p"},"_createNote")," that takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Note")," object as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> _createNote(Note note) async {\n  try {\n    await client.notes.createNote(note);\n    await _loadNotes();\n  } catch (e) {\n    _connectionFailed(e);\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_createNote")," method calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"createNote")," method to store the note in the database on the server. Then ",(0,i.kt)("inlineCode",{parentName:"p"},"_loadNotes")," is called to refresh our list of notes."),(0,i.kt)("p",null,"The user needs graphical interface to create notes, so let's create a dialog for this. Create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"note_dialog.dart")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib")," directory of your Flutter app. Add the following code:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code: note_dialog.dart"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\n\nvoid showNoteDialog({\n  required BuildContext context,\n  String text = '',\n  required ValueChanged<String> onSaved,\n}) {\n  showDialog(\n    context: context,\n    builder: (context) => NoteDialog(\n      text: text,\n      onSaved: onSaved,\n    ),\n  );\n}\n\nclass NoteDialog extends StatefulWidget {\n  const NoteDialog({\n    required this.text,\n    required this.onSaved,\n    super.key,\n  });\n\n  final String text;\n  final ValueChanged<String> onSaved;\n\n  @override\n  NoteDialogState createState() => NoteDialogState();\n}\n\nclass NoteDialogState extends State<NoteDialog> {\n  final TextEditingController controller = TextEditingController();\n\n  @override\n  void initState() {\n    super.initState();\n    controller.text = widget.text;\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Dialog(\n      child: Padding(\n        padding: const EdgeInsets.all(16.0),\n        child: Column(\n          children: [\n            Expanded(\n              child: TextField(\n                controller: controller,\n                expands: true,\n                maxLines: null,\n                minLines: null,\n                decoration: const InputDecoration(\n                  border: InputBorder.none,\n                  hintText: 'Write your note here...',\n                ),\n              ),\n            ),\n            const SizedBox(height: 16),\n            ElevatedButton(\n              onPressed: () {\n                widget.onSaved(controller.text);\n                Navigator.of(context).pop();\n              },\n              child: const Text('Save'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n")))),(0,i.kt)("p",null,"The dialog is needed but we will skip going into details on how it works as this is just normal Flutter code. The gist is that we have a function that triggers an input dialog and a callback for when the user saves the input."),(0,i.kt)("p",null,"We need a button to trigger this dialog and the floating action button is great for this. Add the following code to the build method inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyHomePageState")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) {\n  return Scaffold(\n    ...\n    floatingActionButton: _notes == null\n      ? null\n      : FloatingActionButton(\n          onPressed: () {\n            showNoteDialog(\n              context: context,\n              onSaved: (text) {\n                var note = Note(\n                  text: text,\n                );\n                _notes!.add(note);\n\n                _createNote(note);\n              },\n            );\n          },\n          child: const Icon(Icons.add),\n        ),\n  );\n}\n")),(0,i.kt)("p",null,"We trigger the note dialog when the action button is pressed and then save the note in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onSaved")," callback. To make the UI feel more responsive we add the changes to the notes list before calling ",(0,i.kt)("inlineCode",{parentName:"p"},"_createNote"),". This way the note will be added to the list immediately and then updated when the server responds."),(0,i.kt)("p",null,"Finally, add the loading screen to the project, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"loading_screen.dart")," and add the code."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code: loading_screen.dart"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\n\nclass LoadingScreen extends StatelessWidget {\n  const LoadingScreen({\n    this.exception,\n    required this.onTryAgain,\n    super.key,\n  });\n\n  final Exception? exception;\n  final VoidCallback onTryAgain;\n\n  @override\n  Widget build(BuildContext context) {\n    if (exception != null) {\n      return Center(\n        child: ElevatedButton(\n          onPressed: onTryAgain,\n          child: const Text('Try again'),\n        ),\n      );\n    } else {\n      return const Center(\n        child: CircularProgressIndicator(),\n      );\n    }\n  }\n}\n\n")))),(0,i.kt)("p",null,"Replace the empty container with the loading screen in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," method."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code: main.dart"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:notes_client/notes_client.dart';\nimport 'package:flutter/material.dart';\nimport 'package:serverpod_flutter/serverpod_flutter.dart';\n\nimport 'note_dialog.dart';\n\n// Sets up a singleton client object that can be used to talk to the server from\n// anywhere in our app. The client is generated from your server code.\n// The client is set up to connect to a Serverpod running on a local server on\n// the default port. You will need to modify this to connect to staging or\n// production servers.\nvar client = Client('http://localhost:8080/')\n  ..connectivityMonitor = FlutterConnectivityMonitor();\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Notes',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: const MyHomePage(title: 'Notes'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({Key? key, required this.title}) : super(key: key);\n\n  final String title;\n\n  @override\n  MyHomePageState createState() => MyHomePageState();\n}\n\nclass MyHomePageState extends State<MyHomePage> {\n  // This field holds the list of notes that we've received from the server or\n  // null if no notes have been received yet.\n  List<Note>? _notes;\n\n  // If the connection to the server fails, this field will hold the exception\n  // that was thrown.\n  Exception? _connectionException;\n\n  @override\n  void initState() {\n    super.initState();\n    _loadNotes();\n  }\n\n  Future<void> _loadNotes() async {\n    try {\n      final notes = await client.notes.getAllNotes();\n      setState(() {\n        _notes = notes;\n      });\n    } catch (e) {\n      _connectionFailed(e);\n    }\n  }\n\n  Future<void> _createNote(Note note) async {\n    try {\n      await client.notes.createNote(note);\n      await _loadNotes();\n    } catch (e) {\n      _connectionFailed(e);\n    }\n  }\n\n  void _connectionFailed(dynamic exception) {\n    // If the connection to the server fails, we clear the list of notes and\n    // store the exception that was thrown. This will make the loading screen\n    // appear and show a button to try again.\n\n    // In a real app you would probably want to do more complete error handling.\n    setState(() {\n      _notes = null;\n      _connectionException = exception;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n      body: _notes == null\n          ? LoadingScreen(\n              exception: _connectionException,\n              onTryAgain: _loadNotes,\n            )\n          : ListView.builder(\n              itemCount: _notes!.length,\n              itemBuilder: ((context, index) {\n                return ListTile(\n                  title: Text(_notes![index].text),\n                );\n              }),\n            ),\n      floatingActionButton: _notes == null\n          ? null\n          : FloatingActionButton(\n              onPressed: () {\n                // When we tap the floating action button we want to show a\n                // dialog where we can create a new note.\n                showNoteDialog(\n                  context: context,\n                  onSaved: (text) {\n                    var note = Note(\n                      text: text,\n                    );\n\n                    // Add the note to the list of notes before we've received\n                    // a response from the server which makes the UI feel more\n                    // responsive.\n                    _notes!.add(note);\n\n                    // Actually create the note on the server.\n                    _createNote(note);\n                  },\n                );\n              },\n              child: const Icon(Icons.add),\n            ),\n    );\n  }\n}\n")))),(0,i.kt)("h3",{id:"run-the-app"},"Run the app"),(0,i.kt)("p",null,"Start the database and server:\nMake sure you reboot the server if you started it earlier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd notes_server\ndocker compose up --build --detach\ndart bin/main.dart\n")),(0,i.kt)("p",null,"Start the Flutter app in Chrome (or the platform of your choice):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd notes_flutter\nflutter run -d chrome\n")),(0,i.kt)(r.Z,{playing:!0,loop:!0,controls:!0,width:"960px",height:"720px",url:"/img/tutorial/note-app/03-note-create.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("h3",{id:"delete-notes"},"Delete notes"),(0,i.kt)("p",null,"Implementing the delete functionality is very similar to the create functionality. We will add a delete button to each note and then call the delete endpoint when the button is pressed. First, let's add a helper method to call the endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> _deleteNote(Note note) async {\n  try {\n    await client.notes.deleteNote(note);\n    await _loadNotes();\n  } catch (e) {\n    _connectionFailed(e);\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_deleteNote")," method calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteNote")," endpoint to delete the note from the database on the server. Then ",(0,i.kt)("inlineCode",{parentName:"p"},"_loadNotes")," is called to refresh the notes list."),(0,i.kt)("p",null,"Next in our ",(0,i.kt)("inlineCode",{parentName:"p"},"ListTile")," we add a delete button and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"_deleteNote")," method when the button is pressed. Just as before we update the local state first to make the UI feel more responsive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"ListTile(\n  ...\n  trailing: IconButton(\n    icon: const Icon(Icons.delete),\n    onPressed: () {\n      var note = _notes![index];\n\n      setState(() {\n        _notes!.remove(note);\n      });\n\n      _deleteNote(note);\n    },\n  ),\n),\n")),(0,i.kt)("p",null,"We can now delete all the notes we have created."),(0,i.kt)(r.Z,{playing:!0,controls:!0,width:"960px",height:"720px",url:"/img/tutorial/note-app/04-note-delete.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("h3",{id:"edit-notes"},"Edit notes"),(0,i.kt)("p",null,"We leave this part as an exercise for the reader. Try to see if you can implement the edit functionality. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"showNoteDialog")," method we created earlier to show the dialog for editing the note. If you followed along so far you have all the tools you need to implement this feature!"),(0,i.kt)("p",null,"Give it a go, in case you need some help you can look at the (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serverpod/notes"},"full code example"),")."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this tutorial, you learned how to build a simple note-taking app using the Serverpod backend framework. You started by setting up the necessary tools and environment to work with Serverpod. Then, you covered various aspects of building an app, including creating serializable objects, creating database tables, and creating API endpoints for performing CRUD operations."),(0,i.kt)("p",null,"You also learned how to use Serverpod's code generator and how to use the generated client library to connect the Flutter app to the server. By establishing this connection, you were able to fetch data from the server and display it in the app."),(0,i.kt)("p",null,"Throughout the tutorial, you gained an understanding of how Serverpod simplifies the development process by automatically handling the serialization and deserialization of objects, managing database tables, and seamlessly integrating with Flutter. You have acquired the foundational knowledge to build powerful and scalable server-side applications using Serverpod."),(0,i.kt)("p",null,"Congratulations on completing this tutorial. You are now equipped with the skills to build your own server-side applications using Serverpod. Happy coding!"),(0,i.kt)("p",null,"Want to learn more? Check out some of our other tutorials, or the tutorials created by our community."))}k.isMDXComponent=!0},6823:function(e,t,n){t.Z=n.p+"assets/images/02-note-class-98d85e6b3f9f80410f4d06652b62731a.png"}}]);