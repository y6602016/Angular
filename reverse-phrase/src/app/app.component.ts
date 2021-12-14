import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  reversedText = '';

  onInputText(value: string) {
    this.text = value;
  }

  onClickReverse() {
    // here this.reversedText is an expression (assigned a value)
    // it will be ouputed in the HTML by interpolated
    this.reversedText = this.text.split('').reverse().join('');
  }
}
