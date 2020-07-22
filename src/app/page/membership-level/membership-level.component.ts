import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/app/service/file.service';
import { MembershipLevel } from 'src/app/share/model/membership-level';
import { MembershipLevelService } from 'src/app/service/membership-level.service';

@Component({
  selector: 'app-membership-level',
  templateUrl: './membership-level.component.html',
  styleUrls: ['./membership-level.component.css']
})
export class MembershipLevelComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private membershipLevelService: MembershipLevelService
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
