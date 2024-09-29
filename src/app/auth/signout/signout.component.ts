import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signout',
  standalone: true,
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
  providers: [AuthService],
  imports: [FormsModule, CommonModule],
})
export class SignoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  OnSignOut() {
    console.log('Sign Out');
    this.authService.SignOut();
  }

}
