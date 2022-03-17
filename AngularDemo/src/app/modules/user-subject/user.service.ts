import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: Users[];

  genderOptions: string[] = [
    "Male",
    "Female",
    "Other"
  ];

  private _editUser: Subject<Users>;
  private _editUser$: Observable<Users>;
  public get editUser$(): Observable<Users> {
    return this._editUser$;
  }

  constructor() {
    this.data = new Array<Users>();

    this._editUser = new Subject();
    this._editUser$ = this._editUser.asObservable();
  }

  getGenderOptions(): string[] {
    return this.genderOptions;
  }

  getUser(): Users[] {
    return this.data;
  }

  getUserById(id: number): Users | undefined {
    return this.data.find((val) => id == val.id);
  }

  addUser(newUser: Users): boolean {
    if (this.data.length) {
      newUser.id = this.data.slice(-1)[0].id + 1;
    } else {
      newUser.id = 1;
    }
    try {
      this.data.push(newUser);
      return true;
    }
    catch (err) {
      console.log('Error: ', err);
      return false;
    }
  }

  sendDataToEdit(data: Users) {
    this._editUser.next(data);
  }

  updateUser(id: number, data: Users): boolean {
    try {
      this.data[this.data.findIndex((val) => id == val.id)] = { ...this.getUserById(id), ...data };
      return true;
    }
    catch (err) {
      console.log('Error: ', err);
      return false;
    }
  }

  deleteUser(id: number): Users[] {
    return this.data.splice(this.data.findIndex((val) => id == val.id), 1);
  }
}
