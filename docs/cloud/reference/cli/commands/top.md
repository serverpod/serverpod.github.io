# scloud top

https://docs.serverpod.dev/cloud/reference/cli/commands/top

The `scloud top` command shows a live overview of your project in the terminal. It covers the last hour of podlets, traffic, and the database, plus the latest deployments and logs, and keeps updating until you quit.

The overview needs an interactive terminal. In CI or a script, use [`scloud status live`](https://docs.serverpod.dev/cloud/reference/cli/commands/status.md) and [`scloud log`](https://docs.serverpod.dev/cloud/reference/cli/commands/log.md) instead.

For CPU, memory, traffic, and database charts over longer time ranges, open [Metrics](https://docs.serverpod.dev/cloud/concepts/metrics.md) in the console.

## Usage

```console
Show a live overview of a project.

The overview shows the status, the CPU and memory of the podlets, the
traffic, the database, the latest deployments and the logs of the project,
and keeps them up to date until you quit.


Usage: scloud top [arguments]
-h, --help                                 Print this usage information.
-p, --project (mandatory)                  The ID of the project.
                                           Can be omitted for existing projects that are linked (see
                                           the "project link" command) or if a global project
                                           context is set (see the "settings set projectContext"
                                           command).
-u, --[no-]utc                             Display timestamps in UTC timezone instead of local. Set
                                           SERVERPOD_CLOUD_DISPLAY_UTC=true to make UTC the default
                                           for all commands.
    --interval=<integer[us|ms|s|m|h|d]>    How often the status and deployments refresh.
                                           (defaults to "5s")

Run "scloud help" to see global options.


Examples

  Show the live overview of the project.

    $ scloud top


  Show the live overview of a specific project.

    $ scloud top --project my-project


  Refresh the status every 30 seconds.

    $ scloud top --interval 30s


See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/top

```
