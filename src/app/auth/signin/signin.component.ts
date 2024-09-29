import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log('Sign in', email, password);
    this.authService.SignIn(email, password);
  }

  OnSignUp(){
    this.router.navigate(["/signup"]);
  }

}
