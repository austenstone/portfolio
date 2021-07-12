import { WeatherService } from './../weather.service';
import { OpenWeather } from '../weather';
import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fahrenheit = 0;
  weather: OpenWeather;
  weatherThought = 'Not bad...';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    const typed = new Typed.default('.skills', {
      strings: [
        'Developer &amp; UI/UX Creator',
        'Developer &amp; Designer',
        'C/C++ Developer',
        'App Creator',
        'App Designer',
        'Internet Of Things Developer',
        'Internet Of Things Maker',
        'Angular Developer',
        'Angular Dev',
        'Web Developer'
      ],
      typeSpeed: 50,
      backSpeed: 40,
      smartBackspace: true,
      loop: true,
      startDelay: 200
    });

    this.weatherService.getWeather$().subscribe((weather) => {
      if (weather) {
        this.weather = weather;
        this.fahrenheit = this.kelvinToFahrenheit(this.weather.main.temp);
        if (this.weather.weather[0].description.includes('storm')) {
          this.weatherThought = 'Batten down the hatches';
        } else if (this.weather.weather[0].description.includes('rain')) {
          this.weatherThought = 'That\'s Florida for you';
        } else {
          if (this.fahrenheit > 90) {
            this.weatherThought = 'It\'s hot';
          } else if (this.fahrenheit > 80) {
            this.weatherThought = 'It\'s pretty warm';
          } else if (this.fahrenheit > 70) {
            this.weatherThought = 'It\'s perfect weather';
          }  else if (this.fahrenheit > 65) {
            this.weatherThought = 'It\'s a little chilly for Florida';
          } else {
            this.weatherThought = 'It\'s freezing';
          }
        }
      }
    });
  }

  kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }

}
