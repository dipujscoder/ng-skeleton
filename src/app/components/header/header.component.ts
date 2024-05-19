import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  login: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // If Token Available
    const token = localStorage.getItem('token');
    if (token) {
      this.login = true;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    window.location.href = '/login';
  }
}
