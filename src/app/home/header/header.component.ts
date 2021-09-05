import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
  }

}
