import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule,Validators} from "@angular/forms"
import { OmitPassword, SupabaseService } from '../../../core/services/superbase.service';
import { User } from '../../../core/models/user.model';
@Component({
  selector: 'app-signup',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  sessionUser:OmitPassword<User> |null =null;
   step=1;

   signupForm:FormGroup;
 submitted = false;
   constructor(private fb: FormBuilder, private supabaseService: SupabaseService){
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', Validators.required],
      name: ['', Validators.required],
      news: [false],
      shareData: [false]
    })
   }


   nextStep(){
    switch(this.step){
      case 1:
    if (this.signupForm.get('email')?.valid) {
      this.step = 2;
    }
    break;
  
  case 2:
    if (this.signupForm.get('password')?.valid) {
      this.step = 3;
    }
    break;
  
  case 3:
    if (this.signupForm.get('gender')?.valid) {
      this.step = 4;
    }
    break;
    }
   }

   prevStep(){
    if(this.step >1) this.step--;
   }

   async onSubmit(){
    if (this.submitted) return; // prevent double submission
    this.submitted = true;
  if(this.signupForm.valid){
    console.log(this.signupForm.value);
    
    try{
      const session=await this.supabaseService.signUp(
        this.signupForm.value.email!,
        this.signupForm.value.password!,
        this.signupForm.value.name!
      )
      if(session && session.name){
        this.sessionUser = session
        localStorage.setItem("currentUser",JSON.stringify(session.name))
      }
      console.log('Signup successful');
      alert('Account Created Successfully!');
      // ✅ Reset form and step after successful signup
      this.signupForm.reset();
      this.step = 1;


      for(let i=2; i<=4; i++){
        switch(i){
          case 2: this.signupForm.get('password')?.reset(); break;
          case 3: this.signupForm.get('gender')?.reset(); break;
          case 4: this.signupForm.get('name')?.reset(); break;
        }
      }
    }catch(err:any){
      console.error(err.message);
      alert('Signup failed: ' + err.message);

      
    }finally{
      this.submitted = false;
    }
  } else {
    // Optional: mark all fields as touched to show validation errors
    this.signupForm.markAllAsTouched();
    this.submitted = false;
  }
}

// ✅ Add this getter to expose step as a style binding
  get progressStyles() {
    return { '--step': this.step } as any;
  }
}
