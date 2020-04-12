import { OpenWeather } from './weather';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: OpenWeather;
  OPEN_WEATHER_APP_ID = 'ff89e06fe8436ab85a00774b6af92d87';
  COUNTRY = 'us';
  ZIP_CODE = 33414;

  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get<OpenWeather>(
      'https://api.openweathermap.org/data/2.5/weather?zip=' +
        this.ZIP_CODE +
        ',' +
        this.COUNTRY +
        '&APPID=' +
        this.OPEN_WEATHER_APP_ID
    ).pipe(
      tap((weather) => this.weather = weather)
    );
  }

  getBeer() {
    // 237988287f6a1b421875a73373d4a6a0
    return this.http.get<any>('https://sandbox-api.brewerydb.com/v2/beer/random/?key=237988287f6a1b421875a73373d4a6a0');
  }
}
