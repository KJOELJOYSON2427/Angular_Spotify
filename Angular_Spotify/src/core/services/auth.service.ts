import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider
  
} from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:"root"
})
export class AuthService{
    user: SocialUser | null =null;

    loggedIn:boolean =false;

    constructor(private socialAuthService:SocialAuthService){
        this.socialAuthService.authState.subscribe((user)=>{
            this.user=user;
            this.loggedIn=user!=null;
             console.log('Logged in user:', this.user);
        })
    }


    signInWithGoogle():void{
        console.log("socialGoogle");
        
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
        .then(user=>
        {
          this.user = user;
        this.loggedIn = true;
        console.log('Google user:', user);
        }
        ).catch(err=> console.error('Google login error:', err))
    }


     signInWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(user => {
        this.user = user;
        this.loggedIn = true;
        console.log('Facebook user:', user);
      })
      .catch(err => console.error('Facebook login error:', err));
  }

     signOut(): void {
    this.socialAuthService.signOut();
  }
}