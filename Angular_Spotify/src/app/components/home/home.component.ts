import { Component, OnInit } from '@angular/core';
import { FooterOrSidebarComponent } from "../footer-or-sidebar/footer-or-sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FooterOrSidebarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
  
  }
    

  greeting = '';


 // Quick playlist grid data
  quickPlaylists = [
    { title: "Today's Top Hits", image: 'assets/tophits.jpg' },
    { title: "Dope Labs", image: 'assets/dope.jpg' },
    { title: "Chill Hits", image: 'assets/chill.jpg' },
    { title: "Latina to Latina", image: 'assets/latina.jpg' },
    { title: "Alan Gogoll", image: 'assets/alangogoll.jpg' },
    { title: "Small Doses with Amanda Seales", image: 'assets/smalldoses.jpg' },
  ];



   madeForYou = [
    {
      title: 'On Repeat',
      subtitle: 'Songs you can’t get enough of.',
      image: 'assets/onrepeat.jpg'
    },
    {
      title: 'Your Discover Weekly',
      subtitle: 'Your weekly mixtape of fresh music.',
      image: 'assets/discover.jpg'
    },
    {
      title: 'Mix 1',
      subtitle: 'Personalized playlist for you.',
      image: 'assets/mix1.jpg'
    }
  ];
}
