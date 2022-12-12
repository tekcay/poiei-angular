import { Component } from '@angular/core';
import { IPet } from '../model/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  
  constructor(private petService: PetService) {}

  get petList(): IPet[] {
    return this.petService.pets;
  }

  onClickPet(petId: number): void {
    this.petService.onSelectPet(petId);
  }


}
