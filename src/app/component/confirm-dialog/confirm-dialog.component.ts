import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/share/model/user';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  message: string;
  private idMember: number;
  private user: User;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel,
    private userService: UsersService) {
    this.idMember = data.idMembership;
    this.user = data.user;
    this.message = `Are you want update membership level of ${this.user.email} ?`;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    this.userService.updateMembershipLevel(this.user.id, this.idMember).subscribe();
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

}
export class ConfirmDialogModel {
  constructor(public idMembership: number, public user: User) {
  }
}
