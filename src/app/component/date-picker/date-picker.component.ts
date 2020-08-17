import {Component, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { StatisticalService } from 'src/app/service/statistical.service';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMMM YYYY',
  },
  // tslint:disable-next-line:object-literal-sort-keys
  display: {
    dateInput: 'MMMM YYYY',
    monthYearLabel: 'MMMM YYYY',
    // tslint:disable-next-line:object-literal-sort-keys
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      // tslint:disable-next-line:object-literal-sort-keys
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DatePickerComponent {
  @Input() public choice: string;
  public date = new FormControl(moment());
  public year: number;
  public month: number;

  constructor(
    private statisticalService: StatisticalService,
  ) { }

  public _yearSelectedHandle(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    localStorage.setItem('yearCurrent', normalizedYear.year() + '');
    if (this.choice !== 'day') {
      datepicker.close();
    }
  }

  public chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    localStorage.setItem('monthCurrent', normalizedMonth.month() + '');
    this.getData();
    datepicker.close();
  }

  public getData() {
    // tslint:disable-next-line:radix
    this.year = parseInt(localStorage.getItem('yearCurrent'));
    // tslint:disable-next-line:radix
    this.month = parseInt(localStorage.getItem('monthCurrent')) + 1;
    this.statisticalService.getStatistical(this.month, this.year).subscribe((res) => {
      console.log(res);
    });
  }

}
