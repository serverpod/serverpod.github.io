# serverpod create-migration

https://docs.serverpod.dev/next/concepts/cli/commands/create-migration

The `serverpod create-migration` command compares your current models and database definition to the last migration and writes a new migration for the difference. Run it after changing your model files.

Use `--force` to proceed when a change may drop data, `--tag` to label the revision, or `--empty` to create a migration even when nothing has changed. For the full workflow, see [Migrations](https://docs.serverpod.dev/next/concepts/data-and-the-database/database/migrations.md).

## Usage

```console
Creates a migration from the last migration to the current state of the database.

Usage: serverpod create-migration [arguments]
-h, --help     Print this usage information.
    --empty    Creates the migration even if there are no database changes.
-f, --force    Creates the migration even if there are warnings or information that may be destroyed.
-t, --tag      Add a tag to the revision to easier identify it.

Run "serverpod help" to see global options.
```
