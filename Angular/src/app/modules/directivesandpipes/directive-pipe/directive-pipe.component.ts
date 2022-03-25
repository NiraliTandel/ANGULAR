import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-pipe',
  templateUrl: './directive-pipe.component.html',
  styleUrls: ['./directive-pipe.component.scss']
})
export class DirectivePipeComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  index: string = "";
  currentDate = new Date();
  
  constructor() {

  }

  ngOnInit(): void {
      
  }

  listData = [{
    id: 1,
    name: "Nirali Tandel",
    email: "nirali@gmail.com",
    salary: 8000,
    currencycode: "INR"
  },
  {
    id: 2,
    name: "Mrunal Patel",
    email: "mrunal@gmail.com",
    salary: 8000,
    currencycode: "AMD"
  },
  {
    id: 3,
    name: "Ayushi Parmar",
    email: "ayushi@gmail.com",
    salary: 8000,
    currencycode: "AUD"
  },
  {
    id: 4,
    name: "Shreya Patel",
    email: "shreya@gmail.com",
    salary: 8000,
    currencycode: "CAD"
  },
  {
    id: 5,
    name: "Viral Patel",
    email: "viral@gmail.com",
    salary: 8000,
    currencycode: "BDT"
  },
  {
    id: 6,
    name: "Sushil Hariakar",
    email: "sushil@gmail.com",
    salary: 8000,
    currencycode: "EUR"
  },
  {
    id: 7,
    name: "Pooja Manvani",
    email: "pooja@gmail.com",
    salary: 8000,
    currencycode: "HKD"
  },
  {
    id: 8,
    name: "Tanmay Patel",
    email: "tanmay@gmail.com",
    salary: 8000,
    currencycode: "JPY"
  },
  {
    id: 9,
    name: "Chirag Patel",
    email: "chirag@gmail.com",
    salary: 8000,
    currencycode: "ITL"
  },
  {
    id: 10,
    name: "Abhishek Patel",
    email: "abhishek@gmail.com",
    salary: 8000,
    currencycode: "LKR"
  }];

  indexClick(i: number) {
    alert(this.listData[i].email + this.index);
  }
  trackByid(index: number, listData: any) {
    return listData.id;
  }
}
