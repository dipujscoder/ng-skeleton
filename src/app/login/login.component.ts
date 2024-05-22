import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [NgFor, ReactiveFormsModule, JsonPipe, FormsModule, CommonModule],
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted: boolean = false;
  errorMessage: any = {};
  isLoggedIn = false;
  isLoading = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.authService.login(this.form.value).subscribe({
        next: (data) => {
          // localStorage.setItem('token', data.token);
          // localStorage.setItem('permissions', data.permissions);

          this.isLoading = false;

          this.router.navigateByUrl('');
          this.authService.isAuthenticate();
        },
        error: (err) => {
          let errors: any = {};

          err.error.errors.map((e: any) => {
            console.log('err.error.errors', e);

            Object.keys(e).map((f: any) => {
              errors[`${f}`] = e[`${f}`][0];
            });
          });

          this.errorMessage = errors;
        },
      });
    } else {
      let errors: any = {};

      const controls = this.form.controls;

      Object.keys(controls).map((e: any) => {
        errors[`${e}`] = `${e} is required!`;
      });

      this.errorMessage = errors;
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['sa@mdndevs.com'],
      password: ['abc@123'],
    });

    // If Token Available
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl('');
    }
  }
}

// sa@mdndevs.com
// abc@123
