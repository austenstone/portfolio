import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

const ets = (emoji) => {
  let emojiHex = '';
  if (emoji.length === 2) {
    emojiHex = emoji;
  } else {
    let comp = (
      (emoji.charCodeAt(0) - 0xD800) * 0x400
      + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
    );
    if (comp < 0) {
      emojiHex = emoji;
    }
    emojiHex = emoji;
    return `&#x${emojiHex.codePointAt(0).toString(16)};&#x${emojiHex.codePointAt(2).toString(16)};&#x${emojiHex.codePointAt(3).toString(16)};`
  }
  return `&#x${emojiHex.codePointAt(0).toString(16)};`
};
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
        `Solutions Engineer `,
        `Solutions Engineer ${ets('🚀')}`,
        `Software Engineer ${ets('👨‍💻')}`,
        `Developer &amp; UI/UX Creator ${ets('🔨')}`,
        `App Creator ${ets('🔨')}`,
        `App Designer 🎨`,
        `Internet Of Things Maker ${ets('🔧')}`,
        `Internet Of Things Connector ${ets('🌐')}`,
        `Angular Developer`,
        `Angular Dev`,
        `Web Developer`
      ],
      typeSpeed: 50,
      backSpeed: 40,
      smartBackspace: true,
      loop: true,
      startDelay: 200
    });
  }

}
