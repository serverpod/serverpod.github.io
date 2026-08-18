# serverpod start

https://docs.serverpod.dev/next/concepts/cli/commands/start

The `serverpod start` command runs your project in development mode. It generates the latest code, starts the server with hot reload, and launches your companion Flutter apps, all in a single interactive terminal.

```bash
serverpod start
```

Run it from anywhere inside your project folder.

## Usage

```console
Start the full development stack with hot reload: generates code, runs the server, and launches the companion Flutter apps in an interactive terminal UI.

Usage: serverpod start [-- <server-args>]
-h, --help            Print this usage information.
-w, --[no-]watch      Watch files and use the Frontend Server for fast incremental compilation. With --no-watch, the server is started via `dart run`.
                      (defaults to on)
-d, --directory       The server directory (defaults to auto-detect from current directory).
                      (defaults to "")
    --[no-]docker     Start Docker Compose services if a Docker Compose file exists. Defaults to on if the project has a Docker Compose file and the database is configured to PostgreSQL on localhost without a dataPath. Otherwise, defaults to off. Pass --docker or --no-docker to override the default behavior.
    --[no-]tui        Show interactive terminal UI.
                      (defaults to on)
    --[no-]flutter    Auto-launch the companion Flutter apps as configured on the server pubspec.yaml with `auto_launch: true`. Use --no-flutter to disable auto-launch. Apps can still be started on demand from the TUI.
                      (defaults to on)

Run "serverpod help" to see global options.
```
