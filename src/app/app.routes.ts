import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WeatherTodayComponent } from './weather/weather-today/weather-today.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';


export const routes: Routes = [
    { path: 'today', component: WeatherTodayComponent},
    { path: 'forecast', component: WeatherSearchComponent},
    // { path: 'forecast', component: WeatherSearchComponent, canActivate: [AuthGuardService]},
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signout', component: SignoutComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
  ];

// @NgModule({
//     imports: [ BrowserModule, RouterModule.forRoot(routes) ],
//     exports: [ RouterModule ]
//   })
  export class AppRoutingModule { }
