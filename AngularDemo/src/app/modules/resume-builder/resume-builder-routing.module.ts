import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeFormComponent } from './resume-builder/resume-form/resume-form.component';

const routes: Routes = [
  {
    path: '', component: ResumeBuilderComponent,
    children: [
      { path: '', component: ResumeFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
