import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  redirectUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/auth';

  loginUser(payload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      payload,
      { withCredentials: true }
    );
  }
}
