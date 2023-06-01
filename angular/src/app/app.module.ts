import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BasicComponent } from './pages/component-basic/basic.component';
import { DirectivesComponent } from './pages/component-directives/directives.component';
import { ExtendComponent } from './pages/component-extend/extend.component';
import { PropsComponent } from './pages/component-props/props.component';
import { LifecycleComponent } from './pages/component-lifecycle/lifecycle.component';
import { ServicesComponent } from './pages/component-services/services.component';
import { SlotsComponent } from './pages/component-slots/slots.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project-initialization/project.component';
import { StoreComponent } from './pages/component-store/store.component';
import { SharedModule } from './shared';
import { createCustomElement } from '@angular/elements';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-initialization', component: ProjectComponent },
  { path: 'simple-component', component: BasicComponent },
  { path: 'props-component', component: PropsComponent },
  { path: 'lifecycle-component', component: LifecycleComponent },
  { path: 'slots-component', component: SlotsComponent },
  { path: 'services-component', component: ServicesComponent },
  { path: 'extend-component', component: ExtendComponent },
  { path: 'directives-component', component: DirectivesComponent },
  { path: 'store-component', component: StoreComponent },

]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    PropsComponent,
    LifecycleComponent,
    SlotsComponent,
    ServicesComponent,
    ExtendComponent,
    DirectivesComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
    HighlightModule,
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml')
      }
    }
  }],
  bootstrap: [AppComponent]
})


export class AppModule {}