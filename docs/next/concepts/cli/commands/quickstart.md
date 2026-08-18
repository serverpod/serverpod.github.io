# serverpod quickstart

https://docs.serverpod.dev/next/concepts/cli/commands/quickstart

`serverpod quickstart` creates a new Serverpod project with a small set of options, suited to a quick experiment or a simple app. It is a streamlined version of `serverpod create`.

Choose between a `server` or `module` template with `--template`. For a guided first project, see [Quickstart](https://docs.serverpod.dev/next/quickstart.md).

## Usage

```console
Creates a new Serverpod project with basic options.
Suitable for a simple project or quick experiment.
Specify project name (must be lowercase with no special characters).

Usage: serverpod quickstart [arguments]
-h, --help                         Print this usage information.
-f, --force                        Create the project even if there are issues that prevent it from running out of the box.
-t, --template                     Template to use when creating a new project

          [fullstack] (default)    Fullstack project including a server and a companion Flutter app
          [server]                 Server project with standard features including database
          [module]                 Serverpod Module project

-n, --name (mandatory)             The name of the project to create.
                                   Can also be specified as the first argument.

Run "serverpod help" to see global options.
```
