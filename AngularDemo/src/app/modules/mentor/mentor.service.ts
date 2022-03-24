import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, Mentor, Office } from './mentor.model';

@Injectable()

export class MentorService {

  apiLink: string

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  public getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  public getOffice(): Observable<Office[]> {
    return this.http.get<Office[]>(`${this.apiLink}/office`);
  }

  public getMentor(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.apiLink}/mentors`);
  }

  public getMentorById(id: string): Observable<Mentor> {
    return this.http.get<Mentor>(`${this.apiLink}/mentors/${id}`);
  }

  public deleteMentor(id: number): any {
    return this.http.delete<any>(`${this.apiLink}/mentors/${id}`);
  }

  public addMentor(form: any): any {
    return this.http.post<any>(`${this.apiLink}/mentors`, form)
  }

  public editMentor(form: any, id: string): any {
    return this.http.put<any>(`${this.apiLink}/mentors/${id}`, form)
  }

}
