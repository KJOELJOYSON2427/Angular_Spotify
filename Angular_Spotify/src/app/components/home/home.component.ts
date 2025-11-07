import { Component, OnInit } from '@angular/core';
import { FooterOrSidebarComponent } from "../footer-or-sidebar/footer-or-sidebar.component";
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../../../core/services/spotify.service';

@Component({
  selector: 'app-home',
  imports: [FooterOrSidebarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private spotify: SpotifyService) {}
  ngOnInit(): void {
  
    this.setGreeting();
    
     
  }
  setGreeting() {
    const hour= new Date().getHours();
    if(hour<12) this.greeting = 'Good morning';
    else if(hour<18) this.greeting ='Good afternoon';
    else this.greeting = 'Good evening';
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


  popularPlaylists = [
    {  title: "Feelin' Good",
       subtitle: 'Vibes to make your day better.', 
       image: 'assets/feelin_good.jpg'
       },
    {
       title: 'Pumped Pop', 
       subtitle: 'Energetic hits all day.', 
       image: 'assets/pumped_pop.jpg'
       },
    { 
      title: 'Chill Mix', 
      subtitle: 'Relax with smooth sounds.',
       image: 'assets/chill_mix.jpg' 
      },
  ];

   hotSongs = [
    { title: 'Heat Waves', subtitle: 'Glass Animals', image: 'assets/heat_waves.jpg' },
    { title: 'Stay', subtitle: 'The Kid LAROI, Justin Bieber', image: 'assets/stay.jpg' },
    { title: 'Blinding Lights', subtitle: 'The Weeknd', image: 'assets/blinding_lights.jpg' },
  ];

  hollywoodBlockbusters = [
    { title: 'Interstellar OST', subtitle: 'Hans Zimmer', image: 'assets/interstellar.jpg' },
    { title: 'Inception OST', subtitle: 'Time - Hans Zimmer', image: 'assets/inception.jpg' },
    { title: 'The Dark Knight', subtitle: 'Epic Themes', image: 'assets/dark_knight.jpg' },
  ];
}
