import { ApplicationConfig, Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
@Injectable()
export class AppConfig {}
