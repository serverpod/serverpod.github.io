# serverpod create-repair-migration

https://docs.serverpod.dev/next/concepts/cli/commands/create-repair-migration

The `serverpod create-repair-migration` command builds a migration by comparing the target state to what is actually in the live database, rather than to the latest migration. Use it to bring a database back in sync when it has drifted from your migration history.

Select which database to inspect with `--mode` (`development`, `staging`, or `production`), and target a specific version with `--version`. See [Migrations](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/migrations.md).

## Usage

```console
Repairs the database by comparing the target state to what is in the live database instead of comparing to the latest migration.

Usage: serverpod create-repair-migration [arguments]
-h, --help       Print this usage information.
-f, --force      Creates the migration even if there are warnings or information that may be destroyed.
-t, --tag        Add a tag to the revision to easier identify it.
-v, --version    The target version for the repair. If not specified, the latest migration version will be repaired.
-m, --mode       Used to specify which database configuration to use when fetching the live database definition.
                 [development (default), staging, production]

Run "serverpod help" to see global options.
```
