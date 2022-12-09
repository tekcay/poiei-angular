import { Injectable } from '@angular/core';
import { IPet, Species } from './model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: IPet[] = [];
  selectedPet: IPet|undefined|null = null;
  isCreatingPet: boolean = false;

  constructor() {
    this.createPets();
   }

  togglePetCreation(): void {
    this.isCreatingPet = !this.isCreatingPet;
  } 

  onSelectPet(petId: number): void {
    this.selectedPet = this.pets.find(pet => pet.id === petId);
  }
  
  private createPets() {

    const names: string[] = ['milou', 'garfield', 'nemo', 'bugs bunny'];
    const species: Species[] = ['chien', 'chat', 'poisson', 'lapin'];
    const isAvailables: boolean[] = [true, false, true, false];
    const prices: number[] = [500, 400, 10, 50];
    const imagesURL: string[] = [
      'https://cdn001.tintin.com/public/tintin/img/static/milou/milou_v3.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png',
    'https://easydrawingguides.com/wp-content/uploads/2017/05/How-to-Draw-Nemo-20.png',
    'https://img.src.ca/2015/07/27/1250x703/150727_co2q2_aetd_bugs-bunny_sn1250.jpg'
  ];
    
    for (let i = 0; i < names.length; i++) {
      const pet = {
        id: i + 1,
         name: names[i],
          species: species[i],
           isAvailable: isAvailables[i],
            price: prices[i],
            imageUrl: imagesURL[i]
          };
      this.pets.push(pet);
    }   
  }


}
