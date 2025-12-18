import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserRequest } from '../utils/create-user-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  private baseUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  registerUser(payload: CreateUserRequest): Observable<any> {

    return this.http.post(`${this.baseUrl}/auth/register`, payload);
  }



  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/`);
  }
}
