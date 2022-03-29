import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    DeletePopupComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class SharedModule { }
