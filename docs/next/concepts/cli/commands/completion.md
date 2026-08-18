# serverpod completion

https://docs.serverpod.dev/next/concepts/cli/commands/completion

`serverpod completion` sets up shell tab-completion for the `serverpod` command. Use the `install` subcommand to add completion to your shell, or `generate` to print a completion specification you can wire up yourself.

Both subcommands target a completion tool with `--tool`, either [`completely`](https://github.com/bashly-framework/completely) or [`carapace`](https://carapace.sh/). For a walkthrough, see [Shell completion](https://docs.serverpod.dev/tools/shell-completion.md).

## Usage

```console
Command line completion commands

Usage: serverpod completion <subcommand> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  generate   Generate a command line completion specification
  install    Install a command line completion script

Run "serverpod help" to see global options.
```

### Sub commands

#### `generate`

```console
Generate a command line completion specification

Usage: serverpod completion generate [arguments]
-h, --help                Print this usage information.
-t, --tool (mandatory)    The completion tool to target

          [completely]    Use the `completely` tool (https://github.com/bashly-framework/completely)
          [carapace]      Use the `carapace` tool (https://carapace.sh/)

-e, --exec-name           Override the name of the executable
-f, --file                Write the specification to a file instead of stdout

Run "serverpod help" to see global options.
```

#### `install`

```console
Install a command line completion script

Usage: serverpod completion install [arguments]
-h, --help                Print this usage information.
-t, --tool (mandatory)    The completion tool to target

          [completely]    Use the `completely` tool (https://github.com/bashly-framework/completely)
          [carapace]      Use the `carapace` tool (https://carapace.sh/)

-e, --exec-name           Override the name of the executable
-d, --write-dir           Override the directory to write the script to

Run "serverpod help" to see global options.
```
