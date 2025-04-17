import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { AnnonceComponent } from './annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';


const child:Routes=[
  {path:"Annonce",component:AnnonceComponent,children:[
    {path:"ListAnnonce", component:ListAnnonceComponent}
  ]},  {path:"**",component:NotfoundComponent}


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(child)
  ],
  exports:[RouterModule]
})
export class AnnonceRoutingModule { }
