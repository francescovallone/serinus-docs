# First steps

After creating a new project with `serinus create <new_project>`,
here is what you will find inside the `lib/` folder.

::: code-group

```dart [main.dart]
import 'package:serinus/serinus.dart';

import 'app_module.dart';

void main(List<String> arguments) {
  SerinusFactory application = SerinusFactory.createApp(
    AppModule(),
  );
  application.serve();
}
```

```dart [app_module.dart]
import 'package:serinus/serinus.dart';

import 'app_controller.dart';
import 'app_service.dart';

@Module(
  imports: [],
  controllers: [AppController],
  providers: [AppService],
)
class AppModule extends SerinusModule{}
```

```dart [app_controller.dart]
import 'package:serinus/serinus.dart';

import 'app_service.dart';

@Controller()
class AppController extends SerinusController{

  final AppService appService;

  const AppController(this.appService);

  @Get("/")
  String ping(){
    return appService.ping();
  }

}
```

```dart [app_service.dart]
import 'package:serinus/serinus.dart';

class AppService extends SerinusProvider{

  String ping(){
    return "Pong!";
  }

}
```

:::

To start the application there are two options:

- `serinus run`
- `dart --enable-vm-service lib/main.dart`

The first option is the simplest and is the recommended one. The command provide also some options and flags to customize the execution.

- `serinus run --port=8080` to change the default port
- `serinus run --dev` to enable the debug mode
- `serinus run --help` to see all the available options
- `serinus run --host=localhost` to change the default host
- `serinus run --directory=./example` to change the working directory
