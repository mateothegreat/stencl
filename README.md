oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g stencl
$ stencl COMMAND
running command...
$ stencl (--version)
stencl/0.0.0 darwin-arm64 node-v18.13.0
$ stencl --help [COMMAND]
USAGE
  $ stencl COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`stencl hello PERSON`](#stencl-hello-person)
* [`stencl hello world`](#stencl-hello-world)
* [`stencl help [COMMANDS]`](#stencl-help-commands)
* [`stencl plugins`](#stencl-plugins)
* [`stencl plugins:install PLUGIN...`](#stencl-pluginsinstall-plugin)
* [`stencl plugins:inspect PLUGIN...`](#stencl-pluginsinspect-plugin)
* [`stencl plugins:install PLUGIN...`](#stencl-pluginsinstall-plugin-1)
* [`stencl plugins:link PLUGIN`](#stencl-pluginslink-plugin)
* [`stencl plugins:uninstall PLUGIN...`](#stencl-pluginsuninstall-plugin)
* [`stencl plugins:uninstall PLUGIN...`](#stencl-pluginsuninstall-plugin-1)
* [`stencl plugins:uninstall PLUGIN...`](#stencl-pluginsuninstall-plugin-2)
* [`stencl plugins update`](#stencl-plugins-update)

## `stencl hello PERSON`

Say hello

```
USAGE
  $ stencl hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/mateothegreat/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `stencl hello world`

Say hello world

```
USAGE
  $ stencl hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ stencl hello world
  hello world! (./src/commands/hello/world.ts)
```

## `stencl help [COMMANDS]`

Display help for stencl.

```
USAGE
  $ stencl help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for stencl.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.5/src/commands/help.ts)_

## `stencl plugins`

List installed plugins.

```
USAGE
  $ stencl plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ stencl plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.2/src/commands/plugins/index.ts)_

## `stencl plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ stencl plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ stencl plugins add

EXAMPLES
  $ stencl plugins:install myplugin 

  $ stencl plugins:install https://github.com/someuser/someplugin

  $ stencl plugins:install someuser/someplugin
```

## `stencl plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ stencl plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ stencl plugins:inspect myplugin
```

## `stencl plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ stencl plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ stencl plugins add

EXAMPLES
  $ stencl plugins:install myplugin 

  $ stencl plugins:install https://github.com/someuser/someplugin

  $ stencl plugins:install someuser/someplugin
```

## `stencl plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ stencl plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ stencl plugins:link myplugin
```

## `stencl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stencl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stencl plugins unlink
  $ stencl plugins remove
```

## `stencl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stencl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stencl plugins unlink
  $ stencl plugins remove
```

## `stencl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stencl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stencl plugins unlink
  $ stencl plugins remove
```

## `stencl plugins update`

Update installed plugins.

```
USAGE
  $ stencl plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
