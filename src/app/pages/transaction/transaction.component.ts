import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/share/model/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['id', 'user', 'price', 'price_code', 'created_at'];
  public dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;

  constructor(
    private transactionService: TransactionService,
  ) {
    this.dataSource = new MatTableDataSource(this.transactions);
  }

  public transactions: Transaction[];
  public ngOnInit(): void {
    this.getTransactions();
  }

  public getTransactions() {
    this.transactionService.getAllTransaction().subscribe((transactions) => {
      this.transactions = transactions;
      this.dataSource.data = this.transactions;
    });
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
