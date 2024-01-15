"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[4571],{55873:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>d});var t=s(85893),r=s(11151);const a={},i="Uploading files",n={id:"concepts/file-uploads",title:"Uploading files",description:"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios.",source:"@site/versioned_docs/version-0.9.20/04-concepts/08-file-uploads.md",sourceDirName:"04-concepts",slug:"/concepts/file-uploads",permalink:"/0.9.20/concepts/file-uploads",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.20/04-concepts/08-file-uploads.md",tags:[],version:"0.9.20",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/0.9.20/concepts/authentication"},next:{title:"Streams and messaging",permalink:"/0.9.20/concepts/streams"}},l={},d=[{value:"How to upload a file",id:"how-to-upload-a-file",level:2},{value:"Server-side code",id:"server-side-code",level:3},{value:"Client-side code",id:"client-side-code",level:3},{value:"Accessing stored files",id:"accessing-stored-files",level:2},{value:"Add a configuration for S3",id:"add-a-configuration-for-s3",level:2}];function c(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"uploading-files",children:"Uploading files"}),"\n",(0,t.jsx)(o.p,{children:"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use S3 or Google Cloud Storage in production scenarios."}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"Currently, only S3 is supported, but Google Cloud Storage support is coming planned. If you want to use Google Cloud, please consider contributing an implementation."})}),"\n",(0,t.jsx)(o.h2,{id:"how-to-upload-a-file",children:"How to upload a file"}),"\n",(0,t.jsxs)(o.p,{children:["A ",(0,t.jsx)(o.code,{children:"public"})," and ",(0,t.jsx)(o.code,{children:"private"})," file storage are set up by default to use the database. You can replace these or add more configurations for other file storages."]}),"\n",(0,t.jsx)(o.h3,{id:"server-side-code",children:"Server-side code"}),"\n",(0,t.jsx)(o.p,{children:"There are a few steps required to upload a file. First, you must create an upload description on the server and pass it to your app. The upload description grants access to the app to upload the file. If you want to grant access to any file, you can add the following code to one of your endpoints. However, in most cases, you may want to restrict which files can be uploaded."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"Future<String?> getUploadDescription(Session session, String path) async {\n  return await session.storage.createDirectFileUploadDescription(\n    storageId: 'public',\n    path: path,\n  );\n}\n"})}),"\n",(0,t.jsx)(o.p,{children:"After the file is uploaded, you should verify that the upload has been completed. If you are uploading a file to a third-party service, such as S3 or Google Cloud Storage, there is no other way of knowing if the file was uploaded or if the upload was canceled."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"Future<bool> verifyUpload(Session session, String path) async {\n  return await session.storage.verifyDirectFileUpload(\n    storageId: 'public',\n    path: path,\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h3,{id:"client-side-code",children:"Client-side code"}),"\n",(0,t.jsxs)(o.p,{children:["To upload a file from the app side, first request the upload description. Next, upload the file. You can upload from either a ",(0,t.jsx)(o.code,{children:"Stream"})," or a ",(0,t.jsx)(o.code,{children:"ByteData"})," object. If you are uploading a larger file, using a ",(0,t.jsx)(o.code,{children:"Stream"})," is better because not all of the data must be held in RAM memory. Finally, you should verify the upload with the server."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"var uploadDescription = await client.myEndpoint.getUploadDescription('myfile');\nif (uploadDescription != null) {\n  var uploader = FileUploader(uploadDescription);\n  await uploader.upload(myStream);\n  var success = await client.myEndpoint.verifyUpload('myfile');\n}\n"})}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsx)(o.p,{children:"In a real-world app, you most likely want to create the file paths on your server. For your file paths to be compatible with S3, do not use a leading slash; only use standard characters and numbers. E.g.:"}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"'profile/$userId/images/avatar.png'\n"})})]}),"\n",(0,t.jsx)(o.h2,{id:"accessing-stored-files",children:"Accessing stored files"}),"\n",(0,t.jsx)(o.p,{children:"It's possible to quickly check if an uploaded file exists or access the file itself. If a file is in a public storage, it is also accessible to the world through an URL. If it is private, it can only be accessed from the server."}),"\n",(0,t.jsxs)(o.p,{children:["To check if a file exists, use the ",(0,t.jsx)(o.code,{children:"fileExists"})," method."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"var exists = await session.storage.fileExists(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n"})}),"\n",(0,t.jsx)(o.p,{children:"If the file is in a public storage, you can access it through its URL."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"var url = await session.storage.getPublicUrl(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n"})}),"\n",(0,t.jsx)(o.p,{children:"You can also directly retrieve or store a file from your server."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"var myByteData = await session.storage.retrieveFile(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n"})}),"\n",(0,t.jsx)(o.h2,{id:"add-a-configuration-for-s3",children:"Add a configuration for S3"}),"\n",(0,t.jsx)(o.p,{children:"This section shows how to set up a storage using S3. Before you write your Dart code, you need to set up an S3 bucket. Most likely, you will also want to set up a CloudFront for the bucket, where you can use a custom domain and your own SSL certificate. Finally, you will need to get a set of AWS access keys and add them to your Serverpod password file."}),"\n",(0,t.jsxs)(o.p,{children:["When you are all set with the AWS setup, include the S3  package in your yaml file and your ",(0,t.jsx)(o.code,{children:"server.dart"})," file."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"import 'package:serverpod_cloud_storage_s3/serverpod_cloud_storage_s3.dart'\n    as s3;\n"})}),"\n",(0,t.jsxs)(o.p,{children:["After creating your Serverpod, you add a storage configuration. If you want to replace the default public or private storages, set the storageId to ",(0,t.jsx)(o.code,{children:"public"})," or ",(0,t.jsx)(o.code,{children:"private"}),". Set the public host if you have configured your S3 bucket to be accessible on a custom domain through CloudFront. You should add the cloud storage before starting your pod."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:"pod.addCloudStorage(s3.S3CloudStorage(\n  serverpod: pod,\n  storageId: 'public',\n  public: true,\n  region: 'us-west-2',\n  bucket: 'my-bucket-name',\n  publicHost: 'storage.myapp.com',\n));\n"})}),"\n",(0,t.jsxs)(o.p,{children:["For your S3 configuration to work, you will also need to add your AWS credentials to the ",(0,t.jsx)(o.code,{children:"passwords.yaml"})," file. You create the access keys from your AWS console when signed in as the root user."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"shared:\n  AWSAccessKeyId: 'XXXXXXXXXXXXXX'\n  AWSSecretKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'\n"})}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"If you are using the AWS Terraform scripts that are created with your Serverpod project, the required S3 buckets will be created automatically. The scripts will also configure Cloudfront and the certificates needed to access the buckets securely."})})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,o,s)=>{s.d(o,{Z:()=>n,a:()=>i});var t=s(67294);const r={},a=t.createContext(r);function i(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);