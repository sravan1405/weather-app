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
  weatherDataAvailable = false;

  constructor(private _weatherService: WeatherService,) {
  }

  ngOnInit() {
  }
  getWeather() {
    this._weatherService.getWeatherForecast(this.city).subscribe(
      (data) => {
        this.weatherDataAvailable = true;
        console.log(data);
        this.weatherData = data;
      },
      (error) => {
        this.weatherDataAvailable = false;
        alert(error.error.message);
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
