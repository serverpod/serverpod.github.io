"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5500],{5433:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=s(85893),a=s(11151);const n={},o="Web server",i={id:"concepts/webserver",title:"Web server",description:"In addition to the application server, Serverpod comes with a built-in web server. The web server allows you to access your database and business layer the same way you would from a method call from an app. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services.",source:"@site/versioned_docs/version-2.0.0/05-concepts/16-webserver.md",sourceDirName:"05-concepts",slug:"/concepts/webserver",permalink:"/concepts/webserver",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.0.0/05-concepts/16-webserver.md",tags:[],version:"2.0.0",sidebarPosition:16,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backward compatibility",permalink:"/concepts/backward-compatibility"},next:{title:"Choosing deployment strategy",permalink:"/deployments/deployment-strategy"}},d={},c=[{value:"Creating new routes and widgets",id:"creating-new-routes-and-widgets",level:2},{value:"Special widgets and routes",id:"special-widgets-and-routes",level:2},{value:"Database access and logging",id:"database-access-and-logging",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"web-server",children:"Web server"}),"\n",(0,r.jsx)(t.p,{children:"In addition to the application server, Serverpod comes with a built-in web server. The web server allows you to access your database and business layer the same way you would from a method call from an app. This makes it very easy to share data for applications that need both an app and traditional web pages. You can also use the web server to create webhooks or generate custom REST APIs to communicate with 3rd party services."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Serverpod's web server is still experimental, and the APIs may change in the future. This documentation should give you some hints on getting started, but we plan to add more extensive documentation as the web server matures."})}),"\n",(0,r.jsxs)(t.p,{children:["When you create a new Serverpod project, it sets up a web server by default. When working with the web server, there are two main classes to understand; ",(0,r.jsx)(t.code,{children:"WidgetRoute"})," and ",(0,r.jsx)(t.code,{children:"Widget"}),". The ",(0,r.jsx)(t.code,{children:"WidgetRoute"})," provides an entry point for a call to the server and returns a ",(0,r.jsx)(t.code,{children:"Widget"}),". The ",(0,r.jsx)(t.code,{children:"Widget"})," renders a web page or response using templates, JSON, or other custom means."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-new-routes-and-widgets",children:"Creating new routes and widgets"}),"\n",(0,r.jsxs)(t.p,{children:["To add new pages to your web server, you add new routes. Typically, you do this in your server.dart file before you start the Serverpod. By default, Serverpod comes with a ",(0,r.jsx)(t.code,{children:"RootRoute"})," and a static directory."]}),"\n",(0,r.jsxs)(t.p,{children:["When receiving a web request, Serverpod will search and match the routes in the order they were added. You can end a route's path with an asterisk (",(0,r.jsx)(t.code,{children:"*"}),") to match all paths with the same beginning."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"// Add a single page.\npod.webServer.addRoute(MyRoute(), '/my/page/address');\n\n// Match all paths that start with /item/\npod.webServer.addRoute(AnotherRoute(), '/item/*');\n"})}),"\n",(0,r.jsx)(t.p,{children:"Typically, you want to create custom routes for your pages. Do this by overriding the WidgetRoute class and implementing the build method."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"class MyRoute extends WidgetRoute {\n  @override\n  Future<Widget> build(Session session, HttpRequest request) async {\n    return MyPageWidget(title: 'Home page');\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Your route's build method returns a Widget. The Widget consists of an HTML template file and a corresponding Dart class. Create a new custom Widget by overriding the Widget class. Then add a corresponding HTML template and place it in the ",(0,r.jsx)(t.code,{children:"web/templates"})," directory. The HTML file uses the ",(0,r.jsx)(t.a,{href:"https://mustache.github.io/",children:"Mustache"})," template language. You set your template parameters by updating the ",(0,r.jsx)(t.code,{children:"values"})," field of your ",(0,r.jsx)(t.code,{children:"Widget"})," class. The values are converted to ",(0,r.jsx)(t.code,{children:"String"})," objects before being passed to the template. This makes it possible to nest widgets, similarly to how widgets work in Flutter."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"class MyPageWidget extends Widget {\n  MyPageWidget({String title}) : super(name: 'my_page') {\n    values = {\n      'title': title,\n    };\n  }\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"In the future, we plan to add a widget library to Serverpod with widgets corresponding to the standard widgets used by Flutter, such as Column, Row, Padding, Container, etc. This would make it possible to render server-side widgets with the same code used within Flutter."})}),"\n",(0,r.jsx)(t.h2,{id:"special-widgets-and-routes",children:"Special widgets and routes"}),"\n",(0,r.jsx)(t.p,{children:"Serverpod comes with a few useful special widgets and routes you can use out of the box. When returning these special widget types, Serverpod's web server will automatically set the correct HTTP status codes and content types."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"WidgetList"})," concatenates a list of other widgets into a single widget."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"WidgetJson"})," renders a JSON document from a serializable structure of maps, lists, and basic values."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"WidgetRedirect"})," creates a redirect to another URL."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To serve a static directory, use the ",(0,r.jsx)(t.code,{children:"RouteStaticDirectory"})," class. Serverpod will set the correct content types for most file types automatically."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Static files are configured to be cached hard by the web browser and through Cloudfront's content delivery network (if you use the AWS deployment). If you change static files, they will need to be renamed, or users will most likely access old files. To make this easier, you can add a version number when referencing the static files. The version number will be ignored when looking up the actual file. E.g., ",(0,r.jsx)(t.code,{children:"/static/my_image@v42.png"})," will serve to the ",(0,r.jsx)(t.code,{children:"/static/my_image.png"})," file. More advanced cache management will be coming to a future version of Serverpod."]})}),"\n",(0,r.jsx)(t.h2,{id:"database-access-and-logging",children:"Database access and logging"}),"\n",(0,r.jsxs)(t.p,{children:["The web server passes a ",(0,r.jsx)(t.code,{children:"Session"})," object to the ",(0,r.jsx)(t.code,{children:"WidgetRoute"})," class' ",(0,r.jsx)(t.code,{children:"build"})," method. This gives you access to all the features you typically get from a standard method call to an endpoint. Use the database, logging, or caching the same way you would in a method call."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var r=s(67294);const a={},n=r.createContext(a);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);