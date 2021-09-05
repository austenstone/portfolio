import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.scss']
})
export class SpecialButtonComponent {
  @Input() href: string;
  @Input() img: string;
  @Input() icon: string;
  @Input() text: string;

  constructor() { }

}
