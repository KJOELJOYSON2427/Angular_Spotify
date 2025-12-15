import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener,ViewChild } from '@angular/core';
import { ParcelStatusDirective } from "../../directives/parcel-status.directive";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-my-parcels',
  imports: [CommonModule,
    RouterLink,
    ParcelStatusDirective],
  templateUrl: './my-parcels.component.html',
  styleUrl: './my-parcels.component.css'
})
export class MyParcelsComponent {
 
  constructor(private elementRef: ElementRef) {}
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

 
  @ViewChild('profileMenu', { static: true })
  profileMenu!: ElementRef;

   @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

    if (!this.isOpen) return;
 console.log(event.target,"the ");
 
    const clickedInside =
      this.profileMenu.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.isOpen = false;
    }
  }

   @HostListener('document:keydown.escape')
  onEscape() {
    this.isOpen = false;
  }
  closeDropdown() {
  this.isOpen = false;
}

  parcels: {
    from: string;
    to: string;
    weight: string;
    date: string;
    sender: string;
    status: string;
  }[] = [
      {
        from: '101 Pine St, Seattle, WA 98101',
        to: '707 Chestnut St, New York, NY 10001',
        weight: '20 kg',
        date: '2025-01-10',
        sender: 'Jane Doe',
        status: 'Pending'
      },
      {
        from: 'Ontario',
        to: 'Michigan',
        weight: '20 kg',
        date: '2025-01-08',
        sender: 'Jane Doe',
        status: 'Delivered'
      },
      {
        from: 'Ontario',
        to: 'Michigan',
        weight: '20 kg',
        date: '2025-01-05',
        sender: 'Jane Doe',
        status: 'Cancelled'
      }
    ];
}
