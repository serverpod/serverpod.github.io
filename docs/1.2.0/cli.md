# Serverpod CLI

https://docs.serverpod.dev/1.2.0/cli

The Serverpod Command Line Interface (CLI) provides a suite of tools to facilitate Serverpod development. Here's a detailed breakdown of its usage, global options, and available commands:

## Usage

```bash
$ serverpod <command> [arguments]
```

## Global Options

- **-h, --help**: Shows the usage information.
- **-q, --quiet**: Mutes all Serverpod CLI output, but can be overridden by `-v, --verbose`.
- **-v, --verbose**: Outputs detailed information, ideal for development stages. This supersedes `--q, --quiet`.

## Available Commands

- **[create](https://docs.serverpod.dev/1.2.0/get-started.md)**: Establishes a new Serverpod project. When employing this command, designate the project name, ensuring it's in lowercase and devoid of special characters.

- **[generate](https://docs.serverpod.dev/1.2.0/concepts/models.md)**: Converts YAML files into appropriate code for the server and associated clients.

- **[language-server](https://docs.serverpod.dev/1.2.0/lsp.md)**: Activates the Serverpod LSP server, which interfaces via JSON-RPC-2. This is tailored for compatibility with a client integrated within an IDE.

- **[create-migration](https://docs.serverpod.dev/1.2.0/concepts/database/migrations.md)**: Produces a migration derived from the variances between the last migration and the current project state.

- **[create-repair-migration](https://docs.serverpod.dev/1.2.0/concepts/database/migrations.md)**: Produces a repair migration derived from the variances between the live database schema and the targeted migration. If no version is specified, the latest migration is used.

- **version**: Reveals the active Serverpod CLI version.
