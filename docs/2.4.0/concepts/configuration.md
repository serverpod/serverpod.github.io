# Configurations

https://docs.serverpod.dev/2.4.0/concepts/configuration

Serverpod can be configured in a few different ways. The minimum required settings to provide is the configuration for the API server. If no settings are provided at all, the default settings for the API server are used.

## Configuration options

There are three different ways to configure Serverpod: with environment variables, via yaml config files, or by supplying the dart configuration object to the Serverpod constructor. The environment variables take precedence over the yaml configurations but both can be used simultaneously. The dart configuration object will override any environment variable or config file. The tables show all available configuration options provided in the Serverpod core library.

| Environment variable                         | Config file                   | Default   | Description                                                                                                                  |
| -------------------------------------------- | ----------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| SERVERPOD\_API\_SERVER\_PORT                 | apiServer.port                | 8080      | The port number for the API server                                                                                           |
| SERVERPOD\_API\_SERVER\_PUBLIC\_HOST         | apiServer.publicHost          | localhost | The public host address of the API server                                                                                    |
| SERVERPOD\_API\_SERVER\_PUBLIC\_PORT         | apiServer.publicPort          | 8080      | The public port number for the API server                                                                                    |
| SERVERPOD\_API\_SERVER\_PUBLIC\_SCHEME       | apiServer.publicScheme        | http      | The public scheme (http/https) for the API server                                                                            |
| SERVERPOD\_INSIGHTS\_SERVER\_PORT            | insightsServer.port           | -         | The port number for the Insights server                                                                                      |
| SERVERPOD\_INSIGHTS\_SERVER\_PUBLIC\_HOST    | insightsServer.publicHost     | -         | The public host address of the Insights server                                                                               |
| SERVERPOD\_INSIGHTS\_SERVER\_PUBLIC\_PORT    | insightsServer.publicPort     | -         | The public port number for the Insights server                                                                               |
| SERVERPOD\_INSIGHTS\_SERVER\_PUBLIC\_SCHEME  | insightsServer.publicScheme   | -         | The public scheme (http/https) for the Insights server                                                                       |
| SERVERPOD\_WEB\_SERVER\_PORT                 | webServer.port                | -         | The port number for the Web server                                                                                           |
| SERVERPOD\_WEB\_SERVER\_PUBLIC\_HOST         | webServer.publicHost          | -         | The public host address of the Web server                                                                                    |
| SERVERPOD\_WEB\_SERVER\_PUBLIC\_PORT         | webServer.publicPort          | -         | The public port number for the Web server                                                                                    |
| SERVERPOD\_WEB\_SERVER\_PUBLIC\_SCHEME       | webServer.publicScheme        | -         | The public scheme (http/https) for the Web server                                                                            |
| SERVERPOD\_DATABASE\_HOST                    | database.host                 | -         | The host address of the database                                                                                             |
| SERVERPOD\_DATABASE\_PORT                    | database.port                 | -         | The port number for the database connection                                                                                  |
| SERVERPOD\_DATABASE\_NAME                    | database.name                 | -         | The name of the database                                                                                                     |
| SERVERPOD\_DATABASE\_USER                    | database.user                 | -         | The user name for database authentication                                                                                    |
| SERVERPOD\_DATABASE\_REQUIRE\_SSL            | database.requireSsl           | false     | Indicates if SSL is required for the database                                                                                |
| SERVERPOD\_DATABASE\_IS\_UNIX\_SOCKET        | database.isUnixSocket         | false     | Specifies if the database connection is a Unix socket                                                                        |
| SERVERPOD\_REDIS\_HOST                       | redis.host                    | -         | The host address of the Redis server                                                                                         |
| SERVERPOD\_REDIS\_PORT                       | redis.port                    | -         | The port number for the Redis server                                                                                         |
| SERVERPOD\_REDIS\_USER                       | redis.user                    | -         | The user name for Redis authentication                                                                                       |
| SERVERPOD\_REDIS\_ENABLED                    | redis.enabled                 | false     | Indicates if Redis is enabled                                                                                                |
| SERVERPOD\_MAX\_REQUEST\_SIZE                | maxRequestSize                | 524288    | The maximum size of requests allowed in bytes                                                                                |
| SERVERPOD\_SESSION\_PERSISTENT\_LOG\_ENABLED | sessionLogs.persistentEnabled | -         | Enables or disables logging session data to the database. Defaults to `true` if a database is configured, otherwise `false`. |
| SERVERPOD\_SESSION\_CONSOLE\_LOG\_ENABLED    | sessionLogs.consoleEnabled    | -         | Enables or disables logging session data to the console. Defaults to `true` if no database is configured, otherwise `false`. |

