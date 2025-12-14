import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParcelStatusDirective } from "../../directives/parcel-status.directive";
@Component({
  selector: 'app-my-parcels',
  imports: [CommonModule,
    ParcelStatusDirective],
  templateUrl: './my-parcels.component.html',
  styleUrl: './my-parcels.component.css'
})
export class MyParcelsComponent {

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
