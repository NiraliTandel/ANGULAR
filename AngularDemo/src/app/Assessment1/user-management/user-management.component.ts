import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Client, Office, User } from './models/user-management.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  public user: FormGroup;
  public userData: User[];
  public clientData: Client[];
  public officeData: Office[];
  public editUser: User;

  constructor(private service: UserService) {
    this.getClientList();
    this.getOfficeList();
    this.getUserData();
  }

  ngOnInit(): void { }

  getClientList() {
    this.service.getClient().subscribe(
      (result) => {
        this.clientData = result;
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  getOfficeList() {
    this.service.getOffice().subscribe(
      (result: Office[]) => {
        this.officeData = result;
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  saveData(userForm: User) {
    if (userForm.id !== null) {
      this.service.updateUser(userForm.id, userForm).subscribe(
        (result) => {
          alert('Data Updated Successfully');
          this.getUserData()
        }
      )
    }
    else {
      this.service.createUser(userForm).subscribe(
        (result) => {
          alert('Data Saved Successfully');
          this.getUserData()
        },
        (error) => {
          alert('Something Went Wrong');
        }
      );
    }
  }

  updateUser(id: number) {
    this.service.getById(id).subscribe(
      (result) => {
        this.editUser = result;
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  getUserData() {
    this.service.getUserList().subscribe(
      (result) => {
        this.userData = result;
      },
      (error) => {
        console.log('Something Went Wrong');
      }
    );
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      (result) => {
        alert(id + ' is Deleted');
        this.getUserData();
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

}
