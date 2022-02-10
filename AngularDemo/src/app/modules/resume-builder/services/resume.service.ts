import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resume } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
   }

   getData(id: number): Observable<Resume> {
     return this.http.get<Resume>(`${this.apiLink}/resume/${id}`);
   }

   saveData(data: Resume): Observable<Resume> {
    return this.http.post<Resume>(`${this.apiLink}/resume`,data);
  }

   deleteData(id:number): Observable<number> {
     return this.http.delete<number>(`${this.apiLink}/resume/${id}`);
   }
}
