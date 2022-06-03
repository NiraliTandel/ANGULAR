import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  submitDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
    });
    this.addressDetails = this.formBuilder.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }

  get personal() {
    return this.personalDetails.controls;
  }

  get address() {
    return this.addressDetails.controls;
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) {
        return;
      }
      this.step++;
    }
  }

  previous() {
    this.step--;
    if (this.step == 1) {
      this.personal_step = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.address_step = true;
      if (this.addressDetails.invalid) {
        return;
      }
      this.step++;
    }
  }
}
