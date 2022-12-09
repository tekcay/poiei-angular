import { Injectable } from '@angular/core';
import { IPet, Species } from './model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: IPet[] = [];
  selectedPet: IPet|undefined|null = null;

  constructor() {
    this.createPets();
   }

  onSelectPet(petId: number): void {
    this.selectedPet = this.pets.find(pet => pet.id === petId);
  }
  
  private createPets() {

    const names: string[] = ['milou', 'garfield', 'nemo', 'bugs bunny'];
    const species: Species[] = ['chien', 'chat', 'poisson', 'lapin'];
    const isAvailables: boolean[] = [true, false, true, false];
    const prices: number[] = [500, 400, 10, 50];
    
    for (let i = 0; i < names.length; i++) {
      const pet = {id: i + 1, name: names[i], species: species[i], isAvailable: isAvailables[i], price: prices[i]};
      this.pets.push(pet);
    }   
  }


}
