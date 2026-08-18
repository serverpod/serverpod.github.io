# scloud auth

https://docs.serverpod.dev/cloud/reference/cli/commands/auth

`scloud auth` manages your login session: log in to Serverpod Cloud, log out, and revoke other sessions or tokens. Most `scloud` commands authenticate against the cloud API, so you need to be logged in (or pass a token) to do anything that touches your projects.

For long-lived authentication (CI pipelines, scripts), see [Personal access tokens](https://docs.serverpod.dev/cloud/concepts/personal-access-tokens.md), which covers token creation, the `SERVERPOD_CLOUD_TOKEN` environment variable, and the `--token` flag.

## Credentials storage

After running `scloud auth login`, your authentication token is stored locally at:

```text
~/.serverpod/cloud/serverpod_cloud_auth.json
```

This file contains a JSON object with your token:

```json
{"token": "your-token-here"}
```

Delete the file (or run `scloud auth logout`) to clear stored credentials.

## Usage

```console
Manage user authentication.

Usage: scloud auth <subcommand> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  create-token   Create a personal access token.
  list           List the current authentication sessions.
  login          Log in to Serverpod cloud.
  logout         Log out from Serverpod Cloud.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/auth

```

### Sub commands

#### `login`

```console
Log in to Serverpod cloud.

Usage: scloud auth login [arguments]
-h, --help                                   Print this usage information.
    --time-limit=<integer[us|ms|s|m|h|d]>    The time to wait for the authentication to complete.
                                             (defaults to "5m")
    --[no-]persistent                        Store the authentication credentials.
                                             (defaults to on)

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/auth

```

#### `logout`

```console
Log out from Serverpod Cloud.

By default the current session is logged out.
Use options to log out other sessions and CLI / personal access tokens.
See also "scloud auth list", to list the current authentication sessions.

Usage: scloud auth logout [arguments]
-h, --help        Print this usage information.

Sessions
    --token-id    The token IDs to log out. Logs out the current session if not provided.
    --all         Log out from all sessions including API tokens.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/auth

```

#### `list`

```console
List the current authentication sessions.

Usage: scloud auth list [arguments]
-h, --help        Print this usage information.
-u, --[no-]utc    Display timestamps in UTC timezone instead of local.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/auth

```

#### `create-token`

```console
Create a personal access token.

Creates an additional CLI / personal access token for the current user.
This token can be used to authenticate scloud commands by using
the --token option or the SERVERPOD_CLOUD_TOKEN environment variable.

Usage: scloud auth create-token [arguments]
-h, --help                                 Print this usage information.
    --expire-at=<YYYY-MM-DDtHH:MM:SSz>     The calendar time to expire the token at.

TTL: Expire after non-use
    --idle-ttl=<integer[us|ms|s|m|h|d]>    The duration of non-use after which the token will
                                           expire.
                                           (defaults to "30d")
    --no-idle-ttl                          Do not expire the token after a duration of non-use.

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/auth

```
