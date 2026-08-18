# scloud project

https://docs.serverpod.dev/cloud/reference/cli/commands/project

`scloud project` creates and manages projects on Serverpod Cloud. For an interactive walkthrough that also deploys for the first time, use `scloud launch`.

To create a project from the command line:

```bash
scloud project create my-project --enable-db
```

If the project doesn't need a database, pass `--no-enable-db` instead. Once created, deploy with [`scloud deploy`](https://docs.serverpod.dev/cloud/reference/cli/commands/deploy.md).

## Link an existing project

`scloud project link <project-id>` connects a local Serverpod codebase to an existing Cloud project. Use it when you've created the project in the Cloud console or when joining a teammate's project.

The link command writes or updates three files in your local project directory:

1. **`scloud.yaml`**: contains the project ID that ties your codebase to the Cloud project. Created in your server package directory (or the one specified with `--project-dir`).
2. **`.scloudignore`**: created from a template if it doesn't exist; defines which files should be excluded when uploading to Cloud (syntax mirrors `.gitignore`).
3. **`.gitignore`**: if your project is a workspace, the `.scloud/` directory is added to keep deployment artifacts out of version control.

## Usage

```console
Manage Serverpod Cloud projects.

Usage: scloud project <subcommand> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  create   Create a Serverpod Cloud project.
  delete   Delete a Serverpod Cloud project.
  link     Link your local project to an existing Serverpod Cloud project.
  list     List the Serverpod Cloud projects.

Management
  user     Manage Serverpod Cloud project users.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/project

```

### Sub commands

#### `create`

```console
Create a Serverpod Cloud project.

Usage: scloud project create [arguments]
-h, --help                     Print this usage information.
-p, --project (mandatory)      The ID of the project. Can be passed as the first argument.
    --plan=<starter|growth>    Selects the plan to use.
    --[no-]enable-db           Flag to enable the database for the project.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/project

```

#### `delete`

```console
Delete a Serverpod Cloud project.

Usage: scloud project delete [arguments]
-h, --help                   Print this usage information.
-p, --project (mandatory)    The ID of the project. Can be passed as the first argument.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/project

```

#### `list`

```console
List the Serverpod Cloud projects.

Usage: scloud project list [arguments]
-h, --help    Print this usage information.
    --all     Include deleted projects.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/project

```

#### `link`

```console
Link your local project to an existing Serverpod Cloud project.

This command creates or updates the project configuration files in your local codebase to connect it
to an existing Serverpod Cloud project. It will:
  - Create or update the scloud.yaml configuration file with the project ID
  - Create a .scloudignore file if it does not exist
  - Update .gitignore to exclude the .scloud/ directory (if in a workspace)

The scloud.yaml file contains the project ID and is used by other scloud commands to identify which
Serverpod Cloud project to use. This file can be safely committed to version control as it only
contains the project identifier, not sensitive credentials.

Usage: scloud project link [arguments]
-h, --help                   Print this usage information.
-p, --project (mandatory)    The ID of the project. Can be passed as the first argument.
    --dart-version           Overrides the Dart SDK version to use for building the project.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/project

```

#### `user`

```console
Manage Serverpod Cloud project users.

Usage: scloud project user <subcommand> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  invite   Invite a user to a Serverpod Cloud project.
  list     List users in a Serverpod Cloud project.
  revoke   Revoke a user from a Serverpod Cloud project.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/project

```
