"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[61368],{83534:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"concepts/streams","title":"Streams and messaging","description":"For some applications, it\'s not enough to be able to call server-side methods. You may also want to push data from the server to the client or send data two-way. Examples include real-time games or chat applications. Luckily, Serverpod supports a framework for streaming data. It\'s possible to stream any serialized objects to or from any endpoint.","source":"@site/versioned_docs/version-1.1.1/05-concepts/11-streams.md","sourceDirName":"05-concepts","slug":"/concepts/streams","permalink":"/1.1.1/concepts/streams","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/05-concepts/11-streams.md","tags":[],"version":"1.1.1","sidebarPosition":11,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Uploading files","permalink":"/1.1.1/concepts/file-uploads"},"next":{"title":"Health checks","permalink":"/1.1.1/concepts/health-checks"}}');var a=n(74848),r=n(28453);const i={},o="Streams and messaging",c={},d=[{value:"Handling streams server-side",id:"handling-streams-server-side",level:2},{value:"The user object",id:"the-user-object",level:3},{value:"Internal server messaging",id:"internal-server-messaging",level:3},{value:"Handling streams in your app",id:"handling-streams-in-your-app",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"streams-and-messaging",children:"Streams and messaging"})}),"\n",(0,a.jsx)(s.p,{children:"For some applications, it's not enough to be able to call server-side methods. You may also want to push data from the server to the client or send data two-way. Examples include real-time games or chat applications. Luckily, Serverpod supports a framework for streaming data. It's possible to stream any serialized objects to or from any endpoint."}),"\n",(0,a.jsx)(s.h2,{id:"handling-streams-server-side",children:"Handling streams server-side"}),"\n",(0,a.jsx)(s.p,{children:"The Endpoint class has three methods you override to work with streams."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"streamOpened"})," is called when a user connects to a stream on the Endpoint."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"streamClosed"})," is called when a user disconnects from a stream on the Endpoint."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"handleStreamMessage"})," is called when a serialized message is received from a client."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["To send a message to a client, call the ",(0,a.jsx)(s.code,{children:"sendStreamMessage"})," method. You will need to include the session associated with the user."]}),"\n",(0,a.jsx)(s.h3,{id:"the-user-object",children:"The user object"}),"\n",(0,a.jsx)(s.p,{children:"It's often handy to associate a state together with a streaming session. Typically, you do this when a stream is opened."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"Future<void> streamOpened(StreamingSession session) async {\n  setUserObject(session, MyUserObject());\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["You can access the user object at any time by calling the ",(0,a.jsx)(s.code,{children:"getUserObject"})," method. The user object is automatically discarded when a session ends."]}),"\n",(0,a.jsx)(s.h3,{id:"internal-server-messaging",children:"Internal server messaging"}),"\n",(0,a.jsx)(s.p,{children:"A typical scenario when working with streams is to pass on messages from one user to another. For instance, if one client sends a chat message to the server, the server should send it to the correct user. Serverpod comes with a built-in messaging system that makes this easy. You can pass messages locally on a single server, but messages are passed through Redis by default. Passing the messages through Redis makes it possible to send the messages between multiple servers in a cluster."}),"\n",(0,a.jsxs)(s.p,{children:["In most cases, it's easiest to subscribe to a message channel in the ",(0,a.jsx)(s.code,{children:"streamOpened"})," method. The subscription will automatically be disposed of when the stream is closed. The following example will forward any message sent to a user identified by its user id."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"@override\nFuture<void> streamOpened(StreamingSession session) async {\n  session.messages.addListener(\n    'user_${await session.auth.authenticatedUserId}',\n    (message) {\n      sendStreamMessage(session, message);\n    },\n  );\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["In your ",(0,a.jsx)(s.code,{children:"handleStreamMessage"})," method, you can pass on messages to the correct channel."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"@override\nFuture<void> handleStreamMessage(\n  StreamingSession session,\n  SerializableEntity message,\n) async {\n  if (message is MyChatMessage) {\n    session.messages.postMessage(\n      'user_${message.recipientId}',\n      message,\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["For a real-world example, check out ",(0,a.jsx)(s.a,{href:"https://pixorama.live",children:"Pixorama"}),". It's a multi-user drawing experience showcasing Serverpod's real-time capabilities and comes with complete source code."]})}),"\n",(0,a.jsx)(s.h2,{id:"handling-streams-in-your-app",children:"Handling streams in your app"}),"\n",(0,a.jsx)(s.p,{children:"Before you can access streams in your client, you need to connect to the server's web socket. You do this by calling connectWebSocket on your client."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"await client.connectWebSocket();\n\n"})}),"\n",(0,a.jsx)(s.p,{children:"You can monitor the state of the connection by adding a listener to the client.\nOnce connected to your server's web socket, you can pass and receive serialized objects."}),"\n",(0,a.jsx)(s.p,{children:"Listen to its web socket stream to receive updates from an endpoint on the server."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"await for (var message in client.myEndpoint.stream) {\n  _handleMessage(message);\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["You send messages to the server's endpoint by calling ",(0,a.jsx)(s.code,{children:"sendStreamMessage"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"client.myEndpoint.sendStreamMessage(MyMessage(text: 'Hello'));\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsx)(s.p,{children:"Authentication is handled automatically. If you have signed in, your web socket connection will be authenticated."})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(96540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);