import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;
  private readonly tokenKey = 'auth_token';
  private readonly userKey = 'auth_user';

constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUSER(): string | null {
    return localStorage.getItem(this.userKey);
  }

  getAvalibility(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/poojari/availability`)
  }

  patchAvalibility(body: any){
    return this.http.patch<any>(`${this.apiUrl}/poojari/availability`, body)
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/usersData`)
  }
}
