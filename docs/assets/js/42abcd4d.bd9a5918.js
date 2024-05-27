"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[5805],{66928:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=t(85893),i=t(11151);const r={},o="Working with users",a={id:"concepts/authentication/working-with-users",title:"Working with users",description:"It's a common task to read or update user information on your server. You can always retrieve the id of a signed-in user through the session object.",source:"@site/versioned_docs/version-1.2.0/05-concepts/10-authentication/03-working-with-users.md",sourceDirName:"05-concepts/10-authentication",slug:"/concepts/authentication/working-with-users",permalink:"/1.2.0/concepts/authentication/working-with-users",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.2.0/05-concepts/10-authentication/03-working-with-users.md",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The basics",permalink:"/1.2.0/concepts/authentication/basics"},next:{title:"Email",permalink:"/1.2.0/concepts/authentication/providers/email"}},c={},d=[{value:"Displaying or editing user images",id:"displaying-or-editing-user-images",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"working-with-users",children:"Working with users"}),"\n",(0,n.jsx)(s.p,{children:"It's a common task to read or update user information on your server. You can always retrieve the id of a signed-in user through the session object."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-dart",children:"var userId = await session.auth.authenticatedUserId;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If you sign in users through the auth module, you will be able to retrieve more information through the static methods of the ",(0,n.jsx)(s.code,{children:"Users"})," class."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-dart",children:"var userInfo = await Users.findUserByUserId(session, userId!);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"UserInfo"})," is automatically populated when the user signs in. Different data may be available depending on which method was used for authentication."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"Users"})," class contains many other convenient methods for working with users. You can find the full documentation ",(0,n.jsx)(s.a,{href:"https://pub.dev/documentation/serverpod_auth_server/latest/protocol/Users-class.html",children:"here"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"displaying-or-editing-user-images",children:"Displaying or editing user images"}),"\n",(0,n.jsx)(s.p,{children:"The module has built-in methods for handling a user's basic settings, including uploading new profile pictures."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/serverpod/serverpod/raw/main/misc/images/user-image-button.png",alt:"UserImageButton"})}),"\n",(0,n.jsxs)(s.p,{children:["To display a user's profile picture, use the ",(0,n.jsx)(s.code,{children:"CircularUserImage"})," widget and pass a ",(0,n.jsx)(s.code,{children:"UserInfo"})," retrieved from the ",(0,n.jsx)(s.code,{children:"SessionManager"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["To edit a user profile image, use the ",(0,n.jsx)(s.code,{children:"UserImageButton"})," widget. It will automatically fetch the signed-in user's profile picture and communicate with the server."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(67294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);