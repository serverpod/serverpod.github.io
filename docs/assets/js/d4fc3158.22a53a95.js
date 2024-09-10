"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[98287],{77075:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=o(85893),r=o(11151);const t={},i="Google Cloud Run with CGP Console",a={id:"deployments/deploying-to-gcr-console",title:"Google Cloud Run with CGP Console",description:"If your server does not maintain a state and you aren't using future calls, running your Serverpod on Google Cloud Run can be a great option. Cloud Run is the easiest way to deploy your server but may be less flexible as your application grows. Check the Choosing deployment strategy page for more information on choosing the best solution for your needs.",source:"@site/versioned_docs/version-1.1.1/06-deployments/03-deploying-to-gcr-console.md",sourceDirName:"06-deployments",slug:"/deployments/deploying-to-gcr-console",permalink:"/1.1.1/deployments/deploying-to-gcr-console",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-1.1.1/06-deployments/03-deploying-to-gcr-console.md",tags:[],version:"1.1.1",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Engine with Terraform",permalink:"/1.1.1/deployments/deploying-to-gce-terraform"},next:{title:"AWS EC2 with Terraform",permalink:"/1.1.1/deployments/deploying-to-aws"}},l={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Setup the database",id:"setup-the-database",level:2},{value:"Create database user and database tables",id:"create-database-user-and-database-tables",level:3},{value:"Create a service account",id:"create-a-service-account",level:2},{value:"Configure Serverpod",id:"configure-serverpod",level:2},{value:"Deploy your server",id:"deploy-your-server",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"google-cloud-run-with-cgp-console",children:"Google Cloud Run with CGP Console"})}),"\n",(0,s.jsxs)(n.p,{children:["If your server does not maintain a state and you aren't using future calls, running your Serverpod on Google Cloud Run can be a great option. Cloud Run is the easiest way to deploy your server but may be less flexible as your application grows. Check the ",(0,s.jsx)(n.a,{href:"deployment-strategy",children:"Choosing deployment strategy"})," page for more information on choosing the best solution for your needs."]}),"\n",(0,s.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,s.jsx)(n.p,{children:"Before you begin, you will need to install and configure the Google Cloud CLI tools."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new project with billing enabled. Learn how to check if billing is enabled ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/billing/docs/how-to/verify-billing-enabled",children:"here"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"Install"})," the Google Cloud CLI."]}),"\n",(0,s.jsxs)(n.li,{children:["To ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/initializing",children:"initialize"})," the gcloud CLI, run the following command:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcloud init\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To set the default project for your Cloud Run service:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcloud config set project <PROJECT_ID>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup-the-database",children:"Setup the database"}),"\n",(0,s.jsxs)(n.p,{children:["Before deploying your server, you must give it access to a Postgres database. Navigate to SQL, activate the API, then click ",(0,s.jsx)(n.em,{children:"Create Instance"}),". Choose ",(0,s.jsx)(n.em,{children:"PostgreSQL"}),". Pick a name for the database."]}),"\n",(0,s.jsx)(n.p,{children:"There are many configurations you can make, pick the ones that are best for your project, but make sure to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the production database password from your ",(0,s.jsx)(n.code,{children:"config/passwords.yaml"})," file for the admin password."]}),"\n",(0,s.jsx)(n.li,{children:"Use database version: PostgreSQL 14."}),"\n",(0,s.jsx)(n.li,{children:"Remember the region that you pick (you will use the same region for Cloud Run)."}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.em,{children:"Customize your instance"})," > ",(0,s.jsx)(n.em,{children:"Connections"}),", make sure that ",(0,s.jsx)(n.em,{children:"Public IP"})," is enabled."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you are happy with your choices, click ",(0,s.jsx)(n.em,{children:"Create Instance"}),". Creating your database can take up to 20 minutes, so this is a good time for a quick coffee break."]}),"\n",(0,s.jsx)(n.h3,{id:"create-database-user-and-database-tables",children:"Create database user and database tables"}),"\n",(0,s.jsx)(n.p,{children:"When the Postgres instance creation has finished, you must add a database and an approved IP number you can connect from to access the database. Click on your database instance to open up its settings."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.em,{children:"Databases"})," > ",(0,s.jsx)(n.em,{children:"Create Database"}),". For ",(0,s.jsx)(n.em,{children:"Database name"}),", enter ",(0,s.jsx)(n.code,{children:"serverpod"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.em,{children:"Connections"})," > ",(0,s.jsx)(n.em,{children:"Networking"}),". Then, click ",(0,s.jsx)(n.em,{children:"Add Network"}),". Enter a name for where you will be connecting from, e.g., ",(0,s.jsx)(n.em,{children:"Home"})," or ",(0,s.jsx)(n.em,{children:"Office"}),". For ",(0,s.jsx)(n.em,{children:"Network"})," enter your public IP number. If you are not sure, you can Google ",(0,s.jsx)(n.em,{children:"what is my IP"})," to find out."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now you can connect to your database with your favorite Postgres tool. Postico is a good option if you are on a Mac. Click on the ",(0,s.jsx)(n.em,{children:"Overview"})," tab of the database and take note of the ",(0,s.jsx)(n.em,{children:"Public IP address"}),". Use it, together with the user ",(0,s.jsx)(n.code,{children:"postgres"}),", the database ",(0,s.jsx)(n.code,{children:"serverpod"}),", and the password from your ",(0,s.jsx)(n.code,{children:"passwords.yaml"})," file to connect to the database."]}),"\n",(0,s.jsxs)(n.p,{children:["Run the queries in ",(0,s.jsx)(n.code,{children:"generated/tables-serverpod.pgsql"})," and ",(0,s.jsx)(n.code,{children:"generated/tables.pgsql"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-service-account",children:"Create a service account"}),"\n",(0,s.jsxs)(n.p,{children:["For Cloud Run to access your database, you will need to create a service account with the ",(0,s.jsx)(n.em,{children:"Cloud SQL Client"})," role."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.em,{children:"IAM & Admin"})," > ",(0,s.jsx)(n.em,{children:"Service Accounts"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.em,{children:"Create Service Account"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Choose a name for the account, e.g., ",(0,s.jsx)(n.em,{children:"Cloud Run"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Add the ",(0,s.jsx)(n.em,{children:"Basic"})," > ",(0,s.jsx)(n.em,{children:"Editor"})," role and the ",(0,s.jsx)(n.em,{children:"Cloud SQL"})," > ",(0,s.jsx)(n.em,{children:"Cloud SQL CLient"})," role. Click ",(0,s.jsx)(n.em,{children:"Continue"})," and then ",(0,s.jsx)(n.em,{children:"Done"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Take note of the email of the newly created service account. You will need it when you deploy your server."}),"\n",(0,s.jsx)(n.h2,{id:"configure-serverpod",children:"Configure Serverpod"}),"\n",(0,s.jsxs)(n.p,{children:["You will connect to Postgres from Cloud Run with the Cloud SQL Proxy. In your Postgres instance's ",(0,s.jsx)(n.em,{children:"Overview"})," page, copy the ",(0,s.jsx)(n.em,{children:"Connection name"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"config/production.yaml"})," file. Under ",(0,s.jsx)(n.code,{children:"database"}),", replace the host with the following string, but replace the connection name that you copied in the previous step: ",(0,s.jsx)(n.code,{children:"/cloudsql/<CONNECTION_NAME>/.s.PGSQL.5432"}),". Also, add the ",(0,s.jsx)(n.code,{children:"isUnixSocket"})," option and set it to ",(0,s.jsx)(n.code,{children:"true"}),". Your configuration should look something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"database:\n  isUnixSocket: true\n  host: /cloudsql/my-project:us-central1:database-name/.s.PGSQL.5432\n  port: 5432\n  name: serverpod\n  user: postgres\n"})}),"\n",(0,s.jsx)(n.h2,{id:"deploy-your-server",children:"Deploy your server"}),"\n",(0,s.jsxs)(n.p,{children:["Your server is now ready to be deployed. When you created your project, Serverpod also created a script for deploying your server. Copy it to the root of your server directory and make it executable. Make sure you are in your server directory (e.g., ",(0,s.jsx)(n.code,{children:"myproject_server"}),"). Then run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp deploy/gcp/console_gcr/cloud-run-deploy.sh .\nchmod u+x cloud-run-deploy.sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open up the script in your favorite editor. You will need to fill in your ",(0,s.jsx)(n.em,{children:"database instance's connection name"})," and the ",(0,s.jsx)(n.em,{children:"email of your service account"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Now, deploy your server by running the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./cloud-run-deploy.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"The script runs two deployment commands, one for your API and one for the Insights API used by the Serverpod app. While running, it may ask you to enable the Cloud Run and SQL Admin services. Answer yes to all these questions."}),"\n",(0,s.jsx)(n.p,{children:"It will take a minute or two for the deployment to complete. Afterward, you can access your server through the URLs printed on the command line."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can deploy a new version of your server at any time by running ",(0,s.jsx)(n.code,{children:"./cloud-run-deploy.sh"})," again."]})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.p,{children:["You may want to assign a custom domain name to your Cloud Run instances. You can manage domain name mappings in the Cloud Run Console. There you can also add a Redis instance (you can find it under ",(0,s.jsx)(n.em,{children:"Integrations"}),"). Redis allows you to cache data and communicate between servers."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var s=o(67294);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);