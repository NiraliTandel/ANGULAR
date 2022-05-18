import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from '../../../doctor-edit-profile.model';
import { DoctorEditProfilePresenterService } from '../../doctor-edit-profile-presenter/doctor-edit-profile-presenter.service';

@Component({
  selector: 'app-doctor-edit-profile-presentation',
  templateUrl: './doctor-edit-profile-presentation.component.html',
  styleUrls: ['./doctor-edit-profile-presentation.component.scss'],
})
export class DoctorEditProfilePresentationComponent implements OnInit {
  pirofileEditForm: FormGroup;

  private _pirofileData: Doctor;
  @Input() set pirofileData(value: Doctor | null) {
    if (value) {
      this._pirofileData = value;
      this.pirofileEditForm.patchValue(value);
    }
  }
  public get pirofileData(): Doctor {
    return this._pirofileData;
  }

  @Output() editData: EventEmitter<Doctor>;

  constructor(private _fb: FormBuilder, private _doctorEditProfilePresenter: DoctorEditProfilePresenterService) {
    this.pirofileEditForm = this._doctorEditProfilePresenter.buildForm();
    this.editData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  editPirofile() {
    if (this.pirofileEditForm.valid) {
      this.editData.emit(this.pirofileEditForm.value);
    }
  }
}
