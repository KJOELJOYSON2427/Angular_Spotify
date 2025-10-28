import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-social-login-buttons',
  imports: [],
  templateUrl: './social-login-buttons.component.html',
  styleUrl: './social-login-buttons.component.css'
})
export class SocialLoginButtonsComponent {



  @Output() google= new EventEmitter<void>();
   @Output() facebook = new EventEmitter<void>();
  onGoogle(){
     this.google.emit()
     console.log("came ");
     
  }

  onFacebook(){
      this.facebook.emit()
  }
}
