"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[95264],{72266:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"0.9.5","label":"0.9.5","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-0.9.5","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Get started","href":"/0.9.5/","docId":"index","unlisted":false},{"type":"link","label":"Capabilities","href":"/0.9.5/capabilities","docId":"capabilities","unlisted":false},{"type":"category","label":"Concepts","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Working with endpoints","href":"/0.9.5/concepts/working-with-endpoints","docId":"concepts/working-with-endpoints","unlisted":false},{"type":"link","label":"Serialization","href":"/0.9.5/concepts/serialization","docId":"concepts/serialization","unlisted":false},{"type":"link","label":"Database communication","href":"/0.9.5/concepts/database-communication","docId":"concepts/database-communication","unlisted":false},{"type":"link","label":"Caching","href":"/0.9.5/concepts/caching","docId":"concepts/caching","unlisted":false},{"type":"link","label":"Logging","href":"/0.9.5/concepts/logging","docId":"concepts/logging","unlisted":false},{"type":"link","label":"Modules","href":"/0.9.5/concepts/modules","docId":"concepts/modules","unlisted":false},{"type":"link","label":"Authentication","href":"/0.9.5/concepts/authentication","docId":"concepts/authentication","unlisted":false},{"type":"link","label":"Uploading files","href":"/0.9.5/concepts/file-uploads","docId":"concepts/file-uploads","unlisted":false},{"type":"link","label":"Streams and messaging","href":"/0.9.5/concepts/streams","docId":"concepts/streams","unlisted":false}]},{"type":"category","label":"Deploying Serverpod","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"General notes","href":"/0.9.5/deployments/general","docId":"deployments/general","unlisted":false}]},{"type":"link","label":"Roadmap","href":"/0.9.5/roadmap","docId":"roadmap","unlisted":false},{"type":"link","label":"Contribute","href":"/0.9.5/contribute","docId":"contribute","unlisted":false}]},"docs":{"capabilities":{"id":"capabilities","title":"Capabilities","description":"Serverpod is a complete, competent backend for Flutter. For the glossy sales pitch, head over to our main page at Serverpod.dev.","sidebar":"tutorialSidebar"},"concepts/authentication":{"id":"concepts/authentication","title":"Authentication","description":"In Serverpod, authentication is managed through the serverpod_auth module. It makes it easy to authenticate users through email or 3rd parties. Currently supported is Signing in with email, Google, and Apple. Future versions of the authentication module will include more options. Using this module requires some setup with Google and Apple for things to work.","sidebar":"tutorialSidebar"},"concepts/caching":{"id":"concepts/caching","title":"Caching","description":"Accessing the database can sometimes be expensive for complex database queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. If your Serverpod is hosted across multiple servers in a cluster, objects are stored in the Redis cache.","sidebar":"tutorialSidebar"},"concepts/database-communication":{"id":"concepts/database-communication","title":"Database communication","description":"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files.","sidebar":"tutorialSidebar"},"concepts/file-uploads":{"id":"concepts/file-uploads","title":"Uploading files","description":"Serverpod has built-in support for handling file uploads. Out of the box, your server will be configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios.","sidebar":"tutorialSidebar"},"concepts/logging":{"id":"concepts/logging","title":"Logging","description":"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.","sidebar":"tutorialSidebar"},"concepts/modules":{"id":"concepts/modules","title":"Modules","description":"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package, but it contains both server and client code, as well as Flutter widgets. A module contains its own name space for endpoints and methods to minimize any conflicts between modules.","sidebar":"tutorialSidebar"},"concepts/serialization":{"id":"concepts/serialization","title":"Serialization","description":"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database. The structure for the classes is defined in yaml-files in the protocol directory. Run serverpod generate to build the Dart code for the classes and make them accessible to both the server and client.","sidebar":"tutorialSidebar"},"concepts/streams":{"id":"concepts/streams","title":"Streams and messaging","description":"For some applications, it\'s not enough to be able to call server-side methods. You may also want to push data from the server to the client or send data two-way. Examples include real-time games or chat applications. Luckily, Serverpod supports a framework for streaming data. It\'s possible to stream any serialized objects to or from any endpoint.","sidebar":"tutorialSidebar"},"concepts/working-with-endpoints":{"id":"concepts/working-with-endpoints","title":"Working with endpoints","description":"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.","sidebar":"tutorialSidebar"},"contribute":{"id":"contribute","title":"Contribute","description":"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod\'s lead developer Viktor Lidholt before you get started. This makes sure that your contribution aligns with Serverpod\'s overall vision and roadmap and that multiple persons don\'t do the same work.","sidebar":"tutorialSidebar"},"deployments/general":{"id":"deployments/general","title":"General notes","description":"We are working hard to bring a set of ready made deployment scripts and deployment guides to Serverpod as part of the 1.0 release. Initially, we hope to support both AWS and Google Cloud.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Get started","description":"Serverpod is an open-source, scalable app server, written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Roadmap","description":"Serverpod is in an early but stable version and used in production for multiple projects. There are many exciting features coming over the next months:","sidebar":"tutorialSidebar"}}}}')}}]);