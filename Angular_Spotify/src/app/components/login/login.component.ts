import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { SocialLoginButtonsComponent } from '../social-login-buttons/social-login-buttons.component';
import { SocialUser } from '@abacritt/angularx-social-login';
import { SupabaseService } from '../../../core/services/superbase.service';

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
  constructor(public authService: AuthService, 
    private supabaseService: SupabaseService
  ){
    this.loggedIn=this.authService.loggedIn;
  }
  loggedIn:boolean = false

  async loginWithGoogle(){
    try{this.user= this.authService.user

    if(!this.user){
      console.error('No user found after Google login.');
        return;
    }
     console.log('Google login success:', this.user);
      // ✅ Store in Supabase
      const storedUser = await this.supabaseService.storeSocialUser({
        email: this.user.email,
        name: this.user.name,
        provider: 'google',
        photoUrl: this.user.photoUrl,
        access_token: this.user.idToken, 
      });
      console.log('Stored user in Supabase:', storedUser);
      console.log('loginGoogle complete');
    }catch (error) {
      console.error('Error during Google login:', error);
    }
    
  }

  loginWithFacebook() {
    this.authService.signInWithFacebook();
  }

    logout() {
    this.authService.signOut();
  }
}
