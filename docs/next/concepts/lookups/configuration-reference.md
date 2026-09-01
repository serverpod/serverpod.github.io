# Configuration reference

https://docs.serverpod.dev/next/concepts/lookups/configuration-reference

Every configuration option Serverpod's core library reads. Options come from three sources: the `config/<run-mode>.yaml` files, environment variables, and the `ServerpodConfig` Dart object. Environment variables override the YAML files, and the Dart object overrides both. For how to choose between them, see [Configuration](https://docs.serverpod.dev/next/concepts/server-fundamentals/configuration.md).

## Run options

Set the run mode, server role, and boot behavior. Declare each per run mode in the matching `config/<mode>.yaml`, or as an environment variable.

| Environment variable                | Command line option        | Config file option   | Default     | Description                                                                                                      |
| ----------------------------------- | -------------------------- | -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| SERVERPOD\_RUN\_MODE                | `--mode`                   | N/A                  | development | Configures the mode of the server instance. Valid options are `development`, `staging`, `production` and `test`. |
| SERVERPOD\_SERVER\_ID               | `--server-id`              | serverId             | default     | Configures the id of the server instance.                                                                        |
| SERVERPOD\_SERVER\_ROLE             | `--role`                   | role                 | monolith    | Configures the role of the server instance. Valid options are `monolith`, `serverless` and `maintenance`.        |
| SERVERPOD\_LOGGING\_MODE            | `--logging`                | logging              | normal      | Configures the logging level. Valid options are `normal`, and `verbose`.                                         |
| SERVERPOD\_APPLY\_MIGRATIONS        | `--apply-migrations`       | applyMigrations      | false       | Configures if migrations should be applied when the server starts.                                               |
| SERVERPOD\_APPLY\_REPAIR\_MIGRATION | `--apply-repair-migration` | applyRepairMigration | false       | Configures if repair migrations should be applied when the server starts.                                        |

## Server and services

Ports, hosts, and connection settings for the API, Insights, and web servers, the database, Redis, session logs, and future calls, plus a few options that exist only on the Dart config object.

