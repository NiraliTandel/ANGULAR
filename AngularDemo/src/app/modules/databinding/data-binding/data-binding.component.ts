import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  title = 'Welcome!';
  name = 'Nirali';
  itemImageUrl = '../assets/images/beautiful-flower-pictures.jpg';
  data:string="";

  ngOnInit(): void {}

  onClick() {
    console.log('Hello!')
  }
}
