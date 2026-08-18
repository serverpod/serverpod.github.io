# Overview

https://docs.serverpod.dev/next/concepts/operations/overview

Once your server is written, the work shifts from building features to running them. This section covers what you need after deployment: seeing what the server is doing, proving to a host that it is healthy, securing the traffic it accepts, and finding out when something breaks.

Everything here works the same whether you deploy to [Serverpod Cloud](https://docs.serverpod.dev/next/deployments/deploy-to-serverpod-cloud.md) or [host it yourself](https://docs.serverpod.dev/next/deployments/custom-hosting/choosing-a-strategy.md), though the two differ in how much is set up for you.

## What each page covers

- **[Logging](https://docs.serverpod.dev/next/concepts/operations/logging.md)**: what the server records for every call, where those records go, and how to keep the log tables from growing without bound.
- **[Health checks](https://docs.serverpod.dev/next/concepts/operations/health-checks.md)**: the HTTP endpoints a host calls to decide whether your server is alive and ready for traffic, plus the metrics Serverpod collects about itself.
- **[Security and TLS](https://docs.serverpod.dev/next/concepts/operations/security-and-tls.md)**: how traffic to your server is encrypted, and when you need to configure that yourself.
- **[Exception monitoring](https://docs.serverpod.dev/next/concepts/operations/exception-monitoring.md)**: reporting exceptions to a monitoring service as they happen. This one is an experimental API.

## Related

- [Configuration](https://docs.serverpod.dev/next/concepts/server-fundamentals/configuration.md): the config files and environment variables every setting on these pages is read from.
- [Sessions](https://docs.serverpod.dev/next/concepts/endpoints-and-apis/sessions.md): the object that produces most of what ends up in your logs.
- [Caching](https://docs.serverpod.dev/next/concepts/endpoints-and-apis/caching.md): storing values in server memory or Redis.
- [Run code on shutdown](https://docs.serverpod.dev/next/concepts/server-fundamentals/running-your-server.md#run-code-on-shutdown): cleanup work when the server stops.
- [Insights](https://docs.serverpod.dev/next/tools/insights.md): the companion app for reading logs and metrics.
