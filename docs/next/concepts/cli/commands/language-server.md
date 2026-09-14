# serverpod language-server

https://docs.serverpod.dev/next/concepts/cli/commands/language-server

`serverpod language-server` starts a Serverpod language server that communicates over JSON-RPC 2.0. It is meant to be launched by an IDE integration rather than run directly, and it powers features like diagnostics in your model and endpoint files.

See [Language server](https://docs.serverpod.dev/tools/lsp.md).

## Usage

```console
Launches a serverpod language server communicating with JSON-RPC-2 intended to be used with a client integrated in an IDE.

Usage: serverpod language-server [arguments]
-h, --help          Print this usage information.
    --[no-]stdio    (defaults to on)

Run "serverpod help" to see global options.
```
