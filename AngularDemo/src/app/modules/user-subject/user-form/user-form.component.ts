import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  myForm: FormGroup;
  oldUser!: Users;
  isEditMode: boolean = false;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.myForm = this.buildForm();
  }

  ngOnInit(): void {
    this.userService.editUser$.subscribe((data) => {
      this.isEditMode = true;
      this.oldUser = data;
      this.myForm.patchValue(this.oldUser);
      console.log("EDIT MODE");
    });
  }

  buildForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      gender: ['1']
    });
  }

  get getvalue() {
    return this.myForm['controls'];
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm);
    if (this.myForm.status === 'VALID') {
      console.log(this.myForm);
      this.saveUser();
    }
  }

  saveUser() {
    let data = this.myForm.value;
    if (this.isEditMode) {
      data.id = this.oldUser.id;
    }
    this.userService.sendDataToSave(data);
    this.onReset();
    this.isEditMode = false;
  }

  onReset() {
    this.myForm.reset();
    this.submitted = false;
  }

}
