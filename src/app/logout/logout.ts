import { Component } from '@angular/core';
import { Authservice } from '../Authservice/authservice';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {
  constructor(private authService:Authservice){}

  onLogout() {
    try {
      this.authService.logout();
      console.log('Logged out successfully');
    } catch (err) {
      console.error('Logout error:', err);
      alert('Logout failed');
    }
  }
  }
