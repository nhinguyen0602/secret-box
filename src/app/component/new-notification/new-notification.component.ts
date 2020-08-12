import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-new-notification',
  templateUrl: './new-notification.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./new-notification.component.css'],
})
export class NewNotificationComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private _bottomSheetRef: MatBottomSheetRef<NewNotificationComponent>,
  ) { }

  public ngOnInit() {
  }

  public openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
