import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
      'Ford','Toyota','Chevrolet','Volkswagen'
  ]

  myData() {
      return `The coolest models around: ${this.cars}`
  }
}
