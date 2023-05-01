# Middleware

The middlewares are a objects that implement `SerinusMiddleware` that contains a `next()` method that will be executed before the request handler.

Each middleware can specify a set of `ConsumerRoute` that will be used to filter the routes that will be executed by the middleware.

To use a middleware, you must add it to the `MiddlewareConsumer` in the `configure()` method of the `SerinusModule`.

## Example

::: code-group

```dart [app_middleware.dart]
import 'package:serinus/serinus.dart';

class AppMiddleware implements SerinusMiddleware {
  @override
  Future<void> next(Request req, Response res) async {
    print("Middleware executed");
  }
}
```

```dart [app_module.dart]
import 'package:serinus/serinus.dart';

import 'app_controller.dart';
import 'app_service.dart';

@Module(
  imports: [],
  controllers: [AppController],
  providers: [AppService]
)
class AppModule extends SerinusModule{
  @override
  configure(MiddlewareConsumer consumer) {
    consumer.apply(AppMiddleware());
  }
}

```

:::

## ConsumerRoute

The `ConsumerRoute` has the following properties:

| Properties | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `path`     | The path that will be filtered.                                             |
| `method`   | The HTTP method that will be filtered. (optional)                           |

### Example

```dart
import 'package:serinus/serinus.dart';

import 'app_controller.dart';
import 'app_service.dart';

@Module(
  imports: [],
  controllers: [AppController],
  providers: [AppService]
)
class AppModule extends SerinusModule{
  @override
  configure(MiddlewareConsumer consumer) {
    consumer.apply(AppMiddleware());
    consumer.excludeRoutes([
      ConsumerRoute(Uri.parse('/ping'), 'GET')
    ]);
  }
}

```
