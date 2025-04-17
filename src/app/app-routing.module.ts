import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const r:Routes=[
  {path:"",redirectTo:"residence",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence", component:ResidencesComponentComponent},
  {path:"addResidence", component:AddResidenceComponent},
<<<<<<< HEAD
  {path:"update/:id", component:AddResidenceComponent}
=======
>>>>>>> origin/master

]

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
