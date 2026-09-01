# scloud deploy

https://docs.serverpod.dev/cloud/reference/cli/commands/deploy

`scloud deploy` packages your project, uploads it to Serverpod Cloud, and waits for the new version to go live. Run it from the directory containing `scloud.yaml` (typically your project root or server directory) or pass `--project-dir`.

To preview what will be uploaded without deploying, use `scloud deploy --dry-run` (optionally with `--show-files`). To follow an in-flight deploy, run `scloud deployment show`.

For the full deploy lifecycle, pre-deploy hooks, and how to recover from a failed deploy, see [Deployments](https://docs.serverpod.dev/cloud/concepts/deployments.md) and [Recover from a failed deploy](https://docs.serverpod.dev/cloud/guides/recover-from-a-failed-deploy.md).

## Usage

```console
Deploy a Serverpod project to the cloud.

Usage: scloud deploy [arguments]
-h, --help                     Print this usage information.
-p, --project (mandatory)      The ID of the project. Can be passed as the first argument.
                               Can be omitted for existing projects that are linked (see the
                               "project link" command).
-c, --concurrency=<integer>    Number of concurrent files processed when zipping the project.
                               (defaults to "5")
    --wet-run                  Perform every step except the deployment, leaving the hosted
                               application untouched. Local files may still be modified.
    --show-files               Display the file tree that will be uploaded.
-o, --output                   Save the deployment zip file to the specified path. Must end with
                               .zip
    --[no-]await               Await the deployment to finish while showing status progression.
                               (defaults to on)
    --dart-version             Overrides the Dart SDK version to use for building the project.

Run "scloud help" to see global options.


Examples

  Deploy your project to the cloud

    $ scloud deploy

  Preview the file tree that will be uploaded

    $ scloud deploy --show-files

  The output shows files that will be included in the deployment, as well as files that are ignored
  (marked with "(ignored)").

  This is useful for verifying that your .gitignore and .scloudignore files are working as expected.
  You can combine it with --wet-run to preview the file tree without actually deploying:

    $ scloud deploy --wet-run --show-files

  Save the deployment zip file locally

    $ scloud deploy --output deployment.zip --wet-run

  Save the deployment zip and still upload it (unless --wet-run is set)

    $ scloud deploy --output deployment.zip


See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/deploy

```
