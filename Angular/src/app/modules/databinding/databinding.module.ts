import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabindingRoutingModule } from './databinding-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildComponent } from './test/child/child.component';
import { ParentComponent } from './test/parent/parent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataBindingComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    DatabindingRoutingModule,
    FormsModule
  ]
})
export class DatabindingModule { }
