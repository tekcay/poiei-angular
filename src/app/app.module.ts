import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
import { PetListItemComponent } from './pet/pet-list/pet-list-item/pet-list-item.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetComponent } from './pet/pet.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PetComponent, 
    PetDetailComponent,
    PetListComponent,
    PetListItemComponent,
    AddPetComponent   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
