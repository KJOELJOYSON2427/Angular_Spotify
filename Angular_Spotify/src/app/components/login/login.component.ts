import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { SocialLoginButtonsComponent } from '../social-login-buttons/social-login-buttons.component';

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
  
  constructor(public authService: AuthService){
    this.loggedIn=this.authService.loggedIn;
  }
  loggedIn:boolean = false

  loginWithGoogle(){
    console.log("loginGoogle");
    
    this.authService.signInWithGoogle();
  }

  loginWithFacebook() {
    this.authService.signInWithFacebook();
  }

    logout() {
    this.authService.signOut();
  }
}
