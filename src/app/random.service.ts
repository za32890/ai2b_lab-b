import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  randomNumber(max: number): number {
    const randomFraction = Math.random();
    const randomNumber = Math.floor(randomFraction * max) + 1;

    return randomNumber;
  }


  constructor() { }
}
