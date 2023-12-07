import { Component, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        {
            provide: LOCALE_ID,
            useFactory: (translate: TranslateService) => translate.currentLang,
            deps: [TranslateService]
        }
    ]
})
export class AppComponent {
}
