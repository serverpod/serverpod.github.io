"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[915],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(y,l(l({ref:t},p),{},{components:n})):o.createElement(y,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={},s="Google Cloud Run with CGP Console",u={unversionedId:"deployments/deploying-to-gcr-console",id:"deployments/deploying-to-gcr-console",title:"Google Cloud Run with CGP Console",description:"If your server does not maintain a state and you aren't using future calls, running your Serverpod on Google Cloud Run can be a great option. Cloud Run is the easiest way to deploy your server but may be less flexible as your application grows. Check the Choosing deployment strategy page for more information on choosing the best solution for your needs.",source:"@site/docs/05-deployments/03-deploying-to-gcr-console.md",sourceDirName:"05-deployments",slug:"/deployments/deploying-to-gcr-console",permalink:"/next/deployments/deploying-to-gcr-console",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/05-deployments/03-deploying-to-gcr-console.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Engine with Terraform",permalink:"/next/deployments/deploying-to-gce-terraform"},next:{title:"AWS EC2 with Terraform",permalink:"/next/deployments/deploying-to-aws"}},p={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Setup the database",id:"setup-the-database",level:2},{value:"Create database user and database tables",id:"create-database-user-and-database-tables",level:3},{value:"Create a service account",id:"create-a-service-account",level:2},{value:"Configure Serverpod",id:"configure-serverpod",level:2},{value:"Deploy your server",id:"deploy-your-server",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-cloud-run-with-cgp-console"},"Google Cloud Run with CGP Console"),(0,r.kt)("p",null,"If your server does not maintain a state and you aren't using future calls, running your Serverpod on Google Cloud Run can be a great option. Cloud Run is the easiest way to deploy your server but may be less flexible as your application grows. Check the ",(0,r.kt)("a",{parentName:"p",href:"deployment-strategy"},"Choosing deployment strategy")," page for more information on choosing the best solution for your needs."),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"Before you begin, you will need to install and configure the Google Cloud CLI tools."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new project with billing enabled. Learn how to check if billing is enabled ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/billing/docs/how-to/verify-billing-enabled"},"here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"Install")," the Google Cloud CLI."),(0,r.kt)("li",{parentName:"ul"},"To ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," the gcloud CLI, run the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud init\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To set the default project for your Cloud Run service:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set project <PROJECT_ID>\n")),(0,r.kt)("h2",{id:"setup-the-database"},"Setup the database"),(0,r.kt)("p",null,"Before deploying your server, you must give it access to a Postgres database. Navigate to SQL, activate the API, then click ",(0,r.kt)("em",{parentName:"p"},"Create Instance"),". Choose ",(0,r.kt)("em",{parentName:"p"},"PostgreSQL"),". Pick a name for the database."),(0,r.kt)("p",null,"There are many configurations you can make, pick the ones that are best for your project, but make sure to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the production database password from your ",(0,r.kt)("inlineCode",{parentName:"li"},"config/passwords.yaml")," file for the admin password."),(0,r.kt)("li",{parentName:"ul"},"Use database version: PostgreSQL 14."),(0,r.kt)("li",{parentName:"ul"},"Remember the region that you pick (you will use the same region for Cloud Run)."),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("em",{parentName:"li"},"Customize your instance")," > ",(0,r.kt)("em",{parentName:"li"},"Connections"),", make sure that ",(0,r.kt)("em",{parentName:"li"},"Public IP")," is enabled.")),(0,r.kt)("p",null,"When you are happy with your choices, click ",(0,r.kt)("em",{parentName:"p"},"Create Instance"),". Creating your database can take up to 20 minutes, so this is a good time for a quick coffee break."),(0,r.kt)("h3",{id:"create-database-user-and-database-tables"},"Create database user and database tables"),(0,r.kt)("p",null,"When the Postgres instance creation has finished, you must add a database and an approved IP number you can connect from to access the database. Click on your database instance to open up its settings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("em",{parentName:"li"},"Databases")," > ",(0,r.kt)("em",{parentName:"li"},"Create Database"),". For ",(0,r.kt)("em",{parentName:"li"},"Database name"),", enter ",(0,r.kt)("inlineCode",{parentName:"li"},"serverpod"),"."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("em",{parentName:"li"},"Connections")," > ",(0,r.kt)("em",{parentName:"li"},"Networking"),". Then, click ",(0,r.kt)("em",{parentName:"li"},"Add Network"),". Enter a name for where you will be connecting from, e.g., ",(0,r.kt)("em",{parentName:"li"},"Home")," or ",(0,r.kt)("em",{parentName:"li"},"Office"),". For ",(0,r.kt)("em",{parentName:"li"},"Network")," enter your public IP number. If you are not sure, you can Google ",(0,r.kt)("em",{parentName:"li"},"what is my IP")," to find out.")),(0,r.kt)("p",null,"Now you can connect to your database with your favorite Postgres tool. Postico is a good option if you are on a Mac. Click on the ",(0,r.kt)("em",{parentName:"p"},"Overview")," tab of the database and take note of the ",(0,r.kt)("em",{parentName:"p"},"Public IP address"),". Use it, together with the user ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),", the database ",(0,r.kt)("inlineCode",{parentName:"p"},"serverpod"),", and the password from your ",(0,r.kt)("inlineCode",{parentName:"p"},"passwords.yaml")," file to connect to the database."),(0,r.kt)("p",null,"Run the queries in ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/tables-serverpod.pgsql")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/tables.pgsql"),"."),(0,r.kt)("h2",{id:"create-a-service-account"},"Create a service account"),(0,r.kt)("p",null,"For Cloud Run to access your database, you will need to create a service account with the ",(0,r.kt)("em",{parentName:"p"},"Cloud SQL Client")," role."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("em",{parentName:"li"},"IAM & Admin")," > ",(0,r.kt)("em",{parentName:"li"},"Service Accounts"),"."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Create Service Account"),"."),(0,r.kt)("li",{parentName:"ul"},"Choose a name for the account, e.g., ",(0,r.kt)("em",{parentName:"li"},"Cloud Run"),"."),(0,r.kt)("li",{parentName:"ul"},"Add the ",(0,r.kt)("em",{parentName:"li"},"Basic")," > ",(0,r.kt)("em",{parentName:"li"},"Editor")," role and the ",(0,r.kt)("em",{parentName:"li"},"Cloud SQL")," > ",(0,r.kt)("em",{parentName:"li"},"Cloud SQL CLient")," role. Click ",(0,r.kt)("em",{parentName:"li"},"Continue")," and then ",(0,r.kt)("em",{parentName:"li"},"Done"),".")),(0,r.kt)("p",null,"Take note of the email of the newly created service account. You will need it when you deploy your server."),(0,r.kt)("h2",{id:"configure-serverpod"},"Configure Serverpod"),(0,r.kt)("p",null,"You will connect to Postgres from Cloud Run with the Cloud SQL Proxy. In your Postgres instance's ",(0,r.kt)("em",{parentName:"p"},"Overview")," page, copy the ",(0,r.kt)("em",{parentName:"p"},"Connection name"),"."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/production.yaml")," file. Under ",(0,r.kt)("inlineCode",{parentName:"p"},"database"),", replace the host with the following string, but replace the connection name that you copied in the previous step: ",(0,r.kt)("inlineCode",{parentName:"p"},"/cloudsql/<CONNECTION_NAME>/.s.PGSQL.5432"),". Also, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"isUnixSocket")," option and set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Your configuration should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n  isUnixSocket: true\n  host: /cloudsql/my-project:us-central1:database-name/.s.PGSQL.5432\n  port: 5432\n  name: serverpod\n  user: postgres\n")),(0,r.kt)("h2",{id:"deploy-your-server"},"Deploy your server"),(0,r.kt)("p",null,"Your server is now ready to be deployed. When you created your project, Serverpod also created a script for deploying your server. Copy it to the root of your server directory and make it executable. Make sure you are in your server directory (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject_server"),"). Then run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp deploy/gcp/console_gcr/cloud-run-deploy.sh .\nchmod u+x cloud-run-deploy.sh\n")),(0,r.kt)("p",null,"Open up the script in your favorite editor. You will need to fill in your ",(0,r.kt)("em",{parentName:"p"},"database instance's connection name")," and the ",(0,r.kt)("em",{parentName:"p"},"email of your service account"),"."),(0,r.kt)("p",null,"Now, deploy your server by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./cloud-run-deploy.sh\n")),(0,r.kt)("p",null,"The script runs two deployment commands, one for your API and one for the Insights API used by the Serverpod app. While running, it may ask you to enable the Cloud Run and SQL Admin services. Answer yes to all these questions."),(0,r.kt)("p",null,"It will take a minute or two for the deployment to complete. Afterward, you can access your server through the URLs printed on the command line."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can deploy a new version of your server at any time by running ",(0,r.kt)("inlineCode",{parentName:"p"},"./cloud-run-deploy.sh")," again."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"You may want to assign a custom domain name to your Cloud Run instances. You can manage domain name mappings in the Cloud Run Console. There you can also add a Redis instance (you can find it under ",(0,r.kt)("em",{parentName:"p"},"Integrations"),"). Redis allows you to cache data and communicate between servers."))}m.isMDXComponent=!0}}]);