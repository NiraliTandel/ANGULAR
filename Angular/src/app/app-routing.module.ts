import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'angularbasics', loadChildren: () => import('./modules/angularbasics/angularbasics.module').then(m => m.AngularbasicsModule) },
  { path: 'databinding', loadChildren: () => import('./modules/databinding/databinding.module').then(m => m.DatabindingModule) },
  { path: 'directivesandpipes', loadChildren: () => import('./modules/directivesandpipes/directivesandpipes.module').then(m => m.DirectivesandpipesModule) },
  { path: 'reactiveform', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'resumebuilder', loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) },
  { path: 'user-management', loadChildren: () => import('./Assessment1/user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'ngtemplateoutlet', loadChildren: () => import('./modules/ngtemplateoutlet/ngtemplateoutlet.module').then(m => m.NgtemplateoutletModule) },
  { path: 'todo', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule) },
  { path: 'mentor', loadChildren: () => import('./modules/mentor/mentor.module').then(m => m.MentorModule) },
  { path: 'user-subject', loadChildren: () => import('./modules/user-subject/user-subject.module').then(m => m.UserSubjectModule) },
  { path: 'file-upload', loadChildren: () => import('./modules/file-upload/file-upload.module').then(m => m.FileUploadModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
