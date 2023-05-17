import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrap } from '@angular-architects/module-federation-tools';


import { AppModule } from './app/app.module';

bootstrap(AppModule, {
  production: false,
  appType: "shell"
})

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
