import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { DdetailsComponent } from './ddetails/ddetails.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:NavbarComponent,
    children:[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'forms',
      component:FormComponent
    },
    {
      path:'Api',
      component:DdetailsComponent
    },
    {
      path:'contact',
      component:ContactComponent
    }
  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
