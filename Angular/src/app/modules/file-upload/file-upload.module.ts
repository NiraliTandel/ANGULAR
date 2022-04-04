import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileListPresentationComponent,
    FileUploadPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class FileUploadModule { }
