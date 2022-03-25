import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ClientPipe } from './pipes/client.pipe';
import { OfficePipe } from './pipes/office.pipe';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    UserManagementComponent,
    UserFormComponent,
    UserListComponent,
    ClientPipe,
    OfficePipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserManagementModule { }
