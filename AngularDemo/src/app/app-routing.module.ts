import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './modules/angularbasics/angular-basics/angular-basics.component';

const routes: Routes = [
  {path:'angularbasics', loadChildren: () => import('./modules/angularbasics/angularbasics.module').then(m => m.AngularbasicsModule)},
  {path:'databinding', loadChildren: () => import('./modules/databinding/databinding.module').then(m => m.DatabindingModule)},
  {path:'directivesandpipes', loadChildren: () => import('./modules/directivesandpipes/directivesandpipes.module').then(m => m.DirectivesandpipesModule)},
  {path:'reactiveform', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
