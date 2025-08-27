import { Authservice } from './../Authservice/authservice';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegisterUser } from '../models/register-user.model';
import { UserResponse } from '../models/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  signupObj: RegisterUser = { fullName: '', email: '', password: '' };
  loginObj = { email: '', password: '' };

  constructor(private authService: Authservice, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginObj.email, this.loginObj.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res);
        console.log(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => alert(err.error?.message || 'Login failed'),
    });
  }

  onSignup() {
    this.authService.signup(this.signupObj).subscribe({
      next: (res: UserResponse) => {
        console.log('Signup successful:', res);

        alert('Signup successful! Welcome ' + res.fullName);

        // Redirect to dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Signup error:', err);
        alert(err.error?.message || 'Signup failed');
      },
    });
  }

  isLoggedIn() {
    return localStorage.getItem('bookstore') !== null;
  }
}
