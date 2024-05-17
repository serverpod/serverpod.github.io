"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[541],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2581:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={},d="Web server",l={unversionedId:"concepts/webserver",id:"concepts/webserver",title:"Web server",description:"In addition to the application server, Serverpod comes with a built-in web server. The web server allows you to access your database and business layer the same way you would from a method call from an app. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services.",source:"@site/docs/03-concepts/10-webserver.md",sourceDirName:"03-concepts",slug:"/concepts/webserver",permalink:"/next/concepts/webserver",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/03-concepts/10-webserver.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streams and messaging",permalink:"/next/concepts/streams"},next:{title:"Deploying to AWS",permalink:"/next/deployments/deploying-to-aws"}},c={},p=[{value:"Creating new routes and widgets",id:"creating-new-routes-and-widgets",level:2},{value:"Special widgets and routes",id:"special-widgets-and-routes",level:2},{value:"Database access and logging",id:"database-access-and-logging",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-server"},"Web server"),(0,o.kt)("p",null,"In addition to the application server, Serverpod comes with a built-in web server. The web server allows you to access your database and business layer the same way you would from a method call from an app. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Serverpod's web server is still experimental, and the APIs may change in the future. This documentation should give you some hints on getting started, but we plan to add more extensive documentation as the web server matures."))),(0,o.kt)("p",null,"When you create a new Serverpod project, it sets up a web server by default. When working with the web server, there are two main classes to understand; ",(0,o.kt)("inlineCode",{parentName:"p"},"WidgetRoute")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"WidgetRoute")," provides an entry point for a call to the server and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget")," renders a web page or response using templates, JSON, or other custom means."),(0,o.kt)("h2",{id:"creating-new-routes-and-widgets"},"Creating new routes and widgets"),(0,o.kt)("p",null,"To add new pages to your web server, you add new routes. Typically, you do this in your server.dart file before you start the Serverpod. By default, Serverpod comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"RootRoute")," and a static directory."),(0,o.kt)("p",null,"When receiving a web request, Serverpod will search and match the routes in the order they were added. You can end a route's path with an asterisk (",(0,o.kt)("inlineCode",{parentName:"p"},"*"),") to match all paths with the same beginning."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// Add a single page.\npod.webServer.addRoute(MyRoute(), '/my/page/address');\n\n// Match all paths that start with /item/\npod.webServer.addRoute(AnotherRoute(), '/item/*');\n")),(0,o.kt)("p",null,"Typically, you want to create custom routes for your pages. Do this by overriding the WidgetRoute class and implementing the build method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class MyRoute extends WidgetRoute {\n  @override\n  Future<Widget> build(Session session, HttpRequest request) async {\n    return MyPageWidget(title: 'Home page');\n  }\n}\n")),(0,o.kt)("p",null,"Your route's build method returns a Widget. The Widget consists of an HTML template file and a corresponding Dart class. Create a new custom Widget by overriding the Widget class. Then add a corresponding HTML template and place it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"web/templates")," directory. The HTML file uses the ",(0,o.kt)("a",{parentName:"p",href:"https://mustache.github.io/"},"Mustache")," template language. You set your template parameters by updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," field of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget")," class. The values are converted to ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," objects before being passed to the template. This makes it possible to nest widgets, similarly to how widgets work in Flutter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class MyPageWidget extends Widget {\n  MyPageWidget({String title}) : super(name: 'my_page') {\n    values = {\n      'title': title,\n    };\n  }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the future, we plan to add a widget library to Serverpod with widgets corresponding to the standard widgets used by Flutter, such as Column, Row, Padding, Container, etc. This would make it possible to render server-side widgets with the same code used within Flutter."))),(0,o.kt)("h2",{id:"special-widgets-and-routes"},"Special widgets and routes"),(0,o.kt)("p",null,"Serverpod comes with a few useful special widgets and routes you can use out of the box. When returning these special widget types, Serverpod's web server will automatically set the correct HTTP status codes and content types."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WidgetList")," concatenates a list of other widgets into a single widget."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WidgetJson")," renders a JSON document from a serializable structure of maps, lists, and basic values."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WidgetRedirect")," creates a redirect to another URL.")),(0,o.kt)("p",null,"To serve a static directory, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RouteStaticDirectory")," class. Serverpod will set the correct content types for most file types automatically."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Static files are configured to be cached hard by the web browser and through Cloudfront's content delivery network (if you use the AWS deployment). If you change static files, they will need to be renamed, or users will most likely access old files. To make this easier, you can add a version number when referencing the static files. The version number will be ignored when looking up the actual file. E.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"/static/my_image@v42.png")," will serve to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/static/my_image.png")," file. More advanced cache management will be coming to a future version of Serverpod."))),(0,o.kt)("h2",{id:"database-access-and-logging"},"Database access and logging"),(0,o.kt)("p",null,"The web server passes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," object to the ",(0,o.kt)("inlineCode",{parentName:"p"},"WidgetRoute")," class' ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," method. This gives you access to all the features you typically get from a standard method call to an endpoint. Use the database, logging, or caching the same way you would in a method call."))}m.isMDXComponent=!0}}]);