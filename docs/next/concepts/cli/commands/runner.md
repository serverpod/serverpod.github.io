# serverpod runner

https://docs.serverpod.dev/next/concepts/cli/commands/runner

The `serverpod runner` command manages the development stack of a server project: the background process that runs the server, database, and Flutter apps for [`serverpod start`](https://docs.serverpod.dev/next/concepts/cli/commands/start.md). Use it to start the stack without the interactive terminal, attach to it later, print its addresses, or stop it. See [Run the stack in the background](https://docs.serverpod.dev/next/concepts/server-fundamentals/running-your-server.md#run-the-stack-in-the-background).

## Usage

```console
Manage the development stack for this project.

Usage: serverpod runner <subcommand> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  attach   Attach to the development stack already running for this project.
  start    Start the development stack for this project and return, leaving it running in the background.
  status   Print the development stack's state and addresses for this project.
  stop     Stop the development stack running for this project.

Run "serverpod help" to see global options.
```

### Sub commands

#### `start`

```console
Start the development stack for this project and return, leaving it running in the background.

Usage: serverpod runner start [-- <server-args>]
-h, --help            Print this usage information.
-w, --[no-]watch      Watch files and use the Frontend Server.
                      (defaults to on)
-d, --directory       The server directory.
                      (defaults to "")
-t, --target          The server entrypoint, relative to the server directory.
                      (defaults to "bin/main.dart")
    --[no-]docker     Start Docker Compose services if a compose file exists.
    --[no-]flutter    Auto-launch companion Flutter apps on the first UI attach.
                      (defaults to on)

Run "serverpod help" to see global options.
```

#### `attach`

```console
Attach to the development stack already running for this project.

Usage: serverpod runner attach
-h, --help         Print this usage information.
-d, --directory    The server directory (defaults to auto-detect from current directory).
    --[no-]tui     Show the interactive terminal UI.
                   (defaults to on)

Run "serverpod help" to see global options.
```

#### `status`

```console
Print the development stack's state and addresses for this project.

Usage: serverpod runner status
-h, --help         Print this usage information.
-d, --directory    The server directory (defaults to auto-detect from current directory).

Run "serverpod help" to see global options.
```

#### `stop`

```console
Stop the development stack running for this project.

Usage: serverpod runner stop
-h, --help         Print this usage information.
-d, --directory    The server directory (defaults to auto-detect from current directory).

Run "serverpod help" to see global options.
```
