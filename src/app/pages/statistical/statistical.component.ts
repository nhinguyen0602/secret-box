import { Component, OnInit } from '@angular/core';
import { StatisticalService } from 'src/app/service/statistical.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./statistical.component.css'],
})
export class StatisticalComponent implements OnInit {

  constructor() { }
  public year: number;
  public month: number;
  public selected = 'day';

  public ngOnInit() {
  }

  public getYear(e) {
    this.year = e;
  }

  public getMonth(e) {
    this.month = e;
  }

}
