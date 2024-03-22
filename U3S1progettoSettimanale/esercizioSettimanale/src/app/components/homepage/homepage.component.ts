import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
cars!: Car[];
brandLogos!: Car[];
constructor() {
  this.getOurBrands().then((response) => (this.brandLogos = response));
  this.getHighlightedCars().then((response) => (this.cars = response));
}

async getOurBrands(): Promise<Car[]> {
  const response = await fetch ('../../../assets/db.json');
  const brandLogos = (await response.json()) as Array<Car>;
  const brandUnici: string[] = [];
  const iNostriBrand: Car[] = [];
  for (const brandLogo of brandLogos) {
    if (!brandUnici.includes(brandLogo.brandLogo)) {
      brandUnici.push(brandLogo.brandLogo);
      iNostriBrand.push(brandLogo);
    }
  }
  return iNostriBrand;
}

async getHighlightedCars(): Promise<Car[]> {
  const response = await fetch('../../../assets/db.json');
  const cars = (await response.json()) as Array<Car>;
  // Genera un array di indici casuali
  const randomIndexes = [...Array(cars.length).keys()].sort(() => Math.random() - 0.5);
  // Seleziona le prime 2 auto dagli indici casuali
  const highlightedCars: Car[] = [];
  for (let i = 0; i < 2; i++) {
    highlightedCars.push(cars[randomIndexes[i]]);
  }
  return highlightedCars;
}
}
//così mi restituisce tutti i car brand
  //invece io vorrei che me ne restituisse solo 2
  
  //vorrei che mi restituisse solo 2 brand a caso