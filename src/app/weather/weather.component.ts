import { Component, OnInit } from '@angular/core';
import { OpenWeather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  fahrenheit = 0;
  weather: OpenWeather;
  weatherThought = 'Not bad...';

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.getWeather$().subscribe((weather) => {
      if (weather) {
        this.weather = weather;
        this.fahrenheit = this.kelvinToFahrenheit(this.weather.main.temp);
        console.log(this.weather.weather[0].description);
        if (this.weather.weather[0].description.includes('cloud')) {
          this.weatherThought = 'Bring out the sun ⛅';
        } else if (this.weather.weather[0].description.includes('storm')) {
          this.weatherThought = 'Batten down the hatches ⚡';
        } else if (this.weather.weather[0].description.includes('rain')) {
          this.weatherThought = 'That\'s Florida for you ☔';
        } else {
          if (this.fahrenheit > 90) {
            this.weatherThought = 'It\'s hot 🔥';
          } else if (this.fahrenheit > 80) {
            this.weatherThought = 'It\'s pretty warm 🌞';
          } else if (this.fahrenheit > 70) {
            this.weatherThought = 'It\'s perfect weather 👌';
          } else if (this.fahrenheit > 65) {
            this.weatherThought = 'It\'s a little chilly for Florida 😮';
          } else {
            this.weatherThought = 'It\'s freezing 🥶';
          }
        }
      }
    });
  }

  kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }

}
