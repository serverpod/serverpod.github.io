# Introduction to the scloud CLI

https://docs.serverpod.dev/cloud/reference/cli/introduction

The Serverpod Cloud CLI (`scloud`) creates, manages, and deploys your Serverpod projects on Cloud. This reference covers every command, option, and flag.

## Install and authenticate

Before running any command:

- Install `scloud`. See [Install scloud](https://docs.serverpod.dev/cloud/getting-started/installation.md).
- Authenticate with `scloud auth login` interactively, or pass a personal access token in non-interactive contexts like CI pipelines. See [Personal access tokens](https://docs.serverpod.dev/cloud/concepts/personal-access-tokens.md).

## Command syntax

Every `scloud` invocation follows the same shape:

```text
scloud [global options] <command> [<subcommand>] [arguments] [options]
```

Global options can appear anywhere on the line; `scloud --token foo deploy` and `scloud deploy --token foo` are equivalent. When you run a command from a project directory containing `scloud.yaml`, the project ID is picked up automatically; pass `-p <project-id>` from anywhere else.

## Global options

A small set of options applies to every command: authentication (`--token`), project selection (`-p` / `--project`), output verbosity (`-v` / `--verbose`), and analytics (`-a` / `--analytics`). The full list, including timeouts and config-file overrides, lives on the [Global options](https://docs.serverpod.dev/cloud/reference/cli/global_options.md) page.

## Environment variables

Most global options have an environment-variable equivalent so workflows and CI don't need flags everywhere. The two you'll reach for most often:

- **Authentication in CI:** `SERVERPOD_CLOUD_TOKEN` (equivalent to `--token`).
- **Project selection:** `SERVERPOD_CLOUD_PROJECT_ID` (equivalent to `-p`).

The full list is on the [CLI environment variables](https://docs.serverpod.dev/cloud/reference/cli/env_vars.md) page.

## Where the concepts live

Command pages describe *what* a command does. For the *why* and *when*, the concept pages are the home:

- Deploying, validating, rolling back: [Deployments](https://docs.serverpod.dev/cloud/concepts/deployments.md).
- Pre- and post-deploy automation: [Deployment hooks](https://docs.serverpod.dev/cloud/concepts/deployment-hooks.md).
- Runtime and build logs: [Logs](https://docs.serverpod.dev/cloud/concepts/logs.md).
- Default and custom domains: [Custom domains](https://docs.serverpod.dev/cloud/concepts/custom-domains.md).
- Managed PostgreSQL: [Database](https://docs.serverpod.dev/cloud/concepts/database.md).
- Sensitive values and runtime config: [Passwords, secrets, and environment variables](https://docs.serverpod.dev/cloud/concepts/passwords-secrets-env-vars.md).
- CI and headless authentication: [Personal access tokens](https://docs.serverpod.dev/cloud/concepts/personal-access-tokens.md).

## How this reference is organized

Each command page combines a hand-written introduction with auto-generated subcommand and option listings drawn from `scloud --help`. The sidebar lists commands alphabetically. Use the search box for fast lookup by flag or argument name.
