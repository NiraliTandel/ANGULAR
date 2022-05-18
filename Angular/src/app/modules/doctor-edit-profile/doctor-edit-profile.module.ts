import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorEditProfileRoutingModule } from './doctor-edit-profile-routing.module';
import { DoctorEditProfileContainerComponent } from './doctor-edit-profile-container/doctor-edit-profile-container.component';
import { DoctorEditProfilePresentationComponent } from './doctor-edit-profile-container/doctor-edit-profile-presentation/doctor-edit-profile-presentation/doctor-edit-profile-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorEditProfileContainerComponent,
    DoctorEditProfilePresentationComponent
  ],
  imports: [
    CommonModule,
    DoctorEditProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class DoctorEditProfileModule { }
