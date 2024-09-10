"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[67513],{80071:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"0.9.21","label":"0.9.21","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-0.9.21","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Get started","href":"/0.9.21/","docId":"index","unlisted":false},{"type":"link","label":"Tutorials & Examples","href":"/0.9.21/tutorials","docId":"tutorials","unlisted":false},{"type":"link","label":"Support & community","href":"/0.9.21/support","docId":"support","unlisted":false},{"type":"link","label":"Capabilities","href":"/0.9.21/capabilities","docId":"capabilities","unlisted":false},{"type":"category","label":"Concepts","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Working with endpoints","href":"/0.9.21/concepts/working-with-endpoints","docId":"concepts/working-with-endpoints","unlisted":false},{"type":"link","label":"Serialization","href":"/0.9.21/concepts/serialization","docId":"concepts/serialization","unlisted":false},{"type":"link","label":"Database communication","href":"/0.9.21/concepts/database-communication","docId":"concepts/database-communication","unlisted":false},{"type":"link","label":"Caching","href":"/0.9.21/concepts/caching","docId":"concepts/caching","unlisted":false},{"type":"link","label":"Logging","href":"/0.9.21/concepts/logging","docId":"concepts/logging","unlisted":false},{"type":"link","label":"Modules","href":"/0.9.21/concepts/modules","docId":"concepts/modules","unlisted":false},{"type":"link","label":"Authentication","href":"/0.9.21/concepts/authentication","docId":"concepts/authentication","unlisted":false},{"type":"link","label":"Uploading files","href":"/0.9.21/concepts/file-uploads","docId":"concepts/file-uploads","unlisted":false},{"type":"link","label":"Streams and messaging","href":"/0.9.21/concepts/streams","docId":"concepts/streams","unlisted":false},{"type":"link","label":"Health checks","href":"/0.9.21/concepts/health-checks","docId":"concepts/health-checks","unlisted":false},{"type":"link","label":"Web server","href":"/0.9.21/concepts/webserver","docId":"concepts/webserver","unlisted":false},{"type":"link","label":"Backward compatibility","href":"/0.9.21/concepts/backward-compatibility","docId":"concepts/backward-compatibility","unlisted":false}]},{"type":"category","label":"Deploying Serverpod","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Deploying to AWS","href":"/0.9.21/deployments/deploying-to-aws","docId":"deployments/deploying-to-aws","unlisted":false},{"type":"link","label":"General notes","href":"/0.9.21/deployments/general","docId":"deployments/general","unlisted":false}]},{"type":"link","label":"Roadmap","href":"/0.9.21/roadmap","docId":"roadmap","unlisted":false},{"type":"link","label":"Contribute","href":"/0.9.21/contribute","docId":"contribute","unlisted":false}]},"docs":{"capabilities":{"id":"capabilities","title":"Capabilities","description":"Serverpod is a complete, competent backend for Flutter. For the glossy sales pitch, head to our main page at Serverpod.dev.","sidebar":"tutorialSidebar"},"concepts/authentication":{"id":"concepts/authentication","title":"Authentication","description":"Serverpod comes with built-in user management and authentication. You can either build your custom authentication method or use the serverpod_auth module. The module makes it easy to authenticate with email or social sign-ins.","sidebar":"tutorialSidebar"},"concepts/backward-compatibility":{"id":"concepts/backward-compatibility","title":"Backward compatibility","description":"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions.","sidebar":"tutorialSidebar"},"concepts/caching":{"id":"concepts/caching","title":"Caching","description":"Accessing the database can sometimes be expensive for complex queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. Objects are stored in the Redis cache if your Serverpod is hosted across multiple servers in a cluster.","sidebar":"tutorialSidebar"},"concepts/database-communication":{"id":"concepts/database-communication","title":"Database communication","description":"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files.","sidebar":"tutorialSidebar"},"concepts/file-uploads":{"id":"concepts/file-uploads","title":"Uploading files","description":"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios.","sidebar":"tutorialSidebar"},"concepts/health-checks":{"id":"concepts/health-checks","title":"Health checks","description":"Serverpod automatically performs health checks while running. It measures CPU and memory usage and the response time to the database. The metrics are stored in the database every minute in the serverpodhealthmetric and serverpodhealthconnection_info tables. However, the best way to visualize the data is through Serverpod Insights, which gives you a graphical view.","sidebar":"tutorialSidebar"},"concepts/logging":{"id":"concepts/logging","title":"Logging","description":"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.","sidebar":"tutorialSidebar"},"concepts/modules":{"id":"concepts/modules","title":"Modules","description":"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server and client code and Flutter widgets. A module contains its own namespace for endpoints and methods to minimize module conflicts.","sidebar":"tutorialSidebar"},"concepts/serialization":{"id":"concepts/serialization","title":"Serialization","description":"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database.","sidebar":"tutorialSidebar"},"concepts/streams":{"id":"concepts/streams","title":"Streams and messaging","description":"For some applications, it\'s not enough to be able to call server-side methods. You may also want to push data from the server to the client or send data two-way. Examples include real-time games or chat applications. Luckily, Serverpod supports a framework for streaming data. It\'s possible to stream any serialized objects to or from any endpoint.","sidebar":"tutorialSidebar"},"concepts/webserver":{"id":"concepts/webserver","title":"Web server","description":"In addition to the application server, Serverpod comes with a built-in web server. The web server allows you to access your database and business layer the same way you would from a method call from an app. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services.","sidebar":"tutorialSidebar"},"concepts/working-with-endpoints":{"id":"concepts/working-with-endpoints","title":"Working with endpoints","description":"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.","sidebar":"tutorialSidebar"},"contribute":{"id":"contribute","title":"Contribute","description":"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod\'s lead developer Viktor Lidholt before you get started. This makes sure that your contribution aligns with Serverpod\'s overall vision and roadmap and that multiple persons don\'t do the same work.","sidebar":"tutorialSidebar"},"deployments/deploying-to-aws":{"id":"deployments/deploying-to-aws","title":"Deploying to AWS","description":"Serverpod makes it easy to deploy your server to AWS using Github and Terraform. Terraform will set up and manage your infrastructure while you use Github actions to manage versions and deployments. Creating your project using serverpod create Serverpod will automatically generate your deployment scripts. The default setup uses a minimal configuration that will fit within the AWS free tier, but you can easily modify the configuration to suit your needs.","sidebar":"tutorialSidebar"},"deployments/general":{"id":"deployments/general","title":"General notes","description":"Serverpod comes with a set of Terraform scripts that makes it very easy to deploy your server. We currently support deployments to AWS but hope to support more platforms (like Google Cloud) in the future.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Get started","description":"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Roadmap","description":"The complete Serverpod roadmap to version 1.0 is now up on Github. We are releasing features as soon as they become available and hope to have the final release ready in early fall 2022.","sidebar":"tutorialSidebar"},"support":{"id":"support","title":"Support & community","description":"If you get stuck, you can get support through our Github community. The authors of Serverpod are checking in pretty much every day and helping out as much as we can.","sidebar":"tutorialSidebar"},"tutorials":{"id":"tutorials","title":"Tutorials & Examples","description":"The Serverpod tutorials teach you how to use Serverpod to build a backend for your Flutter app. We are actively working on developing more samples and tutorials. Let us know what you want to learn about or if you wish to contribute.","sidebar":"tutorialSidebar"}}}}')}}]);