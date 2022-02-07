import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';

const routes: Routes = [
  {path:'', component: DirectivePipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesandpipesRoutingModule { }
