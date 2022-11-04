import { Component, OnInit } from '@angular/core';
import { WishesService } from 'src/app/core/services/wishes.service';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.scss']
})
export class WishFormComponent implements OnInit {

  wishItem: string;
  count: number;

  constructor(
    private wishesService: WishesService
  ) {
    this.count = 0;
    this.wishItem = '';
   }

  ngOnInit(): void {
    this.getCount();
  }

  onAddButtonClick(){
    if(this.wishItem === ''){
      alert('Please enter wish text');
      return;
    }
    console.log(`Adding ${this.wishItem}`);
    this.wishesService.addWish(this.wishItem);
    this.getCount();
  }

  getCount(){
    const wishes = this.wishesService.getWishes();
    this.count = wishes.length;
  }

}
