import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import  {provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
// import { JwtInterceptor } from './Interceptors/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  provideHttpClient(
    // DI-based interceptors must be explicitly enabled.
    // withInterceptorsFromDi(),
  ),
  // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
};
