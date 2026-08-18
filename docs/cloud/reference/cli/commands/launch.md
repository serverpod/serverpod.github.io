# scloud launch

https://docs.serverpod.dev/cloud/reference/cli/commands/launch

`scloud launch` is the front door for new projects: it interactively creates a Serverpod Cloud project, links your local server to it, and deploys for the first time. The flow prompts for the project name, whether to enable a database, and confirms each step before performing it.

Once your project is linked, you typically switch to `scloud deploy` for subsequent updates. For non-interactive project creation (no prompts), use `scloud project create` and pass the settings as flags.

See [Deploy your first app](https://docs.serverpod.dev/cloud/getting-started/launch.md) for the full walkthrough.

## Usage

```console
Common command to launch and deploy Serverpod Cloud projects.

If there already is a Serverpod Cloud project near the current directory
it will redeploy the project (upload, build, and rollout in the cloud).

Otherwise it will guide you through setting up a new Serverpod Cloud project.


Usage: scloud launch [arguments]
-h, --help                       Print this usage information.
-p, --project                    The ID of the project.
    --[no-]pre-deploy-scripts    Set up pre-deploy scripts.
                                 (defaults to on)
    --dart-version               Overrides the Dart SDK version to use for building the project.

Deployment options
-c, --concurrency=<integer>      Number of concurrent files processed when zipping the project.
                                 (defaults to "5")
    --wet-run                    Perform every step except the deployment, leaving the hosted
                                 application untouched. Local files and the cloud project setup may
                                 still be modified.
    --show-files                 Display the file tree that will be uploaded.
-o, --output                     Save the deployment zip file to the specified path. Must end with
                                 .zip
    --[no-]await                 Await the deployment to finish while showing status progression.
                                 (defaults to on)

Run "scloud help" to see global options.

See the full documentation at: https://docs.serverpod.dev/cloud/reference/cli/commands/launch

```
