import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesandpipesRoutingModule } from './directivesandpipes-routing.module';
import { DirectivePipeComponent } from './directive-pipe/directive-pipe.component';
import { FirstcapPipe } from './firstcap.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    DirectivePipeComponent,
    FirstcapPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    DirectivesandpipesRoutingModule
  ]
})
export class DirectivesandpipesModule { }