| Environment variable                                  | Config file                         | Default   | Description                                                                                                                                                                                                  |
| ----------------------------------------------------- | ----------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SERVERPOD\_API\_SERVER\_PORT                          | apiServer.port                      | 8080      | The port number for the API server                                                                                                                                                                           |
| SERVERPOD\_API\_SERVER\_PUBLIC\_HOST                  | apiServer.publicHost                | localhost | The public host address of the API server                                                                                                                                                                    |
| SERVERPOD\_API\_SERVER\_PUBLIC\_PORT                  | apiServer.publicPort                | 8080      | The public port number for the API server                                                                                                                                                                    |
| SERVERPOD\_API\_SERVER\_PUBLIC\_SCHEME                | apiServer.publicScheme              | http      | The public scheme (http/https) for the API server                                                                                                                                                            |
| SERVERPOD\_INSIGHTS\_SERVER\_PORT                     | insightsServer.port                 | -         | The port number for the Insights server                                                                                                                                                                      |
| SERVERPOD\_INSIGHTS\_SERVER\_PUBLIC\_HOST             | insightsServer.publicHost           | -         | The public host address of the Insights server                                                                                                                                                               |
| SERVERPOD\_INSIGHTS\_SERVER\_PUBLIC\_PORT             | insightsServer.publicPort           | -         | The public port number for the Insights server                                                                                                                                                               |
| SERVERPOD\_INSIGHTS\_SERVER\_PUBLIC\_SCHEME           | insightsServer.publicScheme         | -         | The public scheme (http/https) for the Insights server                                                                                                                                                       |
| SERVERPOD\_INSIGHTS\_SERVER\_ENABLE\_DATABASE\_ACCESS | insightsServer.enableDatabaseAccess | false     | Whether the Insights server serves the direct database access endpoints (used by custom service client tooling, not the Insights app)                                                                        |
| SERVERPOD\_WEB\_SERVER\_PORT                          | webServer.port                      | -         | The port number for the Web server                                                                                                                                                                           |
| SERVERPOD\_WEB\_SERVER\_PUBLIC\_HOST                  | webServer.publicHost                | -         | The public host address of the Web server                                                                                                                                                                    |
| SERVERPOD\_WEB\_SERVER\_PUBLIC\_PORT                  | webServer.publicPort                | -         | The public port number for the Web server                                                                                                                                                                    |
| SERVERPOD\_WEB\_SERVER\_PUBLIC\_SCHEME                | webServer.publicScheme              | -         | The public scheme (http/https) for the Web server                                                                                                                                                            |
| SERVERPOD\_DATABASE\_HOST                             | database.host                       | -         | The host address of the database                                                                                                                                                                             |
| SERVERPOD\_DATABASE\_PORT                             | database.port                       | -         | The port number for the database connection                                                                                                                                                                  |
| SERVERPOD\_DATABASE\_NAME                             | database.name                       | -         | The name of the database                                                                                                                                                                                     |
| SERVERPOD\_DATABASE\_USER                             | database.user                       | -         | The user name for database authentication                                                                                                                                                                    |
| SERVERPOD\_DATABASE\_SEARCH\_PATHS                    | database.searchPaths                | -         | The search paths used for all database connections                                                                                                                                                           |
| SERVERPOD\_DATABASE\_REQUIRE\_SSL                     | database.requireSsl                 | false     | Indicates if SSL is required for the database                                                                                                                                                                |
| SERVERPOD\_DATABASE\_IS\_UNIX\_SOCKET                 | database.isUnixSocket               | false     | Specifies if the database connection is a Unix socket                                                                                                                                                        |
| SERVERPOD\_DATABASE\_MAX\_CONNECTION\_COUNT           | database.maxConnectionCount         | 10        | The maximum number of connections in the database pool. Set to 0 or a negative value for unlimited connections.                                                                                              |
| SERVERPOD\_DATABASE\_FILE\_PATH                       | database.filePath                   | -         | The SQLite database file path. Set this instead of host/port/name/user when using SQLite.                                                                                                                    |
| SERVERPOD\_DATABASE\_DIALECT                          | database.dialect                    | postgres  | The database dialect. Valid options are `postgres` and `sqlite`.                                                                                                                                             |
| SERVERPOD\_DATABASE\_DATA\_PATH                       | database.dataPath                   | -         | Directory for the embedded PostgreSQL cluster, relative to the server package unless absolute. When set, Serverpod starts or attaches to the cluster before connecting. PostgreSQL only; ignored for SQLite. |
| SERVERPOD\_REDIS\_HOST                                | redis.host                          | -         | The host address of the Redis server                                                                                                                                                                         |
| SERVERPOD\_REDIS\_PORT                                | redis.port                          | -         | The port number for the Redis server                                                                                                                                                                         |
| SERVERPOD\_REDIS\_USER                                | redis.user                          | -         | The user name for Redis authentication                                                                                                                                                                       |
| SERVERPOD\_REDIS\_ENABLED                             | redis.enabled                       | false     | Indicates if Redis is enabled                                                                                                                                                                                |
| SERVERPOD\_REDIS\_REQUIRE\_SSL                        | redis.requireSsl                    | false     | Indicates if SSL is required for the Redis connection                                                                                                                                                        |
| SERVERPOD\_MAX\_REQUEST\_SIZE                         | maxRequestSize                      | 524288    | The maximum size of requests allowed in bytes                                                                                                                                                                |
| SERVERPOD\_VALIDATE\_HEADERS                          | validateHeaders                     | true      | Validate HTTP headers using the typed API. Set to `false` to accept headers without the required formatting, for example an unwrapped token in the Authorization header.                                     |
| SERVERPOD\_SESSION\_PERSISTENT\_LOG\_ENABLED          | sessionLogs.persistentEnabled       | -         | Enables or disables logging session data to the database. Defaults to `true` if a database is configured, otherwise `false`.                                                                                 |
| SERVERPOD\_SESSION\_LOG\_CLEANUP\_INTERVAL            | sessionLogs.cleanupInterval         | 24h       | How often to run the log cleanup job. Duration string (e.g. `24h`, `2d`). Set to null to disable automated purging.                                                                                          |
| SERVERPOD\_SESSION\_LOG\_RETENTION\_PERIOD            | sessionLogs.retentionPeriod         | 90d       | How long to keep session log entries. Duration string (e.g. `30d`, `60d`). Set to null to disable time-based cleanup.                                                                                        |
| SERVERPOD\_SESSION\_LOG\_RETENTION\_COUNT             | sessionLogs.retentionCount          | 100000    | Maximum number of session log entries to keep. Set to null to disable count-based cleanup.                                                                                                                   |
| SERVERPOD\_SESSION\_CONSOLE\_LOG\_ENABLED             | sessionLogs.consoleEnabled          | -         | Enables or disables logging session data to the console. Defaults to `true` if no database is configured or the run mode is `development`, otherwise `false`.                                                |
| SERVERPOD\_SESSION\_CONSOLE\_LOG\_FORMAT              | sessionLogs.consoleLogFormat        | -         | The format for console logging of session data. Valid options are `text` and `json`. Defaults to `text` for run mode `development`, otherwise `json`.                                                        |
| SERVERPOD\_FUTURE\_CALL\_EXECUTION\_ENABLED           | futureCallExecutionEnabled          | true      | Enables or disables the execution of future calls.                                                                                                                                                           |
| SERVERPOD\_FUTURE\_CALL\_CONCURRENCY\_LIMIT           | futureCall.concurrencyLimit         | 1         | The maximum number of concurrent future calls allowed. If the value is negative or null, no limit is applied.                                                                                                |
| SERVERPOD\_FUTURE\_CALL\_SCAN\_INTERVAL               | futureCall.scanInterval             | 5000      | The interval in milliseconds for scanning future calls                                                                                                                                                       |
| SERVERPOD\_FUTURE\_CALL\_CHECK\_BROKEN\_CALLS         | futureCall.checkBrokenCalls         | -         | Enables or disables the automatic check for broken future calls on startup. By default, the server performs an automatic check if there are less than 1000 calls in the database.                            |
| SERVERPOD\_FUTURE\_CALL\_DELETE\_BROKEN\_CALLS        | futureCall.deleteBrokenCalls        | false     | Enables or disables the deletion of broken future calls when running the check on startup.                                                                                                                   |
| SERVERPOD\_WEBSOCKET\_PING\_INTERVAL                  | websocketPingInterval               | 30        | The interval in seconds between WebSocket ping messages sent to keep streaming connections alive. Must be a positive integer.                                                                                |

