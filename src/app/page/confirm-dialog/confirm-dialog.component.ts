import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  message = 'Are you sure you want to do this?';
  private idMember: number;
  private idUser: number;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel,
    private userService: UsersService) {
    this.idMember = data.idMembership;
    this.idUser = data. idUser;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    this.userService.updateMembershipLevel(this.idUser, this.idMember).subscribe();
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

}
export class ConfirmDialogModel {

  constructor(public idMembership: number, public idUser: number) {
  }
}
