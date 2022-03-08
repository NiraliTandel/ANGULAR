import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtemplateoutletRoutingModule } from './ngtemplateoutlet-routing.module';
import { NgtemplateoutletComponent } from './ngtemplateoutlet.component';


@NgModule({
  declarations: [
    NgtemplateoutletComponent
  ],
  imports: [
    CommonModule,
    NgtemplateoutletRoutingModule
  ]
})
export class NgtemplateoutletModule { }
