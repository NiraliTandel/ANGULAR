import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department, User } from '../../models/user.model';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent implements OnInit {
  public modalTitle: string;
  private isAddMode: boolean;

  @Input() public id: number = 0;
  @Input() public editData: User;
  @Input() public department: Department[];

  @Output() public userData;
  @Output() public cancel;

  constructor(private fb: FormBuilder, private service: FormService) {
    this.modalTitle = 'Add User';
    this.editData = {} as User;
    this.department = [];
    this.isAddMode = true;

    this.userData = new EventEmitter<User>();
    this.cancel = new EventEmitter<String>();
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.isAddMode = false;
    }
    if (!this.isAddMode) {
      this.modalTitle = 'Edit User';
      this.myForm.patchValue(this.editData);
    }
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

  onSubmit() {
    this.userData.emit(this.myForm.value)
  }

  resetForm() {
    this.myForm.reset();
  }

  onCancel() {
    this.cancel.emit();
  }

}
