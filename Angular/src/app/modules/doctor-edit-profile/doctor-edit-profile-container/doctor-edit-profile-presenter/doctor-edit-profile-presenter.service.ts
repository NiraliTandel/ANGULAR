import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DoctorEditProfilePresenterService {

  constructor(private _fb : FormBuilder) { }

  buildForm() {
    return this._fb.group({
      specialization: [null],
      gender: [null],
      photo: [null],
      doctorDegree: [null],
      dateOfEstablishment: this._fb.control({ value: null, disabled: true }),
      emailId: this._fb.control({ value: null, disabled: true }),
      firstName: this._fb.control({ value: null, disabled: true }),
      id: this._fb.control({ value: null, disabled: true }),
      instituteCertificate: this._fb.control({ value: null, disabled: true }),
      instituteName: this._fb.control({ value: null, disabled: true }),
      lastName: this._fb.control({ value: null, disabled: true }),
      mobileNo: this._fb.control({ value: null, disabled: true }),
    });
  }
}
