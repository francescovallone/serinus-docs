# Module

A module is a class decorated with `@Module()` and extends `SerinusModule` that contains providers, controllers, and can import other modules.

Each application must have at least one module, the root module, which is the entry point to the application.
Every other module is a child module of the root module.

The `@Module()` decorator has the following properties:

| Properties    | Description                                                                              |
| ------------- | ---------------------------------------------------------------------------------------- |
| `providers`   | A list of providers that will be available in the module.                                |
| `controllers` | A list of controllers that will be instantiated.                                         |
| `imports`     | A list of `modules` that will be imported in the module.                                 |
| `exports`     | A list of `providers` that will be available by other modules which imports this module. |

Every `module` in Serinus is a singleton, which means that there is only one instance of the module in the application and it is shared across the application.

## Example

```dart
import 'package:serinus/serinus.dart';

@Module(
  imports: [],
  providers: [AppService],
  controllers: [AppController],
  exports: [],
)
class AppModule extends SerinusModule {}
```
