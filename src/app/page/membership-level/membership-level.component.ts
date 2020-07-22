import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MembershipLevel } from 'src/app/share/model/membership-level';
import { MembershipLevelService } from 'src/app/service/membership-level.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-membership-level',
  templateUrl: './membership-level.component.html',
  styleUrls: ['./membership-level.component.css']
})
export class MembershipLevelComponent implements OnInit {

  constructor(
    private membershipLevelService: MembershipLevelService,
    private userService: UsersService
  ) { }

  public favoriteSeason: string;
  public membershipLevels: MembershipLevel[];
  ngOnInit(): void {
    this.getAllMembershipLevels();
  }

  getAllMembershipLevels(){
    this.membershipLevelService.getAllMembershipLevel().subscribe(membershipLevels => this.membershipLevels = membershipLevels);
  }

}
