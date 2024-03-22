import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface'

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent {
  cars!: Car[];

  constructor() {
    this.getFiatCars().then((response) => (this.cars = response));
  }

  async getFiatCars(): Promise<Car[]> {
    const response = await fetch('../../../assets/db.json');
    const cars = (await response.json()) as Array<Car>;
    const fiatCars: Car[] = [];
    for (let i = 0; i < cars.length; i++) {
      if(cars[i].brand === "Fiat") {
        fiatCars.push(cars[i]);
      }
    }
    return fiatCars;
  }
}


