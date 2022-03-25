import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';


@NgModule({
  declarations: [
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
