import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent implements OnInit {
  public ngOnInit() {}

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {

  }
}
