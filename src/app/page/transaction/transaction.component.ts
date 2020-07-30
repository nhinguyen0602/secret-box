import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/share/model/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {

  constructor(
    private transactionService: TransactionService,
  ) { }

  public transactions: Transaction[];
  public displayedColumns: string[] = ['id', 'user', 'price', 'price_code', 'created_at'];
  public ngOnInit(): void {
    this.getTransactions();
  }

  public getTransactions() {
    this.transactionService.getAllTransaction().subscribe((transactions) => this.transactions = transactions);
  }

}
