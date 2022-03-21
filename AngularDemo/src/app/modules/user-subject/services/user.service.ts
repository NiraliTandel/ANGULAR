import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _editUser: Subject<Users>;
  private _editUser$: Observable<Users>;
  public get editUser$(): Observable<Users> {
    return this._editUser$;
  }

  private _saveUser: Subject<Users>;
  private _saveUser$: Observable<Users>;
  public get saveUser$(): Observable<Users> {
    return this._saveUser$;
  }

  constructor() {
    this._editUser = new Subject();
    this._editUser$ = this._editUser.asObservable();
    this._saveUser = new Subject();
    this._saveUser$ = this._saveUser.asObservable();
  }

  sendDataToEdit(data: Users) {
    this._editUser.next(data);
  }

  sendDataToSave(data: Users) {
    this._saveUser.next(data);
  }

}
