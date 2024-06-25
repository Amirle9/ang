import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  signup() {
    this.authService.signup(this.user).subscribe(
      response => {
        console.log('Signup successful', response);
      },
      error => {
        console.error('Signup failed', error);
      }
    );
  }
}
