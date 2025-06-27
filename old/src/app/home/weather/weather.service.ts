import { OpenWeather } from '../../weather';
import { tap } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: OpenWeather;
  weather$: BehaviorSubject<OpenWeather> = new BehaviorSubject(null);
  OPEN_WEATHER_APP_ID = 'ff89e06fe8436ab85a00774b6af92d87';
  COUNTRY = 'us';
  ZIP_CODE = 33487;

  constructor(private http: HttpClient) {
    this._get_weather().subscribe((weather) => {
      this.weather = weather;
      this.weather$.next(this.weather);
    });
    interval(60000).subscribe(() => this._get_weather().subscribe((weather) => {
      this.weather = weather;
      this.weather$.next(this.weather);
    }));
  }

  getWeather() {
    return this.weather;
  }

  getWeather$() {
    return this.weather$.asObservable();
  }

  private _get_weather() {
    return this.http.get<OpenWeather>(
      `https://api.openweathermap.org/data/2.5/weather?zip=${this.ZIP_CODE},${this.COUNTRY}&APPID=${this.OPEN_WEATHER_APP_ID}`
    );
  }
}
