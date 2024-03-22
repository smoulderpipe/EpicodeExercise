import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface'

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})
export class FordComponent {
  cars!: Car[];

  constructor() {
    this.getFordCars().then((response) => (this.cars = response));
  }

  async getFordCars(): Promise<Car[]> {
    const response = await fetch('../../../assets/db.json');
    const cars = (await response.json()) as Array<Car>;
    const fordCars: Car[] = [];
    for (let i = 0; i < cars.length; i++) {
      if(cars[i].brand === "Ford") {
        fordCars.push(cars[i]);
      }
    }
    return fordCars;
  }
}
