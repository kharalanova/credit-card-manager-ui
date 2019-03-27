import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CreditCard} from '../model/creditCard';
import {CardService} from '../services/card.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit, OnDestroy {

  creditCards: CreditCard[];
  subscription: Subscription;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
     this.subscription = this.cardService.getAll().subscribe((cards: CreditCard[]) => {
       this.creditCards = cards;
     });
  }

  @Input() set newCard(value: CreditCard) {
    if (undefined !== this.creditCards) {
      this.creditCards.push(value);
    }
}


  ngOnDestroy(): void {
     this.subscription.unsubscribe();
  }


}
