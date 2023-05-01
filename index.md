# Serinus

Serinus is a framework written in Dart for building efficient and scalable server-side applications.

## Why Serinus?

Serinus is a framework that aims to be simple, fast and easy to use. It is based on the [NestJS](https://nestjs.com/) framework, which is written in TypeScript. And the reason for creating Serinus in this way is to bring a framework with similar characteristics to NestJS, but written in Dart.

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
│   ├── app_module.dart
│   ├── app_controller.dart
│   └── app_service.dart
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
