import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Office, User } from '../models/user-management.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink: string

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiLink}/client`);
  }

  getOffice(): Observable<Office[]> {
    return this.http.get<Office[]>(`${this.apiLink}/office`);
  }

  createUser(userData: User): Observable<User> {
    return this.http.post<User>(`${this.apiLink}/users`, userData);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/users`);
  }

  updateUser(id: number, userData: User): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/users/${id}`, userData);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.apiLink}/users/${id}`);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/users/${id}`);
  }

}
