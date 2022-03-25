import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MentorForm } from '../../mentor.model';

@Injectable()
export class MentorFormPresenterService {
  private mentorFormData: Subject<MentorForm>;
  public mentorFormData$: Observable<MentorForm>;

  constructor(private fb: FormBuilder) {
    this.mentorFormData = new Subject();
    this.mentorFormData$ = new Observable();

    this.mentorFormData$ = this.mentorFormData.asObservable();
  }

  buildForm() {
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
      date: ['', Validators.required],
      department: ['', Validators.required],
      office: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  onSubmit(mentorForm: FormGroup) {
    if (!mentorForm.valid) {
      return
    }

    this.mentorFormData.next(mentorForm.value);
  }

}
