import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {
  faEye,
  faEdit,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
@Component({
  selector: 'app-show-all-parcel',
  imports: [RouterLink, 
    CommonModule, 
    MatCheckboxModule,
    FontAwesomeModule
  
   ],
  templateUrl: './show-all-parcel.component.html',
  styleUrl: './show-all-parcel.component.css'
})
export class ShowAllParcelComponent {
  
 icons =faEye
 edit=faEdit
 delete=faTrash

  displayedColumns: string[] = [
    'select',
    'from',
    'to',
    'trackingNumber',
    'sendername',
    'recipientname',
    'cost',
    'note',
    
  ]



  parcels = [
    {
      select: false,
      from: 'New York, USA',
      to: 'London, UK',
      trackingNumber:"Tbvchjbc",
      sendername: 'John Doe',
      recipientname: 'Emma Wilson',
      cost: 1250.00,
      note: 'Business documents - urgent delivery'
    },
    {
      select: false,
      from: 'Tokyo, Japan',
      to: 'Sydney, Australia',
      trackingNumber:"Tbvchjbc",
      sendername: 'Akira Tanaka',
      recipientname: 'Sarah Johnson',
      cost: 890.50,
      note: 'Electronics parts'
    },
    {
      select: false,
      from: 'Berlin, Germany',
      to: 'Paris, France',
      trackingNumber:"Tbvchjbc",
      sendername: 'Hans Müller',
      recipientname: 'Marie Dubois',
      cost: 320.00,
      note: 'Gift package - birthday'
    },
    {
      select: false,
      from: 'Mumbai, India',
      to: 'Dubai, UAE',
      trackingNumber:"Tbvchjbc",
      sendername: 'Priya Sharma',
      recipientname: 'Ahmed Al-Mansoori',
      cost: 560.75,
      note: 'Textile samples'
    },
    {
      select: false,
      from: 'São Paulo, Brazil',
      to: 'Miami, USA',
      trackingNumber:"Tbvchjbc",
      sendername: 'Carlos Silva',
      recipientname: 'Michael Chen',
      cost: 1420.00,
      note: 'Machinery spare parts - express'
    },
    {
      select: false,
      from: 'Toronto, Canada',
      to: 'Vancouver, Canada',
      trackingNumber:"Tbvchjbc",
      sendername: 'Lisa Wong',
      recipientname: 'David Thompson',
      cost: 180.00,
      note: 'Legal documents'
    }
  ];

  

}
