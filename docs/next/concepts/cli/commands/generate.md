# serverpod generate

https://docs.serverpod.dev/next/concepts/cli/commands/generate

`serverpod generate` reads your model and endpoint definitions and generates the server and client Dart code that connects them. Run it whenever you add or change a model or an endpoint.

Pass `--watch` to regenerate automatically as you edit, or `--force` to rebuild after hand-editing generated files. For what gets generated, see [Working with endpoints](https://docs.serverpod.dev/next/concepts/endpoints-and-apis.md) and [Models](https://docs.serverpod.dev/next/concepts/data-and-the-database/models.md).

## Usage

```console
Generate code from yaml files for server and clients.

Usage: serverpod generate [arguments]
-h, --help         Print this usage information.
-w, --watch        Watch for changes and continuously generate code.
-d, --directory    The directory to generate code for (defaults to current directory).
                   (defaults to "")
-f, --force        Regenerate even when the output looks up to date. Use this to rebuild after hand-editing or reverting generated files.

Run "serverpod help" to see global options.
```
