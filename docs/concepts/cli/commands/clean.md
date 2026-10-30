# serverpod clean

https://docs.serverpod.dev/concepts/cli/commands/clean

The `serverpod clean` command deletes the cached server build of a server project, so the next `serverpod start` compiles the server from scratch. Run it when `serverpod start` keeps reporting compilation errors you already fixed. The command needs Serverpod 4.0.4 or later.

Stop `serverpod start` before you run the command, then start it again to rebuild.

## Usage

```console
Delete the cached server build so the next `serverpod start` recompiles from scratch.

Only needed when `serverpod start` keeps reporting compilation errors that have already been fixed, even after restarting it.

Usage: serverpod clean [arguments]
-h, --help         Print this usage information.
-d, --directory    The server directory (defaults to auto-detect from current directory).

Run "serverpod help" to see global options.
```
