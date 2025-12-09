import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { from, map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private clientId: string = environment.clientId;
  private clientSecret: string = environment.clientSecret;
  private token: string = '';
  private apiUrl ="https://api.spotify.com/v1"
  constructor(private http: HttpClient) {}

  /** 🔹 Fetch Access Token before API Calls */
  private getAccessToken() {
    if (this.token) {
      // if token already exists, reuse it
      return from(Promise.resolve(this.token));
    }

    const url = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
    });
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      tap((res) => {
        this.token = res.access_token;
        console.log('✅ Spotify token fetched:', this.token);
      }),
      map((res) => res.access_token)
    );
  }

  /** 🔹 Get Featured Playlists */
  getPopularPlaylists() {
    return this.getAccessToken().pipe(
      switchMap((token) => {
        const url = `https://api.spotify.com/v1/browse/featured-playlists?country=IN&limit=10`;
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + token,
        });
        return this.http.get<any>(url, { headers }).pipe(
          tap((res) => console.log('🎧 Featured playlists:', res)),
          map((res) => res.playlists.items)
        );
      })
    );
  }

  /** 🔹 Get New Releases (Hot Songs) */
  getAlbums() {
    return this.getAccessToken().pipe(
      switchMap((token) => {
        const url = `https://api.spotify.com/v1/browse/new-releases?country=IN&limit=10`;
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + token,
        });
        return this.http.get<any>(url, { headers }).pipe(
          tap((res) => console.log('🔥 New Releases:', res)),
          map((res) => res.albums.items)
        );
      })
    );
  }

  getPopularGlobal50Songs(){
    return  this.getAccessToken().pipe(
      switchMap((token: string) => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
       
      return this.http.get<any>(
         `${this.apiUrl}/playlists/3cEYpjA9oz9GiPac4AsH4n`,
         {
          headers
         }
      )
      })
    )
  }
}
