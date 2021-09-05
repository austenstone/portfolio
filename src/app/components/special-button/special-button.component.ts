import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.css']
})
export class SpecialButtonComponent implements OnInit {
  @Input() href: string;
  @Input() img: string;
  @Input() icon: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
