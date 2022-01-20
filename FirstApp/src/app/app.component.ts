import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome!';
  name = 'Nirali';
  itemImageUrl = '../../assets/beautiful-flower-pictures.jpg';
  data?:string;

  ngOnInit(): void {}

  onClick() {
    console.log('Hello!')
  }
}
