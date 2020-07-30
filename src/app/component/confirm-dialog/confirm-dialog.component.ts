import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() message: string;
  // tslint:disable-next-line:no-output-native
  @Output() public submit = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit() {
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  public onConfirm(){
    this.submit.emit();
  }
}
