"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[9297],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),f=n,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||r;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9595:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={},l="Uploading files",p={unversionedId:"concepts/file-uploads",id:"version-0.9.22/concepts/file-uploads",title:"Uploading files",description:"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios.",source:"@site/versioned_docs/version-0.9.22/04-concepts/08-file-uploads.md",sourceDirName:"04-concepts",slug:"/concepts/file-uploads",permalink:"/concepts/file-uploads",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.22/04-concepts/08-file-uploads.md",tags:[],version:"0.9.22",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/concepts/authentication"},next:{title:"Streams and messaging",permalink:"/concepts/streams"}},d={},u=[{value:"How to upload a file",id:"how-to-upload-a-file",level:2},{value:"Server-side code",id:"server-side-code",level:3},{value:"Client-side code",id:"client-side-code",level:3},{value:"Accessing stored files",id:"accessing-stored-files",level:2},{value:"Add a configuration for S3",id:"add-a-configuration-for-s3",level:2}],c={toc:u};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uploading-files"},"Uploading files"),(0,r.kt)("p",null,"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, only S3 is supported, but Google Cloud Storage support is coming planned. If you want to use Google Cloud, please consider contributing an implementation."))),(0,r.kt)("h2",{id:"how-to-upload-a-file"},"How to upload a file"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," file storage are set up by default to use the database. You can replace these or add more configurations for other file storages."),(0,r.kt)("h3",{id:"server-side-code"},"Server-side code"),(0,r.kt)("p",null,"There are a few steps required to upload a file. First, you must create an upload description on the server and pass it to your app. The upload description grants access to the app to upload the file. If you want to grant access to any file, you can add the following code to one of your endpoints. However, in most cases, you may want to restrict which files can be uploaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Future<String?> getUploadDescription(Session session, String path) async {\n  return await session.storage.createDirectFileUploadDescription(\n    storageId: 'public',\n    path: path,\n  );\n}\n")),(0,r.kt)("p",null,"After the file is uploaded, you should verify that the upload has been completed. If you are uploading a file to a third-party service, such as S3 or Google Cloud Storage, there is no other way of knowing if the file was uploaded or if the upload was canceled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Future<bool> verifyUpload(Session session, String path) async {\n  return await session.storage.verifyDirectFileUpload(\n    storageId: 'public',\n    path: path,\n  );\n}\n")),(0,r.kt)("h3",{id:"client-side-code"},"Client-side code"),(0,r.kt)("p",null,"To upload a file from the app side, first request the upload description. Next, upload the file. You can upload from either a ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteData")," object. If you are uploading a larger file, using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," is better because not all of the data must be held in RAM memory. Finally, you should verify the upload with the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"var uploadDescription = await client.myEndpoint.getUploadDescription('myfile');\nif (uploadDescription != null) {\n  var uploader = FileUploader(uploadDescription);\n  await uploader.upload(myStream);\n  var success = await client.myEndpoint.verifyUpload('myfile');\n}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In a real-world app, you most likely want to create the file paths on your server. For your file paths to be compatible with S3, do not use a leading slash; only use standard characters and numbers. E.g.:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"'profile/$userId/images/avatar.png'\n")))),(0,r.kt)("h2",{id:"accessing-stored-files"},"Accessing stored files"),(0,r.kt)("p",null,"It's possible to quickly check if an uploaded file exists or access the file itself. If a file is in a public storage, it is also accessible to the world through an URL. If it is private, it can only be accessed from the server."),(0,r.kt)("p",null,"To check if a file exists, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fileExists")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"var exists = await session.storage.fileExists(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n")),(0,r.kt)("p",null,"If the file is in a public storage, you can access it through its URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"var url = await session.storage.getPublicUrl(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n")),(0,r.kt)("p",null,"You can also directly retrieve or store a file from your server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"var myByteData = await session.storage.retrieveFile(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n")),(0,r.kt)("h2",{id:"add-a-configuration-for-s3"},"Add a configuration for S3"),(0,r.kt)("p",null,"This section shows how to set up a storage using S3. Before you write your Dart code, you need to set up an S3 bucket. Most likely, you will also want to set up a CloudFront for the bucket, where you can use a custom domain and your own SSL certificate. Finally, you will need to get a set of AWS access keys and add them to your Serverpod password file."),(0,r.kt)("p",null,"When you are all set with the AWS setup, include the S3  package in your yaml file and your ",(0,r.kt)("inlineCode",{parentName:"p"},"server.dart")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:serverpod_cloud_storage_s3/serverpod_cloud_storage_s3.dart'\n    as s3;\n")),(0,r.kt)("p",null,"After creating your Serverpod, you add a storage configuration. If you want to replace the default public or private storages, set the storageId to ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),". Set the public host if you have configured your S3 bucket to be accessible on a custom domain through CloudFront. You should add the cloud storage before starting your pod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"pod.addCloudStorage(s3.S3CloudStorage(\n  serverpod: pod,\n  storageId: 'public',\n  public: true,\n  region: 'us-west-2',\n  bucket: 'my-bucket-name',\n  publicHost: 'storage.myapp.com',\n));\n")),(0,r.kt)("p",null,"For your S3 configuration to work, you will also need to add your AWS credentials to the ",(0,r.kt)("inlineCode",{parentName:"p"},"passwords.yaml")," file. You create the access keys from your AWS console when signed in as the root user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shared:\n  AWSAccessKeyId: 'XXXXXXXXXXXXXX'\n  AWSSecretKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using the AWS Terraform scripts that are created with your Serverpod project, the required S3 buckets will be created automatically. The scripts will also configure Cloudfront and the certificates needed to access the buckets securely."))))}f.isMDXComponent=!0}}]);