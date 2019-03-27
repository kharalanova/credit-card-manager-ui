import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CardService} from '../services/card.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {CreditCard} from '../model/creditCard';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.css']
})
export class NewCardFormComponent implements OnInit {
  cardForm: FormGroup;
  errorMessage: string;
  isCardSaved: boolean;


  @Output() cardData: EventEmitter<CreditCard> = new EventEmitter();

  constructor(private cardService: CardService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.blankCard();
    this.isCardSaved = false;
  }

  get name() {
    return this.cardForm.get('name');
  }

  get cardNumber() {
    return this.cardForm.get('cardNumber');
  }

  get cardLimit() {
    return this.cardForm.get('cardLimit');
  }


  addCard() {
    this.cardService.addCard(this.cardForm.value)
      .subscribe(
        data => {
          this.cardData.emit(data);
          this.blankCard();
          this.isCardSaved = true;
        },
        (err: HttpErrorResponse) => {
            console.error(err.error.message);
            this.errorMessage = err.error.message; },
      );

  }

  blankCard() {
    this.cardForm = this.fb.group({
      name: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardLimit: [0, Validators.min(1)]
    });
  }

}
