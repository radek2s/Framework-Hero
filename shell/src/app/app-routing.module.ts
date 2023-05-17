import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'vue',
      exposedModule: './web-components',
      elementName: 'vue-element'
    } as WebComponentWrapperOptions
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
