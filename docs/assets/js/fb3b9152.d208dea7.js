"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[6732],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(o),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4349:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={},l="Deploying to AWS",d={unversionedId:"deployments/deploying-to-aws",id:"deployments/deploying-to-aws",title:"Deploying to AWS",description:"Serverpod makes it easy to deploy your server to AWS using Github and Terraform. Terraform will set up and manage your infrastructure while you use Github actions to manage versions and deployments. Creating your project using serverpod create Serverpod will automatically generate your deployment scripts. The default setup uses a minimal configuration that will fit within the AWS free tier, but you can easily modify the configuration to suit your needs.",source:"@site/docs/04-deployments/01-deploying-to-aws.md",sourceDirName:"04-deployments",slug:"/deployments/deploying-to-aws",permalink:"/next/deployments/deploying-to-aws",editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/04-deployments/01-deploying-to-aws.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web server",permalink:"/next/concepts/webserver"},next:{title:"General notes",permalink:"/next/deployments/general"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What will be deployed?",id:"what-will-be-deployed",level:2},{value:"Set up your domain name and certificates",id:"set-up-your-domain-name-and-certificates",level:2},{value:"Configure Github",id:"configure-github",level:2},{value:"Configure Serverpod",id:"configure-serverpod",level:2},{value:"Deploy your infrastructure",id:"deploy-your-infrastructure",level:2},{value:"Create database tables",id:"create-database-tables",level:2},{value:"Test your deployment",id:"test-your-deployment",level:2},{value:"Troubleshooting and tips and tricks",id:"troubleshooting-and-tips-and-tricks",level:2},{value:"Signing in to your instances",id:"signing-in-to-your-instances",level:3},{value:"External dependencies and submodules",id:"external-dependencies-and-submodules",level:3},{value:"Troubleshooting deployments",id:"troubleshooting-deployments",level:3}],c={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-to-aws"},"Deploying to AWS"),(0,r.kt)("p",null,"Serverpod makes it easy to deploy your server to AWS using Github and Terraform. Terraform will set up and manage your infrastructure while you use Github actions to manage versions and deployments. Creating your project using ",(0,r.kt)("inlineCode",{parentName:"p"},"serverpod create")," Serverpod will automatically generate your deployment scripts. The default setup uses a minimal configuration that will fit within the AWS free tier, but you can easily modify the configuration to suit your needs."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using Serverpod\u2019s AWS deployment may incur costs to your AWS account. Serverpod\u2019s scripts are provided as-is, and we take no responsibility for any unexpected charges from using them."))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use the deployment scripts, you will need the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An AWS account. It may take up to 24 hours to get your AWS account up and running."),(0,r.kt)("li",{parentName:"ol"},"AWS CLI, configured with your credentials. ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"Install AWS CLI")),(0,r.kt)("li",{parentName:"ol"},"Terraform. ",(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started"},"Install Terraform")),(0,r.kt)("li",{parentName:"ol"},"Your Serverpod project version controlled on Github.")),(0,r.kt)("p",null,"If you haven\u2019t used Terraform before, it\u2019s a great idea to go through their tutorial for AWS, as it will give you a basic understanding of how everything fits together. ",(0,r.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/collections/terraform/aws-get-started"},"Get started with Terraform and AWS")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The top directory created by Serverpod must be the root directory of your Git repository. Otherwise, the deployment scripts won\u2019t work correctly."))),(0,r.kt)("h2",{id:"what-will-be-deployed"},"What will be deployed?"),(0,r.kt)("p",null,"The deployment scripts will set up everything you need to run your Serverpod, including an autoscaling cluster of servers, load balancers, a Postgres database, Redis, S3 buckets for file uploads, CloudFront, CodeDeploy, DNS records, and SSL certificates. Some of the components are optional, and you will need to opt in. You can also choose to create a second server cluster for a staging environment. The staging servers use the production database and Redis and allow you to test code before you deploy it to the production servers."),(0,r.kt)("p",null,"You deploy your configuration with a domain name; the scripts will set up subdomains that provide access to different functions of your deployment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"api.examplepod.com:")," This is the entry point for your main Serverpod server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"app.examplepod.com:")," The Serverpod web server. If you prefer to host it on your top domain, and use ",(0,r.kt)("em",{parentName:"li"},"www")," as a redirect, you can change this in the main Terraform configuration file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"insights.examplepod.com:")," Provides access to the Serverpod UI and gets insights from your server while it is running."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"database.examplepod.com:")," This is how you access your database from outside the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"storage.examplepod.com:")," Access to public storage used by Serverpod. (This is optional.)")),(0,r.kt)("h2",{id:"set-up-your-domain-name-and-certificates"},"Set up your domain name and certificates"),(0,r.kt)("p",null,"Before deploying your server, you will need to configure your server\u2019s top domain in AWS. You can register your domain through any registrar, but you need to set up a public hosted zone in Route 53 in AWS."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign in to the AWS console and navigate to ",(0,r.kt)("em",{parentName:"li"},"Route 53 > Hosted zones"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Create hosted zone"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter your domain name and click ",(0,r.kt)("em",{parentName:"li"},"Create hosted zone"),"."),(0,r.kt)("li",{parentName:"ol"},"The console will display a number of DNS names for Amazon\u2019s name servers. You will need to have your domain registrar point to these name servers. Depending on your registrar, this process will be slightly different."),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("em",{parentName:"li"},"Hosted zone details")," and take note of your ",(0,r.kt)("em",{parentName:"li"},"Hosted zone ID")," (you will need it in your Terraform configuration later).")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"AWS hosted zone record",src:o(262).Z,width:"2190",height:"1322"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Finding the domain name servers for your hosted zone.")),(0,r.kt)("p",null,"Next, you need to create two SSL certificates for your domain. Navigate to ",(0,r.kt)("em",{parentName:"p"},"AWS Certificate Manager"),". Here it\u2019s important in which regions you create your certificates. We are deploying to ",(0,r.kt)("em",{parentName:"p"},"Oregon (us-west-2)")," in this example, but you can deploy to any region."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the top-right corner, choose your preferred region, then click the ",(0,r.kt)("em",{parentName:"li"},"Request")," button to request a new certificate."),(0,r.kt)("li",{parentName:"ol"},"Choose to request a public certificate."),(0,r.kt)("li",{parentName:"ol"},"For the Fully qualified domain name, enter your domain name."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Add another name to this certificate"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a wildcard for any subdomain. E.g., *.examplepod.com"),(0,r.kt)("li",{parentName:"ol"},"Validate the domain using DNS validation. AWS can automatically create the required entries in Route 53. Just follow the instructions."),(0,r.kt)("li",{parentName:"ol"},"Save the ARN of your newly created certificate (you will need it in your Terraform configuration later).")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Request certificate",src:o(8961).Z,width:"2224",height:"1228"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Create a wildcard certificate for your domain.")),(0,r.kt)("p",null,"Finally, you must create a second wildcard certificate in the ",(0,r.kt)("em",{parentName:"p"},"US East N. Virginia (us-east-1)")," region. AWS Cloudfront can only access certificates created in the ",(0,r.kt)("em",{parentName:"p"},"us-east-1")," region. Change the region, and repeat the steps from when you created your first certificate. Save the ARN of your second certificate."),(0,r.kt)("h2",{id:"configure-github"},"Configure Github"),(0,r.kt)("p",null,"To allow Github to manage deployments to your AWS server cluster, you need to provide it with access keys and our ",(0,r.kt)("inlineCode",{parentName:"p"},"passwords.yaml")," file from the Serverpod project. You can use the same AWS access keys as you used to configure AWS CLI or generate a new pair."),(0,r.kt)("p",null,"Sign in to Github and find your project\u2019s settings. Navigate to ",(0,r.kt)("em",{parentName:"p"},"Secrets > Actions"),". Here you need to add three secrets for deployment to work correctly. ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," are your AWS credentials. Github also needs access to your ",(0,r.kt)("inlineCode",{parentName:"p"},"config/passwords.yaml")," file. Copy the contents of the passwords file and add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVERPOD_PASSWORDS"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Github secrets",src:o(8199).Z,width:"1590",height:"535"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Your Github Action secrets after they have been configured.")),(0,r.kt)("h2",{id:"configure-serverpod"},"Configure Serverpod"),(0,r.kt)("p",null,"You acquired a hosted zone id and two certificate ARNs from AWS in the previous steps. You will need these to configure your Serverpod deployment scripts. You find the Terraform scripts in your server\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"aws/terraform")," folder. Open up the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.auto.fvars")," file. Most of the file is already configured, including your project\u2019s name. You will need to fill in the variables: ",(0,r.kt)("inlineCode",{parentName:"p"},"hosted_zone_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top_domain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"certificate_arn"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudfront_certificate_arn"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you deploy your servers in a region other than Oregon (us-west-2), you will need to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance_ami")," variable. Instructions are in the configuration file."))),(0,r.kt)("p",null,"By default, the Terraform scripts are configured to use a minimal setup to reduce costs for running your Serverpod. You can quickly turn on additional features, such as enabling Redis or adding a staging server by changing values in the script. You can also change these values later and redo the deployment step."),(0,r.kt)("p",null,"Finally, to complete your Serverpod configuration, you will need to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/staging.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config/production.yaml")," files. In these files, you replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"examplepod.com")," domain with the domain you are using for your server."),(0,r.kt)("h2",{id:"deploy-your-infrastructure"},"Deploy your infrastructure"),(0,r.kt)("p",null,"Your Serverpod should now be configured and ready to be deployed. Exciting times! Open up a terminal and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into your servers ",(0,r.kt)("inlineCode",{parentName:"p"},"aws/terraform")," directory. First, you need to add an environment variable so that Terraform can correctly set the password for the Postgres database. You find the production password for the database in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config/passwords.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export TF_VAR_DATABASE_PASSWORD_PRODUCTION="<MY PRODUCTION PASSWORD>"\n')),(0,r.kt)("p",null,"Next, we are ready to initialize Terraform and deploy our server. You will only need to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," command the first time you deploy the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"terraform init\nterraform apply\n")),(0,r.kt)("p",null,"Terraform will now run some checks and make a plan for the deployment. If everything looks good, it will ask you if you are ready to go ahead with the changes. Type ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," and hit the return key. Applying the changes can take up to five minutes as AWS creates the different resources needed for your Serverpod."),(0,r.kt)("h2",{id:"create-database-tables"},"Create database tables"),(0,r.kt)("p",null,"For your Serverpod to function correctly, you will need to create its required database tables and any tables specific to your setup. The database queries needed to set up your tables can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/tables-serverpod.pgsql")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/tables.pgsql"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"tables.pgsql")," file may be empty if you haven\u2019t added any tables to your project. Use your favorite tool to connect to the database (",(0,r.kt)("a",{parentName:"p",href:"https://eggerapps.at/postico/"},"Postico")," is a good option if you are on a Mac). Connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"database.examplepod.com")," (replace ",(0,r.kt)("inlineCode",{parentName:"p"},"examplepod.com")," with your domain); the user is ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),", the port is 5432, and the database is ",(0,r.kt)("inlineCode",{parentName:"p"},"serverpod"),". Use the production password from the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/password.yaml")," file."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Github secrets",src:o(6935).Z,width:"1590",height:"562"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Connect to the database with Postico.")),(0,r.kt)("h1",{id:"deploy-your-code"},"Deploy your code"),(0,r.kt)("p",null,"We now have our servers, load balancers, database, and other required infrastructure. The only missing part is that our code is not yet up and running. There are two ways to deploy the code from our Github project. We can either push the code to a branch called ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment-aws-production")," or manually trigger the deployment action from the Github webpage."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have set up a staging server, you can also push code to a branch called ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment-aws-staging"),". This will deploy your code to the staging environment."))),(0,r.kt)("p",null,"To manually trigger a deployment, navigate to your project on the Github webpage. Click ",(0,r.kt)("em",{parentName:"p"},"Actions > Deploy to AWS > Run workflow"),". This will open up a small dialog that allows you to choose which branch you want to use and if you\u2019re going to target the production or staging servers. Next, click ",(0,r.kt)("em",{parentName:"p"},"Run workflow"),". This will trigger the action to deploy your code to your Serverpod. Usually, the deployment process takes around 30 seconds to complete."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Request certificate",src:o(6377).Z,width:"1590",height:"490"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Manually deploy your server with Github actions.")),(0,r.kt)("h2",{id:"test-your-deployment"},"Test your deployment"),(0,r.kt)("p",null,"Your Serverpod should now be up and running! To check if everything is working, open up your web browser and go to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.examplepod.com"),". (You should replace your ",(0,r.kt)("inlineCode",{parentName:"p"},"examplepod.com")," with your own domain name.) If everything is correctly configured, you will get a message similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OK 2022-05-19 14:29:16.974160Z\n")),(0,r.kt)("h2",{id:"troubleshooting-and-tips-and-tricks"},"Troubleshooting and tips and tricks"),(0,r.kt)("p",null,"Chances are that if you followed the instructions, you have a Serverpod deployment that you won't have to touch very often. However, this section gives you some pointers on where to start looking if things go wrong."),(0,r.kt)("h3",{id:"signing-in-to-your-instances"},"Signing in to your instances"),(0,r.kt)("p",null,"You can find a list of your currently running EC2 instances by navigating to ",(0,r.kt)("em",{parentName:"p"},"EC2 > Instances"),". Click on one of the instances to go to its summary page. From there, click ",(0,r.kt)("em",{parentName:"p"},"Connect"),". On the ",(0,r.kt)("em",{parentName:"p"},"Connect to instance")," page, click ",(0,r.kt)("em",{parentName:"p"},"Connect"),", and AWS will open up a console window with access to your EC2 instance."),(0,r.kt)("h3",{id:"external-dependencies-and-submodules"},"External dependencies and submodules"),(0,r.kt)("p",null,"The deployment scripts support using submodules and external dependencies. Place any such dependencies in a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"vendor")," at the root of your Github project."),(0,r.kt)("h3",{id:"troubleshooting-deployments"},"Troubleshooting deployments"),(0,r.kt)("p",null,"The deployment process involves a couple of steps. When you trigger a deployment from Github, the action will create a deployment and upload it to an S3 bucket. Then, CodeDeploy on AWS is triggered. You can find the logs from the Github action under the ",(0,r.kt)("em",{parentName:"p"},"Actions")," tab of your project. If the deployment process fails later, those logs are available on AWS by navigating to ",(0,r.kt)("em",{parentName:"p"},"CodeDeploy > Deploy > Deployments"),"."))}m.isMDXComponent=!0},262:function(e,t,o){t.Z=o.p+"assets/images/1-hosted-zone-28f1f0e1924fc0eef71f65255e5abadb.jpg"},8961:function(e,t,o){t.Z=o.p+"assets/images/2-request-certificate-4346d8591cbecf2e0a75cf716302bde5.jpg"},8199:function(e,t,o){t.Z=o.p+"assets/images/3-github-secrets-240a9bad3b1ed2fceba1f70a630b95e0.jpg"},6377:function(e,t,o){t.Z=o.p+"assets/images/4-github-workflow-e940d1df9f633c77b3c9a619a1949dfd.jpg"},6935:function(e,t,o){t.Z=o.p+"assets/images/5-database-connect-00662c711e1b21e129568bce78b6c7a5.jpg"}}]);