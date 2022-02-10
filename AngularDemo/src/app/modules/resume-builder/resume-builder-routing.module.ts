import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeFormComponent } from './resume-builder/resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-builder/resume-view/resume-view.component';

const routes: Routes = [
  {
    path: '', component: ResumeBuilderComponent,
    children: [
      { path: '', redirectTo: 'resumeform', pathMatch: 'full' },
      { path: 'resumeform', component: ResumeFormComponent },
      { path: 'resumeview', component: ResumeViewComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
