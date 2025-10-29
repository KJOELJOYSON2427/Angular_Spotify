import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-social-login-buttons',
  imports: [CommonModule,
    GoogleSigninButtonModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './social-login-buttons.component.html',
  styleUrl: './social-login-buttons.component.css'
})
export class SocialLoginButtonsComponent implements OnInit{


 constructor(public authService: SocialAuthService, public socialService:AuthService){
   
  }

  user:SocialUser | null=null;
   ngOnInit():void{
     this.authService.authState.subscribe((user) => {
    if (user?.provider === 'GOOGLE') {
      this.user = user;
      console.log('Google user:', user);
      this.google.emit(user); // ← EMIT HERE
    }
  });
   }

  @Output() google= new EventEmitter();
   @Output() facebook = new EventEmitter();

  onGoogle(){
      this.socialService.signInWithGoogle();
     
  }

  onFacebook(){
      this.facebook.emit()
  }
}
