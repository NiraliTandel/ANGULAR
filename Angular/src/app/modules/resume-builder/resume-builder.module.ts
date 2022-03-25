import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeFormComponent } from './resume-builder/resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-builder/resume-view/resume-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeService } from './services/resume.service';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeFormComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeBuilderModule { }
