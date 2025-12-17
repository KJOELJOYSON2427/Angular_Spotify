import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ParcelsService } from '../../services/parcel.service';
import { ParcelDashboardRow } from '../../utils/parcel';

@Component({
  selector: 'app-show-all-parcel',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './show-all-parcel.component.html',
  styleUrl: './show-all-parcel.component.css'
})
export class ShowAllParcelComponent implements OnInit {
  icons = faEye;
  edit = faEdit;
  delete = faTrash;

  parcels: ParcelDashboardRow[] = [];
  loading = true;
  error: string | null = null;

  constructor(private parcelService: ParcelsService) {}

  ngOnInit(): void {
    this.loadParcels();
  }

  loadParcels(): void {
    this.loading = true;
    this.error = null;

    this.parcelService.getParcels().subscribe({
      next: (data) => {
        this.parcels = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load parcels. Please try again later.';
        this.loading = false;
        console.error('Error loading parcels:', err);
      }
    });
  }

  // Optional: Add delete functionality later
  onDelete(trackingNumber: string): void {
    if (confirm('Are you sure you want to delete this parcel?')) {
      // Implement delete logic here
      console.log('Delete parcel:', trackingNumber);
      // After deletion success: this.loadParcels();
    }
  }
}