# serverpod clean

https://docs.serverpod.dev/next/concepts/cli/commands/clean

The `serverpod clean` command deletes the cached server build of a server project, so the next `serverpod start` compiles the server from scratch and the next `serverpod generate` regenerates all code. Run it when `serverpod start` keeps reporting compilation errors you already fixed, or when `serverpod generate` leaves bad output.

Stop the stack with `serverpod runner stop` before you run the command, then start it again to rebuild.

## Usage

```console
Delete the cached server build and generation staleness stamp.

The next `serverpod start` recompiles from scratch, and the next `serverpod generate` regenerates code.

Only needed when `serverpod start` keeps reporting compilation errors that have already been fixed, or `serverpod generate` leaves bad output.

Usage: serverpod clean [arguments]
-h, --help         Print this usage information.
-d, --directory    The server directory (defaults to auto-detect from current directory).

Run "serverpod help" to see global options.
```
