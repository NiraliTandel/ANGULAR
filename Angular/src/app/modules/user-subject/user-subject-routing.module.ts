import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSubjectComponent } from './user-subject.component';

const routes: Routes = [
  { path: '', component: UserSubjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSubjectRoutingModule { }
