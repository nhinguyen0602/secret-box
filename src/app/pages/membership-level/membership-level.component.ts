import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MembershipLevelService } from 'src/app/services/membership-level.service';
import { UsersService } from 'src/app/services/users.service';
import { MembershipLevel } from 'src/app/share/model/membership-level';
import { User } from 'src/app/share/model/user';
import { ConfirmUpdateMembershipComponent, MembershipDialogModel } from '../confirm-update-membership/confirm-update-membership.component';

@Component({
  selector: 'app-membership-level',
  templateUrl: './membership-level.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./membership-level.component.css'],
})
export class MembershipLevelComponent implements OnInit {

  @Input() public user: User;

  constructor(
    private membershipLevelService: MembershipLevelService,
    private userService: UsersService,
    public dialog: MatDialog,

  ) { }

  public favoriteSeason: string;
  public membershipLevels: MembershipLevel[];

  public ngOnInit(): void {
    this.getAllMembershipLevels();
  }

  private getAllMembershipLevels() {
    this.membershipLevelService.getAllMembershipLevel().subscribe((membershipLevels) => this.membershipLevels = membershipLevels);
  }

  public confirmDialog(idMembership: number): void {

    const dialogData = new MembershipDialogModel(idMembership, this.user);

    const dialogRef = this.dialog.open(ConfirmUpdateMembershipComponent, {
      maxWidth: '400px',
      // tslint:disable-next-line:object-literal-sort-keys
      data: dialogData ,
    });
    dialogRef.afterClosed().subscribe(() =>
      this.userService.changeUsers.next(),
    );
  }

}
