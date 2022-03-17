import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  myForm: FormGroup;
  userToEdit!: Users;
  isEditMode: boolean = false;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.myForm = this.buildForm();
  }

  ngOnInit(): void {
    this.userService.editUser$.subscribe((data) => {
      this.isEditMode = true;
      this.userToEdit = data;
      this.myForm.patchValue(this.userToEdit);
      console.log("EDIT MODE");
    });
  }

  buildForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      gender: ['0']
    });
  }

  get getvalue() {
    return this.myForm['controls'];
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm);
    if (this.myForm.status === 'VALID') {
      this.saveUser();
    }
  }

  saveUser() {
    if (this.isEditMode) {
      if (this.userService.updateUser(this.userToEdit.id, this.myForm.value)) {
        this.onReset();
      } else {
        alert('Error occured while saving...');
      }
    } else {
      if (this.userService.addUser(this.myForm.value)) {
        this.onReset();
      } else {
        alert('Error occured while saving...');
      }
    }
    console.log(this.myForm.value);
  }

  onReset() {
    this.myForm.reset();
    this.submitted = false;
  }

}
