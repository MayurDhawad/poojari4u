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
    return this.http
      .get<any>(`${this.apiUrl}/poojari/availability`)
      .pipe(
        tap(response => this.saveSession(response))
      ); 
  }

  private saveSession(response: any): void {
      if (!response.success) {
        throw new Error('Authentication response is invalid.');
      }
  
      localStorage.setItem(this.tokenKey, response.token);
      localStorage.setItem(
        this.userKey,
        JSON.stringify(response.user)
      );
    }

}
