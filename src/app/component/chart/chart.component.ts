import { Component, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnChanges {
  @Input()public used: number;

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  public pieChartLabels: Label[] = [['Used'], ['Rest']];
  public pieChartData: SingleDataSet ;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public ngOnChanges() {
    this.pieChartData = [this.used, 100 - this.used];
  }

}
