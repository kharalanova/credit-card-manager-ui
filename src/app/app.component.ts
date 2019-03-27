import {Component, OnInit} from '@angular/core';
import {CreditCard} from './model/creditCard';
import {CardService} from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
   newCard: CreditCard;
  constructor() {
  }

  ngOnInit(): void {}

  newCardHandler(event: CreditCard) {
    this.newCard = event;
   }

}

