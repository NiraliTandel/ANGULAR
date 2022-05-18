import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorEditProfileContainerComponent } from './doctor-edit-profile-container/doctor-edit-profile-container.component';

const routes: Routes = [{
  path: '' , component: DoctorEditProfileContainerComponent
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorEditProfileRoutingModule { }
