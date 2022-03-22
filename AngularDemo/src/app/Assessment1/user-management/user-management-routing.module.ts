import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '', component: UserManagementComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'cancel', component: UserListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
