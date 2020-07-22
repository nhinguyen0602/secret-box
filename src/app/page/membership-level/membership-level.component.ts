import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MembershipLevel } from 'src/app/share/model/membership-level';
import { MembershipLevelService } from 'src/app/service/membership-level.service';
import { UsersService } from 'src/app/service/users.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-membership-level',
  templateUrl: './membership-level.component.html',
  styleUrls: ['./membership-level.component.css']
})
export class MembershipLevelComponent implements OnInit {

  @Input() userId: number;

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
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel(idMembership, this.userId);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(() =>
      this.userService.changeUsers.next()
    );
  }

}
