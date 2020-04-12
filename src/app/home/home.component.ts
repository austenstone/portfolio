import { WeatherService } from './../weather.service';
import { OpenWeather } from '../weather';
import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fahrenheit = 0;
  weather: OpenWeather;

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

    this.weatherService.getWeather().subscribe((weather) => {
      this.weather = weather;
      this.fahrenheit = this.kelvinToFahrenheit(this.weather.main.temp);
    });
  }

  kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }

}
