import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent, TopbarComponent } from './layout';

@NgModule({
  declarations: [
      NavbarComponent,
      TopbarComponent
  ],
  imports: [
    RouterModule
  ],
  providers: [],
  exports: [
      NavbarComponent,
      TopbarComponent,
  ],
})
export class SharedModule { }
