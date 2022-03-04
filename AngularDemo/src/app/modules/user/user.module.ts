import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './user.component';
import { FormService } from './services/form.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { DepartmentPipe } from './pipes/department.pipe';
import { FormModelComponent } from './components/form-model/form-model.component';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    UserComponent,
    UserFilterPipe,
    DepartmentPipe,
    FormModelComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule
  ],
  providers:[
    FormService
  ]
})
export class UserModule { }
