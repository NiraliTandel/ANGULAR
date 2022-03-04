import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from '../../models/user.model';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {
  submitted!: boolean;
  departmentData: Department[] = [];
  isAddMode?: boolean;

  @Output() cancel;

  constructor(
    private fb: FormBuilder,
    private service: FormService
  ) {
    this.cancel = new EventEmitter<String>();
  }

  ngOnInit(): void {
    console.log(this.myForm);

    this.getDepartmentList();
  }

  myForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    date: [''],
    gender: [''],
    department: ['']
  });

  get getvalue() {
    return this.myForm['controls'];
  }

  getDepartmentList() {
    this.service.getDepartment().subscribe(
      (result: Department[]) => {
        this.departmentData = result;
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }

  OnSubmit() {
    if (this.isAddMode) {
      this.saveData()
    }
  }

  saveData() {
    console.log(this.myForm);
    this.service.createUser(this.myForm.value).subscribe(
      (result) => {
        alert("Data saved successfully")
      }, (error) => {
        alert("Somthing went wrong")
      })
  }

  resetForm() {
    this.myForm.reset();
  }

  onCancel() {
    this.cancel.emit();
  }

}
