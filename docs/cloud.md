# Introduction

https://docs.serverpod.dev/cloud

Serverpod Cloud is a managed hosting platform for Serverpod apps with predictable pricing. You deploy your app with the Serverpod Cloud CLI or via CI/CD, and use the web console for account setup, [billing](https://docs.serverpod.dev/cloud/concepts/plans-and-billing.md#set-up-billing), and project dashboards.

With [the Cloud CLI set up](https://docs.serverpod.dev/cloud/getting-started/installation.md), launch your first project with one command. No Dockerfile, no container config, no infrastructure setup:

```bash
serverpod cloud launch
```

## What Serverpod Cloud manages

- **[Runtime and scaling](https://docs.serverpod.dev/cloud/concepts/compute.md).** Your app runs on a production runtime that scales as traffic grows. It can also [scale to zero](https://docs.serverpod.dev/cloud/concepts/scale-to-zero.md) instead of running while nobody uses it.
- **Networking and TLS.** Encrypted endpoints, certificates, and load balancing work without configuration.
- **[Managed Postgres](https://docs.serverpod.dev/cloud/concepts/database.md)** (optional). Cloud can provision a production-grade Postgres database. Each deploy applies your migrations. If your plan includes backups, you can take [snapshots](https://docs.serverpod.dev/cloud/concepts/database-backups.md) on demand or on a schedule.
- **[File storage](https://docs.serverpod.dev/cloud/concepts/storage.md).** Cloud provisions a private and a public storage with every project, ready for the files your app uploads at runtime.
- **Hosting region.** Every project runs in Frankfurt, Germany, in the EU. That includes its server, database, and file storage.
- **[Secrets and environment variables](https://docs.serverpod.dev/cloud/concepts/passwords-secrets-env-vars.md).** Manage sensitive values through the Cloud CLI. Values are encrypted where applicable.
- **[Custom domains](https://docs.serverpod.dev/cloud/concepts/custom-domains.md).** Attach your own domain. TLS certificates are provisioned and renewed. Cloud hosts both your backend and a preconfigured website for your Flutter web app.
- **[Logs and inspection](https://docs.serverpod.dev/cloud/concepts/logs.md).** View your server's logs and sessions in the console, or fetch and filter them with the CLI.
- **[App publishing](https://docs.serverpod.dev/cloud/concepts/app-publishing.md).** Build, sign, and upload your Flutter app to TestFlight and Google Play from the Cloud CLI.
- **Pub/sub and caching.** Supported through the Serverpod framework with a third-party Redis service you connect yourself. See [Use Redis for PubSub and caching](https://docs.serverpod.dev/cloud/guides/redis.md) for the typical setup.

## Where to go next

- [Set up the Cloud CLI](https://docs.serverpod.dev/cloud/getting-started/installation.md) to get the CLI ready and authenticate it.
- [Deploy your first app](https://docs.serverpod.dev/cloud/getting-started/launch.md) for a guided first deploy.
