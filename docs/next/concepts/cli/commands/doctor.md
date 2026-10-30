# serverpod doctor

https://docs.serverpod.dev/next/concepts/cli/commands/doctor

The `serverpod doctor` command checks that Flutter, Dart, Git, and the Serverpod CLI are installed in compatible versions and selected by your `PATH`, and that pub.dev is reachable. For each check that fails, it prints what to do about it.

The command exits with an error when any check fails. Pass `--json` to get the results as JSON, for example in a script.

## Usage

```console
Check that Flutter, Dart, Git, and the Serverpod CLI are installed, compatible, and selected by PATH.

Exits with an error when any check does not pass.

Usage: serverpod doctor [arguments]
-h, --help    Print this usage information.
    --json    Print the results as JSON instead of text.

Run "serverpod help" to see global options.
```
