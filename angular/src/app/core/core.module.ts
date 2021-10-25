import { NgModule, Optional, SkipSelf } from '@angular/core';

/**
 *  Core Module for Handling the Logic of the App
 */
@NgModule({
  declarations: [],
  imports: [],
  providers: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core:CoreModule) {
        if (core) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
