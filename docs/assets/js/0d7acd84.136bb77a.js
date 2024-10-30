"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[62134],{89105:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(74848),t=r(28453);const a={},n="Uploading files",i={id:"concepts/file-uploads",title:"Uploading files",description:"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use Google Cloud Storage or S3 in production scenarios.",source:"@site/docs/06-concepts/12-file-uploads.md",sourceDirName:"06-concepts",slug:"/concepts/file-uploads",permalink:"/next/concepts/file-uploads",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-concepts/12-file-uploads.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom overrides",permalink:"/next/concepts/authentication/custom-overrides"},next:{title:"Health checks",permalink:"/next/concepts/health-checks"}},d={},l=[{value:"How to upload a file",id:"how-to-upload-a-file",level:2},{value:"Server-side code",id:"server-side-code",level:3},{value:"Client-side code",id:"client-side-code",level:3},{value:"Accessing stored files",id:"accessing-stored-files",level:2},{value:"Add a configuration for GCP",id:"add-a-configuration-for-gcp",level:2},{value:"Add a configuration for AWS S3",id:"add-a-configuration-for-aws-s3",level:2}];function c(e){const o={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"uploading-files",children:"Uploading files"})}),"\n",(0,s.jsx)(o.p,{children:"Serverpod has built-in support for handling file uploads. Out of the box, your server is configured to use the database for storing files. This works well for testing but may not be performant in larger-scale applications. You should set up your server to use Google Cloud Storage or S3 in production scenarios."}),"\n",(0,s.jsx)(o.h2,{id:"how-to-upload-a-file",children:"How to upload a file"}),"\n",(0,s.jsxs)(o.p,{children:["A ",(0,s.jsx)(o.code,{children:"public"})," and ",(0,s.jsx)(o.code,{children:"private"})," file storage are set up by default to use the database. You can replace these or add more configurations for other file storages."]}),"\n",(0,s.jsx)(o.h3,{id:"server-side-code",children:"Server-side code"}),"\n",(0,s.jsx)(o.p,{children:"There are a few steps required to upload a file. First, you must create an upload description on the server and pass it to your app. The upload description grants access to the app to upload the file. If you want to grant access to any file, you can add the following code to one of your endpoints. However, in most cases, you may want to restrict which files can be uploaded."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"Future<String?> getUploadDescription(Session session, String path) async {\n  return await session.storage.createDirectFileUploadDescription(\n    storageId: 'public',\n    path: path,\n  );\n}\n"})}),"\n",(0,s.jsx)(o.p,{children:"After the file is uploaded, you should verify that the upload has been completed. If you are uploading a file to a third-party service, such as S3 or Google Cloud Storage, there is no other way of knowing if the file was uploaded or if the upload was canceled."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"Future<bool> verifyUpload(Session session, String path) async {\n  return await session.storage.verifyDirectFileUpload(\n    storageId: 'public',\n    path: path,\n  );\n}\n"})}),"\n",(0,s.jsx)(o.h3,{id:"client-side-code",children:"Client-side code"}),"\n",(0,s.jsxs)(o.p,{children:["To upload a file from the app side, first request the upload description. Next, upload the file. You can upload from either a ",(0,s.jsx)(o.code,{children:"Stream"})," or a ",(0,s.jsx)(o.code,{children:"ByteData"})," object. If you are uploading a larger file, using a ",(0,s.jsx)(o.code,{children:"Stream"})," is better because not all of the data must be held in RAM memory. Finally, you should verify the upload with the server."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"var uploadDescription = await client.myEndpoint.getUploadDescription('myfile');\nif (uploadDescription != null) {\n  var uploader = FileUploader(uploadDescription);\n  await uploader.upload(myStream);\n  var success = await client.myEndpoint.verifyUpload('myfile');\n}\n"})}),"\n",(0,s.jsxs)(o.admonition,{type:"info",children:[(0,s.jsx)(o.p,{children:"In a real-world app, you most likely want to create the file paths on your server. For your file paths to be compatible with S3, do not use a leading slash; only use standard characters and numbers. E.g.:"}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"'profile/$userId/images/avatar.png'\n"})})]}),"\n",(0,s.jsx)(o.h2,{id:"accessing-stored-files",children:"Accessing stored files"}),"\n",(0,s.jsx)(o.p,{children:"It's possible to quickly check if an uploaded file exists or access the file itself. If a file is in a public storage, it is also accessible to the world through an URL. If it is private, it can only be accessed from the server."}),"\n",(0,s.jsxs)(o.p,{children:["To check if a file exists, use the ",(0,s.jsx)(o.code,{children:"fileExists"})," method."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"var exists = await session.storage.fileExists(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n"})}),"\n",(0,s.jsx)(o.p,{children:"If the file is in a public storage, you can access it through its URL."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"var url = await session.storage.getPublicUrl(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n"})}),"\n",(0,s.jsx)(o.p,{children:"You can also directly retrieve or store a file from your server."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"var myByteData = await session.storage.retrieveFile(\n  storageId: 'public',\n  path: 'my/file/path',\n);\n"})}),"\n",(0,s.jsx)(o.h2,{id:"add-a-configuration-for-gcp",children:"Add a configuration for GCP"}),"\n",(0,s.jsx)(o.p,{children:"Serverpod uses Google Cloud Storage's HMAC interoperability to handle file uploads to Google Cloud. To make file uploads work, you must make a few custom configurations in your Google Cloud console:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Create a service account with the ",(0,s.jsx)(o.em,{children:"Storage Admin"})," role."]}),"\n",(0,s.jsxs)(o.li,{children:["Under ",(0,s.jsx)(o.em,{children:"Cloud Storage"})," > ",(0,s.jsx)(o.em,{children:"Settings"})," > ",(0,s.jsx)(o.em,{children:"Interoperability"}),", create a new HMAC key for your newly created service account."]}),"\n",(0,s.jsxs)(o.li,{children:["Add the two keys you received in the previous step to your ",(0,s.jsx)(o.code,{children:"config/password.yaml"})," file. The keys should be named ",(0,s.jsx)(o.code,{children:"HMACAccessKeyId"})," and ",(0,s.jsx)(o.code,{children:"HMACSecretKey"}),", respectively."]}),"\n",(0,s.jsxs)(o.li,{children:["When creating a new bucket, set the ",(0,s.jsx)(o.em,{children:"Access control"})," to ",(0,s.jsx)(o.em,{children:"Fine-grained"})," and disable the ",(0,s.jsx)(o.em,{children:"Prevent public access"})," option."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"You may also want to add the bucket as a backend for your load balancer to give it a custom domain name."}),"\n",(0,s.jsxs)(o.p,{children:["When you have set up your GCP bucket, you need to configure it in Serverpod. Add the GCP package to your ",(0,s.jsx)(o.code,{children:"pubspec.yaml"})," file and import it in your ",(0,s.jsx)(o.code,{children:"server.dart"})," file."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"import 'package:serverpod_cloud_storage_gcp/serverpod_cloud_storage_gcp.dart'\n    as gcp;\n"})}),"\n",(0,s.jsxs)(o.p,{children:["After creating your Serverpod, you add a storage configuration. If you want to replace the default ",(0,s.jsx)(o.code,{children:"public"})," or ",(0,s.jsx)(o.code,{children:"private"})," storages, set the ",(0,s.jsx)(o.code,{children:"storageId"})," to ",(0,s.jsx)(o.code,{children:"public"})," or ",(0,s.jsx)(o.code,{children:"private"}),". Set the public host if you have configured your GCP bucket to be accessible on a custom domain through a load balancer. You should add the cloud storage before starting your pod. The ",(0,s.jsx)(o.code,{children:"bucket"})," parameter refers to the GCP bucket name (you can find it in the console) and the ",(0,s.jsx)(o.code,{children:"publicHost"})," is the domain name used to access the bucket via https."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"  pod.addCloudStorage(gcp.GoogleCloudStorage(\n    serverpod: pod,\n    storageId: 'public',\n    public: true,\n    region: 'auto',\n    bucket: 'my-bucket-name',\n    publicHost: 'storage.myapp.com',\n  ));\n"})}),"\n",(0,s.jsx)(o.h2,{id:"add-a-configuration-for-aws-s3",children:"Add a configuration for AWS S3"}),"\n",(0,s.jsx)(o.p,{children:"This section shows how to set up a storage using S3. Before you write your Dart code, you need to set up an S3 bucket. Most likely, you will also want to set up a CloudFront for the bucket, where you can use a custom domain and your own SSL certificate. Finally, you will need to get a set of AWS access keys and add them to your Serverpod password file."}),"\n",(0,s.jsxs)(o.p,{children:["When you are all set with the AWS setup, include the S3  package in your ",(0,s.jsx)(o.code,{children:"pubspec.yaml"})," file and import it in your ",(0,s.jsx)(o.code,{children:"server.dart"})," file."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"import 'package:serverpod_cloud_storage_s3/serverpod_cloud_storage_s3.dart'\n    as s3;\n"})}),"\n",(0,s.jsxs)(o.p,{children:["After creating your Serverpod, you add a storage configuration. If you want to replace the default ",(0,s.jsx)(o.code,{children:"public"})," or ",(0,s.jsx)(o.code,{children:"private"})," storages, set the ",(0,s.jsx)(o.code,{children:"storageId"})," to ",(0,s.jsx)(o.code,{children:"public"})," or ",(0,s.jsx)(o.code,{children:"private"}),". Set the public host if you have configured your S3 bucket to be accessible on a custom domain through CloudFront. You should add the cloud storage before starting your pod."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-dart",children:"pod.addCloudStorage(s3.S3CloudStorage(\n  serverpod: pod,\n  storageId: 'public',\n  public: true,\n  region: 'us-west-2',\n  bucket: 'my-bucket-name',\n  publicHost: 'storage.myapp.com',\n));\n"})}),"\n",(0,s.jsxs)(o.p,{children:["For your S3 configuration to work, you will also need to add your AWS credentials to the ",(0,s.jsx)(o.code,{children:"passwords.yaml"})," file. You create the access keys from your AWS console when signed in as the root user."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:"shared:\n  AWSAccessKeyId: 'XXXXXXXXXXXXXX'\n  AWSSecretKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'\n"})}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsx)(o.p,{children:"If you are using the GCP or AWS Terraform scripts that are created with your Serverpod project, the required GCP or S3 buckets will be created automatically. The scripts will also configure your load balancer or Cloudfront and the certificates needed to access the buckets securely."})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>n,x:()=>i});var s=r(96540);const t={},a=s.createContext(t);function n(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);