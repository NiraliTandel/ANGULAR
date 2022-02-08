import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department, User } from '../../models/user.model';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userData: User[] = [];
  searchText: string = "";
  department: Department[] = [];

  constructor(private service: FormService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
    this.getDepartment();
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

  getDepartment() {
    this.service.getDepartment().subscribe((data) => (this.department = data));
  }

}
