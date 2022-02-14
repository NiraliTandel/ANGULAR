import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Office } from '../../models/user-management.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  submitted!: boolean;
  id!: number;
  isAddMode?: boolean;
  clientData: Client[] = [];
  officeData: Office[] = [];

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.myForm);

    this.getbyId();
    this.getClientList();
    this.getOfficeList();
  }

  myForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.maxLength(10)]],
    client: [''],
    office: ['']
  });

  get getvalue() {
    return this.myForm['controls'];
  }

  getClientList() {
    this.service.getClient().subscribe(
      (result: Client[]) => {
        this.clientData = result;
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }

  getOfficeList() {
    this.service.getOffice().subscribe(
      (result: Office[]) => {
        this.officeData = result;
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

    this.router.navigate(['user-management'])
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

    this.router.navigate(['user-management'])
  }

  resetForm() {
    this.myForm.reset();
  }

}
