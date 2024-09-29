import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemperatureConverterPipe } from './shared/pipes/temperature-converter.pipe';
import { AuthGuardService } from './auth/auth-guard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FormsModule, TemperatureConverterPipe, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AuthGuardService]
})
export class AppComponent {
  title = 'weather-app';
}
