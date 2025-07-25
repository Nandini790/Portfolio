import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.route';
import { provideRouter, Routes } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .catch(err => console.error(err));
