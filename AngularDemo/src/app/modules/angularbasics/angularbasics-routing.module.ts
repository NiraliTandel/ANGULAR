import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'', component: AngularBasicsComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'services', component: ServicesComponent},
  {path:'products', component: ProductsComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularbasicsRoutingModule { }
