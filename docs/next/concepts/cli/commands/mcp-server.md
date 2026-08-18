# serverpod mcp-server

https://docs.serverpod.dev/next/concepts/cli/commands/mcp-server

`serverpod mcp-server` starts a Model Context Protocol bridge to the `serverpod start` runner of a server project, letting an AI assistant build, run, and inspect your server.

The server directory is auto-detected from the current working directory. Pass `--server-dir` explicitly in monorepos that contain more than one server project.

## Usage

```console
Start an MCP bridge to the `serverpod start` runner of one server project.

Usage: serverpod mcp-server
-h, --help          Print this usage information.
-s, --server-dir    Path to the server project directory (the package that contains a `serverpod` dependency). Auto-detected from the current working directory if omitted. Pass this flag explicitly in monorepos with multiple server projects.

Run "serverpod help" to see global options.
```
