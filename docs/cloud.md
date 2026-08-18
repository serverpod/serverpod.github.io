# Introduction

https://docs.serverpod.dev/cloud

Serverpod Cloud is a managed hosting platform for Serverpod apps with predictable pricing. You deploy your app with the `scloud` command-line interface or via CI/CD, and use the web console for account setup, billing, and project dashboards.

With [`scloud` installed](https://docs.serverpod.dev/cloud/getting-started/installation.md), launch your first project with one command. No Dockerfile, no container config, no infrastructure setup:

```bash
scloud launch
```

## What Serverpod Cloud manages

- **Runtime and scaling.** Your app runs on a production runtime that scales as traffic grows.
- **Networking and TLS.** Encrypted endpoints, certificates, and load balancing work without configuration.
- **[Managed Postgres](https://docs.serverpod.dev/cloud/concepts/database.md)** (optional). Cloud can provision a production-grade Postgres database with automatic migrations and backups.
- **[Secrets and environment variables](https://docs.serverpod.dev/cloud/concepts/passwords-secrets-env-vars.md).** Manage sensitive values through `scloud`; values are encrypted where applicable.
- **[Custom domains](https://docs.serverpod.dev/cloud/concepts/custom-domains.md).** Attach your own domain; TLS certificates are provisioned and renewed. Cloud hosts both your backend and a preconfigured website for your Flutter web app.
- **[Logs and inspection](https://docs.serverpod.dev/cloud/concepts/logs.md).** View logs in the CLI or in Serverpod Insights, the desktop log viewer (requires a database).
- **PubSub, caching, and file storage.** Supported through the Serverpod framework using third-party services today; managed services are on the roadmap. See [Use Redis for PubSub and caching](https://docs.serverpod.dev/cloud/guides/redis.md) for the typical setup.

## Where to go next

- [Install scloud](https://docs.serverpod.dev/cloud/getting-started/installation.md) to set up the CLI.
- [Deploy your first app](https://docs.serverpod.dev/cloud/getting-started/launch.md) for a guided first deploy.
