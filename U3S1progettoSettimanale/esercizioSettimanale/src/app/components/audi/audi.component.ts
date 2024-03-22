import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface'

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {
  cars!: Car[];

  constructor() {
    this.getAudiCars().then((response) => (this.cars = response));
  }

  async getAudiCars(): Promise<Car[]> {
    const response = await fetch('../../../assets/db.json');
    const cars = (await response.json()) as Array<Car>;
    const audiCars: Car[] = [];
    for (let i = 0; i < cars.length; i++) {
      if(cars[i].brand === "Audi") {
        audiCars.push(cars[i]);
      }
    }
    return audiCars;
  }
}
