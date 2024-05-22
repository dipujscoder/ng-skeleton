import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginTypes } from '../types';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  public isAuthenticated: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  login(data: LoginTypes): Observable<any> {
    return this.http
      .post(
        'https://usedcarsapi.mdndevs.com/api/v1/auth/login',
        data,
        httpOptions
      )
      .pipe(
        tap((response: any) => {
          this.tokenSubject.next(response?.token);
          localStorage.setItem('token', response.token);
          localStorage.setItem('permissions', response.permissions);
        })
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

  getToken() {
    return localStorage.getItem('token');
  }
}
