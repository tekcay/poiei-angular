import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Species } from '../model/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {

  species: Species[] = ['chien', 'chat', 'poisson', 'lapin'];

  petForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    species: ['chien', Validators.required],
    price: [null, Validators.required, Validators.min(0)],
    isAvailable: [true, Validators.required],
    imageURL: ''
  });

  constructor(private formBuilder: FormBuilder, private petService: PetService) {}

  onSubmit() {
    if (this.petForm.valid) {
    } this.petService.createAndRegisterPet(
      this.petForm.value.name,
      this.petForm.value.species,
      this.petForm.value.isAvailable,
      this.petForm.value.price,
      this.petForm.value.imageURL);    
  }
}
