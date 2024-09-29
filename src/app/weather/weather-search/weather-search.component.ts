import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemperatureConverterPipe } from '../../shared/pipes/temperature-converter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../../auth/auth-guard.service';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [FormsModule,CommonModule, TemperatureConverterPipe, HttpClientModule],
  templateUrl: './weather-search.component.html',
  styleUrl: './weather-search.component.scss',
  providers: [WeatherService, AuthGuardService]
})
export class WeatherSearchComponent implements OnInit {

  city: string = '';
  weatherData: any;

  constructor(private _weatherService: WeatherService,) {
  }

  ngOnInit() {
  }
  getWeather() {
    this._weatherService.getWeatherForecast(this.city).subscribe(
      (data) => {
        console.log(data);
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
