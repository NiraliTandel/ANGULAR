import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
 
  apiLink: string

  constructor(private http:HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  createUser(userData:User):Observable<User>{
    return this.http.post<User>(`${this.apiLink}/forms`,userData);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/forms`);
  }
  
  updateUser(id: number, userData: User): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/forms/${id}`,userData);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.apiLink}/forms/${id}`);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/forms/${id}`);
  }
}
