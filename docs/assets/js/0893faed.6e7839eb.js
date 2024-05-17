"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[2265],{76680:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(85893),t=n(11151);const i={},s="Deploying to AWS",a={id:"deployments/deploying-to-aws",title:"Deploying to AWS",description:"Serverpod makes it easy to deploy your server to AWS using Github and Terraform. Terraform will set up and manage your infrastructure while you use Github actions to manage versions and deployments. Creating your project using serverpod create Serverpod will automatically generate your deployment scripts. The default setup uses a minimal configuration that will fit within the AWS free tier, but you can easily modify the configuration to suit your needs.",source:"@site/versioned_docs/version-0.9.9/04-deployments/01-deploying-to-aws.md",sourceDirName:"04-deployments",slug:"/deployments/deploying-to-aws",permalink:"/0.9.9/deployments/deploying-to-aws",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-0.9.9/04-deployments/01-deploying-to-aws.md",tags:[],version:"0.9.9",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web server",permalink:"/0.9.9/concepts/webserver"},next:{title:"General notes",permalink:"/0.9.9/deployments/general"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What will be deployed?",id:"what-will-be-deployed",level:2},{value:"Set up your domain name and certificates",id:"set-up-your-domain-name-and-certificates",level:2},{value:"Configure Github",id:"configure-github",level:2},{value:"Configure Serverpod",id:"configure-serverpod",level:2},{value:"Deploy your infrastructure",id:"deploy-your-infrastructure",level:2},{value:"Create database tables",id:"create-database-tables",level:2},{value:"Test your deployment",id:"test-your-deployment",level:2},{value:"Troubleshooting and tips and tricks",id:"troubleshooting-and-tips-and-tricks",level:2},{value:"Signing in to your instances",id:"signing-in-to-your-instances",level:3},{value:"External dependencies and submodules",id:"external-dependencies-and-submodules",level:3},{value:"Troubleshooting deployments",id:"troubleshooting-deployments",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"deploying-to-aws",children:"Deploying to AWS"}),"\n",(0,r.jsxs)(o.p,{children:["Serverpod makes it easy to deploy your server to AWS using Github and Terraform. Terraform will set up and manage your infrastructure while you use Github actions to manage versions and deployments. Creating your project using ",(0,r.jsx)(o.code,{children:"serverpod create"})," Serverpod will automatically generate your deployment scripts. The default setup uses a minimal configuration that will fit within the AWS free tier, but you can easily modify the configuration to suit your needs."]}),"\n",(0,r.jsx)(o.admonition,{type:"caution",children:(0,r.jsx)(o.p,{children:"Using Serverpod\u2019s AWS deployment may incur costs to your AWS account. Serverpod\u2019s scripts are provided as-is, and we take no responsibility for any unexpected charges from using them."})}),"\n",(0,r.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(o.p,{children:"To use the deployment scripts, you will need the following:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"An AWS account. It may take up to 24 hours to get your AWS account up and running."}),"\n",(0,r.jsxs)(o.li,{children:["AWS CLI, configured with your credentials. ",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"Install AWS CLI"})]}),"\n",(0,r.jsxs)(o.li,{children:["Terraform. ",(0,r.jsx)(o.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started",children:"Install Terraform"})]}),"\n",(0,r.jsx)(o.li,{children:"Your Serverpod project version controlled on Github."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["If you haven\u2019t used Terraform before, it\u2019s a great idea to go through their tutorial for AWS, as it will give you a basic understanding of how everything fits together. ",(0,r.jsx)(o.a,{href:"https://learn.hashicorp.com/collections/terraform/aws-get-started",children:"Get started with Terraform and AWS"})]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:"The top directory created by Serverpod must be the root directory of your Git repository. Otherwise, the deployment scripts won\u2019t work correctly."})}),"\n",(0,r.jsx)(o.h2,{id:"what-will-be-deployed",children:"What will be deployed?"}),"\n",(0,r.jsx)(o.p,{children:"The deployment scripts will set up everything you need to run your Serverpod, including an autoscaling cluster of servers, load balancers, a Postgres database, Redis, S3 buckets for file uploads, CloudFront, CodeDeploy, DNS records, and SSL certificates. Some of the components are optional, and you will need to opt in. You can also choose to create a second server cluster for a staging environment. The staging servers use the production database and Redis and allow you to test code before you deploy it to the production servers."}),"\n",(0,r.jsx)(o.p,{children:"You deploy your configuration with a domain name; the scripts will set up subdomains that provide access to different functions of your deployment:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"api.examplepod.com:"})," This is the entry point for your main Serverpod server."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"app.examplepod.com:"})," The Serverpod web server. If you prefer to host it on your top domain, and use ",(0,r.jsx)(o.em,{children:"www"})," as a redirect, you can change this in the main Terraform configuration file."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"insights.examplepod.com:"})," Provides access to the Serverpod UI and gets insights from your server while it is running."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"database.examplepod.com:"})," This is how you access your database from outside the server."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"storage.examplepod.com:"})," Access to public storage used by Serverpod. (This is optional.)"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"set-up-your-domain-name-and-certificates",children:"Set up your domain name and certificates"}),"\n",(0,r.jsx)(o.p,{children:"Before deploying your server, you will need to configure your server\u2019s top domain in AWS. You can register your domain through any registrar, but you need to set up a public hosted zone in Route 53 in AWS."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Sign in to the AWS console and navigate to ",(0,r.jsx)(o.em,{children:"Route 53 > Hosted zones"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Click ",(0,r.jsx)(o.em,{children:"Create hosted zone"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Enter your domain name and click ",(0,r.jsx)(o.em,{children:"Create hosted zone"}),"."]}),"\n",(0,r.jsx)(o.li,{children:"The console will display a number of DNS names for Amazon\u2019s name servers. You will need to have your domain registrar point to these name servers. Depending on your registrar, this process will be slightly different."}),"\n",(0,r.jsxs)(o.li,{children:["Expand the ",(0,r.jsx)(o.em,{children:"Hosted zone details"})," and take note of your ",(0,r.jsx)(o.em,{children:"Hosted zone ID"})," (you will need it in your Terraform configuration later)."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"AWS hosted zone record",src:n(53542).Z+"",width:"2190",height:"1322"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Finding the domain name servers for your hosted zone."})}),"\n",(0,r.jsxs)(o.p,{children:["Next, you need to create two SSL certificates for your domain. Navigate to ",(0,r.jsx)(o.em,{children:"AWS Certificate Manager"}),". Here it\u2019s important in which regions you create your certificates. We are deploying to ",(0,r.jsx)(o.em,{children:"Oregon (us-west-2)"})," in this example, but you can deploy to any region."]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["In the top-right corner, choose your preferred region, then click the ",(0,r.jsx)(o.em,{children:"Request"})," button to request a new certificate."]}),"\n",(0,r.jsx)(o.li,{children:"Choose to request a public certificate."}),"\n",(0,r.jsx)(o.li,{children:"For the Fully qualified domain name, enter your domain name."}),"\n",(0,r.jsxs)(o.li,{children:["Click ",(0,r.jsx)(o.em,{children:"Add another name to this certificate"}),"."]}),"\n",(0,r.jsx)(o.li,{children:"Enter a wildcard for any subdomain. E.g., *.examplepod.com"}),"\n",(0,r.jsx)(o.li,{children:"Validate the domain using DNS validation. AWS can automatically create the required entries in Route 53. Just follow the instructions."}),"\n",(0,r.jsx)(o.li,{children:"Save the ARN of your newly created certificate (you will need it in your Terraform configuration later)."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Request certificate",src:n(96530).Z+"",width:"2224",height:"1228"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Create a wildcard certificate for your domain."})}),"\n",(0,r.jsxs)(o.p,{children:["Finally, you must create a second wildcard certificate in the ",(0,r.jsx)(o.em,{children:"US East N. Virginia (us-east-1)"})," region. AWS Cloudfront can only access certificates created in the ",(0,r.jsx)(o.em,{children:"us-east-1"})," region. Change the region, and repeat the steps from when you created your first certificate. Save the ARN of your second certificate."]}),"\n",(0,r.jsx)(o.h2,{id:"configure-github",children:"Configure Github"}),"\n",(0,r.jsxs)(o.p,{children:["To allow Github to manage deployments to your AWS server cluster, you need to provide it with access keys and our ",(0,r.jsx)(o.code,{children:"passwords.yaml"})," file from the Serverpod project. You can use the same AWS access keys as you used to configure AWS CLI or generate a new pair."]}),"\n",(0,r.jsxs)(o.p,{children:["Sign in to Github and find your project\u2019s settings. Navigate to ",(0,r.jsx)(o.em,{children:"Secrets > Actions"}),". Here you need to add three secrets for deployment to work correctly. ",(0,r.jsx)(o.code,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,r.jsx)(o.code,{children:"AWS_SECRET_ACCESS_KEY"})," are your AWS credentials. Github also needs access to your ",(0,r.jsx)(o.code,{children:"config/passwords.yaml"})," file. Copy the contents of the passwords file and add it to ",(0,r.jsx)(o.code,{children:"SERVERPOD_PASSWORDS"}),"."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Github secrets",src:n(87603).Z+"",width:"1590",height:"535"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Your Github Action secrets after they have been configured."})}),"\n",(0,r.jsx)(o.h2,{id:"configure-serverpod",children:"Configure Serverpod"}),"\n",(0,r.jsxs)(o.p,{children:["You acquired a hosted zone id and two certificate ARNs from AWS in the previous steps. You will need these to configure your Serverpod deployment scripts. You find the Terraform scripts in your server\u2019s ",(0,r.jsx)(o.code,{children:"aws/terraform"})," folder. Open up the ",(0,r.jsx)(o.code,{children:"config.auto.fvars"})," file. Most of the file is already configured, including your project\u2019s name. You will need to fill in the variables: ",(0,r.jsx)(o.code,{children:"hosted_zone_id"}),", ",(0,r.jsx)(o.code,{children:"top_domain"}),", ",(0,r.jsx)(o.code,{children:"certificate_arn"}),", and ",(0,r.jsx)(o.code,{children:"cloudfront_certificate_arn"}),"."]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["If you deploy your servers in a region other than Oregon (us-west-2), you will need to update the ",(0,r.jsx)(o.code,{children:"instance_ami"})," variable. Instructions are in the configuration file."]})}),"\n",(0,r.jsx)(o.p,{children:"By default, the Terraform scripts are configured to use a minimal setup to reduce costs for running your Serverpod. You can quickly turn on additional features, such as enabling Redis or adding a staging server by changing values in the script. You can also change these values later and redo the deployment step."}),"\n",(0,r.jsxs)(o.p,{children:["Finally, to complete your Serverpod configuration, you will need to edit the ",(0,r.jsx)(o.code,{children:"config/staging.yaml"})," and ",(0,r.jsx)(o.code,{children:"config/production.yaml"})," files. In these files, you replace the ",(0,r.jsx)(o.code,{children:"examplepod.com"})," domain with the domain you are using for your server."]}),"\n",(0,r.jsx)(o.h2,{id:"deploy-your-infrastructure",children:"Deploy your infrastructure"}),"\n",(0,r.jsxs)(o.p,{children:["Your Serverpod should now be configured and ready to be deployed. Exciting times! Open up a terminal and ",(0,r.jsx)(o.code,{children:"cd"})," into your servers ",(0,r.jsx)(o.code,{children:"aws/terraform"})," directory. First, you need to add an environment variable so that Terraform can correctly set the password for the Postgres database. You find the production password for the database in your ",(0,r.jsx)(o.code,{children:"config/passwords.yaml"})," file."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:'export TF_VAR_DATABASE_PASSWORD_PRODUCTION="<MY PRODUCTION PASSWORD>"\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Next, we are ready to initialize Terraform and deploy our server. You will only need to run the ",(0,r.jsx)(o.code,{children:"terraform init"})," command the first time you deploy the configuration."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"terraform init\nterraform apply\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Terraform will now run some checks and make a plan for the deployment. If everything looks good, it will ask you if you are ready to go ahead with the changes. Type ",(0,r.jsx)(o.code,{children:"yes"})," and hit the return key. Applying the changes can take up to five minutes as AWS creates the different resources needed for your Serverpod."]}),"\n",(0,r.jsx)(o.h2,{id:"create-database-tables",children:"Create database tables"}),"\n",(0,r.jsxs)(o.p,{children:["For your Serverpod to function correctly, you will need to create its required database tables and any tables specific to your setup. The database queries needed to set up your tables can be found in ",(0,r.jsx)(o.code,{children:"generated/tables-serverpod.pgsql"})," and ",(0,r.jsx)(o.code,{children:"generated/tables.pgsql"}),". The ",(0,r.jsx)(o.code,{children:"tables.pgsql"})," file may be empty if you haven\u2019t added any tables to your project. Use your favorite tool to connect to the database (",(0,r.jsx)(o.a,{href:"https://eggerapps.at/postico/",children:"Postico"})," is a good option if you are on a Mac). Connect to ",(0,r.jsx)(o.code,{children:"database.examplepod.com"})," (replace ",(0,r.jsx)(o.code,{children:"examplepod.com"})," with your domain); the user is ",(0,r.jsx)(o.code,{children:"postgres"}),", the port is 5432, and the database is ",(0,r.jsx)(o.code,{children:"serverpod"}),". Use the production password from the ",(0,r.jsx)(o.code,{children:"config/password.yaml"})," file."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Github secrets",src:n(6038).Z+"",width:"1590",height:"562"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Connect to the database with Postico."})}),"\n",(0,r.jsx)(o.h1,{id:"deploy-your-code",children:"Deploy your code"}),"\n",(0,r.jsxs)(o.p,{children:["We now have our servers, load balancers, database, and other required infrastructure. The only missing part is that our code is not yet up and running. There are two ways to deploy the code from our Github project. We can either push the code to a branch called ",(0,r.jsx)(o.code,{children:"deployment-aws-production"})," or manually trigger the deployment action from the Github webpage."]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["If you have set up a staging server, you can also push code to a branch called ",(0,r.jsx)(o.code,{children:"deployment-aws-staging"}),". This will deploy your code to the staging environment."]})}),"\n",(0,r.jsxs)(o.p,{children:["To manually trigger a deployment, navigate to your project on the Github webpage. Click ",(0,r.jsx)(o.em,{children:"Actions > Deploy to AWS > Run workflow"}),". This will open up a small dialog that allows you to choose which branch you want to use and if you\u2019re going to target the production or staging servers. Next, click ",(0,r.jsx)(o.em,{children:"Run workflow"}),". This will trigger the action to deploy your code to your Serverpod. Usually, the deployment process takes around 30 seconds to complete."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Request certificate",src:n(44441).Z+"",width:"1590",height:"490"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Manually deploy your server with Github actions."})}),"\n",(0,r.jsx)(o.h2,{id:"test-your-deployment",children:"Test your deployment"}),"\n",(0,r.jsxs)(o.p,{children:["Your Serverpod should now be up and running! To check if everything is working, open up your web browser and go to ",(0,r.jsx)(o.code,{children:"https://api.examplepod.com"}),". (You should replace your ",(0,r.jsx)(o.code,{children:"examplepod.com"})," with your own domain name.) If everything is correctly configured, you will get a message similar to this:"]}),"\n",(0,r.jsx)(o.p,{children:"OK 2022-05-19 14:29:16.974160Z"}),"\n",(0,r.jsx)(o.h2,{id:"troubleshooting-and-tips-and-tricks",children:"Troubleshooting and tips and tricks"}),"\n",(0,r.jsx)(o.p,{children:"Chances are that if you followed the instructions, you have a Serverpod deployment that you won't have to touch very often. However, this section gives you some pointers on where to start looking if things go wrong."}),"\n",(0,r.jsx)(o.h3,{id:"signing-in-to-your-instances",children:"Signing in to your instances"}),"\n",(0,r.jsxs)(o.p,{children:["You can find a list of your currently running EC2 instances by navigating to ",(0,r.jsx)(o.em,{children:"EC2 > Instances"}),". Click on one of the instances to go to its summary page. From there, click ",(0,r.jsx)(o.em,{children:"Connect"}),". On the ",(0,r.jsx)(o.em,{children:"Connect to instance"})," page, click ",(0,r.jsx)(o.em,{children:"Connect"}),", and AWS will open up a console window with access to your EC2 instance."]}),"\n",(0,r.jsx)(o.h3,{id:"external-dependencies-and-submodules",children:"External dependencies and submodules"}),"\n",(0,r.jsxs)(o.p,{children:["The deployment scripts support using submodules and external dependencies. Place any such dependencies in a directory called ",(0,r.jsx)(o.code,{children:"vendor"})," at the root of your Github project."]}),"\n",(0,r.jsx)(o.h3,{id:"troubleshooting-deployments",children:"Troubleshooting deployments"}),"\n",(0,r.jsxs)(o.p,{children:["The deployment process involves a couple of steps. When you trigger a deployment from Github, the action will create a deployment and upload it to an S3 bucket. Then, CodeDeploy on AWS is triggered. You can find the logs from the Github action under the ",(0,r.jsx)(o.em,{children:"Actions"})," tab of your project. If the deployment process fails later, those logs are available on AWS by navigating to ",(0,r.jsx)(o.em,{children:"CodeDeploy > Deploy > Deployments"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},53542:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/1-hosted-zone-28f1f0e1924fc0eef71f65255e5abadb.jpg"},96530:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/2-request-certificate-4346d8591cbecf2e0a75cf716302bde5.jpg"},87603:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/3-github-secrets-240a9bad3b1ed2fceba1f70a630b95e0.jpg"},44441:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/4-github-workflow-e940d1df9f633c77b3c9a619a1949dfd.jpg"},6038:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/5-database-connect-00662c711e1b21e129568bce78b6c7a5.jpg"},11151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>s});var r=n(67294);const t={},i=r.createContext(t);function s(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);