import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MembershipLevel } from 'src/app/share/model/membership-level';
import { MembershipLevelService } from 'src/app/service/membership-level.service';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/share/model/user';
import { ConfirmUpdateMembershipComponent, MembershipDialogModel } from '../confirm-update-membership/confirm-update-membership.component';

@Component({
  selector: 'app-membership-level',
  templateUrl: './membership-level.component.html',
  styleUrls: ['./membership-level.component.css']
})
export class MembershipLevelComponent implements OnInit {

  @Input() user: User;

  constructor(
    private membershipLevelService: MembershipLevelService,
    private userService: UsersService,
    public dialog: MatDialog,

  ) { }

  public favoriteSeason: string;
  public membershipLevels: MembershipLevel[];

  ngOnInit(): void {
    this.getAllMembershipLevels();
  }

  getAllMembershipLevels(){
    this.membershipLevelService.getAllMembershipLevel().subscribe(membershipLevels => this.membershipLevels = membershipLevels);
  }

  confirmDialog(idMembership: number): void {

    const dialogData = new MembershipDialogModel(idMembership, this.user);

    const dialogRef = this.dialog.open(ConfirmUpdateMembershipComponent, {
      maxWidth: '400px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(() =>
      this.userService.changeUsers.next()
    );
  }

}
