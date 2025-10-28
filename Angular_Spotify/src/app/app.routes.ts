import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {
        path:'', component:LandingPageComponent,

    },{
        path:'login',component:LoginComponent
    },
     { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' } 
];
