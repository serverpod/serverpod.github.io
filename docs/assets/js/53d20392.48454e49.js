"use strict";(self.webpackChunkserverpod_docs=self.webpackChunkserverpod_docs||[]).push([[46643],{52481:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts/configuration","title":"Configurations","description":"Serverpod can be configured in a few different ways. The minimum required settings to provide is the configuration for the API server. If no settings are provided at all, the default settings for the API server are used.","source":"@site/versioned_docs/version-2.2.0/06-concepts/07-configuration.md","sourceDirName":"06-concepts","slug":"/concepts/configuration","permalink":"/concepts/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/serverpod/serverpod_docs/tree/main/versioned_docs/version-2.2.0/06-concepts/07-configuration.md","tags":[],"version":"2.2.0","sidebarPosition":7,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Migrations","permalink":"/concepts/database/migrations"},"next":{"title":"Caching","permalink":"/concepts/caching"}}');var t=s(74848),i=s(28453);const d={},c="Configurations",o={},l=[{value:"Configuration options",id:"configuration-options",level:2},{value:"Config file example",id:"config-file-example",level:3},{value:"Passwords file example",id:"passwords-file-example",level:3},{value:"Dart config object example",id:"dart-config-object-example",level:3},{value:"Default",id:"default",level:3}];function h(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"configurations",children:"Configurations"})}),"\n",(0,t.jsx)(r.p,{children:"Serverpod can be configured in a few different ways. The minimum required settings to provide is the configuration for the API server. If no settings are provided at all, the default settings for the API server are used."}),"\n",(0,t.jsx)(r.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,t.jsx)(r.p,{children:"There are three different ways to configure Serverpod: with environment variables, via yaml config files, or by supplying the dart configuration object to the Serverpod constructor. The environment variables take precedence over the yaml configurations but both can be used simultaneously. The dart configuration object will override any environment variable or config file. The tables show all available configuration options provided in the Serverpod core library."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Environment variable"}),(0,t.jsx)(r.th,{children:"Config file"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_API_SERVER_PORT"}),(0,t.jsx)(r.td,{children:"apiServer.port"}),(0,t.jsx)(r.td,{children:"8080"}),(0,t.jsx)(r.td,{children:"The port number for the API server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_API_SERVER_PUBLIC_HOST"}),(0,t.jsx)(r.td,{children:"apiServer.publicHost"}),(0,t.jsx)(r.td,{children:"localhost"}),(0,t.jsx)(r.td,{children:"The public host address of the API server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_API_SERVER_PUBLIC_PORT"}),(0,t.jsx)(r.td,{children:"apiServer.publicPort"}),(0,t.jsx)(r.td,{children:"8080"}),(0,t.jsx)(r.td,{children:"The public port number for the API server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_API_SERVER_PUBLIC_SCHEME"}),(0,t.jsx)(r.td,{children:"apiServer.publicScheme"}),(0,t.jsx)(r.td,{children:"http"}),(0,t.jsx)(r.td,{children:"The public scheme (http/https) for the API server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_INSIGHTS_SERVER_PORT"}),(0,t.jsx)(r.td,{children:"insightsServer.port"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The port number for the Insights server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_INSIGHTS_SERVER_PUBLIC_HOST"}),(0,t.jsx)(r.td,{children:"insightsServer.publicHost"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The public host address of the Insights server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_INSIGHTS_SERVER_PUBLIC_PORT"}),(0,t.jsx)(r.td,{children:"insightsServer.publicPort"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The public port number for the Insights server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_INSIGHTS_SERVER_PUBLIC_SCHEME"}),(0,t.jsx)(r.td,{children:"insightsServer.publicScheme"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The public scheme (http/https) for the Insights server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_WEB_SERVER_PORT"}),(0,t.jsx)(r.td,{children:"webServer.port"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The port number for the Web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_WEB_SERVER_PUBLIC_HOST"}),(0,t.jsx)(r.td,{children:"webServer.publicHost"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The public host address of the Web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_WEB_SERVER_PUBLIC_PORT"}),(0,t.jsx)(r.td,{children:"webServer.publicPort"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The public port number for the Web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_WEB_SERVER_PUBLIC_SCHEME"}),(0,t.jsx)(r.td,{children:"webServer.publicScheme"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The public scheme (http/https) for the Web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_DATABASE_HOST"}),(0,t.jsx)(r.td,{children:"database.host"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The host address of the database"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_DATABASE_PORT"}),(0,t.jsx)(r.td,{children:"database.port"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The port number for the database connection"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_DATABASE_NAME"}),(0,t.jsx)(r.td,{children:"database.name"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The name of the database"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_DATABASE_USER"}),(0,t.jsx)(r.td,{children:"database.user"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The user name for database authentication"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_DATABASE_REQUIRE_SSL"}),(0,t.jsx)(r.td,{children:"database.requireSsl"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"Indicates if SSL is required for the database"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_DATABASE_IS_UNIX_SOCKET"}),(0,t.jsx)(r.td,{children:"database.isUnixSocket"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"Specifies if the database connection is a Unix socket"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_REDIS_HOST"}),(0,t.jsx)(r.td,{children:"redis.host"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The host address of the Redis server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_REDIS_PORT"}),(0,t.jsx)(r.td,{children:"redis.port"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The port number for the Redis server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_REDIS_USER"}),(0,t.jsx)(r.td,{children:"redis.user"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The user name for Redis authentication"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_REDIS_ENABLED"}),(0,t.jsx)(r.td,{children:"redis.enabled"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"Indicates if Redis is enabled"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_MAX_REQUEST_SIZE"}),(0,t.jsx)(r.td,{children:"maxRequestSize"}),(0,t.jsx)(r.td,{children:"524288"}),(0,t.jsx)(r.td,{children:"The maximum size of requests allowed in bytes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_SESSION_PERSISTENT_LOG_ENABLED"}),(0,t.jsx)(r.td,{children:"sessionLogs.persistentEnabled"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsxs)(r.td,{children:["Enables or disables logging session data to the database. Defaults to ",(0,t.jsx)(r.code,{children:"true"})," if a database is configured, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_SESSION_CONSOLE_LOG_ENABLED"}),(0,t.jsx)(r.td,{children:"sessionLogs.consoleEnabled"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsxs)(r.td,{children:["Enables or disables logging session data to the console. Defaults to ",(0,t.jsx)(r.code,{children:"true"})," if no database is configured, otherwise ",(0,t.jsx)(r.code,{children:"false"}),"."]})]})]})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Environment variable"}),(0,t.jsx)(r.th,{children:"Passwords file"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_DATABASE_PASSWORD"}),(0,t.jsx)(r.td,{children:"database"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The password for the database"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_SERVICE_SECRET"}),(0,t.jsx)(r.td,{children:"serviceSecret"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The token used to connect with insights must be at least 20 chars"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SERVERPOD_REDIS_PASSWORD"}),(0,t.jsx)(r.td,{children:"redis"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"The password for the Redis server"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"config-file-example",children:"Config file example"}),"\n",(0,t.jsxs)(r.p,{children:["The config file should be named after the run mode you start the server in and it needs to be placed inside the ",(0,t.jsx)(r.code,{children:"config"})," directory in the root of the server project. As an example, you have the ",(0,t.jsx)(r.code,{children:"config/development.yaml"})," that will be used when running in the ",(0,t.jsx)(r.code,{children:"development"})," run mode."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"apiServer:\n  port: 8080\n  publicHost: localhost\n  publicPort: 8080\n  publicScheme: http\n\ninsightsServer:\n  port: 8081\n  publicHost: localhost\n  publicPort: 8081\n  publicScheme: http\n\nwebServer:\n  port: 8082\n  publicHost: localhost\n  publicPort: 8082\n  publicScheme: http\n\ndatabase:\n  host: localhost\n  port: 8090\n  name: database_name\n  user: postgres\n\nredis:\n  enabled: false\n  host: localhost\n  port: 8091\n\nmaxRequestSize: 524288\n\nsessionLogs:\n  persistentEnabled: true\n  consoleEnabled: true\n"})}),"\n",(0,t.jsx)(r.h3,{id:"passwords-file-example",children:"Passwords file example"}),"\n",(0,t.jsxs)(r.p,{children:["The password file contains the secrets used by the server to connect to different services but you can also supply your secrets if you want. This file is structured with a common ",(0,t.jsx)(r.code,{children:"shared"})," section, any secret put here will be used in all run modes. The other sections are the names of the run modes followed by respective key/value pairs."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"shared:\n  myCustomSharedSecret: 'secret_key'\n\ndevelopment:\n  database: 'development_password'\n  redis: 'development_password'\n  serviceSecret: 'development_service_secret'\n\nproduction:\n  database: 'production_password'\n  redis: 'production_password'\n  serviceSecret: 'production_service_secret'\n"})}),"\n",(0,t.jsx)(r.h3,{id:"dart-config-object-example",children:"Dart config object example"}),"\n",(0,t.jsxs)(r.p,{children:["To configure Serverpod in Dart you simply pass an instance of the ",(0,t.jsx)(r.code,{children:"ServerpodConfig"})," class to the ",(0,t.jsx)(r.code,{children:"Serverpod"})," constructor. This config will override any environment variables or config files present. The ",(0,t.jsx)(r.code,{children:"Serverpod"})," constructor is normally used inside the ",(0,t.jsx)(r.code,{children:"run"})," function in your ",(0,t.jsx)(r.code,{children:"server.dart"})," file. At a minimum, the ",(0,t.jsx)(r.code,{children:"apiServer"})," has to be provided."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-dart",children:"Serverpod(\n  args,\n  Protocol(),\n  Endpoints(),\n  config: ServerpodConfig(\n    apiServer: ServerConfig(\n      port: 8080,\n      publicHost: 'localhost',\n      publicPort: 8080,\n      publicScheme: 'http',\n    ),\n    insightsServer: ServerConfig(\n      port: 8081,\n      publicHost: 'localhost',\n      publicPort: 8081,\n      publicScheme: 'http',\n    ),\n    webServer: ServerConfig(\n      port: 8082,\n      publicHost: 'localhost',\n      publicPort: 8082,\n      publicScheme: 'http',\n    ),\n  ),\n);\n"})}),"\n",(0,t.jsx)(r.h3,{id:"default",children:"Default"}),"\n",(0,t.jsx)(r.p,{children:"If no yaml config files exist, no environment variables are configured and no dart config file is supplied this default configuration will be used."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-dart",children:"ServerpodConfig(\n  apiServer: ServerConfig(\n    port: 8080,\n    publicHost: 'localhost',\n    publicPort: 8080,\n    publicScheme: 'http',\n  ),\n);\n"})})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>c});var n=s(96540);const t={},i=n.createContext(t);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);