### Dart-only options

These options have no environment variable or config-file key. Set them on the `ServerpodConfig` Dart object passed to the `Serverpod` constructor.

| ServerpodConfig field                | Default | Description                                                                                                               |
| ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| healthCheckInterval                  | 1m      | How often the server collects health metrics. Set to zero to disable health checks.                                       |
| experimentalDiagnosticHandlerTimeout | 30s     | The timeout for [diagnostic event handlers](https://docs.serverpod.dev/next/concepts/operations/exception-monitoring.md). |

### Password environment variables

Secrets are read from `config/passwords.yaml` and can be overridden per secret through environment variables; see [Manage secrets](https://docs.serverpod.dev/next/concepts/server-fundamentals/configuration.md#manage-secrets). Two forms exist, and when both are set for the same secret, the `SERVERPOD_PASSWORD_*` form wins:

| Environment variable          | Overrides passwords-file key                                                     |
| ----------------------------- | -------------------------------------------------------------------------------- |
| `SERVERPOD_PASSWORD_<name>`   | Any secret; the prefix is stripped (`SERVERPOD_PASSWORD_database` → `database`). |
| SERVERPOD\_DATABASE\_PASSWORD | database                                                                         |
| SERVERPOD\_SERVICE\_SECRET    | serviceSecret                                                                    |
| SERVERPOD\_REDIS\_PASSWORD    | redis                                                                            |

## Code generation

Options for `config/generator.yaml`, which configures `serverpod generate`.

| Option                            | Type   | Default                      | Description                                                                                 |
| --------------------------------- | ------ | ---------------------------- | ------------------------------------------------------------------------------------------- |
| type                              | string | server                       | The package type. Valid options are `server`, `module`, or `internal`.                      |
| nickname                          | string | -                            | For modules only. Defines how the module is referenced in code.                             |
| client\_package\_path             | string | ../\[name]\_client           | Path to the client package relative to the server.                                          |
| server\_test\_tools\_path         | string | test/integration/test\_tools | Path where test tools are generated. Remove this to disable test tools generation.          |
| shared\_packages                  | list   | -                            | Paths to shared packages containing models usable by both server and client.                |
| modules                           | map    | -                            | Module dependencies with optional nicknames.                                                |
| extraClasses                      | list   | -                            | List of custom serializable classes to include in code generation.                          |
| serialize\_as\_jsonb\_by\_default | bool   | false                        | When true, all serializable fields default to `jsonb` storage instead of `json`.            |
| features                          | map    | {database: true}             | Feature flags. Currently only `database` is supported.                                      |
| experimental\_features            | map    | -                            | Experimental features. Available keys: `all` (no experimental feature currently available). |

## Related

- [Configuration](https://docs.serverpod.dev/next/concepts/server-fundamentals/configuration.md): how the three configuration sources work, run modes, secrets, and package types.
- [Running your server](https://docs.serverpod.dev/next/concepts/server-fundamentals/running-your-server.md): the run mode and files the server loads on start.
