import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user.model';
import { UserResponse } from '../models/user.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  private BASE_URL = 'http://localhost:8081/auth';

  constructor(private http: HttpClient, private router: Router) {}

  signup(data: RegisterUser): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.BASE_URL}/signup`, data);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/login`, { email, password });
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('user');
    this.navigateByUrl('/login');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('tokenExpiration');
    if (!token || !expiration) return false;
    return new Date() < new Date(expiration);
  }
  saveToken(response: LoginResponse) {
    localStorage.setItem('auth_info', JSON.stringify(response));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
navigateByUrl(url:string):void{
  this.router.navigateByUrl(url,{replaceUrl:true});
}
}