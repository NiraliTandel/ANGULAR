import { Component, OnInit } from '@angular/core';
import { Users } from '../user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Users[];

  constructor(private userService: UserService) {

    this.users = [
      new Users(
        1,
        "Nirali",
        21,
        "Female"
      )
    ];
  }

  ngOnInit(): void {
    this.userService.saveUser$.subscribe((data) => {
      if (data.id) {
        this.users[this.users.findIndex((user: Users) => user.id === data.id)] = data;
      } else {
        this.addUser(data);
      }
    });
  }

  editUser(data: Users): void {
    this.userService.sendDataToEdit(data);
  }

  getUserById(id: number): Users | undefined {
    return this.users.find((val) => id == val.id);
  }

  addUser(newUsers: Users): void {
    if (this.users.length) {
      newUsers.id = this.users.slice(-1)[0].id + 1;
    } else {
      newUsers.id = 1;
    }
    console.log(this.users);
    this.users.push(newUsers);
  }

  updateUser(id: number, data: Users): void {
    this.users[this.users.findIndex((val) => id == val.id)] = { ...data, id: id };
  }

  deleteUser(id: number): Users[] {
    return this.users.splice(this.users.findIndex((val) => id == val.id), 1);
  }
}
