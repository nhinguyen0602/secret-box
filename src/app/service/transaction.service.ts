import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Transaction } from '../share/model/transaction';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl = environment.apiUrl + `/transactions`;

  constructor(
    private http: HttpClient
  ) { }

  getAllTransaction(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.transactionUrl).pipe(
      map(res => res)
    );
  }

}
