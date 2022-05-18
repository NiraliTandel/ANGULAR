import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorEditProfileService {

  constructor(private http: HttpClient) { }
  
  getProfileData() {
    return this.http.get<any>('http://localhost:3000/profile/1');
  }
  editProfileData(newData: any) {
    console.log(newData);
    return this.http.get<any>('http://localhost:3000/profile/1');
    return this.http.put<any>('http://localhost:3000/profile/1', newData);
  }
}
