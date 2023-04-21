# First steps

After creating a new project with `serinus_cli create <new_project>`,
here is what you will find inside the `lib/` folder.

::: code-group

```dart [main.dart]
import 'package:serinus/serinus.dart';

import 'app.module.dart';

void main(List<String> arguments) {
  SerinusFactory application = SerinusFactory.createApp(
    AppModule(),
  );
  application.serve();
}
```

```dart [app.module.dart]
import 'package:serinus/serinus.dart';

import 'app.controller.dart';
import 'app.service.dart';

@Module(
  imports: [],
  controllers: [AppController],
  providers: [AppService],
)
class AppModule extends SerinusModule{}
```

```dart [app.controller.dart]
import 'package:serinus/serinus.dart';

import 'app.service.dart';

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

```dart [app.service.dart]
import 'package:serinus/serinus.dart';

class AppService extends SerinusService{

  String ping(){
    return "Pong!";
  }

}
```

:::
