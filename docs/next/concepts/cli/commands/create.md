# serverpod create

https://docs.serverpod.dev/next/concepts/cli/commands/create

`serverpod create` scaffolds a new Serverpod project. By default it generates a full server project with a database, a server package, a client package, and a Flutter app.

In an interactive terminal, `serverpod create` opens a setup screen where you choose the project's features. Pass `--template server` for a server without a Flutter app, or `--template module` to create a shareable module. To set up the prerequisites first, see [Installation](https://docs.serverpod.dev/next/installation.md).

The `--database`, `--redis`, `--auth`, `--webapp`, `--website`, and `--ide` flags apply only when the setup screen does not open, for example with `--no-interactive` or in CI. Without the setup screen, the project also gets Redis configuration and editor setup for Claude, Cursor, and VS Code, unless you pass `--no-redis` or choose editors with `--ide`.

To create a project without a database, deselect **Database (recommended)** under **Database & caching** on the setup screen, or pass `--no-interactive --no-database`. The new project still has the generator's database feature on, so set `database: false` under [`features`](https://docs.serverpod.dev/next/concepts/server-fundamentals/configuration.md#features) in `config/generator.yaml`, then run `serverpod generate`.

## Usage

```console
Creates a new Serverpod project, specify project name (must be lowercase with no special characters).

Usage: serverpod create [arguments]
-h, --help                         Print this usage information.
-f, --force                        Create the project even if there are issues that prevent it from running out of the box.
    --[no-]database                Include a database in the project.
    --[no-]redis                   Include Redis caching in the project.
    --[no-]auth                    Include authentication in the project. Requires a database.
    --[no-]webapp                  Configure the server to host a Flutter web app.
    --[no-]website                 Configure the server to host a website.
    --ide                          Configure agent skills and MCP servers for one or more IDEs. Use "none" to disable all IDE configuration.

          [none]                   Do not configure agent skills or MCP servers
          [antigravity]            Configure agent skills and MCP for Antigravity
          [codex]                  Configure agent skills and MCP for Codex
          [claude] (default)       Configure agent skills and MCP for Claude
          [cursor] (default)       Configure agent skills and MCP for Cursor
          [opencode]               Configure agent skills and MCP for OpenCode
          [vscode] (default)       Configure agent skills and MCP for VS Code

-n, --name (mandatory)             The name of the project to create.
                                   Can also be specified as the first argument.

Project Template
-t, --template                     Template to use when creating a new project

          [fullstack] (default)    Fullstack project including a server and a companion Flutter app
          [server]                 Server project with standard features including database
          [module]                 Serverpod Module project

Run "serverpod help" to see global options.
```
