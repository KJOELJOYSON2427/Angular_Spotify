import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {
  faUser,
  faPlus,
  faBox,
  faChartLine,
  faTrash,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
@Component({
  selector: 'app-show-users',
  imports: [RouterLink, 
    CommonModule, 
    MatCheckboxModule,
    FontAwesomeModule],
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css'
})
export class ShowUsersComponent {
getTotalParcels(): number {
  return this.users.reduce((sum, user) => sum + user.no_of_parcels, 0);
}

getAvgParcels(): string {
  const avg = this.getTotalParcels() / this.users.length;
  return avg.toFixed(1);
}
 userIcon =faUser
 plus=faPlus
  box =faBox;
 trash=faTrash;
 chart=faChartLine
envelope=faEnvelope
  displayedColumns: string[] = [
    'SI.No.',
   'Name',
   'email',
   'Number_Of_Parcels',
   'Action'
    
  ]



  users = [
  {
    fullName: "Akshay Kanan",
    email: "akshay@hmail.com",
    no_of_parcels: 4
  },
  {
    fullName: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    no_of_parcels: 2
  },
  {
    fullName: "Rajesh Kumar",
    email: "rajesh.k@yahoo.com",
    no_of_parcels: 7
  },
  {
    fullName: "Meera Patel",
    email: "meera.patel@outlook.com",
    no_of_parcels: 1
  },
  {
    fullName: "Vijay Menon",
    email: "vijay.menon@hmail.com",
    no_of_parcels: 5
  },
  {
    fullName: "Anjali Reddy",
    email: "anjali.reddy@gmail.com",
    no_of_parcels: 3
  },
  {
    fullName: "Karthik Krishnan",
    email: "karthik.k@mail.com",
    no_of_parcels: 6
  },
  {
    fullName: "Divya Iyer",
    email: "divya.iyer@hotmail.com",
    no_of_parcels: 2
  },
  {
    fullName: "Arjun Nair",
    email: "arjun.nair@yahoo.in",
    no_of_parcels: 8
  },
  {
    fullName: "Sneha Gupta",
    email: "sneha.g@gmail.com",
    no_of_parcels: 4
  }
]
}
