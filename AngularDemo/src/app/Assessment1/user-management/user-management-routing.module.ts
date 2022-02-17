import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  { path: '', component: UserManagementComponent,
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
export class UserManagementRoutingModule { }
