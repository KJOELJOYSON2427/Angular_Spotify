import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-show-all-parcel',
  imports: [RouterLink, MatTable,
    CommonModule
  ],
  templateUrl: './show-all-parcel.component.html',
  styleUrl: './show-all-parcel.component.css'
})
export class ShowAllParcelComponent {


  displayedColumns: string[] = [
    'select',
    'from',
    'to',
    'sendername',
    'recipientname',
    'cost',
    'note',
    'edit',
    'delete'
  ]
}
