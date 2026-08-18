# serverpod database

https://docs.serverpod.dev/next/concepts/cli/commands/database

The `serverpod database` command manages the embedded PostgreSQL database of a Serverpod project. Use `serverpod database start` to boot the database on its own, without starting the server, and keep it running until you stop it with Ctrl+C. This is useful for connecting external database tools while the server is stopped.

The database configuration comes from the run mode selected with `--mode`, which must have `database.dataPath` set. For that option and its default, see the [Configuration reference](https://docs.serverpod.dev/next/concepts/lookups/configuration-reference.md).

## Usage

```console
Manage the embedded PostgreSQL database used by a Serverpod project.

Usage: serverpod database <subcommand> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  start   Start the configured embedded PostgreSQL database over TCP.

Run "serverpod help" to see global options.
```

### Sub commands

#### `start`

```console
Start the configured embedded PostgreSQL database over TCP.

Usage: serverpod database start [arguments]
-h, --help                 Print this usage information.
-s, --server-dir=<path>    Server project directory. Defaults to auto-detection.
-m, --mode                 Serverpod run mode whose database config should be used.
                           (defaults to "development")
-p, --port=<integer>       TCP port override. Defaults to the configured database port.

Run "serverpod help" to see global options.
```
