import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyFile } from './file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getFile(): Observable<MyFile[]> {
    return this.http.get<MyFile[]>(`${this.apiLink}/files`)
  }

  addFile(file: MyFile): Observable<MyFile> {
    return this.http.post<MyFile>(`${this.apiLink}/files`, file)
  }

  deleteFile(id: number): any {
    return this.http.delete<any>(`${this.apiLink}/files/${id}`);
  }

}
