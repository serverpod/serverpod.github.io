# scloud completion

https://docs.serverpod.dev/cloud/reference/cli/commands/completion

As an `scloud` user, you can enable command line completion in most shells.

Two completion tools are supported: Completely and Carapace.

Completely is easier to set up for the end user, but only has direct support for bash and zsh. See [Completely on GitHub](https://github.com/bashly-framework/completely).

Carapace supports nearly all shells but requires the end user to install the Carapace tool. See the [Carapace docs](https://carapace.sh/).

## Installing completion

### Bash with Completely

Run:

```sh
scloud completion install -t completely
```

This will write the completions script to this location, where bash picks it up
automatically on start:
`~/.local/share/bash-completion/completions/scloud.bash`

In order to update the completions in the current bash shell, run:

```sh
exec bash
```

### Zsh with Completely

Run the same as for bash:

```sh
scloud completion install -t completely
```

Then set up bash completions for your Zsh:

If you use Oh-My-Zsh, bash completions are already enabled.
Otherwise, enable them by adding the following to your `~/.zshrc`
(if not already present):

```sh
autoload -Uz +X compinit && compinit
autoload -Uz +X bashcompinit && bashcompinit
```

Then, enable `scloud` completions by adding this line to your `~/.zshrc`
(for all setups, including Oh-My-Zsh):

```sh
source ~/.local/share/bash-completion/completions/scloud.bash
```

### Nearly all shells with Carapace

Carapace supports nearly all shells but requires the end user to install the Carapace tool. See the [Carapace docs](https://carapace.sh/).

#### Prerequisites

To install Carapace on macOS:

```sh
brew install carapace
```

For other environments, see the [Carapace install guide](https://carapace-sh.github.io/carapace-bin/install.html).

#### Enable Carapace completion for scloud

Run the following once for the current shell,
or add to your shell startup script:

Bash:

```bash
scloud completion install -t carapace
source <(carapace scloud)
```

Zsh:

```zsh
scloud completion install -t carapace
zstyle ':completion:*' format $'\e[2;37mCompleting %d\e[m'
source <(carapace scloud)
```

For other shells, see the [Carapace setup guide](https://carapace-sh.github.io/carapace-bin/setup.html).

## Usage

```console
Command line completion commands

Usage: scloud completion <subcommand> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  generate   Generate a command line completion specification
  install    Install a command line completion script

Run "scloud help" to see global options.
```

### Sub commands

#### `generate`

```console
Generate a command line completion specification

Usage: scloud completion generate [arguments]
-h, --help                Print this usage information.
-t, --tool (mandatory)    The completion tool to target

          [completely]    Use the `completely` tool (https://github.com/bashly-framework/completely)
          [carapace]      Use the `carapace` tool (https://carapace.sh/)

-e, --exec-name           Override the name of the executable
-f, --file                Write the specification to a file instead of stdout

Run "scloud help" to see global options.
```

#### `install`

```console
Install a command line completion script

Usage: scloud completion install [arguments]
-h, --help                Print this usage information.
-t, --tool (mandatory)    The completion tool to target

          [completely]    Use the `completely` tool (https://github.com/bashly-framework/completely)
          [carapace]      Use the `carapace` tool (https://carapace.sh/)

-e, --exec-name           Override the name of the executable
-d, --write-dir           Override the directory to write the script to

Run "scloud help" to see global options.
```
