import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { SocialLoginButtonsComponent } from '../social-login-buttons/social-login-buttons.component';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    SocialLoginButtonsComponent
  ],

  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  user: SocialUser | null = null;
  constructor(public authService: AuthService){
    this.loggedIn=this.authService.loggedIn;
  }
  loggedIn:boolean = false

  loginWithGoogle(){
    this.user= this.authService.user
     console.log('Google login success:', this.user);
    localStorage.setItem('spotify_user', JSON.stringify(this.user));
    console.log("loginGoogle");
  }

  loginWithFacebook() {
    this.authService.signInWithFacebook();
  }

    logout() {
    this.authService.signOut();
  }
}
