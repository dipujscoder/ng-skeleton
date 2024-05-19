import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginTypes } from '../types';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  login(data: LoginTypes): Observable<any> {
    return this.http.post(
      'https://usedcarsapi.mdndevs.com/api/v1/auth/login',
      data,
      httpOptions
    );
  }

  isAuthenticate() {
    const token = localStorage.getItem('token');

    if (token) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
      this.router.navigateByUrl('/login');
    }
  }

  isLogedIn() {
    this.isAuthenticate();

    return this.isAuthenticated;
  }
}
