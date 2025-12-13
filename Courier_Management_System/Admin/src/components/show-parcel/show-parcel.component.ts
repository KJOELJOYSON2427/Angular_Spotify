import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-parcel',
 imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './show-parcel.component.html',
  styleUrl: './show-parcel.component.css'
})
export class ShowParcelComponent {
  isViewMode = false;
 parcelForm!: FormGroup;
  
  constructor(private fb: FormBuilder,

    private route: ActivatedRoute
  ){}

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

     const mode:string = this.route.snapshot.data['mode'];

    this.isViewMode = mode === 'view';
     if (this.isViewMode) {
      this.parcelForm.disable(); // 🔥 makes entire form read-only
    }
  }

    status:string ="Delivered"
  onSubmit(){
  if(this.parcelForm.invalid){
    this.parcelForm.markAllAsTouched();
    return;
  }
}
}
