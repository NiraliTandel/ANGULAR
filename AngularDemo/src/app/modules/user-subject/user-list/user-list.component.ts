import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Users[];
  genderOptions: string[];

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.users = new Array<Users>();
    this.genderOptions = new Array<string>();
  }

  ngOnInit(): void {
    this.users = this.userService.getUser();
    this.genderOptions = this.userService.getGenderOptions();
  }

  editUser(data: Users): void {
    this.userService.sendDataToEdit(data);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }

  detailTrack(index: number, detail: Users) {
    return detail.id;
  }

}
