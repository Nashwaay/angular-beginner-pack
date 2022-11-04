import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  wishes: string[];

  constructor() {
    this.wishes = [];
  }

  addWish(wish: string): void{

    // check duplicate
    const isDuplicate = this.wishes.find(x => x === wish);
    if (isDuplicate){
      alert('Please add a unique wish item');
      return;
    }

    this.wishes.push(wish);
    console.log(`Item added in the list: ${wish}`);
  }

  getWishes(): string[]{
    console.log(this.wishes);
    return this.wishes;
  }

  removeWish(index: number){
    this.wishes.splice(index,1);
  }

}
