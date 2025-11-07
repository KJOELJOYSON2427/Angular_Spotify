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
  constructor(private spotifyService: SpotifyService) {}
  ngOnInit(): void {
    

    this.spotifyService.getPopularPlaylists().subscribe({
    next: (playlists) => {
      this.popularPlaylists = playlists;
      console.log(playlists);
    },
    error: (err) => console.error('Playlist error:', err)
  });

  this.spotifyService.getHotSongs().subscribe({
    next: (songs) => {
      this.hotSongs = songs;
      console.log(songs);
    },
    error: (err) => console.error('Hot songs error:', err)
  });
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


  popularPlaylists:any[] = []

   hotSongs: any[] =[]

  hollywoodBlockbusters = [
    { title: 'Interstellar OST', subtitle: 'Hans Zimmer', image: 'assets/interstellar.jpg' },
    { title: 'Inception OST', subtitle: 'Time - Hans Zimmer', image: 'assets/inception.jpg' },
    { title: 'The Dark Knight', subtitle: 'Epic Themes', image: 'assets/dark_knight.jpg' },
  ];
}
