import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormPresentationComponent } from './mentor-form-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { MentorService } from './mentor.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MentorComponent,
    MentorFormContainerComponent,
    MentorListContainerComponent,
    MentorFormPresentationComponent,
    MentorListPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MentorService
  ]
})
export class MentorModule { }
