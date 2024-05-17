"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2989],{421:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.1.1","label":"1.1.1","banner":null,"badge":true,"noIndex":false,"className":"docs-version-1.1.1","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Installing Serverpod","href":"/","docId":"index","unlisted":false},{"type":"link","label":"Get started","href":"/get-started","docId":"get-started","unlisted":false},{"type":"link","label":"Capabilities","href":"/capabilities","docId":"capabilities","unlisted":false},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Build your first app","href":"/tutorials/first-app","docId":"tutorials/first-app","unlisted":false},{"type":"link","label":"Videos","href":"/tutorials/videos","docId":"tutorials/videos","unlisted":false},{"type":"link","label":"Code examples","href":"/tutorials/code-example","docId":"tutorials/code-example","unlisted":false},{"type":"link","label":"Authentication","href":"/tutorials/authentication","docId":"tutorials/authentication","unlisted":false}]},{"type":"link","label":"Support & community","href":"/support","docId":"support","unlisted":false},{"type":"category","label":"Concepts","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Working with endpoints","href":"/concepts/working-with-endpoints","docId":"concepts/working-with-endpoints","unlisted":false},{"type":"link","label":"Serialization","href":"/concepts/serialization","docId":"concepts/serialization","unlisted":false},{"type":"link","label":"Sessions","href":"/concepts/sessions","docId":"concepts/sessions","unlisted":false},{"type":"link","label":"Error handling and exceptions","href":"/concepts/exceptions","docId":"concepts/exceptions","unlisted":false},{"type":"link","label":"Database communication","href":"/concepts/database-communication","docId":"concepts/database-communication","unlisted":false},{"type":"link","label":"Caching","href":"/concepts/caching","docId":"concepts/caching","unlisted":false},{"type":"link","label":"Logging","href":"/concepts/logging","docId":"concepts/logging","unlisted":false},{"type":"link","label":"Modules","href":"/concepts/modules","docId":"concepts/modules","unlisted":false},{"type":"category","label":"Authenticaton","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup","href":"/concepts/authentication/setup","docId":"concepts/authentication/setup","unlisted":false},{"type":"link","label":"The basics","href":"/concepts/authentication/basics","docId":"concepts/authentication/basics","unlisted":false},{"type":"link","label":"Working with users","href":"/concepts/authentication/working-with-users","docId":"concepts/authentication/working-with-users","unlisted":false},{"type":"category","label":"Providers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Email","href":"/concepts/authentication/providers/email","docId":"concepts/authentication/providers/email","unlisted":false},{"type":"link","label":"Google","href":"/concepts/authentication/providers/google","docId":"concepts/authentication/providers/google","unlisted":false},{"type":"link","label":"Apple","href":"/concepts/authentication/providers/apple","docId":"concepts/authentication/providers/apple","unlisted":false},{"type":"link","label":"Firebase","href":"/concepts/authentication/providers/firebase","docId":"concepts/authentication/providers/firebase","unlisted":false}]}]},{"type":"link","label":"Uploading files","href":"/concepts/file-uploads","docId":"concepts/file-uploads","unlisted":false},{"type":"link","label":"Streams and messaging","href":"/concepts/streams","docId":"concepts/streams","unlisted":false},{"type":"link","label":"Health checks","href":"/concepts/health-checks","docId":"concepts/health-checks","unlisted":false},{"type":"link","label":"Web server","href":"/concepts/webserver","docId":"concepts/webserver","unlisted":false},{"type":"link","label":"Backward compatibility","href":"/concepts/backward-compatibility","docId":"concepts/backward-compatibility","unlisted":false}]},{"type":"category","label":"Deploying Serverpod","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Choosing deployment strategy","href":"/deployments/deployment-strategy","docId":"deployments/deployment-strategy","unlisted":false},{"type":"link","label":"Google Cloud Engine with Terraform","href":"/deployments/deploying-to-gce-terraform","docId":"deployments/deploying-to-gce-terraform","unlisted":false},{"type":"link","label":"Google Cloud Run with CGP Console","href":"/deployments/deploying-to-gcr-console","docId":"deployments/deploying-to-gcr-console","unlisted":false},{"type":"link","label":"AWS EC2 with Terraform","href":"/deployments/deploying-to-aws","docId":"deployments/deploying-to-aws","unlisted":false},{"type":"link","label":"Hosting elsewhere","href":"/deployments/general","docId":"deployments/general","unlisted":false}]},{"type":"link","label":"Serverpod Insights","href":"/insights","docId":"insights","unlisted":false},{"type":"link","label":"Roadmap","href":"/roadmap","docId":"roadmap","unlisted":false},{"type":"link","label":"Contribute","href":"/contribute","docId":"contribute","unlisted":false}]},"docs":{"capabilities":{"id":"capabilities","title":"Capabilities","description":"Serverpod is a complete, competent backend for Flutter. For the glossy sales pitch, head to our main page at Serverpod.dev.","sidebar":"tutorialSidebar"},"concepts/authentication/basics":{"id":"concepts/authentication/basics","title":"The basics","description":"Serverpod automatically checks if the user is logged in and if the user has the right privileges to access the endpoint. When using the serverpod_auth module you will not have to worry about keeping track of tokens, refreshing them or, even including them in requests as this all happens automatically under the hood.","sidebar":"tutorialSidebar"},"concepts/authentication/providers/apple":{"id":"concepts/authentication/providers/apple","title":"Apple","description":"Sign-in with Apple, requires that you have a subscription to the Apple developer program, even if you only want to test the feature in development mode.","sidebar":"tutorialSidebar"},"concepts/authentication/providers/email":{"id":"concepts/authentication/providers/email","title":"Email","description":"To properly configure Sign in with Email, you must connect your Serverpod to an external service that can send the emails. One convenient option is the mailer package, which can send emails through any SMTP service. Most email providers, such as Sendgrid or Mandrill, support SMTP.","sidebar":"tutorialSidebar"},"concepts/authentication/providers/firebase":{"id":"concepts/authentication/providers/firebase","title":"Firebase","description":"Serverpod uses FlutterFire UI to handle authentication through Firebase. It allows you to add social sign-in types that Serverpod doesn\'t directly support.","sidebar":"tutorialSidebar"},"concepts/authentication/providers/google":{"id":"concepts/authentication/providers/google","title":"Google","description":"To set up Sign in with Google, you will need a Google account for your organization and set up a new project. For the project, you need to set up Credentials and Oauth consent screen. You will also need to add the serverpodauthgoogle_flutter package to your app and do some additional setup depending on each platform.","sidebar":"tutorialSidebar"},"concepts/authentication/setup":{"id":"concepts/authentication/setup","title":"Setup","description":"Serverpod comes with built-in user management and authentication. The recommended way to authenticate users is to use the serverpod_auth module. The module makes it easy to authenticate with email or social sign-ins. It is also possible to build a custom authentication integration but that is an advanced use case and won\'t be necessary for most implementations. Currently supported is Signing in with email, Google, Apple, and Firebase. Future versions of the authentication module will include more options. If you write another authentication module, please consider contributing your code.","sidebar":"tutorialSidebar"},"concepts/authentication/working-with-users":{"id":"concepts/authentication/working-with-users","title":"Working with users","description":"It\'s a common task to read or update user information on your server. You can always retrieve the id of a signed-in user through the session object.","sidebar":"tutorialSidebar"},"concepts/backward-compatibility":{"id":"concepts/backward-compatibility","title":"Backward compatibility","description":"As your app evolves, features will be added or changed. However, your users may still use older versions of the app as not everyone will update to the latest version and automatic updates through the app stores take time. Therefore it may be essential to make updates to your server compatible with older app versions.","sidebar":"tutorialSidebar"},"concepts/caching":{"id":"concepts/caching","title":"Caching","description":"Accessing the database can sometimes be expensive for complex queries or if you need to run many different queries for a specific task. Serverpod makes it easy to cache frequently requested objects in RAM. Any serializable object can be cached. Objects are stored in the Redis cache if your Serverpod is hosted across multiple servers in a cluster.","sidebar":"tutorialSidebar"},"concepts/database-communication":{"id":"concepts/database-communication","title":"Database communication","description":"Serverpod makes it easy to communicate with your database using strictly typed objects without a single SQL line. But, if you need to do more complex tasks, you can always do direct SQL calls. You define your database mappings right in the protocol yaml files.","sidebar":"tutorialSidebar"},"concepts/exceptions":{"id":"concepts/exceptions","title":"Error handling and exceptions","description":"Handling errors well is essential when you are building your server. To simplify things, Serverpod allows you to throw an exception on the server, serialize it, and catch it in your client app.","sidebar":"tutorialSidebar"},"concepts/file-uploads":{"id":"concepts/file-uploads","title":"Uploading files","description":"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios.","sidebar":"tutorialSidebar"},"concepts/health-checks":{"id":"concepts/health-checks","title":"Health checks","description":"Serverpod automatically performs health checks while running. It measures CPU and memory usage and the response time to the database. The metrics are stored in the database every minute in the serverpodhealtmetric and serverpodhealthconnection_info tables. However, the best way to visualize the data is through Serverpod Insights, which gives you a graphical view.","sidebar":"tutorialSidebar"},"concepts/logging":{"id":"concepts/logging","title":"Logging","description":"Serverpod uses the database for storing logs; this makes it easy to search for errors, slow queries, or debug messages. To log custom messages during the execution of a session, use the log method of the session object. When the session is closed, either from successful execution or by failing from throwing an exception, the messages are written to the log. By default, session log entries are written for every completed session.","sidebar":"tutorialSidebar"},"concepts/modules":{"id":"concepts/modules","title":"Modules","description":"Serverpod is built around the concept of modules. A Serverpod module is similar to a Dart package but contains both server and client code and Flutter widgets. A module contains its own namespace for endpoints and methods to minimize module conflicts.","sidebar":"tutorialSidebar"},"concepts/serialization":{"id":"concepts/serialization","title":"Serialization","description":"Serverpod makes it easy to generate serializable classes that can be passed between server and client or used to communicate with the database.","sidebar":"tutorialSidebar"},"concepts/sessions":{"id":"concepts/sessions","title":"Sessions","description":"The Session object provides information about the current context in a method call in Serverpod. It provides access to the database, caching, authentication, data storage, and messaging within the server. It will also contain information about the HTTP request object.","sidebar":"tutorialSidebar"},"concepts/streams":{"id":"concepts/streams","title":"Streams and messaging","description":"For some applications, it\'s not enough to be able to call server-side methods. You may also want to push data from the server to the client or send data two-way. Examples include real-time games or chat applications. Luckily, Serverpod supports a framework for streaming data. It\'s possible to stream any serialized objects to or from any endpoint.","sidebar":"tutorialSidebar"},"concepts/webserver":{"id":"concepts/webserver","title":"Web server","description":"In addition to the application server, Serverpod comes with a built-in web server. The web server allows you to access your database and business layer the same way you would from a method call from an app. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services.","sidebar":"tutorialSidebar"},"concepts/working-with-endpoints":{"id":"concepts/working-with-endpoints","title":"Working with endpoints","description":"Endpoints are the connection points to the server from the client. With Serverpod, you add methods to your endpoint, and your client code will be generated to make the method call. For the code to be generated, you need to place your endpoint in the endpoints directory of your server. Your endpoint should extend the Endpoint class. For methods to be generated, they need to return a typed Future, and its first argument should be a Session object. The Session object holds information about the call being made and provides access to the database.","sidebar":"tutorialSidebar"},"contribute":{"id":"contribute","title":"Contribute","description":"Serverpod is built by the community for the community. Pull requests are very much welcome. If you are making something more significant than just a tiny bug fix, please get in touch with Serverpod\'s lead developer Viktor Lidholt before you get started. This makes sure that your contribution aligns with Serverpod\'s overall vision and roadmap and that multiple persons don\'t do the same work.","sidebar":"tutorialSidebar"},"deployments/deploying-to-aws":{"id":"deployments/deploying-to-aws","title":"AWS EC2 with Terraform","description":"Serverpod makes it easy to deploy your server to AWS using Github and Terraform. Terraform will set up and manage your infrastructure while you use Github actions to manage versions and deployments. Creating your project using serverpod create Serverpod will automatically generate your deployment scripts. The default setup uses a minimal configuration that will fit within the AWS free tier, but you can easily modify the configuration to suit your needs.","sidebar":"tutorialSidebar"},"deployments/deploying-to-gce-terraform":{"id":"deployments/deploying-to-gce-terraform","title":"Google Cloud Engine with Terraform","description":"Serverpod makes deploying your server to Cloud Engine easy using Github, Terraform, and Docker containers. Terraform will set up and manage your infrastructure while you use Github to build your Docker container and manage versions and deployments. Creating your project using serverpod create will automatically generate your deployment scripts. The default setup creates a minimal configuration, but you can easily modify the configuration to suit your needs.","sidebar":"tutorialSidebar"},"deployments/deploying-to-gcr-console":{"id":"deployments/deploying-to-gcr-console","title":"Google Cloud Run with CGP Console","description":"If your server does not maintain a state and you aren\'t using future calls, running your Serverpod on Google Cloud Run can be a great option. Cloud Run is the easiest way to deploy your server but may be less flexible as your application grows. Check the Choosing deployment strategy page for more information on choosing the best solution for your needs.","sidebar":"tutorialSidebar"},"deployments/deployment-strategy":{"id":"deployments/deployment-strategy","title":"Choosing deployment strategy","description":"There are different options for hosting Serverpod. The minimal requirements are a single server or a serverless managed platform like Google Cloud Run and a Postgres database. Which setup you choose depends on the requirements of your architecture.","sidebar":"tutorialSidebar"},"deployments/general":{"id":"deployments/general","title":"Hosting elsewhere","description":"You can host Serverpod anywhere, running Dart directly or through a Docker container. This page contains helpful information if you want to deploy Serverpod on a custom platform.","sidebar":"tutorialSidebar"},"get-started":{"id":"get-started","title":"Get started","description":"This page should give you an understanding of how a Serverpod project is structured, how you make calls to endpoints, and how you communicate with the database. Before going through it, make sure that you have the latest version of Serverpod installed. In the previous section, you can learn how to set up the command line tools and install Serverpod Insights.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Installing Serverpod","description":"Serverpod is an open-source, scalable app server written in Dart for the Flutter community. Serverpod automatically generates your protocol and client-side code by analyzing your server. Calling a remote endpoint is as easy as making a local method call.","sidebar":"tutorialSidebar"},"insights":{"id":"insights","title":"Serverpod Insights","description":"Serverpod has a companion app. It is currently available for Mac and Windows, but Linux is coming soon. The app has support for viewing your server\'s logs and health metrics, but we are adding many more features in version 1.2. You must use a version of the app that matches the version of Serverpod you use in your project, or not all features may work correctly.","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Roadmap","description":"The Roadmap is up on Github.","sidebar":"tutorialSidebar"},"support":{"id":"support","title":"Support & community","description":"If you get stuck, you can get support through our Github community. The authors of Serverpod are checking in pretty much every day and helping out as much as we can.","sidebar":"tutorialSidebar"},"tutorials/authentication":{"id":"tutorials/authentication","title":"Authentication","description":"Our comprehensive Authentication series is designed to guide you seamlessly through the process of setting up and utilizing the auth module within Serverpod. Each part of this series is tailored to introduce and explain different aspects of authentication, aiming to make it a straightforward process, regardless of your experience level. We recommend starting with the first one to complete the setup of the auth module before moving on to specific providers.","sidebar":"tutorialSidebar"},"tutorials/code-example":{"id":"tutorials/code-example","title":"Code examples","description":"Looking at examples can be a great way to learn. Here we collect samples created by the Serverpod team and the community.","sidebar":"tutorialSidebar"},"tutorials/first-app":{"id":"tutorials/first-app","title":"Build your first app","description":"You will build a simple note-taking app in this tutorial. You will learn the fundamental building blocks of Serverpod that enable you to create powerful and scalable server-side applications with ease.","sidebar":"tutorialSidebar"},"tutorials/videos":{"id":"tutorials/videos","title":"Videos","description":"The Serverpod tutorials teach you how to use Serverpod to build a backend for your Flutter app. We are actively working on developing more samples and tutorials. Let us know what you want to learn about or if you wish to contribute.","sidebar":"tutorialSidebar"}}}')}}]);