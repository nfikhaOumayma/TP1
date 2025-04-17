import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
=======
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidencesComponentComponent,
    NotfoundComponent,
    AddResidenceComponent,
<<<<<<< HEAD
    UpdateResidenceComponent,
=======
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AnnonceModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
