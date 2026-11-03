# Recover from a failed deploy

https://docs.serverpod.dev/cloud/guides/recover-from-a-failed-deploy

When a deployment to Serverpod Cloud fails, use this guide to identify the cause, fix the problem, and deploy again. A failed deployment does not replace the currently running version. Serverpod Cloud switches traffic only after a successful deployment. If a previous version was live, it remains live.

## Before you start

Ensure you have:

- The Serverpod Cloud CLI set up and authenticated. See [Set up the Cloud CLI](https://docs.serverpod.dev/cloud/getting-started/installation.md).
- A Serverpod Cloud project with at least one deploy attempt.

## Confirm the failed deployment

List recent deployments to identify the failed attempt:

```bash
serverpod cloud status deployment list
```

A failed deploy shows `FAILURE` in the Status column and a reason in the Info column. For example:

```text
# | Project | Deploy Id                            | Status  | Started (local)     | Finished (local)    | Info
--+---------+--------------------------------------+---------+---------------------+---------------------+-----------------------------------
0 | my-app  | 73e66b41-64fc-4920-b6ef-4918cc6ceca1 | FAILURE | 2026-06-15 15:19:37 | 2026-06-15 15:20:34 | User build FAILURE - see build log
```

Copy the deployment ID so you can inspect the logs for that specific attempt.

## Inspect the build logs

Build-time errors appear only in the build log. Start by retrieving the latest build log:

```bash
serverpod cloud build log
```

To inspect a specific deployment, pass its sequence number (`0` is the latest) or deployment UUID from `serverpod cloud status deployment list`:

```bash
serverpod cloud build log 3
serverpod cloud build log 73e66b41-64fc-4920-b6ef-4918cc6ceca1
```

For long logs, redirect the output to a file or search for error messages:

```bash
serverpod cloud build log > build-log.txt
serverpod cloud build log | grep ERROR
```

## Diagnose and fix the failure

Find the symptom that best matches your deployment status or logs, then expand the corresponding section.

A pre-deploy script failed

A script in your `scloud.yaml` under `project.scripts.pre_deploy` exited with a non-zero status, so the CLI stopped before uploading your project.

To fix:

1. Run the failing command locally to reproduce the error.
2. Fix script logic, file paths, or missing local environment variables.

See [Deployment hooks](https://docs.serverpod.dev/cloud/concepts/deployment-hooks.md) for the failure semantics and the [scloud.yaml schema](https://docs.serverpod.dev/cloud/reference/scloud-yaml-schema.md#pre_deploy) for the accepted formats.

The CLI reported a send timeout

The CLI reports `Send Timeout. Please check your internet connection and try again`. The upload stalled for longer than the CLI's timeout (60 seconds by default), so nothing was built. This commonly occurs on slower connections or first deploys containing large assets.

Increase the upload timeout and redeploy:

```bash
serverpod cloud deploy --timeout 120s
```

If the problem persists, check your network connection and retry later.

The deployment failed to resolve dependencies

Serverpod Cloud cannot resolve packages declared in `pubspec.yaml`.

To fix:

1. Run `dart pub get` locally.
2. Resolve version conflicts, missing packages, or private dependency configuration issues.

For private packages, see [Private dependencies](https://docs.serverpod.dev/cloud/reference/private-dependencies.md).

The build failed with compilation errors

Lines starting with `ERROR:` or `FAILED:` in the build log often indicate a Dart compilation error, missing import, or missing dependency. Fix the relevant code or dependency and redeploy.

The build succeeded, but a database migration failed

The build succeeded, but pending schema changes in `migrations/` failed to apply.

To fix:

1. View the runtime server logs to find the exact database error:

   ```bash
   serverpod cloud log
   ```

2. Look for `Failed to apply database migrations`. Common causes are duplicate columns or malformed SQL.

3. Correct the migration locally.

The build succeeded, but the server crashed on startup

The CLI reports `Rollout failed.`, and the Info column shows `Deployment failed: the new version did not become healthy and did not roll out.`

To fix:

1. Check the runtime server logs:

   ```bash
   serverpod cloud log
   ```

2. Look for `Unhandled exception:` and inspect the stack trace.

If the error is `Bad state: FutureCalls is not initialized.`, your server is trying to schedule a future call, which isn't supported on the Starter plan. To use future calls, [upgrade to the Growth or Enterprise plan](https://serverpod.dev/cloud) and redeploy.

## Redeploy and verify

Once the issue is resolved locally, re-run the deployment and monitor the rollout:

```bash
serverpod cloud deploy
serverpod cloud status deployment show
```

When **Rollout** reports success, Cloud switches traffic to the new version.

## Related

- [Deployments](https://docs.serverpod.dev/cloud/concepts/deployments.md) for the deploy lifecycle and `serverpod cloud deploy --wet-run` to validate before shipping.
- [Logs](https://docs.serverpod.dev/cloud/concepts/logs.md) for the build-log and runtime-log surfaces.
- [Deployment hooks](https://docs.serverpod.dev/cloud/concepts/deployment-hooks.md) for pre- and post-deploy hook failure semantics.
- [Database](https://docs.serverpod.dev/cloud/concepts/database.md) for the migration model and how to reverse a schema change.
