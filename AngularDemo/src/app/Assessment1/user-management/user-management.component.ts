import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userbtn: boolean = false;
  
  constructor() { }

  ngOnInit(): void { }

  togglebtn() {
    this.userbtn = !this.userbtn;
  }

}
