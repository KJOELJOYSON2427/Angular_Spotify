import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { BACKEND_URL } from '../app/app.config';
import { ParcelCreateRequest } from '../utils/createParcelRequest';
import { catchError, map, Observable, tap } from 'rxjs';
import { handleError } from '../error/handleError';
import { Parcel, ParcelDashboardRow } from '../utils/parcel';
type SuccessResponse = string;
@Injectable({
  providedIn: 'root'
})
export class ParcelsService {

  constructor(@Inject(BACKEND_URL) apiUrl: string) { 
     this.apiUrl = apiUrl;
     console.log('DataService initialized with URL:', this.apiUrl);
  }

  private apiUrl: string;
  private http = inject(HttpClient);


  public createParcel(createParcel: ParcelCreateRequest):Observable<SuccessResponse>{
    console.log(createParcel);
    
    const url = `${this.apiUrl}/parcel/`;
    return this.http.post<string>(
      url,
      createParcel,
      {responseType : 'text' as 'json'}
    )
    .pipe(
      catchError(handleError)
    );
  }


  public getParcels(): Observable<ParcelDashboardRow[]> {
  const url = `${this.apiUrl}/parcel/`;

  // 1. Tell HttpClient to expect an array of the base Parcel type
  return this.http.get<Parcel[]>(url).pipe(
    map((parcels: Parcel[]) => 
      parcels.map((p): ParcelDashboardRow => ({
        // Mapping backend fields to your specific UI type
        cost: p.cost,
        trackingNumber: p.trackingNumber?.toString() || '', // Ensure it's a string for routerLink
        note: p.note || 'No instructions',
        sendername: p.senderName,
        from: p.senderAddress,
        to: p.recieverAddress,
        recipientname: p.recieverName, // Note: lowercase 'n' to match your HTML
        select: false,
        actions: 'view'
      }))
    )
  );
}
}
