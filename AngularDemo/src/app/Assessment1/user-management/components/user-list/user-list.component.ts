import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, Office, User } from '../../models/user-management.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userData: User[] = [];
  client: Client[] = [];
  office: Office[] = [];
  
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
    this.getClient();
    this.getOffice();
  }

  getClient() {
    this.service.getClient().subscribe((data) => (this.client = data));
  }

  getOffice() {
    this.service.getOffice().subscribe((data) => (this.office = data));
  }

  getUserData() {
    this.service.getUserList().subscribe(
      (result) => {
        this.userData = result;
      },
      (error) => {
        console.log('Something went wrong');
      }
    );
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      () => {
        alert(id + ' is Deleted');
        this.getUserData();
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }

}
