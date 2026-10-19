import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface AuthUser {
  role: (roleId: import("../../features/auth/login/login.component").UserRole) => void;
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  expiresIn: string;
  user: AuthUser;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private readonly apiUrl = environment.apiUrl;
  private readonly tokenKey = 'auth_token';
  private readonly userKey = 'auth_user';

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/login`, data)
      .pipe(
        tap(response => this.saveSession(response))
      );
  }

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/register`, data)
      .pipe(
        tap(response => this.saveSession(response))
      );
  }

  private saveSession(response: AuthResponse): void {
    if (!response.success || !response.token) {
      throw new Error('Authentication response is invalid.');
    }

    localStorage.setItem(this.tokenKey, response.token);
    localStorage.setItem(
      this.userKey,
      JSON.stringify(response.user)
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): AuthUser | null {
    const value = localStorage.getItem(this.userKey);

    if (!value) {
      return null;
    }

    try {
      return JSON.parse(value) as AuthUser;
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): Observable<{ success: boolean; message: string }> {
    const token = this.getToken();

    if (!token) {
      this.clearSession();
      return new Observable(subscriber => {
        subscriber.next({
          success: true,
          message: 'Logged out successfully.'
        });
        subscriber.complete();
      });
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http
      .post<{ success: boolean; message: string }>(
        `${this.apiUrl}/auth/logout`,
        {},
        { headers }
      )
      .pipe(
        tap(() => this.clearSession())
      );
  }

  clearSession(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}