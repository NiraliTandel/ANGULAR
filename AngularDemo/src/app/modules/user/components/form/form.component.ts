import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/user.model';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted!: boolean;
  departmentData: Department[] = [];
  id!: number;
  isAddMode?: boolean;

  constructor(
    private fb: FormBuilder,
    private service: FormService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.myForm);

    this.getDepartmentList();
    this.getbyId();
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
    } else {
      this.updateData()
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

    this.router.navigate(['reactiveform'])
  }

  getbyId() {
    if (!this.isAddMode) {
      this.service.getById(this.id).subscribe((x) => this.myForm.patchValue(x));
    }
  }

  updateData() {
    console.log(this.myForm);
    this.service.updateUser(this.id, this.myForm.value).subscribe(
      (result) => {
        alert("Data updated successfully")
      }, (error) => {
        alert("Somthing went wrong")
      })

    this.router.navigate(['reactiveform'])
  }

  resetForm() {
    this.myForm.reset();
  }

}


