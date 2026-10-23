import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoojariDashboardService {

  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;
  private readonly tokenKey = 'auth_token';
  private readonly userKey = 'auth_user';

constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getAvalibility(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/poojari/availability`)
  }

  patchAvalibility(body: any){
    return this.http.patch<any>(`${this.apiUrl}/poojari/availability`, body)
  }

  getProfileData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/poojari/profiledata`)
  }
}
