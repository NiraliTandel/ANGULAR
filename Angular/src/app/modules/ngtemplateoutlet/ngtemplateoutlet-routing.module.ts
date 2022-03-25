import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgtemplateoutletComponent } from './ngtemplateoutlet.component';

const routes: Routes = [
  { path: '', component: NgtemplateoutletComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NgtemplateoutletRoutingModule { }
