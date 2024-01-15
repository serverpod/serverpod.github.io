"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[1996],{10603:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(85893),t=r(11151);const i={},s="Google Cloud Engine with Terraform",a={id:"deployments/deploying-to-gce-terraform",title:"Google Cloud Engine with Terraform",description:"Serverpod makes deploying your server to Cloud Engine easy using Github, Terraform, and Docker containers. Terraform will set up and manage your infrastructure while you use Github to build your Docker container and manage versions and deployments. Creating your project using serverpod create will automatically generate your deployment scripts. The default setup creates a minimal configuration, but you can easily modify the configuration to suit your needs.",source:"@site/docs/06-deployments/02-deploying-to-gce-terraform.md",sourceDirName:"06-deployments",slug:"/deployments/deploying-to-gce-terraform",permalink:"/next/deployments/deploying-to-gce-terraform",draft:!1,unlisted:!1,editUrl:"https://github.com/serverpod/serverpod_docs/tree/main/docs/06-deployments/02-deploying-to-gce-terraform.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Choosing deployment strategy",permalink:"/next/deployments/deployment-strategy"},next:{title:"Google Cloud Run with CGP Console",permalink:"/next/deployments/deploying-to-gcr-console"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What will be deployed?",id:"what-will-be-deployed",level:2},{value:"Create a new GCP project with a service account",id:"create-a-new-gcp-project-with-a-service-account",level:2},{value:"Create service account",id:"create-service-account",level:3},{value:"Download service account keys",id:"download-service-account-keys",level:3},{value:"Enabling APIs",id:"enabling-apis",level:3},{value:"Set up your domain name",id:"set-up-your-domain-name",level:2},{value:"Register your domain",id:"register-your-domain",level:3},{value:"Create a DNS zone",id:"create-a-dns-zone",level:3},{value:"Verify your domain",id:"verify-your-domain",level:3},{value:"Deploy your Serverpod code",id:"deploy-your-serverpod-code",level:2},{value:"Create Artifact Registry repositories",id:"create-artifact-registry-repositories",level:3},{value:"Configure Github",id:"configure-github",level:3},{value:"Deploy your Docker container",id:"deploy-your-docker-container",level:3},{value:"Create your infrastructure",id:"create-your-infrastructure",level:2},{value:"Configure Terraform",id:"configure-terraform",level:3},{value:"Configure Serverpod",id:"configure-serverpod",level:3},{value:"Deploy your infrastructure",id:"deploy-your-infrastructure",level:3},{value:"Create database tables",id:"create-database-tables",level:2},{value:"Deploying new versions",id:"deploying-new-versions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Access the instance logs",id:"access-the-instance-logs",level:3},{value:"Log into the instance",id:"log-into-the-instance",level:3},{value:"Some things take time",id:"some-things-take-time",level:3},{value:"If you get stuck",id:"if-you-get-stuck",level:3}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"google-cloud-engine-with-terraform",children:"Google Cloud Engine with Terraform"}),"\n",(0,n.jsxs)(o.p,{children:["Serverpod makes deploying your server to Cloud Engine easy using Github, Terraform, and Docker containers. Terraform will set up and manage your infrastructure while you use Github to build your Docker container and manage versions and deployments. Creating your project using ",(0,n.jsx)(o.code,{children:"serverpod create"})," will automatically generate your deployment scripts. The default setup creates a minimal configuration, but you can easily modify the configuration to suit your needs."]}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsx)(o.p,{children:"Using Serverpod's GCP deployment may incur costs to your GCP account. Serverpod's scripts are provided as-is, and we take no responsibility for any unexpected charges for using them."})}),"\n",(0,n.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(o.p,{children:"To use the deployment scripts, you will need the following:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"A paid Google Cloud Platform account."}),"\n",(0,n.jsxs)(o.li,{children:["Terraform ",(0,n.jsx)(o.a,{href:"https://developer.hashicorp.com/terraform/tutorials/gcp-get-started/install-cli",children:"Install Terraform"})]}),"\n",(0,n.jsx)(o.li,{children:"Your Serverpod project version controlled on Github."}),"\n",(0,n.jsxs)(o.li,{children:["A registered custom domain name (e.g., examplepod.com), or register one through ",(0,n.jsx)(o.em,{children:"Cloud Domains"})," in the GCP console."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["If you haven't used Terraform before, it's a great idea to go through their tutorial for GCP, as it will give you a basic understanding of how everything fits together. ",(0,n.jsx)(o.a,{href:"https://developer.hashicorp.com/terraform/tutorials/gcp-get-started",children:"Get started with Terraform and GCP"})]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"The top directory created by Serverpod must be the root directory of your Git repository. Otherwise, the deployment scripts won't work correctly."})}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsx)(o.p,{children:"Registering your domain through Cloud Domains in the GCP console allows you to create a hosted zone simultaneously. It also makes it easier to verify your domain, and you can skip a few of the steps below. If you use Cloud Domains, register the domain after the step where you create your service account."})}),"\n",(0,n.jsx)(o.h2,{id:"what-will-be-deployed",children:"What will be deployed?"}),"\n",(0,n.jsx)(o.p,{children:"The deployment scripts will set up everything you need to run your Serverpod, including an autoscaling cluster of servers, a load balancer, a Postgres database, Redis (optional), Cloud Storage buckets for file uploads, Artifact Registry for your Docker container, a private network, DNS records, and SSL certificates. Some of the components are optional, and you will need to opt in. You can also create a second server cluster for a staging environment. Staging servers allow you to test your code before you deploy it to the production servers."}),"\n",(0,n.jsx)(o.p,{children:"You deploy your configuration with a domain name; the scripts will set up subdomains that provide access to different functions of your deployment:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"api.examplepod.com"}),": This is the entry point for your Serverpod's API server."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"app.examplepod.com"}),": The Serverpod web server. If you prefer to host it on your top domain and use ",(0,n.jsx)(o.em,{children:"www"})," as a redirect, you can change this in the main Terraform configuration file."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"insights.examplepod.com"}),": Provides an access point to Serverpod Insights, Serverpod's companion app."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"database.examplepod.com"}),": This is how you access your database from outside the server."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"storage.examplepod.com"}),": Access to public storage used by Serverpod."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"create-a-new-gcp-project-with-a-service-account",children:"Create a new GCP project with a service account"}),"\n",(0,n.jsxs)(o.p,{children:["Your deployment will live in a new GCP project that you create. Sign in to your ",(0,n.jsx)(o.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"}),", click the project selector and then the ",(0,n.jsx)(o.em,{children:"New Project"})," button. Enter the name of your new project and take note of the ",(0,n.jsx)(o.em,{children:"Project ID"}),"; you will need it when setting up your deployment scripts."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Create GCP Project",src:r(11394).Z+"",width:"560",height:"370"})}),"\n",(0,n.jsx)(o.h3,{id:"create-service-account",children:"Create service account"}),"\n",(0,n.jsx)(o.p,{children:"Next, you must create a service account allowing Terraform to access your account and set up the infrastructure for your Serverpod."}),"\n",(0,n.jsxs)(o.p,{children:["Select your newly created project if it isn't already selected. Then, navigate to ",(0,n.jsx)(o.em,{children:"IAM & Admin"})," > ",(0,n.jsx)(o.em,{children:"Service Accounts"}),". Click on the ",(0,n.jsx)(o.em,{children:"Create Service Account"})," button."]}),"\n",(0,n.jsxs)(o.p,{children:["Enter a name for your service account and take note of the email address associated with it. Click ",(0,n.jsx)(o.em,{children:"Create and Continue"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Next, you will need to add two roles to your service account. ",(0,n.jsx)(o.em,{children:"Basic"})," > ",(0,n.jsx)(o.em,{children:"Editor"})," and ",(0,n.jsx)(o.em,{children:"Service Networking"})," > ",(0,n.jsx)(o.em,{children:"Service Networking Admin"}),". These permissions will give Terraform the access it needs to create your infrastructure. When you've added the permissions, click ",(0,n.jsx)(o.em,{children:"Continue"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Assign roles to the service account",src:r(98315).Z+"",width:"576",height:"667"})}),"\n",(0,n.jsxs)(o.p,{children:["Finally, click ",(0,n.jsx)(o.em,{children:"Done"})," to finalize the service account creation."]}),"\n",(0,n.jsx)(o.h3,{id:"download-service-account-keys",children:"Download service account keys"}),"\n",(0,n.jsxs)(o.p,{children:["To be able to use your service account with Terraform, you will need to create a set of keys. Click on your newly created service account, then select the ",(0,n.jsx)(o.em,{children:"Keys"})," tab. Click ",(0,n.jsx)(o.em,{children:"Add Key"})," > ",(0,n.jsx)(o.em,{children:"Create a New Key"}),". Select ",(0,n.jsx)(o.em,{children:"JSON"})," as the key type and click ",(0,n.jsx)(o.em,{children:"Create"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Create private keys",src:r(66423).Z+"",width:"610",height:"411"})}),"\n",(0,n.jsxs)(o.p,{children:["The key is now downloaded to your computer. Rename the key to ",(0,n.jsx)(o.code,{children:"credentials.json"})," and place it in your Serverpod's server directory under ",(0,n.jsx)(o.code,{children:"deploy/gcp/terraform_gce"}),". E.g., the whole path would be something like ",(0,n.jsx)(o.code,{children:"myproject_server/deploy/gcp/terraform_gce/credentials.json"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"enabling-apis",children:"Enabling APIs"}),"\n",(0,n.jsxs)(o.p,{children:["To deploy your serverpod, you must enable a set of APIs on Google Cloud. You can find which APIs are enabled or enable new ones by going to ",(0,n.jsx)(o.em,{children:"APIs & Services"})," > ",(0,n.jsx)(o.em,{children:"Enabled APIs & Services"}),". These are the APIs that you should enable:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Artifact Registry API  (artifactregistry.googleapis.com)"}),"\n",(0,n.jsx)(o.li,{children:"Certificate Manager API (certificatemanager.googleapis.com)"}),"\n",(0,n.jsx)(o.li,{children:"Cloud DNS API (dns.googleapis.com)"}),"\n",(0,n.jsx)(o.li,{children:"Cloud Resource Manager API (cloudresourcemanager.googleapis.com)"}),"\n",(0,n.jsx)(o.li,{children:"Cloud SQL Admin API (sqladmin.googleapis.com)"}),"\n",(0,n.jsx)(o.li,{children:"Compute Engine API (compute.googleapis.com)"}),"\n",(0,n.jsx)(o.li,{children:"Service Networking API (servicenetworking.googleapis.com)"}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"set-up-your-domain-name",children:"Set up your domain name"}),"\n",(0,n.jsx)(o.p,{children:"The Terraform script automatically handles your subdomains, but you must manually set up your domain zone in Google Cloud Console. This setup is also helpful if you want to add other things to your domain, such as email, or associate your domain with a website not hosted by Serverpod."}),"\n",(0,n.jsx)(o.h3,{id:"register-your-domain",children:"Register your domain"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.strong,{children:["If you already have a domain that you want to use, you should skip this step and continue at: ",(0,n.jsx)(o.a,{href:"#create-a-dns-zone",children:"Create a DNS zone"})]})}),"\n",(0,n.jsxs)(o.p,{children:["Start by activating the required APIs for managing your domain. First, navigate to ",(0,n.jsx)(o.em,{children:"Network services"})," > ",(0,n.jsx)(o.em,{children:"Cloud DNS"})," and activate the service. Then navigate to ",(0,n.jsx)(o.em,{children:"Network services"})," > ",(0,n.jsx)(o.em,{children:"Cloud Domains"})," and activate it."]}),"\n",(0,n.jsxs)(o.p,{children:["Once ",(0,n.jsx)(o.em,{children:"Cloud Domains"})," is active, click the ",(0,n.jsx)(o.em,{children:"Register Domain"})," button. Search for the domain name you want to use and add it to your cart."]}),"\n",(0,n.jsx)(o.p,{children:"In the DNS configuration, let Google's DNS servers manage the domain and connect it to a new DNS zone. Follow the steps to verify your email with Google Domains if needed."}),"\n",(0,n.jsx)(o.p,{children:"Your domain will automatically be verified with Google, but you must add your service account email as verified by Google's Webmaster Central. This step is required to be able to create SSL certificates for your domain."}),"\n",(0,n.jsxs)(o.p,{children:["Go to the Google Webmaster Central: ",(0,n.jsx)(o.a,{href:"https://www.google.com/webmasters/verification",children:"https://www.google.com/webmasters/verification"})]}),"\n",(0,n.jsxs)(o.p,{children:["Select your newly registered domain. Then, click ",(0,n.jsx)(o.em,{children:"Add an owner"}),". Enter the email from the service account that you created earlier."]}),"\n",(0,n.jsxs)(o.p,{children:["Now, skip ahead to ",(0,n.jsx)(o.a,{href:"#deploy-your-serverpod-code",children:"Deploy your Serverpod code"})]}),"\n",(0,n.jsx)(o.h3,{id:"create-a-dns-zone",children:"Create a DNS zone"}),"\n",(0,n.jsxs)(o.p,{children:["Go to ",(0,n.jsx)(o.em,{children:"Network Services"})," > ",(0,n.jsx)(o.em,{children:"Cloud DNS"}),", then click ",(0,n.jsx)(o.em,{children:"Create Zone"}),". Create a public zone for your domain name. Take note of the name you assign to the domain name zone, you will need it when you configure the Terraform scripts."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Create DNS zone",src:r(71984).Z+"",width:"557",height:"702"})}),"\n",(0,n.jsxs)(o.p,{children:["To make the domain accessible, you must configure your registrar so that it points your domain to Google's domain name servers. Click the ",(0,n.jsx)(o.em,{children:"NS"})," entry to reveal the domain name servers to which you should point your domain."]}),"\n",(0,n.jsx)(o.p,{children:"Now, head over to your domain name registrar and point the domain to Google's domain name servers. The domain name servers can take a while to update (worst case, up to a day, but it is usually much faster)."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Configure domain registrar",src:r(66967).Z+"",width:"546",height:"211"})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Depending on your domain name registrar, the process for setting up your domain name servers may look slightly different. Also, note that the Google servers may have different names than those shown in the screenshot."})}),"\n",(0,n.jsxs)(o.p,{children:["You can test that the domain points to the correct name servers by running ",(0,n.jsx)(o.code,{children:"dig"})," on the command line. It will output the domain name servers."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ dig +short NS examplepod.com\n"})}),"\n",(0,n.jsx)(o.p,{children:"Should yield an output similar to this:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"ns-cloud-b4.googledomains.com.\nns-cloud-b1.googledomains.com.\nns-cloud-b2.googledomains.com.\nns-cloud-b3.googledomains.com.\n"})}),"\n",(0,n.jsx)(o.h3,{id:"verify-your-domain",children:"Verify your domain"}),"\n",(0,n.jsx)(o.p,{children:"Once your domain name zone is set up and has bubbled through the system, you must verify the domain with Google's Webmaster Central. This step is required to be able to create SSL certificates for your domain."}),"\n",(0,n.jsxs)(o.p,{children:["Go to the Google Webmaster Central:\n",(0,n.jsx)(o.a,{href:"https://www.google.com/webmasters/verification",children:"https://www.google.com/webmasters/verification"})]}),"\n",(0,n.jsxs)(o.p,{children:["Click on ",(0,n.jsx)(o.em,{children:"Add a Property"}),", enter your domain name and press ",(0,n.jsx)(o.em,{children:"Continue"}),". Now click the ",(0,n.jsx)(o.em,{children:"Alternate methods"})," tab and select ",(0,n.jsx)(o.em,{children:"Domain name provider"}),". In the list that pops up, select ",(0,n.jsx)(o.em,{children:"Google Domains"}),". A dialog showing the steps required to verify your domain will pop up. From the dialog, copy the highlighted TXT record."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Verify domain in Webmaster Central",src:r(65253).Z+"",width:"737",height:"620"})}),"\n",(0,n.jsxs)(o.p,{children:["Now, open your Google Cloud Console and navigate to ",(0,n.jsx)(o.em,{children:"Network Services"})," > ",(0,n.jsx)(o.em,{children:"Cloud DNS"}),". Select the DNS zone you created earlier, then click ",(0,n.jsx)(o.em,{children:"Add Standard"})," to create a new record set. Set the ",(0,n.jsx)(o.em,{children:"Resource record type"})," to ",(0,n.jsx)(o.em,{children:"TXT"}),", then paste the code from the Webmaster Central in the ",(0,n.jsx)(o.em,{children:"TXT data"})," field and create the record set. In the Webmaster Central, you can now finish the verification by clicking ",(0,n.jsx)(o.em,{children:"Verify"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Add DNS record",src:r(17106).Z+"",width:"559",height:"380"})}),"\n",(0,n.jsxs)(o.p,{children:["Finally, click on ",(0,n.jsx)(o.em,{children:"Add additional owners"})," and add the email from the service account you created earlier. Doing this will allow Terraform to make any required changes to your SSL certificates."]}),"\n",(0,n.jsx)(o.h2,{id:"deploy-your-serverpod-code",children:"Deploy your Serverpod code"}),"\n",(0,n.jsx)(o.p,{children:"Before creating our infrastructure, we must compile a Docker container with our Serverpod and deploy it to Google Cloud's Artifact Registry. The Docker container is compiled on Github and then pushed to the Artifact Registry using a Github action."}),"\n",(0,n.jsx)(o.h3,{id:"create-artifact-registry-repositories",children:"Create Artifact Registry repositories"}),"\n",(0,n.jsxs)(o.p,{children:["Open up the Google Cloud Console and navigate to ",(0,n.jsx)(o.em,{children:"Artifact Registry"})," > ",(0,n.jsx)(o.em,{children:"Repositories"}),". Enable the API if needed. Click ",(0,n.jsx)(o.em,{children:"Create Repository"}),". Set the ",(0,n.jsx)(o.em,{children:"Name"})," to ",(0,n.jsx)(o.code,{children:"serverpod-production-container"}),", ",(0,n.jsx)(o.em,{children:"Format"})," to ",(0,n.jsx)(o.em,{children:"Docker"}),", and ",(0,n.jsx)(o.em,{children:"Mode"})," to ",(0,n.jsx)(o.em,{children:"Standard"}),". Select a ",(0,n.jsx)(o.em,{children:"Region"})," for your container."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Create repository in Artifact Registry",src:r(31386).Z+"",width:"562",height:"933"})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["The region you pick for your Artifact Registry repository must match the region you later choose for your project. The default is ",(0,n.jsx)(o.code,{children:"us-central1"}),"."]})}),"\n",(0,n.jsxs)(o.p,{children:["Repeat the process and create a second container named ",(0,n.jsx)(o.code,{children:"serverpod-staging-container"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"configure-github",children:"Configure Github"}),"\n",(0,n.jsxs)(o.p,{children:["Now that we have our Artifact Registry repositories, we can push code to it. Head to your Github repository for your project. Navigate to ",(0,n.jsx)(o.em,{children:"Settings"})," > ",(0,n.jsx)(o.em,{children:"Secrets and variables"})," > ",(0,n.jsx)(o.em,{children:"Actions"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Click ",(0,n.jsx)(o.em,{children:"New repository secret"}),". For the ",(0,n.jsx)(o.em,{children:"Name"})," enter ",(0,n.jsx)(o.code,{children:"GOOGLE_CREDENTIALS"}),". For the ",(0,n.jsx)(o.em,{children:"Secret"}),", copy the contents of the ",(0,n.jsx)(o.code,{children:"gcp/terraform/credentials.json"})," file and paste its contents into the text field."]}),"\n",(0,n.jsxs)(o.p,{children:["Click ",(0,n.jsx)(o.em,{children:"New repository secret"})," again and enter ",(0,n.jsx)(o.code,{children:"SERVERPOD_PASSWORDS"})," for the ",(0,n.jsx)(o.em,{children:"Name"}),". Copy the contents of the ",(0,n.jsx)(o.code,{children:"config/passwords.yaml"})," file and paste it into the ",(0,n.jsx)(o.em,{children:"Secret"})," text field."]}),"\n",(0,n.jsxs)(o.p,{children:["When you are done, ",(0,n.jsx)(o.em,{children:"Repository secrets"})," should look like this:"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Add DNS record",src:r(8793).Z+"",width:"808",height:"218"})}),"\n",(0,n.jsxs)(o.p,{children:["Finally, we must configure the Github action that compiles our Docker container. It's located in ",(0,n.jsx)(o.code,{children:".github/workflows/deployment-gcp.yml"}),". Open it in your favorite editor and update the values under ",(0,n.jsx)(o.em,{children:"PROJECT"}),", ",(0,n.jsx)(o.em,{children:"REGION"}),", and ",(0,n.jsx)(o.em,{children:"ZONE"})," with your ",(0,n.jsx)(o.em,{children:"Project ID"})," and the zone and region where you plan to deploy your server."]}),"\n",(0,n.jsx)(o.p,{children:"Push your changes to Github, and you are ready to deploy your Docker container."}),"\n",(0,n.jsx)(o.h3,{id:"deploy-your-docker-container",children:"Deploy your Docker container"}),"\n",(0,n.jsxs)(o.p,{children:["Open your project on Github and navigate to ",(0,n.jsx)(o.em,{children:"Actions"}),". On the right-hand side, click on the ",(0,n.jsx)(o.em,{children:"Deploy to GCP"})," item. The action will open up, and you can run it. Click on ",(0,n.jsx)(o.em,{children:"Run workflow"}),", select the branch where you have pushed your code, set the ",(0,n.jsx)(o.em,{children:"Target"})," to ",(0,n.jsx)(o.em,{children:"production"}),", and run the workflow."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Run Github workflow",src:r(73289).Z+"",width:"627",height:"453"})}),"\n",(0,n.jsx)(o.p,{children:"It will take a few moments for the workflow to show up and another minute or two to complete. When completed, it should have a green tick mark next to it."}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["In the future, just run the Github action whenever you want to release a new version of your server. You can also trigger the action by pushing code to the ",(0,n.jsx)(o.code,{children:"deployment-gcp-production"})," or ",(0,n.jsx)(o.code,{children:"deployment-gcp-staging"})," branches."]})}),"\n",(0,n.jsx)(o.h2,{id:"create-your-infrastructure",children:"Create your infrastructure"}),"\n",(0,n.jsx)(o.p,{children:"You now have everything you need to start creating your infrastructure. Start by configuring your Terraform scripts, then apply the configuration."}),"\n",(0,n.jsx)(o.h3,{id:"configure-terraform",children:"Configure Terraform"}),"\n",(0,n.jsxs)(o.p,{children:["You can find the configuration file for your Terraform project in your server's ",(0,n.jsx)(o.code,{children:"deploy/gcp/terraform_gce/config.auto.tfvars"})," file. It is pretty self-explanatory; you only need to enter your ",(0,n.jsx)(o.em,{children:"Project ID"})," and the ",(0,n.jsx)(o.em,{children:"Service account email"}),", the name of your ",(0,n.jsx)(o.em,{children:"DNS zone"}),", and the ",(0,n.jsx)(o.em,{children:"domain name"})," you are deploying to. You got the details when completing the steps above, or you can find them in the Google Cloud Console."]}),"\n",(0,n.jsxs)(o.p,{children:["If you want to do more detailed configurations, you can do so in the ",(0,n.jsx)(o.code,{children:"main.tf"})," file. The ",(0,n.jsx)(o.code,{children:"main.tf"})," file refers to the ",(0,n.jsx)(o.code,{children:"google_cloud_serverpod_gce"})," module, which handles most of the infrastructure. It contains some comments that explain how to use it, but you can also find the complete documentation ",(0,n.jsx)(o.a,{href:"https://github.com/serverpod/google_cloud_serverpod_gce",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"configure-serverpod",children:"Configure Serverpod"}),"\n",(0,n.jsxs)(o.p,{children:["Serverpod uses different configuration files depending on whether you run your server locally, in staging, or in production. You find the configuration files in the server's ",(0,n.jsx)(o.code,{children:"config"})," directory. You will need to edit the ",(0,n.jsx)(o.code,{children:"config/production.yaml"})," file to match your setup. Typically, the only thing you need to change is the name of your domain."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["If you are deploying a staging server in addition to your production server, you must edit the ",(0,n.jsx)(o.code,{children:"config/staging.yaml"})," file too."]})}),"\n",(0,n.jsx)(o.h3,{id:"deploy-your-infrastructure",children:"Deploy your infrastructure"}),"\n",(0,n.jsxs)(o.p,{children:["Once you have configured Terraform and your Serverpod, you are ready to deploy your infrastructure. Make sure that you have ",(0,n.jsx)(o.code,{children:"cd"})," into your ",(0,n.jsx)(o.code,{children:"deploy/gcp/terraform_gce"})," directory. Now run:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ terraform init\n"})}),"\n",(0,n.jsx)(o.p,{children:"This will download the Serverpod module and initialize your Terraform configuration. Now, deploy your infrastructure by running:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ terraform apply\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Terraform will ask you for the password to your production and staging database. You will find the passwords in your ",(0,n.jsx)(o.code,{children:"config/passwords.yaml"})," file. If you are not deploying a staging server, you can leave the staging database password blank."]}),"\n",(0,n.jsxs)(o.p,{children:["Answer ",(0,n.jsx)(o.code,{children:"yes"})," when Terraform asks you if you are ready to perform the changes. Deploying the complete infrastructure will take around 15 minutes, making this an excellent coffee break time."]}),"\n",(0,n.jsx)(o.h2,{id:"create-database-tables",children:"Create database tables"}),"\n",(0,n.jsxs)(o.p,{children:["As a final step in your GCP deployment, you must create your database tables. Terraform has created a database with a public IP number that you can access from ",(0,n.jsx)(o.code,{children:"database.<your-domain>.com"}),". However, access is limited to connections from specific IP addresses for security reasons."]}),"\n",(0,n.jsxs)(o.p,{children:["Open the Google Cloud Console, navigate to ",(0,n.jsx)(o.em,{children:"SQL"}),", and click on the ",(0,n.jsx)(o.code,{children:"serverpod-production-database"})," instance. Click ",(0,n.jsx)(o.em,{children:"Connections"})," > ",(0,n.jsx)(o.em,{children:"Networking"}),". Under ",(0,n.jsx)(o.em,{children:"Public IP"})," click ",(0,n.jsx)(o.em,{children:"Add Network"}),". Enter the name of the place you are connecting from, e.g. ",(0,n.jsx)(o.em,{children:"Office"})," or ",(0,n.jsx)(o.em,{children:"Home"}),", then enter your public IP number in the ",(0,n.jsx)(o.em,{children:"Network"})," field."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Add network to database",src:r(89609).Z+"",width:"562",height:"402"})}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["If you are unsure what your public IP number is, Google ",(0,n.jsx)(o.code,{children:"what is my IP"}),", and Google will tell you."]})}),"\n",(0,n.jsxs)(o.p,{children:["Now, you can connect to your database. Use your favorite database managing tool (we use ",(0,n.jsx)(o.a,{href:"https://eggerapps.at/postico2/",children:"Postico"}),"). To connect, use the password from the ",(0,n.jsx)(o.code,{children:"config/passwords.yaml"})," file and the public database address (",(0,n.jsx)(o.code,{children:"database.<your-domain>.com"}),"). For ",(0,n.jsx)(o.em,{children:"database"})," enter ",(0,n.jsx)(o.code,{children:"serverpod"})," and ",(0,n.jsx)(o.em,{children:"user"})," should be set to ",(0,n.jsx)(o.code,{children:"postgres"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Connect to database",src:r(5158).Z+"",width:"438",height:"464"})}),"\n",(0,n.jsxs)(o.p,{children:["Once connected, run the database queries found in ",(0,n.jsx)(o.code,{children:"generated/tables-serverpod.pgsql"})," and in ",(0,n.jsx)(o.code,{children:"generated/tables.pgsql"}),". When you have added the tables for the database, Serverpod should be able to start. However, it could take an hour before the correct SSL certificates are created and validated."]}),"\n",(0,n.jsx)(o.h2,{id:"deploying-new-versions",children:"Deploying new versions"}),"\n",(0,n.jsx)(o.p,{children:"Once your infrastructure is set up, deploying new versions of your server code is easy. Push your updated code to Github and run the deployment action. Doing this will compile your code and upload it to the repository in Artifact Registry."}),"\n",(0,n.jsxs)(o.p,{children:["Once your code is uploaded to the Artifact Registry you can restart the servers in your auto scaling group by opening the Google Cloud console and navigating to ",(0,n.jsx)(o.em,{children:"Compute Engine"})," > ",(0,n.jsx)(o.em,{children:"Instance Groups"}),". Click on the ",(0,n.jsx)(o.em,{children:"serverpod-production-group"}),", then ",(0,n.jsx)(o.em,{children:"Restart/Replace VMs"}),"."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["You can also set up your deployment script on Github to automatically restart the servers when new code is deployed. To do this, uncomment the last section of the script in ",(0,n.jsx)(o.code,{children:".github/workflows/deployment-gcp.yml"}),", push the change to Github, and run the action."]})}),"\n",(0,n.jsx)(o.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(o.p,{children:"Deploying your infrastructure is somewhat involved, and you can get stuck along the way. These are a few tips on debugging your issues:"}),"\n",(0,n.jsx)(o.h3,{id:"access-the-instance-logs",children:"Access the instance logs"}),"\n",(0,n.jsxs)(o.p,{children:["You can find the logs from your running instances by navigating to ",(0,n.jsx)(o.em,{children:"Compute Engine"})," > ",(0,n.jsx)(o.em,{children:"VM instances"}),". Click on one of the instances, then click on ",(0,n.jsx)(o.em,{children:"Logging"}),". It will list the output from starting the instance and logs outputted by the Docker container."]}),"\n",(0,n.jsx)(o.h3,{id:"log-into-the-instance",children:"Log into the instance"}),"\n",(0,n.jsxs)(o.p,{children:["You can log into your running instances by clicking the small ",(0,n.jsx)(o.em,{children:"SSH"})," button next to the instance row. For this to work, make sure you have set ",(0,n.jsx)(o.code,{children:"enable_ssh"})," to ",(0,n.jsx)(o.code,{children:"true"})," in your Terraform module (this is the default)."]}),"\n",(0,n.jsxs)(o.p,{children:["Once logged in, you can check that your Docker container is up by running ",(0,n.jsx)(o.code,{children:"docker ps"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"some-things-take-time",children:"Some things take time"}),"\n",(0,n.jsx)(o.p,{children:"Some tasks described above can take time to bubble through the system. This is particularly true for working with DNS names and certificates. Sometimes they can take hours or up to a day to update."}),"\n",(0,n.jsx)(o.h3,{id:"if-you-get-stuck",children:"If you get stuck"}),"\n",(0,n.jsxs)(o.p,{children:["You can always find help in our ",(0,n.jsx)(o.a,{href:"https://github.com/serverpod/serverpod/discussions",children:"support forum"})," on Github."]})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11394:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/0-create-project-8ffb3fac5b8ca642f58aab2258a9bbdd.jpg"},98315:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/1-assign-roles-3127957a46184bad6a5e2d38f6d458c0.jpg"},89609:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/10-add-network-597a480b4780f2781b84cc6f4bb4dae6.jpg"},5158:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/11-connect-database-c863d169b71bee97b0968b57680ad846.jpg"},66423:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/2-private-key-3ee06ba2b0f99e42a91388d62f71ae2f.jpg"},71984:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/3-dns-zone-b2b3cbaf4ef028b26df791ae4ee486ea.jpg"},66967:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/4-dns-forward-5a0d4b8dfd116ab0ba2a2a177cdd140e.jpg"},65253:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/5-domain-verification-540eb62658d2289a889f266ae9663065.jpg"},17106:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/6-record-set-9a2be3ebe9c6489577828d059abd8671.jpg"},31386:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/7-artifact-repository-406b0863aa48aa3c751b1817e24eed75.jpg"},8793:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/8-secrets-d12bd9a1e11015f93c45a5213835f7b2.jpg"},73289:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/9-run-workflow-8d52b13c49684388600682e538b0341a.jpg"},11151:(e,o,r)=>{r.d(o,{Z:()=>a,a:()=>s});var n=r(67294);const t={},i=n.createContext(t);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);