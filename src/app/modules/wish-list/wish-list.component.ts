import { Component, OnInit } from '@angular/core';
import { WishesService } from 'src/app/core/services/wishes.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  readonly columnNames = ['#', 'Wish Item', 'Action'];
  wishes: string[];

  constructor(
    private wishesService: WishesService
  ) {
    this.wishes = [];
   }

  ngOnInit(): void {
    this.getWishes();
  }

  getWishes(){
    this.wishes = this.wishesService.getWishes();
  }

  onDeleteClick(i){
    this.wishesService.removeWish(i);
    this.getWishes();
  }
}
