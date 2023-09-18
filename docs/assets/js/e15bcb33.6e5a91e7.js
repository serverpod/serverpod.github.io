"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[8326],{5374:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"1.1.0","label":"1.1.0","banner":"unmaintained","badge":true,"className":"docs-version-1.1.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Get started","href":"/1.1.0/","docId":"index"},{"type":"link","label":"Tutorials & Examples","href":"/1.1.0/tutorials","docId":"tutorials"},{"type":"link","label":"Support & community","href":"/1.1.0/support","docId":"support"},{"type":"link","label":"Capabilities","href":"/1.1.0/capabilities","docId":"capabilities"},{"type":"category","label":"Concepts","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Working with endpoints","href":"/1.1.0/concepts/working-with-endpoints","docId":"concepts/working-with-endpoints"},{"type":"link","label":"Serialization","href":"/1.1.0/concepts/serialization","docId":"concepts/serialization"},{"type":"link","label":"Sessions","href":"/1.1.0/concepts/sessions","docId":"concepts/sessions"},{"type":"link","label":"Error handling and exceptions","href":"/1.1.0/concepts/exceptions","docId":"concepts/exceptions"},{"type":"link","label":"Database communication","href":"/1.1.0/concepts/database-communication","docId":"concepts/database-communication"},{"type":"link","label":"Caching","href":"/1.1.0/concepts/caching","docId":"concepts/caching"},{"type":"link","label":"Logging","href":"/1.1.0/concepts/logging","docId":"concepts/logging"},{"type":"link","label":"Modules","href":"/1.1.0/concepts/modules","docId":"concepts/modules"},{"type":"link","label":"Authentication","href":"/1.1.0/concepts/authentication","docId":"concepts/authentication"},{"type":"link","label":"Uploading files","href":"/1.1.0/concepts/file-uploads","docId":"concepts/file-uploads"},{"type":"link","label":"Streams and messaging","href":"/1.1.0/concepts/streams","docId":"concepts/streams"},{"type":"link","label":"Health checks","href":"/1.1.0/concepts/health-checks","docId":"concepts/health-checks"},{"type":"link","label":"Web server","href":"/1.1.0/concepts/webserver","docId":"concepts/webserver"},{"type":"link","label":"Backward compatibility","href":"/1.1.0/concepts/backward-compatibility","docId":"concepts/backward-compatibility"}]},{"type":"category","label":"Deploying Serverpod","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Choosing deployment strategy","href":"/1.1.0/deployments/deployment-strategy","docId":"deployments/deployment-strategy"},{"type":"link","label":"Google Cloud Engine with Terraform","href":"/1.1.0/deployments/deploying-to-gce-terraform","docId":"deployments/deploying-to-gce-terraform"},{"type":"link","label":"Google Cloud Run with CGP Console","href":"/1.1.0/deployments/deploying-to-gcr-console","docId":"deployments/deploying-to-gcr-console"},{"type":"link","label":"AWS EC2 with Terraform","href":"/1.1.0/deployments/deploying-to-aws","docId":"deployments/deploying-to-aws"},{"type":"link","label":"Hosting elsewhere","href":"/1.1.0/deployments/general","docId":"deployments/general"}]},{"type":"link","label":"Serverpod Insights","href":"/1.1.0/insights","docId":"insights"},{"type":"link","label":"Roadmap","href":"/1.1.0/roadmap","docId":"roadmap"},{"type":"link","label":"Contribute","href":"/1.1.0/contribute","docId":"contribute"}]},"docs":{"capabilities":{"id":"capabilities","title":"Capabilities","description":"Serverpod is a complete, competent backend for Flutter. For the glossy sales pitch, head to our main page at Serverpod.dev.","sidebar":"tutorialSidebar"},"concepts/authentication":{"id":"concepts/authentication","title":"Authentication","description":"Serverpod comes with built-in user management and authentication. You can either build your custom authentication method or use the serverpod_auth module. The module makes it easy to authenticate with email or social sign-ins.","sidebar":"tutorialSidebar"},"concepts/backward-compatibility":{"id":"concepts/backward-compatibility","title":"Backward compatibility","description":"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions.","sidebar":"tutorialSidebar"},"concepts/caching":{"id":"concepts/caching","title":"Caching","description":"Accessing the database can sometimes be expensive for complex queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. Objects are stored in the Redis cache if your Serverpod is hosted across multiple servers in a cluster.","sidebar":"tutorialSidebar"},"concepts/database-communication":{"id":"concepts/database-communication","title":"Database communication","description":"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files.","sidebar":"tutorialSidebar"},"concepts/exceptions":{"id":"concepts/exceptions","title":"Error handling and exceptions","description":"Handling errors well is essential when you are building your server. To simplify things, Serverpod allows you to throw an exception on the server, serialize it, and catch it in your client app.","sidebar":"tutorialSidebar"},"concepts/file-uploads":{"id":"concepts/file-uploads","title":"Uploading files","description":"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios.","sidebar":"tutorialSidebar"},"concepts/health-checks":{"id":"concepts/health-checks","title":"Health checks","description":"Serverpod automatically performs health checks while running. It measures CPU and memory usage and the response time to the database. The metrics are stored in the database every minute in the serverpodhealtmetric and serverpodhealthconnection_info tables. However, the best way to visualize the data is through Serverpod Insights, which gives you a graphical view.","sidebar":"tutorialSidebar"},"concepts/logging":{"id":"concepts/logging","title":"Logging","description":"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.","sidebar":"tutorialSidebar"},"concepts/modules":{"id":"concepts/modules","title":"Modules","description":"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server and client code and Flutter widgets. A module contains its own namespace for endpoints and methods to minimize module conflicts.","sidebar":"tutorialSidebar"},"concepts/serialization":{"id":"concepts/serialization","title":"Serialization","description":"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database.","sidebar":"tutorialSidebar"},"concepts/sessions":{"id":"concepts/sessions","title":"Sessions","description":"The Session object provides information about the current context in a method call in Serverpod. It provides access to the database, caching, authentication, data storage, and messaging within the server. It will also contain information about the HTTP request object.","sidebar":"tutorialSidebar"},"concepts/streams":{"id":"concepts/streams","title":"Streams and messaging","description":"For some applications, it\'s not enough to be able to call server-side methods. You may also want to push data from the server to the client or send data two-way. Examples include real-time games or chat applications. Luckily, Serverpod supports a framework for streaming data. It\'s possible to stream any serialized objects to or from any endpoint.","sidebar":"tutorialSidebar"},"concepts/webserver":{"id":"concepts/webserver","title":"Web server","description":"In addition to the application server, Serverpod comes with a built-in web server. The web server allows you to access your database and business layer the same way you would from a method call from an app. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services.","sidebar":"tutorialSidebar"},"concepts/working-with-endpoints":{"id":"concepts/working-with-endpoints","title":"Working with endpoints","description":"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.","sidebar":"tutorialSidebar"},"contribute":{"id":"contribute","title":"Contribute","description":"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod\'s lead developer Viktor Lidholt before you get started. This makes sure that your contribution aligns with Serverpod\'s overall vision and roadmap and that multiple persons don\'t do the same work.","sidebar":"tutorialSidebar"},"deployments/deploying-to-aws":{"id":"deployments/deploying-to-aws","title":"AWS EC2 with Terraform","description":"Serverpod makes it easy to deploy your server to AWS using Github and Terraform. Terraform will set up and manage your infrastructure while you use Github actions to manage versions and deployments. Creating your project using serverpod create Serverpod will automatically generate your deployment scripts. The default setup uses a minimal configuration that will fit within the AWS free tier, but you can easily modify the configuration to suit your needs.","sidebar":"tutorialSidebar"},"deployments/deploying-to-gce-terraform":{"id":"deployments/deploying-to-gce-terraform","title":"Google Cloud Engine with Terraform","description":"Serverpod makes deploying your server to Cloud Engine easy using Github, Terraform, and Docker containers. Terraform will set up and manage your infrastructure while you use Github to build your Docker container and manage versions and deployments. Creating your project using serverpod create will automatically generate your deployment scripts. The default setup creates a minimal configuration, but you can easily modify the configuration to suit your needs.","sidebar":"tutorialSidebar"},"deployments/deploying-to-gcr-console":{"id":"deployments/deploying-to-gcr-console","title":"Google Cloud Run with CGP Console","description":"If your server does not maintain a state and you aren\'t using future calls, running your Serverpod on Google Cloud Run can be a great option. Cloud Run is the easiest way to deploy your server but may be less flexible as your application grows. Check the Choosing deployment strategy page for more information on choosing the best solution for your needs.","sidebar":"tutorialSidebar"},"deployments/deployment-strategy":{"id":"deployments/deployment-strategy","title":"Choosing deployment strategy","description":"There are different options for hosting Serverpod. The minimal requirements are a single server or a serverless managed platform like Google Cloud Run and a Postgres database. Which setup you choose depends on the requirements of your architecture.","sidebar":"tutorialSidebar"},"deployments/general":{"id":"deployments/general","title":"Hosting elsewhere","description":"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Get started","description":"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.","sidebar":"tutorialSidebar"},"insights":{"id":"insights","title":"Serverpod Insights","description":"Serverpod has a companion app. It is currently available for Mac and Windows, but Linux is coming soon. The app has support for viewing your server\'s logs and health metrics, but we are adding many more features in version 1.2. You must use a version of the app that matches the version of Serverpod you use in your project, or not all features may work correctly.","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Roadmap","description":"The Roadmap is up on Github.","sidebar":"tutorialSidebar"},"support":{"id":"support","title":"Support & community","description":"If you get stuck, you can get support through our Github community. The authors of Serverpod are checking in pretty much every day and helping out as much as we can.","sidebar":"tutorialSidebar"},"tutorials":{"id":"tutorials","title":"Tutorials & Examples","description":"The Serverpod tutorials teach you how to use Serverpod to build a backend for your Flutter app. We are actively working on developing more samples and tutorials. Let us know what you want to learn about or if you wish to contribute.","sidebar":"tutorialSidebar"}}}')}}]);