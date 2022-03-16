import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'reactiveform', pathMatch: 'full' },
  { path: 'angularbasics', loadChildren: () => import('./modules/angularbasics/angularbasics.module').then(m => m.AngularbasicsModule) },
  { path: 'databinding', loadChildren: () => import('./modules/databinding/databinding.module').then(m => m.DatabindingModule) },
  { path: 'directivesandpipes', loadChildren: () => import('./modules/directivesandpipes/directivesandpipes.module').then(m => m.DirectivesandpipesModule) },
  { path: 'reactiveform', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'resumebuilder', loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) },
  { path: 'user-management', loadChildren: () => import('./Assessment1/user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'ngtemplateoutlet', loadChildren: () => import('./modules/ngtemplateoutlet/ngtemplateoutlet.module').then(m => m.NgtemplateoutletModule) },
  { path: 'mentor', loadChildren: () => import('./modules/mentor/mentor.module').then(m => m.MentorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
