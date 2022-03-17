import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSubjectComponent } from './user-subject.component';

const routes: Routes = [
  { path: '', component: UserSubjectComponent,
  children: [
    { path: '', component: UserListComponent },
    { path: 'add', component: UserFormComponent },
    { path: 'cancel', component: UserListComponent },
    { path: 'edit/:id', component: UserFormComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSubjectRoutingModule { }
