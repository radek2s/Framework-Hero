import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en')
   }

  changeLanguage(langCode: string) {
    this.translate.use(langCode)
  }
}

