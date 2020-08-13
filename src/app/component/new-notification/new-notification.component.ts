import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NotificationService } from 'src/app/service/notification.service';

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
    private notificationService: NotificationService,
  ) { }

  public notificationForm: FormGroup;

  public ngOnInit() {
    this.notificationForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  get message() { return this.notificationForm.get('message'); }

  public openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  public submitForm(): void {
    if (this.notificationForm.invalid) {
      return;
    }
    this.notificationService.pushNotification(this.message.value).subscribe( (res) => {
      this.notificationForm.reset();
      this._bottomSheetRef.dismiss();
    });
  }

}
