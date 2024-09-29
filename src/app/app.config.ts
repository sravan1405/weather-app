import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AuthGuardService } from './auth/auth-guard.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    AuthGuardService // Use provideRouter to set up the routes
  ]
}).catch(err => console.error(err));
