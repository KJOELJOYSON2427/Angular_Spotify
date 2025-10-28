import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-social-login-buttons',
  imports: [],
  templateUrl: './social-login-buttons.component.html',
  styleUrl: './social-login-buttons.component.css'
})
export class SocialLoginButtonsComponent implements OnInit{


 constructor(public authService: AuthService){
   
  }
   ngOnInit():void{
     this.onGoogle()
   }

  @Output() google= new EventEmitter<SocialUser>();
   @Output() facebook = new EventEmitter<SocialUser>();

  onGoogle(){
       this.authService.signInWithGoogle()
     this.google.emit()
     console.log("came ");
     
  }

  onFacebook(){
      this.facebook.emit()
  }
}