| Environment variable          | Passwords file | Default | Description                                                       |
| ----------------------------- | -------------- | ------- | ----------------------------------------------------------------- |
| SERVERPOD\_DATABASE\_PASSWORD | database       | -       | The password for the database                                     |
| SERVERPOD\_SERVICE\_SECRET    | serviceSecret  | -       | The token used to connect with insights must be at least 20 chars |
| SERVERPOD\_REDIS\_PASSWORD    | redis          | -       | The password for the Redis server                                 |

|  Environment variable | Command line option | Description                                                      |
| --------------------- | ------------------- | ---------------------------------------------------------------- |
| SERVERPOD\_SERVER\_ID | `--server-id`       | Configures the id of the server instance. Defaults to `default`. |

### Config file example

The config file should be named after the run mode you start the server in and it needs to be placed inside the `config` directory in the root of the server project. As an example, you have the `config/development.yaml` that will be used when running in the `development` run mode.

```yaml
apiServer:
  port: 8080
  publicHost: localhost
  publicPort: 8080
  publicScheme: http

insightsServer:
  port: 8081
  publicHost: localhost
  publicPort: 8081
  publicScheme: http

webServer:
  port: 8082
  publicHost: localhost
  publicPort: 8082
  publicScheme: http

database:
  host: localhost
  port: 8090
  name: database_name
  user: postgres

redis:
  enabled: false
  host: localhost
  port: 8091

maxRequestSize: 524288

sessionLogs:
  persistentEnabled: true
  consoleEnabled: true
```

### Passwords file example

The password file contains the secrets used by the server to connect to different services but you can also supply your secrets if you want. This file is structured with a common `shared` section, any secret put here will be used in all run modes. The other sections are the names of the run modes followed by respective key/value pairs.

```yaml
shared:
  myCustomSharedSecret: 'secret_key'

development:
  database: 'development_password'
  redis: 'development_password'
  serviceSecret: 'development_service_secret'

production:
  database: 'production_password'
  redis: 'production_password'
  serviceSecret: 'production_service_secret'
```

### Dart config object example

To configure Serverpod in Dart you simply pass an instance of the `ServerpodConfig` class to the `Serverpod` constructor. This config will override any environment variables or config files present. The `Serverpod` constructor is normally used inside the `run` function in your `server.dart` file. At a minimum, the `apiServer` has to be provided.

```dart
Serverpod(
  args,
  Protocol(),
  Endpoints(),
  config: ServerpodConfig(
    apiServer: ServerConfig(
      port: 8080,
      publicHost: 'localhost',
      publicPort: 8080,
      publicScheme: 'http',
    ),
    insightsServer: ServerConfig(
      port: 8081,
      publicHost: 'localhost',
      publicPort: 8081,
      publicScheme: 'http',
    ),
    webServer: ServerConfig(
      port: 8082,
      publicHost: 'localhost',
      publicPort: 8082,
      publicScheme: 'http',
    ),
  ),
);
```

### Default

If no yaml config files exist, no environment variables are configured and no dart config file is supplied this default configuration will be used.

```dart
ServerpodConfig(
  apiServer: ServerConfig(
    port: 8080,
    publicHost: 'localhost',
    publicPort: 8080,
    publicScheme: 'http',
  ),
);
```
