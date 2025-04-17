import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { AnnonceComponent } from './annonce.component';
import { AnnonceRoutingModule } from './annonce-routing.module';




@NgModule({
  declarations: [
    AnnonceComponent,
    ListAnnonceComponent,
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
