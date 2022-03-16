import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from './mentor.model';

@Injectable()

export class MentorService {

  constructor(
    private http: HttpClient
  ) { }

  public getMentor(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>('http://localhost:3000/mentors');
  }

  public getMentorById(id: string): Observable<Mentor> {
    return this.http.get<Mentor>(`http://localhost:3000/mentors/${id}`);
  }

  public deleteMentor(id: number): any {
    return this.http.delete<any>(`http://localhost:3000/mentors/${id}`);
  }

  public addMentor(form: any): any {
    return this.http.post<any>(`http://localhost:3000/mentors`, form)
  }

  public editMentor(form: any, id: string): any {
    return this.http.put<any>(`http://localhost:3000/mentors/${id}`, form)
  }

}
