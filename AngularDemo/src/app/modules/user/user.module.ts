import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './user.component';
import { FormService } from './services/form.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFilterPipe } from './pipes/user-filter.pipe';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    UserComponent,
    UserFilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    FormService
  ]
})
export class UserModule { }
