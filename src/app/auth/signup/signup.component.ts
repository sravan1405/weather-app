import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted: boolean = false;
  user: User;

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    )

    //set default value
    this.signupForm.setValue({
      'name': '',
      'email': '',
      'password': ''
    })
  }
  
  // Getter for easy access to form fields in the template
  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;  // Stop if form is invalid
    }
    this.user = {
      name : this.signupForm.controls['name'].value,
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value
    }
    this.authService.SignUp(this.user);
    this.signupForm.reset();
  }

  login(){
    this.router.navigate(["/signin"]);
  }

}
