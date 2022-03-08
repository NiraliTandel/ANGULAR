import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtemplateoutletRoutingModule } from './ngtemplateoutlet-routing.module';
import { NgtemplateoutletComponent } from './ngtemplateoutlet.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgtemplateoutletComponent
  ],
  imports: [
    CommonModule,
    NgtemplateoutletRoutingModule,
    FormsModule
  ]
})
export class NgtemplateoutletModule { }
