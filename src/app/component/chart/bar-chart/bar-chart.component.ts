import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    // tslint:disable-next-line:object-literal-sort-keys
    responsive: true,
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];

  public ngOnInit() {
  }

}
