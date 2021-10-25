import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BasicComponent } from './pages/component-basic/basic.component';
import { PropsComponent } from './pages/component-props/props.component';
import { ServicesComponent } from './pages/component-services/services.component';
import { SlotsComponent } from './pages/component-slots/slots.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project-initialization/project.component';
import { SharedModule } from './shared';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-initialization', component: ProjectComponent },
  { path: 'simple-component', component: BasicComponent },
  { path: 'props-component', component: PropsComponent },
  { path: 'slots-component', component: SlotsComponent },
  { path: 'services-component', component: ServicesComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    PropsComponent,
    SlotsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
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
export class AppModule { }
