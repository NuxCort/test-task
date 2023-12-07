import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppConfig } from './app.config';
import { AppRoutingModule } from './app-routing.routes';

@NgModule({
  declarations: [
    //AppComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json?x=' + Math.random()),
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
  }),
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    AppConfig
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { 

}