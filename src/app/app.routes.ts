import { WeatherTodayComponent } from './weather/weather-today/weather-today.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'today', component: WeatherTodayComponent, canActivate: [AuthGuardService]},
    { path: 'forecast', component: WeatherSearchComponent, canActivate: [AuthGuardService]},
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signout', component: SignoutComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
  ];

  export class AppRoutingModule { }
