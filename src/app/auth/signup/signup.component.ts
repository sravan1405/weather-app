import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm!: FormGroup;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    )

    //set default value
    this.signupForm.setValue({
      'name': 'Aman',
      'email': 'aman.patial@gmail.com2',
      'password': 'AmanPatial'
    })
  }
  onSubmit() {
    this.submitted = true;
    console.log('After submit', this.signupForm);
    console.log('Values', this.signupForm.value);
    //this.signupForm.reset();
  }

}
