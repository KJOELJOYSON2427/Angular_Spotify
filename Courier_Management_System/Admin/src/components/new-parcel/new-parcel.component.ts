import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-parcel',
  imports: [ReactiveFormsModule],
  templateUrl: './new-parcel.component.html',
  styleUrl: './new-parcel.component.css'
})
export class NewParcelComponent implements OnInit {
   

  parcelForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit():void {
        
    this.parcelForm = this.fb.group({
      trackingNumber: ['', Validators.required],   // ✅ EXTRA FIELD
      from: ['', Validators.required],
      to: ['', Validators.required],
      weight: ['', Validators.required],
      cost: ['', Validators.required],
      senderName: ['', Validators.required],
      recipientName: ['', Validators.required],
      senderEmail: ['', [Validators.required, Validators.email]],
      recipientEmail: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      note: [''],
    })
  }


  onSubmit(){
  if(this.parcelForm.invalid){
    this.parcelForm.markAllAsTouched();
    return;
  }
}
}


