import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @Input() used: number;

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

  ngOnChanges(){
    this.pieChartData = [this.used, 100 - this.used];
  }

}
