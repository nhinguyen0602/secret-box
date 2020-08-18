import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StatisticalService } from 'src/app/service/statistical.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnChanges, OnInit {

  constructor(
    private statisticalService: StatisticalService,
  ) { }
  @Input() public choice: string;
  @Input() public year: number;
  @Input() public month: number;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    // tslint:disable-next-line:object-literal-sort-keys
    responsive: true,
  };
  public data: any[];
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Statistical'},
  ];
  public isLoading = true;

  public ngOnChanges() {
    this.getData();
  }

  public ngOnInit() {
    this.getData();
  }

  public getData() {
    this.isLoading = true;
    if (!this.year || !this.month) {
      this.year = new Date().getFullYear();
      this.month = new Date().getMonth();
    }
    this.statisticalService.getStatistical(this.month, this.year, this.choice).subscribe((res) => {
      this.barChartData[0].data = res.map((e) => e.statistical);
      this.barChartLabels = res.map((e) => e.time);
      this.isLoading = false;
    });
  }

}
