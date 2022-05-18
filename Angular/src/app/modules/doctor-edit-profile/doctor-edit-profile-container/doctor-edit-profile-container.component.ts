import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor-edit-profile.model';
import { DoctorEditProfileService } from '../doctor-edit-profile.service';

@Component({
  selector: 'app-doctor-edit-profile-container',
  templateUrl: './doctor-edit-profile-container.component.html',
  styleUrls: ['./doctor-edit-profile-container.component.scss']
})
export class DoctorEditProfileContainerComponent implements OnInit {
  public profileData$: Observable<any>;

  constructor(private _doctorEditProfileService: DoctorEditProfileService) { }

  ngOnInit(): void {
    this.profileData$ = this._doctorEditProfileService.getProfileData();
  }

  editPirofile(data: Doctor) {
    this._doctorEditProfileService.editProfileData(data).subscribe((res) => {
      // console.log('con', res);
      // show toastr
    });
  }
}
