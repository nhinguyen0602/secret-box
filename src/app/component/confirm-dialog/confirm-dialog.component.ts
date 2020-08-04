import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() public message: string;
  // tslint:disable-next-line:no-output-native
  @Output() public submit = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) {}

  public ngOnInit() {
  }

  public onDismiss(): void {
    this.dialogRef.close(false);
  }

  public onConfirm() {
    this.submit.emit();
  }
}
