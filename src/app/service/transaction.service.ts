import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Transaction } from '../share/model/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

  public transactionUrl = environment.apiUrl + `/transactions`;

  constructor(
    public http: HttpClient,
  ) { }

  public getAllTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl).pipe(
      map((res) => res),
    );
  }

}
