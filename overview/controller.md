# Controller

The controller is responsible for handling incoming *requests* and returning a *response* to the client.

A controller is a class decorated with `@Controller()` and extends `SerinusController` that contains the routes and the logic to handle the requests.

Each controller can specify a `path` in the annotation that will be used to group the routes. If the path is not specified, the path will be `/`.

## Routing

The routing is the process of mapping an incoming request to a controller and a method.

The routing is done by decorating a method with `@Get()`, `@Post()`, `@Put()`, `@Delete()`, `@Head()`, `@Options`, `@Patch()`.

```dart
import 'package:serinus/serinus.dart';

@Controller()
class AppController extends SerinusController{

  @Get()
  String ping(){
    return "Pong!";
  }

}
```

In this example Serinus will map the `GET /` to the `ping()` handler. The path contains the path specified in the `@Controller()` annotation and the path specified in the `@Get()` annotation.

As Serinus will map the handler through the annotation, the method name is **arbitrary**.

## RequestInfo

The `@RequestInfo()` annotation will provide access to the `Request` object that contains the information about the HTTP Request.

```dart
import 'package:serinus/serinus.dart';

@Controller()
class AppController extends SerinusController{

  @Get()
  String ping(@RequestInfo() Request info){
    return "Pong!";
  }

}
```

## Status Code

The `statusCode` property of the Route annotation can be used to set the status code of the response.

```dart
import 'package:serinus/serinus.dart';

@Controller()
class AppController extends SerinusController{

  @Get(statusCode: 204)
  String ping(){
    return "Pong!";
  }

}
```
