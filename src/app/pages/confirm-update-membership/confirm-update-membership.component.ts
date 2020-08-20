import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/share/model/user';

@Component({
  selector: 'app-confirm-update-membership',
  templateUrl: './confirm-update-membership.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./confirm-update-membership.component.css'],
})
export class ConfirmUpdateMembershipComponent implements OnInit {
  private idMember: number;
  private user: User;
  public message: string;
  constructor(
    public dialogRef: MatDialogRef<ConfirmUpdateMembershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MembershipDialogModel,
    private userService: UsersService) {
    this.idMember = data.idMembership;
    this.user = data.user;
    this.message = `Are you want update membership level of ${this.user.email} ?`;
  }
  public ngOnInit(): void {
  }

  public onConfirm(): void {
    this.userService.updateMembershipLevel(this.user.id, this.idMember).subscribe();
    this.dialogRef.close(true);
  }

}
export class MembershipDialogModel {
  constructor(public idMembership: number, public user: User) {
  }
}
