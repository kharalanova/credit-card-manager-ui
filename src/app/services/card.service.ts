import {EventEmitter, Injectable, Output} from '@angular/core';
import {CreditCard} from '../model/creditCard';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>('http://localhost:8080/creditcards');
  }

  addCard(cc: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>('http://localhost:8080/creditcards', cc);

  }


}
