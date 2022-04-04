import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FileDragAndDropDirective } from './directives/file-drag-and-drop/file-drag-and-drop.directive';

@NgModule({
  declarations: [
    DeletePopupComponent,
    PaginationComponent,
    FileDragAndDropDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PaginationComponent,
    FileDragAndDropDirective
  ]
})
export class SharedModule { }
