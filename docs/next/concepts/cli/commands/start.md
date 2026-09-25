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
-w, --[no-]watch      Watch files and use the Frontend Server.
                      (defaults to on)
-d, --directory       The server directory.
                      (defaults to "")
-t, --target          The server entrypoint, relative to the server directory.
                      (defaults to "bin/main.dart")
    --[no-]docker     Start Docker Compose services if a compose file exists.
    --[no-]attach     Attach a UI once the stack is up. With --no-attach the runner is brought up, its address is printed, and the command returns.
                      (defaults to on)
    --[no-]tui        Show the interactive terminal UI when attaching. Ignored with --no-attach, since nothing renders.
                      (defaults to on)
    --[no-]flutter    Auto-launch companion Flutter apps on the first UI attach.
                      (defaults to on)

Run "serverpod help" to see global options.
```
