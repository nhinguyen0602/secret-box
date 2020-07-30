import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/share/model/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private transactionService: TransactionService
  ) { }

  public transactions: Transaction[];
  displayedColumns: string[] = ['id', 'user', 'price', 'price_code', 'created_at'];
  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(){
    this.transactionService.getAllTransaction().subscribe(transactions => this.transactions = transactions);
  }

}
