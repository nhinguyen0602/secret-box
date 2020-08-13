import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private fb: FormBuilder,
  ) { }

  public notificationForm: FormGroup;

  public ngOnInit() {
    this.notificationForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  get content() { return this.notificationForm.get('content'); }

  public openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  public submitForm(): void {
    if (this.notificationForm.invalid) {
      return;
    }
  }

}
