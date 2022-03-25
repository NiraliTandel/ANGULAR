import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularbasicsRoutingModule } from './angularbasics-routing.module';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';


@NgModule({
  declarations: [
    AngularBasicsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AngularbasicsRoutingModule
  ]
})
export class AngularbasicsModule { }
