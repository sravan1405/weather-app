import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { openWeatherMapConfig } from '../../config';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {
  }

  getWeatheritemsbyCity(cityName: string): Observable<any> {
    return this.http.get(
      openWeatherMapConfig.baseUrl +
      'weather?q=' + cityName +
      '&appid=' + openWeatherMapConfig.appId +
      '&units=' + openWeatherMapConfig.units
    )
  }

  getWeatherForecast(cityName: string): Observable<any> {
    return this.http.get(
      openWeatherMapConfig.baseUrl +
      'forecast?q=' + cityName +
      '&appid=' + openWeatherMapConfig.appId +
      '&units=' + openWeatherMapConfig.units
    )
  }
}
