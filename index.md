# Serinus

Serinus is a backend framework written in Dart heavily inspired by [NestJS](https://nestjs.com/).

## Installation

::: warning
Serinus is still being developed and many things can change. Use it at your own risk.
:::

### Using the CLI
  
```console
dart pub global activate serinus_cli
serinus_cli create <project_name>
```

The CLI will create a new project with the following structure:

```console
├── lib
│   ├── main.dart
│   ├── app.module.dart
│   ├── app.controller.dart
│   └── app.service.dart
├── pubspec.yaml
├── .gitignore
├── analysis_options.yaml
└── README.md
```

### From pub.dev

::: tip
Using the CLI is the recommended way to create a new project.
:::

```console
dart pub add serinus
```
