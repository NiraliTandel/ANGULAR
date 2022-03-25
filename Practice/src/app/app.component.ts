import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practice';

  enterName:string;
  parentData:string;
  value: string;

  TansferData() {
    this.parentData = this.enterName;
  }

  sendData(value: string) {
    this.value = value;
  }
} 
