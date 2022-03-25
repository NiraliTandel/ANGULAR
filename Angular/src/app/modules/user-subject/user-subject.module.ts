import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSubjectRoutingModule } from './user-subject-routing.module';
import { UserSubjectComponent } from './user-subject.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserSubjectComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserSubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserSubjectModule { }
