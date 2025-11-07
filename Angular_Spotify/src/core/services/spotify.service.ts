import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private clientId:string=environment.clientId;
  private clientSecret:string=environment.clientSecret;
  private token: string = '';
  constructor( private http: HttpClient) {
   this.getAccessToken()
   }


   private getAccessToken(){
    const url='https://accounts.spotify.com/api/token'

    const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    })
      const body='grant_type=client_credentials'
        
      this.http.post<any>(url, body, {headers}).subscribe({
        next:(res)=>{
         this.token = res.access_token;
         console.log('Spotify token fetched', this.token);
        },
        error:(err)=>console.error('Token fetch error:', err)
      })
   }

}
